/**
 * Vite-compatible static prerender.
 * Serves dist/spa, visits each public URL, writes HTML snapshots.
 *
 * The Vite shell is kept as spa.html. Unknown routes fall back to that file,
 * not to the homepage snapshot in index.html.
 *
 * /blog is skipped until image compression: the index requests every card image.
 * Set PRERENDER_ONLY=/a,/b to snapshot a subset.
 */
import { execSync } from "child_process";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SPA_ROOT = path.resolve(__dirname, "../dist/spa");
const SITEMAP = path.resolve(__dirname, "../public/sitemap.xml");
const PORT = 45678;

/** The blog index embeds every card image. Leave it as the shell until those files are smaller. */
const SKIP_ROUTES = new Set(["/blog"]);

function shouldSkipPrerender() {
  return process.env.SKIP_PRERENDER === "1" || process.env.SKIP_PRERENDER === "true";
}

function routeToFile(route) {
  if (route === "/") return path.join(SPA_ROOT, "index.html");
  const clean = route.replace(/^\//, "").replace(/\/$/, "");
  return path.join(SPA_ROOT, clean, "index.html");
}

async function routesFromSitemap() {
  const xml = await fs.readFile(SITEMAP, "utf8");
  const paths = new Set();
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const url = new URL(match[1]);
    const route = url.pathname.replace(/\/$/, "") || "/";
    if (!SKIP_ROUTES.has(route)) paths.add(route);
  }
  const only = (process.env.PRERENDER_ONLY || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const list = [...paths];
  if (!only.length) return list;
  return list.filter((route) => only.includes(route));
}

function installChromeLibraries() {
  if (process.env.VERCEL !== "1" && process.env.VERCEL !== "true") return;
  const attempts = [
    "dnf install -y nss nspr atk at-spi2-atk cups-libs libdrm libXcomposite libXdamage libXrandr mesa-libgbm pango alsa-lib gtk3",
    "apt-get update && apt-get install -y libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libxcomposite1 libxdamage1 libxrandr2 libgbm1 libpango-1.0-0 libasound2 libgtk-3-0",
  ];
  for (const command of attempts) {
    try {
      execSync(command, { stdio: "inherit" });
      return;
    } catch {
      /* try the other package manager */
    }
  }
  console.warn("Could not install Chrome libraries. Puppeteer will try to launch anyway.");
}

function startServer(handler) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) =>
      handler(req, res, {
        public: SPA_ROOT,
        rewrites: [{ source: "**", destination: "/spa.html" }],
      })
    );
    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });
}

async function snapshotRoute(page, route) {
  const url = `http://127.0.0.1:${PORT}${route}`;
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  const isArticle = route.startsWith("/blog/");
  if (isArticle) {
    await page.waitForSelector('[data-article-ready="true"]', { timeout: 45000 });
  }
  await page.waitForFunction(
    (expected) => {
      const root = document.querySelector("#root");
      if ((root?.innerHTML?.length ?? 0) < 200) return false;
      if (!(root.querySelector("h1")?.textContent || "").trim()) return false;
      const animated = document.querySelector(".page-animate");
      if (animated && parseFloat(getComputedStyle(animated).opacity) < 0.99) return false;
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "";
      if (!canonical) return true;
      try {
        const path = new URL(canonical).pathname.replace(/\/$/, "") || "/";
        return path === expected;
      } catch {
        return false;
      }
    },
    { timeout: 45000 },
    route
  );
  await page.evaluate(() => {
    document.querySelectorAll('script[src*="elfsight"], script[src*="google-analytics"], script[src*="googletagmanager"]').forEach((node) => node.remove());
  });
  const hasHeading = await page.evaluate(() => (document.querySelector("#root h1")?.textContent || "").trim().length > 0);
  const html = await page.content();
  if (!hasHeading || html.includes('<div id="root"></div>')) {
    throw new Error("snapshot has no h1 inside #root");
  }
  const out = routeToFile(route);
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, html, "utf8");
  return out;
}

async function prerender() {
  if (shouldSkipPrerender()) {
    console.log("⏭️  Skipping Puppeteer prerender (SKIP_PRERENDER).");
    return;
  }

  installChromeLibraries();

  try {
    await fs.access(path.join(SPA_ROOT, "index.html"));
  } catch {
    console.error("❌ dist/spa/index.html missing — run npm run build:client first");
    process.exit(1);
  }

  const routes = await routesFromSitemap();
  if (!routes.length) {
    console.error("❌ No prerender routes. public/sitemap.xml is missing or empty.");
    process.exit(1);
  }

  await fs.copyFile(path.join(SPA_ROOT, "index.html"), path.join(SPA_ROOT, "spa.html"));

  const { default: puppeteer } = await import("puppeteer");
  const { default: handler } = await import("serve-handler");
  const server = await startServer(handler);
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const failed = [];
  try {
    const page = await browser.newPage();
    await page.setUserAgent("ReactSnap");
    await page.setViewport({ width: 1280, height: 800 });
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const u = req.url();
      const type = req.resourceType();
      if (
        u.includes("google-analytics") ||
        u.includes("googletagmanager") ||
        u.includes("fonts.googleapis.com") ||
        u.includes("elfsight.com") ||
        type === "image" ||
        type === "media"
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });

    for (const route of routes) {
      console.log(`→ Visiting ${route}`);
      let saved = false;
      let lastError = null;
      for (let attempt = 1; attempt <= 2 && !saved; attempt += 1) {
        try {
          const out = await snapshotRoute(page, route);
          console.log(`✅ prerendered ${route} → ${path.relative(SPA_ROOT, out)}`);
          saved = true;
        } catch (err) {
          lastError = err;
          console.error(`❌ prerender failed for ${route} (attempt ${attempt}):`, err.message || err);
        }
      }
      if (!saved) failed.push(`${route}: ${lastError?.message || "unknown"}`);
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`\n✅ Prerendered ${routes.length - failed.length} of ${routes.length} routes in ${SPA_ROOT}`);
  console.log("Skipped /blog (image weight). Unknown URLs fall back to spa.html.");
  if (failed.length) {
    console.error(failed.join("\n"));
    process.exit(1);
  }
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});

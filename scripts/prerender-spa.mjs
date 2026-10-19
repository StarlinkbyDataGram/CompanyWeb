/**
 * Vite-compatible static prerender.
 * Serves dist/spa, visits each public URL, writes HTML snapshots.
 *
 * The Vite shell is kept as spa.html. Unknown routes fall back to that file,
 * not to the homepage snapshot in index.html.
 *
 * Set PRERENDER_ONLY=/a,/b to snapshot a subset.
 */
import { execSync } from "child_process";
import { existsSync } from "fs";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SPA_ROOT = path.resolve(__dirname, "../dist/spa");
const SITEMAP = path.resolve(__dirname, "../public/sitemap.xml");
const PORT = 45678;

/** The blog index embeds every card image. Leave it as the shell until those files are smaller. */
const SKIP_ROUTES = new Set();

function isVercel() {
  return process.env.VERCEL === "1" || process.env.VERCEL === "true";
}

function shouldSkipPrerender() {
  const skip = process.env.SKIP_PRERENDER === "1" || process.env.SKIP_PRERENDER === "true";
  if (!skip) return false;
  // Never silently ship the empty Vite shell from a Vercel build.
  if (isVercel() && process.env.ALLOW_SKIP_PRERENDER !== "1" && process.env.ALLOW_SKIP_PRERENDER !== "true") {
    console.error(
      "SKIP_PRERENDER is set, but this is a Vercel build. Refusing to skip — production would serve an empty #root.\n" +
        "Unset SKIP_PRERENDER, or set ALLOW_SKIP_PRERENDER=1 only for an emergency shell deploy.",
    );
    process.exit(1);
  }
  return true;
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
  if (!isVercel()) return;
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

/**
 * pnpm 10 does not run dependency postinstall scripts, so Puppeteer's Chrome
 * build is never downloaded. Vercel also does not keep /vercel/.cache/puppeteer
 * between builds. Fetch the pinned Chrome only when the binary is missing.
 */
async function ensureChrome(puppeteer) {
  const executable = puppeteer.executablePath();
  if (existsSync(executable)) return executable;

  console.log(`Chrome for Puppeteer is not installed (${executable}).`);
  console.log("Downloading the Chrome build this Puppeteer version expects…");
  process.env.PUPPETEER_CHROME_HEADLESS_SHELL_SKIP_DOWNLOAD ??= "true";
  const { downloadBrowsers } = await import("puppeteer/internal/node/install.js");
  await downloadBrowsers();

  const installed = puppeteer.executablePath();
  if (!existsSync(installed)) {
    throw new Error(`Chrome is still missing after download (looked in ${installed}).`);
  }
  return installed;
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
      // Lazy route chunks + Suspense: wait until main has real section content.
      if ((root.querySelector("main")?.innerText || "").trim().length < 80) return false;
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
    // Keep entry + vendor (+ motion) preloads; drop lazy route chunk hints left by React.lazy.
    const keep = /\/assets\/(index-|vendor-|motion-)/;
    document.querySelectorAll('link[rel="modulepreload"]').forEach((node) => {
      const href = node.getAttribute("href") || "";
      if (href.includes("/assets/") && !keep.test(href)) node.remove();
    });
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
  await ensureChrome(puppeteer);
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
  console.log("Unknown URLs fall back to spa.html.");
  if (failed.length) {
    console.error(failed.join("\n"));
    process.exit(1);
  }

  // Break the HTML→CSS render-blocking chain on snapshots (keep spa.html linked).
  const inlined = await inlineCssOnPrerenderedPages();
  console.log(`Inlined CSS into ${inlined} prerendered HTML file(s).`);

  // Integrity gate: fail if home (and lab routes) are still the empty shell.
  const { execFileSync } = await import("child_process");
  execFileSync(process.execPath, [path.resolve(__dirname, "check-prerender.mjs")], {
    stdio: "inherit",
    env: process.env,
  });
}

/**
 * Replace the blocking stylesheet <link> with an inline <style> so first paint
 * does not wait on a second network hop. Leaves a preload hint for cache warmth.
 * spa.html keeps the normal blocking link for client-only fallsbacks.
 */
async function inlineCssOnPrerenderedPages() {
  const cssLinkRe = /<link\b[^>]*href="([^"]+\.css)"[^>]*>/i;
  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    let count = 0;
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        count += await walk(full);
        continue;
      }
      if (entry.name !== "index.html") continue;
      let html = await fs.readFile(full, "utf8");
      const match = html.match(cssLinkRe);
      if (!match) continue;
      if (html.includes("data-inlined-css")) continue;
      const href = match[1];
      const cssFile = path.join(SPA_ROOT, href.replace(/^\//, ""));
      try {
        await fs.access(cssFile);
      } catch {
        continue;
      }
      const css = await fs.readFile(cssFile, "utf8");
      const replacement =
        `<style data-inlined-css="1">${css}</style>\n` +
        `<link rel="preload" href="${href}" as="style" />`;
      html = html.replace(match[0], replacement);
      await fs.writeFile(full, html, "utf8");
      count += 1;
    }
    return count;
  }
  return walk(SPA_ROOT);
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});

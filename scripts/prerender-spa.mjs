/**
 * Vite-compatible static prerender (replaces react-snap when Puppeteer is too old for modern bundles).
 * Serves dist/spa, visits each route, writes HTML snapshots for crawlers.
 *
 * Skipped on Vercel: Puppeteer/Chrome cannot launch in the build image (missing libs).
 * Run `pnpm prerender` locally after `pnpm build:client` to generate static HTML snapshots.
 */
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SPA_ROOT = path.resolve(__dirname, "../dist/spa");
const PORT = 45678;

/** Keep in sync with client/data/landing/snap-routes.ts */
const ROUTES = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/faq",
  "/blog",
  "/locations",
  "/guide/starlink-nigeria",
  "/starlink-offshore-maritime-installation",
  "/starlink-enterprise-nigeria",
  "/starlink-home-installation",
  "/starlink-boat-installation",
  "/starlink-installation-abuja",
  "/starlink-installation-lagos",
  "/starlink-installation-rivers-state-port-harcourt",
  "/starlink-installation-delta-state",
  "/starlink-installation-bayelsa-yenagoa",
  "/starlink-installation-imo-state-owerri",
  "/starlink-installation-abia-state",
  "/starlink-installation-enugu-state",
  "/starlink-installation-edo-state-benin",
  "/starlink-installation-niger-delta",
  "/blog/how-much-does-starlink-installation-cost-nigeria-2026",
  "/blog/starlink-vs-fibre-internet-lagos",
  "/blog/starlink-offshore-niger-delta-specs",
  "/blog/power-backup-starlink-nigeria",
  "/blog/how-to-activate-starlink-nigeria",
];

function shouldSkipPrerender() {
  if (process.env.SKIP_PRERENDER === "1" || process.env.SKIP_PRERENDER === "true") return true;
  if (process.env.VERCEL === "1" || process.env.VERCEL === "true") return true;
  return false;
}

function routeToFile(route) {
  if (route === "/") return path.join(SPA_ROOT, "index.html");
  const clean = route.replace(/^\//, "").replace(/\/$/, "");
  return path.join(SPA_ROOT, clean, "index.html");
}

function startServer(handler) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) =>
      handler(req, res, {
        public: SPA_ROOT,
        rewrites: [{ source: "**", destination: "/index.html" }],
      })
    );
    server.listen(PORT, () => resolve(server));
  });
}

async function prerender() {
  if (shouldSkipPrerender()) {
    console.log(
      "⏭️  Skipping Puppeteer prerender (Vercel/CI or SKIP_PRERENDER). SPA deploys as client-rendered; run `pnpm prerender` locally for static HTML snapshots."
    );
    return;
  }

  const { default: puppeteer } = await import("puppeteer");
  const { default: handler } = await import("serve-handler");

  try {
    await fs.access(path.join(SPA_ROOT, "index.html"));
  } catch {
    console.error("❌ dist/spa/index.html missing — run npm run build:client first");
    process.exit(1);
  }

  const server = await startServer(handler);
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const u = req.url();
      if (u.includes("google-analytics") || u.includes("googletagmanager") || u.includes("fonts.googleapis.com")) {
        req.abort();
      } else {
        req.continue();
      }
    });

    for (const route of ROUTES) {
      const url = `http://127.0.0.1:${PORT}${route}`;
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForFunction(
        () => (document.querySelector("#root")?.innerHTML?.length ?? 0) > 200,
        { timeout: 45000 }
      );
      await new Promise((r) => setTimeout(r, 800));

      const html = await page.content();
      const out = routeToFile(route);
      await fs.mkdir(path.dirname(out), { recursive: true });
      await fs.writeFile(out, html, "utf8");
      console.log(`✅ prerendered ${route} → ${path.relative(SPA_ROOT, out)}`);
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`\n✅ Prerendered ${ROUTES.length} routes in ${SPA_ROOT}`);
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});

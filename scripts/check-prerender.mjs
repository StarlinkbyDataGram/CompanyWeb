/**
 * Fail the build if prerendered HTML is missing or still the empty Vite shell.
 * Checks the 7 Stage A/C lab routes by default.
 *
 *   node scripts/check-prerender.mjs
 *   PRERENDER_CHECK_ROUTES=/,/blog node scripts/check-prerender.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const spa = path.join(root, "dist", "spa");

const DEFAULT_ROUTES = [
  "/",
  "/starlink-offshore-maritime-installation",
  "/starlink-installation-lagos",
  "/blog",
  "/blog/how-much-is-starlink-nigeria-price-naira-2026",
  "/our-work",
  "/products",
];

const routes = (process.env.PRERENDER_CHECK_ROUTES || DEFAULT_ROUTES.join(","))
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);

function fileFor(route) {
  if (route === "/") return path.join(spa, "index.html");
  return path.join(spa, route.replace(/^\//, ""), "index.html");
}

function analyze(route) {
  const file = fileFor(route);
  if (!fs.existsSync(file)) {
    return { route, file, ok: false, reason: "missing file" };
  }
  const html = fs.readFileSync(file, "utf8");
  const bytes = Buffer.byteLength(html);
  // Vite shell is ~5 KB with a literal empty root. Prerendered pages nest a full tree inside #root.
  const emptyRoot = /<div id="root"><\/div>/.test(html);
  const rootOpen = html.indexOf('<div id="root">');
  const afterRoot = rootOpen >= 0 ? html.slice(rootOpen, rootOpen + 4000) : "";
  const hasH1 = /<h1\b/i.test(html);
  const hasHeroImg =
    route !== "/" ||
    /StandardDish1/i.test(html) ||
    /fetchpriority=["']high["']/i.test(html);

  if (bytes < 20_000) {
    return { route, file, ok: false, reason: `too small (${bytes} B) — looks like the Vite shell`, bytes, hasH1, hasHeroImg };
  }
  if (emptyRoot || rootOpen < 0) {
    return { route, file, ok: false, reason: "empty #root", bytes, hasH1, hasHeroImg };
  }
  if (afterRoot.replace(/\s+/g, "").length < 200) {
    return { route, file, ok: false, reason: "#root has no meaningful markup", bytes, hasH1, hasHeroImg };
  }
  if (!hasH1) {
    return { route, file, ok: false, reason: "no <h1> in document", bytes, hasH1, hasHeroImg };
  }
  if (route === "/" && !hasHeroImg) {
    return { route, file, ok: false, reason: "home HTML missing hero image", bytes, hasH1, hasHeroImg };
  }

  return { route, file, ok: true, bytes, hasH1, hasHeroImg };
}

const rows = routes.map(analyze);
for (const row of rows) {
  const status = row.ok ? "OK" : "FAIL";
  console.log(`${status} ${row.route} ${row.bytes ?? "—"}B ${row.reason || ""}`.trim());
}

const spaShell = path.join(spa, "spa.html");
if (!fs.existsSync(spaShell)) {
  console.error("FAIL spa.html missing — unknown routes would 404 or serve the wrong document");
  process.exit(1);
}
const spaBytes = fs.statSync(spaShell).size;
if (spaBytes > 30_000) {
  console.warn(`WARN spa.html is ${spaBytes}B — expected the small Vite shell (~5 KB)`);
}

const failed = rows.filter((row) => !row.ok);
if (failed.length) {
  console.error(`\nPrerender check failed for ${failed.length} route(s). Production must not ship the empty shell.`);
  process.exit(1);
}

console.log(`\nPrerender check ok (${rows.length} routes). spa.html ${spaBytes}B`);

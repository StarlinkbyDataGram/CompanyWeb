/**
 * Fail the build if first-load JS (script tags in the Vite shell) exceeds 250 KB gzip.
 * Set SKIP_JS_BUDGET=1 to bypass (emergency only).
 */
import fs from "fs";
import path from "path";
import zlib from "zlib";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist/spa");
const LIMIT = 250 * 1024;

if (process.env.SKIP_JS_BUDGET === "1") {
  console.log("JS budget skipped (SKIP_JS_BUDGET=1)");
  process.exit(0);
}

const shellCandidates = ["spa.html", "index.html"].map((name) => path.join(dist, name));
const shell = shellCandidates.find((file) => fs.existsSync(file));
if (!shell) {
  console.error("JS budget: no dist/spa shell found (run vite build first)");
  process.exit(1);
}

const html = fs.readFileSync(shell, "utf8");
const scripts = [
  ...html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi),
  ...html.matchAll(/<link[^>]+rel=["']modulepreload["'][^>]+href=["']([^"']+)["']/gi),
  ...html.matchAll(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']modulepreload["']/gi),
].map((match) => match[1]);
const local = [...new Set(
  scripts
    .map((src) => src.split("?")[0])
    .filter((src) => src.startsWith("/assets/") && src.endsWith(".js")),
)];

if (!local.length) {
  console.error("JS budget: no /assets/*.js script tags in", path.relative(root, shell));
  process.exit(1);
}

let total = 0;
const rows = [];
for (const src of local) {
  const file = path.join(dist, src.replace(/^\//, ""));
  if (!fs.existsSync(file)) {
    console.error(`JS budget: missing ${src}`);
    process.exit(1);
  }
  const raw = fs.readFileSync(file);
  const gzip = zlib.gzipSync(raw, { level: 9 }).length;
  total += gzip;
  rows.push({ src, gzip });
}

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
console.log(
  `First-load JS (gzip): ${kb(total)} across ${rows.length} file(s)\n` +
    rows.map((row) => `  ${row.src} ${kb(row.gzip)}`).join("\n"),
);

if (total > LIMIT) {
  console.error(`JS budget: ${kb(total)} exceeds ${kb(LIMIT)}`);
  process.exit(1);
}
console.log("JS budget ok");

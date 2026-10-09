/**
 * Extract title / description / canonical / OG / JSON-LD from prerendered HTML
 * for the 7 test URLs. Optionally compare to perf/seo-baseline.json.
 *
 * Usage:
 *   node perf/seo-check.mjs                 # print + write perf/seo-final.json
 *   node perf/seo-check.mjs --compare       # compare seo-final to seo-baseline
 *   node perf/seo-check.mjs --write-baseline
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist/spa");
const urls = [
  "/",
  "/starlink-offshore-maritime-installation",
  "/starlink-installation-lagos",
  "/blog",
  "/blog/how-much-is-starlink-nigeria-price-naira-2026",
  "/our-work",
  "/products",
];

function routeFile(route) {
  if (route === "/") return path.join(dist, "index.html");
  return path.join(dist, route.replace(/^\//, ""), "index.html");
}

function attr(html, re) {
  const match = html.match(re);
  return match ? match[1].trim() : null;
}

function extract(html) {
  const title = attr(html, /<title[^>]*>([^<]*)<\/title>/i);
  const description = attr(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)
    || attr(html, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  const canonical = attr(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i)
    || attr(html, /<link[^>]+href=["']([^"']*)["'][^>]+rel=["']canonical["']/i);
  const ogTitle = attr(html, /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']*)["']/i)
    || attr(html, /<meta[^>]+content=["']([^"']*)["'][^>]+property=["']og:title["']/i);
  const ogDescription = attr(html, /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']*)["']/i)
    || attr(html, /<meta[^>]+content=["']([^"']*)["'][^>]+property=["']og:description["']/i);
  const ogUrl = attr(html, /<meta[^>]+property=["']og:url["'][^>]+content=["']([^"']*)["']/i)
    || attr(html, /<meta[^>]+content=["']([^"']*)["'][^>]+property=["']og:url["']/i);
  const jsonLd = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((m) => {
      try {
        return JSON.parse(m[1]);
      } catch {
        return m[1].trim();
      }
    });
  const root = html.includes('<div id="root">') ? html.slice(html.indexOf('<div id="root">')) : html;
  const h1 = attr(root, /<h1[^>]*>([\s\S]*?)<\/h1>/i)?.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() || null;
  const hasMain = /<(main|article)\b/i.test(root) || (root.match(/<p\b/gi) || []).length >= 2;
  return {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogUrl,
    jsonLdCount: jsonLd.length,
    jsonLdTypes: jsonLd.map((item) => item?.["@type"] || typeof item).slice(0, 8),
    h1,
    h1InRoot: Boolean(h1),
    hasMainContent: hasMain,
  };
}

function loadAll() {
  const out = {};
  for (const url of urls) {
    const file = routeFile(url);
    if (!fs.existsSync(file)) {
      out[url] = { error: `missing ${path.relative(root, file)}` };
      continue;
    }
    out[url] = extract(fs.readFileSync(file, "utf8"));
  }
  return out;
}

const writeBaseline = process.argv.includes("--write-baseline");
const compare = process.argv.includes("--compare");
const data = loadAll();
const finalPath = path.join(root, "perf/seo-final.json");
fs.writeFileSync(finalPath, JSON.stringify(data, null, 2) + "\n");
console.log(`Wrote ${path.relative(root, finalPath)}`);

if (writeBaseline) {
  const baselinePath = path.join(root, "perf/seo-baseline.json");
  fs.writeFileSync(baselinePath, JSON.stringify(data, null, 2) + "\n");
  console.log(`Wrote ${path.relative(root, baselinePath)}`);
}

if (compare) {
  const baselinePath = path.join(root, "perf/seo-baseline.json");
  if (!fs.existsSync(baselinePath)) {
    console.error("Missing perf/seo-baseline.json — run with --write-baseline on the before build, or compare live titles manually.");
    process.exit(1);
  }
  const before = JSON.parse(fs.readFileSync(baselinePath, "utf8"));
  const keys = ["title", "description", "canonical", "ogTitle", "ogDescription", "ogUrl"];
  let ok = true;
  for (const url of urls) {
    const a = before[url] || {};
    const b = data[url] || {};
    const diffs = [];
    for (const key of keys) {
      if ((a[key] || null) !== (b[key] || null)) diffs.push(`${key}: ${JSON.stringify(a[key])} → ${JSON.stringify(b[key])}`);
    }
    if (!b.h1InRoot) diffs.push("missing h1 in #root");
    if (!b.hasMainContent) diffs.push("missing main content signals");
    if (diffs.length) {
      ok = false;
      console.log(`FAIL ${url}\n  ${diffs.join("\n  ")}`);
    } else {
      console.log(`OK   ${url} — title/description/canonical/OG unchanged; h1 present`);
    }
  }
  process.exit(ok ? 0 : 1);
}

for (const url of urls) {
  const row = data[url];
  if (row.error) {
    console.log(`FAIL ${url} ${row.error}`);
    continue;
  }
  console.log(
    `${row.h1InRoot && row.hasMainContent ? "OK" : "WARN"} ${url}\n` +
      `  title: ${row.title}\n` +
      `  canonical: ${row.canonical}\n` +
      `  h1: ${row.h1}\n` +
      `  json-ld: ${row.jsonLdCount} (${row.jsonLdTypes.join(", ")})`,
  );
}

/**
 * Stage A: Lighthouse compare live vs local shell vs local prerender.
 * Writes perf/results/stage-a/compare.json
 */
import lighthouse from "lighthouse";
import puppeteer from "puppeteer";
import fs from "fs";
import http from "http";
import path from "path";
import zlib from "zlib";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const spa = path.join(root, "dist", "spa");
const port = 4175;
const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".woff2": "font/woff2",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".webmanifest": "application/manifest+json",
  ".txt": "text/plain",
};

function startServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url || "/", "http://127.0.0.1");
    const rel = decodeURIComponent(url.pathname).replace(/^\/+/, "");
    const candidates = rel ? [rel, path.join(rel, "index.html"), "spa.html"] : ["index.html"];
    let file = null;
    for (const candidate of candidates) {
      const abs = path.resolve(spa, candidate);
      if (!abs.startsWith(spa + path.sep) && abs !== spa) continue;
      if (fs.existsSync(abs) && fs.statSync(abs).isFile()) {
        file = abs;
        break;
      }
    }
    if (!file) {
      res.writeHead(404);
      res.end("not found");
      return;
    }
    const ext = path.extname(file).toLowerCase();
    let body = fs.readFileSync(file);
    const headers = {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "Cache-Control": "no-store",
    };
    if ([".html", ".js", ".css"].includes(ext) && body.length > 256 && (req.headers["accept-encoding"] || "").includes("br")) {
      body = zlib.brotliCompressSync(body);
      headers["Content-Encoding"] = "br";
    }
    headers["Content-Length"] = body.length;
    res.writeHead(200, headers);
    res.end(body);
  });
  return new Promise((resolve) => server.listen(port, "127.0.0.1", () => resolve(server)));
}

function summarize(lhr) {
  const n = (id) => lhr.audits[id]?.numericValue ?? null;
  const discovery = lhr.audits["lcp-discovery-insight"]?.details?.items?.find((i) => i.type === "checklist")?.items;
  const breakdown = lhr.audits["lcp-breakdown-insight"]?.details?.items?.find((i) => i.type === "table")?.items;
  const blocking = lhr.audits["render-blocking-insight"]?.details?.items || [];
  return {
    perf: lhr.categories.performance?.score != null ? Math.round(lhr.categories.performance.score * 100) : null,
    fcp: n("first-contentful-paint"),
    lcp: n("largest-contentful-paint"),
    tbt: n("total-blocking-time"),
    cls: n("cumulative-layout-shift"),
    si: n("speed-index"),
    ttfb: n("server-response-time"),
    transfer: n("total-byte-weight"),
    lcpDiscovery: discovery || null,
    lcpBreakdown: breakdown || null,
    renderBlockingMs: blocking.reduce((sum, item) => sum + (item.wastedMs || 0), 0),
    htmlBytesHint: null,
  };
}

async function main() {
  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });
  const chromePort = Number(new URL(browser.wsEndpoint()).port);
  const results = [];

  async function run(url, label) {
    console.log(`→ ${label} ${url}`);
    const { lhr } = await lighthouse(url, {
      logLevel: "error",
      output: "json",
      port: chromePort,
      onlyCategories: ["performance"],
    });
    const row = { label, url, ...summarize(lhr) };
    console.log(
      `  perf ${row.perf} LCP ${Math.round(row.lcp || 0)} FCP ${Math.round(row.fcp || 0)} TBT ${Math.round(row.tbt || 0)} SI ${Math.round(row.si || 0)}`,
    );
    results.push(row);
    const out = path.join(root, "perf", "results", "stage-a", `${label}.json`);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, JSON.stringify({ ...row, auditsSample: {
      forced: lhr.audits["forced-reflow-insight"]?.details?.items?.[0],
      unusedJs: lhr.audits["unused-javascript"]?.details?.items?.slice(0, 3),
      imageDelivery: lhr.audits["image-delivery-insight"]?.displayValue,
    }}, null, 2));
    return row;
  }

  try {
    for (let i = 1; i <= 3; i += 1) {
      try {
        await run("https://www.datagram.ng/", `live-${i}`);
      } catch (error) {
        console.error(`live-${i} failed`, error.message || error);
        results.push({ label: `live-${i}`, error: String(error.message || error) });
      }
    }

    // Ensure prerendered home is active
    if (fs.existsSync(path.join(spa, "index.prerendered.html"))) {
      fs.copyFileSync(path.join(spa, "index.prerendered.html"), path.join(spa, "index.html"));
    }
    await run(`http://127.0.0.1:${port}/`, "local-prerender");

    fs.copyFileSync(path.join(spa, "spa.html"), path.join(spa, "index.html"));
    await run(`http://127.0.0.1:${port}/`, "local-shell");
    if (fs.existsSync(path.join(spa, "index.prerendered.html"))) {
      fs.copyFileSync(path.join(spa, "index.prerendered.html"), path.join(spa, "index.html"));
    }
  } finally {
    await browser.close().catch(() => {});
    await new Promise((resolve) => server.close(resolve));
  }

  const outDir = path.join(root, "perf", "results", "stage-a");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "compare.json"), JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2));
  console.log("→ wrote perf/results/stage-a/compare.json");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

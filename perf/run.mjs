/**
 * Production-build performance harness.
 *
 *   npm run perf -- <label>
 *
 * Builds (unless PERF_SKIP_BUILD=1), serves dist/spa with Brotli for text,
 * runs Lighthouse mobile defaults (simulated Slow 4G, 4x CPU) PERF_RUNS times
 * (default 3) for every URL in perf/urls.json, then records prerender HTML,
 * hydration console, screenshots, and interaction long tasks.
 *
 * PERF_ONLY=/blog  limits the URL list (comma-separated paths).
 */
import { spawn } from "child_process";
import fs from "fs";
import http from "http";
import path from "path";
import zlib from "zlib";
import { fileURLToPath } from "url";

const root = process.cwd();
const label = process.argv[2] || "baseline";
const runs = Number(process.env.PERF_RUNS || 3);
const port = Number(process.env.PERF_PORT || 4173);
const skipBuild = process.env.PERF_SKIP_BUILD === "1";
const only = (process.env.PERF_ONLY || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const urls = JSON.parse(fs.readFileSync(path.join(root, "perf", "urls.json"), "utf8")).filter(
  (url) => only.length === 0 || only.includes(url),
);

const outDir = path.join(root, "perf", "results", label);
const shotDir = path.join(root, "perf", "screenshots", label);
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(shotDir, { recursive: true });

function slugify(urlPath) {
  if (urlPath === "/") return "home";
  return urlPath.replace(/^\//, "").replace(/[^\w.-]+/g, "_");
}

function runCmd(command, args, env = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      stdio: "inherit",
      env: { ...process.env, ...env },
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} ${args.join(" ")} exited ${code}`));
    });
  });
}

const COMPRESSIBLE = new Set([".html", ".js", ".css", ".svg", ".json", ".xml", ".txt", ".webmanifest"]);
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".webmanifest": "application/manifest+json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".pdf": "application/pdf",
};

function startStaticServer(spaRoot) {
  const server = http.createServer((req, res) => {
    try {
      const url = new URL(req.url || "/", "http://127.0.0.1");
      const rel = decodeURIComponent(url.pathname).replace(/^\/+/, "");
      if (rel.includes("\0") || rel.includes("..")) {
        res.writeHead(400);
        res.end();
        return;
      }
      const candidates = rel ? [rel, path.join(rel, "index.html"), "index.html"] : ["index.html"];
      const rootWithSep = spaRoot.endsWith(path.sep) ? spaRoot : spaRoot + path.sep;
      let file = null;
      for (const candidate of candidates) {
        const abs = path.resolve(spaRoot, candidate);
        if (abs !== spaRoot && !abs.startsWith(rootWithSep)) continue;
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
      const body = fs.readFileSync(file);
      const headers = {
        "Content-Type": MIME[ext] || "application/octet-stream",
        "Cache-Control": "no-store",
      };
      const accept = req.headers["accept-encoding"] || "";
      if (COMPRESSIBLE.has(ext) && body.length > 256) {
        if (accept.includes("br")) {
          const compressed = zlib.brotliCompressSync(body);
          headers["Content-Encoding"] = "br";
          headers["Content-Length"] = compressed.length;
          res.writeHead(200, headers);
          res.end(compressed);
          return;
        }
        if (accept.includes("gzip")) {
          const compressed = zlib.gzipSync(body);
          headers["Content-Encoding"] = "gzip";
          headers["Content-Length"] = compressed.length;
          res.writeHead(200, headers);
          res.end(compressed);
          return;
        }
      }
      headers["Content-Length"] = body.length;
      res.writeHead(200, headers);
      res.end(body);
    } catch (error) {
      res.writeHead(500);
      res.end(String(error));
    }
  });
  return new Promise((resolve) => {
    server.listen(port, "127.0.0.1", () => resolve(server));
  });
}

function median(values) {
  const nums = values.filter((value) => typeof value === "number" && !Number.isNaN(value));
  if (!nums.length) return null;
  const sorted = [...nums].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

function findNodes(value, acc = []) {
  if (!value || typeof value !== "object") return acc;
  if (value.type === "node" && (value.selector || value.snippet)) acc.push(value);
  for (const child of Object.values(value)) findNodes(child, acc);
  return acc;
}

function auditItems(audit) {
  const items = audit?.details?.items;
  return Array.isArray(items) ? items : [];
}

function resourceMap(lhr) {
  const map = {};
  for (const item of auditItems(lhr.audits["resource-summary"])) {
    map[item.resourceType || item.label] = {
      transferBytes: item.transferSize ?? null,
      requests: item.requestCount ?? null,
    };
  }
  return map;
}

function extract(lhr) {
  const num = (id) => {
    const value = lhr.audits[id]?.numericValue;
    return typeof value === "number" ? value : null;
  };
  const resources = resourceMap(lhr);
  const lcpNodes = findNodes(lhr.audits["lcp-breakdown-insight"] || lhr.audits["largest-contentful-paint-element"]);
  const lcpNode = lcpNodes[0] || null;
  const lcpSubparts =
    lhr.audits["lcp-breakdown-insight"]?.details?.items?.find((item) => item.type === "table")?.items?.map((item) => ({
      label: item.label,
      ms: item.duration ?? null,
    })) || [];
  const lcpDiscovery =
    lhr.audits["lcp-discovery-insight"]?.details?.items?.find((item) => item.type === "checklist")?.items || null;
  const domInsight = lhr.audits["dom-size-insight"]?.details?.items?.find((item) => item.statistic === "Total elements");
  const domNodes = domInsight?.value?.value ?? num("dom-size");
  const thirdParties = auditItems(lhr.audits["third-party-summary"]).map((item) => ({
    entity: item.entity,
    transferBytes: item.transferSize ?? null,
    blockingMs: item.blockingTime ?? null,
  }));
  const blockingSource = auditItems(lhr.audits["render-blocking-insight"]).length
    ? auditItems(lhr.audits["render-blocking-insight"])
    : auditItems(lhr.audits["render-blocking-resources"]);
  const blocking = blockingSource.map((item) => ({
    url: item.url,
    bytes: item.totalBytes ?? null,
    wastedMs: item.wastedMs ?? null,
  }));
  const unusedJs = auditItems(lhr.audits["unused-javascript"]).map((item) => ({
    url: item.url,
    totalBytes: item.totalBytes ?? null,
    wastedBytes: item.wastedBytes ?? null,
  }));
  const unusedCss = auditItems(lhr.audits["unused-css-rules"]).map((item) => ({
    url: item.url,
    totalBytes: item.totalBytes ?? null,
    wastedBytes: item.wastedBytes ?? null,
  }));
  const mainThread = auditItems(lhr.audits["mainthread-work-breakdown"]).map((item) => ({
    group: item.groupLabel || item.group,
    ms: item.duration ?? null,
  }));
  const imageAudits = ["image-delivery-insight", "uses-optimized-images", "modern-image-formats", "uses-responsive-images", "offscreen-images", "unsized-images", "lcp-lazy-loaded", "prioritize-lcp-image"].map(
    (id) => ({
      id,
      score: lhr.audits[id]?.score ?? null,
      title: lhr.audits[id]?.title ?? null,
      display: lhr.audits[id]?.displayValue ?? null,
      wastedBytes: auditItems(lhr.audits[id]).reduce((sum, item) => sum + (item.wastedBytes || 0), 0) || null,
    }),
  );

  return {
    performance: lhr.categories.performance?.score != null ? Math.round(lhr.categories.performance.score * 100) : null,
    lcpMs: num("largest-contentful-paint"),
    fcpMs: num("first-contentful-paint"),
    tbtMs: num("total-blocking-time"),
    cls: num("cumulative-layout-shift"),
    speedIndexMs: num("speed-index"),
    ttiMs: num("interactive"),
    ttfbMs: num("server-response-time"),
    transferBytes: num("total-byte-weight"),
    requests: resources.total?.requests ?? num("network-requests"),
    jsBytes: resources.script?.transferBytes ?? null,
    cssBytes: resources.stylesheet?.transferBytes ?? null,
    imageBytes: resources.image?.transferBytes ?? null,
    fontBytes: resources.font?.transferBytes ?? null,
    thirdPartyBytes: resources["third-party"]?.transferBytes ?? null,
    domNodes,
    lcpElement: lcpNode
      ? { selector: lcpNode.selector || null, snippet: lcpNode.snippet || null, label: lcpNode.nodeLabel || null }
      : null,
    lcpSubparts,
    lcpDiscovery,
    mainThread,
    thirdParties,
    renderBlocking: blocking,
    unusedJs,
    unusedCss,
    imageAudits,
    bootup: auditItems(lhr.audits["bootup-time"])
      .slice(0, 8)
      .map((item) => ({ url: item.url, totalMs: item.total ?? null, scriptMs: item.scripting ?? null })),
  };
}

function slimLhr(lhr) {
  const clone = JSON.parse(JSON.stringify(lhr));
  delete clone.fullPageScreenshot;
  delete clone.i18n;
  if (clone.audits) {
    for (const audit of Object.values(clone.audits)) {
      const details = audit?.details;
      if (!details || typeof details !== "object") continue;
      if (details.type === "filmstrip" || details.type === "screenshot") {
        audit.details = { type: details.type, stripped: true };
      }
      if (typeof details.data === "string" && details.data.length > 500) {
        details.data = "[stripped]";
      }
    }
  }
  return clone;
}

function analyzePrerender(urlPath) {
  const file =
    urlPath === "/"
      ? path.join(root, "dist", "spa", "index.html")
      : path.join(root, "dist", "spa", urlPath.replace(/^\//, ""), "index.html");
  if (!fs.existsSync(file)) {
    return { path: urlPath, file: path.relative(root, file), exists: false };
  }
  const html = fs.readFileSync(file, "utf8");
  const rootIdx = html.indexOf('<div id="root">');
  const rootHtml = rootIdx >= 0 ? html.slice(rootIdx) : "";
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? null;
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1] ?? null;
  const description = html.match(/name="description" content="([^"]*)"/)?.[1] ?? null;
  const text = rootHtml.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return {
    path: urlPath,
    file: path.relative(root, file),
    exists: true,
    bytes: Buffer.byteLength(html),
    title,
    description,
    canonical,
    jsonLd: (html.match(/application\/ld\+json/g) || []).length,
    h1InRoot: /<h1\b/i.test(rootHtml),
    rootTextChars: text.length,
    rootHasContent: text.length > 400,
  };
}

function onDiskAssets() {
  const dir = path.join(root, "dist", "spa", "assets");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => /\.(js|css)$/.test(name))
    .map((name) => {
      const buf = fs.readFileSync(path.join(dir, name));
      return {
        file: `assets/${name}`,
        bytes: buf.length,
        gzip: zlib.gzipSync(buf, { level: 9 }).length,
        brotli: zlib.brotliCompressSync(buf).length,
      };
    })
    .sort((a, b) => b.gzip - a.gzip);
}

function parseBundleStats() {
  const file = path.join(root, "perf", "bundle-stats.json");
  if (!fs.existsSync(file)) return null;
  const stats = JSON.parse(fs.readFileSync(file, "utf8"));
  const parts = stats.nodeParts || {};
  const metas = stats.nodeMetas || {};
  const leaves = [];

  function walk(node, chunk) {
    const nextChunk = node.name && /\.(js|css)$/.test(node.name) ? node.name : chunk;
    if (node.uid && parts[node.uid] && (!node.children || node.children.length === 0)) {
      const meta = metas[node.uid] || {};
      leaves.push({
        chunk: nextChunk,
        name: meta.id || node.name,
        rendered: parts[node.uid].renderedLength || 0,
        gzip: parts[node.uid].gzipLength || 0,
        brotli: parts[node.uid].brotliLength || 0,
      });
    }
    for (const child of node.children || []) walk(child, nextChunk);
  }
  if (stats.tree) walk(stats.tree, null);

  leaves.sort((a, b) => b.gzip - a.gzip);
  const chunks = new Map();
  for (const leaf of leaves) {
    const key = leaf.chunk || "(unknown)";
    const current = chunks.get(key) || { chunk: key, rendered: 0, gzip: 0, modules: 0 };
    current.rendered += leaf.rendered;
    current.gzip += leaf.gzip;
    current.modules += 1;
    chunks.set(key, current);
  }
  return {
    topModules: leaves.slice(0, 15),
    chunks: [...chunks.values()].sort((a, b) => b.gzip - a.gzip).slice(0, 15),
  };
}

async function runLighthouse(chromePort, url) {
  const lighthouse = (await import("lighthouse")).default;
  const result = await lighthouse(url, {
    logLevel: "error",
    output: "json",
    port: chromePort,
    onlyCategories: ["performance"],
  });
  if (!result?.lhr) throw new Error("Lighthouse returned no LHR");
  return result.lhr;
}

async function measureInteractions(origin) {
  const puppeteer = (await import("puppeteer")).default;
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const notes = [];
  try {
    const page = await browser.newPage();
    const client = await page.createCDPSession();
    await client.send("Emulation.setCPUThrottlingRate", { rate: 4 });
    await page.evaluateOnNewDocument(() => {
      window.__longTasks = [];
      try {
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            window.__longTasks.push({ duration: entry.duration, start: entry.startTime, name: entry.name });
          }
        }).observe({ type: "longtask", buffered: true });
      } catch {
        /* longtask not supported */
      }
    });

    async function snapshot() {
      return page.evaluate(() => ({
        nodes: document.querySelectorAll("*").length,
        tasks: (window.__longTasks || []).length,
      }));
    }

    async function settle() {
      await page.evaluate(
        () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))),
      );
    }

    async function measure(name, setup, action) {
      await setup();
      const before = await snapshot();
      const start = Date.now();
      await action();
      await settle();
      const wallMs = Date.now() - start;
      const after = await page.evaluate((from) => {
        const tasks = (window.__longTasks || []).slice(from);
        return {
          nodes: document.querySelectorAll("*").length,
          longTasks: tasks,
          longTaskMs: tasks.reduce((sum, task) => sum + task.duration, 0),
          longest: tasks.reduce((max, task) => Math.max(max, task.duration), 0),
        };
      }, before.tasks);
      const row = {
        name,
        wallMs,
        domBefore: before.nodes,
        domAfter: after.nodes,
        longTaskMs: Math.round(after.longTaskMs),
        longestMs: Math.round(after.longest),
        longTaskCount: after.longTasks.length,
      };
      notes.push(row);
      console.log(`  interaction ${name}: wall ${row.wallMs}ms, long tasks ${row.longTaskMs}ms, DOM ${row.domBefore}→${row.domAfter}`);
      return row;
    }

    async function open(urlPath) {
      await page.goto(origin + urlPath, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForFunction(() => (document.querySelector("#root")?.innerText || "").length > 40, {
        timeout: 90000,
      });
      await new Promise((resolve) => setTimeout(resolve, 600));
    }

    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    const safe = async (name, setup, action) => {
      try {
        await measure(name, setup, action);
      } catch (error) {
        notes.push({ name, error: String(error?.message || error) });
        console.error(`  interaction ${name} failed:`, error?.message || error);
      }
    };
    await safe(
      "services-dropdown-desktop",
      () => open("/"),
      async () => {
        const clicked = await page.evaluate(() => {
          const buttons = [...document.querySelectorAll('button[aria-label="Toggle services menu"]')];
          const visible = buttons.find((button) => button.getBoundingClientRect().width > 0);
          if (!visible) return false;
          visible.click();
          return true;
        });
        if (!clicked) throw new Error("services toggle not visible");
      },
    );

    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
    await safe(
      "mobile-menu",
      () => open("/"),
      async () => {
        const clicked = await page.evaluate(() => {
          const button = [...document.querySelectorAll('button[aria-label="Open menu"]')].find(
            (node) => node.getBoundingClientRect().width > 0,
          );
          if (!button) return false;
          button.click();
          return true;
        });
        if (!clicked) throw new Error("mobile menu button not visible");
      },
    );

    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await safe(
      "our-work-filter",
      () => open("/our-work"),
      () => page.evaluate(() => {
        const button = [...document.querySelectorAll("button")].find((node) => node.textContent?.trim() === "Maritime & Offshore");
        button?.click();
      }),
    );
    await safe(
      "project-lightbox",
      async () => {},
      () => page.evaluate(() => {
        const button = [...document.querySelectorAll("button")].find((node) => node.textContent?.includes("View Project"));
        button?.click();
      }),
    );

    await safe(
      "blog-scroll",
      () => open("/blog"),
      () => page.evaluate(
        () =>
          new Promise((resolve) => {
            let y = 0;
            const step = () => {
              y += 800;
              window.scrollTo(0, y);
              if (y < document.body.scrollHeight) requestAnimationFrame(step);
              else resolve();
            };
            step();
          }),
      ),
    );
  } catch (error) {
    notes.push({ error: String(error?.message || error) });
    console.error("  interaction error:", error?.message || error);
  } finally {
    await browser.close();
  }
  return notes;
}

async function captureScreensAndHydration(origin) {
  const puppeteer = (await import("puppeteer")).default;
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const pages = [];
  try {
    for (const urlPath of urls) {
      const slug = slugify(urlPath);
      const row = { path: urlPath, hydration: [], thirdParties: [] };
      for (const [width, height] of [
        [390, 844],
        [1440, 900],
      ]) {
        const page = await browser.newPage();
        const logs = [];
        const requests = [];
        page.on("console", (msg) => logs.push(`${msg.type()}: ${msg.text()}`));
        page.on("pageerror", (error) => logs.push(`pageerror: ${error.message}`));
        page.on("request", (req) => requests.push(req.url()));
        await page.setViewport({ width, height, deviceScaleFactor: width < 500 ? 2 : 1 });
        await page.goto(origin + urlPath, { waitUntil: "domcontentloaded", timeout: 90000 });
        try {
          await page.waitForFunction(() => (document.querySelector("#root")?.innerText || "").length > 40, {
            timeout: 30000,
          });
        } catch {
          logs.push("timeout waiting for root text");
        }
        await new Promise((resolve) => setTimeout(resolve, 1200));
        const file = path.join(shotDir, `${slug}-${width}.png`);
        await page.screenshot({ path: file });
        row.hydration.push(
          ...logs.filter((line) => /hydrat|did not match|error #41[89]|error #42[235]|timeout waiting/i.test(line)),
        );
        if (width === 390) {
          const hosts = new Map();
          for (const reqUrl of requests) {
            let host = reqUrl;
            try {
              host = new URL(reqUrl).host;
            } catch {
              /* keep raw */
            }
            hosts.set(host, (hosts.get(host) || 0) + 1);
          }
          row.thirdParties = [...hosts.entries()]
            .filter(([host]) => host && !host.startsWith("127.0.0.1") && host !== `127.0.0.1:${port}`)
            .map(([host, count]) => ({ host, count }));
          row.consoleSample = logs.slice(0, 30);
        }
        await page.close();
      }
      pages.push(row);
      console.log(`  screenshot ${urlPath} hydration notes: ${row.hydration.length}`);
    }
  } finally {
    await browser.close();
  }
  return pages;
}

function writeSummary(payload) {
  const kb = (n) => (n == null ? "—" : `${Math.round(n / 1024)} KB`);
  const ms = (n) => (n == null ? "—" : `${Math.round(n)} ms`);
  const lines = [
    `# Lighthouse ${label}`,
    "",
    `Generated ${payload.generatedAt}`,
    "",
    `- Build: \`${payload.buildCommand}\``,
    `- Form factor: mobile, simulated throttling (Lighthouse default Slow 4G, 4x CPU)`,
    `- Runs per URL: ${payload.runs}`,
    `- Numeric values are the median of the runs. The LCP element is taken from the run whose performance score is the median.`,
    "",
    "| URL | Perf | LCP | FCP | TBT | CLS | SI | TTFB | Transfer | JS | CSS | Images | Fonts | Req | DOM |",
    "| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
  ];
  for (const url of payload.urls) {
    const m = url.median;
    lines.push(
      `| \`${url.path}\` | ${m.performance ?? "—"} | ${ms(m.lcpMs)} | ${ms(m.fcpMs)} | ${ms(m.tbtMs)} | ${m.cls == null ? "—" : m.cls.toFixed(3)} | ${ms(m.speedIndexMs)} | ${ms(m.ttfbMs)} | ${kb(m.transferBytes)} | ${kb(m.jsBytes)} | ${kb(m.cssBytes)} | ${kb(m.imageBytes)} | ${kb(m.fontBytes)} | ${m.requests ?? "—"} | ${m.domNodes ?? "—"} |`,
    );
  }
  lines.push("", "## LCP elements", "");
  for (const url of payload.urls) {
    const el = url.lcpElement;
    lines.push(`- \`${url.path}\`: ${el ? `\`${el.selector || el.label || "?"}\` ${el.snippet || ""}` : "not recorded"}`);
  }
  lines.push("", "## On-disk JS and CSS", "");
  for (const asset of payload.assets) {
    lines.push(`- \`${asset.file}\` raw ${kb(asset.bytes)}, gzip ${kb(asset.gzip)}, brotli ${kb(asset.brotli)}`);
  }
  fs.writeFileSync(path.join(outDir, "summary.md"), lines.join("\n") + "\n");
}

async function main() {
  const sitemap = path.join(root, "public", "sitemap.xml");
  const sitemapBackup = fs.existsSync(sitemap) ? fs.readFileSync(sitemap) : null;

  if (!skipBuild) {
    console.log("→ production build (vite client + server + prerender), ANALYZE=1");
    await runCmd("npm", ["run", "build"], { ANALYZE: "1" });
    if (sitemapBackup) fs.writeFileSync(sitemap, sitemapBackup);
  } else {
    console.log("→ PERF_SKIP_BUILD=1, using existing dist/spa");
  }

  const server = await startStaticServer(path.join(root, "dist", "spa"));
  const origin = `http://127.0.0.1:${port}`;
  console.log(`→ serving ${origin}`);

  for (const urlPath of urls) {
    const response = await fetch(origin + urlPath);
    const html = await response.text();
    const rootHtml = html.slice(html.indexOf('<div id="root">'));
    const h1 = /<h1\b/i.test(rootHtml);
    console.log(`  preflight ${urlPath} html ${html.length}B h1-in-root ${h1}`);
    const shellOnly = new Set([
      "/products",
      "/blog/how-much-is-starlink-nigeria-price-naira-2026",
    ]);
    if (process.env.PERF_REQUIRE_PRERENDER === "1" && !shellOnly.has(urlPath) && html.length < 20000) {
      throw new Error(`Expected prerendered HTML for ${urlPath}, got ${html.length} bytes`);
    }
  }

  let browser;
  const urlResults = [];
  try {
    const puppeteer = (await import("puppeteer")).default;
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });
    const chromePort = Number(new URL(browser.wsEndpoint()).port);

    for (const urlPath of urls) {
      const slug = slugify(urlPath);
      const dir = path.join(outDir, slug);
      fs.mkdirSync(dir, { recursive: true });
      const extracted = [];
      for (let i = 1; i <= runs; i += 1) {
        const target = origin + urlPath;
        console.log(`→ lighthouse ${urlPath} run ${i}/${runs}`);
        const lhr = await runLighthouse(chromePort, target);
        fs.writeFileSync(path.join(dir, `run-${i}.json`), JSON.stringify(slimLhr(lhr)));
        const row = extract(lhr);
        extracted.push(row);
        console.log(
          `  perf ${row.performance} LCP ${Math.round(row.lcpMs || 0)}ms TBT ${Math.round(row.tbtMs || 0)}ms transfer ${Math.round((row.transferBytes || 0) / 1024)}KB`,
        );
      }
      const scoreMedian = median(extracted.map((row) => row.performance));
      const representative =
        extracted
          .map((row, index) => ({ row, index, distance: Math.abs((row.performance ?? 0) - (scoreMedian ?? 0)) }))
          .sort((a, b) => a.distance - b.distance)[0]?.row || extracted[0];
      const numericKeys = [
        "performance",
        "lcpMs",
        "fcpMs",
        "tbtMs",
        "cls",
        "speedIndexMs",
        "ttiMs",
        "ttfbMs",
        "transferBytes",
        "requests",
        "jsBytes",
        "cssBytes",
        "imageBytes",
        "fontBytes",
        "thirdPartyBytes",
        "domNodes",
      ];
      const med = {};
      for (const key of numericKeys) med[key] = median(extracted.map((row) => row[key]));
      urlResults.push({
        path: urlPath,
        runs: extracted,
        median: med,
        lcpElement: representative.lcpElement,
        lcpSubparts: representative.lcpSubparts,
        lcpDiscovery: representative.lcpDiscovery,
        mainThread: representative.mainThread,
        thirdParties: representative.thirdParties,
        renderBlocking: representative.renderBlocking,
        unusedJs: representative.unusedJs,
        unusedCss: representative.unusedCss,
        imageAudits: representative.imageAudits,
        bootup: representative.bootup,
      });
    }
  } finally {
    if (browser) await browser.close();
  }

  let qualitative = [];
  let interactions = [];
  if (process.env.PERF_SKIP_QUAL === "1") {
    console.log("→ PERF_SKIP_QUAL=1, skipping screenshots and interactions");
  } else {
    console.log("→ screenshots, hydration, third parties");
    qualitative = await captureScreensAndHydration(origin);
    console.log("→ interactions (4x CPU)");
    interactions = await measureInteractions(origin);
  }

  await new Promise((resolve) => server.close(resolve));

  const payload = {
    label,
    generatedAt: new Date().toISOString(),
    buildCommand: skipBuild ? "PERF_SKIP_BUILD=1 (existing dist/spa)" : "ANALYZE=1 npm run build",
    lighthouse: "mobile defaults, simulated Slow 4G, 4x CPU, median of runs",
    runs,
    origin,
    urls: urlResults,
    prerender: urls.map(analyzePrerender),
    assets: onDiskAssets(),
    bundle: parseBundleStats(),
    qualitative,
    interactions,
  };
  fs.writeFileSync(path.join(outDir, "metrics.json"), JSON.stringify(payload, null, 2));
  writeSummary(payload);
  console.log(`→ wrote ${path.relative(root, outDir)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

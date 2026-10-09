/**
 * Lists images under public/ and client/. Dev-only. No production dependency.
 * Writes perf/image-inventory.json and perf/image-inventory.md
 */
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";

const root = process.cwd();
const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif", ".svg"]);
const modern = new Set([".webp", ".avif"]);

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === "dist" || entry.name.startsWith(".")) continue;
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(abs, out);
    else if (exts.has(path.extname(entry.name).toLowerCase())) out.push(abs);
  }
  return out;
}

function dimensions(file) {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".svg") return { width: null, height: null };
  try {
    const out = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", file], {
      encoding: "utf8",
    });
    const width = Number(out.match(/pixelWidth:\s*(\d+)/)?.[1] ?? NaN);
    const height = Number(out.match(/pixelHeight:\s*(\d+)/)?.[1] ?? NaN);
    return {
      width: Number.isFinite(width) ? width : null,
      height: Number.isFinite(height) ? height : null,
    };
  } catch {
    return { width: null, height: null };
  }
}

function loadSources() {
  const files = [];
  for (const dir of ["client", "index.html", "public"]) {
    const abs = path.join(root, dir);
    if (!fs.existsSync(abs)) continue;
    if (fs.statSync(abs).isFile()) files.push(abs);
    else {
      const stack = [abs];
      while (stack.length) {
        const current = stack.pop();
        for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
          if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
          const child = path.join(current, entry.name);
          if (entry.isDirectory()) stack.push(child);
          else if (/\.(tsx?|css|html|json|md)$/.test(entry.name)) files.push(child);
        }
      }
    }
  }
  return files.map((file) => ({ file, text: fs.readFileSync(file, "utf8") }));
}

const sources = loadSources();
const images = walk(path.join(root, "public")).concat(walk(path.join(root, "client")));

const nameCounts = new Map();
for (const file of images) {
  const base = path.basename(file);
  nameCounts.set(base, (nameCounts.get(base) ?? 0) + 1);
}

const rows = images.map((file) => {
  const rel = path.relative(root, file);
  const publicRel = rel.startsWith("public/") ? rel.slice("public/".length) : null;
  const ext = path.extname(file).toLowerCase();
  const bytes = fs.statSync(file).size;
  const { width, height } = dimensions(file);
  const base = path.basename(file);
  const routes = [];
  for (const source of sources) {
    const hit =
      (publicRel && source.text.includes(publicRel)) ||
      (publicRel && source.text.includes(`/${publicRel}`)) ||
      (nameCounts.get(base) === 1 && source.text.includes(base));
    if (hit) routes.push(path.relative(root, source.file));
  }
  const flags = [];
  if (bytes > 200 * 1024) flags.push("over-200kb");
  if (!modern.has(ext) && ext !== ".svg") flags.push("not-webp-avif");
  if (width && width > 2560) flags.push("wider-than-2560");
  return { path: rel, ext, width, height, bytes, flags, referencedBy: routes };
});

rows.sort((a, b) => b.bytes - a.bytes);
const totalBytes = rows.reduce((sum, row) => sum + row.bytes, 0);

const report = {
  generatedAt: new Date().toISOString(),
  count: rows.length,
  totalBytes,
  over200kb: rows.filter((row) => row.flags.includes("over-200kb")).length,
  notModern: rows.filter((row) => row.flags.includes("not-webp-avif")).length,
  widerThan2560: rows.filter((row) => row.flags.includes("wider-than-2560")).length,
  images: rows,
};

fs.mkdirSync(path.join(root, "perf"), { recursive: true });
fs.writeFileSync(path.join(root, "perf", "image-inventory.json"), JSON.stringify(report, null, 2));

const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
const lines = [
  "# Image inventory",
  "",
  `Generated ${report.generatedAt}`,
  "",
  `- Files: ${report.count}`,
  `- Total: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`,
  `- Over 200 KB: ${report.over200kb}`,
  `- Not WebP or AVIF: ${report.notModern}`,
  `- Wider than 2560 px: ${report.widerThan2560}`,
  "",
  "## 20 largest",
  "",
  "| KB | px | flags | path | referenced by |",
  "| ---: | --- | --- | --- | --- |",
];
for (const row of rows.slice(0, 20)) {
  const px = row.width ? `${row.width}×${row.height}` : "—";
  const refs = row.referencedBy.slice(0, 3).join(", ") || "—";
  lines.push(`| ${kb(row.bytes)} | ${px} | ${row.flags.join(", ") || "—"} | \`${row.path}\` | ${refs} |`);
}
fs.writeFileSync(path.join(root, "perf", "image-inventory.md"), lines.join("\n") + "\n");
console.log(lines.join("\n"));

/**
 * npm run perf:compare -- <baselineLabel> <currentLabel>
 * Reads perf/results/<label>/metrics.json and prints per-URL deltas.
 */
import fs from "fs";
import path from "path";

const [baselineLabel, currentLabel] = process.argv.slice(2);
if (!baselineLabel || !currentLabel) {
  console.error("Usage: npm run perf:compare -- <baseline> <current>");
  process.exit(1);
}

const root = process.cwd();
const load = (label) => {
  const file = path.join(root, "perf", "results", label, "metrics.json");
  if (!fs.existsSync(file)) {
    console.error(`Missing ${file}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(file, "utf8"));
};

const base = load(baselineLabel);
const current = load(currentLabel);
const byPath = new Map(current.urls.map((u) => [u.path, u]));

const keys = [
  ["performance", "score", 0],
  ["lcpMs", "ms", 0],
  ["fcpMs", "ms", 0],
  ["tbtMs", "ms", 0],
  ["cls", "cls", 3],
  ["speedIndexMs", "ms", 0],
  ["ttfbMs", "ms", 0],
  ["transferBytes", "B", 0],
  ["jsBytes", "B", 0],
  ["cssBytes", "B", 0],
  ["imageBytes", "B", 0],
  ["fontBytes", "B", 0],
  ["requests", "n", 0],
  ["domNodes", "n", 0],
];

function fmt(n, digits) {
  if (n == null || Number.isNaN(n)) return "—";
  return digits ? n.toFixed(digits) : String(Math.round(n));
}

function delta(a, b) {
  if (a == null || b == null) return "—";
  const d = b - a;
  const sign = d > 0 ? "+" : "";
  return `${sign}${Math.round(d)}`;
}

console.log(`# ${baselineLabel} → ${currentLabel}\n`);
for (const before of base.urls) {
  const after = byPath.get(before.path);
  console.log(`## ${before.path}`);
  if (!after) {
    console.log("missing in current\n");
    continue;
  }
  const b = before.median;
  const a = after.median;
  console.log("| metric | before | after | delta |");
  console.log("| --- | ---: | ---: | ---: |");
  for (const [key, , digits] of keys) {
    console.log(`| ${key} | ${fmt(b[key], digits)} | ${fmt(a[key], digits)} | ${delta(b[key], a[key])} |`);
  }
  console.log("");
}

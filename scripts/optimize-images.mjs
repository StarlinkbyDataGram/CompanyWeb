/**
 * Build AVIF and WebP copies of every raster image, plus one compressed fallback.
 * Originals move to media-originals/ so they are not deployed.
 */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const originalsDir = path.join(root, "media-originals");
const manifestPath = path.join(root, "client/data/image-manifest.json");
const WIDTHS = [480, 768, 1280, 1920];
const BUDGET = { 480: 60 * 1024, 768: 80 * 1024, 1280: 140 * 1024, 1920: 250 * 1024 };
const RASTER = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

async function walk(dir, acc = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(abs, acc);
    else acc.push(abs);
  }
  return acc;
}

function isDerivative(file) {
  return /\.w\d+\.(avif|webp)$/i.test(file);
}

async function encodeUnderBudget(pipeline, format, width) {
  const cap = BUDGET[width] || BUDGET[1920];
  const start = format === "avif" ? 50 : format === "webp" ? 62 : 70;
  let quality = start;
  let buf = null;
  while (quality >= 28) {
    let pipe = pipeline.clone().resize({ width, withoutEnlargement: true });
    if (format === "avif") pipe = pipe.avif({ quality, effort: 4 });
    else if (format === "webp") pipe = pipe.webp({ quality });
    else if (format === "png") pipe = pipe.png({ compressionLevel: 9, palette: quality < 60 });
    else pipe = pipe.jpeg({ quality, mozjpeg: true });
    buf = await pipe.toBuffer();
    if (buf.length <= cap) return buf;
    quality -= 8;
  }
  return buf;
}

async function optimizeOne(sourceAbs, publicRel) {
  const ext = path.extname(publicRel).toLowerCase();
  const input = sharp(sourceAbs, { failOn: "none" });
  const meta = await input.metadata();
  const width = meta.width || 0;
  const height = meta.height || 0;
  if (!width || !height) return null;
  const widths = WIDTHS.filter((w) => w <= width);
  if (!widths.length || width < WIDTHS[0]) widths.push(width);
  const unique = [...new Set(widths)];
  const dir = path.dirname(path.join(publicDir, publicRel));
  await fs.mkdir(dir, { recursive: true });
  const stem = publicRel.slice(0, -ext.length).replace(/\\/g, "/");
  const variants = [];
  for (const w of unique) {
    const avifName = `${stem}.w${w}.avif`;
    const webpName = `${stem}.w${w}.webp`;
    const avif = await encodeUnderBudget(sharp(sourceAbs, { failOn: "none" }), "avif", w);
    const webp = await encodeUnderBudget(sharp(sourceAbs, { failOn: "none" }), "webp", w);
    await fs.writeFile(path.join(publicDir, avifName), avif);
    await fs.writeFile(path.join(publicDir, webpName), webp);
    variants.push({ w, avif: `/${avifName}`, webp: `/${webpName}` });
  }
  const largest = unique[unique.length - 1];
  const fallbackFormat = ext === ".png" ? "png" : ext === ".webp" ? "webp" : ext === ".avif" ? "avif" : "jpeg";
  const fallbackBuf = await encodeUnderBudget(sharp(sourceAbs, { failOn: "none" }), fallbackFormat, largest);
  const fallbackAbs = path.join(publicDir, publicRel);
  await fs.mkdir(path.dirname(fallbackAbs), { recursive: true });
  await fs.writeFile(fallbackAbs, fallbackBuf);
  return {
    src: `/${publicRel.replace(/\\/g, "/")}`,
    width,
    height,
    variants,
  };
}

async function sources() {
  const fromOriginals = await walk(originalsDir).catch(() => []);
  const originals = new Map();
  for (const abs of fromOriginals) {
    const rel = path.relative(originalsDir, abs);
    if (RASTER.has(path.extname(rel).toLowerCase()) && !isDerivative(rel)) originals.set(rel, abs);
  }
  const pub = await walk(publicDir);
  for (const abs of pub) {
    const rel = path.relative(publicDir, abs);
    if (!RASTER.has(path.extname(rel).toLowerCase()) || isDerivative(rel)) continue;
    if (!originals.has(rel)) originals.set(rel, abs);
  }
  return originals;
}

async function main() {
  await fs.mkdir(originalsDir, { recursive: true });
  const files = await sources();
  const manifest = {};
  let done = 0;
  for (const [rel, abs] of files) {
    const stored = path.join(originalsDir, rel);
    if (!(await fs.stat(stored).catch(() => null))) {
      await fs.mkdir(path.dirname(stored), { recursive: true });
      try {
        await fs.rename(abs, stored);
      } catch {
        await fs.copyFile(abs, stored);
        await fs.rm(abs, { force: true });
      }
    }
    const entry = await optimizeOne(stored, rel);
    if (entry) manifest[`/${rel.replace(/\\/g, "/")}`] = entry;
    done += 1;
    if (done % 20 === 0) console.log(`… ${done}/${files.size}`);
  }
  await fs.mkdir(path.dirname(manifestPath), { recursive: true });
  await fs.writeFile(manifestPath, JSON.stringify(manifest));
  console.log(`optimized ${done} images`);

  const left = await walk(publicDir);
  const heavy = [];
  for (const abs of left) {
    const ext = path.extname(abs).toLowerCase();
    if (!RASTER.has(ext)) continue;
    const size = (await fs.stat(abs)).size;
    if (size > 250 * 1024) heavy.push(`${path.relative(publicDir, abs)} ${Math.round(size / 1024)}KB`);
  }
  if (heavy.length) {
    console.error("Images still over 250KB:\n" + heavy.join("\n"));
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

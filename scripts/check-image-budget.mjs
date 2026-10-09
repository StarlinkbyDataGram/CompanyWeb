import fs from "fs/promises";
import path from "path";

const publicDir = path.resolve("public");
const raster = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

async function walk(dir, acc = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(abs, acc);
    else acc.push(abs);
  }
  return acc;
}

const heavy = [];
for (const file of await walk(publicDir)) {
  if (!raster.has(path.extname(file).toLowerCase())) continue;
  const size = (await fs.stat(file)).size;
  if (size > 250 * 1024) heavy.push(`${path.relative(publicDir, file)} ${Math.round(size / 1024)}KB`);
}
if (heavy.length) {
  console.error(`Image budget: ${heavy.length} file(s) over 250KB\n${heavy.slice(0, 20).join("\n")}`);
  process.exit(1);
}
console.log("Image budget ok");

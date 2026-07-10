/**
 * Generates DataGram offshore Starlink B2B procurement spec sheet (A4 PDF).
 * Run: node scripts/generate-spec-sheet.js
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "downloads");
const outFile = path.join(outDir, "datagram-starlink-offshore-spec-sheet.pdf");

const BLUE = "#0040FF";
const DARK = "#0A0A1A";
const MUTED = "#4A4A5A";
const LIGHT_BLUE = "#E8EEFF";
const WHITE = "#FFFFFF";

const PHONE = "+234 906 097 6424";
const EMAIL = "info@datagram.ng";
const WHATSAPP = "+234 906 097 6424";

const hardwareRows = [
  ["Dish Type", "Flat High Performance (Phased Array)"],
  ["Operating Temperature", "-30°C to +50°C"],
  ["Wind Resistance", "Operational up to 96 km/h (60 mph)"],
  ["IP Rating", "IP56 (dust and water resistant)"],
  ["Power Draw", "75–100W typical, 150W peak"],
  ["Input Voltage", "100–240V AC, 50/60Hz"],
  ["Latency", "20–40ms typical (low earth orbit)"],
  ["Download Speed", "100–500 Mbps (varies by conditions)"],
  ["Cable Length (standard)", "23m (extendable with approved cable)"],
  ["Mounting", "Integrated tilt motor — no manual adjustment required"],
];

const processSteps = [
  "Remote site assessment — sky view, power source, obstruction check",
  "Site survey and PTW coordination with vessel/platform safety officer",
  "Mount installation — pipe mount, deck mount, or bulkhead bracket",
  "Cable routing through weatherproof conduit or gland fittings",
  "Router placement and VLAN/network configuration",
  "Live speed test and latency verification on site",
  "Post-installation report issued to client (speeds, latency, config)",
];

const networkOptions = [
  "Standalone Starlink network (crew Wi-Fi + operations LAN separated via VLAN)",
  "Multi-WAN failover: Starlink primary + 4G/VSAT backup (Peplink/MikroTik compatible)",
  "BYOD (Bring Your Own Device) router bypass via Starlink ethernet adapter",
  "Remote monitoring and management via Starlink app or SNMP integration",
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function sectionTitle(doc, text, y) {
  doc
    .fillColor(BLUE)
    .font("Helvetica-Bold")
    .fontSize(11)
    .text(text, 48, y, { width: 500 });
  const after = doc.y + 2;
  doc
    .moveTo(48, after)
    .lineTo(547, after)
    .strokeColor(BLUE)
    .lineWidth(1.25)
    .stroke();
  return after + 10;
}

function drawHeader(doc) {
  doc.rect(0, 0, 595.28, 78).fill(DARK);
  doc.rect(0, 78, 595.28, 4).fill(BLUE);

  doc
    .fillColor(WHITE)
    .font("Helvetica-Bold")
    .fontSize(16)
    .text("DataGram Nigeria — Starlink Offshore & Maritime", 48, 18, { width: 500 });

  doc
    .fillColor("#B8C7FF")
    .font("Helvetica")
    .fontSize(9.5)
    .text(
      "Satellite Internet Integration Guide for OSVs, FPSOs & Offshore Platforms",
      48,
      40,
      { width: 500 }
    );

  doc
    .fillColor(WHITE)
    .fontSize(9)
    .text(`www.datagram.ng  |  ${PHONE}`, 48, 58, { width: 500 });

  return 96;
}

function drawTable(doc, y) {
  const col1 = 48;
  const col2 = 220;
  const rowH = 16;
  const tableW = 499;

  doc.font("Helvetica-Bold").fontSize(8.5).fillColor(WHITE);
  doc.rect(col1, y, tableW, rowH).fill(BLUE);
  doc.text("Specification", col1 + 6, y + 4, { width: 160 });
  doc.text("Detail", col2 + 6, y + 4, { width: 310 });
  y += rowH;

  hardwareRows.forEach((row, i) => {
    const bg = i % 2 === 0 ? LIGHT_BLUE : WHITE;
    doc.rect(col1, y, tableW, rowH).fill(bg);
    doc
      .fillColor(DARK)
      .font("Helvetica-Bold")
      .fontSize(8)
      .text(row[0], col1 + 6, y + 4, { width: 160 });
    doc
      .font("Helvetica")
      .fillColor(MUTED)
      .text(row[1], col2 + 6, y + 4, { width: 310 });
    y += rowH;
  });

  doc.rect(col1, y - hardwareRows.length * rowH - rowH, tableW, (hardwareRows.length + 1) * rowH)
    .strokeColor("#C5CEF0")
    .lineWidth(0.5)
    .stroke();

  return y + 12;
}

function generate() {
  ensureDir(outDir);

  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 40, bottom: 40, left: 48, right: 48 },
    info: {
      Title: "DataGram Starlink Offshore & Maritime Integration Spec Sheet",
      Author: "DataGram Nigeria",
      Subject: "Starlink Flat High Performance — offshore procurement reference",
    },
  });

  const stream = fs.createWriteStream(outFile);
  doc.pipe(stream);

  let y = drawHeader(doc);

  // Section 1
  y = sectionTitle(doc, "1. Recommended Hardware — Starlink Flat High Performance", y);
  y = drawTable(doc, y);

  // Section 2
  y = sectionTitle(doc, "2. DataGram Offshore Installation Process", y);
  doc.fillColor(DARK).font("Helvetica").fontSize(8.5);
  processSteps.forEach((step, i) => {
    doc
      .fillColor(BLUE)
      .font("Helvetica-Bold")
      .text(`${i + 1}.`, 48, y, { continued: true, width: 18 });
    doc.fillColor(DARK).font("Helvetica").text(` ${step}`, { width: 480 });
    y = doc.y + 3;
  });
  y += 8;

  // Section 3
  y = sectionTitle(doc, "3. Supported Network Configurations", y);
  networkOptions.forEach((item) => {
    doc.fillColor(BLUE).font("Helvetica-Bold").fontSize(8.5).text("•", 48, y, { continued: true });
    doc.fillColor(DARK).font("Helvetica").text(`  ${item}`, { width: 480 });
    y = doc.y + 3;
  });
  y += 8;

  // Section 4
  y = sectionTitle(doc, "4. Operational Coverage", y);
  doc
    .fillColor(DARK)
    .font("Helvetica")
    .fontSize(8.5)
    .text("DataGram mobilises to offshore and coastal installations across:", 48, y, { width: 500 });
  y = doc.y + 4;
  doc
    .fillColor(MUTED)
    .text(
      "Rivers State (Port Harcourt) · Delta State (Warri, Asaba) · Bayelsa State (Yenagoa) · Akwa Ibom State · Lagos (offshore and lagoon) · Gulf of Guinea offshore coordinates on request",
      48,
      y,
      { width: 500 }
    );
  y = doc.y + 12;

  // Section 5
  y = sectionTitle(doc, "5. Request a Site Survey", y);
  doc
    .fillColor(DARK)
    .font("Helvetica")
    .fontSize(8.5)
    .text(
      "Contact DataGram to arrange a no-obligation pre-installation site assessment for your vessel or platform.",
      48,
      y,
      { width: 500 }
    );
  y = doc.y + 6;

  doc.rect(48, y, 499, 52).fill(LIGHT_BLUE);
  doc
    .fillColor(DARK)
    .font("Helvetica")
    .fontSize(8.5)
    .text(`WhatsApp: ${WHATSAPP}`, 58, y + 8)
    .text(`Email: ${EMAIL}`, 58, y + 22)
    .text("Web: www.datagram.ng/starlink-offshore-maritime-installation", 58, y + 36);
  y += 64;

  // Footer
  doc
    .fillColor(MUTED)
    .font("Helvetica")
    .fontSize(7)
    .text(
      "This document is issued by DataGram Nigeria. Starlink is a product of SpaceX. DataGram is an independent installation and service provider. Specifications subject to change — confirm current hardware specs at starlink.com.",
      48,
      Math.min(y, 780),
      { width: 500, align: "left" }
    );

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on("finish", () => resolve(outFile));
    stream.on("error", reject);
  });
}

generate()
  .then((file) => {
    const stats = fs.statSync(file);
    console.log(`✅ Spec sheet written: ${file}`);
    console.log(`   Size: ${(stats.size / 1024).toFixed(1)} KB`);
  })
  .catch((err) => {
    console.error("Failed to generate spec sheet:", err);
    process.exit(1);
  });

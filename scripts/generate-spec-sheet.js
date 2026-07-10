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

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN_X = 40;
const CONTENT_W = PAGE_W - MARGIN_X * 2;

const BLUE = "#0040FF";
const BLUE_DARK = "#0033CC";
const DARK = "#0A0A1A";
const MUTED = "#5A5A6E";
const RULE = "#D8DCE8";
const LIGHT_BLUE = "#EEF2FF";
const ROW_ALT = "#F7F8FC";
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

const coverageAreas = [
  "Rivers State (Port Harcourt)",
  "Delta State (Warri, Asaba)",
  "Bayelsa State (Yenagoa)",
  "Akwa Ibom State",
  "Lagos (offshore and lagoon)",
  "Gulf of Guinea offshore coordinates on request",
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function sectionHeading(doc, number, title, y) {
  const badge = 16;
  doc.circle(MARGIN_X + badge / 2, y + badge / 2, badge / 2).fill(BLUE);
  doc
    .fillColor(WHITE)
    .font("Helvetica-Bold")
    .fontSize(8.5)
    .text(String(number), MARGIN_X, y + 3.5, { width: badge, align: "center" });

  doc
    .fillColor(DARK)
    .font("Helvetica-Bold")
    .fontSize(10.5)
    .text(title, MARGIN_X + badge + 8, y + 2.5, { width: CONTENT_W - badge - 8 });

  const ruleY = y + badge + 5;
  doc
    .moveTo(MARGIN_X, ruleY)
    .lineTo(MARGIN_X + CONTENT_W, ruleY)
    .strokeColor(RULE)
    .lineWidth(0.7)
    .stroke();

  return ruleY + 10;
}

function drawHeader(doc) {
  const headerH = 86;
  doc.rect(0, 0, PAGE_W, headerH).fill(DARK);
  doc.rect(0, 0, 6, PAGE_H).fill(BLUE);
  doc.rect(0, headerH - 4, PAGE_W, 4).fill(BLUE);

  doc
    .fillColor("#8FA8FF")
    .font("Helvetica-Bold")
    .fontSize(7.5)
    .text("DATAGRAM NIGERIA", MARGIN_X, 14, {
      width: CONTENT_W * 0.55,
      characterSpacing: 1.6,
    });

  // Doc type pill (right)
  const pillLabel = "PROCUREMENT SPEC SHEET";
  doc.font("Helvetica-Bold").fontSize(6.5);
  const pillW = doc.widthOfString(pillLabel) + 14;
  const pillX = PAGE_W - MARGIN_X - pillW;
  doc.roundedRect(pillX, 12, pillW, 14, 7).fill(BLUE);
  doc.fillColor(WHITE).text(pillLabel, pillX, 15.5, { width: pillW, align: "center" });

  doc
    .fillColor(WHITE)
    .font("Helvetica-Bold")
    .fontSize(17)
    .text("Starlink Offshore & Maritime", MARGIN_X, 30, { width: CONTENT_W });

  doc
    .fillColor("#C5D2FF")
    .font("Helvetica")
    .fontSize(9)
    .text(
      "Satellite Internet Integration Guide for OSVs, FPSOs & Offshore Platforms",
      MARGIN_X,
      52,
      { width: CONTENT_W }
    );

  doc
    .fillColor(WHITE)
    .font("Helvetica")
    .fontSize(8)
    .text(`www.datagram.ng    ·    ${PHONE}    ·    ${EMAIL}`, MARGIN_X, 68, {
      width: CONTENT_W,
    });

  return headerH + 14;
}

function drawTable(doc, y) {
  const colSpecW = 160;
  const colDetailW = CONTENT_W - colSpecW;
  const padX = 9;
  const rowH = 15.5;
  const headerH = 17;

  doc.rect(MARGIN_X, y, CONTENT_W, headerH).fill(BLUE);
  doc
    .fillColor(WHITE)
    .font("Helvetica-Bold")
    .fontSize(7.5)
    .text("SPECIFICATION", MARGIN_X + padX, y + 4.5, { width: colSpecW - padX * 2 })
    .text("DETAIL", MARGIN_X + colSpecW + padX, y + 4.5, { width: colDetailW - padX * 2 });

  y += headerH;
  const tableTop = y - headerH;

  hardwareRows.forEach((row, i) => {
    doc.rect(MARGIN_X, y, CONTENT_W, rowH).fill(i % 2 === 0 ? ROW_ALT : WHITE);
    doc
      .moveTo(MARGIN_X + colSpecW, y)
      .lineTo(MARGIN_X + colSpecW, y + rowH)
      .strokeColor(RULE)
      .lineWidth(0.4)
      .stroke();

    doc
      .fillColor(DARK)
      .font("Helvetica-Bold")
      .fontSize(7.5)
      .text(row[0], MARGIN_X + padX, y + 4, { width: colSpecW - padX * 2, lineBreak: false });

    doc
      .fillColor(MUTED)
      .font("Helvetica")
      .fontSize(7.5)
      .text(row[1], MARGIN_X + colSpecW + padX, y + 4, {
        width: colDetailW - padX * 2,
        lineBreak: false,
      });

    y += rowH;
  });

  doc
    .rect(MARGIN_X, tableTop, CONTENT_W, headerH + hardwareRows.length * rowH)
    .strokeColor(RULE)
    .lineWidth(0.7)
    .stroke();

  return y + 12;
}

/** Two-column numbered process list */
function drawProcessTwoCol(doc, y) {
  const gap = 14;
  const colW = (CONTENT_W - gap) / 2;
  const leftSteps = processSteps.slice(0, 4);
  const rightSteps = processSteps.slice(4);

  function drawCol(steps, startNum, x, startY) {
    let cy = startY;
    steps.forEach((step, i) => {
      const num = startNum + i;
      const circleR = 7;
      const textX = x + 20;
      const textW = colW - 22;

      doc.font("Helvetica").fontSize(7.5);
      const textH = doc.heightOfString(step, { width: textW });
      const rowH = Math.max(circleR * 2, textH) + 5;

      doc.circle(x + circleR, cy + circleR, circleR).fill(LIGHT_BLUE);
      doc.circle(x + circleR, cy + circleR, circleR).strokeColor(BLUE).lineWidth(0.9).stroke();
      doc
        .fillColor(BLUE_DARK)
        .font("Helvetica-Bold")
        .fontSize(7.5)
        .text(String(num), x, cy + circleR - 3, { width: circleR * 2, align: "center" });

      doc
        .fillColor(DARK)
        .font("Helvetica")
        .fontSize(7.5)
        .text(step, textX, cy + Math.max(0, (circleR * 2 - textH) / 2), { width: textW });

      cy += rowH;
    });
    return cy;
  }

  const leftEnd = drawCol(leftSteps, 1, MARGIN_X, y);
  const rightEnd = drawCol(rightSteps, 5, MARGIN_X + colW + gap, y);
  return Math.max(leftEnd, rightEnd) + 10;
}

function drawNetworkTwoCol(doc, y) {
  const gap = 10;
  const colW = (CONTENT_W - gap) / 2;

  networkOptions.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = MARGIN_X + col * (colW + gap);

    doc.font("Helvetica").fontSize(7.5);
    const textW = colW - 28;
    const textH = doc.heightOfString(item, { width: textW });
    const boxH = textH + 14;
    const cy = y + row * (boxH + 6);

    // Approximate equal height boxes — use fixed min height
    const h = Math.max(boxH, 36);
    // Recalculate with fixed approach: measure all first
  });

  // Measure max height per row
  const heights = [0, 0];
  networkOptions.forEach((item, i) => {
    const row = Math.floor(i / 2);
    doc.font("Helvetica").fontSize(7.5);
    const textH = doc.heightOfString(item, { width: colW - 28 });
    heights[row] = Math.max(heights[row], textH + 14, 34);
  });

  let maxY = y;
  networkOptions.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = MARGIN_X + col * (colW + gap);
    const cy = y + heights.slice(0, row).reduce((a, b) => a + b + 6, 0);
    const h = heights[row];

    doc.roundedRect(x, cy, colW, h, 3).fill(LIGHT_BLUE);
    doc.rect(x, cy, 3, h).fill(BLUE);

    doc.circle(x + 12, cy + 12, 2.2).fill(BLUE);

    doc
      .fillColor(DARK)
      .font("Helvetica")
      .fontSize(7.5)
      .text(item, x + 20, cy + 8, { width: colW - 28 });

    maxY = Math.max(maxY, cy + h);
  });

  return maxY + 12;
}

function drawCoverage(doc, y) {
  doc
    .fillColor(MUTED)
    .font("Helvetica")
    .fontSize(8)
    .text("DataGram mobilises to offshore and coastal installations across:", MARGIN_X, y, {
      width: CONTENT_W,
    });
  y = doc.y + 7;

  const gap = 6;
  const cols = 3;
  const chipW = (CONTENT_W - gap * (cols - 1)) / cols;
  const chipH = 20;

  coverageAreas.forEach((area, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = MARGIN_X + col * (chipW + gap);
    const cy = y + row * (chipH + gap);

    doc.roundedRect(x, cy, chipW, chipH, 3).fill(ROW_ALT);
    doc.roundedRect(x, cy, chipW, chipH, 3).strokeColor(RULE).lineWidth(0.55).stroke();
    doc
      .fillColor(DARK)
      .font("Helvetica")
      .fontSize(7)
      .text(area, x + 6, cy + 6, { width: chipW - 12, align: "center", lineBreak: false });
  });

  const rows = Math.ceil(coverageAreas.length / cols);
  return y + rows * (chipH + gap) + 8;
}

function drawContactCta(doc, y) {
  const boxH = 78;
  doc.roundedRect(MARGIN_X, y, CONTENT_W, boxH, 5).fill(DARK);
  doc.rect(MARGIN_X, y, 5, boxH).fill(BLUE);

  doc.circle(MARGIN_X + 24, y + 18, 8).fill(BLUE);
  doc
    .fillColor(WHITE)
    .font("Helvetica-Bold")
    .fontSize(8)
    .text("5", MARGIN_X + 16, y + 14, { width: 16, align: "center" });

  doc
    .fillColor(WHITE)
    .font("Helvetica-Bold")
    .fontSize(11)
    .text("Request a Site Survey", MARGIN_X + 38, y + 11, { width: CONTENT_W - 50 });

  doc
    .fillColor("#B8C7FF")
    .font("Helvetica")
    .fontSize(7.5)
    .text(
      "Contact DataGram to arrange a no-obligation pre-installation site assessment for your vessel or platform.",
      MARGIN_X + 16,
      y + 30,
      { width: CONTENT_W - 32 }
    );

  const contactY = y + 50;
  const colW = (CONTENT_W - 32) / 3;
  const contacts = [
    ["WhatsApp", WHATSAPP],
    ["Email", EMAIL],
    ["Web", "datagram.ng/starlink-offshore-maritime-installation"],
  ];

  contacts.forEach((c, i) => {
    const x = MARGIN_X + 16 + i * colW;
    doc
      .fillColor("#8FA8FF")
      .font("Helvetica-Bold")
      .fontSize(6)
      .text(c[0].toUpperCase(), x, contactY, { width: colW - 6, characterSpacing: 0.5 });
    doc
      .fillColor(WHITE)
      .font("Helvetica")
      .fontSize(7)
      .text(c[1], x, contactY + 10, { width: colW - 6 });
  });

  return y + boxH + 10;
}

function drawFooter(doc, y) {
  doc
    .moveTo(MARGIN_X, y)
    .lineTo(MARGIN_X + CONTENT_W, y)
    .strokeColor(RULE)
    .lineWidth(0.55)
    .stroke();

  doc
    .fillColor(MUTED)
    .font("Helvetica")
    .fontSize(6.2)
    .text(
      "This document is issued by DataGram Nigeria. Starlink is a product of SpaceX. DataGram is an independent installation and service provider. Specifications subject to change — confirm current hardware specs at starlink.com.",
      MARGIN_X,
      y + 6,
      { width: CONTENT_W, lineGap: 1.2 }
    );
}

function generate() {
  ensureDir(outDir);

  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 0, bottom: 28, left: MARGIN_X, right: MARGIN_X },
    info: {
      Title: "DataGram Starlink Offshore & Maritime Integration Spec Sheet",
      Author: "DataGram Nigeria",
      Subject: "Starlink Flat High Performance — offshore procurement reference",
    },
  });

  const stream = fs.createWriteStream(outFile);
  doc.pipe(stream);

  let y = drawHeader(doc);

  y = sectionHeading(doc, 1, "Recommended Hardware — Starlink Flat High Performance", y);
  y = drawTable(doc, y);

  y = sectionHeading(doc, 2, "DataGram Offshore Installation Process", y);
  y = drawProcessTwoCol(doc, y);

  y = sectionHeading(doc, 3, "Supported Network Configurations", y);
  y = drawNetworkTwoCol(doc, y);

  y = sectionHeading(doc, 4, "Operational Coverage", y);
  y = drawCoverage(doc, y);

  y = drawContactCta(doc, y);
  drawFooter(doc, Math.min(y, PAGE_H - 40));

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

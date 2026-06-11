/**
 * Download blog hero images via the Pexels API (1600×900 JPG).
 * Requires PEXELS_API_KEY in .env — get one free at https://www.pexels.com/api/
 */
import fs from "fs";
import path from "path";
import { execFile } from "child_process";
import { promisify } from "util";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config({ path: path.join(path.dirname(fileURLToPath(import.meta.url)), "../.env") });

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../public/images/blog");
const DELAY_MS = 300;

/** slug → { primary, fallback } search queries */
const IMAGE_MAP = {
  "how-much-is-starlink-nigeria-price-naira-2026": {
    primary: "satellite dish installation",
    fallback: "satellite internet",
  },
  "starlink-mini-vs-standard-which-buy-nigeria": {
    primary: "satellite dish technology",
    fallback: "wireless antenna",
  },
  "how-to-pay-starlink-nigeria-virtual-dollar-cards": {
    primary: "online payment technology",
    fallback: "digital banking",
  },
  "fixing-starlink-roaming-restrictions-nigeria": {
    primary: "satellite signal network",
    fallback: "wireless network tower",
  },
  "starlink-vs-mtn-5g-router-speed-test-nigeria": {
    primary: "internet speed test router",
    fallback: "wifi router technology",
  },
  "starlink-slower-when-it-rains-nigeria": {
    primary: "satellite dish rain weather",
    fallback: "antenna rain storm",
  },
  "starlink-heavy-harmattan-dust-nigeria": {
    primary: "dusty sky harmattan africa",
    fallback: "dry dust landscape africa",
  },
  "best-power-bank-inverter-starlink-mini-nigeria": {
    primary: "solar battery inverter power",
    fallback: "power backup electricity",
  },
  "spectranet-vs-starlink-remote-work-nigeria-2026": {
    primary: "remote work laptop internet",
    fallback: "work from home office",
  },
  "transfer-starlink-ownership-nigerian-account": {
    primary: "technology account transfer",
    fallback: "digital handshake technology",
  },
  "troubleshooting-starlink-offline-searching-nigeria": {
    primary: "network troubleshooting technology",
    fallback: "router signal problem",
  },
  "starlink-high-performance-dish-worth-cost-smes": {
    primary: "business internet office technology",
    fallback: "satellite dish rooftop",
  },
  "power-starlink-router-solar-nigeria": {
    primary: "solar panel rooftop africa",
    fallback: "solar energy installation",
  },
  "share-one-starlink-dish-two-flats-compound": {
    primary: "apartment building rooftop antenna",
    fallback: "residential compound africa",
  },
  "starlink-dish-stolen-nigeria-what-to-do": {
    primary: "security lock protection technology",
    fallback: "satellite dish security mount",
  },
  "fix-starlink-cable-disconnected-error-v3-v4": {
    primary: "ethernet cable network connection",
    fallback: "cable technology disconnect",
  },
  "ipnx-fibre-vs-starlink-nigerian-estates": {
    primary: "fiber optic cable internet",
    fallback: "broadband cable infrastructure",
  },
  "starlink-customer-care-nigeria-how-to-reach": {
    primary: "customer support help desk",
    fallback: "technology support service",
  },
  "activating-starlink-unauthorized-country-via-nigeria-risks": {
    primary: "satellite globe network coverage",
    fallback: "world map connectivity",
  },
  "best-ups-brands-nigeria-starlink-online": {
    primary: "UPS power backup electricity surge",
    fallback: "power supply unit technology",
  },
  "bypass-starlink-router-third-party-mesh-deco-asus": {
    primary: "mesh wifi router home network",
    fallback: "wireless router technology",
  },
  "buy-used-starlink-dish-nigeria-buyers-guide": {
    primary: "satellite dish secondhand market",
    fallback: "technology marketplace buying",
  },
  "starlink-residential-vs-priority-business-nigerian-smes": {
    primary: "small business office internet",
    fallback: "business broadband connection",
  },
  "ground-starlink-dish-lightning-strikes-nigeria": {
    primary: "lightning rod grounding installation",
    fallback: "lightning storm protection",
  },
  "professional-starlink-installation-nigeria-guide": {
    primary: "satellite dish rooftop technician installation",
    fallback: "antenna installation professional",
  },
  "extend-starlink-wifi-range-large-nigerian-home": {
    primary: "wifi router large house coverage",
    fallback: "wireless network home",
  },
  "change-starlink-wifi-name-password-nigeria": {
    primary: "wifi settings smartphone app",
    fallback: "internet password security",
  },
  "starlink-ethernet-adapter-setup-nigeria": {
    primary: "ethernet adapter cable setup",
    fallback: "network cable connection",
  },
  "best-starlink-mounts-nigerian-roofs-corrugated-concrete": {
    primary: "antenna mount rooftop corrugated iron",
    fallback: "roof mounting bracket installation",
  },
  "protect-starlink-cable-rats-rodents-nigeria": {
    primary: "cable conduit pipe protection wall",
    fallback: "electrical conduit wiring protection",
  },
  "average-starlink-latency-ping-nigeria": {
    primary: "internet speed latency network ping",
    fallback: "fiber internet speed test",
  },
  "securely-mount-starlink-wind-damage-nigeria": {
    primary: "antenna mount wind storm secure",
    fallback: "rooftop installation secure",
  },
  "can-starlink-be-hacked-security-nigeria": {
    primary: "cybersecurity network protection",
    fallback: "internet security firewall",
  },
  "troubleshoot-starlink-red-light-router-nigeria": {
    primary: "router red light error network",
    fallback: "wifi router troubleshoot",
  },
  "stow-starlink-dish-relocation-maintenance": {
    primary: "satellite dish packed relocation moving",
    fallback: "antenna equipment transport",
  },
  "starlink-gaming-nigeria-ping-packet-loss-stability": {
    primary: "gaming setup internet connection fast",
    fallback: "gamer computer network",
  },
  "connect-cctv-cameras-starlink-network": {
    primary: "CCTV security camera installation",
    fallback: "surveillance camera outdoor",
  },
  "why-starlink-keeps-rebooting-nigeria-solutions": {
    primary: "power surge router restart electricity",
    fallback: "UPS inverter power nigeria",
  },
  "starlink-data-usage-data-cap-nigeria": {
    primary: "data usage internet monitoring",
    fallback: "internet data bandwidth",
  },
  "run-starlink-cable-through-walls-safely": {
    primary: "cable routing wall drilling installation",
    fallback: "electrician cable wall",
  },
  "starlink-setup-remote-software-developers-nigeria": {
    primary: "software developer laptop fast internet",
    fallback: "remote developer coding home",
  },
  "starlink-ngos-rural-field-operations-nigeria": {
    primary: "NGO field workers rural africa",
    fallback: "rural community africa technology",
  },
  "combine-starlink-5g-failover-multi-wan": {
    primary: "network failover redundancy technology",
    fallback: "multiple internet connection setup",
  },
  "starlink-account-suspended-what-to-do": {
    primary: "account suspended online service help",
    fallback: "technology account support",
  },
  "factory-reset-starlink-router-guide": {
    primary: "router factory reset button network",
    fallback: "wifi router reset setup",
  },
  "flat-high-performance-vs-standard-dish-maritime": {
    primary: "maritime satellite dish ship deck",
    fallback: "vessel antenna ocean",
  },
  "starlink-maritime-ships-boats-nigeria-setup": {
    primary: "ship satellite internet ocean vessel",
    fallback: "boat antenna offshore",
  },
  "starlink-installation-lagos-high-rises-signal-obstructions": {
    primary: "Lagos Nigeria city skyline highrise",
    fallback: "nigeria city urban rooftop",
  },
  "best-starlink-installers-abuja-fct-estates": {
    primary: "Abuja Nigeria estate residential",
    fallback: "nigeria capital city housing",
  },
  "starlink-port-harcourt-rain-fade-garden-city": {
    primary: "Port Harcourt Nigeria rain city",
    fallback: "nigeria rain urban city",
  },
  "internet-alternatives-oil-gas-rivers-state": {
    primary: "oil gas industry nigeria offshore",
    fallback: "industrial facility nigeria",
  },
  "starlink-installation-bayelsa-creeks-yenagoa": {
    primary: "river creek nigeria delta boats",
    fallback: "mangrove creek africa water",
  },
  "delta-state-starlink-performance-warri-asaba": {
    primary: "Warri Nigeria city market",
    fallback: "nigeria delta state urban",
  },
  "starlink-unn-students-nsukka-enugu": {
    primary: "university students campus nigeria",
    fallback: "college campus africa students",
  },
  "starlink-installation-anambra-onitsha-businesses": {
    primary: "Onitsha market Nigeria commerce",
    fallback: "nigeria busy market trade",
  },
  "starlink-vs-fibre-owerri-imo-state": {
    primary: "Owerri Nigeria city residential",
    fallback: "nigeria southeast city",
  },
  "starlink-installation-aba-abia-business-guide": {
    primary: "Aba Nigeria manufacturing market",
    fallback: "nigeria business industrial",
  },
  "starlink-agriculture-ebonyi-state-farms": {
    primary: "farm agriculture nigeria crops field",
    fallback: "africa farmland rural crops",
  },
  "starlink-topographical-challenges-enugu-state": {
    primary: "Enugu Nigeria hills landscape",
    fallback: "nigeria hilly terrain landscape",
  },
  "starlink-installation-edo-state-benin-city": {
    primary: "Benin City Nigeria urban street",
    fallback: "nigeria city edo architecture",
  },
  "south-east-nigeria-internet-crisis-starlink-solution": {
    primary: "southeast nigeria community internet",
    fallback: "africa rural connectivity",
  },
  "starlink-lekki-victoria-island-fibre-cuts": {
    primary: "Lekki Lagos Nigeria ocean coastline",
    fallback: "Victoria Island Lagos highrise",
  },
  "abuja-suburbs-lugbe-kubwa-starlink": {
    primary: "Abuja Nigeria suburban residential housing",
    fallback: "nigeria estate suburb homes",
  },
  "starlink-speeds-uyo-akwa-ibom-remote-work": {
    primary: "Uyo Akwa Ibom Nigeria city",
    fallback: "nigeria south south city modern",
  },
  "starlink-calabar-cross-river-state": {
    primary: "Calabar Nigeria river landscape",
    fallback: "cross river nigeria scenic",
  },
  "south-south-nigeria-starlink-coverage-map-speeds": {
    primary: "Nigeria map south south region",
    fallback: "nigeria satellite coverage map",
  },
  "starlink-floating-homes-makoko-coastal-lagos": {
    primary: "Makoko Lagos floating homes water",
    fallback: "coastal africa water community",
  },
  "starlink-canopy-obstructions-niger-delta-forests": {
    primary: "Niger Delta forest canopy nigeria",
    fallback: "tropical forest canopy africa",
  },
  "starlink-expat-compounds-port-harcourt": {
    primary: "expat compound gated estate nigeria",
    fallback: "gated community residential africa",
  },
  "starlink-banks-atms-rural-anambra": {
    primary: "rural bank ATM nigeria community",
    fallback: "mobile banking nigeria rural",
  },
  "starlink-hotels-asaba-guest-wifi-delta": {
    primary: "hotel lobby wifi modern nigeria",
    fallback: "hotel reception africa modern",
  },
  "starlink-media-broadcasting-ikeja-lagos": {
    primary: "broadcast media studio nigeria",
    fallback: "television radio broadcast africa",
  },
  "amazon-kuiper-vs-starlink-2027-nigeria": {
    primary: "satellite orbit space earth",
    fallback: "low earth orbit satellite constellation",
  },
  "starlink-direct-to-cell-nigeria-telecoms-replacement": {
    primary: "satellite phone signal direct cell",
    fallback: "mobile network satellite coverage",
  },
  "ncc-satellite-internet-regulations-nigeria-2027": {
    primary: "government regulation technology policy",
    fallback: "telecom regulation office",
  },
  "starlink-estates-built-in-satellite-nigeria-real-estate": {
    primary: "modern estate smart home nigeria",
    fallback: "residential development nigeria smart",
  },
  "starlink-v4-hardware-upgrades-expected-features": {
    primary: "satellite dish technology upgrade hardware",
    fallback: "antenna hardware upgrade modern",
  },
  "oneweb-vs-starlink-nigerian-enterprise-outlook": {
    primary: "enterprise satellite internet business",
    fallback: "corporate technology network future",
  },
  "starlink-localized-naira-pricing-predictions-2027": {
    primary: "Nigerian naira currency exchange",
    fallback: "nigeria economy currency",
  },
  "starlink-rural-nigerian-healthcare-impact-2028": {
    primary: "rural healthcare clinic africa nigeria",
    fallback: "village health worker africa",
  },
  "starlink-ewaste-upgrade-recycle-dishes-nigeria": {
    primary: "electronic recycling ewaste technology",
    fallback: "tech recycling sustainability",
  },
  "starlink-aviation-nigeria-in-flight-wifi-future": {
    primary: "airplane cockpit flight nigeria",
    fallback: "aircraft wifi in-flight",
  },
  "6g-leo-constellations-nigerian-market-merge": {
    primary: "satellite constellation space stars",
    fallback: "night sky stars orbit",
  },
  "starlink-nigerian-real-estate-value-remote-ready-homes": {
    primary: "modern smart home internet ready",
    fallback: "luxury home nigeria technology",
  },
  "starlink-community-gateways-nigeria-rural-villages": {
    primary: "rural village community africa internet",
    fallback: "africa village connectivity satellite",
  },
  "starlink-lite-plan-emerging-markets-nigeria": {
    primary: "affordable internet emerging market mobile",
    fallback: "budget internet africa",
  },
  "satellite-hardware-import-tax-tariff-nigeria-forecast": {
    primary: "shipping customs import cargo nigeria",
    fallback: "port cargo import africa",
  },
  "maritime-starlink-gulf-guinea-piracy-tracking": {
    primary: "gulf of guinea ocean ship maritime",
    fallback: "offshore vessel ocean africa",
  },
  "solar-integrated-starlink-dishes-nigeria-future": {
    primary: "solar panel satellite dish integration",
    fallback: "solar energy africa rooftop",
  },
  "starlink-as-a-service-leasing-dishes-nigeria-events": {
    primary: "outdoor event technology setup nigeria",
    fallback: "event wifi setup temporary",
  },
  "smart-farming-nigeria-next-gen-leo-networks": {
    primary: "smart farming drone technology africa",
    fallback: "precision agriculture nigeria",
  },
  "copper-to-leo-transition-demise-legacy-isps-nigeria": {
    primary: "old copper wire cable network obsolete",
    fallback: "fiber replace copper network",
  },
};

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function searchPexels(query, apiKey) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;
  const res = await fetch(url, {
    headers: { Authorization: apiKey },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Pexels API ${res.status}: ${body.slice(0, 120)}`);
  }
  return res.json();
}

async function downloadUrlToFile(url, outPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Image download HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) throw new Error(`Image too small (${buf.length} bytes)`);
  fs.writeFileSync(outPath, buf);
}

async function resizeTo1600x900(srcPath, destPath) {
  await execFileAsync("sips", ["-z", "900", "1600", srcPath, "--out", destPath]);
}

async function findPhotoUrl(queries, apiKey) {
  for (const query of queries) {
    const data = await searchPexels(query, apiKey);
    if (data.photos?.length > 0 && data.photos[0].src?.large2x) {
      return { url: data.photos[0].src.large2x, query };
    }
  }
  return null;
}

function clearExistingImages() {
  if (!fs.existsSync(OUT_DIR)) return 0;
  const files = fs.readdirSync(OUT_DIR).filter((f) => f.endsWith(".jpg"));
  for (const f of files) fs.unlinkSync(path.join(OUT_DIR, f));
  return files.length;
}

async function main() {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    console.error(
      "Missing PEXELS_API_KEY. Add to .env:\n  PEXELS_API_KEY=your_key_here\nGet a free key at https://www.pexels.com/api/",
    );
    process.exit(1);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const removed = clearExistingImages();
  console.log(`Removed ${removed} existing images from ${OUT_DIR}\n`);

  const slugs = Object.keys(IMAGE_MAP);
  const succeeded = [];
  const skipped = [];
  const failed = [];

  console.log(`Downloading ${slugs.length} blog hero images via Pexels API\n`);

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const { primary, fallback } = IMAGE_MAP[slug];
    const finalPath = path.join(OUT_DIR, `${slug}.jpg`);
    const tmpRaw = `${finalPath}.raw.jpg`;

    try {
      process.stdout.write(`[${i + 1}/${slugs.length}] ${slug} ... `);
      const result = await findPhotoUrl([primary, fallback], apiKey);

      if (!result) {
        console.log("SKIP — no results for primary or fallback");
        skipped.push(slug);
        continue;
      }

      await downloadUrlToFile(result.url, tmpRaw);
      await resizeTo1600x900(tmpRaw, finalPath);
      fs.unlinkSync(tmpRaw);

      const kb = Math.round(fs.statSync(finalPath).size / 1024);
      console.log(`OK (${kb} KB, query: "${result.query}")`);
      succeeded.push(slug);
    } catch (err) {
      console.log(`FAILED — ${err.message}`);
      failed.push({ slug, error: err.message });
      for (const tmp of [tmpRaw, `${finalPath}.tmp.jpg`]) {
        if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
      }
    }

    if (i < slugs.length - 1) await sleep(DELAY_MS);
  }

  console.log("\n========== SUMMARY ==========");
  console.log(`Successfully downloaded: ${succeeded.length}`);
  console.log(`Skipped (no Pexels results): ${skipped.length}`);
  console.log(`Failed (errors): ${failed.length}`);

  if (skipped.length) {
    console.log("\nNO IMAGE FOUND:");
    for (const s of skipped) console.log(`  - ${s}`);
  }
  if (failed.length) {
    console.log("\nFailed slugs:");
    for (const f of failed) console.log(`  - ${f.slug}: ${f.error}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

import { Anchor, Building2, Home, Ship, Waves, Wifi, Zap, Shield } from "lucide-react";
import type { IndustryLandingConfig } from "./types";

const img = (file: string) => `/images/${file}`;

const proof = (
  file: string,
  alt: string,
  caption: string,
  comment: string,
  objectPosition = "center"
) => ({
  src: img(file),
  imageFile: file,
  alt,
  caption,
  imageComment: comment,
  objectPosition,
});

const SPEED = {
  label: "Typical performance range",
  down: "50–1,000 Mbps",
  up: "10–100 Mbps",
  latency: "20–33 ms",
};

const roamingFaq = {
  question: "What is Starlink roaming and do I need it?",
  answer:
    "Roaming lets you use Starlink across different land regions globally, not only where you activated the service. It helps where local coverage is limited or not fully available yet. Roaming costs extra on top of your standard subscription.",
};

const standardFaqs = [
  {
    question: "How much is the monthly subscription fee?",
    answer:
      "₦57,000 – ₦3,000,000+ depending on location, service availability, subscription type, and plan eligibility.",
  },
  {
    question: "Do I need a technician to install Starlink?",
    answer:
      "For simple residential setups, self-install is possible using the Starlink app. However, a certified installer is recommended if you need WiFi coverage across a large building, proper outdoor mounting, structural stability for the dish, or help avoiding signal obstructions.",
  },
  {
    question: "Do you offer ongoing support after installation?",
    answer:
      "Post-installation support is available for enterprise, roaming, and maritime clients on active or renewed subscriptions. Speeds: 50–1,000 Mbps. Latency: 20–30 ms under normal conditions.",
  },
  {
    question: "Is roof drilling required for Starlink installation?",
    answer:
      "Not always. We use wall mounts where the structure allows. Drilling is done when necessary for proper cable routing, and all penetrations are sealed to prevent water entry.",
  },
];

export const industryLandingPages: IndustryLandingConfig[] = [
  {
    path: "/starlink-offshore-maritime-installation",
    seoTitle:
      "Starlink Offshore & Maritime Installation Nigeria | Oil, Gas & Deep Sea | DataGram",
    metaDescription:
      "Maritime Starlink installs for rigs, OSVs, and coastal bases in Nigeria. Low-latency LEO, marine mounts, and field support from DataGram.",
    canonical: "/starlink-offshore-maritime-installation",
    ogImage: img("maritime2.jpeg"),
    h1: "Starlink Offshore & Maritime Installation Nigeria",
    heroLabel: "Oil, gas & deep-sea operations",
    heroSubheading:
      "Certified marine mounting, motion-rated hardware, and shore-to-vessel handover for Niger Delta fleets and offshore camps.",
    heroImageAlt: "Starlink dish installed on tanker deck in the open ocean, Nigeria offshore",
    heroImage: img("maritime2.jpeg"),
    heroImageFile: "maritime2.jpeg",
    heroImageReason:
      "wide cinematic shot of tanker deck with Starlink dish, open ocean horizon — strongest visual for the hero, communicates deep-sea scale",
    heroObjectPosition: "center top",
    overviewTitle: "How maritime Starlink stays connected at sea",
    overviewParagraphs: [
      "Offshore platforms, OSVs, and remote marine bases cannot wait months for subsea fibre builds. Starlink’s low-Earth-orbit network delivers usable throughput at sea when you pair the correct mobility or maritime hardware with a mount that survives Gulf of Guinea spray and vibration.",
      "Maritime Starlink uses a phased-array antenna that tracks several low-Earth-orbit satellites at once. A fixed home dish locks to one satellite pass; maritime terminals hand off continuously between satellites as the vessel moves. That handoff is what keeps the link alive in open water where there is no land infrastructure.",
      "DataGram engineers survey deck space, cable glands, and power feeds before any hole is drilled. We document obstruction maps at berth and at typical heading, then specify marine-rated cabling, surge protection, and router placement that keeps bridge networks separate from crew WiFi.",
    ],
    stats: [
      { label: "Typical latency (LEO)", value: "20–33 ms", note: "Varies with sea state, plan class, and beam load." },
      { label: "Download range", value: "50–1,000 Mbps", note: "Hardware tier, weather, and subscription affect results." },
      { label: "Upload range", value: "10–100 Mbps", note: "Confirm plan class before procurement." },
      { label: "Install window", value: "1–3 days", note: "After marine survey and PTW approval." },
    ],
    whyTitle: "Why Starlink for offshore & maritime",
    whyCards: [
      {
        icon: Anchor,
        title: "Motion-rated installs",
        body: "We align mounts for roll and pitch on OSVs, fast supply boats, and static platforms, using marine hardware—not repurposed rooftop kits.",
      },
      {
        icon: Waves,
        title: "Salt-spray discipline",
        body: "Stainless fixings, sealed glands, and drip loops keep corrosion out of RF paths. Cables are routed away from hot exhaust and crane sweep zones.",
      },
      {
        icon: Zap,
        title: "Power on diesel grids",
        body: "Dish and router ride through generator transfers with sized UPS segments. We measure inrush so breakers do not nuisance-trip mid-watch.",
      },
      {
        icon: Shield,
        title: "Segmented crew vs ops VLANs",
        body: "Bridge telemetry, CCTV backhaul, and crew internet can sit on separate SSIDs with firewall rules you can audit.",
      },
    ],
    proofTitle: "Deployment proof",
    proofCards: [
      proof(
        "maritime.jpeg",
        "Starlink dish mounted on vessel bow at sea",
        "Bow mount on a large vessel at open sea — offshore capability verified in the field.",
        "IMAGE: maritime.jpeg — large vessel at open sea, clear proof of offshore capability"
      ),
      proof(
        "maritime4.jpeg",
        "Starlink dish installed on oil platform in the Niger Delta",
        "Platform install in the Niger Delta — direct proof for oil and gas operators.",
        "IMAGE: maritime4.jpeg — real Nigerian gas flare rig — direct visual proof for oil and gas clients"
      ),
      proof(
        "maritime5.jpeg",
        "Starlink dish on vessel railing at sea, DataGram offshore installation",
        "Deck railing mount in open water — reliable offshore connectivity.",
        "IMAGE: maritime5.jpeg — clean offshore deck shot, open grey sea — reinforces offshore reliability"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote:
        "We needed video calls with shore engineering without booking satellite time slots. After the marine survey, install finished between crew changeovers.",
      attribution: "Operations lead, jack-up campaign (name withheld)",
    },
    packagesTitle: "Maritime packages",
    packages: [
      {
        name: "Berth survey",
        priceLabel: "From ₦180,000",
        features: ["Deck photos & obstruction map", "Power and gland plan", "Written scope for marine PTW"],
        cta: "Request survey",
      },
      {
        name: "Offshore install",
        priceLabel: "From ₦650,000",
        features: ["Marine mount & cable tray", "Dish alignment & speed baseline", "Handover PDF for master & IT"],
        cta: "Get install quote",
      },
      {
        name: "Fleet support",
        priceLabel: "Monthly retainer",
        features: ["Remote obstruction checks", "Spare RF path advisory", "Priority truck-roll in PH corridor"],
        cta: "Talk to support",
      },
    ],
    faqs: [
      {
        question: "Does Starlink work on moving vessels in Nigeria waters?",
        answer:
          "Mobility and maritime service classes are designed for motion, but hardware must match the plan you purchase. We verify eligibility before drilling decks and test at operational heading, not only at calm berth.",
      },
      {
        question: "What do marine surveys include?",
        answer:
          "A marine survey covers mast and pedestal placement, crane sweep clearance so the dish is not blocked, cable routing from the dish to the comms room, power circuit capacity, grounding continuity, Permit to Work (PTW) risk notes, a spray-exposure bill of materials for hardware selection, and WiFi planning across the bridge, crew cabins, and engine room.",
      },
      {
        question: "What speeds should offshore teams expect?",
        answer:
          "Download: 50 Mbps – 1,000 Mbps. Upload: 10 Mbps – 100 Mbps. Latency: 20–33 ms. Actual performance varies based on the hardware tier, sea state, and subscription plan.",
      },
      {
        question: "Do you support maritime or mobility Starlink plans?",
        answer:
          "Yes. The right plan depends on your vessel type, how far it travels in nautical miles, and the regions it operates in. DataGram will assess your vessel profile and recommend the appropriate subscription before activation.",
      },
      {
        question: "Do you have BOSIET or maritime certification?",
        answer: "Yes, we do.",
      },
      {
        question: "Do you handle maritime activation and subscription?",
        answer: "Yes, we do.",
      },
      roamingFaq,
      ...standardFaqs,
    ],
    serviceAreaSchema: "Nigerian offshore and coastal waters",
    keywords: [
      "Starlink maritime Nigeria",
      "offshore Starlink installation",
      "OSV satellite internet",
      "oil gas connectivity Niger Delta",
    ],
  },
  {
    path: "/starlink-enterprise-nigeria",
    seoTitle: "Starlink for Enterprise Nigeria | NGOs, Offices & Industrial Sites | DataGram",
    metaDescription:
      "Enterprise Starlink: VLANs, failover with fibre, generator-safe power, and documented handover for Nigerian offices, NGOs, and plants.",
    canonical: "/starlink-enterprise-nigeria",
    ogImage: img("StarlinkCompanyInstallation.jpeg"),
    h1: "Starlink for Enterprise Nigeria",
    heroLabel: "NGOs, offices & industrial sites",
    heroSubheading:
      "Dual-WAN failover, static IP planning, and install documentation your IT team can audit—not a consumer router dropped in a rack.",
    heroImageAlt: "Starlink installation at NCDMB Conference Centre Nigeria, DataGram enterprise",
    heroImage: img("StarlinkCompanyInstallation.jpeg"),
    heroImageFile: "StarlinkCompanyInstallation.jpeg",
    heroImageReason:
      "NCDMB Conference Centre clearly visible in background — named Nigerian government/institutional building gives immediate credibility to enterprise clients",
    heroObjectPosition: "center",
    overviewTitle: "Business-grade satellite when terrestrial SLAs slip",
    overviewParagraphs: [
      "Enterprises adopt Starlink when fibre lead times stretch quarters, when backup links must be independent of street cuts, or when branch sites need day-one connectivity for ERP and voice. The hardware is only half the job: VLAN design, UPS sizing for Nigerian generators, and written baselines matter for audit-ready networks.",
      "DataGram maps existing firewalls, documents cable paths through trays, and tests failover triggers before sign-off. We work with facility managers in Lagos towers, Abuja campuses, and industrial estates where drilling rules and access windows are fixed in advance.",
    ],
    stats: [
      { label: "Typical latency", value: "20–33 ms", note: "LEO architecture; local routing still matters." },
      { label: "Download range", value: "50–1,000 Mbps", note: "Plan class and user load affect peaks." },
      { label: "Upload range", value: "10–100 Mbps", note: "Size for CCTV and cloud sync honestly." },
      { label: "Survey to live", value: "3–7 days", note: "After estate approval and hardware on site." },
    ],
    whyTitle: "Why Starlink for enterprise",
    whyCards: [
      {
        icon: Building2,
        title: "Independent backup path",
        body: "Starlink gives you a second WAN that does not share the same trench as fibre—critical when construction or vandalism takes terrestrial links offline.",
      },
      {
        icon: Wifi,
        title: "Structured LAN integration",
        body: "We hand off to your firewall or supply managed routers with VLANs, guest isolation, and optional RADIUS for corporate devices.",
      },
      {
        icon: Zap,
        title: "Generator-aware power",
        body: "Online UPS segments protect routers during transfer switches. We measure neutral drift common on industrial feeders.",
      },
      {
        icon: Shield,
        title: "Audit-friendly documentation",
        body: "Photos, IP plans, speed baselines, and escalation contacts—formatted for IT and procurement, not a single-page receipt.",
      },
    ],
    proofTitle: "Deployment proof",
    proofCards: [
      proof(
        "starlinkSetup.jpeg",
        "Starlink dish on commercial building railing bracket, Nigeria",
        "Commercial building mount with active construction nearby — urban enterprise context.",
        "IMAGE: starlinkSetup.jpeg — commercial building with construction cranes — urban enterprise context"
      ),
      proof(
        "starlinkCompanyInstalltionImage.jpeg",
        "Starlink dish installed on industrial rooftop near Nigerian port",
        "Industrial rooftop near port cranes — commercial and plant deployments.",
        "IMAGE: starlinkCompanyInstalltionImage.jpeg — blue industrial roof with port cranes in background — industrial/commercial proof"
      ),
      proof(
        "StarlinkCompanyInstallation.jpeg",
        "DataGram Starlink setup at institutional facility in Nigeria",
        "Institutional facility install — enterprise handover and documentation on file.",
        "IMAGE: StarlinkCompanyInstallation.jpeg — same as hero, tighter crop — institutional facility proof"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote:
        "Finance needed fibre for bulk sync but wanted Starlink when the street link failed twice in one month. Failover was tested in front of our IT lead.",
      attribution: "IT manager, logistics firm — Victoria Island",
    },
    packagesTitle: "Enterprise tiers",
    packages: [
      {
        name: "Site survey",
        priceLabel: "From ₦150,000",
        features: ["Roof/tray route plan", "Power & UPS notes", "Failover architecture sketch"],
        cta: "Book survey",
      },
      {
        name: "Managed install",
        priceLabel: "From ₦480,000",
        features: ["Mount, tray, grounding", "Dual-WAN config", "Baseline speed report"],
        cta: "Request proposal",
      },
      {
        name: "Ongoing NOC",
        priceLabel: "Custom SLA",
        features: ["Monitoring hooks", "Quarterly obstruction review", "Named escalation engineer"],
        cta: "Discuss SLA",
      },
    ],
    faqs: [
      {
        question: "Can Starlink replace fibre for our headquarters?",
        answer:
          "It can carry production traffic when plans and routing are sized correctly, but most Lagos and Abuja HQs keep fibre as primary and Starlink as independent backup. We model concurrent users and upload load before recommending primary status.",
      },
      {
        question: "Do you integrate with our existing firewall?",
        answer:
          "Yes. We provide Ethernet handoff, document VLAN tags, and test failover with your team. Static IP requirements are confirmed against your Starlink plan class before cutover.",
      },
      {
        question: "How do you handle estate drilling rules?",
        answer:
          "We prepare scope letters for facility managers listing hole count, tray path, and restoration. All work is scheduled during standard business hours.",
      },
      {
        question: "What documentation do you leave after install?",
        answer:
          "Handover includes labelled photos, IP table, UPS runtime estimate, speed tests per floor, and support contacts. NGOs often attach this pack to donor reporting.",
      },
      {
        question: "Is enterprise hardware different from residential kits?",
        answer:
          "High-throughput and business plan classes exist for heavier loads. We match dish generation and router platform to your user count and upload profile instead of overspecifying consumer kits.",
      },
      roamingFaq,
      ...standardFaqs,
    ],
    serviceAreaSchema: "Nigeria — enterprise and NGO sites",
    keywords: [
      "Starlink enterprise Nigeria",
      "business Starlink installation",
      "office satellite backup Lagos",
      "NGO internet Nigeria",
    ],
    includeHowTo: true,
  },
  {
    path: "/starlink-home-installation",
    seoTitle: "Starlink Home Installation Nigeria | Remote Workers & Residential | DataGram",
    metaDescription:
      "Home Starlink installs for estates and remote compounds: clean roof mounts, mesh WiFi, UPS for NEPA cuts, and honest sky-view surveys.",
    canonical: "/starlink-home-installation",
    ogImage: img("StarlinkRoofMount.jpeg"),
    h1: "Starlink Home Installation Nigeria",
    heroLabel: "Remote workers & residential",
    heroSubheading:
      "Estate-friendly mounting, whole-home WiFi, and power backup sized for real Nigerian outage patterns—not a cable tossed through a window.",
    heroImageAlt: "DataGram technician installing Starlink dish on residential rooftop in Nigeria",
    heroImage: img("StarlinkRoofMount.jpeg"),
    heroImageFile: "StarlinkRoofMount.jpeg",
    heroImageReason:
      "Nigerian technician actively mounting dish on residential roof — human, authentic, and specific to Nigeria. Best trust-builder for home clients",
    heroObjectPosition: "center",
    overviewTitle: "Residential satellite that respects your roof and your schedule",
    overviewParagraphs: [
      "Home buyers want video calls that survive rain fade, kids’ classes that do not drop when the grid flickers, and installers who understand estate security desks and landlord drilling rules. Starlink delivers when the dish sees enough sky and the in-home network is not bottlenecked by a single hallway router.",
      "DataGram surveys tree lines, recommends mast height, and runs interior cable through conduits where owners want tidy finishes. We size modest UPS for routers during NEPA gaps and add mesh nodes when concrete walls divide flats across two floors.",
    ],
    stats: [
      { label: "Typical latency", value: "20–33 ms", note: "Suitable for video calls and cloud apps." },
      { label: "Download range", value: "50–1,000 Mbps", note: "Varies by plan, obstruction score, and peak hours." },
      { label: "Upload range", value: "10–100 Mbps", note: "Disclose upload needs during survey." },
      { label: "Install duration", value: "4–8 hours", note: "Single-family home, standard roof access." },
    ],
    whyTitle: "Why Starlink for home installation",
    whyCards: [
      {
        icon: Home,
        title: "Estate-ready paperwork",
        body: "We supply short scope notes for security and landlords listing mount type, penetration count, and restoration—reducing back-and-forth at the gate.",
      },
      {
        icon: Wifi,
        title: "Whole-home coverage",
        body: "Mesh or wired APs placed where you actually work—home office, kitchen, not just beside the incoming cable.",
      },
      {
        icon: Zap,
        title: "Outage ride-through",
        body: "UPS sized for router and dish keeps calls alive through brief NEPA drops without oversized battery banks you will never recharge.",
      },
      {
        icon: Shield,
        title: "Grounding and surge",
        body: "Nigeria’s storm season demands proper earth bonds and surge arrestors on outdoor runs—cheap insurance against fried routers.",
      },
    ],
    proofTitle: "Deployment proof",
    proofCards: [
      proof(
        "StarlinkInstallationresidential.jpeg",
        "Starlink dish mounted on residential roof with solar panels, Nigeria",
        "Residential roof install with solar nearby — relatable for power-aware home clients.",
        "IMAGE: StarlinkInstallationresidential.jpeg — clean rooftop install on a Nigerian home, solar panels suggest power-aware client"
      ),
      proof(
        "starlinkEstateInstallation.jpeg",
        "Starlink dish on pole in Nigerian residential estate",
        "Estate pole mount — GRA-style compounds and gated communities.",
        "IMAGE: starlinkEstateInstallation.jpeg — lush trees, white buildings, estate environment — aspirational for home clients"
      ),
      proof(
        "residentalSetup.jpeg",
        "Starlink and legacy antenna mounted on wall brackets, residential Nigeria",
        "Wall brackets alongside legacy antennas — practical upgrade path for existing setups.",
        "IMAGE: residentalSetup.jpeg — shows coexistence with existing antennas — practical proof for clients upgrading"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote:
        "Our estate banned surface cables along the facade. DataGram routed through the ceiling void and left a labeled patch panel in the study.",
      attribution: "Amaka E., Chevron Drive, Lekki",
    },
    packagesTitle: "Home packages",
    packages: [
      {
        name: "Sky survey",
        priceLabel: "From ₦85,000",
        features: ["Obstruction app capture", "Mount recommendation", "Estate letter template"],
        cta: "Book survey",
      },
      {
        name: "Standard install",
        priceLabel: "From ₦320,000",
        features: ["Roof or wall mount", "20 m cable run included", "Router placement + test"],
        cta: "Get quote",
      },
      {
        name: "Premium whole-home",
        priceLabel: "From ₦520,000",
        features: ["Mesh or 2 APs", "UPS for router/dish", "Concealed conduit up to 35 m"],
        cta: "Plan premium install",
      },
    ],
    faqs: [
      {
        question: "Will Starlink work behind tall trees in my compound?",
        answer:
          "Trees block portions of the sky arc and raise obstruction scores. Survey may recommend a taller mast, trimming, or relocating the dish to a secondary roof with better view—honest answers before you pay for hardware.",
      },
      {
        question: "Do you install in gated estates?",
        answer:
          "Yes. Send estate rules early. We align visit times with security, use non-penetrating mounts where required, and restore any core drilling with sealant matched to your facade.",
      },
      {
        question: "Can one dish cover a duplex or two flats?",
        answer:
          "One dish feeds one router network. Sharing across separate meters needs Ethernet or wireless backhaul with owner permission. We explain bandwidth sharing so expectations stay realistic.",
      },
      {
        question: "What UPS size do homes actually need?",
        answer:
          "For short NEPA flickers, a 600–1000 VA line-interactive unit on router and dish is common. Long outages need generator planning—UPS is not a replacement for hours without grid or fuel.",
      },
      {
        question: "How is professional install different from DIY?",
        answer:
          "DIY works on simple roofs. Pros document grounding, torque mounts for wind, route cable away from sun-damaged facades, and test where you work—not only beside the dish.",
      },
      roamingFaq,
      ...standardFaqs,
    ],
    serviceAreaSchema: "Nigeria — residential estates and remote homes",
    keywords: [
      "Starlink home installation Nigeria",
      "residential Starlink installer",
      "estate Starlink Lagos",
      "home office satellite internet",
    ],
    includeHowTo: true,
  },
  {
    path: "/starlink-boat-installation",
    seoTitle: "Starlink for Boats Nigeria | Leisure Craft & Coastal Operations | DataGram",
    metaDescription:
      "Starlink for boats in Nigeria: leisure craft, fishing fleets, and coastal patrol. Marine mounts and DC power integration by DataGram.",
    canonical: "/starlink-boat-installation",
    ogImage: img("maritime3.jpeg"),
    h1: "Starlink for Boats Nigeria",
    heroLabel: "Leisure craft & coastal operations",
    heroSubheading:
      "Deck mounts, DC power integration, and coastal coverage planning for ferries, fishing trawlers, and private yachts operating Nigerian waters.",
    heroImageAlt: "Starlink dish on boat mast in Nigerian waterway",
    heroImage: img("maritime3.jpeg"),
    heroImageFile: "maritime3.jpeg",
    heroImageReason:
      "dish mounted on patrol boat mast with Nigerian waterway/bridge behind — boat-specific context, identifiable Nigerian port environment",
    heroObjectPosition: "center bottom",
    overviewTitle: "Connectivity that moves with your hull",
    overviewParagraphs: [
      "Coastal ferries, fishing fleets, and private yachts need internet that is not tied to marina WiFi passwords. Starlink mobility classes—when matched to the right flat-mount hardware—keep crews connected across Nigerian coastal routes if the sky view clears the wheelhouse and radar arch.",
      "DataGram installs DC-fed power where inverters are noisy, routes cable away from winches and bait tanks, and tests at cruise RPM so vibration does not loosen glands mid-season.",
    ],
    stats: [
      { label: "Typical latency", value: "20–33 ms", note: "Higher at beam edges; check plan map before offshore legs." },
      { label: "Download range", value: "50–1,000 Mbps", note: "Motion, rain, and user count affect results." },
      { label: "Upload range", value: "10–100 Mbps", note: "Confirm mobility plan before hardware buy." },
      { label: "Season turnaround", value: "1–2 days", note: "Marina slip with shore power for alignment." },
    ],
    whyTitle: "Why Starlink for boats",
    whyCards: [
      {
        icon: Ship,
        title: "Flat-mount discipline",
        body: "Leisure and coastal craft use low-profile mounts with sealed decks—no rooftop TV dish aesthetics that snag lines.",
      },
      {
        icon: Waves,
        title: "Spray and vibration",
        body: "Glands, tie-downs, and service loops are spec’d for Atlantic swell on return legs—not inland rooftop assumptions.",
      },
      {
        icon: Zap,
        title: "Battery-friendly power",
        body: "We wire fused DC feeds and note alternator charging profiles so weekend trips do not flatten house batteries.",
      },
      {
        icon: Wifi,
        title: "Marina-to-sea handover",
        body: "Captains get a simple power sequence card: dish, router, failover to marina LAN when berthed if you want both.",
      },
    ],
    proofTitle: "Deployment proof",
    proofCards: [
      proof(
        "maritime5.jpeg",
        "Starlink terminal mounted on vessel railing offshore",
        "Railing mount offshore — coastal and patrol craft deployments.",
        "IMAGE: maritime5.jpeg — Starlink terminal mounted on vessel railing offshore"
      ),
      proof(
        "maritime3.jpeg",
        "Close-up of Starlink mount bracket on patrol boat",
        "Patrol boat mast mount in Nigerian waterway — boat-specific hardware placement.",
        "IMAGE: maritime3.jpeg — close-up of Starlink mount bracket on patrol boat",
        "center top"
      ),
      proof(
        "maritime3.jpeg",
        "Starlink dish on boat mast in Nigerian waterway",
        "Waterway context with bridge and port infrastructure visible.",
        "IMAGE: maritime3.jpeg — dish on boat mast with Nigerian waterway/bridge behind — boat-specific context",
        "center bottom"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote:
        "Marina WiFi failed every weekend. After the flat mount went on the hardtop, we stream weather fax and voice over LTE backup only when needed.",
      attribution: "Captain T., Tarkwa Bay run",
    },
    packagesTitle: "Boat packages",
    packages: [
      {
        name: "Marina survey",
        priceLabel: "From ₦120,000",
        features: ["Arch clearance check", "DC power assessment", "Plan class verification"],
        cta: "Survey my vessel",
      },
      {
        name: "Coastal install",
        priceLabel: "From ₦420,000",
        features: ["Flat mount & sealing", "DC feed + router", "Sea trial speed log"],
        cta: "Book install",
      },
      {
        name: "Fleet seasonal",
        priceLabel: "Per vessel",
        features: ["Pre-season bolt check", "Gland inspection", "Priority WhatsApp support"],
        cta: "Fleet pricing",
      },
    ],
    faqs: [
      {
        question: "Which Starlink plan works on leisure boats in Nigeria?",
        answer:
          "Mobility or regional maritime classes apply depending on route and official coverage. We confirm on starlink.com before you buy hardware—using a fixed residential dish at sea violates terms and performs poorly.",
      },
      {
        question: "Can you install at Lagos marinas?",
        answer:
          "Yes. Coordinate slip access and yard rules. We prefer installs on the hard or calm weather windows so alignment tools stay accurate.",
      },
      {
        question: "Will radar masts block the dish?",
        answer:
          "Radar arches and fishing outriggers can obstruct sky slices. Survey notes recommended offset mounts or slight azimuth tweaks before drilling the hardtop.",
      },
      {
        question: "How do you protect gear from salt?",
        answer:
          "Marine-grade sealant, stainless hardware, and post-trip freshwater rinse guidance are part of handover. Indoor router stays in a dry locker with vented enclosure if needed.",
      },
      {
        question: "Can fishing fleets share one subscription across boats?",
        answer:
          "Each active vessel needs its own plan and hardware set. Fleet pricing covers repeated surveys and seasonal checks—not sharing one dish across multiple hulls.",
      },
      roamingFaq,
      ...standardFaqs,
    ],
    serviceAreaSchema: "Nigerian coastal and inland waterways",
    keywords: [
      "Starlink boat Nigeria",
      "marine Starlink leisure craft",
      "yacht satellite internet Lagos",
      "fishing vessel connectivity",
    ],
  },
];

export function getIndustryPageByPath(path: string) {
  return industryLandingPages.find((p) => p.path === path);
}

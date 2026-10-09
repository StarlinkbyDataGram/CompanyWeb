import {
  Anchor,
  Building2,
  Factory,
  HeartHandshake,
  Home,
  Network,
  Plane,
  Ship,
  Waves,
  Wifi,
  Zap,
  Shield,
  Target,
} from "lucide-react";
import { cropForFile } from "@/lib/image-crop";
import type { IndustryLandingConfig } from "./types";

const img = (file: string) => `/images/${file}`;

const proof = (
  file: string,
  alt: string,
  caption: string,
  comment: string,
  objectPosition?: string
) => ({
  src: img(file),
  imageFile: file,
  alt,
  caption,
  imageComment: comment,
  objectPosition: cropForFile(file, objectPosition),
});

const SPEED = {
  label: "Indicative field range, not a guarantee",
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
      "Post-installation support is available for enterprise, roaming, and maritime clients on active or renewed subscriptions. Indicative field ranges, not guarantees: speeds 50–1,000 Mbps, latency often discussed around 20–30 ms under normal conditions.",
  },
  {
    question: "Is roof drilling required for Starlink installation?",
    answer:
      "Not always. We use wall mounts where the structure allows. Drilling is done when necessary for proper cable routing, and all penetrations are sealed to prevent water entry.",
  },
];

const offshoreMaritimeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Starlink Offshore Maritime Installation Nigeria",
  provider: {
    "@type": "LocalBusiness",
    name: "DataGram Nigeria",
    url: "https://www.datagram.ng",
  },
  areaServed: {
    "@type": "GeoShape",
    name: "Gulf of Guinea and Nigerian Offshore Waters",
    description:
      "Offshore waters of the Niger Delta including the Gulf of Guinea, covering operational areas in Rivers State, Delta State, Bayelsa State, and Akwa Ibom State coastal and offshore zones",
    box: "3.3 2.7 5.5 9.0",
  },
  serviceType: "Satellite Internet Installation",
  description:
    "Professional SpaceX Starlink satellite internet installation for offshore oil platforms, FPSOs, OSVs, jack-up rigs, and maritime vessels operating in Nigerian waters and the Gulf of Guinea",
};

const priorityPlanServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Starlink Priority Plan Activation Nigeria",
  serviceType: "Satellite Internet Activation",
  areaServed: { "@type": "Country", name: "Nigeria" },
  provider: {
    "@type": "LocalBusiness",
    name: "DataGram Nigeria",
    url: "https://www.datagram.ng",
  },
  description:
    "DataGram activates and manages Starlink Priority Plans for Nigerian customers in Lagos, Abuja, Port Harcourt, and nationwide.",
};

const repairRelocationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Starlink Repair, Relocation & Re-Installation Nigeria",
  serviceType: "Satellite Internet Repair & Relocation",
  areaServed: { "@type": "Country", name: "Nigeria" },
  provider: {
    "@type": "LocalBusiness",
    name: "DataGram Nigeria",
    url: "https://www.datagram.ng",
  },
  description:
    "DataGram diagnoses, repairs, relocates, and reinstalls Starlink terminals across Nigeria — covering survey, cable routing, replacement parts, and professional reinstallation.",
  url: "https://www.datagram.ng/starlink-repair-relocation-nigeria",
};

const estateWifiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Starlink Estate WiFi Distribution Nigeria",
  serviceType: "Network Design and WiFi Distribution",
  areaServed: { "@type": "Country", name: "Nigeria" },
  provider: {
    "@type": "LocalBusiness",
    name: "DataGram Nigeria",
    url: "https://www.datagram.ng",
  },
  description:
    "Wi-Fi from one Starlink dish for Nigerian estates, compounds, and blocks of flats.",
  url: "https://www.datagram.ng/starlink-estate-wifi-nigeria",
};

const offshoreSafetyStandards = {
  title: "Our Field Safety Standards",
  items: [
    {
      title: "Pre-installation site survey",
      body: "Every offshore or vessel installation begins with a documented site survey — we assess power availability, sky view obstruction, cable routing paths, and mounting surface integrity before any equipment is brought on board.",
    },
    {
      title: "Permit to Work coordination",
      body: "DataGram works within the PTW framework of your platform or vessel operator. We liaise directly with your safety officer and do not commence work until all required approvals are in place.",
    },
    {
      title: "Trained installation team",
      body: "Our technicians are experienced in working at height, on marine vessels, and in industrial environments. All installations are carried out in pairs — no solo working at elevation or on vessel decks.",
    },
    {
      title: "Post-installation verification",
      body: "Every installation is tested and signed off before the team leaves site. We provide a written post-installation report including confirmed download/upload speeds and latency readings.",
    },
  ],
};

export const industryLandingPages: IndustryLandingConfig[] = [
  {
    path: "/starlink-offshore-maritime-installation",
    seoTitle: "Starlink Offshore Installation Nigeria | At Sea | DataGram",
    metaDescription:
      "DataGram installs Starlink for vessels and deep sea operations in the Niger Delta and Gulf of Guinea — at-sea and offshore internet.",
    canonical: "/starlink-offshore-maritime-installation",
    ogImage: img("datagram-technician-rooftop-mount.jpg"),
    h1: "Starlink Offshore & Maritime Installation Nigeria",
    heroLabel: "Oil, gas & deep-sea operations",
    heroSubheading:
      "Certified marine mounting, motion-rated hardware, and shore-to-vessel handover for Niger Delta fleets and offshore camps.",
    heroImageAlt: "Starlink dish installed on tanker deck in the open ocean, Nigeria offshore",
    heroImage: img("maritime2.jpeg"),
    heroImageFile: "maritime2.jpeg",
    heroImageReason:
      "wide cinematic shot of tanker deck with Starlink dish, open ocean horizon — strongest visual for the hero, communicates deep-sea scale",
    heroObjectPosition: "center",
    overviewTitle: "How maritime Starlink stays connected at sea",
    overviewParagraphs: [
      "Offshore platforms, OSVs, FPSOs, and remote marine bases cannot wait months for subsea fibre builds. SpaceX Starlink satellite internet delivers usable throughput at sea when you pair the correct mobility or maritime hardware with a mount that survives Gulf of Guinea spray and vibration — including satellite internet FPSO Nigeria deployments where crew and operations networks must stay segregated.",
      "Maritime Starlink uses a phased-array antenna that tracks several low-Earth-orbit satellites at once. A fixed home dish locks to one satellite pass; maritime terminals hand off continuously between satellites as the vessel moves. That handoff is what keeps the link alive in open water where there is no land infrastructure. For operators planning a VSAT to Starlink migration offshore Nigeria, DataGram handles dish swap, network reconfiguration, and crew handover so you are not left mid-campaign without a working link.",
      "DataGram engineers survey deck space, cable glands, and power feeds before any hole is drilled. We specialise in Starlink Flat High Performance installation Nigeria for marine environments, and we document obstruction maps at berth and at typical heading, then specify marine-rated cabling, surge protection, and router placement that keeps bridge networks separate from crew WiFi. Starlink OSV installation Rivers State and wider Gulf of Guinea mobilisation is coordinated from our Port Harcourt desk.",
    ],
    downloadCta: {
      title: "Download Our Offshore Integration Spec Sheet",
      description:
        "A technical reference for procurement managers and vessel operators — covering hardware specs, deployment process, network configuration options, and service coverage.",
      href: "/downloads/datagram-starlink-offshore-spec-sheet.pdf",
      buttonLabel: "Download Spec Sheet (PDF)",
      note: "No sign-up required. Free to download.",
    },
    stats: [
      { label: "Indicative latency (LEO)", value: "20–33 ms", note: "Varies with sea state, plan class, and beam load." },
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
    proofLink: { label: "See our maritime installation work →", href: "/our-work" },
    proofCards: [
      proof(
        "datagram-technician-rooftop-mount.jpg",
        "DataGram technician mounting Starlink dish on rooftop in Nigeria with telecom towers in background",
        "DataGram field team mounting a Starlink dish on a Nigerian rooftop — real installation, not stock photography.",
        "IMAGE: datagram-technician-rooftop-mount.jpg — DataGram technician in branded vest, rooftop mount with telecom towers"
      ),
      proof(
        "datagram-starlink-boxes-stock.jpg",
        "Multiple Starlink units in stock at DataGram Nigeria ready for offshore and maritime deployment",
        "Starlink hardware in stock at DataGram — ready for rapid offshore and maritime mobilisation.",
        "IMAGE: datagram-starlink-boxes-stock.jpg — stacked Starlink boxes showing procurement and stock capability"
      ),
      proof(
        "maritime4.jpeg",
        "Starlink dish installed on oil platform in the Niger Delta",
        "Platform install in the Niger Delta — direct proof for oil and gas operators.",
        "IMAGE: maritime4.jpeg — real Nigerian gas flare rig — direct visual proof for oil and gas clients"
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
        name: "Unlimited Roaming plan",
        priceLabel: "From ₦247,500",
        features: [
          "Land and coastal water bodies coverage",
          "50 Mbps to 400 Mbps speed",
          "Boat vessel and on-the-move usage",
          "Maximum 12 nautical miles from land to sea coverage",
          "Up to 200 users connection",
          "Priority WhatsApp support after installation",
        ],
        cta: "Request roaming quote",
      },
      {
        name: "Ocean mode / Deep sea plan",
        priceLabel: "Starting from ₦5,000",
        features: [
          "Offshore rig and moving vessels operational",
          "Global coverage on land and sea/ocean",
          "50 Mbps to 1,000 Mbps speed",
          "Up to 500 users connection",
          "Priority support after installation",
        ],
        cta: "Get deep sea quote",
      },
    ],
    relatedLinks: [
      {
        label: "Starlink Roaming and Global Priority activation for vessels",
        href: "/starlink-roaming-global-priority-nigeria",
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
          "Indicative field ranges, not a DataGram guarantee: download 50 Mbps – 1,000 Mbps, upload 10 Mbps – 100 Mbps, latency often discussed around 20–33 ms. Actual performance varies with hardware tier, sea state, and subscription plan.",
      },
      {
        question: "Do you support maritime or mobility Starlink plans?",
        answer:
          "Yes. The right plan depends on your vessel type, how far it travels in nautical miles, and the regions it operates in. DataGram will assess your vessel profile and recommend the appropriate subscription before activation. Related: Starlink Roaming and Global Priority activation for vessels (/starlink-roaming-global-priority-nigeria).",
      },
      {
        question: "Do you handle maritime activation and subscription?",
        answer:
          "Yes. For Starlink Roaming and Global Priority activation on Nigerian accounts — including offshore vessels — DataGram handles plan assessment, account changes, and handover documentation.",
      },
      roamingFaq,
      ...standardFaqs,
      {
        question: "Does Starlink work for deep sea operations in the Gulf of Guinea?",
        answer:
          "Yes, on the correct plan class. Global Priority is the ocean-capable priority plan. Ocean Mode is a separate metered add-on for roam-class service past coastal waters, not a substitute for Global Priority on a working vessel. The Flat High Performance dish is required for vessels operating beyond coastal waters. DataGram assesses vessel type and route before recommending the plan and hardware.",
      },
      {
        question: "What is offshore internet, and how does Starlink provide it?",
        answer:
          "Offshore internet refers to satellite-based broadband connectivity delivered to vessels, platforms, and facilities operating at sea where terrestrial networks do not reach. Starlink provides this via its low-earth orbit satellite constellation, which delivers lower latency and higher speeds than traditional VSAT systems used offshore. DataGram installs and activates Starlink offshore internet across the Niger Delta and Gulf of Guinea.",
      },
      {
        question: "Is Starlink suitable for vessels and moving boats at sea?",
        answer:
          "Yes, with the correct plan and hardware. Starlink's standard dish works for docked vessels and slow-moving craft in protected waters. The Flat High Performance dish and a maritime mobility or Global Priority plan are required for vessels actively underway in open water. DataGram advises on hardware selection and plan type based on your vessel's route and speed.",
      },
    ],
    extraSchemas: [offshoreMaritimeServiceSchema],
    safetyStandards: offshoreSafetyStandards,
    packagePriceDisclaimer: true,
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
    seoTitle: "Starlink for Enterprise Nigeria | Business Starlink | DataGram",
    metaDescription:
      "Use a business plan if the office needs a link the street cable cannot give. DataGram fits offices, NGOs, and plants across Nigeria.",
    canonical: "/starlink-enterprise-nigeria",
    ogImage: img("StarlinkCompanyInstallation.jpeg"),
    h1: "Starlink for Enterprise Nigeria",
    heroLabel: "NGOs, offices & industrial sites",
    heroSubheading:
      "Choose it as the spare path when fibre is already there.",
    heroImageAlt: "Starlink installation at NCDMB Conference Centre Nigeria, DataGram enterprise",
    heroImage: img("StarlinkCompanyInstallation.jpeg"),
    heroImageFile: "StarlinkCompanyInstallation.jpeg",
    heroImageReason:
      "NCDMB Conference Centre clearly visible in background — named Nigerian government/institutional building gives immediate credibility to enterprise clients",
    heroObjectPosition: "center top",
    overviewTitle: "A business link when the street cable is late",
    overviewParagraphs: [
      "Use Starlink when fibre will take months, when you need a path that does not share the street trench, or when a branch must be online on day one. The dish is only half the job. A VLAN is its own network, so guests do not share the office one.",
      "A UPS is a small battery box that keeps a plug alive for a few minutes. Size it for the generator you already run. Latency, the delay before a reply, is often talked about around 20 to 33 milliseconds. That figure is a guide, not a promise.",
      "We map the firewall you already have, label the cable path, and test the spare path before we leave. Failover means that spare path takes over when the first drops. An obstruction is something in the way of the sky, such as a tree or a tank.",
      "We work in Lagos towers, Abuja campuses, and plant yards where the drilling rules are fixed before we arrive. Our usual cover is the South-South and the South-East. A job in the north is by request.",
    ],
    stats: [
      { label: "Indicative latency", value: "20–33 ms", note: "LEO architecture; local routing still matters." },
      { label: "Download range", value: "50–1,000 Mbps", note: "Plan class and user load affect peaks." },
      { label: "Upload range", value: "10–100 Mbps", note: "Size for CCTV and cloud sync honestly." },
      { label: "Survey to live", value: "3–7 days", note: "After estate approval and hardware on site." },
    ],
    whyTitle: "Why Starlink for enterprise",
    whyCards: [
      {
        icon: Building2,
        title: "Independent backup path",
        body: "Starlink is a second path that does not share the street trench. Use it when a cut or a build takes the fibre down.",
      },
      {
        icon: Wifi,
        title: "Structured LAN integration",
        body: "We hand the cable to your firewall, or we fit a router with its own network for guests. Staff devices can stay on a separate one.",
      },
      {
        icon: Zap,
        title: "Generator-aware power",
        body: "The battery box keeps the router up while the generator starts. We check the power on plant sites, where the feed can be rough.",
      },
      {
        icon: Shield,
        title: "Audit-friendly documentation",
        body: "You get photos, an address plan, a speed note, and who to call. That pack is for IT and for the buyer, not a one-page receipt.",
      },
    ],
    proofTitle: "Deployment proof",
    proofLink: { label: "See our enterprise installation work →", href: "/our-work" },
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
        name: "Ongoing Priority Support",
        priceLabel: "Custom SLA",
        features: [
          "Monthly network flow check for potential bottlenecks",
          "Network cable maintenance",
          "Monthly / bulk subscription renewal management",
          "Replacement of non-performing hardware or software",
        ],
        cta: "Discuss SLA",
      },
    ],
    faqs: [
      {
        question: "Can Starlink replace fibre for our headquarters?",
        answer:
          "It can carry the office traffic when the plan and the wiring fit the load. Most Lagos and Abuja head offices keep fibre first and Starlink as the spare. We count the users and the upload before we say it should be the only link.",
      },
      {
        question: "Do you integrate with our existing firewall?",
        answer:
          "Yes. We hand over an Ethernet cable, write down the network split, and test the spare path with your team. A fixed address, if the plan has one, is checked before the cut.",
      },
      {
        question: "How do you handle estate drilling rules?",
        answer:
          "We write a scope letter for the building manager. It lists the holes, the cable path, and how we make good. All work is in normal business hours.",
      },
      {
        question: "What documentation do you leave after install?",
        answer:
          "You get labelled photos, an address table, a note on how long the battery box lasts, a speed test per floor, and who to call. NGOs often attach that pack to a donor report.",
      },
      {
        question: "Is enterprise hardware different from residential kits?",
        answer:
          "Yes. Heavier loads use a business plan and a dish sized for that load. We match the kit to the user count and the upload. We do not put a home kit on a busy office.",
      },
      roamingFaq,
      ...standardFaqs,
      {
        question: "What does enterprise Starlink include that a standard residential plan does not?",
        answer:
          "It uses a business plan, plus a survey, tidy cables, a split between staff and guest Wi-Fi, and a speed note. Deprioritised means the speed drops when the cell is busy. It is not a hard cutoff. The business plan is meant to hold up better at busy times. That is still a guide, not a promise. Renewed clients can keep managed support.",
      },
      {
        question: "Can DataGram handle business Starlink deployment across multiple offices in Nigeria?",
        answer:
          "Yes. We scope, buy, fit, turn on, and manage the accounts across the sites. For 5 or more sites or vessels, fleet management runs the bills from one place. See the fleet page (/starlink-fleet-management-nigeria).",
      },
    ],
    relatedLinks: [
      {
        label: "fleet management service",
        href: "/starlink-fleet-management-nigeria",
      },
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
    heroObjectPosition: "top center",
    overviewTitle: "Residential satellite that respects your roof and your schedule",
    overviewParagraphs: [
      "Home buyers want video calls that survive rain fade, kids’ classes that do not drop when the grid flickers, and installers who understand estate security desks and landlord drilling rules. Starlink delivers when the dish sees enough sky and the in-home network is not bottlenecked by a single hallway router.",
      "DataGram surveys tree lines, recommends mast height, and runs interior cable through conduits where owners want tidy finishes. We size modest UPS for routers during NEPA gaps and add mesh nodes when concrete walls divide flats across two floors.",
    ],
    stats: [
      { label: "Indicative latency", value: "20–33 ms", note: "Suitable for video calls and cloud apps." },
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
    proofLink: { label: "See our residential installation work →", href: "/our-work" },
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
    seoTitle: "Starlink for Boats Nigeria | Moving Boats | DataGram",
    metaDescription:
      "DataGram installs Starlink on boats, leisure craft, and moving vessels across Nigeria. Marine connectivity from the coast to offshore waters.",
    canonical: "/starlink-boat-installation",
    ogImage: img("maritime3.jpeg"),
    h1: "Starlink for Boats Nigeria",
    heroLabel: "Leisure craft & coastal operations",
    heroSubheading:
      "Deck mounts, DC power integration, and coastal coverage planning for ferries, fishing trawlers, and Starlink for yachts Lagos — lagoon and private craft operating Nigerian waters.",
    heroImageAlt: "Starlink dish on boat mast in Nigerian waterway",
    heroImage: img("maritime3.jpeg"),
    heroImageFile: "maritime3.jpeg",
    heroImageReason:
      "dish mounted on patrol boat mast with Nigerian waterway/bridge behind — boat-specific context, identifiable Nigerian port environment",
    heroObjectPosition: "center top",
    overviewTitle: "Connectivity that moves with your hull",
    overviewParagraphs: [
      "Coastal ferries, fishing fleets, and private yachts need marine connectivity that is not tied to marina WiFi passwords. SpaceX Starlink mobility classes—when matched to the right flat-mount hardware—keep crews connected across Nigerian coastal routes if the sky view clears the wheelhouse and radar arch.",
      "DataGram installs DC-fed power where inverters are noisy, routes cable away from winches and bait tanks, and tests at cruise RPM so vibration does not loosen glands mid-season.",
    ],
    stats: [
      { label: "Indicative latency", value: "20–33 ms", note: "Higher at beam edges; check plan map before offshore legs." },
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
    proofLink: { label: "See our boat and vessel installations →", href: "/our-work" },
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
        "IMAGE: maritime3.jpeg — close-up of Starlink mount bracket on patrol boat"
      ),
      proof(
        "datagram-starlink-unboxing-mount-bracket.jpg",
        "Starlink mount bracket and hardware from open kit for marine installation",
        "Marine mount hardware from a live Starlink kit — what we spec before deck drilling.",
        "IMAGE: datagram-starlink-unboxing-mount-bracket.jpg — mount bracket from DataGram field kit"
      ),
    ],
    equipmentSection: {
      title: "What's included in your marine kit",
      paragraphs: [
        "Every boat install starts with the correct Starlink hardware for your route and plan class — typically Flat High Performance or mobility-rated equipment for coastal Nigerian waters. We verify plan eligibility before you buy, then mount, seal, and power the kit for your vessel's DC or AC setup.",
        "The photo below shows a genuine Starlink kit as delivered: dish, mount hardware, integrated cable, router, and power supply arranged for marine deployment. DataGram handles unboxing, mount selection, deck sealing, and sea-trial speed verification as part of every coastal install.",
      ],
      image: proof(
        "datagram-starlink-unboxing-hardware.jpg",
        "Starlink hardware unboxing showing dish, mount, router and cables for marine installation",
        "Open Starlink kit with dish, mount, router, and cables — ready for marine install.",
        "IMAGE: datagram-starlink-unboxing-hardware.jpg — overhead unboxing shot, full kit contents"
      ),
      secondaryImage: proof(
        "datagram-starlink-unboxing-kit-contents.jpg",
        "Starlink High Performance power supply, router, and cables in kit packaging",
        "High Performance router, power supply, and cabling as shipped from Starlink.",
        "IMAGE: datagram-starlink-unboxing-kit-contents.jpg — router and power supply in foam tray"
      ),
    },
    extraSections: [
      {
        title: "Power Setup for Smaller Vessels",
        paragraphs: [
          "Smaller boats — speedboats, lagoon houseboats, and leisure craft — typically run on 12V or 24V DC systems rather than the 240V AC supply found on larger vessels and offshore platforms. Starlink's standard router and dish require 100–240V AC input, which means a power inverter is required for most boat installations. DataGram recommends and installs the following power setup for smaller vessels, including marine internet for speedboats Nigeria that need reliable DC-to-AC conversion underway.",
        ],
        cards: [
          {
            title: "Pure Sine Wave Inverter",
            body: "A pure sine wave inverter (minimum 300W, recommended 500W) converts your boat's 12V/24V DC battery bank to the AC supply Starlink needs. Modified sine wave inverters are not recommended — they can cause router instability and reduce hardware lifespan.",
          },
          {
            title: "Battery Sizing",
            body: "For continuous Starlink operation, your battery bank should support at minimum 100–150Wh of draw per hour. On a 12V system this is roughly 8–12Ah per hour. We assess your existing battery capacity during the site survey and advise on whether an additional battery is required.",
          },
          {
            title: "Shore Power Alternative",
            body: "If your vessel has shore power access when moored, Starlink can run directly from the marina's AC supply without an inverter. DataGram installs weatherproof cable runs from your shore power inlet to the router placement point.",
          },
        ],
      },
      {
        title: "Marine Cable Routing — Built to Last",
        paragraphs: [
          "Running Starlink cable on a boat is different from a rooftop installation. Salt air, UV exposure, hull vibration, and the risk of water ingress mean every cable run must be properly protected. That discipline applies to every satellite internet coastal vessel Nigeria install we complete — leisure craft, patrol boats, and fishing fleets alike.",
        ],
        checklist: [
          "All cable runs protected in UV-resistant conduit or armoured sleeving where exposed to weather",
          "Gland fittings used at every hull penetration point — no bare holes drilled without sealing",
          "Cable secured at regular intervals to prevent chafing against metal edges during vessel movement",
          "Connector ends protected with self-amalgamating tape or weatherproof enclosures where exposed on deck",
          "Fibre-reinforced conduit used for runs through engine bays or high-heat areas",
        ],
        note: "DataGram does not cut corners on marine cable work. A poorly sealed hull penetration causes more damage than a lost internet connection.",
      },
      {
        title: "Securing Your Dish on Lagos Waterways",
        paragraphs: [
          "Dish theft is a real risk on vessels moored on the Lagos lagoon, at Tarkwa Bay, and in marina berths. A standard Starlink mount can be removed in under two minutes without the right security measures in place. DataGram installs anti-theft measures as standard on all Lagos lagoon and coastal installations, including Starlink installation Tarkwa Bay berths where high-value electronics are a known target.",
        ],
        details: [
          {
            title: "Security bolt kit",
            body: "Starlink's mounting bolts replaced with tamper-resistant fasteners requiring a specialist bit to remove.",
          },
          {
            title: "Welded bracket option",
            body: "For permanent vessel installations, the mount bracket can be welded directly to a deck fitting — removal requires cutting equipment.",
          },
          {
            title: "Discrete cable routing",
            body: "Cables routed internally where possible to remove the visual cue that valuable equipment is mounted above.",
          },
          {
            title: "Mooring location advice",
            body: "We advise on which Lagos marina and lagoon mooring locations have lower reported theft risk for high-value electronics.",
          },
        ],
        footerNote: "Ask about our anti-theft installation package when requesting your quote.",
      },
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
    relatedLinks: [
      {
        label: "Global Priority or Roaming plan for marine connectivity",
        href: "/starlink-roaming-global-priority-nigeria",
      },
    ],
    faqs: [
      {
        question: "Which Starlink plan works on leisure boats in Nigeria?",
        answer:
          "Mobility or regional maritime classes apply depending on route and official coverage. We confirm on starlink.com before you buy hardware—using a fixed residential dish at sea violates terms and performs poorly. Need a Global Priority or Roaming plan for marine connectivity? DataGram handles assessment and account activation for coastal craft (/starlink-roaming-global-priority-nigeria).",
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
      {
        question: "Does Starlink work on a moving boat at sea?",
        answer:
          "Yes, with the right plan and hardware. The standard Starlink dish works for slow-moving craft in protected coastal waters. For boats actively underway in open water, the Flat High Performance dish with a maritime mobility plan is needed for stable connectivity while the vessel is moving. DataGram advises on the correct setup based on your boat type and typical route.",
      },
      {
        question: "What is the difference between marine connectivity on a boat versus a fixed land installation?",
        answer:
          "A fixed land installation points to a consistent patch of sky and stays there. A moving vessel constantly changes its angle relative to the satellite constellation, which is why the dish needs a wider field of view and a plan that supports mobility. The Flat High Performance dish handles this automatically. DataGram assesses each vessel individually before recommending hardware and plan.",
      },
    ],
    packagePriceDisclaimer: true,
    serviceAreaSchema: "Nigerian coastal and inland waterways",
    keywords: [
      "Starlink boat Nigeria",
      "marine Starlink leisure craft",
      "yacht satellite internet Lagos",
      "fishing vessel connectivity",
    ],
  },
  {
    path: "/starlink-enterprise-marine-hub",
    seoTitle: "Enterprise & Marine Connectivity Nigeria | DataGram",
    metaDescription:
      "DataGram's marine connectivity hub for Nigerian businesses, NGOs, and offshore operators — maritime internet solutions and business Starlink deployment.",
    canonical: "/starlink-enterprise-marine-hub",
    ogImage: img("hero-enterprise-marine-hub.jpg"),
    h1: "Turnkey Starlink Network Integration for Enterprise and Maritime Operations in Nigeria",
    heroLabel: "Enterprise & marine connectivity hub",
    heroSubheading:
      "DataGram designs, installs, and documents Starlink networks for offices, NGOs, vessels, and industrial sites — from sky-view survey through VLAN handoff and managed support.",
    heroImageAlt: "Enterprise and marine network operations hub",
    heroImage: img("hero-enterprise-marine-hub.jpg"),
    heroImageFile: "hero-enterprise-marine-hub.jpg",
    heroImageReason:
      "Pexels network rack with blue illumination — dark technical infrastructure for enterprise/marine hub hero",
    heroObjectPosition: "center center",
    heroPrimaryCta: { label: "Request an Enterprise Survey", href: "/contact" },
    overviewTitle: "One desk for land and sea Starlink projects",
    overviewParagraphs: [
      "Nigerian operators rarely need a dish alone. They need a network that survives generator transfers, estate drilling rules, PTW on vessels, and IT handover that procurement can audit. This hub is the starting point for turnkey Starlink work across corporate campuses, NGO programmes, offshore fleets, and oil-field camps.",
      "DataGram covers South-South and South-East Nigeria as standard, with special-request mobilisation elsewhere. We match plan class and hardware to the site — Fixed High Performance or mobility-rated gear offshore, structured LAN integration on land — then leave speed baselines, cable photos, and escalation contacts with your team.",
    ],
    stats: [
      { label: "Indicative latency", value: "20–33 ms", note: "LEO path; WiFi and WAN design still matter." },
      { label: "Download range", value: "50–1,000 Mbps", note: "Plan class, obstruction, and load affect peaks." },
      { label: "Upload range", value: "10–100 Mbps", note: "Size honestly for CCTV, ERP, and crew welfare." },
      { label: "Survey to live", value: "3–14 days", note: "Depends on access windows, PTW, and hardware lead time." },
    ],
    whyTitle: "Who this is for",
    whyCards: [
      {
        icon: Building2,
        title: "Corporate offices and multi-site businesses",
        body: "Independent backup WAN, VLAN handoff to your firewall, and documented failover for Lagos, Abuja, and industrial campuses.",
        href: "/starlink-enterprise-nigeria",
        linkLabel: "Enterprise Starlink Nigeria",
      },
      {
        icon: HeartHandshake,
        title: "NGOs and humanitarian organisations",
        body: "Field sites and programme offices that need donor-ready install packs, generator-aware UPS, and connectivity where fibre never arrived.",
        href: "/starlink-enterprise-nigeria",
        linkLabel: "Enterprise & NGO Starlink",
      },
      {
        icon: Ship,
        title: "Offshore vessels and maritime operations",
        body: "OSVs, platforms, and coastal fleets that need motion-rated mounts, salt-spray cabling, and crew-vs-ops network separation.",
        href: "/starlink-offshore-maritime-installation",
        linkLabel: "Offshore maritime installation",
      },
      {
        icon: Factory,
        title: "Industrial sites and oil field camps",
        body: "Creek camps, plant yards, and Niger Delta industrial corridors where canopy, power quality, and access logistics drive the install plan.",
        href: "/starlink-installation-niger-delta",
        linkLabel: "Niger Delta installation coverage",
      },
    ],
    extraSections: [
      {
        title: "What we deliver — standard install vs DataGram enterprise service",
        paragraphs: [
          "A kit on a roof is not the same as a network your IT or HSE desk can accept. The table below shows where a basic install stops and where our enterprise service continues.",
        ],
        details: [
          {
            title: "Site survey depth",
            body: "Standard: quick sky-view check. DataGram: obstruction map, power circuit notes, cable route sketch, estate or PTW constraints, and a written materials list before mobilisation.",
          },
          {
            title: "Cable management",
            body: "Standard: shortest path to the router. DataGram: conduit or tray where required, drip loops, labelled runs, and routes that survive salt spray or estate facade rules.",
          },
          {
            title: "Network configuration",
            body: "Standard: default Starlink WiFi. DataGram: Ethernet handoff, VLANs for guest vs ops, dual-WAN or SD-WAN options, and firewall integration when your team provides requirements.",
          },
          {
            title: "Post-installation support",
            body: "Standard: self-serve app tickets. DataGram: managed support paths for enterprise, roaming, and maritime clients on active subscriptions — plus clear escalation when hardware faults need a truck roll.",
          },
          {
            title: "Documentation",
            body: "Standard: receipt and app login. DataGram: photos, IP plan, speed baselines at the desk (not only beside the dish), UPS runtime notes, and contacts for your facilities or safety officer.",
          },
          {
            title: "Compliance",
            body: "Standard: none beyond kit terms. DataGram: works inside your PTW and two-man field rules offshore; estate scope letters on land. See our offshore HSE page for vessel and platform practice.",
          },
        ],
      },
      {
        title: "Choose your dedicated service path",
        paragraphs: [
          "Use this hub to pick the right deep-dive page. Each link below is a live DataGram route — not a placeholder.",
        ],
        cards: [
          {
            title: "Enterprise & NGO sites",
            body: "Offices, campuses, and programme sites: dual-WAN, VLANs, generator-safe power, and audit-friendly handover.",
            href: "/starlink-enterprise-nigeria",
            linkLabel: "Open enterprise Starlink Nigeria",
          },
          {
            title: "Offshore & maritime",
            body: "Rigs, OSVs, FPSOs, and coastal bases: marine mounts, FHP hardware, and deck-safe cable routing.",
            href: "/starlink-offshore-maritime-installation",
            linkLabel: "Open offshore maritime installation",
          },
          {
            title: "Boats & coastal craft",
            body: "Leisure and workboats needing mobility-rated kits, DC power planning, and marina-friendly installs.",
            href: "/starlink-boat-installation",
            linkLabel: "Open boat installation",
          },
          {
            title: "Offshore HSE practice",
            body: "PTW coordination, two-man rule, pre-mobilisation survey, and post-install test reports for Niger Delta work.",
            href: "/starlink-offshore-hse-compliance",
            linkLabel: "Open offshore HSE compliance",
          },
          {
            title: "Starlink Roaming and Global Priority",
            body: "Plan assessment and account activation for Roaming add-ons and Global Priority upgrades across land and sea.",
            href: "/starlink-roaming-global-priority-nigeria",
            linkLabel: "Open Roaming & Global Priority activation",
          },
        ],
      },
    ],
    proofTitle: "Deployment proof",
    proofCards: [
      proof(
        "StarlinkCompanyInstallation.jpeg",
        "DataGram Starlink setup at institutional facility in Nigeria",
        "Institutional and enterprise installs with documented handover.",
        "IMAGE: StarlinkCompanyInstallation.jpeg — enterprise hub proof for corporate and NGO buyers"
      ),
      proof(
        "maritime4.jpeg",
        "Starlink dish installed on oil platform in the Niger Delta",
        "Platform and industrial corridor work across the Niger Delta.",
        "IMAGE: maritime4.jpeg — offshore and industrial proof for marine hub audience"
      ),
      proof(
        "datagram-starlink-boxes-stock.jpg",
        "Starlink hardware stocked at DataGram Nigeria for rapid mobilisation",
        "Hardware in stock for faster enterprise and maritime mobilisation.",
        "IMAGE: datagram-starlink-boxes-stock.jpg — procurement readiness for turnkey projects"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote:
        "We needed one contractor who could talk to IT on land and the safety officer on the vessel. Survey, install, and VLAN notes arrived in one pack.",
      attribution: "Facilities lead, multi-site operator (name withheld)",
    },
    packagesTitle: "Engagement options",
    packages: [
      {
        name: "Enterprise survey",
        priceLabel: "From ₦150,000",
        features: [
          "Sky view and mount recommendation",
          "Power and UPS notes",
          "Network handoff sketch (VLAN / dual-WAN)",
        ],
        cta: "Request an Enterprise Survey",
      },
      {
        name: "Turnkey install",
        priceLabel: "Quoted after survey",
        features: [
          "Mount, cable, grounding",
          "Router / firewall integration",
          "Baseline speed and photo handover",
        ],
        cta: "Request proposal",
      },
      {
        name: "Managed support",
        priceLabel: "Custom SLA",
        features: [
          "Priority support for active subscriptions",
          "Subscription renewal coordination",
          "Hardware swap planning when faults persist",
        ],
        cta: "Speak to our enterprise team",
      },
    ],
    relatedLinks: [
      { label: "Starlink for Enterprise Nigeria", href: "/starlink-enterprise-nigeria" },
      { label: "Offshore & Maritime Installation", href: "/starlink-offshore-maritime-installation" },
      { label: "Boat Installation", href: "/starlink-boat-installation" },
      { label: "Offshore HSE Compliance", href: "/starlink-offshore-hse-compliance" },
      { label: "Starlink Roaming and Global Priority", href: "/starlink-roaming-global-priority-nigeria" },
      { label: "Niger Delta Installation Coverage", href: "/starlink-installation-niger-delta" },
    ],
    ctaBanner: {
      title: "Speak to our enterprise team",
      body: "Tell us whether the site is an office, NGO field base, vessel, or industrial camp — we route you to the right survey pack.",
      buttonLabel: "Contact DataGram",
      href: "/contact",
    },
    faqs: [
      {
        question: "Is this hub a separate product from your enterprise and maritime pages?",
        answer:
          "No. This page is the turnkey overview. Dedicated scope, packages, and field detail live on the enterprise, offshore maritime, boat, HSE, and Niger Delta pages linked above.",
      },
      {
        question: "Can DataGram handle both office and vessel installs for one company?",
        answer:
          "Yes. Many operators need shore offices and fleet connectivity under one vendor. We coordinate surveys separately for land and marine assets, then align VLAN and support contacts across both.",
      },
      {
        question: "Do you invent certification numbers for offshore work?",
        answer:
          "No. We work inside your Permit to Work framework, use a two-man rule on vessel decks, and issue post-installation test reports. Formal third-party cert claims are only stated when held — see our offshore HSE page for current field practice.",
      },
      {
        question: "What does a turnkey project usually include?",
        answer:
          "Survey, correct hardware and plan class, professional mount and cable route, network configuration to your requirements, speed baseline, and written handover. Managed support is optional for clients on active subscriptions.",
      },
      roamingFaq,
      ...standardFaqs,
      {
        question: "What is maritime internet solutions and how does DataGram provide it?",
        answer:
          "Maritime internet solutions refer to connectivity services specifically designed for vessels, offshore platforms, and marine environments where standard broadband does not reach. DataGram provides end-to-end maritime internet through Starlink installation, plan selection, activation, and ongoing managed support for vessels operating in Nigerian waters and the Gulf of Guinea.",
      },
      {
        question: "What does business Starlink deployment cover for Nigerian companies?",
        answer:
          "Business Starlink deployment covers the full process of equipping a Nigerian company with Starlink connectivity — from site survey and hardware installation to account setup, staff WiFi configuration, and post-installation managed support. For multi-site businesses, DataGram manages the full rollout across locations and handles ongoing subscription and account administration.",
      },
    ],
    extraSchemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Enterprise and Marine Starlink Network Integration Nigeria",
        provider: {
          "@type": "LocalBusiness",
          name: "DataGram Nigeria",
          url: "https://www.datagram.ng",
        },
        areaServed: { "@type": "Country", name: "Nigeria" },
        serviceType: "Satellite Internet Network Integration",
        description:
          "Turnkey Starlink network integration for Nigerian enterprises, NGOs, offshore vessels, and industrial sites — from site survey to managed support.",
        url: "https://www.datagram.ng/starlink-enterprise-marine-hub",
      },
    ],
    packagePriceDisclaimer: true,
    serviceAreaSchema: "Nigeria — enterprise, NGO, maritime, and industrial sites",
    keywords: [
      "enterprise Starlink Nigeria",
      "marine Starlink network integration",
      "turnkey Starlink installation Nigeria",
      "offshore Starlink Nigeria",
      "NGO Starlink connectivity",
    ],
    includeHowTo: true,
  },
  {
    path: "/starlink-offshore-hse-compliance",
    seoTitle:
      "Offshore Starlink Installation Nigeria | HSE Compliance & Safety Standards | DataGram",
    metaDescription:
      "DataGram offshore Starlink installs under PTW on Niger Delta sites — pre-mobilisation survey, two-man rule, and documented post-install test reports.",
    canonical: "/starlink-offshore-hse-compliance",
    ogImage: img("hero-offshore-hse-compliance.jpg"),
    h1: "Offshore Starlink Installation in Nigeria: HSE-Aware, Field-Ready, and Fully Documented",
    heroLabel: "Offshore HSE & field practice",
    heroSubheading:
      "DataGram's offshore team operates under Permit to Work (PTW) frameworks and documented field safety standards across all Niger Delta and Gulf of Guinea deployments.",
    heroImageAlt: "Offshore oil platform installation environment",
    heroImage: img("hero-offshore-hse-compliance.jpg"),
    heroImageFile: "hero-offshore-hse-compliance.jpg",
    heroImageReason:
      "Pexels aerial offshore oil platform complex — industrial, safety-serious, clearly platform/rig focused rather than cargo tanker",
    heroObjectPosition: "center top",
    heroPrimaryCta: { label: "Request an Offshore Survey", href: "/contact" },
    overviewTitle: "Safety practice before the first hole is drilled",
    overviewParagraphs: [
      "Offshore Starlink work fails when installers treat a vessel like a bungalow roof. Deck access, crane sweep, hot work rules, and your platform safety officer decide the schedule — not a WhatsApp photo of a clear sky. DataGram mobilises only after a pre-installation survey and PTW coordination with your operator.",
      "Our confirmed field practices are the same standards published on the offshore maritime page: documented site survey, PTW liaison, two-man working at height and on decks, and a written post-installation speed report before the crew leaves site. Formal third-party maritime safety certifications (including BOSIET and NIMASA-issued credentials) are required for all offshore team members and are in progress — we do not list cert numbers we do not currently hold.",
      "For full marine hardware scope, mounts, and plan classes, use the dedicated offshore maritime installation page. This page focuses on how we work safely and what documentation you receive.",
    ],
    stats: [
      { label: "Indicative latency", value: "20–33 ms", note: "Indicative band only, not a site result. A separate baseline is recorded after install." },
      { label: "Download range", value: "50–1,000 Mbps", note: "Logged in the post-install test report." },
      { label: "Upload range", value: "10–100 Mbps", note: "Plan class confirmed before mobilisation." },
      { label: "Install window", value: "1–3 days", note: "After survey and PTW approval." },
    ],
    whyTitle: "Safety standards and field practice",
    whyCards: [
      {
        icon: Shield,
        title: "PTW compliance on all offshore sites",
        body: "We work inside your platform or vessel Permit to Work framework and do not start until your safety officer has approved the job.",
      },
      {
        icon: Anchor,
        title: "Pre-mobilisation site survey",
        body: "Power, sky view, cable paths, and mounting surface integrity are documented before equipment is brought on board.",
      },
      {
        icon: Ship,
        title: "Two-man minimum rule",
        body: "No solo working at elevation or on vessel decks. Installations are carried out in pairs as a standing field rule.",
      },
      {
        icon: Waves,
        title: "Marine-rated hardware selection",
        body: "Flat High Performance and corrosion-aware mounts, glands, and fixings matched to spray and vibration — not residential kits on a railing.",
      },
    ],
    extraSections: [
      {
        title: "Additional field controls on every vessel install",
        checklist: [
          "Grounding and lightning protection planned into the cable and power path",
          "Post-installation test report issued on every job (download, upload, latency)",
          "Crane sweep and walkway clearance checked before final mount position",
          "Bridge / ops networks kept separate from crew WiFi when IT provides VLAN requirements",
        ],
        note: "Source of truth for the four core field safety standards: Our Field Safety Standards on the offshore maritime installation page — linked under Related services below.",
        footerNote: "We summarise practice here; we do not duplicate that section word-for-word.",
      },
      {
        title: "Our offshore process",
        details: [
          {
            title: "Step 1 — Pre-mobilisation remote survey",
            body: "Remote assessment of sky view, power source, canopy or structure obstruction, and access route so the visit can complete safely in one mobilisation where possible.",
          },
          {
            title: "Step 2 — PTW and safety briefing",
            body: "PTW application and briefing with the vessel or platform safety officer. Work does not start without required approvals.",
          },
          {
            title: "Step 3 — Installation",
            body: "Mast or pedestal, crane sweep check, cable route, router placement, power circuit, and grounding — executed under two-man rules.",
          },
          {
            title: "Step 4 — Activation and speed baseline",
            body: "Service activation and on-site download/upload/latency readings recorded for the handover pack.",
          },
          {
            title: "Step 5 — Handover documentation",
            body: "Written report issued to the client: photos, test results, cable notes, and support contacts for your operations desk.",
          },
        ],
      },
      {
        title: "Proof of work",
        paragraphs: [
          "DataGram has completed Starlink installations across the Niger Delta and Gulf of Guinea for vessels and industrial platforms. Named client logos and vessel references are added here when release permission is available.",
        ],
        note: "PROOF: add client logos or named deployment references when available — offshore clients, vessel names, oil camp names. DataGram has completed installations across the Niger Delta and Gulf of Guinea.",
      },
    ],
    proofTitle: "Field deployments",
    proofCards: [
      proof(
        "maritime4.jpeg",
        "Starlink dish on oil platform in the Niger Delta",
        "Platform install context for oil and gas HSE reviewers.",
        "IMAGE: maritime4.jpeg — Niger Delta platform proof for HSE landing"
      ),
      proof(
        "maritime2.jpeg",
        "Starlink dish on tanker deck in open ocean",
        "Deep-sea deck environment where PTW and spray-rated hardware matter.",
        "IMAGE: maritime2.jpeg — open-ocean deck context for offshore HSE page"
      ),
      proof(
        "datagram-technician-rooftop-mount.jpg",
        "DataGram technician mounting Starlink hardware in Nigeria",
        "Field crew practice — paired working and documented mounts.",
        "IMAGE: datagram-technician-rooftop-mount.jpg — technician proof for process credibility"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote:
        "They waited for our PTW sign-off and left a speed report the OIM could file. No solo deck work, no surprises for the safety officer.",
      attribution: "Marine superintendent, OSV operator (name withheld)",
    },
    packagesTitle: "Offshore engagement",
    packages: [
      {
        name: "Offshore survey",
        priceLabel: "Quoted by mobilisation",
        features: [
          "Remote pre-mobilisation assessment",
          "PTW coordination notes",
          "Mount and power recommendations",
        ],
        cta: "Request an Offshore Survey",
      },
      {
        name: "Vessel / platform install",
        priceLabel: "Quoted after survey",
        features: [
          "Two-man install under PTW",
          "Marine-rated mount and cable route",
          "On-site speed baseline report",
        ],
        cta: "Book an Offshore Survey",
      },
    ],
    relatedLinks: [
      { label: "Offshore & Maritime Installation", href: "/starlink-offshore-maritime-installation" },
      { label: "Boat Installation", href: "/starlink-boat-installation" },
      { label: "Niger Delta Installation Coverage", href: "/starlink-installation-niger-delta" },
      { label: "Enterprise & Marine Hub", href: "/starlink-enterprise-marine-hub" },
      { label: "Marine SD-WAN Integration", href: "/starlink-marine-sdwan-integration" },
    ],
    ctaBanner: {
      title: "Book an Offshore Survey",
      body: "Message us on WhatsApp with vessel type, berth or yard location, and your safety officer contact — we reply with survey next steps.",
      buttonLabel: "Book an Offshore Survey",
      href: "/contact",
    },
    faqs: [
      {
        question: "Does DataGram hold BOSIET or NIMASA HSE certificates today?",
        answer:
          "DataGram does not currently claim formal BOSIET or NIMASA certification numbers on this site. Those credentials are required for all offshore team members and are in progress. What we do confirm today is PTW coordination, two-man field rules, pre-mobilisation surveys, and post-installation test reports.",
      },
      {
        question: "What is a Permit to Work (PTW) in this context?",
        answer:
          "PTW is your operator's controlled work permit. We liaise with your safety officer, follow site rules for hot work, height, and deck access, and do not commence until approvals are in place.",
      },
      {
        question: "Where can I read your full Field Safety Standards copy?",
        answer:
          "On the offshore maritime installation page under Our Field Safety Standards. This HSE page summarises practice and process; that page is the source of truth for the four core standards.",
      },
      {
        question: "Can you install while the vessel is underway?",
        answer:
          "No. Installation requires the vessel docked or anchored in a stable position. We coordinate with your operations schedule to minimise downtime.",
      },
      {
        question: "What is in the post-installation test report?",
        answer:
          "Confirmed download and upload speeds, latency readings, and notes on mount and cable completion so your operations or IT desk has a filed baseline.",
      },
      roamingFaq,
    ],
    schemaFaqs: [
      {
        question: "Does DataGram follow PTW on offshore Starlink installs in Nigeria?",
        answer:
          "Yes. DataGram works within the Permit to Work framework of the platform or vessel operator, liaises with the safety officer, and does not commence until required approvals are in place.",
      },
      {
        question: "What field safety practices does DataGram confirm for offshore work?",
        answer:
          "Pre-mobilisation site survey, PTW coordination, two-man minimum rule for deck and height work, marine-rated hardware selection, grounding planning, and a written post-installation speed report on every job.",
      },
      {
        question: "Does DataGram claim BOSIET or NIMASA certification on this page?",
        answer:
          "No. Formal BOSIET and NIMASA credentials are required for offshore team members and are in progress. DataGram does not publish cert numbers it does not currently hold.",
      },
    ],
    extraSchemas: [
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Offshore Starlink Installation HSE Practice Nigeria",
        provider: {
          "@type": "LocalBusiness",
          name: "DataGram Nigeria",
          url: "https://www.datagram.ng",
        },
        areaServed: {
          "@type": "Place",
          name: "Niger Delta and Gulf of Guinea offshore waters",
        },
        serviceType: "Offshore Satellite Internet Installation",
        description:
          "HSE-aware Starlink installation for Nigerian offshore vessels and platforms under Permit to Work frameworks, with pre-mobilisation survey, two-man field rules, and documented post-installation test reports.",
        url: "https://www.datagram.ng/starlink-offshore-hse-compliance",
      },
    ],
    packagePriceDisclaimer: true,
    serviceAreaSchema: "Nigerian offshore waters — Niger Delta and Gulf of Guinea",
    keywords: [
      "offshore Starlink HSE Nigeria",
      "Starlink PTW installation",
      "Niger Delta Starlink safety",
      "offshore Starlink survey Nigeria",
    ],
  },
  {
    path: "/starlink-marine-sdwan-integration",
    seoTitle:
      "Marine SD-WAN & Network Bonding Nigeria | Starlink + 4G Failover for Vessels | DataGram",
    metaDescription:
      "DataGram configures Starlink SD-WAN for Nigerian vessels and offshore sites — Starlink with 4G or VSAT failover for resilient maritime connectivity.",
    canonical: "/starlink-marine-sdwan-integration",
    ogImage: img("hero-marine-sdwan-integration.jpg"),
    h1: "Marine SD-WAN Integration: Starlink + 4G/VSAT Failover for Nigerian Vessels and Offshore Sites",
    heroLabel: "Marine SD-WAN & multi-WAN bonding",
    heroSubheading:
      "No single connection is enough for commercial maritime operations. DataGram configures multi-WAN bonding for zero-downtime connectivity at sea.",
    heroImageAlt: "Commercial vessel marine SD-WAN connectivity",
    heroImage: img("hero-marine-sdwan-integration.jpg"),
    heroImageFile: "hero-marine-sdwan-integration.jpg",
    heroImageReason:
      "Pexels ship bridge navigation console — commercial maritime tech controls, dark enough for overlay, not leisure/cruise",
    heroObjectPosition: "center center",
    heroPrimaryCta: { label: "Get a Network Integration Proposal", href: "/contact" },
    overviewTitle: "What SD-WAN means for vessels — without the jargon fog",
    overviewParagraphs: [
      "A WAN is a wide-area link to the internet — Starlink, 4G LTE, or legacy VSAT. SD-WAN (software-defined WAN) and dual-WAN routers decide which link carries traffic and what happens when one path fails. Bonding or failover is the practical outcome: if Starlink drops in heavy rain or a beam handoff, crew and bridge traffic move to the backup path instead of going dark.",
      "A single Starlink dish is still a single point of failure. Commercial OSVs, FPSOs, and NGO vessels in remote waterways need a written failover order, not hope. DataGram selects and configures dual-WAN routers, sets VLANs for crew WiFi versus bridge operations versus CCTV, and applies QoS so critical traffic keeps priority during a switch.",
      "Hardware install and HSE practice live on our offshore maritime and HSE pages. This page covers the network integration layer on top of a working Starlink path.",
    ],
    stats: [
      { label: "Indicative Starlink latency", value: "20–33 ms", note: "Indicative band only, not a failover guarantee. The 4G or VSAT path is separate." },
      { label: "Download range", value: "50–1,000 Mbps", note: "Primary Starlink path under normal conditions." },
      { label: "Upload range", value: "10–100 Mbps", note: "Shape CCTV and sync so backups are not saturated." },
      { label: "Design window", value: "Survey + config", note: "Quoted after vessel network and coverage review." },
    ],
    whyTitle: "Integration options",
    whyCards: [
      {
        icon: Wifi,
        title: "Starlink + 4G LTE failover",
        body: "Best for coastal vessels and near-shore ops where LTE coverage is usable. Starlink stays primary; 4G carries traffic when the satellite path degrades.",
      },
      {
        icon: Anchor,
        title: "Starlink + VSAT backup",
        body: "For deep offshore where cellular is gone. Keep legacy VSAT as the safety net while Starlink handles day-to-day low-latency traffic.",
      },
      {
        icon: Network,
        title: "Starlink + Starlink dual-dish",
        body: "Ultra-high availability for critical platforms: two terminals, separate mounts where sky view allows, policy routing across both paths.",
      },
      {
        icon: Shield,
        title: "VLAN and QoS discipline",
        body: "Crew welfare, bridge ops, and CCTV should not share one flat network. We separate traffic classes so a Netflix spike does not starve ops tablets.",
      },
    ],
    extraSections: [
      {
        title: "Technical scope of our service",
        details: [
          {
            title: "Dual-WAN router selection and setup",
            body: "Compatible platforms such as Peplink or MikroTik sized for your port count, power budget, and whether you need true bonding versus simple failover.",
          },
          {
            title: "VLAN configuration",
            body: "Crew WiFi, bridge operations, and CCTV on separate segments with firewall rules your IT or vendor can audit.",
          },
          {
            title: "QoS for critical traffic",
            body: "Priority rules for voice, ops apps, and monitoring so failover bandwidth is spent where it matters.",
          },
          {
            title: "Monitoring and alerting",
            body: "Basic path health checks and alerting so night crews know when the primary link dropped — not after the morning call fails.",
          },
        ],
      },
      {
        title: "Who this is for",
        cards: [
          {
            title: "OSV operators",
            body: "Supply vessels that need crew welfare online without risking bridge connectivity when rain fade hits.",
            href: "/starlink-offshore-maritime-installation",
            linkLabel: "Offshore maritime installation",
          },
          {
            title: "FPSOs and drilling rigs",
            body: "Static or semi-static platforms that want Starlink primary with VSAT or dual-dish resilience for campaigns.",
            href: "/starlink-offshore-hse-compliance",
            linkLabel: "Offshore HSE & survey process",
          },
          {
            title: "NGO vessels in remote waterways",
            body: "Creek and coastal humanitarian craft that cannot rely on marina WiFi or a single SIM.",
            href: "/starlink-boat-installation",
            linkLabel: "Boat installation",
          },
        ],
        paragraphs: [
          "Expect a brief reconnect on some sessions when paths switch — banking portals and sticky VPNs may need a refresh. We test failover during handover so your crew sees the behaviour before the first storm.",
        ],
      },
    ],
    proofTitle: "Deployment context",
    proofCards: [
      proof(
        "maritime2.jpeg",
        "Starlink on tanker deck for maritime multi-WAN design",
        "Deck installs where primary Starlink and backup paths must be planned together.",
        "IMAGE: maritime2.jpeg — marine SD-WAN hero context"
      ),
      proof(
        "maritime4.jpeg",
        "Starlink on Niger Delta oil platform",
        "Platform environments that often keep VSAT during Starlink transition.",
        "IMAGE: maritime4.jpeg — deep offshore dual-path relevance"
      ),
      proof(
        "datagram-starlink-boxes-stock.jpg",
        "Starlink hardware ready for vessel network integration projects",
        "Hardware readiness for survey-led multi-WAN projects.",
        "IMAGE: datagram-starlink-boxes-stock.jpg — mobilisation readiness"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote:
        "Starlink became primary; VSAT stayed as the documented backup. Failover was tested on the dock before we sailed — that was the requirement from IT.",
      attribution: "IT lead, offshore support company (name withheld)",
    },
    packagesTitle: "Network integration engagements",
    packages: [
      {
        name: "Integration survey",
        priceLabel: "Quoted after scope call",
        features: [
          "Existing WAN inventory (Starlink / 4G / VSAT)",
          "Router platform recommendation",
          "VLAN and failover sketch",
        ],
        cta: "Get a Network Integration Proposal",
      },
      {
        name: "Dual-WAN configuration",
        priceLabel: "Quoted after survey",
        features: [
          "Router install and policy routing",
          "QoS and VLAN handoff",
          "Documented failover test",
        ],
        cta: "Request a Network Integration Proposal",
      },
      {
        name: "Full marine turnkey",
        priceLabel: "Custom",
        features: [
          "Dish install + multi-WAN config",
          "HSE-aware mobilisation",
          "Handover pack for ops and IT",
        ],
        cta: "Speak to maritime engineering",
      },
    ],
    relatedLinks: [
      { label: "Offshore & Maritime Installation", href: "/starlink-offshore-maritime-installation" },
      { label: "Offshore HSE Compliance", href: "/starlink-offshore-hse-compliance" },
      { label: "Boat Installation", href: "/starlink-boat-installation" },
      { label: "Enterprise & Marine Hub", href: "/starlink-enterprise-marine-hub" },
    ],
    ctaBanner: {
      title: "Request a Network Integration Proposal",
      body: "Send vessel type, current links (Starlink / 4G / VSAT), and whether you need bonding or simple failover — we reply with a scoped proposal.",
      buttonLabel: "Request a Network Integration Proposal",
      href: "/contact",
    },
    faqs: [
      {
        question: "What is the difference between failover and bonding?",
        answer:
          "Failover switches traffic to a backup link when the primary fails. Bonding can combine capacity or session distribution across links depending on the router platform. We recommend the simpler model that matches your risk and budget — not every vessel needs full bonding.",
      },
      {
        question: "Will calls drop when Starlink fails over to 4G?",
        answer:
          "Often there is a brief disconnect on path switch. Session stickiness for banking or some VPNs may need a reconnect. We test this during handover so expectations are clear.",
      },
      {
        question: "Can you configure Starlink with our existing Peplink or MikroTik?",
        answer:
          "Yes, when the appliance supports dual-WAN and your firmware is current. We confirm model and port layout during survey before promising a config-only job.",
      },
      {
        question: "Do we still need the correct Starlink maritime plan?",
        answer:
          "Yes. SD-WAN does not fix the wrong plan class or a residential dish at sea. Hardware and subscription must match mobility or maritime use before we design failover.",
      },
      {
        question: "Where does HSE fit into a network integration project?",
        answer:
          "Any new deck mount or cable gland still follows PTW and two-man rules. See our offshore HSE compliance page for field practice; this page covers the router and policy layer.",
      },
      roamingFaq,
    ],
    schemaFaqs: [
      {
        question: "Does DataGram configure Starlink SD-WAN or failover on Nigerian vessels?",
        answer:
          "Yes. DataGram configures multi-WAN setups using compatible routers such as Peplink or MikroTik, with Starlink as primary and 4G LTE or legacy VSAT as failover for maritime and offshore sites.",
      },
      {
        question: "What integration options are available?",
        answer:
          "Starlink with 4G LTE failover for coastal vessels, Starlink with VSAT backup for deep offshore, and dual Starlink dish designs for ultra-high availability where sky view and budget allow.",
      },
      {
        question: "What is included in DataGram marine SD-WAN scope?",
        answer:
          "Dual-WAN router selection and setup, VLAN separation for crew, bridge, and CCTV traffic, QoS for critical apps, and monitoring or alerting for path health.",
      },
    ],
    extraSchemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Marine SD-WAN and Starlink Network Bonding Nigeria",
        provider: {
          "@type": "LocalBusiness",
          name: "DataGram Nigeria",
          url: "https://www.datagram.ng",
        },
        areaServed: { "@type": "Country", name: "Nigeria" },
        serviceType: "Marine Network Integration",
        description:
          "Starlink SD-WAN and multi-WAN bonding for Nigerian vessels and offshore sites — Starlink with 4G or VSAT failover for resilient maritime connectivity.",
        url: "https://www.datagram.ng/starlink-marine-sdwan-integration",
      },
    ],
    packagePriceDisclaimer: true,
    serviceAreaSchema: "Nigerian coastal and offshore maritime operations",
    keywords: [
      "marine SD-WAN Nigeria",
      "Starlink failover vessel",
      "Starlink VSAT bonding",
      "offshore multi-WAN Nigeria",
    ],
  },
  {
    path: "/starlink-fleet-management-nigeria",
    seoTitle: "Starlink Fleet Nigeria | Vessels & Enterprise Starlink | DataGram",
    metaDescription:
      "Use one local contact if you run five or more dishes. DataGram manages the accounts, the bills, and the faults for sites and vessels.",
    canonical: "/starlink-fleet-management-nigeria",
    ogImage: img("hero-fleet-management-nigeria.jpg"),
    h1: "Starlink Fleet Management for Nigerian Enterprises and Maritime Operators",
    heroLabel: "Multi-site & fleet operations",
    heroSubheading:
      "Choose fleet management when you have many sites or many boats, not one dish.",
    heroImageAlt: "Fleet of vessels in port — Starlink fleet management Nigeria",
    heroImage: img("hero-fleet-management-nigeria.jpg"),
    heroImageFile: "hero-fleet-management-nigeria.jpg",
    heroImageReason:
      "Pexels aerial multi-vessel anchorage — conveys fleet scale and coordination, not a single-ship portrait",
    heroObjectPosition: "center top",
    heroPrimaryCta: { label: "Request a Fleet Proposal", href: "/contact" },
    overviewTitle: "One contact for every dish",
    overviewParagraphs: [
      "One dish is a job. Ten offices, or five boats with different captains, is a running task. SpaceX still bills each terminal on its own. Without a local manager, IT ends up with many apps, many bills, and many fault tickets.",
      "Use DataGram when you want buying, fitting, accounts, plan changes, and faults under one Nigerian contact. You can get naira invoices with VAT where we supply the kit and the fit. Each quarter you get a short note per site.",
      "Latency, the delay before a reply, is a guide around 20 to 33 milliseconds, not a promise. An obstruction is something in the way of the sky. The figure we write down after the fit is the baseline for that site.",
    ],
    stats: [
      { label: "Indicative latency", value: "20–33 ms", note: "Indicative band only. The number recorded after install is the site baseline, and it may differ." },
      { label: "Download range", value: "50–1,000 Mbps", note: "Varies by plan class and obstruction." },
      { label: "Upload range", value: "10–100 Mbps", note: "Sized honestly for CCTV and branch sync." },
      { label: "Fleet scope", value: "5+ sites", note: "Meaningful when you stop managing accounts one by one." },
    ],
    whyTitle: "Who this is for",
    whyCards: [
      {
        icon: Building2,
        title: "Multi-site businesses",
        body: "Use this if the firm has offices or shops in many states, and fibre is missing or weak. We fit them together and keep one billing talk.",
        href: "/starlink-enterprise-nigeria",
        linkLabel: "Enterprise Starlink Nigeria",
      },
      {
        icon: Ship,
        title: "Maritime fleet operators",
        body: "Choose this if you run 5 or more boats. The kits follow one standard. One engineer takes the fault, whichever boat it is.",
        href: "/starlink-offshore-maritime-installation",
        linkLabel: "Offshore maritime installation",
      },
      {
        icon: HeartHandshake,
        title: "NGO and field networks",
        body: "An NGO with sites in many states can have them live to one timetable. We stage the work. You do not wait for one site to finish before the next is planned.",
        href: "/starlink-enterprise-nigeria",
        linkLabel: "Enterprise & NGO Starlink",
      },
      {
        icon: Factory,
        title: "Oil camp and remote industrial sites",
        body: "Camps in the Niger Delta can keep one view of plans, upgrades, and faults. You do not have to run a separate login for every dish.",
        href: "/starlink-installation-niger-delta",
        linkLabel: "Niger Delta installation coverage",
      },
    ],
    extraSections: [
      {
        title: "What fleet management covers",
        checklist: [
          "Buying kits in bulk, and the import papers",
          "Fitting many sites on one timetable",
          "One place for the accounts and the monthly plans",
          "Plan changes, including Global Priority, on every site",
          "Naira invoices with VAT, per site or as one bill",
          "One person for faults, swaps, and follow-up",
          "A short note each quarter: speed, uptime, plan use",
        ],
      },
      {
        title: "Fleet vs a normal fit",
        paragraphs: [
          "A normal fit ends when one dish is online. Fleet work goes on after that. It covers accounts, bills, upgrades, and faults for every site or boat in the job.",
        ],
        details: [
          {
            title: "Accounts",
            body: "A normal fit is one dish and one account. Fleet work is many dishes and one relationship. We run the set, so you do not keep ten logins.",
          },
          {
            title: "Day to day",
            body: "On a normal fit, you run the app at each site. On a fleet, we run the accounts, so IT is not chasing passwords and bill dates.",
          },
          {
            title: "Faults",
            body: "On a normal fit, you call Starlink yourself. On a fleet, we take the fault, the swap, and the site visit, through one contact.",
          },
          {
            title: "Billing",
            body: "A normal fit is one invoice per kit. A fleet can be one bill, or a bill per site. Where we supply the kit and the fit, the invoice is in naira and shows VAT.",
          },
          {
            title: "Notes",
            body: "A normal fit has no regular report. A fleet gets a short note each quarter on speed, uptime, and plan use, so you see the whole set.",
          },
          {
            title: "Plan changes",
            body: "On a normal fit, you change each plan yourself. On a fleet, we turn on upgrades, including Roaming and Global Priority, on every site in the job.",
          },
        ],
      },
    ],
    proofTitle: "Deployment proof",
    proofCards: [
      proof(
        "StarlinkCompanyInstallation.jpeg",
        "Enterprise Starlink install supporting multi-site fleet programmes",
        "Enterprise sites that need documented handover and repeatable standards.",
        "IMAGE: StarlinkCompanyInstallation.jpeg — fleet management enterprise proof"
      ),
      proof(
        "datagram-starlink-boxes-stock.jpg",
        "Starlink hardware stocked for bulk fleet procurement",
        "Bulk hardware readiness for coordinated multi-site mobilisation.",
        "IMAGE: datagram-starlink-boxes-stock.jpg — fleet procurement stock proof"
      ),
      proof(
        "maritime4.jpeg",
        "Starlink on Niger Delta platform for maritime fleet programmes",
        "Maritime and industrial sites that share the same fleet management need.",
        "IMAGE: maritime4.jpeg — vessel/platform fleet context"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote:
        "We stopped treating each branch as a separate Starlink problem. One contact, one billing conversation, and faults no longer disappear into five different WhatsApp threads.",
      attribution: "IT operations lead, multi-state retailer (name withheld)",
    },
    packagesTitle: "Fleet engagement options",
    packages: [
      {
        name: "Fleet survey",
        priceLabel: "Quoted by site count",
        features: [
          "Inventory of existing dishes and plans",
          "Gap list for hardware and plan class",
          "Rollout schedule sketch",
        ],
        cta: "Request a Fleet Proposal",
      },
      {
        name: "Managed fleet",
        priceLabel: "Custom",
        features: [
          "Procurement and coordinated installs",
          "Account and subscription administration",
          "Quarterly per-site performance notes",
        ],
        cta: "Request a Fleet Proposal",
      },
      {
        name: "Maritime fleet",
        priceLabel: "Custom",
        features: [
          "Consistent FHP / mobility standards",
          "Global Priority activation where required",
          "Single engineer escalation path",
        ],
        cta: "Request a Fleet Proposal",
      },
    ],
    relatedLinks: [
      { label: "Starlink for Enterprise Nigeria", href: "/starlink-enterprise-nigeria" },
      { label: "Enterprise & Marine Hub", href: "/starlink-enterprise-marine-hub" },
      { label: "Offshore & Maritime Installation", href: "/starlink-offshore-maritime-installation" },
      { label: "Offshore HSE Compliance", href: "/starlink-offshore-hse-compliance" },
      {
        label: "Global Priority and maritime mobility plans",
        href: "/starlink-roaming-global-priority-nigeria",
      },
      { label: "Enterprise Plans", href: "/services/enterprise-plans" },
    ],
    ctaBanner: {
      title: "Ready to run the dishes from one place?",
      body: "Tell us how many sites or boats you run, where they sit, and if you want one bill. We reply with a fleet proposal.",
      buttonLabel: "Request a Fleet Proposal",
      href: "/contact",
    },
    faqs: [
      {
        question: "How many sites make fleet management worth it?",
        answer:
          "Usually five or more dishes. Fewer can still make sense if a camp or a boat is hard to reach, and a missed renewal is costly. Below that, a normal business fit with clear notes is often enough.",
      },
      {
        question: "Does SpaceX give one portal for all our Starlink accounts?",
        answer:
          "Not in the way most IT teams hope. Each terminal still has its own account. Fleet work is how we sit on top of that, with one local contact and one admin view.",
      },
      {
        question: "Can you consolidate billing in naira with VAT?",
        answer:
          "Where we supply the kit, the fit, and the managed work, the invoice is in naira and shows VAT. Starlink's own monthly line still follows the SpaceX checkout. We show finance which part is which.",
      },
      {
        question: "Do you manage Global Priority upgrades across a maritime fleet?",
        answer:
          "Yes. When a boat needs Global Priority for use outside Nigeria, or for the ocean, we change the plans across the fleet. Each captain does not have to guess in the app.",
      },
      roamingFaq,
      {
        question: "Can DataGram manage Starlink across a fleet of vessels in Nigerian waters?",
        answer:
          "Yes. We run the plans, including Global Priority and the boat plans, and we buy and turn on the kits across many vessels at once. Your team does not have to run each dish account. Related: Global Priority and boat plans (/starlink-roaming-global-priority-nigeria).",
      },
      {
        question: "What is the difference between fleet management and a standard enterprise Starlink deployment?",
        answer:
          "A normal business job is one site: survey, fit, and turn on. Fleet work is many boats, offices, or camps, with one view of the accounts. We handle renewals, plan changes, and faults across all of them. It starts to pay off at 5 or more dishes.",
      },
    ],
    extraSchemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Starlink Fleet Management Nigeria",
        provider: {
          "@type": "LocalBusiness",
          name: "DataGram Nigeria",
          url: "https://www.datagram.ng",
        },
        serviceType: "Satellite Internet Fleet Management",
        areaServed: { "@type": "Country", name: "Nigeria" },
        description:
          "One contact to buy, fit, and manage Starlink for many Nigerian sites or boats.",
        url: "https://www.datagram.ng/starlink-fleet-management-nigeria",
      },
    ],
    packagePriceDisclaimer: true,
    serviceAreaSchema: "Nigeria — multi-site enterprise and maritime fleets",
    keywords: [
      "Starlink fleet management Nigeria",
      "multi-site Starlink enterprise",
      "Starlink account management Nigeria",
      "maritime Starlink fleet",
    ],
    includeHowTo: true,
  },
  {
    path: "/starlink-priority-plan-nigeria",
    seoTitle: "Starlink Priority Plan Nigeria | DataGram",
    metaDescription:
      "Where a Lagos, Abuja, or Port Harcourt address shows Priority only, DataGram can activate that plan. Availability is per address — check before you buy.",
    canonical: "/starlink-priority-plan-nigeria",
    ogImage: img("blog/starlink-residential-vs-priority-business-nigerian-smes.jpg"),
    h1: "Address Showing Priority Only? The Priority Plan Is the Route on That Screen",
    heroLabel: "Priority Plan activation",
    heroSubheading:
      "Some Lagos and Abuja addresses, and some Port Harcourt addresses, are offered Priority rather than new residential signup. That is not a standing rule for every street in those cities. Check the exact service address. Where Priority is what the screen shows, DataGram handles activation.",
    heroImageAlt: "Starlink Priority Plan activation in Nigeria",
    heroImage: img("blog/starlink-residential-vs-priority-business-nigerian-smes.jpg"),
    heroImageFile: "blog/starlink-residential-vs-priority-business-nigerian-smes.jpg",
    heroImageReason:
      "Priority Plan activation in Nigeria with commercial and residential context — used where an address is offered Priority rather than new residential signup.",
    heroObjectPosition: "center top",
    overviewTitle: "Priority Plan activation when an address is not offered residential",
    overviewParagraphs: [
      "Residential signup is address-specific. Reporting in 2026 described Priority-only signup on many Lagos and Abuja addresses. Port Harcourt and Benin were later described as mixed, and some addresses see a deposit or wait step rather than an immediate plan. DataGram checks the service address, then activates Priority only where that is the route the account shows.",
      "The Priority Plan is a higher-tier subscription that provides better throughput, stronger support, and fewer availability restrictions than residential service. We assess the right kit, manage the account, and deliver the installation end to end.",
    ],
    stats: [
      { label: "Indicative latency", value: "20–33 ms", note: "Indicative band only, not a DataGram guarantee. Obstructions and plan load still apply." },
      { label: "Indicative download range", value: "100–350 Mbps", note: "Often discussed for a clean install. Not a guaranteed result." },
      { label: "Upload range", value: "10–50 Mbps", note: "Suitable for remote work, video calls, and business traffic." },
      { label: "Activation window", value: "3–7 days", note: "After survey and account confirmation." },
    ],
    whyTitle: "Why the Priority Plan matters now",
    whyCards: [
      {
        icon: Wifi,
        title: "Bypasses residential waitlists",
        body: "Where an address in Lagos, Abuja, or Port Harcourt is offered Priority rather than residential, that plan is the route still showing. It is not a city-wide rule.",
      },
      {
        icon: Zap,
        title: "Faster and more reliable",
        body: "Priority throughput is not deprioritised during peak hours like residential plans, making it better for offices and high-use homes.",
      },
      {
        icon: Shield,
        title: "24/7 priority support",
        body: "Starlink Priority Plan subscribers get premium support and a higher service priority than standard residential users.",
      },
      {
        icon: Home,
        title: "Standard Starlink hardware in most cases",
        body: "The common Gen 3 dish is compatible with Priority Plan activation unless your site requires a Flat High Performance upgrade.",
      },
    ],
    proofTitle: "Priority Plan deployment proof",
    proofLink: { label: "Explore enterprise and fleet activation →", href: "/starlink-enterprise-nigeria" },
    proofCards: [
      proof(
        "datagram-starlink-boxes-stock.jpg",
        "Starlink hardware stocked at DataGram Nigeria for rapid activation",
        "Starlink inventory ready for fast Priority Plan activation projects.",
        "IMAGE: datagram-starlink-boxes-stock.jpg — hardware stock for priority plan activation"
      ),
      proof(
        "StarlinkCompanyInstallation.jpeg",
        "Starlink dish installed on a commercial site in Nigeria",
        "Priority Plan activation supports business-class installations as well as home sites.",
        "IMAGE: StarlinkCompanyInstallation.jpeg — enterprise grade Starlink install proof"
      ),
      proof(
        "StarlinkRoofMount.jpeg",
        "Starlink dish mounted on a rooftop in Nigeria",
        "Residential and mixed-use rooftop installations that may require Priority Plan activation.",
        "IMAGE: StarlinkRoofMount.jpeg — rooftop installation proof for priority plan clients"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote:
        "When the Starlink website said residential was sold out, DataGram moved us to the Priority Plan and managed the account, hardware, and install with no delay.",
      attribution: "Nigerian business and residential connectivity buyer",
    },
    packagesTitle: "Priority Plan activation options",
    packages: [
      {
        name: "Priority Plan survey",
        priceLabel: "From ₦75,000",
        features: [
          "Address availability check",
          "Eligibility review for the Priority Plan",
          "Hardware recommendation and cost estimate",
        ],
        cta: "Book a Survey",
      },
      {
        name: "End-to-end activation",
        priceLabel: "Quoted",
        features: [
          "Account setup and payment facilitation",
          "Plan selection and activation",
          "Professional installation and handover",
        ],
        cta: "Book a Survey",
      },
    ],
    faqs: [
      {
        question: "Is the Priority Plan available where my Lagos address is not offered residential?",
        answer:
          "Where the Starlink site offers Priority for that address, DataGram can activate it. That is not a standing rule for every address in Lagos, Abuja, or Port Harcourt. Some addresses still show residential, and some show a deposit or wait step. Check the exact service address first.",
      },
      {
        question: "How much does the Starlink Priority Plan cost in Nigeria?",
        answer:
          "The Priority Plan is billed in USD at approximately $99/month, which at current exchange rates translates to around ₦159,000 per month. Hardware costs are separate — contact DataGram for current hardware pricing as this changes with the exchange rate.",
      },
      {
        question: "Will residential Starlink become available in Lagos again?",
        answer:
          "SpaceX has not given a firm timeline for any Nigerian address. Where the screen still offers Priority only, that is the route showing today. Where it offers residential, or a deposit or wait step, follow what that address shows.",
      },
      {
        question: "Can DataGram manage my Priority Plan account on an ongoing basis?",
        answer:
          "Yes. DataGram offers ongoing account management — covering plan upgrades, billing support, and fault escalation — as part of our fleet management service. Contact us to discuss ongoing support options.",
      },
    ],
    extraSections: [
      {
        title: "What the Priority Plan includes",
        checklist: [
          "Indicative download range often discussed around 100–350 Mbps — not a guaranteed result",
          "Priority allocation during peak hours, unlike residential deprioritisation — not a speed guarantee",
          "24/7 priority support from Starlink",
          "Compatible with the standard Starlink Gen 3 dish — no separate hardware required in most cases",
          "Suitable for offices, remote workers, and homes in congested areas where residential is blocked",
        ],
        note:
          "DataGram can assess whether the Flat High Performance dish is recommended for your specific address. In some Priority Plan deployments, the FHP dish provides better throughput stability.",
      },
      {
        title: "How DataGram handles your Priority Plan activation",
        cards: [
          {
            title: "Step 1: Free site survey",
            body:
              "We assess your address, confirm Priority Plan availability, and advise on the right hardware.",
          },
          {
            title: "Step 2: Hardware sourcing",
            body: "DataGram supplies the correct Starlink kit.",
          },
          {
            title: "Step 3: Account setup and plan activation",
            body: "We handle the Starlink account creation, plan selection, and payment facilitation.",
          },
          {
            title: "Step 4: Professional installation",
            body: "Dish, cable routing, router placement, and network configuration.",
          },
          {
            title: "Step 5: Handover",
            body: "You receive a working connection plus all account credentials and documentation.",
          },
        ],
      },
    ],
    relatedLinks: [
      { label: "Starlink for Enterprise Nigeria", href: "/starlink-enterprise-nigeria" },
      { label: "Starlink Fleet Management Nigeria", href: "/starlink-fleet-management-nigeria" },
      { label: "Starlink Roaming and Global Priority", href: "/starlink-roaming-global-priority-nigeria" },
    ],
    ctaBanner: {
      title: "Ready to Get Connected?",
      body:
        "DataGram activates Priority Plans across Lagos, Abuja, Port Harcourt, and nationwide.",
      buttonLabel: "Book a Free Survey",
      href: "/contact",
    },
    extraSchemas: [priorityPlanServiceSchema],
    serviceAreaSchema: "Nigeria — Priority Plan activation",
    keywords: [
      "Starlink Priority Plan Nigeria",
      "Priority Plan activation Nigeria",
      "Starlink sold out Lagos",
      "Starlink priority business plan Nigeria",
    ],
  },
  {
    path: "/starlink-repair-relocation-nigeria",
    seoTitle: "Starlink Repair, Relocation & Re-Installation Nigeria | DataGram",
    metaDescription:
      "Moving house? Dish damaged? DataGram handles Starlink relocation surveys, re-installation, cable re-routing, and hardware fault diagnosis across Nigeria.",
    canonical: "/starlink-repair-relocation-nigeria",
    ogImage: img("StarlinkRoofMount.jpeg"),
    h1: "Starlink Repair, Relocation and Re-Installation Across Nigeria",
    heroLabel: "Repair & relocation services",
    heroSubheading:
      "Whether you are moving to a new address, dealing with a damaged dish, or need your existing installation re-assessed, DataGram's field team handles it.",
    heroImageAlt: "Starlink repair and relocation in Nigeria",
    heroImage: img("StarlinkRoofMount.jpeg"),
    heroImageFile: "StarlinkRoofMount.jpeg",
    heroImageReason:
      "Roof installation and field service image for repair, relocation, and reinstallation work in Nigeria.",
    heroObjectPosition: "top center",
    overviewTitle: "Repair, relocation, and reinstallation made simple",
    overviewParagraphs: [
      "Starlink hardware can move with you, recover from damage, and be reinstalled at a new address — but only if the job is scoped by a technician who understands Nigerian roofs, cable routes, and service address rules.",
      "DataGram handles the survey, diagnosis, quote, and on-site work so your service moves with your Starlink dish instead of leaving it offline or misconfigured.",
    ],
    stats: [
      { label: "Indicative latency", value: "20–33 ms", note: "Indicative band only. Alignment after repair is checked separately and may differ." },
      { label: "Download range", value: "50–1,000 Mbps", note: "Dependent on subscription class and local obstructions." },
      { label: "Repair window", value: "2–4 hours", note: "Residential relocations typically complete in a single visit." },
      { label: "Relocation survey", value: "Quoted on contact", note: "We assess the new address and mounting options before work begins." },
    ],
    whyTitle: "What we handle",
    whyCards: [
      {
        icon: Target,
        title: "Moving to a New Address",
        body:
          "We conduct a site survey at your new location, assess sky view and mounting options, then reinstall your existing dish, route cables cleanly, and reconfigure the network. Your account and subscription move with the hardware.",
      },
      {
        icon: Shield,
        title: "Damaged Dish or Cable",
        body:
          "Rain damage, lightning strikes, rodent cable damage, or a dish knocked out of alignment — DataGram diagnoses the fault on site and repairs or replaces hardware as needed. We bring replacement cables and mounting hardware on every job.",
      },
      {
        icon: Building2,
        title: "Poor Signal or Obstruction",
        body:
          "If your dish was self-installed or mounted in a suboptimal position, we conduct a professional sky view assessment, identify obstructions, and remount the dish correctly. Most signal issues are mounting problems, not hardware faults.",
      },
    ],
    proofTitle: "Repair and relocation proof",
    proofLink: { label: "See our installation work →", href: "/our-work" },
    proofCards: [
      proof(
        "StarlinkRoofMount.jpeg",
        "Starlink rooftop installation and repair work in Nigeria",
        "Professional rooftop work for repair, relocation, and reinstallation projects.",
        "IMAGE: StarlinkRoofMount.jpeg — rooftop service proof for repair and relocation"
      ),
      proof(
        "blog/starlink-installation-anambra-onitsha-businesses.jpg",
        "Starlink relocation and installation work for business customers in Anambra",
        "Field service and dish relocation proof for customers moving address.",
        "IMAGE: blog/starlink-installation-anambra-onitsha-businesses.jpg — relocation and business install proof"
      ),
      proof(
        "datagram-starlink-boxes-stock.jpg",
        "Starlink hardware and replacement components stocked by DataGram",
        "Replacement parts and cables available on every repair and relocation job.",
        "IMAGE: datagram-starlink-boxes-stock.jpg — ready stock for repair and relocation"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote:
        "DataGram moved our existing Starlink dish to a new address, repaired a damaged cable, and handed over a working connection in one visit.",
      attribution: "Residential relocation customer, Abuja",
    },
    packagesTitle: "Repair and relocation services",
    packages: [
      {
        name: "Site survey & quote",
        priceLabel: "From ₦55,000",
        features: [
          "New address sky-view and mount assessment",
          "Fault diagnosis for damaged dishes or cables",
          "Written recommendation and cost estimate",
        ],
        cta: "Book a Survey",
      },
      {
        name: "Repair or relocation job",
        priceLabel: "Quoted",
        features: [
          "Professional dish repair or reinstallation",
          "Cable routing and network reconfiguration",
          "Final alignment and handover",
        ],
        cta: "Book a Repair",
      },
    ],
    faqs: [
      {
        question: "Can DataGram relocate a Starlink dish that was installed by someone else?",
        answer:
          "Yes. We regularly take over installations from other providers or self-installs. We will conduct a full assessment of the existing setup before any work begins and advise on what needs to change.",
      },
      {
        question: "How long does a relocation installation take?",
        answer:
          "Most residential relocations take 2–4 hours depending on cable routing complexity and roof type. Enterprise relocations with network reconfiguration typically take a full day. We confirm the expected duration when quoting.",
      },
      {
        question: "Does my Starlink subscription change when I move to a new address?",
        answer:
          "Your subscription continues unchanged. You will need to update your service address in the Starlink app after relocation. DataGram can assist with this during the installation.",
      },
    ],
    extraSections: [
      {
        title: "How a Relocation or Repair Works",
        cards: [
          {
            title: "Step 1: Contact DataGram via WhatsApp or the contact form",
            body: "Describe the issue or new address.",
          },
          {
            title: "Step 2: We schedule a site visit",
            body: "We conduct a diagnostic or survey.",
          },
          {
            title: "Step 3: We provide a written quote",
            body: "You receive a clear price before any work begins.",
          },
          {
            title: "Step 4: Work is carried out by a trained DataGram technician",
            body: "Typically completed in a single visit.",
          },
          {
            title: "Step 5: You confirm the connection is working",
            body: "We ensure the service is live before the team leaves site.",
          },
        ],
      },
      {
        title: "Common Reasons Customers Call Us",
        checklist: [
          "I am moving from Lagos Island to Lekki — can my Starlink come with me?",
          "My cable was chewed through by rats and the dish shows 'Cable Disconnected'",
          "The installer who set this up is no longer responding — can DataGram take it over?",
          "My dish fell off the roof during a storm and I need it re-mounted properly",
          "I am relocating my office from Victoria Island to Ikeja — I need the network rebuilt at the new site",
          "My self-installed dish has poor signal and I want a professional to assess it",
        ],
      },
    ],
    relatedLinks: [
      { label: "Starlink Home Installation", href: "/starlink-home-installation" },
      { label: "Starlink for Enterprise Nigeria", href: "/starlink-enterprise-nigeria" },
      { label: "Our Work", href: "/our-work" },
    ],
    ctaBanner: {
      title: "Need a Repair or Moving Address?",
      body:
        "DataGram's field team covers Lagos, Abuja, Port Harcourt, Delta State, and all South-South and South-East states.",
      buttonLabel: "Book a Survey",
      href: "/contact",
    },
    extraSchemas: [repairRelocationServiceSchema],
    serviceAreaSchema: "Nigeria — repair, relocation and reinstallation",
    keywords: [
      "Starlink repair Nigeria",
      "Starlink relocation Nigeria",
      "Starlink reinstallation Nigeria",
      "Starlink cable repair Nigeria",
    ],
  },
  {
    path: "/starlink-estate-wifi-nigeria",
    seoTitle: "Starlink WiFi Distribution for Nigerian Estates & Multi-Unit Buildings | DataGram",
    metaDescription:
      "Use one dish for a whole estate if the Wi-Fi is designed for every flat. DataGram plans the dish and the access points.",
    canonical: "/starlink-estate-wifi-nigeria",
    ogImage: img("blog/starlink-estates-built-in-satellite-nigeria-real-estate.jpg"),
    h1: "Starlink Internet Distribution for Nigerian Estates, Compounds, and Multi-Unit Buildings",
    heroLabel: "Estate WiFi distribution",
    heroSubheading:
      "Choose one dish for the estate, then a network that reaches every flat.",
    heroImageAlt: "Starlink estate WiFi distribution in Nigeria",
    heroImage: img("blog/starlink-estates-built-in-satellite-nigeria-real-estate.jpg"),
    heroImageFile: "blog/starlink-estates-built-in-satellite-nigeria-real-estate.jpg",
    heroImageReason:
      "Starlink estate deployment image showing multiple units and shared connectivity infrastructure.",
    heroObjectPosition: "center top",
    overviewTitle: "One dish, then Wi-Fi for the whole estate",
    overviewParagraphs: [
      "One Starlink link can serve a whole estate when the Wi-Fi is planned, not guessed. We place the dish, the router, the switch, and the access points so each flat gets a usable signal.",
      "Latency, the delay before a reply, is a guide around 20 to 33 milliseconds. It is not a promise. A VLAN is its own network, so one flat does not share traffic with the next.",
      "This is more than a dish on the roof. It is a network job for compounds, blocks of flats, estates, and office parks that need Wi-Fi in every unit.",
    ],
    stats: [
      { label: "Indicative latency", value: "20–33 ms", note: "Site design and WiFi distribution affect the end-user experience." },
      { label: "Download range", value: "50–1,000 Mbps", note: "Shared estate connectivity depends on the plan class and mesh design." },
      { label: "Access point count", value: "3–15+", note: "Depends on estate size, building count, and wall materials." },
      { label: "Design window", value: "2–5 days", note: "After survey and network planning approval." },
    ],
    whyTitle: "Built for",
    whyCards: [
      {
        icon: Anchor,
        title: "Estate Developers",
        body:
          "Building a new estate? We plan the dish, the cable spine, the access points, and a router for each unit before the walls close.",
      },
      {
        icon: Building2,
        title: "Estate Managers & Facility Teams",
        body:
          "If the estate link is weak or too dear, we fit one Starlink and share it to the flats, or to the shared rooms.",
      },
      {
        icon: Home,
        title: "Compound Landlords",
        body:
          "A compound with many flats can use one Priority dish and a mesh. Each flat can have its own network. You do not need a dish on every roof.",
      },
      {
        icon: Factory,
        title: "Commercial Complexes",
        body:
          "An office park or a plaza can sit on one Starlink. Tenants stay on their own network, apart from the manager's.",
      },
    ],
    proofTitle: "Estate WiFi deployment proof",
    proofLink: { label: "See our estate and installation work →", href: "/our-work" },
    proofCards: [
      proof(
        "blog/starlink-estates-built-in-satellite-nigeria-real-estate.jpg",
        "Starlink coverage design for a Nigerian multi-unit property",
        "Multi-unit estate WiFi distribution and shared connectivity planning.",
        "IMAGE: blog/starlink-estates-built-in-satellite-nigeria-real-estate.jpg — estate coverage proof"
      ),
      proof(
        "StarlinkRoofMount.jpeg",
        "Starlink dish on a rooftop feeding estate WiFi distribution",
        "A single dish powering shared network distribution for multiple units.",
        "IMAGE: StarlinkRoofMount.jpeg — estate dish placement proof"
      ),
      proof(
        "StarlinkCompanyInstallation.jpeg",
        "Starlink installation on a commercial building with shared connectivity potential",
        "Complex deployments that serve multiple users from one Starlink connection.",
        "IMAGE: StarlinkCompanyInstallation.jpeg — commercial estate deployment proof"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote:
        "We designed the estate distribution so one Starlink dish could feed all the villas without each unit having its own terminal.",
      attribution: "Estate manager, Lagos compound",
    },
    packagesTitle: "Estate WiFi engagement options",
    packages: [
      {
        name: "Estate survey",
        priceLabel: "From ₦120,000",
        features: [
          "Layout, unit count, and wall material assessment",
          "WiFi distribution plan and access point placement",
          "Starlink hardware and router recommendation",
        ],
        cta: "Book an Estate Survey",
      },
      {
        name: "Network installation",
        priceLabel: "Quoted",
        features: [
          "Dish installation and cable routing",
          "Router, switch, and access point deployment",
          "WiFi handover and configuration per unit",
        ],
        cta: "Book an Estate Survey",
      },
    ],
    faqs: [
      {
        question: "Can one Starlink dish really cover an entire estate?",
        answer:
          "Yes, if the Wi-Fi is designed for it. The dish brings the link. A mesh then shares that link across the estate. We have done compounds and blocks of flats in Lagos, Port Harcourt, and Delta State.",
      },
      {
        question: "Which Starlink plan is recommended for an estate?",
        answer:
          "Choose the Priority plan for many units. A home plan can be deprioritised at busy times. Deprioritised means the speed drops when the cell is busy. It is not a hard cutoff. Some addresses in Lagos and Abuja are offered Priority rather than a new home plan. That is the address on the screen, not every street. Check the address. Ask us for the current price.",
      },
      {
        question: "Can tenants have separate WiFi networks from each other?",
        answer:
          "Yes. Each flat can have its own network. A VLAN is that split. Or the estate can share one name and set a limit on how much each unit uses.",
      },
    ],
    extraSections: [
      {
        title: "The Technical Approach",
        cards: [
          {
            title: "Step 1: Site survey",
            body:
              "We look at the layout, the number of buildings, the walls, and the floor plans. Then we draw the network.",
          },
          {
            title: "Step 2: Fit the dish",
            body:
              "For many units, choose Priority. A home plan can slow down when the cell is busy.",
          },
          {
            title: "Step 3: Router and switch",
            body:
              "Put them where the signal can reach the most of the estate.",
          },
          {
            title: "Step 4: Access points",
            body:
              "We fit mesh nodes, or ceiling points, at the spots the survey marked.",
          },
          {
            title: "Step 5: Each unit, or one shared name",
            body:
              "Each flat can have its own Wi-Fi name, or join a shared one. The estate chooses.",
          },
          {
            title: "Step 6: Handover",
            body:
              "You get the passwords, a note on where the signal reaches, and how to call us.",
          },
        ],
      },
      {
        title: "Note on Lagos & Abuja congestion",
        paragraphs: [
          "Some addresses in Lagos and Abuja are offered Priority, not a new home plan. That is the address, not the whole city. An estate with many units should use Priority where that is what the screen shows. We can turn it on and manage it. Ask us for the current price.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Priority Plan Activation", href: "/starlink-priority-plan-nigeria" },
      { label: "Starlink for Enterprise Nigeria", href: "/starlink-enterprise-nigeria" },
      { label: "Starlink Fleet Management Nigeria", href: "/starlink-fleet-management-nigeria" },
    ],
    ctaBanner: {
      title: "Ready to connect the estate?",
      body:
        "We survey and fit estate Wi-Fi in Lagos, Abuja, Port Harcourt, and across Nigeria.",
      buttonLabel: "Book an Estate Survey",
      href: "/contact",
    },
    extraSchemas: [estateWifiServiceSchema],
    serviceAreaSchema: "Nigeria — estate WiFi distribution",
    keywords: [
      "Starlink estate WiFi Nigeria",
      "Starlink estate distribution Nigeria",
      "multi-unit Starlink Nigeria",
      "Starlink compound WiFi Nigeria",
    ],
  },
  {
    path: "/starlink-roaming-global-priority-nigeria",
    seoTitle: "Starlink Roaming & Global Priority Activation Nigeria | DataGram",
    metaDescription:
      "DataGram activates Starlink Roaming and Global Priority plans across Nigeria — offshore, maritime, and enterprise clients. Get activated today.",
    canonical: "/starlink-roaming-global-priority-nigeria",
    ogImage: img("maritime2.jpeg"),
    h1: "Starlink Roaming and Global Priority Activation in Nigeria",
    heroLabel: "Starlink Roaming & Global Priority",
    heroSubheading:
      "DataGram activates and manages Starlink Roaming and Global Priority plans for Nigerian clients operating across land regions, offshore waters, and international routes. If your standard residential or business plan is not enough for where you work, we find and activate the right plan for you.",
    heroImageAlt:
      "Starlink dish installed on tanker deck in open ocean — Roaming and Global Priority for Nigerian offshore clients",
    heroImage: img("maritime2.jpeg"),
    heroImageFile: "maritime2.jpeg",
    heroImageReason:
      "wide cinematic tanker deck with Starlink dish and open ocean — primary audience is offshore and travelling clients",
    heroObjectPosition: "center",
    heroPrimaryCta: { label: "Get Activated", href: "/contact" },
    overviewTitle: "Activation service — not another plan explainer",
    overviewParagraphs: [
      "This page is for Nigerian operators who need Roaming or Global Priority activated correctly — account changes, hardware eligibility, and a working link — not a long product essay. For the full informational breakdown of limits, pricing logic, and DIY steps, read our guide on Starlink Roaming and Global Priority activation.",
      "DataGram assesses your current dish and subscription, confirms whether Roaming or Global Priority fits the route, activates the plan on your account, and documents the change for procurement or the vessel ops desk. Offshore, maritime, NGO field teams, and multi-site fleets are the usual buyers.",
    ],
    stats: [
      { label: "Roaming activation", value: "24–48 hrs", note: "Typical once account access is confirmed." },
      { label: "Global Priority", value: "Quoted", note: "Depends on hardware eligibility and bucket size." },
      { label: "Service area", value: "Nigeria+", note: "Land regions, coastal waters, and ocean where coverage allows." },
      { label: "Hardware check", value: "Required", note: "FHP needed for most maritime mobility use." },
    ],
    whyTitle: "Who Needs Roaming or Global Priority?",
    whyCards: [
      {
        icon: Ship,
        title: "Offshore & Maritime Operators",
        body: "Vessels operating in the Gulf of Guinea, Niger Delta waterways, and open Atlantic waters need connectivity that follows the ship — not a service tied to a land address. Roaming and Global Priority plans keep your crew and operations connected regardless of how far offshore you are.",
      },
      {
        icon: Plane,
        title: "Nigerians Working Internationally",
        body: "If you registered your Starlink in Nigeria and work in other countries, out-of-country time depends on the plan, not a flat 14-day rule. Roam Unlimited is up to 30 days at a time outside the home country. Other Roam plans stay in the home country or a grouped region. Local Priority allows up to 60 days of international use in total. Global Priority has no time cap and is the class used for continuous offshore work. Check the allowance in the account before you travel.",
      },
      {
        icon: HeartHandshake,
        title: "NGOs & Field Operations",
        body: "Humanitarian and development organisations operating across multiple African countries need internet that moves with their teams. Global Priority provides high-throughput connectivity with no regional lock.",
      },
      {
        icon: Building2,
        title: "Enterprise & Fleet Managers",
        body: "Companies managing Starlink connections across multiple sites, vehicles, or vessels often need a mix of standard, roaming, and priority plans across their fleet. DataGram advises on and activates the right plan for each asset.",
      },
    ],
    extraSections: [
      {
        title: "Roaming vs Global Priority: What Is the Difference?",
        paragraphs: [
          "Both sound like premium upgrades. They solve different problems. Match the plan to how you actually move — not to whichever name sounds stronger.",
        ],
        cards: [
          {
            title: "Starlink Roaming",
            body: "Available on: Residential and some business plans, depending on the Roam product your account offers. How it works: Lets you use the dish away from the registered service address. Out-of-country time is plan-specific: Roam Unlimited is up to 30 days at a time; other Roam plans are for the home country or a grouped region. Best for: Occasional travel and short cross-border assignments. Data: Standard allocation — same as your base plan. Cost: Added to your existing plan at additional monthly cost (USD-denominated — DataGram can advise on current pricing). Limitation: Not designed for permanent offshore use. Confirm the limit in the account. A withdrawn 14-day cap is not the rule to plan around.",
          },
          {
            title: "Global Priority",
            body: "Available on: Dedicated Global Priority plan (separate from residential). How it works: No time cap on international use, and it is the class that covers ocean use. Best for: Offshore vessels, FPSOs, OSVs, international operators, deep sea operations. Data: Priority data blocks — a 50GB block is a Global Priority tier, not Ocean Mode. Ocean Mode is a separate metered option for roam-class plans beyond coastal waters. Cost: Higher monthly subscription (USD-denominated — contact DataGram for current naira equivalent). Limitation: Higher cost than Roaming; hardware eligibility applies (Flat High Performance dish required for maritime mobility).",
          },
        ],
        footerNote:
          "Pricing is USD-denominated and subject to exchange rate at time of activation. DataGram provides naira cost estimates and can advise on the most cost-effective plan for your specific use case.",
      },
      {
        title: "What DataGram Manages for You",
        details: [
          {
            title: "Plan Assessment",
            body: "We review your current hardware, location, and usage requirements and confirm which plan — Roaming or Global Priority — is the right fit before you pay for anything.",
          },
          {
            title: "Account Configuration",
            body: "We handle the account-level changes required to activate Roaming or upgrade to Global Priority on your existing or new Starlink account.",
          },
          {
            title: "Hardware Eligibility Check",
            body: "Not all Starlink hardware supports all plans. We confirm whether your current dish is eligible or whether an upgrade to the Flat High Performance terminal is required.",
          },
          {
            title: "Activation and Testing",
            body: "Once the plan is activated, we test connectivity and confirm the service is running correctly before handing over.",
          },
          {
            title: "Ongoing Subscription Management",
            body: "For enterprise and maritime clients on active subscriptions, DataGram can manage renewal, plan changes, and troubleshooting as part of a managed service arrangement.",
          },
          {
            title: "Documentation",
            body: "We provide written confirmation of plan activation, hardware configuration, and account details — essential for corporate procurement and vessel operators who need an audit trail.",
          },
        ],
      },
      {
        title: "Related Services",
        cards: [
          {
            title: "Offshore & Maritime Installation",
            body: "Full Starlink installation for vessels, rigs, and waterfront facilities — from mast survey to activation.",
            href: "/starlink-offshore-maritime-installation",
            linkLabel: "Learn more →",
          },
          {
            title: "Fleet Management",
            body: "Managing Starlink across multiple vessels or sites — subscriptions, accounts, and network monitoring at scale.",
            href: "/starlink-fleet-management-nigeria",
            linkLabel: "Learn more →",
          },
          {
            title: "Enterprise & Marine Hub",
            body: "Turnkey Starlink network integration for Nigerian enterprises, NGOs, and industrial operations.",
            href: "/starlink-enterprise-marine-hub",
            linkLabel: "Learn more →",
          },
        ],
      },
    ],
    proofTitle: "Deployment proof",
    proofCards: [
      proof(
        "maritime2.jpeg",
        "Starlink on tanker deck in open ocean for roaming and Global Priority clients",
        "Offshore and deep-water routes where Global Priority and the right hardware matter.",
        "IMAGE: maritime2.jpeg — tanker deck hero context for roaming / Global Priority buyers"
      ),
      proof(
        "maritime4.jpeg",
        "Starlink on Niger Delta oil platform — plan class must match offshore use",
        "Platform and industrial corridor work where plan upgrades are part of the install.",
        "IMAGE: maritime4.jpeg — oil/gas proof for Global Priority activation audience"
      ),
      proof(
        "datagram-starlink-boxes-stock.jpg",
        "Starlink hardware stocked at DataGram Nigeria for rapid plan and kit mobilisation",
        "Hardware on hand when a plan change also needs an FHP upgrade.",
        "IMAGE: datagram-starlink-boxes-stock.jpg — stock readiness for activation projects"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote:
        "We thought Roaming would keep the OSV online indefinitely. DataGram checked the account, showed that Roam is time-limited, and moved us to Global Priority before the pause hit mid-campaign.",
      attribution: "Fleet IT lead, offshore support operator (name withheld)",
    },
    packagesTitle: "Activation options",
    packages: [
      {
        name: "Roaming activation",
        priceLabel: "Quoted after assessment",
        features: [
          "Hardware and plan eligibility check",
          "Account-level Roaming configuration",
          "Written confirmation of the change",
        ],
        cta: "Get Activated",
      },
      {
        name: "Global Priority upgrade",
        priceLabel: "Quoted after assessment",
        features: [
          "FHP / mobility hardware review",
          "Priority data bucket recommendation",
          "Activation, test, and handover notes",
        ],
        cta: "Get Activated",
      },
      {
        name: "Managed plan admin",
        priceLabel: "Custom",
        features: [
          "Renewals and plan changes",
          "Fleet-wide Global Priority coordination",
          "Escalation path for active subscriptions",
        ],
        cta: "Get a Plan Assessment",
      },
    ],
    relatedLinks: [
      {
        label: "Deep guide: Roaming & Global Priority activation",
        href: "/blog/starlink-roaming-global-priority-activation-nigeria",
      },
      {
        label: "Ocean Mode vs the 50GB Global Priority block",
        href: "/blog/starlink-ocean-mode-50gb-priority-limit-explained",
      },
      { label: "Offshore & Maritime Installation", href: "/starlink-offshore-maritime-installation" },
      { label: "Fleet Management Nigeria", href: "/starlink-fleet-management-nigeria" },
      { label: "Enterprise & Marine Hub", href: "/starlink-enterprise-marine-hub" },
      { label: "Global Roaming service overview", href: "/services/global-roaming" },
    ],
    ctaBanner: {
      title: "Not sure which plan fits your operation?",
      body: "DataGram assesses your hardware, location, and usage before recommending anything. No guesswork.",
      buttonLabel: "Get a Plan Assessment",
      href: "/contact",
    },
    faqs: [
      {
        question: "What is the difference between Starlink Roaming and Global Priority?",
        answer:
          "Roaming lets you use the dish away from its registered address. Out-of-country time is not a flat 14 days: Roam Unlimited is up to 30 days at a time, other Roam plans are for the home country or a grouped region, and Local Priority is up to 60 days in total. Global Priority has no time cap and is the plan used for continuous offshore work. It is a plan upgrade, with different hardware requirements and a higher monthly cost.",
      },
      {
        question: "Can I use my standard Starlink residential plan on a vessel in the Niger Delta?",
        answer:
          "A standard residential plan will work if the vessel stays within Nigerian territorial waters and your registered service address is in Nigeria. For vessels that move beyond coastal waters or require continuous at-sea connectivity, the Global Priority or Maritime Mobility plan is required. DataGram can assess your route and vessel type and recommend the correct plan.",
      },
      {
        question: "Does Global Priority require different hardware?",
        answer:
          "For offshore and maritime use, the Flat High Performance (FHP) dish is required — the standard dish is not rated for open-ocean mounting or the movement of a vessel underway. For land-based international roaming, your existing standard or Gen 3 dish is compatible with the Roaming add-on. DataGram will confirm hardware eligibility before advising on a plan change.",
      },
      {
        question: "Is the 50GB allowance the same thing as Ocean Mode?",
        answer:
          "No. A 50GB block is a Global Priority data tier: priority speeds for that allowance, then continued service at a lower priority rather than a hard cutoff. Ocean Mode is a separate metered option that extends roam-class service beyond coastal waters. Confirm which one your account actually shows. See /blog/starlink-ocean-mode-50gb-priority-limit-explained.",
      },
      {
        question: "How long does activation take?",
        answer:
          "For Roaming add-ons on an existing account, activation is typically completed within 24–48 hours once DataGram has the account access required. Global Priority plan upgrades may take slightly longer depending on hardware eligibility confirmation. DataGram handles the full process and keeps you updated throughout.",
      },
    ],
    extraSchemas: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Starlink Roaming and Global Priority Activation Nigeria",
        provider: {
          "@type": "LocalBusiness",
          name: "DataGram",
          url: "https://www.datagram.ng",
          telephone: "+2349060976424",
        },
        areaServed: { "@type": "Country", name: "Nigeria" },
        serviceType: "Satellite Internet Plan Activation",
        description:
          "DataGram activates and manages Starlink Roaming and Global Priority plans for Nigerian offshore, maritime, NGO, and enterprise clients.",
        url: "https://www.datagram.ng/starlink-roaming-global-priority-nigeria",
      },
    ],
    packagePriceDisclaimer: true,
    serviceAreaSchema: "Nigeria",
    keywords: [
      "Starlink Roaming Nigeria",
      "Starlink Global Priority activation",
      "Starlink Roaming activation Nigeria",
      "Global Priority maritime Nigeria",
      "Starlink offshore plan upgrade",
    ],
  },
];

export function getIndustryPageByPath(path: string) {
  return industryLandingPages.find((p) => p.path === path);
}

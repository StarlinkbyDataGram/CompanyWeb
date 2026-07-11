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
          "Download: 50 Mbps – 1,000 Mbps. Upload: 10 Mbps – 100 Mbps. Latency: 20–33 ms. Actual performance varies based on the hardware tier, sea state, and subscription plan.",
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
          "Yes. Starlink's maritime mobility plans, specifically the Global Priority plan with Ocean Mode, are designed for open ocean use including deep sea operations in the Gulf of Guinea. The Flat High Performance dish is required for vessels operating beyond coastal waters. DataGram assesses vessel type and route before recommending the correct plan and hardware.",
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
      "DataGram delivers enterprise Starlink and business Starlink deployment across Nigeria — offices, NGOs, industrial sites, and multi-branch operations.",
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
    heroObjectPosition: "center top",
    overviewTitle: "Business-grade satellite when terrestrial SLAs slip",
    overviewParagraphs: [
      "Enterprises adopt Starlink when fibre lead times stretch quarters, when backup links must be independent of street cuts, or when branch sites need day-one connectivity for ERP and voice. The hardware is only half the job for business Starlink deployment: VLAN design, UPS sizing for Nigerian generators, and written baselines matter for audit-ready networks.",
      "DataGram maps existing firewalls, documents cable paths through trays, and tests failover triggers before sign-off. We work with facility managers in Lagos towers, Abuja campuses, and industrial estates where drilling rules and access windows are fixed in advance. DataGram's standard coverage is South-South and South-East Nigeria. Enterprise installations in northern states are handled on special request.",
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
      {
        question: "What does enterprise Starlink include that a standard residential plan does not?",
        answer:
          "Enterprise Starlink covers a Priority Business plan with guaranteed throughput allocation, meaning your speeds are protected during peak hours rather than subject to deprioritisation. It also includes a professional site survey, structured cable management, network configuration for business use (VLANs, guest WiFi, wired connections for workstations), a baseline speed test report, and access to DataGram's ongoing managed support for renewed subscribers.",
      },
      {
        question: "Can DataGram handle business Starlink deployment across multiple offices in Nigeria?",
        answer:
          "Yes. DataGram manages multi-site business Starlink deployments — from scoping and hardware procurement to installation, activation, and account management across all locations. For companies with 5 or more sites or vessels, our fleet management service handles subscription administration centrally. See our fleet management service (/starlink-fleet-management-nigeria) for details.",
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
      { label: "Typical latency", value: "20–33 ms", note: "LEO path; WiFi and WAN design still matter." },
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
      { label: "Typical latency", value: "20–33 ms", note: "After install baseline recorded on site." },
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
      { label: "Typical Starlink latency", value: "20–33 ms", note: "Failover path latency depends on 4G or VSAT." },
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
      "DataGram manages Starlink fleets for Nigerian enterprise and vessel operators — subscriptions, accounts, and network monitoring across multiple sites.",
    canonical: "/starlink-fleet-management-nigeria",
    ogImage: img("hero-fleet-management-nigeria.jpg"),
    h1: "Starlink Fleet Management for Nigerian Enterprises and Maritime Operators",
    heroLabel: "Multi-site & fleet operations",
    heroSubheading:
      "Managing Starlink across 10 sites or 10 vessels is a different problem from a single installation. DataGram handles procurement, deployment, account management, and ongoing support across your entire fleet.",
    heroImageAlt: "Fleet of vessels in port — Starlink fleet management Nigeria",
    heroImage: img("hero-fleet-management-nigeria.jpg"),
    heroImageFile: "hero-fleet-management-nigeria.jpg",
    heroImageReason:
      "Pexels aerial multi-vessel anchorage — conveys fleet scale and coordination, not a single-ship portrait",
    heroObjectPosition: "center top",
    heroPrimaryCta: { label: "Request a Fleet Proposal", href: "/contact" },
    overviewTitle: "One relationship for every dish in your fleet",
    overviewParagraphs: [
      "A single Starlink install is a project. Ten enterprise Starlink installs across states — or five OSVs and other vessels with different captains and berths — is an operations problem. SpaceX still bills and supports per terminal. Without a local fleet manager, your IT desk ends up juggling separate apps, separate invoices, and separate fault tickets.",
      "DataGram fleet management puts procurement, coordinated installation, account administration, plan upgrades, and escalations under one Nigerian point of contact. You get VAT-compliant invoicing options, quarterly per-site performance notes, and a path that scales from branch networks to maritime fleets.",
    ],
    stats: [
      { label: "Typical latency", value: "20–33 ms", note: "Per-site baselines recorded after install." },
      { label: "Download range", value: "50–1,000 Mbps", note: "Varies by plan class and obstruction." },
      { label: "Upload range", value: "10–100 Mbps", note: "Sized honestly for CCTV and branch sync." },
      { label: "Fleet scope", value: "5+ sites", note: "Meaningful when you stop managing accounts one by one." },
    ],
    whyTitle: "Who this is for",
    whyCards: [
      {
        icon: Building2,
        title: "Multi-site businesses",
        body: "Companies with offices, warehouses, or retail locations spread across Nigerian states where fibre is unavailable or unreliable. DataGram coordinates simultaneous deployments and a single billing relationship.",
        href: "/starlink-enterprise-nigeria",
        linkLabel: "Enterprise Starlink Nigeria",
      },
      {
        icon: Ship,
        title: "Maritime fleet operators",
        body: "OSV and vessel operators running 5 or more boats need consistent hardware standards, centralized subscription management, and a single engineer contact for any fault across the fleet.",
        href: "/starlink-offshore-maritime-installation",
        linkLabel: "Offshore maritime installation",
      },
      {
        icon: HeartHandshake,
        title: "NGO and field networks",
        body: "NGOs running parallel field operations across multiple states need each location active at the same time, not rolled out one site at a time. DataGram manages staged multi-site deployment to a project timeline.",
        href: "/starlink-enterprise-nigeria",
        linkLabel: "Enterprise & NGO Starlink",
      },
      {
        icon: Factory,
        title: "Oil camp and remote industrial sites",
        body: "Operators with Starlink dishes spread across camp locations in the Niger Delta need subscription tracking, plan upgrades, and fault response without having to manage multiple Starlink accounts independently.",
        href: "/starlink-installation-niger-delta",
        linkLabel: "Niger Delta installation coverage",
      },
    ],
    extraSections: [
      {
        title: "What fleet management covers",
        checklist: [
          "Bulk hardware procurement and importation",
          "Coordinated multi-site installation scheduling",
          "Centralized Starlink account and subscription management",
          "Plan upgrades and Global Priority activation across all sites",
          "VAT-compliant invoicing per site or consolidated billing",
          "Single point of contact for faults, replacements, and escalations",
          "Quarterly performance reports per site (speeds, uptime, plan usage)",
        ],
      },
      {
        title: "Fleet vs standard installation",
        paragraphs: [
          "A standard install ends when one dish is online. Fleet management continues after go-live — accounts, billing, upgrades, and fault response across every site or vessel in scope.",
        ],
        details: [
          {
            title: "Accounts",
            body: "Standard installation: one dish, one account. DataGram fleet management: multiple dishes, one relationship — we administer the fleet instead of leaving you with ten separate Starlink logins.",
          },
          {
            title: "Day-to-day management",
            body: "Standard: client manages the Starlink app per site. Fleet: DataGram manages accounts across the portfolio so IT is not chasing passwords and billing cycles.",
          },
          {
            title: "Support escalations",
            body: "Standard: client contacts Starlink support directly. Fleet: DataGram handles escalations, replacements, and truck rolls against a single contact path.",
          },
          {
            title: "Billing",
            body: "Standard: per-unit invoicing only. Fleet: consolidated or per-site billing available, with VAT-compliant naira invoices where DataGram supplies hardware and installation.",
          },
          {
            title: "Performance reporting",
            body: "Standard: no structured performance reporting. Fleet: quarterly per-site notes on speeds, uptime signals, and plan usage so procurement and ops can see the fleet, not just one kit.",
          },
          {
            title: "Plan changes",
            body: "Standard: client handles plan changes site by site. Fleet: DataGram activates upgrades — including Roaming and Global Priority plans — across all sites in scope.",
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
      title: "Ready to centralize your Starlink operations?",
      body: "Tell us how many sites or vessels you run, where they sit, and whether you need consolidated billing — we reply with a scoped fleet proposal.",
      buttonLabel: "Request a Fleet Proposal",
      href: "/contact",
    },
    faqs: [
      {
        question: "How many sites make fleet management worth it?",
        answer:
          "Usually five or more dishes — or fewer if they sit in hard-to-reach camps or vessels where a single missed renewal is expensive. Below that, a standard enterprise install with clear documentation is often enough.",
      },
      {
        question: "Does SpaceX give one portal for all our Starlink accounts?",
        answer:
          "Not in the way most Nigerian IT teams expect for multi-site estates. Each terminal still has its own account relationship. Fleet management is how DataGram sits on top of that reality with one local contact and consolidated administration.",
      },
      {
        question: "Can you consolidate billing in naira with VAT?",
        answer:
          "Where DataGram supplies hardware, installation, and managed services, we issue VAT-compliant naira invoices. Starlink's own subscription line items still follow SpaceX checkout rules — we explain the split clearly so finance knows what is claimable.",
      },
      {
        question: "Do you manage Global Priority upgrades across a maritime fleet?",
        answer:
          "Yes. When vessels need Global Priority to stay compliant outside Nigeria or for ocean use, we coordinate upgrades across the fleet instead of leaving each captain to guess through the app.",
      },
      roamingFaq,
      {
        question: "Can DataGram manage Starlink across a fleet of vessels in Nigerian waters?",
        answer:
          "Yes. DataGram handles Starlink fleet management for vessel operators — covering subscription administration, plan selection (including Global Priority and maritime mobility plans), hardware procurement, and activation across multiple vessels simultaneously. We provide centralised account oversight so your operations team does not have to manage individual dish accounts. Related: Global Priority and maritime mobility plans (/starlink-roaming-global-priority-nigeria).",
      },
      {
        question: "What is the difference between fleet management and a standard enterprise Starlink deployment?",
        answer:
          "A standard enterprise deployment covers one site or location — survey, install, and activate. Fleet management covers multiple assets (vessels, offices, or remote sites) under centralised account oversight, with DataGram handling ongoing subscription renewals, plan changes, and troubleshooting across all of them. For businesses with 5 or more Starlink connections, fleet management reduces the administrative burden significantly.",
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
          "Centralized Starlink procurement, deployment, account management and support for enterprises and maritime operators managing multiple sites or vessels in Nigeria",
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
        body: "If you registered your Starlink in Nigeria but regularly work in other countries, the standard plan restricts use outside Nigeria to 14 days before service is paused. Roaming helps short cross-border travel; Global Priority is the plan that removes the country lock for indefinite international or offshore use.",
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
            body: "Available on: Residential and some business plans. How it works: Lets you use the dish away from the registered service address; out-of-country use is still subject to SpaceX’s 14-day pause limit. Best for: Occasional travel, short cross-border assignments, vessels in coastal and near-shore waters. Data: Standard allocation — same as your base plan. Cost: Added to your existing plan at additional monthly cost (USD-denominated — DataGram can advise on current pricing). Limitation: 14-day international use limit; not designed for permanent offshore or international use.",
          },
          {
            title: "Global Priority",
            body: "Available on: Dedicated Global Priority plan (separate from residential). How it works: No regional country lock — operates globally including open ocean under maritime mobility coverage. Best for: Offshore vessels, FPSOs, OSVs, international operators, deep sea operations. Data: Priority data allocation (Ocean Mode priority buckets apply — see FAQ). Cost: Higher monthly subscription (USD-denominated — contact DataGram for current naira equivalent). Limitation: Higher cost than Roaming; hardware eligibility applies (Flat High Performance dish required for maritime mobility).",
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
        "We thought Roaming would keep the OSV online indefinitely. DataGram checked the account, explained the 14-day limit, and moved us to Global Priority before the pause hit mid-campaign.",
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
        label: "Ocean Mode 50GB priority limit explained",
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
          "Roaming allows you to use your existing Starlink plan outside Nigeria for up to 14 days per month. Global Priority is a separate plan with no regional restrictions, designed for offshore and international operators who need continuous connectivity wherever they are. Roaming is an add-on; Global Priority is a plan upgrade with different hardware requirements and a higher monthly cost.",
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
        question: "What is the 50GB Ocean Mode priority limit?",
        answer:
          "Global Priority maritime plans include a priority data allocation — currently 50GB per month at full priority speeds. Once that allocation is used, data continues at standard speeds rather than being cut off. For high-usage vessel operations, DataGram can advise on additional priority data top-ups. See our detailed breakdown at /blog/starlink-ocean-mode-50gb-priority-limit-explained.",
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

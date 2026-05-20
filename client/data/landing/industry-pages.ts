import { Anchor, Building2, Home, Ship, Waves, Wifi, Zap, Shield } from "lucide-react";
import type { IndustryLandingConfig } from "./types";

const PROOF_IMG = "/placeholder.svg";

export const industryLandingPages: IndustryLandingConfig[] = [
  {
    path: "/starlink-offshore-maritime-installation",
    seoTitle:
      "Starlink Offshore & Maritime Installation Nigeria | Oil, Gas & Deep Sea | DataGram",
    metaDescription:
      "Maritime Starlink installs for rigs, OSVs, and coastal bases in Nigeria. Low-latency LEO, marine mounts, and field support from DataGram.",
    canonical: "/starlink-offshore-maritime-installation",
    h1: "Starlink Offshore & Maritime Installation Nigeria",
    heroLabel: "Oil, gas & deep-sea operations",
    heroSubheading:
      "Certified marine mounting, motion-rated hardware, and shore-to-vessel handover for Niger Delta fleets and offshore camps.",
    heroImageAlt: "Starlink maritime dish on offshore supply vessel deck Nigeria",
    overviewTitle: "Satellite backhaul where microwave and fibre stop",
    overviewParagraphs: [
      "Offshore platforms, OSVs, and remote marine bases cannot wait months for subsea fibre builds. Starlink’s low-Earth-orbit constellation delivers usable throughput at sea when you pair the correct mobility or maritime hardware with a mount that survives Gulf of Guinea spray and vibration.",
      "DataGram engineers survey deck space, cable glands, and power feeds before any hole is drilled. We document obstruction maps at berth and at typical heading, then specify marine-rated cabling, surge protection, and router placement that keeps bridge networks separate from crew WiFi.",
    ],
    stats: [
      { label: "Typical latency (LEO)", value: "25–60 ms", note: "Starlink published range; weather and beam load vary." },
      { label: "Mobility plan uptime target", value: "99%+", note: "Depends on sky view, mast height, and regional beam capacity." },
      { label: "Coverage", value: "Coastal & offshore", note: "Confirm maritime service class on starlink.com before procurement." },
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
    proofTitle: "Proven Track Record",
    proofCards: [
      {
        src: PROOF_IMG,
        alt: "Starlink dish mounted on OSV mast Port Harcourt offshore corridor",
        caption: "OSV mast mount — placeholder until client sign-off gallery ships.",
      },
      {
        src: PROOF_IMG,
        alt: "Marine-grade cable gland on platform deck Niger Delta",
        caption: "Deck gland and tray — swap with signed offshore deployment photo.",
      },
      {
        src: PROOF_IMG,
        alt: "Starlink router rack in offshore communications room",
        caption: "Comms room termination — verified speeds logged post-handover.",
      },
    ],
    speedStat: { label: "Field sample (placeholder)", down: "148 Mbps", up: "22 Mbps", latency: "38 ms" },
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
          "Survey covers mast or pedestal location, crane sweep clearance, cable route to the comms room, power circuit, and grounding. You receive photos, a risk note for PTW, and a bill of materials sized for spray exposure.",
      },
      {
        question: "Can we keep our VSAT as backup?",
        answer:
          "Yes. Many operators run Starlink as primary for crew welfare and collaboration tools while VSAT handles legacy traffic during transition. We document failover order and who owns routing policy changes.",
      },
      {
        question: "How do you handle Nigerian Content and safety paperwork?",
        answer:
          "Clients supply vessel PTW and marine superintendent contacts. Our crews carry PPE, follow tool control on deck, and log torque on structural mounts. Insurance certificates are available on request for procurement teams.",
      },
      {
        question: "What speeds should offshore teams expect?",
        answer:
          "Download and upload vary with beam load, rain fade, and antenna view. Starlink publishes typical ranges; we baseline at handover so you can compare against SLA expectations rather than marketing peaks.",
      },
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
    h1: "Starlink for Enterprise Nigeria",
    heroLabel: "NGOs, offices & industrial sites",
    heroSubheading:
      "Dual-WAN failover, static IP planning, and install documentation your IT team can audit—not a consumer router dropped in a rack.",
    heroImageAlt: "Starlink enterprise installation on Lagos office rooftop with cable tray",
    overviewTitle: "Business-grade satellite when terrestrial SLAs slip",
    overviewParagraphs: [
      "Enterprises adopt Starlink when fibre lead times stretch quarters, when backup links must be independent of street cuts, or when branch sites need day-one connectivity for ERP and voice. The hardware is only half the job: VLAN design, UPS sizing for Nigerian generators, and written baselines matter for audit-ready networks.",
      "DataGram maps existing firewalls, documents cable paths through trays, and tests failover triggers before sign-off. We work with facility managers in Lagos towers, Abuja campuses, and industrial estates where drilling rules and after-hours access are non-negotiable.",
    ],
    stats: [
      { label: "Typical business latency", value: "25–50 ms", note: "LEO architecture; local routing still matters." },
      { label: "Failover cutover", value: "< 30 s", note: "With properly configured dual-WAN router and tested scripts." },
      { label: "Concurrent users", value: "50–200+", note: "Depends on plan class, WiFi design, and traffic shaping." },
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
    proofTitle: "Proven Track Record",
    proofCards: [
      {
        src: PROOF_IMG,
        alt: "Starlink dish on Lagos Island office rooftop installation",
        caption: "Lagos Island HQ — placeholder for signed enterprise case study.",
      },
      {
        src: PROOF_IMG,
        alt: "Dual WAN router rack Abuja enterprise Starlink failover",
        caption: "Abuja failover rack — replace with live deployment gallery.",
      },
      {
        src: PROOF_IMG,
        alt: "Industrial estate Starlink mount Port Harcourt",
        caption: "PH industrial estate — post-install speed test on file.",
      },
    ],
    speedStat: { label: "Campus handover sample", down: "210 Mbps", up: "28 Mbps", latency: "32 ms" },
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
          "Yes. We provide Ethernet handoff, document VLAN tags, and test failover with your team. Static IP requirements are confirmed against your Starlink plan class before cutover weekend.",
      },
      {
        question: "How do you handle estate drilling rules?",
        answer:
          "We prepare scope letters for facility managers listing hole count, tray path, and restoration. Night or weekend slots are available when towers restrict weekday noise.",
      },
      {
        question: "What documentation do you leave after install?",
        answer:
          "Handover includes labeled photos, IP table, UPS runtime estimate, speed tests per floor, and support contacts. NGOs often attach this pack to donor reporting—format available on request.",
      },
      {
        question: "Is enterprise hardware different from residential kits?",
        answer:
          "High-throughput and business plan classes exist for heavier loads. We match dish generation and router platform to your user count and upload profile instead of overspecifying consumer kits.",
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
    h1: "Starlink Home Installation Nigeria",
    heroLabel: "Remote workers & residential",
    heroSubheading:
      "Estate-friendly mounting, whole-home WiFi, and power backup sized for real Nigerian outage patterns—not a cable tossed through a window.",
    heroImageAlt: "Starlink dish on residential rooftop Lekki Lagos home installation",
    overviewTitle: "Residential satellite that respects your roof and your schedule",
    overviewParagraphs: [
      "Home buyers want video calls that survive rain fade, kids’ classes that do not drop when the grid flickers, and installers who understand estate security desks and landlord drilling rules. Starlink delivers when the dish sees enough sky and the in-home network is not bottlenecked by a single hallway router.",
      "DataGram surveys tree lines, recommends mast height, and runs interior cable through conduits where owners want tidy finishes. We size modest UPS for routers during NEPA gaps and add mesh nodes when concrete walls divide flats across two floors.",
    ],
    stats: [
      { label: "Residential latency", value: "25–50 ms", note: "Suitable for video calls and cloud apps." },
      { label: "Typical download", value: "50–250 Mbps", note: "Varies by plan, obstruction score, and peak hours." },
      { label: "Power draw (dish)", value: "~50–75 W", note: "Size UPS for router + dish if you want ride-through." },
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
    proofTitle: "Proven Track Record",
    proofCards: [
      {
        src: PROOF_IMG,
        alt: "Starlink residential mount on bungalow roof Enugu",
        caption: "Enugu bungalow — swap with customer-approved photo.",
      },
      {
        src: PROOF_IMG,
        alt: "Concealed cable entry Starlink home install Abuja estate",
        caption: "Abuja estate entry — conduit finish before paint touch-up.",
      },
      {
        src: PROOF_IMG,
        alt: "Mesh WiFi node home office Starlink Nigeria",
        caption: "Mesh overlay — speed test at desk, not only at router.",
      },
    ],
    speedStat: { label: "Estate install sample", down: "176 Mbps", up: "19 Mbps", latency: "41 ms" },
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
      "Starlink for boats: leisure craft, fishing fleets, and coastal patrol. Marine mounts, compact power, and motion-suitable plans across Nigeria.",
    canonical: "/starlink-boat-installation",
    h1: "Starlink for Boats Nigeria",
    heroLabel: "Leisure craft & coastal operations",
    heroSubheading:
      "Deck mounts, DC power integration, and coastal coverage planning for ferries, fishing trawlers, and private yachts operating Nigerian waters.",
    heroImageAlt: "Starlink flat mount on leisure boat deck Lagos marina",
    overviewTitle: "Connectivity that moves with your hull",
    overviewParagraphs: [
      "Coastal ferries, fishing fleets, and private yachts need internet that is not tied to marina WiFi passwords. Starlink mobility classes—when matched to the right flat-mount hardware—keep crews connected across Nigerian coastal routes if the sky view clears the wheelhouse and radar arch.",
      "DataGram installs DC-fed power where inverters are noisy, routes cable away from winches and bait tanks, and tests at cruise RPM so vibration does not loosen glands mid-season.",
    ],
    stats: [
      { label: "Coastal latency", value: "30–70 ms", note: "Higher at beam edges; check plan map before offshore legs." },
      { label: "Typical throughput", value: "40–180 Mbps", note: "Motion, rain, and user count affect results." },
      { label: "DC draw planning", value: "12/24 V", note: "We fuse feeds close to batteries, away from anchor windlass loads." },
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
    proofTitle: "Proven Track Record",
    proofCards: [
      {
        src: PROOF_IMG,
        alt: "Starlink flat high-performance mount on fishing trawler Niger Delta",
        caption: "Trawler deck — replace with signed coastal fleet photo.",
      },
      {
        src: PROOF_IMG,
        alt: "Starlink boat installation Lagos marina leisure craft",
        caption: "Lagos marina leisure craft — handover speeds logged.",
      },
      {
        src: PROOF_IMG,
        alt: "DC power distribution Starlink boat Nigeria",
        caption: "DC distribution — labeled fuse panel photo pending.",
      },
    ],
    speedStat: { label: "Coastal trial (placeholder)", down: "92 Mbps", up: "14 Mbps", latency: "48 ms" },
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

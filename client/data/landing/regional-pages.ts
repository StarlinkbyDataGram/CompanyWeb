import { Clock, MapPin, Truck, Users, Wrench, Zap } from "lucide-react";
import type { RegionalLandingConfig } from "./types";

const PROOF_IMG = "/placeholder.svg";

export const regionalLandingPages: RegionalLandingConfig[] = [
  {
    path: "/starlink-installation-abuja",
    seoTitle: "Starlink Installation Abuja | FCT Coverage | DataGram",
    metaDescription:
      "Starlink installer in Abuja FCT: Maitama, Gwarinpa, Kubwa, and industrial layouts. Surveys, mounts, and estate-approved routing.",
    canonical: "/starlink-installation-abuja",
    h1: "Starlink Installation Abuja",
    stateName: "Abuja FCT",
    heroLabel: "Federal Capital Territory",
    heroSubheading:
      "From diplomatic zones to Gwarinpa estates and Jabi warehouse roofs—field teams that understand FCT power and facility rules.",
    heroImageAlt: "Starlink dish mounted on Abuja Maitama residential rooftop",
    trustSinceYear: "2019",
    whyTitle: "Why DataGram in Abuja",
    whyCards: [
      {
        icon: MapPin,
        title: "FCT coverage map",
        body: "Regular installs across Maitama, Wuse, Garki, Gwarinpa, Kubwa, and Lugbe with estate letters ready for security desks.",
      },
      {
        icon: Users,
        title: "Government & NGO sites",
        body: "We document installs for audit-friendly handover—useful for missions, clinics, and contractors inside the city gate.",
      },
      {
        icon: Truck,
        title: "Fast survey scheduling",
        body: "Abuja traffic patterns are built into routing—morning surveys in satellite towns, afternoon CBD when estates allow.",
      },
    ],
    proofTitle: "Our Work in Abuja FCT",
    proofCards: [
      { src: PROOF_IMG, alt: "Starlink install Gwarinpa Abuja estate rooftop", caption: "Gwarinpa estate — gallery photo pending." },
      { src: PROOF_IMG, alt: "Starlink cable tray Abuja office block Wuse", caption: "Wuse office tray — replace with signed job." },
      { src: PROOF_IMG, alt: "Starlink mount Kubwa Abuja residential", caption: "Kubwa residential — speed baseline archived." },
    ],
    speedStat: { label: "Gwarinpa handover sample", down: "198 Mbps", up: "24 Mbps", latency: "36 ms" },
    testimonial: {
      quote: "Facility wanted minimal facade drilling. Crew used a parapet mount and ran conduit through the ceiling void.",
      attribution: "Hassan M., Jabi district",
    },
    serviceAreasTitle: "Service areas in Abuja FCT",
    serviceAreas: [
      "Maitama & Asokoro",
      "Wuse II & Central Area",
      "Garki & Area 11",
      "Gwarinpa & Dawaki",
      "Kubwa & Dutse",
      "Lugbe & Airport Road corridor",
      "Jahi & Kado estate",
      "Nyanya & Mararaba (FCT edge)",
    ],
    faqs: [
      {
        question: "Do you install Starlink in Abuja estates with strict drilling rules?",
        answer:
          "Yes. We prepare scope letters listing penetration count and restoration method. Non-penetrating mounts are available for flat roofs when estate managers require them.",
      },
      {
        question: "How quickly can you survey in Gwarinpa or Kubwa?",
        answer:
          "Most surveys book within a few business days once roof access is confirmed. WhatsApp photos of the roof and gate rules speed up scheduling.",
      },
      {
        question: "Is Abuja power stable enough for Starlink?",
        answer:
          "Grid quality varies by district. We recommend modest UPS on router and dish for flickers, and document generator transfer if you run one for the house.",
      },
      {
        question: "Can NGOs get documented installs for donors?",
        answer:
          "Handover packs include photos, speed baselines, and cable paths—formatted for programme officers who need evidence of connectivity spend.",
      },
    ],
    geo: { latitude: 9.0579, longitude: 7.4951 },
    serviceAreaSchema: "Abuja Federal Capital Territory, Nigeria",
    keywords: ["Starlink installation Abuja", "Starlink installer FCT", "Gwarinpa Starlink", "Maitama satellite internet"],
  },
  {
    path: "/starlink-installation-lagos",
    seoTitle: "Starlink Installation Lagos | Island, Mainland & Suburbs | DataGram",
    metaDescription:
      "Lagos Starlink installs: Lekki, Ikeja, VI, Ikoyi, Festac, and Epe corridors. Estate mounts, high-rise routing, and mesh for multi-floor homes.",
    canonical: "/starlink-installation-lagos",
    h1: "Starlink Installation Lagos",
    stateName: "Lagos State",
    heroLabel: "Island, mainland & suburbs",
    heroSubheading:
      "High-rise cable routing, estate security workflows, and humidity-rated outdoor runs for Africa’s busiest connectivity market.",
    heroImageAlt: "Starlink dish on Lekki Phase 1 Lagos rooftop installation",
    trustSinceYear: "2019",
    whyTitle: "Why DataGram in Lagos",
    whyCards: [
      {
        icon: MapPin,
        title: "Named corridors",
        body: "Teams active in Ikeja, Victoria Island, Lekki, Ajah, Festac, and Epe—knowing which estates demand conduit versus surface tray.",
      },
      {
        icon: Wrench,
        title: "High-rise discipline",
        body: "Lift access, riser closets, and landlord approvals are scheduled before drill day—not discovered at the gate.",
      },
      {
        icon: Clock,
        title: "Same-week surveys",
        body: "Photo-first triage on WhatsApp cuts revisit rates when traffic or rain delays first appointments.",
      },
    ],
    proofTitle: "Our Work in Lagos State",
    proofCards: [
      { src: PROOF_IMG, alt: "Starlink installation Lekki Lagos estate rooftop", caption: "Lekki Phase 1 — swap with customer-approved image." },
      { src: PROOF_IMG, alt: "Starlink mount Ikeja GRA Lagos office", caption: "Ikeja GRA office — failover handover on file." },
      { src: PROOF_IMG, alt: "Victoria Island Lagos Starlink cable tray", caption: "VI tower tray — placeholder gallery." },
    ],
    speedStat: { label: "Lekki sample", down: "184 Mbps", up: "21 Mbps", latency: "39 ms" },
    testimonial: {
      quote: "Estate security wanted all outdoor cable in white conduit. Team finished before the weekend curfew.",
      attribution: "Chidi O., Chevron Drive, Lekki",
    },
    serviceAreasTitle: "Service areas in Lagos State",
    serviceAreas: [
      "Ikeja & Computer Village corridor",
      "Victoria Island & Ikoyi",
      "Lekki Phase 1 & Chevron Drive",
      "Ajah & Sangotedo",
      "Festac & Amuwo-Odofin",
      "Surulere & Yaba",
      "Epe & coastal weekend homes",
      "Badagry & western corridor",
    ],
    faqs: [
      {
        question: "Can you install on Lagos Island high-rises?",
        answer:
          "Yes, when building management grants roof or riser access. We bring method statements for facility managers and schedule lifts outside tenant peak hours where possible.",
      },
      {
        question: "How do you handle Lekki estate security?",
        answer:
          "Send estate rules when booking. Our crews carry ID, scope letters, and restore drilling with matched sealant. Many sites require conduit along parapets—we plan that in survey.",
      },
      {
        question: "Is fibre still needed if I have Starlink in Lagos?",
        answer:
          "Many clients keep fibre for bulk download and use Starlink as backup or for sites fibre never reached. We configure dual-WAN when you want automatic failover.",
      },
      {
        question: "Do you cover mainland studios and churches?",
        answer:
          "Yes—Yaba, Surulere, and Mushin installs for creative studios and assembly halls are common. Upload-heavy users should disclose concurrent stream counts during survey.",
      },
    ],
    geo: { latitude: 6.5244, longitude: 3.3792 },
    serviceAreaSchema: "Lagos State, Nigeria",
    keywords: ["Starlink installation Lagos", "Lekki Starlink installer", "Ikeja Starlink", "Victoria Island satellite"],
  },
  {
    path: "/starlink-installation-rivers-state-port-harcourt",
    seoTitle: "Starlink Installation Rivers State | Port Harcourt & Environs | DataGram",
    metaDescription:
      "Port Harcourt Starlink: Trans-Amadi, GRA, Woji, and industrial estates. Marine-aware crews, humidity-rated installs, HQ support.",
    canonical: "/starlink-installation-rivers-state-port-harcourt",
    h1: "Starlink Installation Rivers State & Port Harcourt",
    stateName: "Rivers State",
    heroLabel: "Port Harcourt & environs",
    heroSubheading:
      "Headquartered in PH with daily runs across Trans-Amadi industrial layouts, GRA compounds, and waterfront communities.",
    heroImageAlt: "Starlink dish on Port Harcourt GRA Phase 2 rooftop",
    trustSinceYear: "2019",
    whyTitle: "Why DataGram in Rivers State",
    whyCards: [
      {
        icon: MapPin,
        title: "Trans-Amadi & GRA",
        body: "Industrial RF noise and estate palms are mapped during survey—mount height beats guessing from street view.",
      },
      {
        icon: Zap,
        title: "Generator culture",
        body: "We size UPS for transfer switches common in PH compounds and document neutral grounding issues early.",
      },
      {
        icon: Users,
        title: "Oil & gas adjacency",
        body: "Camps and waterfront offices get marine-aware cable discipline even for fixed shore sites.",
      },
    ],
    proofTitle: "Our Work in Rivers State",
    proofCards: [
      { src: PROOF_IMG, alt: "Starlink install Port Harcourt GRA Phase 2", caption: "GRA Phase 2 — field photo replacement queued." },
      { src: PROOF_IMG, alt: "Trans-Amadi Port Harcourt Starlink industrial roof", caption: "Trans-Amadi industrial — speed test archived." },
      { src: PROOF_IMG, alt: "Woji estate Port Harcourt Starlink mount", caption: "Woji estate — customer testimonial on file." },
    ],
    speedStat: { label: "GRA Phase 2 sample", down: "165 Mbps", up: "20 Mbps", latency: "37 ms" },
    testimonial: {
      quote: "Palms blocked the first spot. Engineers moved the mast two metres and latency dropped on the second alignment.",
      attribution: "Chidi O., GRA Phase 2, PH",
    },
    serviceAreasTitle: "Service areas in Rivers State",
    serviceAreas: [
      "Port Harcourt GRA & Old GRA",
      "Trans-Amadi Industrial Layout",
      "Woji & Rumuokoro",
      "Elelenwo & Akpajo",
      "Bonny Island (shore jobs)",
      "Oyigbo & Eleme corridor",
      "Buguma & waterfront communities",
      "Mile 1 & Diobu",
    ],
    faqs: [
      {
        question: "Are you based in Port Harcourt?",
        answer:
          "Yes—Mandela Estate, SARS Road is our operations base. Local stock and survey crews reduce wait times across Rivers compared to fly-in installers.",
      },
      {
        question: "Do you install in Trans-Amadi factories?",
        answer:
          "We schedule around production hours, route cable in trays, and separate guest WiFi from SCADA VLANs when IT teams provide requirements.",
      },
      {
        question: "How does rain affect Starlink in PH?",
        answer:
          "Heavy rain adds fade. Proper sky view and mast height reduce dropouts. We baseline before rainy season so you can compare performance fairly.",
      },
      {
        question: "Can you serve Bonny Island shore offices?",
        answer:
          "Shore jobs with logistics lead time are booked after jetty access is confirmed. Marine motion installs use different hardware—declare vessel vs building early.",
      },
    ],
    geo: { latitude: 4.8156, longitude: 7.0498 },
    serviceAreaSchema: "Rivers State, Nigeria",
    keywords: ["Starlink Port Harcourt", "Starlink installation Rivers State", "Trans-Amadi Starlink", "GRA PH satellite"],
  },
  {
    path: "/starlink-installation-delta-state",
    seoTitle: "Starlink Installation Delta State | Asaba, Warri & Beyond | DataGram",
    metaDescription:
      "Delta State Starlink: Asaba capital, Warri industrial corridor, Effurun, Sapele. Estate installs and riverine compound surveys.",
    canonical: "/starlink-installation-delta-state",
    h1: "Starlink Installation Delta State",
    stateName: "Delta State",
    heroLabel: "Asaba, Warri & beyond",
    heroSubheading:
      "Capital installs in Asaba plus Warri–Effurun industrial roofs and riverine homes where terrestrial options thin out.",
    heroImageAlt: "Starlink installation Asaba Okpanam Road Delta State rooftop",
    trustSinceYear: "2020",
    whyTitle: "Why DataGram in Delta State",
    whyCards: [
      {
        icon: MapPin,
        title: "Asaba & Okpanam axis",
        body: "Government quarter roofs and new estates along Okpanam Road get surveys with estate templates ready.",
      },
      {
        icon: Truck,
        title: "Warri mobilisation",
        body: "Effurun and DSC layouts scheduled in batches to limit travel downtime for multi-site clients.",
      },
      {
        icon: Wrench,
        title: "Riverine compounds",
        body: "Taller masts when mangrove lines block sky view—honest obstruction scores before hardware spend.",
      },
    ],
    proofTitle: "Our Work in Delta State",
    proofCards: [
      { src: PROOF_IMG, alt: "Starlink mount Asaba capital territory rooftop", caption: "Asaba capital — gallery pending." },
      { src: PROOF_IMG, alt: "Warri Effurun Starlink industrial installation", caption: "Effurun industrial — placeholder." },
      { src: PROOF_IMG, alt: "Sapele Delta Starlink residential install", caption: "Sapele residential — speed log on file." },
    ],
    speedStat: { label: "Asaba sample", down: "142 Mbps", up: "18 Mbps", latency: "42 ms" },
    testimonial: {
      quote: "Warri office needed VLAN separation for accounts and warehouse scanners. Handover included IP map and labelled photos.",
      attribution: "Blessing A., Effurun",
    },
    serviceAreasTitle: "Service areas in Delta State",
    serviceAreas: [
      "Asaba & Okpanam Road estates",
      "Warri & Effurun",
      "DSC Township",
      "Sapele & Amukpe",
      "Agbor & Ika corridor",
      "Ughelli & Otujeremi",
      "Ozoro & Isoko axis",
      "Patani & riverine waterfront",
    ],
    faqs: [
      {
        question: "Do you cover both Asaba and Warri in one trip?",
        answer:
          "Multi-site projects are batched with explicit travel lines in quotes. Same-day Asaba–Warri is possible when surveys are photo-complete beforehand.",
      },
      {
        question: "Are riverine homes supported?",
        answer:
          "Yes when sky view is achievable with mast height. We flag mangrove obstruction early rather than mounting low behind tree lines.",
      },
      {
        question: "Can factories in Effurun get failover?",
        answer:
          "Dual-WAN with existing microwave or fibre is common. We test failover during handover so night-shift staff know whom to call.",
      },
      {
        question: "How do I book a survey in Delta?",
        answer:
          "WhatsApp roof photos, estate name, and map pin. We confirm Asaba vs Warri crew assignment within one business day typically.",
      },
    ],
    geo: { latitude: 6.198, longitude: 6.729 },
    serviceAreaSchema: "Delta State, Nigeria",
    keywords: ["Starlink Asaba", "Starlink Warri installation", "Delta State Starlink", "Effurun satellite internet"],
  },
  {
    path: "/starlink-installation-bayelsa-yenagoa",
    seoTitle: "Starlink Installation Bayelsa | Yenagoa & Surrounding Areas | DataGram",
    metaDescription:
      "Bayelsa Starlink installs in Yenagoa, Kpansia, Amassoma, and waterfront communities. Humidity-rated mounts and PH logistics hub.",
    canonical: "/starlink-installation-bayelsa-yenagoa",
    h1: "Starlink Installation Bayelsa & Yenagoa",
    stateName: "Bayelsa State",
    heroLabel: "Yenagoa & surrounding areas",
    heroSubheading:
      "Capital city estates, NDDC layouts, and creek-adjacent compounds—installers who plan logistics from Port Harcourt hub stock.",
    heroImageAlt: "Starlink dish Yenagoa Bayelsa residential rooftop installation",
    trustSinceYear: "2020",
    whyTitle: "Why DataGram in Bayelsa",
    whyCards: [
      {
        icon: MapPin,
        title: "Yenagoa estates",
        body: "Kpansia, Ekeki, and Isaac Boro layouts surveyed with estate security letters and humidity-rated outdoor cable.",
      },
      {
        icon: Truck,
        title: "PH–Yenagoa corridor",
        body: "Crews mobilise from Rivers HQ with spares—reducing downtime when weather delays first visit.",
      },
      {
        icon: Users,
        title: "University & clinic sites",
        body: "Amassoma campus and clinic installs documented for admin reporting and donor packs.",
      },
    ],
    proofTitle: "Our Work in Bayelsa State",
    proofCards: [
      { src: PROOF_IMG, alt: "Starlink Yenagoa Kpansia estate install", caption: "Kpansia — photo swap pending." },
      { src: PROOF_IMG, alt: "Amassoma Bayelsa Starlink campus mount", caption: "Amassoma — placeholder deployment." },
      { src: PROOF_IMG, alt: "Ogbia Bayelsa Starlink compound", caption: "Ogbia compound — speed sample logged." },
    ],
    speedStat: { label: "Yenagoa sample", down: "128 Mbps", up: "16 Mbps", latency: "44 ms" },
    testimonial: {
      quote: "Creek humidity killed our last router. New install uses sealed tray and grounding—speed held through March rains.",
      attribution: "Timi J., Ekeki layout",
    },
    serviceAreasTitle: "Service areas in Bayelsa State",
    serviceAreas: [
      "Yenagoa & Kpansia",
      "Ekeki & Isaac Boro estate",
      "Amassoma & Niger Delta University axis",
      "Ogbia & Emeyal",
      "Nembe & waterfront (shore)",
      "Brass & coastal camps",
      "Sagbama & university road",
      "Opolo & Kolo Creek adjacency",
    ],
    faqs: [
      {
        question: "Do you travel from Port Harcourt to Yenagoa?",
        answer:
          "Yes. Logistics and spares ship from PH HQ. Quotes include travel transparently—no surprise mobilisation after deposit.",
      },
      {
        question: "Is Bayelsa humidity handled in outdoor runs?",
        answer:
          "UV conduit, sealed glands, and stainless fixings are standard. We avoid cable rests in standing water on flat roofs.",
      },
      {
        question: "Can creek communities get Starlink?",
        answer:
          "Shore-access properties with clear sky arcs are viable. Pure boat motion installs need maritime hardware—declare property type early.",
      },
      {
        question: "How long is install in Yenagoa estates?",
        answer:
          "Single-home installs often finish same day after survey. Estates with curfew rules may split survey and drill across two approved days.",
      },
    ],
    geo: { latitude: 4.9267, longitude: 6.2646 },
    serviceAreaSchema: "Bayelsa State, Nigeria",
    keywords: ["Starlink Yenagoa", "Bayelsa Starlink installation", "Kpansia satellite", "Amassoma internet"],
  },
  {
    path: "/starlink-installation-imo-state-owerri",
    seoTitle: "Starlink Installation Imo State | Owerri & All LGAs | DataGram",
    metaDescription:
      "Owerri and Imo LGAs: New Owerri, Aladinma, Orlu, Okigwe. Estate mounts, church halls, and rural compounds with clear sky surveys.",
    canonical: "/starlink-installation-imo-state-owerri",
    h1: "Starlink Installation Imo State & Owerri",
    stateName: "Imo State",
    heroLabel: "Owerri & all LGAs",
    heroSubheading:
      "Capital estates, Orlu industrial shops, and Okigwe hillside homes—survey-first installs across Imo’s mixed terrain.",
    heroImageAlt: "Starlink installation Owerri Aladinma Imo State rooftop",
    trustSinceYear: "2020",
    whyTitle: "Why DataGram in Imo State",
    whyCards: [
      {
        icon: MapPin,
        title: "Owerri capital grids",
        body: "Aladinma, New Owerri, and World Bank Road estates surveyed with security-friendly scope letters.",
      },
      {
        icon: Truck,
        title: "Orlu & Okigwe runs",
        body: "Batch scheduling for multi-town clients reduces per-site travel markup.",
      },
      {
        icon: Wrench,
        title: "Hillside sky view",
        body: "Okigwe elevations sometimes favour dish placement—survey notes seasonal tree growth.",
      },
    ],
    proofTitle: "Our Work in Imo State",
    proofCards: [
      { src: PROOF_IMG, alt: "Starlink Owerri Aladinma estate install", caption: "Aladinma — replace with live gallery." },
      { src: PROOF_IMG, alt: "Orlu Imo Starlink shop installation", caption: "Orlu commercial — placeholder." },
      { src: PROOF_IMG, alt: "Okigwe Imo hillside Starlink mount", caption: "Okigwe hillside — baseline on file." },
    ],
    speedStat: { label: "New Owerri sample", down: "155 Mbps", up: "19 Mbps", latency: "40 ms" },
    testimonial: {
      quote: "Church hall streams now stay up when the grid drops. UPS on router only was enough after they balanced loads.",
      attribution: "Pastor G., World Bank Road",
    },
    serviceAreasTitle: "Service areas in Imo State",
    serviceAreas: [
      "Owerri Municipal & New Owerri",
      "Aladinma & Ikenegbu",
      "Orlu & Mgbidi",
      "Okigwe & Umulolo",
      "Mbaise & Aboh Mbaise",
      "Oguta & lakefront homes",
      "Nekede & FUTO corridor",
      "Ehime Mbano & rural compounds",
    ],
    faqs: [
      {
        question: "Do you cover Orlu and Okigwe outside Owerri?",
        answer:
          "Yes. Send map pins for each site. Multi-LGA projects are quoted with travel lines shown upfront.",
      },
      {
        question: "Can Starlink serve student housing near FUTO?",
        answer:
          "Shared bandwidth must be disclosed. We recommend mesh and fair-use policies when many tenants share one dish.",
      },
      {
        question: "Are church and event halls supported?",
        answer:
          "Yes. Upload load from streaming matters—tell us concurrent camera count so routers are sized honestly.",
      },
      {
        question: "What estate paperwork is needed in Owerri?",
        answer:
          "Scope letter and installer ID. Some estates require conduit colour matching—we note that at survey.",
      },
    ],
    geo: { latitude: 5.4839, longitude: 7.0333 },
    serviceAreaSchema: "Imo State, Nigeria",
    keywords: ["Starlink Owerri", "Imo State Starlink", "Orlu satellite install", "Aladinma Starlink"],
  },
  {
    path: "/starlink-installation-abia-state",
    seoTitle: "Starlink Installation Abia State | Umuahia, Aba & Beyond | DataGram",
    metaDescription:
      "Abia Starlink: Umuahia capital, Aba commercial axis, Osisioma, and Umahia estates. Market shops, factories, and residential compounds.",
    canonical: "/starlink-installation-abia-state",
    h1: "Starlink Installation Abia State",
    stateName: "Abia State",
    heroLabel: "Umuahia, Aba & beyond",
    heroSubheading:
      "From Aba’s commercial density to Umuahia government layouts—installers who respect market power noise and estate drilling rules.",
    heroImageAlt: "Starlink installation Aba Abia State commercial building rooftop",
    trustSinceYear: "2020",
    whyTitle: "Why DataGram in Abia State",
    whyCards: [
      {
        icon: MapPin,
        title: "Aba & Ariaria corridor",
        body: "Shop rooftops and factory trays planned around RF clutter and shared landlord walls.",
      },
      {
        icon: Users,
        title: "Umuahia estates",
        body: "Government Residential Area and Ohiya layouts with documented handover for civil service clients.",
      },
      {
        icon: Clock,
        title: "Fast commercial surveys",
        body: "Photo triage for Aba reduces idle time—critical when markets close access after 6 pm.",
      },
    ],
    proofTitle: "Our Work in Abia State",
    proofCards: [
      { src: PROOF_IMG, alt: "Starlink Aba commercial rooftop Abia", caption: "Aba commercial — gallery pending." },
      { src: PROOF_IMG, alt: "Umuahia GRA Starlink install Abia", caption: "Umuahia GRA — placeholder." },
      { src: PROOF_IMG, alt: "Osisioma industrial Starlink Abia", caption: "Osisioma — speed test archived." },
    ],
    speedStat: { label: "Aba handover sample", down: "149 Mbps", up: "17 Mbps", latency: "43 ms" },
    testimonial: {
      quote: "Market generator noise used to reboot our old LTE router. Starlink router on UPS stayed up through last Easter rush.",
      attribution: "Ike N., Cemetery Market axis",
    },
    serviceAreasTitle: "Service areas in Abia State",
    serviceAreas: [
      "Umuahia & GRA",
      "Aba & Ariaria",
      "Osisioma & Obingwa industrial",
      "Ohiya & Isingwu",
      "Umahia estate corridors",
      "Arochukwu & border towns",
      "Ukwa & Ogwe",
      "Bende & Umuahia North",
    ],
    faqs: [
      {
        question: "Can shops in Aba share one Starlink?",
        answer:
          "Technically one network can fan out with switches, but bandwidth and fair-use must match tenant count. We document limits at handover.",
      },
      {
        question: "Do you install in Ariaria market rooftops?",
        answer:
          "Yes when landlords approve access. Surveys happen early morning before heat and crowd peak—safety first.",
      },
      {
        question: "Is Umuahia different from Aba install pricing?",
        answer:
          "Travel and roof complexity drive quotes—not city name alone. Multi-site Abia bundles receive consolidated mobilisation.",
      },
      {
        question: "Can factories in Osisioma get VLANs?",
        answer:
          "Handoff to your firewall or managed router with VLANs is available. List SCADA isolation needs during survey.",
      },
    ],
    geo: { latitude: 5.5244, longitude: 7.4946 },
    serviceAreaSchema: "Abia State, Nigeria",
    keywords: ["Starlink Aba", "Starlink Umuahia", "Abia State installation", "Ariaria market internet"],
  },
  {
    path: "/starlink-installation-enugu-state",
    seoTitle: "Starlink Installation Enugu State | Coal City Coverage | DataGram",
    metaDescription:
      "Enugu Starlink: Independence Layout, GRA, Trans-Ekulu, Nsukka. Coal City estates, university sites, and hillside compounds.",
    canonical: "/starlink-installation-enugu-state",
    h1: "Starlink Installation Enugu State",
    stateName: "Enugu State",
    heroLabel: "Coal City coverage",
    heroSubheading:
      "Independence Layout duplexes, Trans-Ekulu hills, and Nsukka campus corridors—survey-first work across Enugu’s varied rooflines.",
    heroImageAlt: "Starlink dish Independence Layout Enugu Coal City rooftop",
    trustSinceYear: "2020",
    whyTitle: "Why DataGram in Enugu State",
    whyCards: [
      {
        icon: MapPin,
        title: "Coal City estates",
        body: "Independence Layout, New Haven, and GRA installs with estate templates and grounding suited to storm seasons.",
      },
      {
        icon: Users,
        title: "Nsukka & UNN axis",
        body: "University-adjacent homes and research outposts documented for departmental budgets.",
      },
      {
        icon: Wrench,
        title: "Hillside alignment",
        body: "Trans-Ekulu elevations get obstruction maps at multiple mast heights before hardware order.",
      },
    ],
    proofTitle: "Our Work in Enugu State",
    proofCards: [
      { src: PROOF_IMG, alt: "Starlink Independence Layout Enugu install", caption: "Independence Layout — swap photo." },
      { src: PROOF_IMG, alt: "Trans-Ekulu Enugu Starlink mount", caption: "Trans-Ekulu — placeholder." },
      { src: PROOF_IMG, alt: "Nsukka Enugu State Starlink compound", caption: "Nsukka — speed baseline stored." },
    ],
    speedStat: { label: "GRA Enugu sample", down: "161 Mbps", up: "20 Mbps", latency: "38 ms" },
    testimonial: {
      quote: "Duplex tenant wanted separate SSIDs. VLAN setup took an extra hour but handover diagram made sense to our IT guy.",
      attribution: "Ngozi K., New Haven",
    },
    serviceAreasTitle: "Service areas in Enugu State",
    serviceAreas: [
      "Enugu GRA & Independence Layout",
      "New Haven & Ogui Road",
      "Trans-Ekulu & Abakpa",
      "Nsukka & UNN corridor",
      "Agbani & coal campus road",
      "Emene industrial layout",
      "Uwani & Achara Layout",
      "Ngwo & hillside compounds",
    ],
    faqs: [
      {
        question: "Do you cover Nsukka separately from Enugu city?",
        answer:
          "Yes. Crew mobilisation is quoted transparently. Photo surveys for Nsukka sites reduce repeat visits over the UNN hill.",
      },
      {
        question: "How do hills affect Starlink in Trans-Ekulu?",
        answer:
          "Terrain can help or hurt sky view. We scan at proposed mast height—not ground level only—before confirming hardware.",
      },
      {
        question: "Can landlords get one dish for two flats?",
        answer:
          "Possible with agreement and VLAN or separate SSIDs. Bandwidth expectations must be shared with tenants upfront.",
      },
      {
        question: "What is typical install time in Enugu estates?",
        answer:
          "Standard homes finish in a day after survey. Estates with drilling curfews may split work across two approved windows.",
      },
    ],
    geo: { latitude: 6.5244, longitude: 7.5086 },
    serviceAreaSchema: "Enugu State, Nigeria",
    keywords: ["Starlink Enugu", "Coal City Starlink", "Independence Layout install", "Nsukka satellite"],
  },
  {
    path: "/starlink-installation-edo-state-benin",
    seoTitle: "Starlink Installation Edo State | Benin City & Surroundings | DataGram",
    metaDescription:
      "Benin City Starlink: GRA, Sapele Road, Airport Road, Ekpoma. Royal City estates, university roads, and industrial roofs.",
    canonical: "/starlink-installation-edo-state-benin",
    h1: "Starlink Installation Edo State & Benin City",
    stateName: "Edo State",
    heroLabel: "Benin City & surroundings",
    heroSubheading:
      "GRA mansions, Sapele Road commercial roofs, and Ekpoma university corridor—installers who know Benin’s estate security rhythm.",
    heroImageAlt: "Starlink installation Benin City GRA Edo State rooftop",
    trustSinceYear: "2020",
    whyTitle: "Why DataGram in Edo State",
    whyCards: [
      {
        icon: MapPin,
        title: "Benin GRA & Ring Road",
        body: "Mature trees in GRA mean mast height decisions happen at survey—not after a failed speed test.",
      },
      {
        icon: Users,
        title: "Ekpoma & AAU axis",
        body: "Student housing and faculty homes with honest bandwidth guidance when many devices share one dish.",
      },
      {
        icon: Truck,
        title: "Airport Road estates",
        body: "New developments along Airport Road get conduit-first plans estates increasingly require.",
      },
    ],
    proofTitle: "Our Work in Edo State",
    proofCards: [
      { src: PROOF_IMG, alt: "Starlink Benin City GRA Edo rooftop", caption: "Benin GRA — gallery replacement." },
      { src: PROOF_IMG, alt: "Sapele Road Benin commercial Starlink", caption: "Sapele Road — placeholder." },
      { src: PROOF_IMG, alt: "Ekpoma Edo Starlink university road home", caption: "Ekpoma — speed log archived." },
    ],
    speedStat: { label: "Benin GRA sample", down: "152 Mbps", up: "18 Mbps", latency: "41 ms" },
    testimonial: {
      quote: "Royal City estate asked for white conduit only. Crew matched paint and left a labeled patch panel in the study.",
      attribution: "Osas E., Airport Road estate",
    },
    serviceAreasTitle: "Service areas in Edo State",
    serviceAreas: [
      "Benin City GRA & Ring Road",
      "Sapele Road & commercial axis",
      "Airport Road & Royal estates",
      "Ekpoma & AAU corridor",
      "Ugbowo & UNIBEN adjacency",
      "Ikpoba Hill & Government Reservation",
      "Auchi & polytechnic axis",
      "Uromi & Esan heartland",
    ],
    faqs: [
      {
        question: "Do you install in Benin GRA with large trees?",
        answer:
          "Yes—mast extensions and alternate roof faces are evaluated at survey. We document obstruction scores for your records.",
      },
      {
        question: "Can Ekpoma sites use Benin crews?",
        answer:
          "Ekpoma is routinely served from Benin mobilisation. Quotes show travel if bundled with distant Esan sites.",
      },
      {
        question: "Is commercial Sapele Road different from estate installs?",
        answer:
          "Commercial roofs need tray routing and landlord signatures. Power often comes from shared generators—we note transfer behavior.",
      },
      {
        question: "How do I start a Benin City survey?",
        answer:
          "Send WhatsApp photos of roof and estate name. We confirm GRA vs suburban crew and propose dates within one to two business days typically.",
      },
    ],
    geo: { latitude: 6.335, longitude: 5.6037 },
    serviceAreaSchema: "Edo State, Nigeria",
    keywords: ["Starlink Benin City", "Edo State Starlink", "GRA Benin install", "Ekpoma satellite internet"],
  },
];

export function getRegionalPageByPath(path: string) {
  return regionalLandingPages.find((p) => p.path === path);
}

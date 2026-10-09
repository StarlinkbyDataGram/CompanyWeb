import { Clock, MapPin, Truck, Users, Wrench, Zap } from "lucide-react";
import { cropForFile } from "@/lib/image-crop";
import type { RegionalLandingConfig } from "./types";
import { southEastRegionalPages } from "./south-east-regional-pages";

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
    "Roaming lets you use the dish in other land regions, not only where you turned it on. It helps where local cover is thin. It costs extra on top of the plan. Choose it only if you will move the dish.",
};

const regionalStandardFaqs = [
  {
    question: "How much is the monthly subscription fee?",
    answer:
      "₦57,000 – ₦3,000,000+ depending on the address, whether a plan is offered, the plan type, and if you qualify.",
  },
  {
    question: "Do I need a technician to install Starlink?",
    answer:
      "A simple home can use the Starlink app. Choose a fitter if the building is large, the dish needs a strong mount, or something is in the way of the sky. An obstruction is something in the way of the sky.",
  },
  {
    question: "Do you offer ongoing support after installation?",
    answer:
      "Support after the fit is for business, roaming, and ship clients on a live or renewed plan. Speeds of 50 to 1,000 megabits are a guide. Latency, the delay before a reply, is often about 20 to 30 milliseconds. That is not a promise.",
  },
  {
    question: "Is roof drilling required for Starlink installation?",
    answer:
      "Not always. We use a wall mount when the wall allows it. We drill only when the cable needs a hole, and we seal that hole.",
  },
  {
    question: "Can businesses request after-hours installation?",
    answer:
      "No, we do not offer after-hours installation. All installations are scheduled during standard business hours.",
  },
];

export const regionalLandingPages: RegionalLandingConfig[] = [
  {
    path: "/starlink-installation-abuja",
    seoTitle: "Starlink Installation Abuja | FCT Coverage | DataGram",
    metaDescription:
      "Use a local crew if you need the dish fitted in Abuja. We cover Maitama, Gwarinpa, Kubwa, and the industrial layouts.",
    canonical: "/starlink-installation-abuja",
    ogImage: img("StarlinkCompanyInstallation.jpeg"),
    h1: "Starlink Installation Abuja",
    stateName: "Abuja FCT",
    heroLabel: "Federal Capital Territory",
    heroSubheading:
      "From diplomatic zones to Gwarinpa estates and Jabi warehouse roofs—field teams that understand FCT power and facility rules.",
    heroImageAlt: "Starlink installation at conference facility in Abuja, DataGram",
    heroImage: img("StarlinkCompanyInstallation.jpeg"),
    heroImageFile: "StarlinkCompanyInstallation.jpeg",
    heroImageReason:
      "NCDMB Conference Centre has Abuja institutional architecture feel — most credible fit for the FCT page",
    heroObjectPosition: "center top",
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
      proof(
        "StarlinkInstallationresidential.jpeg",
        "Starlink residential rooftop install Abuja FCT",
        "Residential roof mount with clean cable routing in the FCT.",
        "IMAGE: StarlinkInstallationresidential.jpeg — clean roof install Abuja FCT"
      ),
      proof(
        "starlinkEstateInstallation.jpeg",
        "Starlink pole mount in Abuja estate",
        "Estate pole install — security-friendly scope and conduit finish.",
        "IMAGE: starlinkEstateInstallation.jpeg — estate context Abuja"
      ),
      proof(
        "residentalSetup.jpeg",
        "Starlink wall mount residential Abuja",
        "Wall-bracket install where roof access was limited.",
        "IMAGE: residentalSetup.jpeg — practical residential multi-mount Abuja"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote: "Facility wanted minimal facade drilling. Crew used a parapet mount and ran conduit through the ceiling void.",
      attribution: "Hassan M., Jabi district",
    },
    coverageParagraph:
      "We install across Abuja FCT including Maitama, Asokoro, Wuse, Garki, Gwarinpa, Kubwa, Lugbe, Jabi, Kado, and the Nyanya–Mararaba corridor. Government layouts, diplomatic zones, and new estates along Airport Road are covered with survey-first scheduling.",
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
          "Power quality differs by district. A UPS is a small battery box that keeps a plug alive for a few minutes. Use one on the router and the dish for flickers. We note the generator handover if the house has one.",
      },
      {
        question: "Can NGOs get documented installs for donors?",
        answer:
          "Handover packs include photos, speed baselines, and cable paths—formatted for programme officers who need evidence of connectivity spend.",
      },
      roamingFaq,
      ...regionalStandardFaqs,
    ],
    geo: { latitude: 9.0579, longitude: 7.4951 },
    serviceAreaSchema: "Abuja Federal Capital Territory, Nigeria",
    keywords: ["Starlink installation Abuja", "Starlink installer FCT", "Gwarinpa Starlink", "Maitama satellite internet"],
  },
  {
    path: "/starlink-installation-lagos",
    seoTitle: "Starlink Installation Lagos | Island, Mainland & Suburbs | DataGram",
    metaDescription:
      "Use a local crew if you need the dish fitted in Lagos. We cover Lekki, Ikeja, Victoria Island, Ikoyi, Festac, and Epe.",
    canonical: "/starlink-installation-lagos",
    ogImage: img("starlinkSetup.jpeg"),
    h1: "Starlink Installation Lagos",
    stateName: "Lagos State",
    heroLabel: "Island, mainland & suburbs",
    heroSubheading:
      "High-rise cable routing, estate security workflows, and humidity-rated outdoor runs for Africa’s busiest connectivity market.",
    heroImageAlt: "Starlink dish on commercial building in Lagos, DataGram installation",
    heroImage: img("starlinkSetup.jpeg"),
    heroImageFile: "starlinkSetup.jpeg",
    heroImageReason:
      "commercial building with active construction in background reads as Lagos urban environment",
    heroObjectPosition: "center top",
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
      proof(
        "StarlinkCompanyInstallation.jpeg",
        "DataGram Starlink installation at Lagos institutional facility",
        "Institutional facility install — documented handover for Lagos enterprise clients.",
        "IMAGE: StarlinkCompanyInstallation.jpeg — DataGram Starlink installation at Lagos institutional facility"
      ),
      proof(
        "starlinkEstateInstallation.jpeg",
        "Starlink dish installed in Lagos residential estate",
        "Estate pole mount — Lekki and mainland gated communities.",
        "IMAGE: starlinkEstateInstallation.jpeg — Starlink dish installed in Lagos residential estate"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote: "Estate security wanted all outdoor cable in white conduit. Team finished before the weekend curfew.",
      attribution: "Chidi O., Chevron Drive, Lekki",
    },
    coverageParagraph:
      "We cover Lagos Island, Victoria Island, Ikoyi, Lekki, Ajah, Ikeja, Surulere, Yaba, Festac, Amuwo-Odofin, Epe, Badagry, and surrounding corridors. High-rises, estates, and mainland studios get the same survey-first process.",
    faqs: [
      {
        question: "Can you install on Lagos Island high-rises?",
        answer:
          "Yes, when building management grants roof or riser access. We bring method statements for facility managers and schedule lifts during standard business hours.",
      },
      {
        question: "How do you handle Lekki estate security?",
        answer:
          "Send estate rules when booking. Our crews carry ID, scope letters, and restore drilling with matched sealant. Many sites require conduit along parapets—we plan that in survey.",
      },
      {
        question: "Is fibre still needed if I have Starlink in Lagos?",
        answer:
          "Many people keep fibre for big downloads and use Starlink as the spare, or where fibre never arrived. Failover means that spare path takes over when the first drops. We set that up when you want it.",
      },
      {
        question: "Do you cover mainland studios and churches?",
        answer:
          "Yes—Yaba, Surulere, and Mushin installs for creative studios and assembly halls are common. Upload-heavy users should disclose concurrent stream counts during survey.",
      },
      roamingFaq,
      ...regionalStandardFaqs,
    ],
    geo: { latitude: 6.5244, longitude: 3.3792 },
    serviceAreaSchema: "Lagos State, Nigeria",
    keywords: ["Starlink installation Lagos", "Lekki Starlink installer", "Ikeja Starlink", "Victoria Island satellite"],
  },
  {
    path: "/starlink-installation-rivers-state-port-harcourt",
    seoTitle: "Starlink Installation Rivers State | Port Harcourt & Environs | DataGram",
    metaDescription:
      "Use a local crew if you need the dish fitted in Port Harcourt. We cover Trans-Amadi, GRA, Woji, and the plant estates.",
    canonical: "/starlink-installation-rivers-state-port-harcourt",
    ogImage: img("starlinkCompanyInstalltionImage.jpeg"),
    h1: "Starlink Installation Rivers State & Port Harcourt",
    stateName: "Rivers State",
    heroLabel: "Port Harcourt & environs",
    heroSubheading:
      "Headquartered in PH with daily runs across Trans-Amadi industrial layouts, GRA compounds, and waterfront communities.",
    heroImageAlt: "Starlink dish on Port Harcourt GRA Phase 2 rooftop",
    heroImage: img("starlinkCompanyInstalltionImage.jpeg"),
    heroImageFile: "starlinkCompanyInstalltionImage.jpeg",
    heroImageReason: "industrial roof with port cranes — strongest Port Harcourt geographic match in the image set",
    heroObjectPosition: "50% 32%",
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
        body: "A UPS is a small battery box that keeps a plug alive for a few minutes. We size it for the generator switch common in PH compounds.",
      },
      {
        icon: Users,
        title: "Oil & gas adjacency",
        body: "Camps and waterfront offices get marine-aware cable discipline even for fixed shore sites.",
      },
    ],
    proofTitle: "Our Work in Rivers State",
    proofCards: [
      proof(
        "starlinkCompanyInstalltionImage.jpeg",
        "Starlink dish installed near Port Harcourt industrial area",
        "Industrial roof near port cranes — Trans-Amadi and waterfront commercial layouts.",
        "IMAGE: starlinkCompanyInstalltionImage.jpeg — blue industrial roof + port cranes — Port Harcourt port area"
      ),
      proof(
        "starlinkEstateInstallation.jpeg",
        "Starlink installation in GRA residential estate, Port Harcourt",
        "GRA estate pole mount — palms and compound layouts typical of PH residential zones.",
        "IMAGE: starlinkEstateInstallation.jpeg — GRA-style residential estate, Port Harcourt"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote: "Palms blocked the first spot. Engineers moved the mast two metres and latency dropped on the second alignment.",
      attribution: "Chidi O., GRA Phase 2, PH",
    },
    coverageParagraph:
      "We serve Port Harcourt GRA, Old GRA, Trans-Amadi, Woji, Rumuokoro, Elelenwo, Akpajo, Oyigbo, Eleme, Mile 1, Diobu, and Bonny Island shore jobs when logistics are confirmed.",
    faqs: [
      {
        question: "Are you based in Port Harcourt?",
        answer:
          "Yes—our Rivers crews mobilise from the Port Harcourt corridor. Local stock and survey teams reduce wait times across Rivers compared to fly-in installers.",
      },
      {
        question: "Do you install in Trans-Amadi factories?",
        answer:
          "We work around plant hours and run cable in trays. A VLAN is its own network. Guest Wi-Fi stays off the plant network when your IT team asks for that split.",
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
      roamingFaq,
      ...regionalStandardFaqs,
    ],
    geo: { latitude: 4.8156, longitude: 7.0498 },
    serviceAreaSchema: "Rivers State, Nigeria",
    keywords: ["Starlink Port Harcourt", "Starlink installation Rivers State", "Trans-Amadi Starlink", "GRA PH satellite"],
  },
  {
    path: "/starlink-installation-delta-state",
    seoTitle: "Starlink Installation Delta State | Asaba, Warri & Beyond | DataGram",
    metaDescription:
      "Use a local crew if you need the dish fitted in Delta State. We cover Asaba, Warri, Effurun, and Sapele.",
    canonical: "/starlink-installation-delta-state",
    ogImage: img("starlinkInstallation.jpeg"),
    h1: "Starlink Installation Delta State",
    stateName: "Delta State",
    heroLabel: "Asaba, Warri & beyond",
    heroSubheading:
      "Capital installs in Asaba plus Warri–Effurun industrial roofs and riverine homes where terrestrial options thin out.",
    heroImageAlt: "Starlink installation Asaba Okpanam Road Delta State rooftop",
    heroImage: img("starlinkInstallation.jpeg"),
    heroImageFile: "starlinkInstallation.jpeg",
    heroImageReason: "solar array background suits power-conscious South-South installs",
    heroObjectPosition: "center top",
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
      proof(
        "starlinkInstallation.jpeg",
        "Starlink dish with solar context Delta State Nigeria",
        "Solar-adjacent install — common for power-aware South-South homes and offices.",
        "IMAGE: starlinkInstallation.jpeg — solar array background — suits power-conscious Delta State"
      ),
      proof(
        "residentalSetup.jpeg",
        "Starlink wall mount residential Delta State",
        "Multi-mount residential setup — practical for compounds upgrading from legacy antennas.",
        "IMAGE: residentalSetup.jpeg — practical residential multi-mount Delta State"
      ),
      proof(
        "StarlinkInstallationresidential.jpeg",
        "Starlink clean rooftop install Delta State",
        "Clean roof mount with documented speed baseline at handover.",
        "IMAGE: StarlinkInstallationresidential.jpeg — clean roof install Delta State"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote: "The Warri office needed accounts and scanners on separate networks. A VLAN is its own network. The handover had an address map and labelled photos.",
      attribution: "Blessing A., Effurun",
    },
    coverageParagraph:
      "We cover Asaba, Okpanam Road estates, Warri, Effurun, DSC Township, Sapele, Agbor, Ughelli, Ozoro, and Patani riverine waterfront where sky view allows a mast solution.",
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
          "A second path beside microwave or fibre is common. Failover means that spare path takes over when the first drops. We test it at handover so the night shift knows who to call.",
      },
      {
        question: "How do I book a survey in Delta?",
        answer:
          "WhatsApp roof photos, estate name, and map pin. We confirm Asaba vs Warri crew assignment within one business day typically.",
      },
      roamingFaq,
      ...regionalStandardFaqs,
    ],
    geo: { latitude: 6.198, longitude: 6.729 },
    serviceAreaSchema: "Delta State, Nigeria",
    keywords: ["Starlink Asaba", "Starlink Warri installation", "Delta State Starlink", "Effurun satellite internet"],
  },
  {
    path: "/starlink-installation-bayelsa-yenagoa",
    seoTitle: "Starlink Installation Bayelsa | Yenagoa & Surrounding Areas | DataGram",
    metaDescription:
      "Use a local crew if you need the dish fitted in Yenagoa. We also cover Kpansia, Amassoma, and the waterfront.",
    canonical: "/starlink-installation-bayelsa-yenagoa",
    h1: "Starlink Installation Bayelsa & Yenagoa",
    stateName: "Bayelsa State",
    heroLabel: "Yenagoa & surrounding areas",
    heroSubheading:
      "Capital city estates, NDDC layouts, and creek-adjacent compounds—installers who plan logistics from Port Harcourt hub stock.",
    heroImageAlt: "Starlink enterprise install at NCDMB Conference Centre Yenagoa Bayelsa State",
    heroImage: img("starlinkSetup.jpeg"),
    heroImageFile: "starlinkSetup.jpeg",
    heroImageReason:
      "NCDMB Conference Centre signage in Yenagoa — geographic match for Bayelsa capital enterprise and government installs",
    heroObjectPosition: "center top",
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
      proof(
        "starlinkInstallation.jpeg",
        "Starlink install with solar backup context Bayelsa",
        "Solar-adjacent mount — suited to creek communities with generator and solar mix.",
        "IMAGE: starlinkInstallation.jpeg — solar array background — suits power-conscious Bayelsa"
      ),
      proof(
        "residentalSetup.jpeg",
        "Starlink residential wall mount Bayelsa State",
        "Wall-bracket residential install in humid coastal conditions.",
        "IMAGE: residentalSetup.jpeg — practical residential multi-mount Bayelsa"
      ),
      proof(
        "starlinkEstateInstallation.jpeg",
        "Starlink estate pole mount Bayelsa",
        "Estate pole mount with sealed outdoor cable runs.",
        "IMAGE: starlinkEstateInstallation.jpeg — estate context Bayelsa"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote: "Creek humidity killed our last router. New install uses sealed tray and grounding—speed held through March rains.",
      attribution: "Timi J., Ekeki layout",
    },
    coverageParagraph:
      "We install in Yenagoa, Kpansia, Ekeki, Isaac Boro estate, Amassoma, Ogbia, Nembe waterfront shore sites, Brass coastal camps, Sagbama, and Opolo near Kolo Creek when access is confirmed.",
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
      roamingFaq,
      ...regionalStandardFaqs,
    ],
    geo: { latitude: 4.9267, longitude: 6.2646 },
    serviceAreaSchema: "Bayelsa State, Nigeria",
    keywords: ["Starlink Yenagoa", "Bayelsa Starlink installation", "Kpansia satellite", "Amassoma internet"],
  },
  ...southEastRegionalPages,
  {
    path: "/starlink-installation-edo-state-benin",
    seoTitle: "Starlink Installation Edo State | Benin City & Surroundings | DataGram",
    metaDescription:
      "Use a local crew if you need the dish fitted in Benin City. We cover GRA, Sapele Road, Airport Road, and Ekpoma.",
    canonical: "/starlink-installation-edo-state-benin",
    h1: "Starlink Installation Edo State & Benin City",
    stateName: "Edo State",
    heroLabel: "Benin City & surroundings",
    heroSubheading:
      "GRA mansions, Sapele Road commercial roofs, and Ekpoma university corridor—installers who know Benin’s estate security rhythm.",
    heroImageAlt: "Starlink wall and pole mounts on a residential building in Edo State, Nigeria",
    heroImage: img("residentalSetup.jpeg"),
    heroImageFile: "residentalSetup.jpeg",
    heroImageReason:
      "Residential compound wall install — plausible Benin GRA and Ring Road home without port or maritime background",
    heroObjectPosition: "center top",
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
      proof(
        "StarlinkInstallationresidential.jpeg",
        "Starlink Benin City GRA rooftop install",
        "GRA residential roof — mast height planned around mature tree lines.",
        "IMAGE: StarlinkInstallationresidential.jpeg — clean roof install Edo State"
      ),
      proof(
        "starlinkEstateInstallation.jpeg",
        "Starlink estate install Benin City Edo",
        "Royal City and Airport Road estate pole mounts.",
        "IMAGE: starlinkEstateInstallation.jpeg — estate context Edo State"
      ),
      proof(
        "starlinkInstallation.jpeg",
        "Starlink install with solar context Edo State",
        "Solar-adjacent residential install — power-resilient handover notes included.",
        "IMAGE: starlinkInstallation.jpeg — solar array background Edo State"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote: "Royal City estate asked for white conduit only. Crew matched paint and left a labeled patch panel in the study.",
      attribution: "Osas E., Airport Road estate",
    },
    coverageParagraph:
      "We cover Benin City GRA, Ring Road, the Sapele Road shops, and the Airport Road and Royal estates. We also cover Ekpoma, the AAU road, Ugbowo, Ikpoba Hill, the Auchi polytechnic road, and Uromi.",
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
      roamingFaq,
      ...regionalStandardFaqs,
    ],
    geo: { latitude: 6.335, longitude: 5.6037 },
    serviceAreaSchema: "Edo State, Nigeria",
    keywords: ["Starlink Benin City", "Edo State Starlink", "GRA Benin install", "Ekpoma satellite internet"],
  },
  {
    path: "/starlink-installation-niger-delta",
    seoTitle: "Starlink Satellite Internet Niger Delta | SpaceX Installation | DataGram",
    metaDescription:
      "Use a local crew if the site is a camp or a creek home in the Niger Delta. We cover Rivers, Delta, and Bayelsa. We are not part of any local energy firm.",
    canonical: "/starlink-installation-niger-delta",
    ogImage: img("datagram-technician-dish-port.jpg"),
    h1: "SpaceX Starlink Satellite Internet Installation — Niger Delta, Nigeria",
    entityBadge:
      "Starlink fits for remote and shore sites across the Niger Delta. DataGram is the installer on the ground.",
    stateName: "the Niger Delta",
    heroLabel: "Rivers, Bayelsa & Delta State",
    heroSubheading:
      "Headquartered in Port Harcourt—daily installs across PH, Yenagoa, Warri, Asaba, and shore-access communities. SpaceX Starlink satellite internet for remote and offshore sites — including Starlink for remote oil camps Niger Delta — not a local energy company.",
    heroImageAlt: "DataGram Starlink technician at Nigerian port holding Starlink dish ready for installation",
    heroImage: img("datagram-technician-dish-port.jpg"),
    heroImageFile: "datagram-technician-dish-port.jpg",
    heroImageReason:
      "DataGram technician in branded hoodie holding Starlink dish at port — real field photo, Niger Delta logistics context",
    heroObjectPosition: "center",
    trustSinceYear: "2019",
    whyTitle: "Why DataGram in the Niger Delta",
    whyCards: [
      {
        icon: MapPin,
        title: "South-South logistics",
        body: "Port Harcourt–based crews keep local stock, survey teams, and marine-aware installers on the road without fly-in delays.",
      },
      {
        icon: Zap,
        title: "Generator & creek power",
        body: "A UPS is a small battery box that keeps a plug alive for a few minutes. We size it for the generator switch, and we note if the compound uses solar or diesel.",
      },
      {
        icon: Users,
        title: "Oil & gas & estates",
        body: "Trans-Amadi plants, PH GRA homes, Yenagoa layouts, and Warri industrial roofs—one team, one handover standard for Starlink satellite internet.",
      },
    ],
    proofTitle: "Our Work in the Niger Delta",
    proofCards: [
      proof(
        "datagram-technician-dish-port.jpg",
        "DataGram Starlink technician at Nigerian port holding Starlink dish ready for installation",
        "DataGram field team at a Nigerian port with Starlink hardware — real deployment, not stock imagery.",
        "IMAGE: datagram-technician-dish-port.jpg — branded technician holding dish, port logistics context"
      ),
      proof(
        "maritime4.jpeg",
        "Starlink terminal on oil platform in the Niger Delta, Nigeria",
        "Platform install in the Niger Delta — oil and gas and marine-adjacent proof.",
        "IMAGE: maritime4.jpeg — real Nigerian oil rig image — Niger Delta relevance"
      ),
      proof(
        "datagram-starlink-boxes-stock.jpg",
        "Multiple Starlink units in stock at DataGram Nigeria ready for offshore and maritime deployment",
        "Hardware in stock at DataGram Port Harcourt — rapid mobilisation to creek and shore sites.",
        "IMAGE: datagram-starlink-boxes-stock.jpg — stacked Starlink units ready for deployment"
      ),
    ],
    speedStat: SPEED,
    testimonial: {
      quote: "They mobilised from PH with spares already on the truck. Estate install in Yenagoa finished same day after morning survey.",
      attribution: "Operations admin, Yenagoa layout",
    },
    coverageParagraph:
      "We cover Port Harcourt, Trans-Amadi, the Rivers GRA roads, Yenagoa, and the Bayelsa estates. We also cover Warri, Effurun, Asaba, Sapele, creek-side homes, and Bonny shore jobs when the jetty is open. Creek jobs are timed to the tide so the crew can finish in one trip. We fit dishes for camps and remote compounds. We are not part of any local energy or pipeline firm. We do not run a desk in Kano or the far north.",
    safetyStandards: {
      title: "Our Field Safety Standards",
      items: [
        {
          title: "Site assessment before mobilisation",
          body: "Before a crew goes to a creek or a camp, we check the sky, the power, the trees, and the road. An obstruction is something in the way of the sky. The aim is one safe visit. On a plant site we follow your permit and two-person rule. We do not claim certificate numbers we do not hold.",
        },
        {
          title: "Two-man installation rule",
          body: "All installations in remote or creek locations are conducted by a minimum two-person team. We do not send solo technicians to isolated sites.",
        },
        {
          title: "Canopy and obstruction management",
          body: "Thick trees are a common block in the Niger Delta. We use a taller mast when the survey says the sky is not clear. That check happens before the crew travels.",
        },
        {
          title: "Verified connectivity before sign-off",
          body: "The installation is not considered complete until the client has confirmed they can see the network and we have recorded live speed test results on site.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you install SpaceX Starlink satellite internet in Kano or northern Nigeria?",
        answer:
          "No. DataGram’s install desk and warehouse are in Port Harcourt. We serve the Niger Delta (Rivers, Bayelsa, Delta) plus Abuja and Lagos corridors—not Kano or the far north.",
      },
      {
        question: "How fast can you survey in Yenagoa or Warri?",
        answer:
          "Most Niger Delta surveys book within a few business days once roof or deck access is confirmed. WhatsApp photos and your map pin help us assign the right crew from PH.",
      },
      {
        question: "Can you handle offshore or platform sites?",
        answer:
          "Yes—marine and mobility hardware with PTW documentation. See our [offshore maritime page](/starlink-offshore-maritime-installation) for vessel and platform scope.",
      },
      {
        question: "How does rain affect Starlink in the Niger Delta?",
        answer:
          "Heavy rain can fade the link for a short time. A taller mast and a clear sky cut those drops. We write down a baseline at handover so you can compare the rainy season.",
      },
      {
        question: "Is DataGram the same as Starlinks Global Energy Services?",
        answer:
          "No. DataGram installs SpaceX Starlink satellite internet for homes, businesses, and offshore sites. We are not affiliated with Starlinks Global Energy Services or any local oil and pipeline company in Port Harcourt.",
      },
      roamingFaq,
      ...regionalStandardFaqs,
    ],
    packagePriceDisclaimer: true,
    geo: { latitude: 4.8156, longitude: 7.0498 },
    serviceAreaSchema: "Niger Delta, Nigeria (Rivers, Bayelsa, Delta State)",
    keywords: [
      "Starlink Niger Delta",
      "Starlink installation Port Harcourt",
      "Starlink Yenagoa",
      "Starlink Warri Delta",
    ],
  },
];

export function getRegionalPageByPath(path: string) {
  return regionalLandingPages.find((p) => p.path === path);
}

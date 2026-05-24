import { Clock, MapPin, Truck } from "lucide-react";
import type { RegionalLandingConfig } from "./types";

const missingProof = (alt: string, caption: string, comment: string) => ({
  src: "/placeholder.svg",
  imageFile: "placeholder.svg",
  alt,
  caption,
  imageComment: comment,
  objectPosition: "center",
});

const SPEED = {
  label: "Typical performance range",
  down: "50 – 1,000 Mbps",
  up: "10 – 100 Mbps",
  latency: "20 – 33 ms",
};

const SPEED_NOTE = "Actual speeds vary by subscription plan and site conditions.";

const northernFaq = {
  question: "Do you install Starlink in northern Nigeria?",
  answer:
    "DataGram's primary coverage is South-South and South-East Nigeria. We do not operate a standard installation desk in core northern states like Kano or Kaduna. Installations in northern regions are available on special request and subject to logistics assessment. Contact us to discuss your specific location.",
};

function southEastFaqs(stateName: string) {
  return [
    {
      question: `How much does Starlink installation cost in ${stateName}?`,
      answer: `Installation in ${stateName} typically costs between ₦10,000 and ₦150,000 depending on your site's location, the complexity of the mount, and distance from our nearest crew. Full hardware and setup costs range from ₦450,000 to ₦1,060,000 depending on scope. Contact us for a site-specific quote.`,
    },
    {
      question: `How long does a Starlink installation take in ${stateName}?`,
      answer: `Most residential installations in ${stateName} are completed in one visit once the site survey is signed off. Surveys are typically done within 1–2 days of enquiry. Complex or commercial sites may require a second visit for cable management and WiFi distribution.`,
    },
    {
      question: `Can businesses in ${stateName} get Starlink installed?`,
      answer: `Yes. DataGram installs Starlink for businesses, NGOs, schools, and commercial properties across ${stateName}. Enterprise installations include cable tray routing, WiFi distribution, and a baseline speed report. Contact us for a proposal.`,
    },
    {
      question: "Can businesses request after-hours installation?",
      answer:
        "No, we do not offer after-hours installation. All installations are scheduled during standard business hours.",
    },
    northernFaq,
  ];
}

export const southEastRegionalPages: RegionalLandingConfig[] = [
  {
    path: "/starlink-installation-abia-state",
    seoTitle: "Starlink Installation Abia State | Umuahia, Aba & Beyond | DataGram",
    metaDescription:
      "DataGram installs Starlink across Abia State including Umuahia, Aba, Aba North, and Osisioma Ngwa. Certified installers, fast deployment, full support.",
    canonical: "/starlink-installation-abia-state",
    h1: "Starlink Installation Abia State",
    stateName: "Abia State",
    heroLabel: "Umuahia, Aba & beyond",
    heroSubheading:
      "From Umuahia GRA to Aba industrial estates, DataGram handles Starlink installation, cable routing, and activation across Abia State.",
    heroImageAlt: "Starlink installation on rooftop in Abia State, Nigeria",
    heroImageMissing: true,
    trustSinceYear: "2022",
    whyTitle: "Why DataGram in Abia State",
    whyCards: [
      {
        icon: MapPin,
        title: "Local knowledge",
        body:
          "Our crews work regularly in South-East Nigeria and understand compound layouts, generator interference, and tight rooftop access in dense areas. In Abia we plan installs across Umuahia GRA, Aba North, and Ariaria with estate letters ready before drill day.",
      },
      {
        icon: Truck,
        title: "Coverage area",
        body:
          "We cover Umuahia and its GRA, Aba, Aba North, Aba South, Osisioma Ngwa, Arochukwu, Bende, Ukwa East, and Ikwuano. Commercial rooftops in Aba and residential compounds in Umuahia both get survey-first routing and documented handover.",
      },
      {
        icon: Clock,
        title: "Fast deployment",
        body:
          "Surveys book quickly and most installs finish within 1–3 days of survey sign-off. Our Port Harcourt operational base cuts turnaround versus installers flying in from Lagos or Abuja.",
      },
    ],
    proofTitle: "Our Work in Abia State",
    proofCards: [
      missingProof(
        "Starlink dish on rooftop in Aba commercial area, Abia State",
        "Aba commercial rooftop — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Abia State. Suggest: rooftop dish in Aba commercial area"
      ),
      missingProof(
        "Starlink compound installation in Umuahia GRA, Abia State",
        "Umuahia GRA compound — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Abia State. Suggest: compound installation in Umuahia GRA"
      ),
      missingProof(
        "Starlink wall mount residential install Abia State",
        "Residential mount Abia — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Abia State. Suggest: residential wall or roof mount"
      ),
    ],
    speedStat: SPEED,
    speedStatNote: SPEED_NOTE,
    testimonial: {
      quote:
        "Survey was next morning and the dish was live before the weekend. Video calls to Lagos stayed stable through NEPA flicker.",
      attribution: "Chukwuemeka A., Umuahia GRA",
    },
    coverageParagraph:
      "DataGram covers Starlink installation across Abia State including Umuahia and its GRA, Aba, Aba North, Aba South, Osisioma Ngwa, Arochukwu, Bende, Ukwa East, and Ikwuano. Whether you are in a commercial estate in Aba or a residential compound in Umuahia, our crews plan cable routes and mounting structures to suit the site.",
    relatedLinks: [
      { label: "Starlink installation in Anambra State", href: "/starlink-installation-anambra-state" },
      { label: "Enterprise Starlink for Nigeria", href: "/starlink-enterprise-nigeria" },
    ],
    faqs: southEastFaqs("Abia State"),
    geo: { latitude: 5.532, longitude: 7.486 },
    serviceAreaSchema: "Abia State, Nigeria",
    keywords: ["Starlink Abia State", "Starlink installation Aba", "Starlink Umuahia", "Osisioma Ngwa Starlink"],
  },
  {
    path: "/starlink-installation-anambra-state",
    seoTitle: "Starlink Installation Anambra State | Awka, Onitsha & Nnewi | DataGram",
    metaDescription:
      "DataGram provides Starlink installation across Anambra State including Awka, Onitsha, Nnewi, and Ekwulobia. Certified install and full support.",
    canonical: "/starlink-installation-anambra-state",
    h1: "Starlink Installation Anambra State",
    stateName: "Anambra State",
    heroLabel: "Awka, Onitsha & Nnewi",
    heroSubheading:
      "DataGram installs and activates Starlink across Awka, Onitsha, Nnewi, and surrounding LGAs—with crews that understand Anambra commercial estates and residential compounds.",
    heroImageAlt: "Starlink installation in Anambra State, Nigeria",
    heroImageMissing: true,
    trustSinceYear: "2022",
    whyTitle: "Why DataGram in Anambra State",
    whyCards: [
      {
        icon: MapPin,
        title: "Local knowledge",
        body:
          "South-East field teams know generator noise, shared walls in trading districts, and estate security rules. We install regularly in Onitsha commercial corridors, Nnewi industrial layouts, and Awka government-residential zones.",
      },
      {
        icon: Truck,
        title: "Coverage area",
        body:
          "Our coverage in Anambra includes Awka, Awka South, Onitsha, Nnewi, Ekwulobia, Aguata, Ihiala, Ogidi, Anaocha, and Idemili North—from Onitsha trading estates to schools and offices in Awka.",
      },
      {
        icon: Clock,
        title: "Fast deployment",
        body:
          "Most surveys schedule within days and installs complete 1–3 days after sign-off. Mobilisation from our South-South base keeps Anambra jobs off Lagos fly-in delays.",
      },
    ],
    proofTitle: "Our Work in Anambra State",
    proofCards: [
      missingProof(
        "Starlink dish on building in Onitsha, Anambra State",
        "Onitsha commercial install — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Anambra State. Suggest: dish on building in Onitsha or Nnewi"
      ),
      missingProof(
        "Starlink estate install in Awka, Anambra State",
        "Awka estate install — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Anambra State. Suggest: estate install in Awka"
      ),
      missingProof(
        "Starlink rooftop mount Anambra State Nigeria",
        "Anambra residential roof — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Anambra State. Suggest: pole or rooftop mount"
      ),
    ],
    speedStat: SPEED,
    speedStatNote: SPEED_NOTE,
    testimonial: {
      quote:
        "They routed cable through the shop ceiling and left a labelled panel. Uplink held through market generator changeover.",
      attribution: "Obiageli N., Awka South",
    },
    coverageParagraph:
      "Our coverage in Anambra includes Awka, Awka South, Onitsha, Nnewi, Ekwulobia, Aguata, Ihiala, Ogidi, Anaocha, and Idemili North. We work in both commercial and residential environments — from Onitsha's trading estates to schools and offices in Awka.",
    relatedLinks: [
      { label: "Starlink installation in Enugu State", href: "/starlink-installation-enugu-state" },
      { label: "How much does Starlink cost in Nigeria?", href: "/blog/how-much-does-starlink-installation-cost-nigeria-2026" },
    ],
    faqs: southEastFaqs("Anambra State"),
    geo: { latitude: 6.2104, longitude: 7.0699 },
    serviceAreaSchema: "Anambra State, Nigeria",
    keywords: ["Starlink Anambra", "Starlink Onitsha", "Starlink Awka", "Nnewi Starlink installation"],
  },
  {
    path: "/starlink-installation-imo-state-owerri",
    seoTitle: "Starlink Installation Imo State | Owerri & All LGAs | DataGram",
    metaDescription:
      "DataGram installs Starlink in Imo State including Owerri, Orlu, Okigwe, and surrounding LGAs. Certified installers, same-day survey available.",
    canonical: "/starlink-installation-imo-state-owerri",
    h1: "Starlink Installation Imo State",
    stateName: "Imo State",
    heroLabel: "Owerri & all LGAs",
    heroSubheading:
      "DataGram installs and activates Starlink across Owerri, Orlu, Okigwe, and surrounding LGAs—with field crews that understand South-East site conditions.",
    heroImageAlt: "Starlink installation on rooftop in Imo State, Nigeria",
    heroImageMissing: true,
    trustSinceYear: "2022",
    whyTitle: "Why DataGram in Imo State",
    whyCards: [
      {
        icon: MapPin,
        title: "Local knowledge",
        body:
          "We understand GRA Owerri estate layouts, church-hall upload loads, and generator transfer in compounds. Crews work in New Owerri, Owerri North, and Owerri West with security-friendly scope letters.",
      },
      {
        icon: Truck,
        title: "Coverage area",
        body:
          "We cover Owerri and its satellite towns — New Owerri, Owerri North, Owerri West — as well as Orlu, Okigwe, Mbaise, Oguta, and Ngor Okpala. Residential compounds and commercial properties in the Owerri metropolis are both in scope.",
      },
      {
        icon: Clock,
        title: "Fast deployment",
        body:
          "Surveys typically land within 1–2 days of enquiry; installs follow 1–3 days after sign-off. South-South logistics from Port Harcourt beat distant installers for Imo turnaround.",
      },
    ],
    proofTitle: "Our Work in Imo State",
    proofCards: [
      missingProof(
        "Starlink rooftop install in New Owerri, Imo State",
        "New Owerri rooftop — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Imo State. Suggest: rooftop install in New Owerri"
      ),
      missingProof(
        "Starlink compound setup in Orlu, Imo State",
        "Orlu compound setup — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Imo State. Suggest: compound setup in Orlu or Okigwe"
      ),
      missingProof(
        "Starlink pole mount Imo State Nigeria",
        "Owerri estate mount — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Imo State. Suggest: pole mount in Owerri estate"
      ),
    ],
    speedStat: SPEED,
    speedStatNote: SPEED_NOTE,
    testimonial: {
      quote:
        "Install team finished same day after survey. Office uploads to cloud are faster than our old LTE link.",
      attribution: "Chidi O., New Owerri",
    },
    coverageParagraph:
      "DataGram installs Starlink across Owerri, New Owerri, Owerri North, Owerri West, Orlu, Okigwe, Mbaise, Oguta, and Ngor Okpala. We are familiar with GRA Owerri estate layouts and have completed installs in both residential compounds and commercial properties in the Owerri metropolis.",
    relatedLinks: [
      { label: "Starlink installation in Abia State", href: "/starlink-installation-abia-state" },
      { label: "Home Starlink installation Nigeria", href: "/starlink-home-installation" },
    ],
    faqs: southEastFaqs("Imo State"),
    geo: { latitude: 5.4836, longitude: 7.0333 },
    serviceAreaSchema: "Imo State, Nigeria",
    keywords: ["Starlink Imo State", "Starlink Owerri", "Orlu Starlink", "Okigwe satellite internet"],
  },
  {
    path: "/starlink-installation-ebonyi-state",
    seoTitle: "Starlink Installation Ebonyi State | Abakaliki & Beyond | DataGram",
    metaDescription:
      "DataGram covers Starlink installation in Ebonyi State including Abakaliki, Afikpo, Onueke, and surrounding areas. Expert install and support.",
    canonical: "/starlink-installation-ebonyi-state",
    h1: "Starlink Installation Ebonyi State",
    stateName: "Ebonyi State",
    heroLabel: "Abakaliki & beyond",
    heroSubheading:
      "DataGram installs Starlink across Abakaliki, Afikpo, Onueke, and surrounding LGAs—with surveys planned for sky view and generator-backed power on semi-urban sites.",
    heroImageAlt: "Starlink installation in Ebonyi State, Nigeria",
    heroImageMissing: true,
    trustSinceYear: "2022",
    whyTitle: "Why DataGram in Ebonyi State",
    whyCards: [
      {
        icon: MapPin,
        title: "Local knowledge",
        body:
          "Ebonyi mixes urban blocks and semi-rural compounds where mast height matters. Our crews plan for generator use, seasonal rain, and rooftop access in Abakaliki and Afikpo corridors.",
      },
      {
        icon: Truck,
        title: "Coverage area",
        body:
          "We cover Abakaliki and surrounding areas including Afikpo, Afikpo North, Afikpo South, Onueke, Ezza North, Ishielu, Ohaukwu, and Ebonyi LGA. Urban shops and hillside homes both get honest obstruction scores before hardware order.",
      },
      {
        icon: Clock,
        title: "Fast deployment",
        body:
          "Surveys book within days; installs typically complete 1–3 days after approval. Port Harcourt–based logistics reduce wait times for Ebonyi mobilisation.",
      },
    ],
    proofTitle: "Our Work in Ebonyi State",
    proofCards: [
      missingProof(
        "Starlink installation in Abakaliki, Ebonyi State",
        "Abakaliki install — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Ebonyi State. Suggest: installation in Abakaliki"
      ),
      missingProof(
        "Starlink rural semi-urban setup Ebonyi State Nigeria",
        "Semi-urban terrain install — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Ebonyi State. Suggest: rural/semi-urban setup showing terrain"
      ),
      missingProof(
        "Starlink dish mount Ebonyi State",
        "Afikpo corridor — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Ebonyi State. Suggest: rooftop or pole mount in Afikpo area"
      ),
    ],
    speedStat: SPEED,
    speedStatNote: SPEED_NOTE,
    testimonial: {
      quote:
        "Honest survey on tree line saved us buying the wrong mast height. Connection stable after install in Abakaliki.",
      attribution: "Chigozie E., Abakaliki",
    },
    coverageParagraph:
      "We cover Abakaliki and its surrounding areas including Afikpo, Afikpo North, Afikpo South, Onueke, Ezza North, Ishielu, Ohaukwu, and Ebonyi LGA. Ebonyi's mix of urban and semi-rural sites means we plan installations carefully for sky-view clearance and power backup where generator use is common.",
    relatedLinks: [
      { label: "Starlink installation in Enugu State", href: "/starlink-installation-enugu-state" },
      { label: "Power backup for Starlink in Nigeria", href: "/blog/power-backup-starlink-nigeria" },
    ],
    faqs: southEastFaqs("Ebonyi State"),
    geo: { latitude: 6.3249, longitude: 8.1137 },
    serviceAreaSchema: "Ebonyi State, Nigeria",
    keywords: ["Starlink Ebonyi", "Starlink Abakaliki", "Afikpo Starlink", "Ebonyi State installation"],
  },
  {
    path: "/starlink-installation-enugu-state",
    seoTitle: "Starlink Installation Enugu State | Coal City Coverage | DataGram",
    metaDescription:
      "DataGram installs Starlink across Enugu State including Enugu city, Nsukka, Agbani, and Oji River. Certified installers, fast deployment.",
    canonical: "/starlink-installation-enugu-state",
    h1: "Starlink Installation Enugu State",
    stateName: "Enugu State",
    heroLabel: "Coal City coverage",
    heroSubheading:
      "DataGram installs and activates Starlink across Enugu, Nsukka, Agbani, and surrounding LGAs — with field crews that understand South-East site conditions.",
    heroImageAlt: "Starlink dish on rooftop in Enugu State, Nigeria",
    heroImageMissing: true,
    trustSinceYear: "2022",
    whyTitle: "Why DataGram in Enugu State",
    whyCards: [
      {
        icon: MapPin,
        title: "Local knowledge",
        body:
          "Coal City rooflines mix duplex terraces, hillside plots, and university-adjacent housing. We survey Independence Layout, Trans-Ekulu, and Nsukka with mast-height plans suited to storms and tree growth.",
      },
      {
        icon: Truck,
        title: "Coverage area",
        body:
          "DataGram covers Enugu city including Independence Layout, GRA Enugu, and Trans-Ekulu, as well as Nsukka, Agbani, Oji River, Awgu, and Igbo-Eze. Commercial properties in the metropolis and university environments in Nsukka are both in scope.",
      },
      {
        icon: Clock,
        title: "Fast deployment",
        body:
          "Surveys are booked quickly; residential installs often complete within 1–3 days of sign-off. South-South crews mobilise faster than Lagos-based fly-in teams.",
      },
    ],
    proofTitle: "Our Work in Enugu State",
    proofCards: [
      missingProof(
        "Starlink rooftop dish in GRA Enugu, Enugu State",
        "GRA Enugu rooftop — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Enugu State. Suggest: rooftop dish in GRA Enugu or Trans-Ekulu"
      ),
      missingProof(
        "Starlink install near university area Nsukka Enugu State",
        "Nsukka university area — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Enugu State. Suggest: university-area install in Nsukka"
      ),
      missingProof(
        "Starlink mount Trans-Ekulu Enugu State",
        "Trans-Ekulu hillside — photo pending.",
        "MISSING IMAGE: Starlink installation photo in Enugu State. Suggest: hillside or terrace mount"
      ),
    ],
    speedStat: SPEED,
    speedStatNote: SPEED_NOTE,
    testimonial: {
      quote:
        "Duplex needed two SSIDs for tenants. Crew documented VLAN handover and speeds at each floor.",
      attribution: "Ngozi I., Independence Layout, Enugu",
    },
    coverageParagraph:
      "DataGram covers Enugu city including Independence Layout, GRA Enugu, and Trans-Ekulu, as well as Nsukka, Agbani, Oji River, Awgu, and Igbo-Eze. We have completed installs in university environments in Nsukka and commercial properties in the Enugu metropolis.",
    relatedLinks: [
      { label: "Starlink installation in Abia State", href: "/starlink-installation-abia-state" },
      { label: "Enterprise Starlink for Nigeria", href: "/starlink-enterprise-nigeria" },
    ],
    faqs: southEastFaqs("Enugu State"),
    geo: { latitude: 6.4584, longitude: 7.5464 },
    serviceAreaSchema: "Enugu State, Nigeria",
    keywords: ["Starlink Enugu State", "Coal City Starlink", "Nsukka Starlink", "Independence Layout install"],
  },
];

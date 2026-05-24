/** Cards for /locations/all — links to regional Starlink landing pages. */
export type AllLocationCard = {
  title: string;
  regionLabel: string;
  description: string;
  href: string;
};

export const NORTHERN_STATES_NOTICE =
  "DataGram's field operations are concentrated in South-South and South-East Nigeria. We do not maintain a standard installation desk in core northern states. If you are in Kano, Kaduna, or surrounding regions, contact us — installations are available on special request subject to logistics.";

export const allLocationCards: AllLocationCard[] = [
  {
    title: "Abuja",
    regionLabel: "Federal Capital Territory",
    description:
      "FCT installs for embassies, estates, and offices where drilling rules and roof access vary by district. We survey Maitama, Wuse, Gwarinpa, and airport-corridor sites before hardware ships.",
    href: "/starlink-installation-abuja",
  },
  {
    title: "Lagos",
    regionLabel: "Lagos State",
    description:
      "Island high-rises, Lekki estates, and mainland factories need humidity-rated cable and landlord coordination. DataGram runs same-week surveys when roof photos and estate rules are shared upfront.",
    href: "/starlink-installation-lagos",
  },
  {
    title: "Port Harcourt",
    regionLabel: "Rivers State",
    description:
      "Our headquarters corridor covers Trans-Amadi plants, PH GRA compounds, and waterfront communities. Local stock and crews reduce wait times across Rivers compared with fly-in installers.",
    href: "/starlink-installation-rivers-state-port-harcourt",
  },
  {
    title: "Niger Delta",
    regionLabel: "Rivers, Bayelsa & Delta State",
    description:
      "PH-based teams serve Yenagoa, Warri, Asaba, and creek-adjacent shore properties. Marine-adjacent installs use humidity-rated outdoor runs and documented handover for facility managers.",
    href: "/starlink-installation-niger-delta",
  },
  {
    title: "Delta State",
    regionLabel: "Delta State",
    description:
      "Asaba capital roofs, Warri–Effurun industrial layouts, and riverine compounds get survey-first planning for sky view and generator transfer. Multi-town projects are quoted with travel shown upfront.",
    href: "/starlink-installation-delta-state",
  },
  {
    title: "Bayelsa / Yenagoa",
    regionLabel: "Bayelsa State",
    description:
      "Yenagoa estates and creek communities mobilise from our Port Harcourt hub with sealed outdoor cable and spare parts on the truck. Humidity and estate curfews are planned at survey.",
    href: "/starlink-installation-bayelsa-yenagoa",
  },
  {
    title: "Imo State / Owerri",
    regionLabel: "Imo State",
    description:
      "Owerri metropolis, Orlu shops, and Okigwe hillside homes get mounts sized for compound layouts and upload load. Church halls and multi-tenant sites disclose bandwidth needs during survey.",
    href: "/starlink-installation-imo-state-owerri",
  },
  {
    title: "Abia State",
    regionLabel: "Abia State",
    description:
      "Umuahia GRA compounds and Aba commercial rooftops need RF-aware placement and market-hour access windows. We document handover for civil-service and trading-district clients.",
    href: "/starlink-installation-abia-state",
  },
  {
    title: "Anambra State",
    regionLabel: "Anambra State",
    description:
      "Awka offices, Onitsha trading estates, and Nnewi industrial roofs are in scope with estate letters and conduit plans where required. Surveys book quickly from South-South logistics.",
    href: "/starlink-installation-anambra-state",
  },
  {
    title: "Ebonyi State",
    regionLabel: "Ebonyi State",
    description:
      "Abakaliki urban blocks and Afikpo corridors get honest obstruction scores before mast height is set. Semi-rural sites plan for generator-backed power and seasonal rain.",
    href: "/starlink-installation-ebonyi-state",
  },
  {
    title: "Enugu State",
    regionLabel: "Enugu State",
    description:
      "Coal City duplexes, Trans-Ekulu hills, and Nsukka university-adjacent housing need mast-height planning and storm-season grounding. Commercial and residential handover packs are standard.",
    href: "/starlink-installation-enugu-state",
  },
  {
    title: "Edo State / Benin City",
    regionLabel: "Edo State",
    description:
      "Benin GRA trees, Sapele Road commercial roofs, and Ekpoma university roads each get survey-first routing. Estate security rhythm and conduit colour rules are noted before drill day.",
    href: "/starlink-installation-edo-state-benin",
  },
];

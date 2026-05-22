export type ServiceLocation = {
  slug: string;
  name: string;
  regionLabel: string;
  title: string;
  metaDescription: string;
  /** Primary keyword phrase for H1 support */
  headline: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  relatedServiceSlugs: string[];
};

export const serviceLocations: ServiceLocation[] = [
  {
    slug: "abuja",
    name: "Abuja",
    regionLabel: "Federal Capital Territory",
    title: "Starlink Installation Abuja | Certified Installers | DataGram Nigeria",
    metaDescription:
      "Book Starlink installation in Abuja, FCT. Site surveys, rooftop mounting, mesh WiFi, and business failover by DataGram. Get a free site survey today.",
    headline: "Starlink installation in Abuja by certified DataGram installers",
    intro:
      "Abuja homes, embassies, schools, and remote offices need dependable internet for video calls, cloud apps, and security systems. DataGram provides Starlink installation across the FCT, from Maitama and Wuse to Gwarinpa and airport logistics zones. We speak clearly about sky view, cable routes, and power resilience so you know what to expect before we climb the roof.",
    sections: [
      {
        heading: "Where we install in Abuja",
        paragraphs: [
          "We routinely work in central districts and growing suburbs where roof access varies from flat concrete slabs to pitched tiles. If your estate has strict drilling rules, we coordinate approvals and often propose non-destructive ballast mounts when structurally appropriate.",
          "Voice searches like “Who installs Starlink in Abuja?” usually mean customers want a technician today. Keep our WhatsApp handy with your PIN and photos of your roof line so we can respond quickly with a survey slot.",
        ],
      },
      {
        heading: "Business and enterprise Starlink in the FCT",
        paragraphs: [
          "Organizations pair Starlink with fiber failover, VLANs for finance and operations teams, and long-range links to outbuildings. Tell us how many users rely on VPN, what uptime you need, and whether generators cycle daily so we can engineer clean power paths for routers and radios.",
        ],
      },
    ],
    relatedServiceSlugs: ["sales-installation", "whole-premises", "enterprise-plans"],
  },
  {
    slug: "lagos",
    name: "Lagos",
    regionLabel: "Lagos State",
    title: "Starlink Installation Lagos | Lekki, VI, Ikeja | DataGram Nigeria",
    metaDescription:
      "Professional Starlink installation Lagos-wide: Lekki, Victoria Island, Ikeja, Surulere, and beyond. Hardware, mounting, mesh WiFi, and support. Book a survey today.",
    headline: "Starlink installation across Lagos with same-week surveys on request",
    intro:
      "Lagos customers ask for quiet cable runs, surge-safe power, and WiFi that survives generator cycles. DataGram installs Starlink for apartments with landlord coordination, duplexes, factories on the mainland, and creative studios on the island. We plan for salt air near the coast and tight cable trays in commercial risers.",
    sections: [
      {
        heading: "Neighborhoods we serve",
        paragraphs: [
          "We cover Victoria Island, Lekki Phase 1 and 2, Ajah, Yaba, Surulere, Ikeja GRA, Magodo, and expanding corridors toward Epe. If your estate has height limits for masts, we model obstruction maps early so you do not buy the wrong dish variant.",
          "Customers often search “buy Starlink Nigeria” after seeing ads. We help you pick the correct hardware tier, then handle mounting and activation so your first week online is smooth.",
        ],
      },
      {
        heading: "Offices, studios, and hybrid work",
        paragraphs: [
          "Hybrid teams need stable Zoom and reliable uploads. We segment guest WiFi, prioritize VoIP where possible, and document IP schemes for your IT vendor. Ask about combining Starlink with existing fiber for automatic failover.",
        ],
      },
    ],
    relatedServiceSlugs: ["sales-installation", "long-range", "backup-power"],
  },
  {
    slug: "port-harcourt",
    name: "Port Harcourt",
    regionLabel: "Rivers State",
    title: "Starlink Installation Port Harcourt | DataGram Rivers State",
    metaDescription:
      "Starlink installers in Port Harcourt and Rivers State. Rooftop surveys, weatherproof cabling, mesh WiFi, and backup power. Call DataGram for a free site survey today.",
    headline: "Starlink installation Port Harcourt customers trust for clean cable work",
    intro:
      "Port Harcourt’s mix of industrial plants, residential estates, and riverside properties demands flexible mounting and honest rain-season expectations. Our local crews understand estate security protocols and work with facility managers to keep installs tidy and well documented.",
    sections: [
      {
        heading: "Industrial and residential coverage",
        paragraphs: [
          "From Trans Amadi layouts to newer estates in Obio-Akpor, we align dishes for the best sky view while keeping cable shields grounded properly. Factories often add long-range links to gatehouses; homes may prioritize kid-safe cable routing and mesh for upstairs bedrooms.",
        ],
      },
    ],
    relatedServiceSlugs: ["sales-installation", "whole-premises", "wisp-setup"],
  },
  {
    slug: "niger-delta",
    name: "Niger Delta",
    regionLabel: "Rivers, Bayelsa & Delta State",
    title: "Starlink Installation Niger Delta | PH, Yenagoa, Warri | DataGram",
    metaDescription:
      "Starlink installation in the Niger Delta: Port Harcourt, Yenagoa, Warri, Asaba, and creek communities. Marine-aware crews from DataGram HQ in PH.",
    headline: "Starlink installation in the Niger Delta from our Port Harcourt operations base",
    intro:
      "DataGram is headquartered in Port Harcourt and serves the Niger Delta daily—Trans-Amadi plants, PH GRA estates, Yenagoa layouts, Warri–Effurun industrial roofs, Asaba capital installs, and shore-access creek compounds. We do not operate an install desk in Kano or northern Nigeria; our field strength is South-South logistics, humidity-rated outdoor cable, and marine-adjacent sites.",
    sections: [
      {
        heading: "Where we work in the Niger Delta",
        paragraphs: [
          "We cover Port Harcourt and Rivers State corridors, Bayelsa including Yenagoa and Amassoma, and Delta State from Asaba through Warri, Effurun, and Sapele. Offshore and OSV work uses our maritime install team—see the dedicated Niger Delta installation page for scope and survey booking.",
          "For estate and factory jobs we document handover for facility managers, size UPS for generator transfer, and route cable in UV conduit suited to coastal humidity.",
        ],
      },
      {
        heading: "Book a Niger Delta survey",
        paragraphs: [
          "WhatsApp your roof or deck photos, estate name, and map pin. We assign PH-based crews with local spares—no fly-in delay from Lagos unless you request a multi-city bundle.",
        ],
      },
    ],
    relatedServiceSlugs: ["sales-installation", "whole-premises", "backup-power"],
  },
];

export function getLocationBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return serviceLocations.find((l) => l.slug === slug);
}

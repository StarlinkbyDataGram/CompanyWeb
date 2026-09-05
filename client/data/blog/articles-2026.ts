/** Long-form SEO articles with slug routes — aggregated from phase modules. */
export type { SeoArticle, ArticleBlock, ArticleFaq } from "./article-types";
export { img, blocks, p, h2, h3, faqs } from "./article-types";

import type { SeoArticle } from "./article-types";
import { img } from "./article-types";
import { phase1Articles } from "./articles/phase1";
import { evergreenAArticles } from "./articles/evergreen-a";
import { evergreenBArticles } from "./articles/evergreen-b";
import { trendingAArticles } from "./articles/trending-a";
import { trendingBArticles } from "./articles/trending-b";
import { geoAArticles } from "./articles/geo-a";
import { geoBArticles } from "./articles/geo-b";
import { futureAArticles } from "./articles/future-a";
import { futureBArticles } from "./articles/future-b";
import { roamingPriorityArticles } from "./articles/roaming-priority";
import { enterpriseMaritimeB2bArticles } from "./articles/enterprise-maritime-b2b";
import { enterpriseMaritimeB2bMoreArticles } from "./articles/enterprise-maritime-b2b-more";
import { enterpriseMaritimeB2bFinalArticles } from "./articles/enterprise-maritime-b2b-final";
import { august2026SprintArticles } from "./articles/august-2026-sprint";
import { september2026SprintArticles } from "./articles/september-2026-sprint";

/** Legacy articles (pre-FAQ/block format) — migrated in place */
const legacyArticles: SeoArticle[] = [
  {
    slug: "how-much-does-starlink-installation-cost-nigeria-2026",
    title: "How much does Starlink installation cost in Nigeria in 2026?",
    excerpt:
      "What Starlink installation really costs in Nigeria in 2026—labour, hardware, and full project totals explained in plain naira.",
    metaDescription:
      "2026 Starlink installation cost Nigeria: ₦10k–₦150k labour, ₦450k–₦1.06M full setup. Clear ranges from DataGram installers.",
    author: "DataGram Nigeria",
    date: "2026-05-20",
    readTime: "9 min read",
    category: "Pricing",
    image: img("starlinkInstallation.jpeg"),
    imageAlt: "Starlink dish installation in Nigeria — DataGram",
    imageFile: "starlinkInstallation.jpeg",
    featured: true,
    serviceCta: {
      label: "Book a home survey",
      href: "/starlink-home-installation",
      blurb: "Residential estates and remote compounds—start with a sky-view survey before you buy hardware.",
    },
    paragraphs: [
      "If you are asking how much Starlink costs in Nigeria, split the budget into three parts: the kit and monthly subscription from Starlink, the installation labour on your site, and any extras your property needs—long cable runs, estate conduit, mesh WiFi, or UPS for NEPA flickers. One lump sum with no breakdown usually hides the items that cause rework.",
      "A professional survey is the sensible first spend. DataGram surveys in major cities start from about ₦85,000 depending on travel and roof access. You get obstruction notes, a mount recommendation, a cable route sketch, and a materials list you can show an estate manager or landlord before anyone drills.",
      "Installation Cost: ₦10,000 – ₦150,000. This depends on site logistics, terrain and topology, distance from our nearest deployment hub, complexity of the mount, and the overall scope of work on-site.",
      "Full Setup / Total Project Cost: ₦450,000 – ₦1,060,000. This covers the hardware kit, all cabling, mounting structure, configuration, and testing. Enterprise projects, multi-point deployments, and complex sites may exceed this range depending on scope.",
      "Estate rules change the bill without changing the dish. Lekki, Maitama, and newer Benin developments often require surface conduit in set colours, fixed drilling windows, and security escorts. Ask whether conduit, sealant restoration, and a scope letter for security are included in your quote or listed separately.",
      "Enterprise and NGO sites need a technical conversation, not a residential menu price. Dual-WAN failover, VLAN handoff to your firewall, rack mounting, and generator-aware UPS are quoted after survey. That is still cheaper than fixing a DIY roof leak or a cable run left in direct sun.",
      "Maritime and mobility hardware use different plan classes and mounts than a home rooftop kit. If you are on the water or on an OSV, budget for a marine survey and the correct mobility-rated components.",
      "Power is the line item Nigerians feel every week. A modest UPS on router and dish handles brief grid flickers; it does not replace hours without NEPA or fuel. Solar supplementation and larger UPS banks are separate engineering tasks with honest runtime targets.",
      "Monthly subscription pricing is set on Starlink's checkout and changes over time. Your installer should advise on plan class—residential versus business throughput, upload needs for CCTV, and whether [roaming](/faq) is worth the extra fee for your travel pattern. Roaming lets you use Starlink across different land regions globally, not only where you activated. It helps where local coverage is limited. It costs extra on top of your standard subscription.",
      "Compare quotes by deliverables: grounding photos, labelled patch panels, speed tests at your desk—not only beside the dish—and a written support path when rain fade spikes latency. Those documents matter for IT handover and donor reporting.",
      "DIY can work on a simple bungalow with a short cable run and safe ladder access. DIY fails when cables sit in sun on the facade, mounts miss torque for wind, or estates reject retrofits. Rework often costs more than a professional install would have from the start.",
      "When you request a 2026 quote, send roof photos, estate name, map pin, and whether you need VLANs or failover. Check our [home installation page](/starlink-home-installation), [Lagos coverage](/starlink-installation-lagos), and [FAQ](/faq) before you pay a deposit.",
      "The right price is one tied to a written scope—survey, materials, labour, power, and handover tests—so you know what done means before hardware ships.",
    ],
  },
  {
    slug: "starlink-vs-fibre-internet-lagos",
    title: "Starlink vs fibre internet in Lagos: what you actually need to know",
    excerpt:
      "Latency, install lead times, estate rules, and when dual-WAN beats choosing one link for Island and mainland sites.",
    metaDescription:
      "Starlink vs fibre in Lagos: compare latency, uptime, estate installs, and hybrid failover for VI, Lekki, and mainland offices.",
    author: "DataGram Nigeria",
    date: "2026-05-18",
    readTime: "10 min read",
    category: "Comparison",
    image: img("starlinkEstateInstallation.jpeg"),
    imageAlt: "Starlink dish installed in Lagos residential estate",
    imageFile: "starlinkEstateInstallation.jpeg",
    featured: false,
    serviceCta: {
      label: "Lagos installation",
      href: "/starlink-installation-lagos",
      blurb: "Island, mainland, and Lekki estate installs with conduit discipline and mesh options.",
    },
    paragraphs: [
      "Lagos buyers ask Starlink or fibre because both show up as fast internet. In practice you are choosing lead time, independence from street cuts, upload profile, and whether your building allows an open trench. Fibre wins on stable per-megabit pricing in served MDUs. Starlink wins on rapid deployment and a second path that does not share the same duct as your primary link.",
      "Latency is often misunderstood. Fibre backhaul inside Lagos can deliver very low milliseconds to local caches. Starlink's LEO network commonly lands around 20–33 ms for everyday apps when your WiFi is not the bottleneck. Gamers and traders should still test their actual path.",
      "Download peaks differ by neighbourhood and time of day. Fibre plans may advertise high tiers on paper, but last-mile WiFi, old routers, or oversubscribed estates still choke laptops. Starlink throughput varies with rain fade, beam load, and obstruction score—professional installs exist to lower obstruction, not to promise one speed forever. Expect download roughly 50–1,000 Mbps and upload 10–100 Mbps in typical field conditions.",
      "Upload is where Lagos offices feel pain. CCTV backhaul, design uploads, and multi-site sync chew upstream. If your team lives on large uploads, say so during survey. Many sites run fibre for bulk sync and Starlink for resilient outbound voice—hybrid is normal.",
      "Install lead times separate the technologies today. Fibre in a new MDU may wait on landlord backhaul and riser work. Starlink can be live after hardware arrives and a roof or parapet mount passes survey—often days, not quarters—when estate security approves access during standard business hours.",
      "Estate rules on the Island and in Lekki increasingly mandate conduit colour, curfew drilling, and escorts. Both fibre contractors and Starlink installers must comply. Starlink still needs a clean outdoor sky view—parapet placement matters on high-rises.",
      "Power behaviour is Lagos-specific. Generators, shared neutrals, and voltage sag when estates transfer loads will reboot cheap routers. Starlink's dish draws modest wattage, but your router and switches need conditioning if you care about call stability through changeovers.",
      "Cost comparisons should include downtime, not only monthly naira. A cheaper fibre plan that shares one trench with the street leaves you dark when construction cuts the bundle. Starlink as secondary WAN pays off when you can count revenue or operations lost per hour offline.",
      "Technical integration is simpler than myths suggest. Dual-WAN routers with policy routing send general traffic one way and latency-sensitive apps another. Document IP plans and test failover during handover—weekend drills beat learning failover live on Monday morning.",
      "When is fibre alone enough? If your MDU has diverse building backhaul, tested risers, and you do not need rapid branch expansion, fibre may cover you. When is Starlink alone enough? Remote compounds, temporary sites, and homes where fibre never reached your street.",
      "When is hybrid right? Most Lagos enterprises we see: fibre or microwave primary, Starlink secondary, explicit runbooks. Read our [enterprise Nigeria page](/starlink-enterprise-nigeria) and [Lagos installation page](/starlink-installation-lagos) for VLAN and neighbourhood coverage detail.",
      "If you travel between regions, [roaming](/faq) lets you use Starlink across different land regions globally, not only where you activated. It helps where local coverage is limited. It costs extra on top of your standard subscription—factor that before you rely on it for staff travel.",
      "Pick based on measurements: obstruction score, upload demand, estate rules, and downtime cost—not billboard slogans.",
    ],
  },
  {
    slug: "starlink-offshore-niger-delta-specs",
    title: "Can Starlink work offshore in the Niger Delta? Here's what the specs say",
    excerpt:
      "Motion plans, marine hardware, obstruction at berth versus at heading, and realistic expectations for OSVs and creek camps.",
    metaDescription:
      "Starlink offshore Niger Delta: maritime vs mobility specs, deck mounts, rain fade, and survey checklist before you buy marine hardware.",
    author: "DataGram Nigeria",
    date: "2026-05-15",
    readTime: "12 min read",
    category: "Maritime",
    image: img("maritime4.jpeg"),
    imageAlt: "Starlink terminal on oil platform in the Niger Delta, Nigeria",
    imageFile: "maritime4.jpeg",
    featured: false,
    serviceCta: {
      label: "Maritime installation",
      href: "/starlink-offshore-maritime-installation",
      blurb: "OSVs, platforms, and coastal camps—marine mounts and documented handover for marine PTW.",
    },
    paragraphs: [
      "Offshore teams hear Starlink works at sea and assume any dish from a residential checkout will behave on an OSV. Specs matter: maritime and mobility service classes exist because motion, beam switching, and hardware sealing differ from a bungalow in Port Harcourt. The wrong class wastes procurement time and can violate terms.",
      "At berth, a vessel may look fixed but still needs a plan that matches how Starlink defines mobility or maritime use. Confirm eligibility on official coverage tools before buying. Installers should map obstruction at the pier and at typical heading—not only calm alongside.",
      "Maritime terminals use a phased-array antenna that tracks several low-Earth-orbit satellites at once and hands off between them as the vessel moves. A fixed home dish locks to one pass; that difference is why motion hardware exists.",
      "Standard kits are designed for land with clear sky arcs. Marine mounts address roll, pitch, and spray exposure. Cable glands, stainless hardware, and drip loops are not cosmetic—Gulf of Guinea humidity penetrates underspecified routes within months.",
      "Latency for LEO remains attractive versus geostationary satellite for voice and collaboration, but rain fade still happens. Honest operators baseline speeds after install: download often 50 Mbps–1,000 Mbps, upload 10 Mbps–100 Mbps, latency 20–33 ms, then compare against weather logs.",
      "Power on diesel-heavy vessels needs thought. House batteries, inverter noise, and generator transfer can reboot routers mid-watch unless UPS segments are sized with inrush in mind. Document who powers the dish down during maintenance.",
      "Creek-adjacent camps and shore offices blur categories. If the structure is land-fixed, a land plan with a tall mast may suffice. If the asset moves, mobility hardware and a marine survey are mandatory. Surveys ask berth only versus underway time for a reason.",
      "RF safety and deck workflow matter. Mounts must clear crane sweep, helicopter paths where applicable, and crew walkways. PTW paperwork should list drill points, gland locations, and who signs off torque checks.",
      "Many operators keep VSAT during transition. Policy routing can send crew welfare traffic one way and legacy apps another while you validate Starlink throughput. Document failover order so night crews do not fight over remote controls.",
      "Upload constraints affect CCTV and file sync from platforms. If upstream is continuous, size plans and shaping honestly. IT teams should see baseline tests to cloud endpoints they actually use.",
      "Security and VLAN separation remain relevant offshore. Guest WiFi, ops tablets, and bridge systems should not share flat broadcast domains. Handover diagrams help when third-party vendors rotate.",
      "Logistics from our [Port Harcourt coverage](/starlink-installation-rivers-state-port-harcourt) corridor reduces downtime: surveys can batch with yard periods. Weather windows matter—aligning sea trials reduces repeat trips.",
      "If procurement asks for yes/no without context, the accurate answer is: Starlink can work offshore in the Niger Delta when plan class, mount, power, and sky view match the motion profile—but specs and surveys must come before hardware spend. See [maritime installation](/starlink-offshore-maritime-installation) for scope.",
    ],
  },
  {
    slug: "power-backup-starlink-nigeria",
    title: "Power backup for Starlink in Nigeria: solar, generator, or UPS?",
    excerpt:
      "Sizing UPS for NEPA flickers, generator transfer quirks, and when solar pays off versus keeping the dish alive on a modest battery.",
    metaDescription:
      "Starlink power backup Nigeria: UPS sizing, generator transfers, solar vs lithium, and what to protect on router and dish.",
    author: "DataGram Nigeria",
    date: "2026-05-12",
    readTime: "11 min read",
    category: "Infrastructure",
    image: img("StarlinkInstallationresidential.jpeg"),
    imageAlt: "Starlink dish with solar panels on Nigerian residential rooftop",
    imageFile: "StarlinkInstallationresidential.jpeg",
    featured: false,
    serviceCta: {
      label: "Enterprise power planning",
      href: "/starlink-enterprise-nigeria",
      blurb: "Generator-aware UPS and handover docs for offices, plants, and mission-critical sites.",
    },
    paragraphs: [
      "Starlink does not remove Nigerian power problems. The dish and router want stable voltage; estates and factories run generators with transfer quirks that reboot gear if you skip conditioning. Backup strategy starts by listing loads: dish, router, switches, and what can safely drop during outages.",
      "For many homes, a line-interactive UPS around 600–1000 VA on the router—and sometimes the dish—covers brief NEPA flickers. Runtime targets of 15–40 minutes are realistic at that size; hours need fuel or solar, not a bigger sticker on the same box.",
      "Generator transfers cause most mystery outages. Voltage sag and neutral drift during changeover reboot consumer routers before the dish notices. Online UPS segments on networking gear, or a short delay before reload, help. Document the sequence: dish, router, then switches.",
      "Whole-home solar is attractive but easy to oversell. Panels must recharge batteries faster than your outage pattern discharges them. Rainy season weeks in the south stress undersized banks. If solar is only for Starlink, right-size a modest LiFePO4 bank with MPPT and honest sun hours.",
      "Factories with heavy motors should segregate networking circuits. Surge and proper earthing matter when lightning season hits roof cables. Outdoor runs need grounded shields; indoor routers need bonded earth according to site rules.",
      "Office campuses sometimes ask for centralised versus distributed UPS. Centralised is easier to monitor; distributed keeps remote blocks alive when only one wing loses power. Match architecture to how estates actually shed loads.",
      "Inverter noise from cheap modified sine units can upset gear. Pure sine or online UPS for networking closets is worth the naira when uptime has a price. Clinics and trading floors fit that bucket.",
      "Dish draw is modest compared with old assumptions—still plan for startup inrush when everything returns at once. Staggered power-up beats simultaneous inrush trips.",
      "Monitoring helps: a logged smart plug shows reboot patterns correlated with generator hours. Handover should state expected runtime, not backup included without numbers.",
      "Solar integration with existing diesel should be hybrid thinking: solar extends quiet hours; diesel covers extended storms. Label who refuels and who resets breakers.",
      "Residential users on strict budgets can prioritise router UPS first if calls matter more than dish uptime during seconds-long cuts. Long outages need generator planning or acceptance that satellite is offline until power returns.",
      "Enterprise readers should pair power scope with network scope on the same quote. DataGram documents both on [enterprise installs](/starlink-enterprise-nigeria). [Home installs](/starlink-home-installation) can add mesh and UPS when estates allow conduit.",
      "Test quarterly: kill grid, run generator, measure if Starlink returns without manual steps. Drills expose automation gaps cheaper than emergency truck rolls.",
    ],
  },
  {
    slug: "how-to-activate-starlink-nigeria",
    title: "How to Activate Starlink in Nigeria: Step-by-Step Guide",
    excerpt:
      "Just got your Starlink kit? This guide walks you through the app, availability check, and getting online in Nigeria.",
    metaDescription:
      "Activate Starlink in Nigeria: app setup, availability check, and going online in Lagos, Abuja, Port Harcourt. Step-by-step DataGram guide.",
    author: "DataGram Nigeria",
    date: "2026-05-22",
    readTime: "8 min read",
    category: "Setup",
    image: img("StarlinkRoofMount.jpeg"),
    imageAlt: "DataGram technician setting up Starlink in Nigeria",
    imageFile: "StarlinkRoofMount.jpeg",
    featured: false,
    serviceCta: {
      label: "Book installation",
      href: "/starlink-home-installation",
      blurb: "Need mounting, cabling, or activation help? DataGram covers Lagos, Abuja, Port Harcourt, Delta, and nationwide.",
    },
    paragraphs: [
      "Activation means linking your Starlink kit to an active account so the dish can connect to the network. Before you start, confirm you have the kit (dish, router, cables, power supply), a working power outlet, and a smartphone with the Starlink app installed. You also need the service address where the dish will operate—Starlink checks coverage against that location.",
      "Download the Starlink app from the Apple App Store or Google Play Store. Search for Starlink and install the official app published by SpaceX. Open the app and create an account with your email, or sign in if you already ordered hardware online. Keep your order confirmation handy; it speeds up matching the kit to your account.",
      "Check whether Starlink is available at your address before you climb a ladder. In the app, enter your service address, or visit starlink.com and use the availability map. Nigeria has wide satellite coverage, but some neighbourhoods still show waitlisted or unavailable for standard residential signup. That status refers to consumer self-service slots—not every business or enterprise path.",
      "If your area shows waitlisted or unavailable, it usually means residential self-activation is paused while capacity is added. It does not always mean no service is possible. Enterprise, business, or mobility tiers may still be accessible through an authorised partner. DataGram can check plan eligibility for Lagos, Abuja, Port Harcourt, [Delta State](/starlink-installation-delta-state), and other regions before you buy the wrong hardware.",
      "Once availability is confirmed and hardware is in hand, set up the dish in the location you surveyed—clear sky view matters more than convenience near a window. Connect the cable from the dish to the router or power supply as shown in the kit guide. Plug into mains power and wait for the dish to tilt and search—this can take several minutes on first boot.",
      "In the Starlink app, follow the prompts to activate the kit: scan the QR code on the dish or router if asked, confirm the service address, and select your subscription plan. Complete payment for the monthly plan through the app. When activation succeeds, the app shows connected status and you can run a speed test. Typical ranges in Nigeria are download 50–1,000 Mbps, upload 10–100 Mbps, and latency 20–33 ms depending on plan and sky view.",
      "If activation fails, common causes are wrong service address, obstructed sky view, unpaid subscription, or using a plan class that does not match your location (for example a fixed residential plan registered at a different city). Move the dish to a clearer roof line, power-cycle router and dish, and retry. Persistent errors are worth a photo of the app message plus your map pin when you contact support.",
      "Roaming is optional and separate from basic activation. Roaming lets you use Starlink across different land regions globally, not only where you activated. It helps where local coverage is limited or not fully available. It costs extra on top of your standard subscription—enable it only if you actually travel across regions.",
      "DataGram provides activation support alongside professional installation in [Lagos](/starlink-installation-lagos), [Abuja](/starlink-installation-abuja), [Port Harcourt and Rivers State](/starlink-installation-rivers-state-port-harcourt), [Delta State](/starlink-installation-delta-state), and other regions across Nigeria. We align plan class to your site, mount the dish for a low obstruction score, and leave written handover notes so your household or office knows who to call if the app shows offline after a storm.",
      "For estate and landlord properties, activation should happen after mount approval and cable routing—not before security and facility sign-off. That order avoids paying for a month of service while the dish sits in a box.",
      "After you are online, test WiFi where people actually work—not only beside the router. If coverage is weak through concrete walls, plan mesh nodes or a wired access point during install rather than blaming the satellite link.",
      "Keep the app installed for outages, firmware updates, and snow/rain fade notifications. Starlink will prompt you when the dish needs repositioning or when obstructions rise after new construction nearby.",
      "Monthly subscription fees in Nigeria typically run from ₦57,000 – ₦3,000,000+ depending on location, service availability, subscription type, and plan eligibility. Your installer should confirm the current plan table on Starlink checkout rather than quoting stale numbers from social media.",
      "Need help activating or setting up your Starlink? Contact DataGram.",
    ],
  },
];

export const seoArticles2026: SeoArticle[] = [
  ...legacyArticles,
  ...phase1Articles,
  ...evergreenAArticles,
  ...evergreenBArticles,
  ...trendingAArticles,
  ...trendingBArticles,
  ...geoAArticles,
  ...geoBArticles,
  ...futureAArticles,
  ...futureBArticles,
  ...roamingPriorityArticles,
  ...enterpriseMaritimeB2bArticles,
  ...enterpriseMaritimeB2bMoreArticles,
  ...enterpriseMaritimeB2bFinalArticles,
  ...august2026SprintArticles,
  ...september2026SprintArticles,
];

export function getSeoArticleBySlug(slug: string) {
  return seoArticles2026.find((a) => a.slug === slug);
}

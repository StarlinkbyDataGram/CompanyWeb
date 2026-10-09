/** Long-form SEO articles with slug routes — aggregated from phase modules. */
export type { SeoArticle, ArticleBlock, ArticleFaq } from "./article-types";
export { img, blocks, p, h2, h3, faqs } from "./article-types";

import type { SeoArticle } from "./article-types";
import { blocks, faqs, h2, img, p } from "./article-types";
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
import { stage3Batch1Articles } from "./articles/stage3-batch1";

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
      "Starlink does not replace fibre in Nigeria. Use fibre where it is stable, Starlink where it has not arrived, or both. Lagos is the worked example.",
    metaDescription:
      "Will Starlink replace fibre in Nigeria? No. Where fibre fits, where Starlink fits, and how Lagos offices use both.",
    author: "DataGram Nigeria",
    date: "2026-05-18",
    updated: "2026-10-09",
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
    blocks: blocks(
      p("Starlink does not replace fibre in Nigeria. Use fibre where the building already has a stable line. Use Starlink where fibre has not reached the address, where the wait for a new line is longer than the work can bear, or as the second path when the first line is cut. The honest answer is where, not always."),
      p("Lagos is the worked example on this page: the Island, Lekki, and the mainland. Other comparisons stay on their own URLs. [Owerri](/blog/starlink-vs-fibre-owerri-imo-state), [IPNX on estates](/blog/ipnx-fibre-vs-starlink-nigerian-estates), and [Spectranet](/blog/spectranet-vs-starlink-remote-work-nigeria-2026) are not folded in here. How to run both links is the [failover guide](/blog/combine-starlink-5g-failover-multi-wan)."),
      h2("What you are actually choosing"),
      p("Lagos buyers ask Starlink or fibre because both show up as fast internet. In practice you are choosing lead time, independence from street cuts, upload profile, and whether your building allows an open trench. Fibre fits a served building with stable pricing. Starlink fits a fast install and a second path that does not share the same duct as the first link."),
      h2("Latency"),
      p("Latency is often misunderstood. Fibre backhaul inside Lagos can deliver very low milliseconds to local caches. Starlink's LEO network is often discussed around 20–33 ms for everyday apps when Wi-Fi is not the bottleneck. That figure is indicative, not a guarantee. Gamers and traders should still test their actual path."),
      h2("Download, upload, and rain"),
      p("Download peaks differ by neighbourhood and time of day. Fibre plans may advertise high tiers on paper, but last-mile Wi-Fi, old routers, or oversubscribed estates still choke laptops. Starlink throughput varies with rain fade, beam load, and obstruction. A professional install lowers obstruction. It does not promise one speed forever. A field range around 50–1,000 Mbps down and 10–100 Mbps up is indicative, not a guarantee for your address."),
      p("Upload is where Lagos offices feel pain. CCTV backhaul, design uploads, and multi-site sync chew upstream. If your team lives on large uploads, say so during survey. Many sites run fibre for bulk sync and Starlink for voice. That hybrid is normal, not a failure to choose."),
      h2("Lead time and estate rules"),
      p("Fibre in a new building may wait on landlord backhaul and riser work. Starlink can be live after hardware arrives and a roof or parapet mount passes survey, often days rather than quarters, when estate security approves access. Estate rules on the Island and in Lekki still mandate conduit colour, drilling windows, and escorts. Both fibre contractors and Starlink installers must comply. Starlink still needs a clean outdoor sky view."),
      h2("Power and downtime"),
      p("Generators and voltage sag when an estate transfers load will reboot a cheap router. The dish is not the whole power design. Router and switches need conditioning if calls must survive the changeover. Cost comparisons should include downtime, not only the monthly bill. A cheaper fibre plan that shares one trench with the street leaves you dark when construction cuts the bundle. Starlink as the second WAN pays off when you can count what an hour offline costs. No new naira figures are added on this page."),
      h2("When one link is enough, and when both are right"),
      p("Fibre alone can be enough when the building has diverse backhaul, tested risers, and you do not need a rapid second site. Starlink alone can be enough at a remote compound, a temporary site, or a home where fibre has never reached the street. Hybrid is fibre or microwave as primary and Starlink as secondary, with a written failover order. The design is the [failover guide](/blog/combine-starlink-5g-failover-multi-wan). Neighbourhood install notes are on the [Lagos installation page](/starlink-installation-lagos) and the [enterprise page](/starlink-enterprise-nigeria)."),
      p("Pick from obstruction, upload demand, estate rules, and downtime cost. Not from a billboard."),
    ),
    cta: "Need both links, or a survey before you drop fibre? [Contact DataGram](/contact) or start with [Lagos installation](/starlink-installation-lagos).",
    faqs: faqs(
      {
        question: "Will Starlink replace fibre in Nigeria?",
        answer:
          "No. Use fibre where it is already stable. Use Starlink where fibre has not arrived, where the wait is too long, or as the second path. Lagos on this page is the worked example, not a national exception.",
      },
      {
        question: "Should a Lagos office run fibre and Starlink together?",
        answer:
          "When an hour offline costs more than the second subscription. Fibre or microwave can stay primary. Starlink is the path that does not share the street duct. The failover guide covers the router design.",
      },
      {
        question: "Are the speed figures on this page guaranteed?",
        answer:
          "No. Ranges such as 20–33 ms, or 50–1,000 Mbps down and 10–100 Mbps up, are indicative field observations. Test the address.",
      },
      {
        question: "Does this article replace the Owerri, IPNX, or Spectranet pages?",
        answer:
          "No. Those comparisons stay on their own URLs. This page answers the national question and uses Lagos as the example.",
      },
    ),
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
      "Latency for LEO remains attractive versus geostationary satellite for voice and collaboration, but rain fade still happens. Honest operators baseline speeds after install. Indicative field ranges, not guarantees: download often 50 Mbps–1,000 Mbps, upload 10 Mbps–100 Mbps, latency often discussed around 20–33 ms. Compare the site baseline against weather logs.",
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
      "Size backup for the dish, router, and switches. A 600–1,000 VA UPS is a planning band for brief cuts. Mini, solar, and marine 24 V stay on their own pages.",
    metaDescription:
      "What size inverter or UPS for Starlink in Nigeria? Planning bands already on this page, plus where Mini, solar, and boat power are covered.",
    author: "DataGram Nigeria",
    date: "2026-05-12",
    updated: "2026-10-09",
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
    blocks: blocks(
      p("Size the backup for the Starlink dish, the router, and the switches you still need during an outage. A whole-house inverter is a different design. This page is the national planning note. It does not replace the Mini, solar, or marine articles."),
      p("The only sizing figures used here are the ones already on this page, and they are planning bands, not a measurement of your kit. A line-interactive UPS around 600–1,000 VA, sometimes covering the router and sometimes the dish as well, is the band for brief NEPA flickers. A runtime of about 15–40 minutes is the realistic target at that size. Hours need fuel or a battery bank, not a larger label on the same box."),
      p("Mini watt draw is in the [Mini power guide](/blog/best-power-bank-inverter-starlink-mini-nigeria). A solar bank is in [solar and the router](/blog/power-starlink-router-solar-nigeria). A vessel DC system is in [24 V on a boat](/blog/power-starlink-flat-hp-24v-boat-system-nigeria). Do not copy those pages' numbers onto a Standard home kit."),
      h2("What to put on the backup"),
      p("List the loads before you buy anything: dish, router, switches, and what can safely go dark. The dish and router want stable voltage. A generator transfer that sags or drifts the neutral reboots a consumer router before the dish notices. An online UPS on the network gear, or a short delay before reload, helps. Power them back up as dish, then router, then switches."),
      h2("Generator, inverter, and solar"),
      p("Cheap modified-sine inverters upset networking gear. Pure sine, or an online UPS in the closet, is the closet design when uptime has a price. Whole-home solar is easy to oversell. Panels have to recharge faster than your outage pattern discharges the bank. Rainy weeks in the south expose an undersized bank. If solar is only for Starlink, size a modest battery for honest sun hours. Solar beside diesel is hybrid thinking: solar for the quiet hours, diesel for a long storm. Say who refuels and who resets the breaker."),
      p("Dish draw is modest next to old assumptions. Still plan for inrush when everything returns at once. Stagger the restart. A logged plug will show reboots that line up with generator hours. Handover should state the expected runtime."),
      h2("Sites that are not a bungalow"),
      p("A factory with heavy motors should keep the network on its own circuit, with surge protection and a real earth, especially in lightning season. A campus can use one monitored UPS or a UPS per wing, matching how the estate actually sheds load. A home on a tight budget can put the UPS on the router first if calls matter more than a few seconds of dish uptime. A long outage still needs a generator, or an acceptance that the link is off until power returns."),
      p("Enterprise quotes should put power and network on the same scope. That is [enterprise installation](/starlink-enterprise-nigeria). A home can add the UPS with [home installation](/starlink-home-installation) when the estate allows the conduit. Test it: kill the grid, start the generator, and see whether Starlink returns without anyone touching it."),
    ),
    cta: "Need the UPS and the generator changeover written into the install? [Contact DataGram](/contact) or start with [home installation](/starlink-home-installation).",
    faqs: faqs(
      {
        question: "What size UPS or inverter does Starlink need in Nigeria?",
        answer:
          "On this page the planning band is a line-interactive UPS around 600–1,000 VA, with about 15–40 minutes of runtime. That is a planning band, not a measurement of your kit. Hours of runtime need fuel or a battery bank.",
      },
      {
        question: "Does this page give Mini, solar, or boat watt figures?",
        answer:
          "No. Mini draw is on the Mini power guide. Solar is on the solar article. A vessel DC system is on the 24 V boat article. Do not copy those figures onto a Standard home kit.",
      },
      {
        question: "Will a bigger UPS replace a generator?",
        answer:
          "Not for a long outage. The 600–1,000 VA band covers brief grid flickers and the moment a generator takes over. Extended hours need fuel, a battery bank, or an acceptance that the link is off.",
      },
      {
        question: "What should stay powered during an outage?",
        answer:
          "The dish, the router, and the switches people still need. A whole-house inverter is a separate design. List what can safely go dark before you buy.",
      },
    ),
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
      "In the Starlink app, follow the prompts to activate the kit: scan the QR code on the dish or router if asked, confirm the service address, and select your subscription plan. Complete payment for the monthly plan through the app. When activation succeeds, the app shows connected status and you can run a speed test. Indicative ranges in Nigeria, not guarantees, are download 50–1,000 Mbps, upload 10–100 Mbps, and latency often discussed around 20–33 ms depending on plan and sky view.",
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
  ...stage3Batch1Articles,
];

export function getSeoArticleBySlug(slug: string) {
  return seoArticles2026.find((a) => a.slug === slug);
}

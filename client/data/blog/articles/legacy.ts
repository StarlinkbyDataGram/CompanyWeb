import type { SeoArticle } from "../article-types";
import { blocks, faqs, h2, h3, img, p, table } from "../article-types";

/** Legacy articles (pre-FAQ/block format) — migrated in place */
export const legacyArticles: SeoArticle[] = [
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
      "Use a UPS when NEPA only blinks, a generator when the cut lasts for hours, or solar when you have sun and no fuel run.",
    metaDescription:
      "Power backup for Starlink in Nigeria: a UPS for short cuts, a generator for long ones, or solar with a battery. Includes one 8-hour estimate.",
    author: "DataGram Nigeria",
    date: "2026-05-12",
    updated: "2026-10-09",
    readTime: "8 min read",
    category: "Infrastructure",
    image: img("StarlinkInstallationresidential.jpeg"),
    imageAlt: "Starlink dish with solar panels on Nigerian residential rooftop",
    imageFile: "StarlinkInstallationresidential.jpeg",
    featured: false,
    serviceCta: {
      label: "Enterprise power planning",
      href: "/starlink-enterprise-nigeria",
      blurb: "Help with a generator and a UPS for an office or a plant.",
    },
    blocks: blocks(
      p("Use a UPS, a small battery box that keeps a plug alive, when NEPA only blinks. Use a generator when the cut lasts for hours and you can buy fuel. Use solar with a battery when you have sun and you want quiet power with no fuel."),
      p("A watt is how much power a device uses at one moment. Starlink's current Standard spec sheet lists an average of 75 to 100 watts. That range is not a reading from your own kit."),
      h2("How do solar, a generator, and a UPS compare?"),
      table(
        ["Option", "Best for", "Rough running cost", "Main advantage", "Main drawback"],
        [
          ["UPS", "A home where NEPA blinks", "No fuel. It covers minutes, not an evening.", "The link stays up through a short cut.", "It goes dead in a long outage."],
          ["Generator", "A long cut, if you can get fuel", "Fuel for every hour it runs.", "It lasts as long as the fuel does.", "Noise, fuel, and a rough start can reboot the router."],
          ["Solar with a battery", "A site with sun and a daily long cut", "No fuel after you buy the kit.", "Quiet power in the evening.", "A rainy week can leave the battery flat."],
        ],
        "A planning comparison, not a price quote. Running cost means fuel, or the lack of it.",
      ),
      h2("What if the power is out for 8 hours?"),
      p("This is an estimate, not a test of your kit. Use 100 watts, the top of the published 75 to 100 watt average. That way you do not plan on the low figure."),
      p("A watt-hour is watts times hours. 100 watts for 8 hours is 800 watt-hours. That is the energy this estimate needs."),
      p("A 12-volt battery labelled 100 amp-hours shows about 1,200 watt-hours on the sticker. Twelve times 100 is 1,200. The sticker is larger than 800, so it is a rough start for an 8-hour cut."),
      p("You will not get the full sticker. Heat, an old battery, and the inverter all take a share. An inverter turns battery power into the power a normal wall plug uses. Measure your own kit if you can."),
      h2("Which should you choose?"),
      h3("The power blinks, then comes back"),
      p("A UPS is enough when the power only blinks. Put it on the dish and the router. Expect minutes, not an evening."),
      p("The planning band on this page is a 600 to 1,000 VA box, with about 15 to 40 minutes. VA is the size printed on the box, not Starlink's watt rating. It is a band, not a test of your kit."),
      h3("The lights stay off all evening"),
      p("A UPS will die before the evening ends. Use a generator if you can buy fuel, or solar if the roof gets sun. A pure sine inverter makes smooth power, like a normal wall plug. A cheap inverter makes a rougher wave, and that can reboot the router when the generator starts."),
      h3("A small office cannot drop a call"),
      p("Put the dish and the router on a UPS so a blink does not end the call. Keep a generator for the long cut, and name one person who starts it. Write that into the install. An office job starts with [enterprise installation](/starlink-enterprise-nigeria)."),
      h3("The site is remote and fuel is hard to get"),
      p("Solar and a battery are the practical pair. Size the bank for a cloudy day, not a bright afternoon. The detail sits on the [solar article](/blog/power-starlink-router-solar-nigeria). This page does not copy that article's watt figures."),
      h2("What should stay on?"),
      p("Keep the dish, the router, and a small switch if people still need it. Let the rest of the house go dark. Bring them back in this order: dish, then router, then switch."),
      p("Mini, a full solar design, and a boat are different jobs. Mini power is in the [Mini guide](/blog/best-power-bank-inverter-starlink-mini-nigeria). A vessel system is in the [24 V boat article](/blog/power-starlink-flat-hp-24v-boat-system-nigeria). Do not copy those numbers onto a Standard home kit."),
      p("A home can add the UPS during [home installation](/starlink-home-installation). Test it once. Kill the grid, start the backup, and see if Starlink returns with no one touching it."),
    ),
    cta: "Need the UPS and the generator changeover written into the install? [Contact DataGram](/contact) or start with [home installation](/starlink-home-installation).",
    faqs: faqs(
      {
        question: "What size UPS or inverter does Starlink need in Nigeria?",
        answer:
          "For a short blink, use a UPS in the 600 to 1,000 VA band, with about 15 to 40 minutes of runtime. VA is the size printed on the box. It is not a watt figure from Starlink, and it is not a test of your kit. A cut that lasts for hours needs fuel or a battery bank.",
      },
      {
        question: "Does this page give Mini, solar, or boat watt figures?",
        answer:
          "No. Mini power is on the [Mini guide](/blog/best-power-bank-inverter-starlink-mini-nigeria). A solar bank is on the [solar article](/blog/power-starlink-router-solar-nigeria). A boat is on the [24 V boat article](/blog/power-starlink-flat-hp-24v-boat-system-nigeria). Do not copy those numbers onto a Standard home kit.",
      },
      {
        question: "Will a bigger UPS replace a generator?",
        answer:
          "No. A bigger UPS still holds minutes, not an evening. The 600 to 1,000 VA band covers a blink and the moment a generator starts. A long cut needs fuel, a battery bank, or a plan to wait until power returns.",
      },
      {
        question: "What should stay powered during an outage?",
        answer:
          "Keep the dish, the router, and any small switch you still need. Let the rest of the house go dark. A whole-house inverter is a different job. It is easy to buy one that is larger than this link needs.",
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

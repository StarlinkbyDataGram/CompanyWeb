import type { SeoArticle } from "../article-types";
import { blocks, faqs, h2, h3, img, p, table } from "../article-types";

/** Enterprise / maritime B2B SEO articles (2026 batch). */
export const enterpriseMaritimeB2bArticles: SeoArticle[] = [
  {
    slug: "vsat-vs-starlink-roi-nigerian-offshore-operations-2026",
    title: "VSAT vs Starlink ROI for Nigerian Offshore Operations (2026)",
    excerpt:
      "For most working vessels the practical choice is Starlink and VSAT together: low-latency broadband plus the link you already trust, not a rip-and-replace.",
    metaDescription:
      "Starlink vs VSAT for Nigerian offshore vessels: resilience, backup, data needs, operating conditions, and costs — without invented savings claims.",
    author: "DataGram Nigeria",
    date: "2026-07-11",
    updated: "2026-11-20",
    readTime: "14 min read",
    category: "Maritime",
    image: img("blog/vsat-vs-starlink-roi-nigerian-offshore-operations-2026.jpg"),
    imageAlt: "Offshore platform used as an illustration of vessel connectivity, not a named customer installation",
    imageFile: "blog/vsat-vs-starlink-roi-nigerian-offshore-operations-2026.jpg",
    featured: true,
    serviceCta: {
      label: "Request a hybrid assessment",
      href: "/starlink-offshore-maritime-installation",
      blurb: "We scope hardware, PTW mobilisation, and whether VSAT stays as the second link — not a residential kit on a railing.",
    },
    blocks: blocks(
      p("Updated 20 November 2026. For a working vessel, the usual answer is both. Starlink is the low-latency path for voice, VPN, and crew traffic. VSAT stays where the contract, the coverage, or the operations desk still needs a second link. Hybrid is the architecture. Ripping VSAT out on day one is the exception, and only after a survey shows it has no remaining job."),
      p("This comparison is for operations directors and IT leads on OSVs, jack-ups, FPSOs, and oil camps. Latency figures below are indicative ranges commonly discussed for geostationary VSAT and Starlink LEO — not a guarantee for a named vessel, heading, or weather day. Monthly VSAT bands are industry operating ranges used for planning, not a DataGram price list. Confirm live Starlink Global Priority pricing in checkout on the day you buy. How the two links share traffic is [marine SD-WAN](/starlink-marine-sdwan-integration). Plan class detail sits in [Ocean Mode vs Global Priority](/blog/starlink-ocean-mode-50gb-priority-limit-explained) and [activation](/blog/starlink-roaming-global-priority-activation-nigeria)."),
      h2("Evidence-based comparison"),
      table(
        ["Factor", "Managed VSAT (GEO)", "Starlink Global Priority (LEO)", "What to verify"],
        [
          ["Connectivity resilience", "Mature maritime product; rain fade and fringe beams still apply", "Low-latency LEO path; rain fade and obstruction still apply", "Charter SLA, dual-WAN design, not a single-path promise"],
          ["Backup role", "Often kept as documented second WAN after Starlink cutover", "Can be primary with VSAT or LTE as backup", "Written failover order and test logs"],
          ["Data requirements", "CIR and fair-use / overage maths drive crew policy", "Priority data buckets; residual rate after Priority is exhausted", "Crew count, CCTV upload, welfare streaming policy"],
          ["Operating conditions", "Dome realignment after yard periods; specialised maintenance", "Clear sky view, marine mount, salt-rated glands, UPS", "Survey at berth and typical heading"],
          ["Equipment & service cost", "Industry planning band often ~$1,500–$4,000/month service, plus maintenance and overages", "USD Priority buckets + kit + marine install labour", "Your last four invoices vs live checkout — no invented % savings"],
          ["Maintenance", "Vendor dome visits and realignment cycles", "Mount, cable, router, and account hygiene; optional SD-WAN care", "Who owns faults at 02:00"],
          ["Business suitability", "Strong where contracts already mandate VSAT", "Strong for interactive voice, VPN, and crew broadband", "Flag-state / charterer documentation requirements"],
        ],
        "Planning comparison only. Figures are indicative industry ranges, not DataGram guarantees or a published savings claim.",
      ),
      h2("Why both links stay"),
      p("Starlink changes what interactive work feels like. VSAT still covers a failure of the LEO path, a yard period, or a charter that already requires the legacy circuit. Keeping VSAT as a documented second WAN is not a failed migration. It is the design. Backup connectivity reduces risk; it does not guarantee zero downtime. Crew Wi-Fi on that shared uplink is a separate LAN problem, covered in [crew VLAN design](/blog/configure-vlan-starlink-crew-wifi-bridge-operations)."),
      h2("What managed VSAT actually costs on a Nigerian OSV"),
      p("Industry figures for managed VSAT service on OSVs operating in the Gulf of Guinea commonly land around $1,500–$4,000 per month depending on committed information rate, contention, and whether the contract bundles remote NOC support. That number rarely includes everything. Hardware maintenance contracts, dish realignment after yard periods, and per-MB overages when crews blow through the fair-use envelope add cost that finance only sees after the invoice cycle."),
      p("Coverage gaps matter too. Geostationary footprints are fixed. When a vessel works fringe beams or when rain fade stacks with a congested spot beam, operators buy more committed rate or accept slow periods. That is the baseline you should put in the cost model — not the brochure CIR alone."),
      h2("What Starlink Global Priority costs for the same vessel"),
      p("Starlink Global Priority for maritime use is billed in USD Priority-data buckets with mobility and ocean capability. Exact naira totals track FX and the bucket size you choose. The structural point for comparison is prioritised LEO capacity versus a geostationary pipe with high latency and often punitive overage maths — not a promised percentage saving."),
      p("Hardware is a one-time kit cost plus marine mount, glands, UPS, and installation labour. Full turnkey marine projects vary widely with crane access and cable length; residential project bands on land (₦450,000–₦1,060,000) do not map cleanly to vessel work — marine surveys quote after deck inspection. See our [offshore maritime installation](/starlink-offshore-maritime-installation) page for scope."),
      h2("Latency: why the gap changes the job"),
      p("VSAT on geostationary satellites is commonly discussed around 600 ms and above. Starlink LEO is commonly discussed around 20–40 ms when the Wi-Fi path is not the bottleneck. Treat both as indicative ranges, not a promise for your heading, your weather, or your LAN. The gap is still the reason voice and VPN feel different."),
      h3("VOIP, VPN, and remote monitoring"),
      p("Crew welfare calls and shore engineering stand-ups degrade badly on high-latency links — talk-over and echo become normal. Site-to-shore VPNs time out or feel unusable for interactive admin. Remote monitoring tools that expect terrestrial-like round trips struggle when every packet waits half a second or more."),
      p("Starlink does not remove rain fade or bad Wi-Fi. It does remove the physics tax of a satellite parked over the equator. Collaboration tools become usable again for many operators without rewriting the application stack — still subject to sky view, power, and Priority data remaining."),
      h2("Hidden costs of staying on VSAT alone"),
      p("Per-MB overages punish unpredictable crew usage. Hardware maintenance contracts lock you into vendor visits priced for specialised dome work. Coverage gaps in busy or fringe Gulf of Guinea cells force either more spend or quieter nights for non-critical traffic. None of those line items appear in a simple monthly CIR comparison — they belong in the total cost of ownership column."),
      p("The hybrid case remains the default. Starlink as primary with VSAT kept on a second WAN is an SD-WAN design — see [marine SD-WAN integration](/starlink-marine-sdwan-integration). Land offices that need a similar pattern should read [Starlink and 5G multi-WAN](/blog/combine-starlink-5g-failover-multi-wan)."),
      h2("When the survey says the VSAT dome comes off"),
      p("That is the exception, not the opening recommendation. When the survey and the charter say the legacy link can go, decommissioning a VSAT dome and installing a Starlink Flat High Performance terminal is a controlled deck job, not a weekend DIY. DataGram’s field sequence mirrors our [offshore HSE practice](/starlink-offshore-hse-compliance):"),
      p("Pre-mobilisation survey documents power, sky view at berth and typical heading, cable path to the comms space, and crane sweep clearance. PTW coordination with the vessel or platform safety officer comes next — work does not start without approvals. Installation covers mast or pedestal, marine-grade glands, drip loops, router placement, power circuit, and grounding. Activation and an on-site speed/latency baseline go into the handover pack. Network reconfiguration moves crew and ops traffic onto the new path — often with VLAN separation and optional dual-WAN if VSAT remains as backup."),
      p("Installations require the vessel docked or anchored. We do not install underway. Yard windows and crew-change berths are the practical schedule."),
      h2("How to model cost without inventing savings"),
      p("Take your fully loaded VSAT monthly cost (service + estimated overages + maintenance allocation). Subtract the expected Starlink Global Priority monthly cost for your usage bucket plus amortisation of marine install and hardware over a period your finance team accepts (commonly 24–36 months). If the monthly delta is positive and your collaboration or ops tools currently fail on latency, the business case strengthens. If your VSAT bill is already at the low end and usage is tiny, the case is weaker unless latency is blocking a specific tool."),
      p("Put numbers from your last four invoices on the table. Do not use social media screenshots, and do not treat this article as a claim that every vessel saves a fixed percentage or recovers capital in a fixed number of months."),
      h2("Nigerian regulatory compliance — what operators should verify"),
      p("Do not treat a blog post as flag-state legal advice. Nigerian-flagged vessels and offshore installations sit under overlapping expectations from NCC satellite service frameworks, NIMASA and flag-state rules, and operator HSE systems. VSAT programmes often already have documented approvals and vendor paperwork in the vessel file."),
      p("Starlink Global Priority can be a fit for maritime connectivity, but operators should verify with their flag state, charterer, and compliance desk whether the service class, account registration, and local partner documentation meet the same bar their VSAT contract already satisfied. DataGram works inside your PTW and issues post-install test reports; we do not claim NIMASA or NCC certification numbers we do not hold."),
      h2("Practical recommendation for procurement"),
      p("Start with hybrid. Model total cost of ownership, not brochure CIR. Require a marine survey before hardware purchase orders. Keep VSAT as the second link unless the survey and the charter say it can go. Confirm the Global Priority bucket against crew count and CCTV upload. Align HSE and IT on VLAN and support contacts before the first bolt turns."),
      p("When you are ready for numbers against your actual vessel list, [contact DataGram](/contact) for a hybrid assessment — we scope hardware, mobilisation, and whether the legacy link stays, against your PTW calendar. The physical job is [offshore maritime installation](/starlink-offshore-maritime-installation)."),
    ),
    cta: "Need a written Starlink-and-VSAT comparison for a specific OSV or platform? [Contact DataGram](/contact) for a hybrid assessment, or start with [offshore maritime installation](/starlink-offshore-maritime-installation) and [HSE compliance](/starlink-offshore-hse-compliance).",
    faqs: faqs(
      {
        question: "Is Starlink cheaper than VSAT for offshore Nigeria?",
        answer:
          "Many operators find total cost of ownership favourable when VSAT sits in the $1,500–$4,000/month band with overages and maintenance — but that is not a universal savings claim. Confirm live Global Priority pricing for your data bucket and model your own invoices.",
      },
      {
        question: "Can Starlink replace VSAT on a moving vessel?",
        answer:
          "It can, on mobility-rated hardware and the correct plan class, typically Global Priority for ocean and in-motion use. A residential dish on a railing is the wrong terminal. The usual recommendation is to keep VSAT as the second link. Remove it only when a survey shows it has no remaining job.",
      },
      {
        question: "Does hybrid Starlink and VSAT guarantee zero downtime?",
        answer:
          "No. Dual-WAN reduces the chance both paths fail at once, but rain fade, power loss, account issues, and misconfigured failover can still interrupt service. Design for recovery, not a zero-outage promise.",
      },
      {
        question: "What is the latency difference between VSAT and Starlink in the Gulf of Guinea?",
        answer:
          "VSAT on geostationary satellites is commonly discussed around 600 ms and above. Starlink LEO is commonly discussed around 20–40 ms. Those are indicative ranges, not a guarantee. The gap is why voice, VPN, and interactive tools feel different.",
      },
      {
        question: "How long does a VSAT to Starlink migration take on an OSV?",
        answer:
          "After survey and PTW approval, install and cutover often fit a 1–3 day window when the vessel is docked or anchored. Lead time is usually dominated by mobilisation scheduling and materials — not the hours spent torqueing the mount.",
      },
    ),
  },
  {
    slug: "manage-starlink-multiple-branch-offices-nigeria",
    title: "Managing Starlink Across Multiple Branch Offices in Nigeria",
    excerpt:
      "Each branch needs its own dish and subscription. What you can centralise is who orders, renews, and answers the fault.",
    metaDescription:
      "Starlink at several Nigerian branches: one terminal per site, and how fleet management keeps the accounts in one place.",
    author: "DataGram Nigeria",
    date: "2026-07-11",
    updated: "2026-10-09",
    readTime: "11 min read",
    category: "Enterprise",
    image: img("blog/manage-starlink-multiple-branch-offices-nigeria.jpg"),
    imageAlt: "Enterprise network management across multiple business locations Nigeria",
    imageFile: "blog/manage-starlink-multiple-branch-offices-nigeria.jpg",
    featured: false,
    serviceCta: {
      label: "Discuss fleet management",
      href: "/starlink-fleet-management-nigeria",
      blurb: "One point of contact for multi-site procurement, billing, and fault escalation across your branch network.",
    },
    blocks: blocks(
      p("One Starlink terminal does not cover five branches. Each site needs its own dish, its own service address, and its own subscription. What you can centralise is the person who orders, renews, and answers the fault. That service is [fleet management](/starlink-fleet-management-nigeria). This page is how the accounts actually work."),
      p("This guide is for IT managers and operations directors who already know Starlink works at a single site and now need a repeatable way to run it as a branch network. We cover how accounts actually work, what breaks at scale, when Residential is enough versus Priority, how to design VLANs and failover, and what [DataGram fleet management](/starlink-fleet-management-nigeria) takes off your desk."),
      h2("How Starlink accounts work per dish"),
      p("Each Starlink kit pairs to an account and subscription. There is no SpaceX \"enterprise estate portal\" that Nigerian IT teams can use the way they manage Microsoft 365 tenants. If you buy ten kits, you effectively get ten account relationships — even if the same person pays the cards."),
      p("That design is fine for a home user. It is painful when Enugu, Onitsha, and Warri branches each need a password reset, a plan change, or a fault photo on the same Monday."),
      h2("The account management problem at scale"),
      p("Separate apps mean separate obstruction scores, separate usage graphs, and separate \"searching\" alarms. Separate billing means finance chases ten USD or naira line items with different renewal dates. Separate fault reporting means the branch manager WhatsApps a photo while HQ opens a Starlink ticket that never mentions the other nine sites."),
      p("Without a single escalation owner, small issues linger: a cable chewed at one warehouse, a generator changeover that reboots the router at another, a plan still on Residential while the call centre hits peak-hour deprioritisation. None of those are Starlink \"outages\" in the marketing sense — they are operations failures."),
      h2("What DataGram fleet management solves"),
      p("Our [fleet management service](/starlink-fleet-management-nigeria) puts procurement, coordinated installs, account administration, plan upgrades, and fault escalations under one Nigerian contact. You can invoice per site or consolidate where DataGram supplies hardware and managed services. Quarterly per-site notes give procurement something to read besides a pile of app screenshots."),
      p("Fleet management does not invent a SpaceX multi-tenant console. It accepts how Starlink bills today and wraps local process around it — the same way you already wrap generator maintenance and estate security across branches. For the single-site deep dive, see [enterprise Starlink Nigeria](/starlink-enterprise-nigeria); for the land-and-sea overview, see the [enterprise and marine hub](/starlink-enterprise-marine-hub)."),
      h2("Plan selection for branch offices"),
      h3("When Residential is enough"),
      p("Small showrooms, low concurrent users, light upload, and tolerance for peak-hour slowdowns can stay on Residential. Confirm live pricing on Starlink checkout — Nigerian subscriptions commonly sit from tens of thousands of naira monthly upward depending on plan class."),
      h3("When Priority or business tiers earn their keep"),
      p("Larger offices, CCTV backhaul, ERP sync, and video-heavy teams need Priority during congestion. Upload-heavy workflows (design files, continuous camera upload) should be sized in the survey, not guessed after go-live. Match plan class to concurrent users and upload, not to the loudest salesperson."),
      h2("Network configuration that survives real branches"),
      p("Default Starlink WiFi is a flat network. Branch offices usually need guest separation, staff VLANs, and a clean path for VPN back to head office. That means Ethernet adapter, a managed router or firewall, and documented IP plans — not a consumer mesh dumped in reception."),
      p("Test failover if the branch is revenue-critical. Starlink as primary with 4G LTE as backup on a dual-WAN router keeps POS and voice alive when rain fade or a dish fault hits. Document who changes SIM data caps and who gets the alert when the primary path drops."),
      h2("A practical rollout sequence"),
      p("Inventory every existing dish and plan. Standardise mount and cable rules so the tenth install looks like the first. Stage activations to your project timeline — NGOs and retailers often need five sites live the same week, not sequential weekends. Hand each branch a one-page power and reboot card for generator changeovers."),
      p("Budget UPS on router and dish for brief NEPA or generator transfers. A ₦10,000–₦150,000 labour band for simple installs does not include multi-site project management; fleet quotes cover coordination explicitly."),
      h2("When to call for help"),
      p("If your team already runs dual-WAN and VLAN standards in-house, you may only need professional mounts and a clear bill of materials. If finance wants one relationship and ops wants one phone number at 2 a.m., fleet management is the product — not another DIY kit."),
      p("Typical failure modes we see on unmanaged multi-site estates: one branch still on an expired virtual dollar card while others renew fine; a warehouse dish remounted by a local welder without grounding after a storm; guest WiFi left bridged onto the same LAN as POS terminals. None of those need a new satellite constellation — they need ownership and a written standard."),
      p("Start with a site inventory spreadsheet: address, dish generation, plan class, router mode (stock vs bypass), UPS present or not, and the human who holds physical access. That sheet becomes the backbone of either an in-house runbook or a DataGram fleet proposal. Without it, every \"urgent\" call starts from zero."),
    ),
    cta: "Ready to stop managing ten Starlink logins by hand? [Contact DataGram](/contact) to discuss fleet management for your branch network, or review [fleet management Nigeria](/starlink-fleet-management-nigeria) and [enterprise installs](/starlink-enterprise-nigeria).",
    faqs: faqs(
      {
        question: "Can one Starlink account cover multiple office locations in Nigeria?",
        answer:
          "No. Each active dish needs its own subscription relationship. What you can centralise is local administration — billing facilitation, fault escalation, and plan changes — through a fleet manager such as DataGram.",
      },
      {
        question: "How do I manage billing for Starlink across 5 or more sites?",
        answer:
          "SpaceX still bills per terminal. DataGram can consolidate or itemise naira invoices for hardware, installation, and managed services, and track renewal dates across the portfolio so finance is not chasing five different card statements.",
      },
      {
        question: "What happens if Starlink goes down at one of my branches?",
        answer:
          "Diagnose obstruction, power, cable, and account status first. With dual-WAN, traffic should fail over to 4G. Under fleet management, you escalate to one DataGram contact instead of opening an orphan ticket the other branches never hear about.",
      },
      {
        question: "Does DataGram offer centralized Starlink management for enterprises?",
        answer:
          "Yes. Fleet management covers multi-site procurement, account administration, plan upgrades, fault escalation, and optional quarterly per-site performance notes. See /starlink-fleet-management-nigeria for scope.",
      },
    ),
  },
  {
    slug: "starlink-vat-invoicing-nigerian-businesses",
    title: "Starlink VAT and Invoicing for Nigerian Businesses",
    excerpt:
      "What Nigerian procurement teams need to know about VAT on local equipment and installation, SpaceX USD subscriptions, and keeping the paperwork split clean.",
    metaDescription:
      "DataGram charges VAT on equipment and installation. Starlink subscriptions stay with SpaceX. Confirm reclaim rules with your tax adviser.",
    author: "DataGram Nigeria",
    date: "2026-07-11",
    updated: "2026-11-20",
    readTime: "11 min read",
    category: "Enterprise",
    image: img("blog/starlink-vat-invoicing-nigerian-businesses.jpg"),
    imageAlt: "Nigerian business professional reviewing Starlink VAT invoice documentation",
    imageFile: "blog/starlink-vat-invoicing-nigerian-businesses.jpg",
    featured: false,
    serviceCta: {
      label: "Request equipment & install quote",
      href: "/starlink-enterprise-nigeria",
      blurb: "DataGram sells equipment and charges installation separately — both with VAT. We do not sell Starlink subscriptions.",
    },
    blocks: blocks(
      p("Updated 20 November 2026. Starlink VAT and invoicing for Nigerian businesses is where many procurement tickets stall. SpaceX bills monthly service in USD from abroad. Your auditor wants a naira invoice with VAT where Nigerian law expects it on a local supply. Those two facts do not magically reconcile without a clear split between hardware, installation, and subscription."),
      p("Confirmed DataGram facts for this page: DataGram charges VAT on the equipment and installation we supply as a Nigerian business. DataGram sells equipment. Installation is charged separately. DataGram does not sell Starlink subscriptions — subscription billing remains with Starlink. This article does not assert specific invoice-layout practices beyond that commercial split. Confirm every reclaim and classification with a registered tax consultant against current FIRS guidance."),
      h2("VAT treatment of Starlink subscriptions"),
      p("SpaceX invoices for monthly service are typically issued in USD without Nigerian VAT in the style of a local ISP invoice. Because SpaceX is not VAT-registered with FIRS in the way a local telecom supplier is, Nigerian companies generally cannot treat that foreign invoice as a standard local input-VAT claim the way they would with a FIRS-registered vendor invoice."),
      p("What that means in practice: the subscription cost is still often treated as a business expense for accounting purposes, but the VAT recovery story differs from buying bandwidth from a local ISP who issues a VAT invoice. Discuss classification and any reverse-charge or imported-service rules with your tax adviser — do not invent a reclaim from a screenshot of the Starlink app. Nigerian VAT rules and FIRS interpretations change; your adviser has the final word."),
      h2("Import duty on Starlink hardware"),
      p("Kits imported into Nigeria fall under customs treatment for satellite terminal equipment. HS classification, duty rates, and documentation requirements sit with Nigeria Customs Service practice and can change with finance acts and tariff updates. Importers need commercial invoices, packing lists, and whatever clearance pack your broker requires for the declared HS code."),
      p("Grey-market kits without clear importation paperwork create asset-tag and audit headaches even when the dish works. Enterprise buyers should ask who imported the hardware and what documents travel with the serial numbers. Related reading on tariff context: our broader note on [satellite hardware import tax and tariffs](/blog/satellite-hardware-import-tax-tariff-nigeria-forecast) — still not legal advice."),
      h2("The invoicing gap — and how DataGram fits"),
      p("SpaceX does not issue Nigerian FIRS-compliant VAT invoices for consumer-style checkout. If your company buys hardware and/or installation through DataGram, we charge VAT on that local supply of goods and services and issue a naira invoice for what we supply. That is the paperwork procurement can file for the DataGram portion."),
      p("The subscription line sits with Starlink in USD. Finance needs that split written clearly: DataGram-supplied equipment and installation (with VAT) versus Starlink subscription (separate). Ambiguous “all-in” WhatsApp quotes that mix subscription into a kit price are what audits reject. We do not claim a particular invoice field layout beyond charging VAT on our supply and itemising what we sell."),
      h2("What procurement should ask any installer"),
      p("Ask for an itemised breakdown: hardware, installation labour, materials (mast, conduit, UPS). Ask whether VAT is charged on those local lines. Ask for evidence of hardware importation compliance or stock provenance for the serials you receive. Ask explicitly whether the quote includes a Starlink subscription — if a supplier claims to “sell the plan,” treat that as a red flag against Starlink’s direct billing model unless your counsel has reviewed the arrangement."),
      p("For multi-site rollouts, ask whether invoicing can be per site or consolidated — see [fleet management](/starlink-fleet-management-nigeria). For single campuses, start with [enterprise Starlink Nigeria](/starlink-enterprise-nigeria)."),
      h2("Record-keeping for Starlink as a business expense"),
      p("Talk to your accountant about categorising recurring subscription under telecoms or IT infrastructure, and about capitalising hardware with an appropriate depreciation schedule under your policy. Keep survey reports, serial numbers, handover photos, and speed baselines with the asset file — NGOs and auditors often ask for them later."),
      p("Full project costs on land commonly land in bands such as ₦450,000–₦1,060,000+ when hardware and install are bundled; labour alone may be ₦10,000–₦150,000. Subscriptions typically run from about ₦57,000 upward depending on plan class. Use those as budgeting anchors, then replace them with live quotes and checkout figures."),
      h2("Bottom line for Nigerian businesses"),
      p("Do not expect SpaceX USD invoices to behave like local ISP VAT invoices. Separate hardware/install paperwork from subscription paperwork. Use a VAT-registered local supplier for the parts of the stack they actually supply. Confirm every reclaim and classification with a registered tax consultant or current FIRS guidance — not with a blog post."),
      p("A clean file for one site usually contains: purchase order, DataGram naira tax invoice for equipment and/or installation, proof of payment, kit serials, survey notes, handover speed test, and the Starlink account email used for subscription. If your board approved “Starlink” as a single line item, split it in the management accounts: capex hardware, opex subscription, opex support."),
      p("When in doubt, pause the PO until the commercial split is agreed in writing. Fixing VAT paperwork after hardware is on the roof costs more meetings than agreeing the split before mobilisation."),
    ),
    cta: "Need equipment and installation with VAT on the local supply? [Contact DataGram](/contact) or review [enterprise Starlink](/starlink-enterprise-nigeria) and [fleet management](/starlink-fleet-management-nigeria). Subscription billing remains with Starlink.",
    faqs: faqs(
      {
        question: "Does DataGram charge VAT?",
        answer:
          "Yes. DataGram charges VAT on the equipment and installation we supply as a Nigerian business. Confirm the amounts on your quote and invoice.",
      },
      {
        question: "Does DataGram sell Starlink subscriptions?",
        answer:
          "No. Subscription billing remains with Starlink. DataGram sells equipment and charges installation separately.",
      },
      {
        question: "Can a Nigerian company claim VAT on Starlink subscriptions?",
        answer:
          "Usually not from SpaceX's foreign USD invoice the way you claim input VAT on a local FIRS-registered supplier. Discuss imported-service and expense treatment with your tax adviser. Do not assume reclaim from an app receipt.",
      },
      {
        question: "How do I get a proper invoice for Starlink installation in Nigeria?",
        answer:
          "Buy installation (and hardware, where supplied) through a VAT-registered installer such as DataGram. Request an itemised naira invoice for the local supply and serial numbers for assets.",
      },
      {
        question: "What import duty applies to Starlink hardware in Nigeria?",
        answer:
          "Duty depends on the HS classification and current tariff schedule at clearance. Work with a licensed customs broker and keep the clearance pack with your asset file. Rates change — verify at import time.",
      },
    ),
  },
];


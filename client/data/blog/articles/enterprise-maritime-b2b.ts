import type { SeoArticle } from "../article-types";
import { blocks, faqs, h2, h3, img, p } from "../article-types";

/** Enterprise / maritime B2B SEO articles (2026 batch). */
export const enterpriseMaritimeB2bArticles: SeoArticle[] = [
  {
    slug: "vsat-vs-starlink-roi-nigerian-offshore-operations-2026",
    title: "VSAT vs Starlink ROI for Nigerian Offshore Operations (2026)",
    excerpt:
      "Honest cost and latency comparison of managed VSAT versus Starlink for OSVs, rigs, and oil camps in the Gulf of Guinea — plus what a migration actually involves.",
    metaDescription:
      "Starlink is cutting offshore internet costs for Nigerian operators. Honest ROI comparison of VSAT vs Starlink for rigs, OSVs, and oil camps in 2026.",
    author: "DataGram Nigeria",
    date: "2026-07-11",
    readTime: "14 min read",
    category: "Maritime",
    image: img("maritime4.jpeg"),
    imageAlt: "Starlink terminal on Niger Delta platform — VSAT migration context for offshore ROI",
    imageFile: "maritime4.jpeg",
    featured: true,
    serviceCta: {
      label: "Request a VSAT migration assessment",
      href: "/starlink-offshore-maritime-installation",
      blurb: "We scope FHP hardware, PTW mobilisation, and network cutover for OSVs and platforms — not a residential kit on a railing.",
    },
    blocks: blocks(
      p("Procurement managers comparing VSAT vs Starlink for Nigerian offshore operations in 2026 are not shopping for a faster Netflix feed. They are deciding whether another year of managed geostationary satellite — with 600 ms+ latency and per-MB overages — still beats a LEO terminal that can drop voice and VPN into the 20–40 ms range. This guide is for operations directors and IT leads on OSVs, jack-ups, FPSOs, and oil camps who need an ROI frame they can take to a CAPEX meeting."),
      p("Figures below use realistic Gulf of Guinea operating ranges from vessel operators and integrator quotes — not a Starlink marketing sheet. Confirm live Starlink Global Priority pricing in checkout on the day you buy; USD list prices and naira FX move."),
      h2("What managed VSAT actually costs on a Nigerian OSV"),
      p("Industry figures for managed VSAT service on OSVs operating in the Gulf of Guinea commonly land around $1,500–$4,000 per month depending on committed information rate, contention, and whether the contract bundles remote NOC support. That number rarely includes everything. Hardware maintenance contracts, dish realignment after yard periods, and per-MB overages when crews blow through the fair-use envelope add cost that finance only sees after the invoice cycle."),
      p("Coverage gaps matter too. Geostationary footprints are fixed. When a vessel works fringe beams or when rain fade stacks with a congested spot beam, operators buy more committed rate or accept slow periods. That is the baseline you should put in the ROI model — not the brochure CIR alone."),
      h2("What Starlink Global Priority costs for the same vessel"),
      p("Starlink Global Priority for maritime use is billed in USD priority-data buckets with mobility and ocean capability. Exact naira totals track FX and the bucket size you choose. The point for ROI is structural: you are paying for prioritised LEO capacity instead of a geostationary pipe with high latency and often punitive overage maths."),
      p("Hardware is a one-time kit cost plus marine mount, glands, UPS, and installation labour. Full turnkey marine projects vary widely with crane access and cable length; residential project bands on land (₦450,000–₦1,060,000) do not map cleanly to vessel work — marine surveys quote after deck inspection. See our [offshore maritime installation](/starlink-offshore-maritime-installation) page for scope."),
      h2("Latency: why 600 ms vs 20–40 ms changes the job"),
      p("VSAT on geostationary satellites typically sits at 600 ms+ round-trip. Starlink LEO commonly lands around 20–40 ms under normal Gulf of Guinea conditions when the WiFi path is not the bottleneck. That gap is not academic."),
      h3("VOIP, VPN, and remote monitoring"),
      p("Crew welfare calls and shore engineering stand-ups degrade badly on 600 ms links — talk-over and echo become normal. Site-to-shore VPNs time out or feel unusable for interactive admin. Remote monitoring and SCADA-adjacent tools that expect terrestrial-like round trips struggle when every packet waits half a second or more."),
      p("Starlink does not remove rain fade or bad WiFi. It does remove the physics tax of a satellite parked over the equator. Operators who migrate often report that collaboration tools become usable again without rewriting their entire application stack."),
      h2("Hidden costs of staying on VSAT"),
      p("Per-MB overages punish unpredictable crew usage. Hardware maintenance contracts lock you into vendor visits priced for specialised dome work. Coverage gaps in busy or fringe Gulf of Guinea cells force either more spend or quieter nights for non-critical traffic. None of those line items appear in a simple \"monthly CIR\" comparison — they belong in the total cost of ownership column."),
      p("Keeping VSAT as a documented backup while Starlink becomes primary is a valid hybrid. That is an SD-WAN design problem, not a failure of migration — see [marine SD-WAN integration](/starlink-marine-sdwan-integration)."),
      h2("What a VSAT-to-Starlink migration involves on a vessel"),
      p("Decommissioning a VSAT dome and installing a Starlink Flat High Performance (FHP) terminal is a controlled deck job, not a weekend DIY. DataGram's field sequence mirrors our [offshore HSE practice](/starlink-offshore-hse-compliance):"),
      p("Pre-mobilisation survey documents power, sky view at berth and typical heading, cable path to the comms space, and crane sweep clearance. PTW coordination with the vessel or platform safety officer comes next — work does not start without approvals. Installation covers mast or pedestal, marine-grade glands, drip loops, router placement, power circuit, and grounding. Activation and an on-site speed/latency baseline go into the handover pack. Network reconfiguration moves crew and ops traffic onto the new path — often with VLAN separation and optional dual-WAN if VSAT remains as backup."),
      p("Installations require the vessel docked or anchored. We do not install underway. Yard windows and crew-change berths are the practical schedule."),
      h2("ROI framing: when the switch pays back in 12 months"),
      p("A simple model: take your fully loaded VSAT monthly cost (service + estimated overages + maintenance allocation). Subtract the expected Starlink Global Priority monthly cost for your usage bucket plus a modest amortisation of marine install and hardware over 24–36 months. If the monthly delta is positive and your downtime or collaboration pain has a measurable cost, payback inside 12 months is common on vessels already spending at the upper end of the $1,500–$4,000 VSAT band."),
      p("If your VSAT bill is already at the low end and usage is tiny, the case is weaker — unless latency is blocking a specific ops tool. Put numbers from your last four invoices on the table; do not use social media screenshots."),
      h2("Nigerian regulatory compliance — what operators should verify"),
      p("Do not treat a blog post as flag-state legal advice. Nigerian-flagged vessels and offshore installations sit under overlapping expectations from NCC satellite service frameworks, NIMASA and flag-state rules, and operator HSE systems. VSAT programmes often already have documented approvals and vendor paperwork in the vessel file."),
      p("Starlink Global Priority can be a fit for maritime connectivity, but operators should verify with their flag state, charterer, and compliance desk whether the service class, account registration, and local partner documentation meet the same bar their VSAT contract already satisfied. DataGram works inside your PTW and issues post-install test reports; we do not claim NIMASA or NCC certification numbers we do not hold. Ask your compliance team what evidence they need on file before cutover."),
      h2("Practical recommendation for 2026 procurement"),
      p("Model total cost of ownership, not brochure CIR. Require a marine survey before hardware POs. Decide whether VSAT stays as failover. Confirm Global Priority bucket size against crew count and CCTV upload. Align HSE and IT on VLAN and support contacts before the first bolt turns."),
      p("When you are ready for numbers against your actual vessel list, [contact DataGram](/contact) for a VSAT migration assessment — we scope FHP, mobilisation, and network cutover against your PTW calendar."),
    ),
    cta: "Need a written VSAT-to-Starlink comparison for a specific OSV or platform? [Contact DataGram](/contact) for a migration assessment, or start with our [offshore maritime installation](/starlink-offshore-maritime-installation) and [HSE compliance](/starlink-offshore-hse-compliance) pages.",
    faqs: faqs(
      {
        question: "Is Starlink cheaper than VSAT for offshore Nigeria?",
        answer:
          "Often yes on total cost of ownership when VSAT sits in the $1,500–$4,000/month band with overages and maintenance. Confirm live Global Priority pricing in USD/naira for your data bucket. Cheap VSAT with tiny usage may not justify a rush migration — model your invoices.",
      },
      {
        question: "Can Starlink replace VSAT on a moving vessel?",
        answer:
          "Yes when you use mobility/maritime-rated hardware and the correct plan class (typically Global Priority for ocean and in-motion use). A residential dish on a railing is the wrong answer. Many operators keep VSAT briefly as documented backup during transition.",
      },
      {
        question: "What is the latency difference between VSAT and Starlink in the Gulf of Guinea?",
        answer:
          "VSAT on geostationary satellites commonly exceeds 600 ms. Starlink LEO typically lands around 20–40 ms under normal conditions. That gap drives VOIP, VPN, and interactive remote tools more than raw download peaks.",
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
      "How IT managers run Starlink at five or more Nigerian locations without drowning in separate apps, invoices, and fault tickets.",
    metaDescription:
      "Running Starlink at 5 or more locations across Nigeria? Here's how to manage accounts, billing, and faults without losing your mind.",
    author: "DataGram Nigeria",
    date: "2026-07-11",
    readTime: "11 min read",
    category: "Enterprise",
    image: img("StarlinkCompanyInstallation.jpeg"),
    imageAlt: "Enterprise Starlink installation for multi-branch Nigerian offices",
    imageFile: "StarlinkCompanyInstallation.jpeg",
    featured: false,
    serviceCta: {
      label: "Discuss fleet management",
      href: "/starlink-fleet-management-nigeria",
      blurb: "One point of contact for multi-site procurement, billing, and fault escalation across your branch network.",
    },
    blocks: blocks(
      p("Managing Starlink across multiple branch offices in Nigeria is not the same problem as installing one dish on a headquarters roof. SpaceX still treats each terminal as its own account. At five, eight, or fifteen sites you inherit separate logins, separate billing cycles, and separate support threads — unless someone local sits on top of that mess."),
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
      "What Nigerian procurement teams need to know about VAT, SpaceX USD invoices, import duty on kits, and getting FIRS-aligned paperwork through a local installer.",
    metaDescription:
      "How do Nigerian businesses account for Starlink subscriptions? Here's what you need to know about VAT, import duty, and getting compliant invoices.",
    author: "DataGram Nigeria",
    date: "2026-07-11",
    readTime: "11 min read",
    category: "Enterprise",
    image: img("High-Speed.jpeg"),
    imageAlt: "Business Starlink paperwork and enterprise connectivity context in Nigeria",
    imageFile: "High-Speed.jpeg",
    featured: false,
    serviceCta: {
      label: "Request VAT-compliant invoicing",
      href: "/starlink-enterprise-nigeria",
      blurb: "Hardware and installation billed in naira with proper documentation — discuss the subscription split with your accountant.",
    },
    blocks: blocks(
      p("Starlink VAT and invoicing for Nigerian businesses is where many procurement tickets stall. SpaceX bills in USD from abroad. Your auditor wants a naira invoice with VAT where the law expects it. Those two facts do not magically reconcile without a local counterparty and a clear split between hardware, installation, and subscription."),
      p("This article is for finance and procurement teams — not a substitute for a registered tax consultant. Treat every point as something to confirm with your accountant against current FIRS guidance. Rules and interpretations change; your adviser has the final word."),
      h2("VAT treatment of Starlink subscriptions"),
      p("SpaceX invoices for monthly service are typically issued in USD without Nigerian VAT. Because SpaceX is not VAT-registered with FIRS in the way a local telecom supplier is, Nigerian companies generally cannot treat that foreign invoice as a standard local input-VAT claim the way they would with a FIRS-registered vendor invoice."),
      p("What that means in practice: the subscription cost is still a business expense for accounting purposes in many cases, but the VAT recovery story is different from buying bandwidth from a local ISP who issues a VAT invoice. Discuss classification and any reverse-charge or imported-service rules with your tax adviser — do not invent a reclaim from a screenshot of the Starlink app."),
      h2("Import duty on Starlink hardware"),
      p("Kits imported into Nigeria fall under customs treatment for satellite terminal equipment. HS classification, duty rates, and documentation requirements sit with Nigeria Customs Service practice and can change with finance acts and tariff updates. Importers need commercial invoices, packing lists, and whatever clearance pack your broker requires for the declared HS code."),
      p("Grey-market kits without clear importation paperwork create asset-tag and audit headaches even when the dish works. Enterprise buyers should ask who imported the hardware and what documents travel with the serial numbers. Related reading on tariff context: our broader note on [satellite hardware import tax and tariffs](/blog/satellite-hardware-import-tax-tariff-nigeria-forecast) — still not legal advice."),
      h2("The invoicing gap — and how local partners close it"),
      p("SpaceX does not issue Nigerian FIRS-compliant VAT invoices for consumer-style checkout. If your company buys hardware and installation through DataGram, we issue a compliant naira invoice with VAT on the local supply of goods and services we provide. That is the paperwork procurement can file."),
      p("The subscription line may still sit with SpaceX in USD, or be facilitated under a managed arrangement depending on the commercial model you choose. Finance needs that split written clearly: what is DataGram-supplied (hardware, install, managed services) versus what is SpaceX subscription. Ambiguous \"all-in\" WhatsApp quotes are what audits reject."),
      h2("What procurement should ask any installer"),
      p("Ask for an itemized breakdown: hardware, installation labour, materials (mast, conduit, UPS), and any subscription facilitation fees. Ask for the installer's VAT registration number on the invoice. Ask for evidence of hardware importation compliance or stock provenance for the serials you receive."),
      p("For multi-site rollouts, ask whether invoicing can be per site or consolidated — see [fleet management](/starlink-fleet-management-nigeria). For single campuses, start with [enterprise Starlink Nigeria](/starlink-enterprise-nigeria)."),
      h2("Record-keeping for Starlink as a business expense"),
      p("Talk to your accountant about categorising recurring subscription under telecoms or IT infrastructure, and about capitalising hardware with an appropriate depreciation schedule under your policy. Keep survey reports, serial numbers, handover photos, and speed baselines with the asset file — NGOs and auditors often ask for them later."),
      p("Full project costs on land commonly land in bands such as ₦450,000–₦1,060,000+ when hardware and install are bundled; labour alone may be ₦10,000–₦150,000. Subscriptions typically run from about ₦57,000 upward depending on plan class. Use those as budgeting anchors, then replace them with live quotes and checkout figures."),
      h2("Bottom line for Nigerian businesses"),
      p("Do not expect SpaceX USD invoices to behave like local ISP VAT invoices. Separate hardware/install paperwork from subscription paperwork. Use a VAT-registered local supplier for the parts of the stack they actually supply. Confirm every reclaim and classification with a registered tax consultant or FIRS guidance — not with a blog post."),
      p("A clean file for one site usually contains: purchase order, DataGram naira tax invoice, proof of payment, kit serials, survey notes, handover speed test, and the Starlink account email used for subscription. For five sites, that file becomes a binder — or a shared drive with naming standards — before internal audit asks awkward questions in Q4."),
      p("If your board approved \"Starlink\" as a single line item, split it in the management accounts anyway: capex hardware, opex subscription, opex support. That split matches how invoices actually arrive and stops finance from forcing one GL code to absorb three different tax treatments."),
      p("When in doubt, pause the PO until the invoice format is agreed in writing. Fixing VAT paperwork after hardware is on the roof costs more meetings than agreeing the template before mobilisation."),
    ),
    cta: "Need hardware and installation on a VAT-compliant naira invoice? [Contact DataGram](/contact) or review [enterprise Starlink](/starlink-enterprise-nigeria) and [fleet management](/starlink-fleet-management-nigeria) for multi-site billing options.",
    faqs: faqs(
      {
        question: "Can a Nigerian company claim VAT on Starlink subscriptions?",
        answer:
          "Usually not from SpaceX's foreign USD invoice the way you claim input VAT on a local FIRS-registered supplier. Discuss imported-service and expense treatment with your tax adviser. Do not assume reclaim from an app receipt.",
      },
      {
        question: "Does Starlink charge Nigerian VAT on its invoices?",
        answer:
          "SpaceX checkout typically presents USD pricing without a Nigerian VAT line like a local ISP invoice. Confirm what appears on your account. Local VAT appears on invoices from Nigerian suppliers for goods and services they supply.",
      },
      {
        question: "How do I get a proper invoice for Starlink installation in Nigeria?",
        answer:
          "Buy installation (and hardware, where supplied) through a VAT-registered installer such as DataGram. Request an itemized naira invoice with VAT registration details and serial numbers for assets.",
      },
      {
        question: "What import duty applies to Starlink hardware in Nigeria?",
        answer:
          "Duty depends on the HS classification and current tariff schedule at clearance. Work with a licensed customs broker and keep the clearance pack with your asset file. Rates change — verify at import time.",
      },
    ),
  },
];

import type { SeoArticle } from "../article-types";
import { blocks, faqs, h2, h3, img, p, table } from "../article-types";

/** Posts 6–9 of the enterprise/maritime B2B batch. */
export const enterpriseMaritimeB2bFinalArticles: SeoArticle[] = [
  {
    slug: "starlink-ocean-mode-50gb-priority-limit-explained",
    title: "Starlink Ocean Mode Is Not the 50GB Priority Block",
    seoTitle: "Starlink Ocean Mode vs Global Priority 50GB | DataGram",
    excerpt:
      "Roam Unlimited with Ocean Mode and Global Priority are different products. Confirm the plan name, water limit, and data rules before a Nigerian vessel sails.",
    metaDescription:
      "Ocean Mode on Roam Unlimited is metered beyond coastal waters. A 50GB Global Priority block is a separate maritime data tier — confirm both in the account.",
    author: "DataGram Nigeria",
    date: "2026-07-11",
    updated: "2026-11-20",
    readTime: "14 min read",
    category: "Maritime",
    image: img("installations/Starlink-Performance/Starlink%20Performance%20Boat%20img%201.jpeg"),
    imageAlt: "Flat Starlink terminal mounted on a vessel during a DataGram installation",
    imageFile: "installations/Starlink-Performance/Starlink Performance Boat img 1.jpeg",
    featured: false,
    serviceCta: {
      label: "Maritime plan consultation",
      href: "/contact",
      blurb: "DataGram assists with available maritime plans (Roam Unlimited with Ocean Mode and Global Priority). Plan/account help and deck installation are separately charged.",
    },
    blocks: blocks(
      p("Updated 20 November 2026 against Starlink’s public Roam, Maritime, and roaming-help materials. Nigerian maritime buyers often treat Starlink Ocean Mode and a 50GB allowance as the same product. They are not. Ocean Mode is a metered option that extends eligible Roam service into international waters. A 50GB figure is a Global Priority data tier: priority traffic for that block, then continued service at a lower priority unless you buy more Priority data. Confirm which name is on the account before anyone briefs the crew."),
      p("Sources to re-check on the day you sail: [Starlink Roam](https://www.starlink.com/roam), [Starlink Maritime / Global Priority](https://www.starlink.com/business/maritime), the [Traveling with Starlink Roam](https://www.starlink.com/support/article/0dd1c2c0-7bae-8c8f-43d4-9a64eb66662f) help article, and Starlink’s Service Plan Descriptions. Product names and per-GB rates change. The account screen is the rule for your line."),
      h2("Ocean Mode versus Global Priority — side by side"),
      table(
        ["Question", "Roam Unlimited with Ocean Mode", "Global Priority (Starlink Maritime)"],
        [
          ["What it is", "Roam travel plan with Ocean Mode enabled for waters beyond the coastal limit", "Business Priority data bucket with land and ocean entitlement"],
          ["50GB figure", "Not a fixed 50GB Ocean Mode allowance — Ocean Mode is usage-based once enabled", "A common Priority data tier size; other bucket sizes also exist"],
          ["International waters", "Intended path for Roam users who enable Ocean Mode beyond coastal waters", "Designed for ocean and global use under Global Priority terms"],
          ["After Priority data ends", "Not applicable the same way — Ocean Mode bills per GB while enabled", "Speeds typically fall to a low residual rate unless you buy more Priority data"],
          ["Best fit", "Occasional offshore legs when Roam is already the right land/travel class", "Working vessels, commercial ops, and frequent ocean use"],
        ],
        "Planning summary only. Confirm entitlement, hardware eligibility, and pricing in the live Starlink account for Nigeria.",
      ),
      h2("What Ocean Mode is (and is not)"),
      p("Starlink’s Roam materials describe coastal and inland water use on Roam plans, and state that coverage on international waters requires Ocean Mode. Industry and support summaries commonly treat that boundary as about 12 nautical miles from land — always verify the distance and eligibility text shown for your account. Ocean Mode is not Global Priority, and it is not a nickname for a 50GB Priority block."),
      p("When Ocean Mode is enabled, Starlink bills usage-based Ocean Mode data. Published USD per-GB rates have moved (including mid-2026 updates on Starlink’s Ocean Mode help materials). This page does not print a Nigeria naira rate. Read the Ocean Mode charge line in your account before you leave port, and remember that enabling Ocean Mode can change how data is billed until you switch it off."),
      p("A working vessel that stays offshore for long charters should not be planned on a roam-class add-on alone. Physical install still matters: mount clearance, salt-rated hardware, power, and VLAN discipline. Plan class cannot fix a blocked sky view. Deck work starts at [offshore maritime installation](/starlink-offshore-maritime-installation); plan class at [Roaming and Global Priority](/starlink-roaming-global-priority-nigeria); crew Wi-Fi at [VLAN split from the bridge](/blog/configure-vlan-starlink-crew-wifi-bridge-operations). Mobility-rated hardware (typically Flat High Performance / Performance) is what maritime use expects — confirm eligibility before purchase."),
      h2("What the 50GB Global Priority block is"),
      p("A 50GB block on Global Priority is Priority data, not Ocean Mode. That allowance is served ahead of best-effort traffic. After it is consumed in the billing period, Starlink’s maritime materials describe continued residual throughput (commonly discussed around 1 Mbps down / 0.5 Mbps up) unless you purchase additional Priority data. During congestion, deprioritised traffic slows first."),
      p("Deprioritisation is not always a hard disconnect. On open ocean with light local demand, residual speeds may still look acceptable. Near busy coastal cells the slowdown is more obvious. Crews who tested mid-ocean and then struggled on the approach home are often seeing congestion or an exhausted Priority meter, not a failed dish."),
      h2("Plan-selection considerations for vessel operators"),
      p("Choose from voyage pattern, not from the marketing name that sounds largest. Occasional coastal hops with mostly land Roam use can be a Roam Unlimited + Ocean Mode question if the account offers it. Continuous Gulf of Guinea work, high-crew OSVs, and charter clauses that require ocean connectivity are Global Priority questions. Compare against an existing VSAT path with the [VSAT and Starlink note](/blog/vsat-vs-starlink-roi-nigerian-offshore-operations-2026)."),
      p("Where the vessel sits in Nigeria's waters, and which plan name matches that route, is the [coastal plan guide](/blog/starlink-nigerian-coastal-vessels-plan-territorial-international-waters)."),
      p("DataGram assists Nigerian operators with available maritime plans — including Roam Unlimited with Ocean Mode and Global Priority — and with account/plan documentation. Maritime installation (deck mount, glands, power, handover) is a separate charge from plan/account assistance. We do not sell Starlink subscriptions as a resale product; subscription billing remains with Starlink."),
      h2("How to monitor usage on a working vessel"),
      p("The Starlink app shows Priority data remaining for accounts that expose the meter. Assign one responsible crew member — often the radio officer or IT-aware mate — to check weekly, not only when WhatsApp stalls. Screenshot the meter at the start of each voyage for the operations file, and write down the plan name next to it so Ocean Mode and Global Priority are not mixed up in the log."),
      p("If you run [marine SD-WAN](/starlink-marine-sdwan-integration), use router traffic reports per VLAN so you know whether crew entertainment or CCTV ate the Priority block."),
      h2("If the account shows a 50GB Priority block"),
      p("Schedule large downloads — OS patches, chart packages, training video caches — early in the billing cycle or while Priority remains. Rate-limit crew streaming SSIDs. Keep bridge and ops on higher QoS so a football stream cannot flatten navigation updates. This advice applies to a Global Priority data tier. It does not turn that tier into Ocean Mode."),
      p("Fifty gigabytes sounds large until twenty people share it with cloud backups enabled. For high-crew OSVs, treat a 50GB Global Priority block as a scarce ops resource, not unlimited welfare bandwidth."),
      h2("When Global Priority is the plan to activate"),
      p("Global Priority is the class without the Roam international time cap, and Starlink presents it as the maritime/ocean Priority product. A 50GB block can sit on that plan; larger buckets exist for heavier fleets. Ocean Mode does not replace Global Priority for a vessel that stays out. Pricing is USD-linked — confirm the live account and see our [Roaming and Global Priority activation guide](/blog/starlink-roaming-global-priority-activation-nigeria). This page does not publish a naira price for either product."),
      h2("Product naming — expect churn"),
      p("SpaceX has marketed Roam, Maritime, Ocean Mode, Local Priority, and Global Priority with overlapping language. Always verify entitlement in the live account: ocean coverage, Priority gigabytes, hardware compatibility, and whether Ocean Mode is enabled. Do not rely on a broker WhatsApp forward from last year."),
      h2("Operational checklist before sailing"),
      p("Confirm the plan name in the app, not the name in last year’s quote. If Ocean Mode will be used, confirm the per-GB rate shown for your country before enabling it. If a Priority meter is visible, record it. Brief crew on streaming limits. Verify QoS still prefers bridge VLANs. If the vessel will stay outside coastal waters for the charter, confirm Global Priority (or an explicitly entitled Ocean Mode path) before sailing."),
      p("Example burn maths for a 50GB Global Priority block, not for Ocean Mode: one crew member streaming HD at roughly 3GB/hour will consume that block in under two days of continuous play. Ten casual users checking mail and light chat may last weeks. The difference is policy."),
      p("When Priority data on a Global Priority tier is exhausted mid-voyage, options are: reduce crew bandwidth, buy more Priority data if the account allows, wait for quieter conditions, or accept lower priority until renewal. A documented 4G or VSAT backup through SD-WAN turns that moment into a known failover — not zero downtime."),
      p("If welfare streaming is a contractual crew right, budget the Priority plan that can carry it, or a separate welfare path. Do not assume a 50GB block will absorb both CCTV upload and streaming for twenty people, and do not assume Ocean Mode is that block."),
      p("Charterers sometimes write “unlimited Starlink” into a contract. Translate that clause into a named plan — Global Priority or Roam Unlimited with Ocean Mode — and a QoS policy before signature."),
      p("Rain fade and obstruction are separate from both products. Fix mounts and sky view first. Mixing a sky-view fault into a data-cap complaint wastes everyone’s time. Keep a printed one-pager in the radio room: current plan name, Ocean Mode on/off, Priority gigabytes remaining if a meter exists, QoS rules, and the escalation contact."),
    ),
    cta: "Need help matching Ocean Mode or Global Priority to a vessel profile? [Contact DataGram](/contact) for maritime plan/account assistance, or book deck work via [offshore maritime installation](/starlink-offshore-maritime-installation). Also see [boat installation](/starlink-boat-installation) and [Global Priority activation](/blog/starlink-roaming-global-priority-activation-nigeria).",
    faqs: faqs(
      {
        question: "What is Starlink Ocean Mode?",
        answer:
          "Ocean Mode is a metered option that extends eligible Roam service into international waters. It is not the 50GB Global Priority data tier. Confirm the name, rate, and hardware eligibility in the account before sailing.",
      },
      {
        question: "Is the 50GB allowance the same thing as Ocean Mode?",
        answer:
          "No. A 50GB block is a Global Priority data tier. After that Priority data is used, service often continues at a lower residual rate unless you buy more Priority data. Ocean Mode is a separate usage-based Roam feature for waters beyond the coastal limit.",
      },
      {
        question: "Does DataGram sell Starlink maritime subscriptions?",
        answer:
          "No. Subscription billing remains with Starlink. DataGram assists with available maritime plan selection and account documentation, and charges separately for maritime installation when you book deck work.",
      },
      {
        question: "How do I move a vessel from Ocean Mode onto Global Priority?",
        answer:
          "Change the plan in the account for a compatible terminal, or have DataGram manage the change and confirm what the screen shows afterwards. Verify hardware eligibility before paying. Do not assume the 50GB block and Ocean Mode are the same line item.",
      },
    ),
  },
  {
    slug: "zero-downtime-internet-escravos-forcados-oil-camps",
    title: "Zero-Downtime Internet for Escravos and Forcados Oil Camps",
    excerpt:
      "How DataGram deploys Starlink for remote Delta oil camps around Escravos and Forcados — survey, PTW, FHP mounts, UPS, and dual-WAN realism.",
    metaDescription:
      "Remote oil camps at Escravos and Forcados need internet that holds. How DataGram deploys Starlink for resilient camp connectivity in Delta State.",
    author: "DataGram Nigeria",
    date: "2026-07-11",
    readTime: "13 min read",
    category: "Oil & Gas",
    image: img("blog/zero-downtime-internet-escravos-forcados-oil-camps.jpg"),
    imageAlt: "Oil camp infrastructure in the Niger Delta at Escravos and Forcados terminals",
    imageFile: "blog/zero-downtime-internet-escravos-forcados-oil-camps.jpg",
    featured: false,
    serviceCta: {
      label: "Discuss remote camp deployment",
      href: "/starlink-installation-niger-delta",
      blurb: "Mobilisation from the Warri logistics corridor with PTW-aware install practice and written speed baselines.",
    },
    blocks: blocks(
      p("Zero-downtime internet for Escravos and Forcados oil camps is a procurement problem dressed as a tech problem. These Delta State terminals and their satellite camps sit far from reliable terrestrial fibre. Historically that meant VSAT, Thuraya handsets, or whatever microwave path a contractor left behind. Starlink changes the latency picture — if you mobilise, mount, and power it like an industrial site, not like a Lekki rooftop."),
      p("This piece is for connectivity and facilities leads supporting Chevron Nigeria operations around the Escravos oil terminal and Shell/TEPNG activity around the Forcados export terminal. We also name Warri as the usual logistics hub, with Sapele and Ughelli as intermediate access points along the broader Escravos–Warri corridor context."),
      h2("Why these locations are hard"),
      p("Access is often by boat or helicopter. Weather windows matter. Power is generator-centric with changeovers that reboot unprotected routers in two seconds. Canopy and industrial structures steal sky view if you plant the dish on the first convenient railing. HSE culture expects PTW paperwork before any mast work."),
      p("DataGram's [Niger Delta coverage](/starlink-installation-niger-delta) and [offshore HSE practice](/starlink-offshore-hse-compliance) exist for exactly this class of site: remote survey first, then mobilisation with a materials list that fits one trip."),
      h2("Why Starlink fits the Delta better than legacy GEO alone"),
      p("LEO paths deliver roughly 20–40 ms latency class performance under normal conditions — usable for VOIP and VPN in a way 600 ms+ VSAT never was. Coverage across the Niger Delta and coastal approaches is the point of the constellation. Rain fade still happens; honest baselines beat brochure peaks."),
      h2("Deployment logistics"),
      p("Advance remote survey: sky view photos, power source, canopy notes, access mode. Equipment list locked before the boat leaves Warri. PTW documentation coordinated with the camp safety officer. Two-man rule on masts and roofs. Post-install connectivity report with recorded download, upload, and latency for the camp HSE/IT file."),
      p("We do not invent cert numbers. We work inside your PTW and leave evidence of what was tested."),
      h2("Hardware for permanent camps"),
      p("Flat High Performance is the usual permanent-camp choice for durability and performance envelope. Elevated mast mounting clears fringe canopy. Surge protection and grounding matter in Delta lightning seasons. Cable routes avoid hot exhaust and standing water. Details mirror [offshore maritime](/starlink-offshore-maritime-installation) discipline even when the \"vessel\" is a fixed camp deck."),
      h2("Power and the generator changeover problem"),
      p("Most camps have generator power. Size the Starlink circuit honestly. Put UPS on router (and dish where required) so the 2–3 second transfer does not reboot the network stack. Without UPS, \"Starlink keeps dropping\" tickets are often just changeover physics."),
      h2("Zero-downtime: Starlink primary + 4G failover"),
      p("Dual-WAN routers (Peplink-class examples are common) can fail traffic to LTE when the satellite path degrades. Be realistic: MTN/Airtel coverage at Escravos or Forcados may be thin or sector-loaded. Failover buys continuity for critical apps, not identical throughput. Design QoS so ops traffic wins on the skinny path — see [marine SD-WAN patterns](/starlink-marine-sdwan-integration) applied to camp networks."),
      h2("What \"zero-downtime\" should mean in the SOW"),
      p("Define it: automatic failover under X seconds, UPS runtime of Y minutes, documented monthly test, and a named escalation contact. Marketing \"unlimited uptime\" without those numbers is fiction. DataGram's handover pack is how you prove the install met the SOW on day one."),
      p("If your camp sits on the Warri logistics chain via Sapele or Ughelli staging, say so early — travel and boat time dominate calendar more than torque time on the mast."),
      p("Security and estate rules inside operator camps still apply: escort requirements, no-photography zones, approved drilling windows. Bring ID packs and tool lists that match the PTW. A perfect RF plan dies if security turns the crew around at the jetty."),
      p("For multi-camp programmes along the corridor, standardise mast kits and router images so the second and third sites install faster. That is fleet thinking applied to Delta geography — same discipline as [fleet management](/starlink-fleet-management-nigeria) on land."),
      p("After storms, re-check obstruction and torque. New temporary structures and scaffold appear quickly around turnarounds. A dish that scored clean in January can be half-blind by a March canopy or a new tank farm walkway."),
      p("Keep Thuraya or VSAT only if your emergency communications plan still requires them — but stop paying GEO rates for daily ERP sync if Starlink has already taken that load with measured baselines on file."),
      p("Camp WiFi design still matters after the dish is online. Concrete blocks, metal roofs, and long walking distances between accommodation and the offices kill signal. Budget access points or mesh on the LAN side so users do not declare Starlink \"down\" when they are simply standing behind a tank wall."),
      p("Procurement tip: require the installer to leave a laminated power and reboot card next to the router. Generator operators change shifts; tribal knowledge does not. The card should show UPS location, breaker ID, and the WhatsApp escalation number."),
      p("For Escravos-linked and Forcados-linked camps specifically, ask during survey whether the mount site is inside a classified zone with photography bans — that affects how we capture handover evidence while still satisfying your documentation needs."),
      p("Seasonal flooding and soft ground around some Delta pads change mast footing requirements. Non-penetrating bases that work on a dry concrete pad in February may need redesign after May rains. Say so in the survey notes before steel is cut."),
      p("Close the loop with a 30-day post-install call: confirm UPS still holds through changeover, dual-WAN still fails over, and the camp has not \"improved\" the mount with unapproved welds. That call catches most quiet regressions."),
      p("When the camp shares connectivity with contractor tents, VLAN guest rules again — same logic as vessel crew WiFi. Unmanaged guest SSIDs will burn priority data and create security noise."),
    ),
    cta: "Planning Starlink for a remote Delta camp or terminal support site? [Contact DataGram](/contact) — [Niger Delta installs](/starlink-installation-niger-delta) and [HSE practice](/starlink-offshore-hse-compliance).",
    faqs: faqs(
      {
        question: "Does Starlink work at Escravos in Delta State?",
        answer:
          "Yes — LEO coverage supports Delta coastal and terminal-adjacent sites when the dish has clear sky view and correct plan/hardware. Site survey still decides mount height and obstruction score.",
      },
      {
        question: "How do you install Starlink in a remote Niger Delta oil camp?",
        answer:
          "Remote pre-mobilisation survey, PTW coordination, two-man install, marine/industrial-grade mount and grounding, UPS for generator transfers, speed baseline report, then demobilisation. Access is often by boat from the Warri corridor.",
      },
      {
        question: "What is the best internet solution for remote oil camps in Nigeria?",
        answer:
          "For low-latency ops tools, Starlink with professional mount and power conditioning is usually the primary. Keep 4G or legacy VSAT as documented failover where coverage exists. Hybrid beats single-path hope.",
      },
      {
        question: "Can Starlink provide zero-downtime internet at Forcados terminal?",
        answer:
          "Single-path Starlink cannot promise absolute zero downtime. Dual-WAN with UPS and tested failover is how camps approach that SLA language. LTE at Forcados may be limited — set expectations in the survey.",
      },
    ),
  },
  {
    slug: "salt-spray-corrosion-marine-antennas-gulf-of-guinea",
    title: "Salt Spray Corrosion on Marine Antennas in the Gulf of Guinea",
    excerpt:
      "How salt air attacks Starlink mounts and connectors in the Gulf of Guinea — and the marine-grade hardware practices DataGram uses to slow that failure curve.",
    metaDescription:
      "Salt air destroys poorly protected marine antennas in months. How DataGram protects Starlink dishes from corrosion on Gulf of Guinea vessels.",
    author: "DataGram Nigeria",
    date: "2026-07-11",
    readTime: "13 min read",
    category: "Maritime",
    image: img("blog/salt-spray-corrosion-marine-antennas-gulf-of-guinea.jpg"),
    imageAlt: "Sea spray and harsh ocean conditions causing salt corrosion on marine antenna hardware",
    imageFile: "blog/salt-spray-corrosion-marine-antennas-gulf-of-guinea.jpg",
    featured: false,
    serviceCta: {
      label: "Book marine-grade installation",
      href: "/starlink-offshore-maritime-installation",
      blurb: "316 fasteners, sealed glands, and maintenance guidance — not kit bolts left bare in salt air.",
    },
    blocks: blocks(
      p("Salt spray corrosion on marine antennas in the Gulf of Guinea is predictable chemistry, not bad luck. Sodium chloride lands on metal, humidity stays high year-round (often 80%+ RH), heat accelerates galvanic attack, and cheap carbon-steel kit hardware starts weeping rust while the phased array still passes traffic. Operators then blame \"Starlink\" for intermittent cable errors that began as green corrosion on a connector."),
      p("This guide is for superintendents and marine engineers specifying mounts for OSVs and platforms working Gulf of Guinea weather — including operating environments such as approaches to Bonga field, Agbami FPSO waters, and Escravos terminal sea room. Naming those areas describes exposure climate; it is not a claim that DataGram installed at those named assets."),
      h2("What fails first on unprotected installs"),
      p("Mounting bracket bolts: kit carbon steel can show serious rust within 3–6 months in aggressive spray zones. Cable connectors: oxidation at the dish-end interface causes intermittent \"cable disconnected\" style faults. Mast base welds on mild steel: surface rust progresses toward structural doubt within roughly 12–18 months if left bare in salt."),
      p("The Starlink Flat High Performance housing carries an IP56-class environmental rating for dust and water resistance on the terminal itself. That rating does not make the included mount hardware marine-grade. Treat kit bolts as temporary until upgraded."),
      h2("DataGram's marine-grade approach"),
      p("We specify 316 stainless fasteners for mounting hardware rather than leaving kit bolts as the permanent solution. Self-amalgamating tape wraps connector junctions. Marine-grade sealant closes deck penetrations. Custom masts use powder-coated or hot-dip galvanised steel where fabricated. UV-resistant conduit protects exposed cable runs. Drip loops keep water out of glands. Practices align with [offshore maritime installation](/starlink-offshore-maritime-installation) and [boat installs](/starlink-boat-installation)."),
      p("Work still follows PTW and two-man rules on deck — [HSE page](/starlink-offshore-hse-compliance)."),
      h2("Maintenance schedule that actually happens"),
      p("Visual inspection of all mounting hardware every six months. Fresh-water rinse of the dish surface monthly to remove salt crystal buildup (when safe and permitted). Re-check sealant at penetrations annually. Torque check after heavy weather. Log it — HSE desks like dates."),
      p("Skip maintenance and even 316 hardware collects crud that holds moisture against dissimilar metals."),
      h2("Procurement language that prevents shortcuts"),
      p("Put \"316 stainless fasteners,\" \"marine sealant at all penetrations,\" and \"connector sealing\" in the SOW. If a quote is dramatically cheaper, ask which of those lines disappeared. Rework after six months of spray costs more than doing it once."),
      h2("Symptoms to escalate early"),
      p("Brown streaks under brackets, white powder on aluminium, green on copper connectors, intermittent link drops in dry weather (classic connector corrosion), and play in a mast foot that was rigid at install. Photograph and schedule a service visit before the terminal spends a week offline mid-charter."),
      p("Corrosion control is not glamorous. It is why one fleet's dishes survive three seasons and another's look like scrap after one rainy year in the Bight."),
      p("Paint alone is not a strategy. Coatings chip under vibration and tool strikes; stainless and correct isolation washers matter more. When dissimilar metals meet — stainless bolt into aluminium bracket — use isolating washers and anti-seize rated for marine use so you are not building a battery."),
      p("Cable selection matters too: cheap indoor Ethernet jackets chalk and crack in UV; marine outdoor-rated jackets last. Glands should match cable diameter so they actually seal. A pretty torque job with the wrong gland still drinks salt water."),
      p("Fleet operators should keep a spares kit aboard: 316 bolts of the sizes used, amalgamating tape, sealant tube, and one spare Ethernet adapter if the network design depends on it. Waiting on a courier to Warri while the vessel is offshore is not a maintenance plan."),
      p("During dry-dock or yard periods, inspect mounts with fresh eyes. Yard grit and welding flash are hostile; cover the terminal when hot work happens nearby. Reinstate drip loops and torque after any mast work by other trades."),
      p("If you inherit an install with orange rust already present, schedule a controlled remount rather than spraying over active corrosion. Sealing rust in place only postpones the connector faults."),
      p("Compare two quotes by materials list, not day-rate. The cheaper crew using kit bolts and indoor cable will look good on month one and expensive on month seven when the vessel is on hire and the link flaps."),
      p("Insurance and charter technical questionnaires increasingly ask about antenna mounting standards. Having 316 hardware and sealed glands on the handover photos is not vanity — it is evidence you can attach to a vetting pack."),
      p("In harmattan dust mixed with coastal salt, rinse schedules may need to tighten. Dust holds moisture against metal. Captains operating between Lagos coast and Delta waters should treat spray and dust as a combined contaminant, not two separate seasons."),
      p("When replacing a corroded mount, inspect the dish cable for nicks where it rubbed a rusty edge. Many \"new mount, same fault\" stories are damaged conductors that never got replaced."),
      p("Train deck crew not to use the Starlink mast as a handy tie-off or scaffolding anchor. Mechanical abuse plus salt is how \"marine-grade\" installs still fail early. Put that rule in the handover briefing."),
      p("If your operating pattern includes long stays near river mouths with brackish spray and industrial emissions, inspect more often than the six-month baseline. Combined contaminants are harsher than open-ocean salt alone."),
      p("Write corrosion findings into the planned maintenance system with photos. Verbal \"looks rusty\" reports disappear; dated images get budget for a remount before the link fails on hire."),
      p("Do the rinse and inspect on a calm day with PTW if needed — safety first, then salt removal. A rushed rinse that risks a fall helps no one."),
    ),
    cta: "Specify a marine-grade Starlink install for Gulf of Guinea duty? [Contact DataGram](/contact) — [offshore](/starlink-offshore-maritime-installation) or [boat](/starlink-boat-installation).",
    faqs: faqs(
      {
        question: "Does salt water damage a Starlink dish?",
        answer:
          "The FHP housing is built for outdoor exposure (IP56-class), but salt accelerates corrosion on non-marine mounts, fasteners, and connectors. Protect the mechanical path or expect early failures.",
      },
      {
        question: "What is the IP rating of the Starlink Flat High Performance dish?",
        answer:
          "Flat High Performance terminals are commonly specified around IP56 for dust and water resistance of the unit itself. Confirm the rating on your hardware documentation. Mount kits still need marine upgrades.",
      },
      {
        question: "How do I protect Starlink mounting hardware from rust on a vessel?",
        answer:
          "Use 316 stainless fasteners, seal connectors, apply marine sealant at deck penetrations, protect cables in UV conduit, and rinse salt buildup on a schedule.",
      },
      {
        question: "How often should I inspect my Starlink installation on a boat?",
        answer:
          "Visually check mounts and glands at least every six months, rinse the dish monthly when practical, and re-check sealant annually or after severe weather.",
      },
    ),
  },
  {
    slug: "starlink-enterprise-activation-as-a-service-nigeria",
    title: "Starlink Enterprise Activation as a Service in Nigeria",
    excerpt:
      "What managed Starlink activation includes for Nigerian enterprises — account, plan, payment, network config, VAT invoicing, and optional ongoing account management.",
    metaDescription:
      "DataGram handles Starlink procurement, activation, and ongoing management for Nigerian enterprises — so IT focuses on the business, not the dish.",
    author: "DataGram Nigeria",
    date: "2026-07-11",
    readTime: "11 min read",
    category: "Enterprise",
    image: img("blog/starlink-enterprise-activation-as-a-service-nigeria.jpg"),
    imageAlt: "DataGram professional enterprise Starlink activation service in Nigeria",
    imageFile: "blog/starlink-enterprise-activation-as-a-service-nigeria.jpg",
    featured: false,
    serviceCta: {
      label: "Discuss managed activation",
      href: "/starlink-enterprise-nigeria",
      blurb: "From kit and plan selection to VLAN handoff and VAT-compliant naira invoicing — one activation path.",
    },
    blocks: blocks(
      p("Starlink enterprise activation as a service in Nigeria exists because buying a kit is the easy part. The hard parts are dollar-card payment, correct plan class, a service address that matches reality, bypass into your firewall, and paperwork finance will accept. Companies that treat activation as \"unbox and pray\" burn weeks after the dish is already on the roof."),
      p("This article is for IT and procurement leads who want a working network, not a cardboard box. It positions DataGram as the managed path — physical install plus account and configuration — without pretending SpaceX will suddenly issue local VAT invoices."),
      h2("What enterprise activation actually includes"),
      p("Account creation with the right plan for the site. Service address registration that satisfies Nigerian location rules for that use case. Payment method setup — client dollar card or procurement facilitation through DataGram where agreed. Network configuration: Ethernet handoff, VLAN notes, QoS basics, optional dual-WAN. Handover documentation: serials, photos, speed baselines, support contacts."),
      p("That stack is what separates activation-as-a-service from a labour-only mount job. See [enterprise Starlink Nigeria](/starlink-enterprise-nigeria) for single-site depth and [fleet management](/starlink-fleet-management-nigeria) when you have many sites."),
      h2("Where companies get stuck without managed activation"),
      p("Naira cards declined at Starlink checkout. Service address for a warehouse that is not yet energised. Bypass into a third-party router nobody documented. Plan tier too cheap for the call-centre load. Each issue looks small until go-live week."),
      h2("DataGram's activation service scope"),
      p("We handle procurement where scoped, activation, network configuration to agreed design, and VAT-compliant naira invoicing for the goods and services we supply. The client receives a working path — not an orphaned kit. Subscription lines still follow SpaceX rules; we explain the split for finance."),
      h2("Account handoff vs ongoing management"),
      p("After activation you can take full account ownership or leave DataGram as the administrative contact for renewals and escalations. Fleet clients usually keep managed administration so branch managers are not each reinventing the Starlink app."),
      h2("Fleet activation on a project timeline"),
      p("Estate developers, NGOs opening field stations, and retailers launching branches need simultaneous go-lives. We stage surveys, kits, and activations to the project calendar — covered under [fleet management](/starlink-fleet-management-nigeria) and the [enterprise–marine hub](/starlink-enterprise-marine-hub)."),
      h2("Questions to ask any installer before you engage"),
      p("Do you issue VAT-compliant naira invoices? Can you manage the Starlink account or only drill the roof? Do you have a written activation checklist (plan class, bypass, speed test locations, UPS)? Who owns the first 30 days of faults? If answers are vague, you are buying a ladder visit, not activation-as-a-service."),
      p("Managed activation costs more than a casual mount quote because it includes the failure modes that waste executive time. Price the week of go-live chaos you avoid, not only the hours on the roof."),
      p("A typical single-site activation week looks like: survey Monday, materials confirm Tuesday, mount and cable Wednesday, account activation and LAN handoff Thursday, user acceptance tests Friday. Compress that only when estate access and power are already perfect — they rarely are."),
      p("For regulated industries — banks, oil camps, NGOs with donor audits — keep the activation checklist signed. Serial numbers, plan class, speed tests at the desk, and invoice copies belong in one folder. That folder is what survives staff turnover."),
      p("Activation-as-a-service is also how you avoid orphaned dishes when a project manager leaves. If DataGram remains on the account admin path, renewals do not depend on one ex-employee's Gmail."),
      p("Compare vendors on deliverables: VAT invoice sample, sample handover PDF, named support channel, and whether they will touch VLAN/bypass. If they only offer \"we climb and screw,\" you are not buying enterprise activation."),
      p("When you are ready, bring site count, desired go-live date, and whether finance needs consolidated billing. We will tell you honestly whether you need a one-off enterprise activation or full [fleet management](/starlink-fleet-management-nigeria)."),
      p("Activation-as-a-service also covers the awkward middle: hardware arrives before the estate drilling permit, or the permit arrives before the dollar card works. We sequence dependencies so the expensive part — people on site — only happens when account and access are ready."),
      p("For NGOs, donor language often requires \"evidence of connectivity spend.\" Our handover pack (photos, tests, invoice) is written for that audience as much as for IT. Say so when you brief us."),
      p("Enterprises opening in secondary cities — Onitsha, Warri, Uyo — face the same activation stack as Lagos, with harder travel logistics. Managed activation includes that scheduling reality, not only the app clicks."),
      p("Bottom line: if your PO only says \"supply and install Starlink,\" amend it to \"activate, configure, document, and invoice.\" Those four verbs are the difference between a dish on a roof and an enterprise service your auditor recognises."),
      p("That amendment also forces a clearer commercial conversation about who owns renewals — you, or DataGram under fleet management."),
    ),
    cta: "Ready for managed Starlink activation? [Contact DataGram](/contact) — [enterprise](/starlink-enterprise-nigeria), [fleet](/starlink-fleet-management-nigeria), or [enterprise–marine hub](/starlink-enterprise-marine-hub).",
    faqs: faqs(
      {
        question: "What does Starlink enterprise activation involve in Nigeria?",
        answer:
          "Plan selection, account setup, payment path, service address compliance, physical install where scoped, network handoff (VLAN/bypass), testing, and documentation. It is more than mounting a dish.",
      },
      {
        question: "Can DataGram handle my Starlink account management ongoing?",
        answer:
          "Yes. After activation we can hand the account fully to you or remain as administrative manager for renewals and escalations — common for fleets.",
      },
      {
        question: "How does DataGram handle Starlink payment for enterprise clients?",
        answer:
          "Options include client-paid Starlink checkout with our configuration support, or procurement facilitation where commercially agreed. Local naira VAT invoices cover DataGram-supplied hardware and services.",
      },
      {
        question: "What is included in DataGram's activation as a service?",
        answer:
          "Scoped mix of procurement, activation, install, network configuration, VAT-compliant invoicing for our supply, and handover docs. Fleet rollouts add coordinated scheduling across sites.",
      },
    ),
  },
];

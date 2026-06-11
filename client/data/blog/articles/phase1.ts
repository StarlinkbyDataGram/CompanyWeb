import type { SeoArticle } from "../article-types";
import { blocks, faqs, h2, h3, img, p } from "../article-types";

export const phase1Articles: SeoArticle[] = [
  {
    slug: "professional-starlink-installation-nigeria-guide",
    title: "Professional Starlink Installation in Nigeria: The Complete Guide",
    excerpt:
      "Site survey, dish placement, mounting, cable routing, grounding, and handover testing — what a proper Nigerian Starlink install actually involves.",
    metaDescription:
      "Professional Starlink installation Nigeria: survey, mounts, grounding, cable routing, and testing for estates, homes, and enterprise sites.",
    author: "DataGram Nigeria",
    date: "2026-06-11",
    readTime: "18 min read",
    category: "Evergreen",
    image: img("blog/professional-starlink-installation-nigeria-guide.jpg"),
    imageAlt: "Professional Starlink dish installation on Nigerian rooftop by DataGram",
    imageFile: "blog/professional-starlink-installation-nigeria-guide.jpg",
    featured: true,
    serviceCta: {
      label: "Book a site survey",
      href: "/starlink-home-installation",
      blurb: "Nationwide installs with documented handover — Lagos, Abuja, Port Harcourt, Delta, and remote compounds.",
    },
    blocks: blocks(
      p("Professional Starlink installation in Nigeria is not about screwing a dish to the nearest flat surface and hoping the app turns green. It's a sequence: understand your sky view, choose the right mount for your roof type, route cable so rats and rain don't undo the work, bond earth properly before lightning season, then test where people actually sit — not only beside the router. Skip any step and you'll blame Starlink for problems your compound created."),
      p("We've commissioned hundreds of sites from Lekki high-rises to creek camps in Bayelsa. The pattern is the same: properties that look simple on Google Maps often have water tanks, neighbour walls, or estate conduit rules that change the mount, the cable path, and the bill. This guide walks through what a proper install involves so you can compare quotes fairly or understand what you're paying a crew to do."),
      h2("Why professional Starlink installation matters in Nigeria"),
      p("NEPA outages, generator changeovers, and harmonic noise from estate inverters don't care whether your dish was aligned by a pro. But obstruction score, cable integrity, and grounding absolutely do. A dish mounted too low behind a parapet will hunt satellites all rainy season. A cable pinched in a POP ceiling will develop intermittent faults after harmattan dust swells the sheath."),
      p("Estate managers in VI, Maitama, and newer Benin developments increasingly ask for scope letters before drilling. Professional installers document torque specs, conduit colour, and restoration of sealant — paperwork that speeds security clearance and protects your deposit if a neighbour complains."),
      p("Enterprise and NGO sites add VLAN handoff, dual-WAN failover, and generator-aware UPS sizing. Those aren't DIY weekend tasks unless your in-house IT team already documents network topology the way auditors expect."),
      h2("Step 1: Site survey and obstruction analysis"),
      p("Every serious install starts with a survey — on-site or remote with good photos. The installer maps the 100-degree sky window Starlink's phased array needs, notes trees that will grow into the path, and identifies alternative mount positions if the obvious roof corner is blocked."),
      p("Use the Starlink app's obstruction tool at the proposed dish location, not from ground level. Walk the property: rear service yard, flat concrete slab, parapet wall, or dedicated mast. In compound living, check whether a neighbour's new construction will steal your sky view within twelve months."),
      h3("What a survey deliverable should include"),
      p("A written survey lists obstruction percentage, recommended mount type, cable route sketch, estimated materials, and any estate or landlord approvals needed. DataGram surveys in major cities start from about ₦85,000 depending on travel and roof access — cheap compared to reordering a mount after the wrong bracket was welded to corrugated iron."),
      p("For [Lagos high-rises](/starlink-installation-lagos), surveys must account for crane paths, shared roof access, and whether security allows weekend work. [Abuja estates](/starlink-installation-abuja) often have excellent sky view from rear blocks but strict facade rules. [Port Harcourt](/starlink-installation-rivers-state-port-harcourt) adds rain fade expectations and lightning exposure that influence grounding scope."),
      h2("Step 2: Choosing hardware and plan class"),
      p("Confirm plan eligibility on [Starlink's official site](https://www.starlink.com/map) before buying hardware. Nigeria has wide coverage, but residential self-service slots, business priority, and mobility classes behave differently. Standard kits suit fixed homes with clear sky. High Performance dishes help borderline obstruction and higher concurrent load. Mini suits portability and lower power draw — critical if you're on inverter or generator budgets."),
      p("Maritime and in-motion use require mobility-rated hardware — not a residential dish strapped to a vessel deck. See our [maritime installation service](/starlink-offshore-maritime-installation) if you're on the water or an OSV."),
      h2("Step 3: Mount selection for Nigerian roofs"),
      p("Nigerian roofs are not one type. Corrugated iron sheets on bungalows need standoff mounts that don't crush ridges or leak in rainy season. Concrete slabs on flats accept non-penetrating weighted bases or chemical anchor bolts where structural engineers allow. Parapet walls on Lagos townhouses favour J-mounts or short masts that clear the wall without exceeding estate height rules."),
      h3("Common mount types"),
      p("J-mount / pipe mount: versatile on walls and short masts; popular in compounds where roof access is restricted. Flat-roof weighted base: no penetrations; check wind rating during harmattan gusts. Tripod ground mount: useful in yards with open sky but no safe roof access — common in Port Harcourt compounds with internal courtyards. Extended mast: raises the dish above tree lines and water tanks — often mandatory in Asaba and Enugu hillside properties."),
      p("Torque every bolt to spec. We've retouched installs where vibration from generators on the same roof structure loosened brackets within six months. Lock washers and thread locker on exposed hardware are not optional on the coast."),
      h2("Step 4: Cable routing and weatherproofing"),
      p("The integrated cable on Gen 3/4 dishes is not field-replaceable cheaply. Treat it like fragile infrastructure: gentle bend radius, no sharp 90-degree corners through wall glands, UV-rated conduit on every exterior run. Route away from generator exhaust, solar panel DC runs, and fluorescent ballasts that inject noise."),
      p("Drill through walls with downward-sloping holes so water doesn't follow the cable indoors. Use proper gland fittings and sealant rated for Nigerian sun. In estates that mandate surface conduit, match colour and tray routing to facility rules — security will make you redo grey PVC on a cream facade."),
      p("Rats and rodents are a real failure mode. Buried conduit, metal-armoured sections near crawl spaces, and avoiding cable resting on compound walls reduce chew damage. We cover rodent protection in detail on installs where clients have lost ISP cables before."),
      h3("Indoor termination"),
      p("Bring the cable to the router location with slack coiled neatly — not stuffed behind a hot inverter. If you need Ethernet to a rack, plan for the official Starlink Ethernet adapter and a patch panel labelled for handover. [Enterprise sites](/starlink-enterprise-nigeria) often terminate in a comms cabinet with UPS on a dedicated circuit."),
      h2("Step 5: Grounding and lightning protection"),
      p("Lightning season across the south kills poorly grounded dishes and routers. A proper earth bond uses driven rods or building earth bars per site rules, with equipotential bonding between mount, cable shield, and indoor surge protection. DIY grounding with a rusty nail to a rain pipe fails — and voids the confidence of any insurer you might claim under."),
      p("Surge protectors on the power path and PoE/data path add another layer. Document resistance readings if your estate requires electrical compliance sign-off."),
      h2("Step 6: Power conditioning"),
      p("Starlink draws modest steady power but surges when the dish motors search after reboot. Nigerian estates reboot everything when generators take over from EKEDC or AEDC. Size a line-interactive or online UPS for router and dish if calls must survive changeover. Whole-home inverter users should confirm pure sine output — modified sine inverters cause odd router behaviour."),
      p("Factories with heavy motors should segregate networking circuits. Document expected runtime: a 600 VA UPS gives minutes, not hours — fuel or solar is a separate design."),
      h2("Step 7: Configuration, Wi-Fi, and network integration"),
      p("After physical install, activation happens in the Starlink app: confirm service address, select plan, run speed tests. Then test Wi-Fi in every room people use. Concrete walls and POP ceilings in Nigerian flats eat signal. Mesh nodes, wired access points, or third-party routers in bypass mode extend coverage without blaming the satellite link."),
      p("Offices may need guest SSIDs, VLAN separation, or dual-WAN with fibre or 5G failover. Policy routing sends voice traffic one path and bulk sync another — document IP plans before go-live."),
      h2("Step 8: Handover testing and documentation"),
      p("Professional handover includes speed tests at desk locations, obstruction score screenshot, photos of mount and glands, labelled cable paths, and a support contact. Ask for rain-season expectations in writing: LEO links fade in downpours — that's physics, not installer failure — but baseline latency and recovery time should be recorded."),
      p("Typical field ranges in Nigeria: download roughly 50–1,000 Mbps, upload 10–100 Mbps, latency 20–40 ms when Wi-Fi isn't the bottleneck. Your mileage depends on plan class, obstruction, and beam load."),
      h2("Installation cost expectations in 2026"),
      p("Labour alone often runs ₦10,000–₦150,000 depending on travel, roof complexity, and conduit scope. Full projects including hardware, materials, configuration, and testing commonly land ₦450,000–₦1,060,000+ for residential and SME sites. Enterprise, multi-dish, and [maritime scopes](/starlink-offshore-maritime-installation) are quoted after survey."),
      p("Compare quotes by deliverables, not headline naira. Two installers quoting ₦80,000 may mean different things if one excludes grounding photos and estate conduit."),
      h2("When DIY is reasonable — and when it isn't"),
      p("DIY works on a simple bungalow with short cable run, safe ladder access, and no estate drilling rules. DIY fails when cables sun-bake on facades, mounts miss wind rating, grounding is skipped, or security rejects retrofits. Rework often costs more than professional install from day one."),
      p("If you're in [Delta State](/starlink-installation-delta-state), [Bayelsa creek access](/starlink-installation-bayelsa-yenagoa), or a [Lekki estate](/starlink-installation-lagos) with strict facility teams, budget for professional scope before hardware ships."),
    ),
    cta: "If you want obstruction mapped, mounts spec'd for your roof type, and handover docs your estate manager will accept, [contact DataGram](/contact) or start with our [home installation service](/starlink-home-installation). We survey before we quote — no surprise conduit bills after the crew is on your roof.",
    faqs: faqs(
      {
        question: "How long does professional Starlink installation take in Nigeria?",
        answer:
          "A straightforward bungalow install often completes in one day after survey approval. Complex estates with long conduit runs, multi-floor cable paths, or mesh Wi-Fi rollout may take two days. Survey and estate approval lead times vary — send roof photos early.",
      },
      {
        question: "Do I need landlord or estate permission before installing Starlink?",
        answer:
          "Yes, on most leased properties and gated estates. Many Lagos and Abuja developments require written scope, conduit colour matching, and security escorts. Installing without approval risks forced removal and deposit disputes.",
      },
      {
        question: "Can installers work during rainy season?",
        answer:
          "Yes, with scheduling common sense. Roof work pauses during active thunderstorms. Cable glands and sealant need dry windows to cure properly. Rain fade after install is normal — alignment and obstruction matter more than picking a dry month.",
      },
      {
        question: "What's included in a DataGram handover package?",
        answer:
          "Mount and cable photos, obstruction score, speed tests at use locations, labelled paths where applicable, grounding documentation, and a support path for post-install app errors. Enterprise jobs add VLAN and failover test logs.",
      },
      {
        question: "Is professional installation required by Starlink?",
        answer:
          "Starlink sells self-install kits. Professional installation is optional but strongly recommended for complex Nigerian roofs, estate rules, enterprise networks, and any site where lightning or rodent damage is likely.",
      },
    ),
  },
  {
    slug: "starlink-maritime-ships-boats-nigeria-setup",
    title: "Starlink Maritime Internet Setup for Ships and Boats in Nigeria",
    excerpt:
      "Plan classes, marine mounts, deck routing, power on vessels, and realistic throughput for Gulf of Guinea operators — from berth to underway.",
    metaDescription:
      "Starlink maritime setup Nigeria: marine hardware, OSV installs, creek boats, power, and speeds for ships operating from Nigerian ports.",
    author: "DataGram Nigeria",
    date: "2026-06-11",
    readTime: "14 min read",
    category: "Evergreen",
    image: img("blog/starlink-maritime-ships-boats-nigeria-setup.jpg"),
    imageAlt: "Starlink maritime terminal installed on vessel deck in Nigeria",
    imageFile: "blog/starlink-maritime-ships-boats-nigeria-setup.jpg",
    featured: false,
    serviceCta: {
      label: "Maritime installation",
      href: "/starlink-offshore-maritime-installation",
      blurb: "OSVs, supply boats, and coastal camps — marine-rated mounts and PTW-ready documentation.",
    },
    blocks: blocks(
      p("Starlink maritime internet setup is not a residential dish zip-tied to a railing. Vessels roll, salt spray corrodes cheap glands, and plan classes distinguish fixed land service from mobility and maritime tiers that track satellites while you're underway. Nigerian operators from Lagos pilot boats to Niger Delta OSVs need the right hardware, mount, and power design before procurement signs a PO."),
      p("This guide covers what a complete ship and boat setup involves: eligibility checks, marine terminals versus standard kits, deck mounting, cable routing, power on diesel-heavy vessels, and realistic speed expectations in Gulf of Guinea weather. If you're only evaluating berth-side connectivity at [Port Harcourt](/starlink-installation-rivers-state-port-harcourt), some sections still apply — but motion profile drives everything."),
      h2("Maritime Starlink plan classes and eligibility"),
      p("Confirm service eligibility on [Starlink's coverage and mobility documentation](https://www.starlink.com/) before buying. Land residential plans are for fixed addresses. Mobility and maritime classes exist because antennas must hand off between LEO satellites while the platform moves. Using the wrong class can mean poor performance or account issues — verify during procurement, not after the dish is on the bridge wing."),
      p("Flat High Performance and dedicated maritime terminals use phased arrays that track multiple satellites. Standard fixed dishes lock to one pass pattern suited for bungalows, not roll and pitch on an OSV."),
      h2("Hardware: Flat High Performance vs standard for vessels"),
      p("For many coastal vessels and large yachts, Flat High Performance hardware on a marine mount covers alongside and moderate motion. Full maritime terminals target continuous underway use on commercial vessels. The choice depends on what percentage of time you're at berth versus at heading, crane sweep clearance, and budget. We compare hardware in depth in our [Flat HP vs standard maritime guide](/blog/flat-high-performance-vs-standard-dish-maritime)."),
      h2("Deck mounting and obstruction at berth and at sea"),
      p("Survey twice: obstruction at the pier and obstruction at typical heading. Cranes, helidecks, stack exhaust, and container geometry block sky view. Mounts must clear crew walkways and safety rails per vessel PTW rules. Stainless hardware, proper drip loops, and IP-rated glands are mandatory — Gulf of Guinea humidity destroys underspecified installs within months."),
      p("Creek boats and smaller craft may use shorter masts on T-tops or stern arches. Balance weight and windage — harmattan gusts catch oversized brackets. For [boat-specific installs](/starlink-boat-installation), cable lengths and router placement below deck need ventilation and corrosion planning."),
      h2("Cable routing on metal decks"),
      p("Route cables in tray with shield bonding, away from HF radio coax and engine ignition noise. Drill points require class approval and fire-stop compound where regulations demand. Never pinch the integrated dish cable in a hatch — replacement is expensive and downtime hurts charter revenue."),
      h2("Power architecture on Nigerian vessels"),
      p("House batteries, inverter harmonics, and generator transfer reboot routers mid-watch if you skip conditioning. Document who powers the dish down during maintenance. Size UPS segments for networking gear with inrush in mind — everything restarting at once trips breakers."),
      p("Diesel-heavy OSVs may run 24 V or 220 V distribution depending on zone. Use approved DC-DC or AC supplies per Starlink specs; hack wiring voids warranties and insurance arguments."),
      h2("Network design below deck"),
      p("Separate crew welfare Wi-Fi from bridge systems and CCTV backhaul with VLANs. Guest portals on charter yachts differ from OSV ops tablet networks. Handover diagrams help when third-party vendors rotate each contract."),
      p("Upload shaping matters for CCTV and file sync from platforms. If upstream is continuous, size plans honestly and test to the cloud endpoints you actually use — not speedtest.net alone."),
      h2("Realistic speeds and rain fade offshore"),
      p("LEO latency stays attractive versus geostationary satellite for voice and Teams — commonly 20–40 ms when the link is healthy. Throughput still fades in heavy rain. Honest operators baseline after install: download often 50 Mbps–1,000 Mbps, upload 10 Mbps–100 Mbps depending on plan and sky view, then compare against weather logs."),
      p("Keep VSAT during transition if contracts require. Policy routing sends crew welfare one path and legacy apps another until you validate Starlink throughput for critical ops."),
      h2("Logistics from Nigerian ports"),
      p("Batch surveys with yard periods in [Port Harcourt](/starlink-installation-rivers-state-port-harcourt) and Lagos anchorages to reduce repeat mobilizations. Weather windows matter — aligning sea trials beats sending crews twice."),
      p("For [offshore rig and platform work](/starlink-offshore-maritime-installation), PTW paperwork should list drill points, gland locations, torque checks, and RF safety zones near helicopter paths where applicable."),
      h2("Regulatory and safety notes"),
      p("Nigeria's telecom environment evolves — enterprise maritime users should keep NCC awareness for corporate compliance programs. RF exposure limits matter on crowded decks; mount height and signage may be required by vessel SMS manuals."),
    ),
    cta: "If you're outfitting an OSV, supply boat, or coastal camp, start with a marine survey that maps obstruction at berth and at heading. [DataGram's maritime team](/starlink-offshore-maritime-installation) documents installs for PTW and IT handover — or [contact us](/contact) with your vessel specs and port schedule.",
    faqs: faqs(
      {
        question: "Can I use a home Starlink dish on my boat in Nigeria?",
        answer:
          "Residential fixed kits are designed for land addresses. Boats that move need mobility or maritime-appropriate hardware and plan classes. A home dish at the marina may work temporarily at berth but is not the right long-term solution for underway use.",
      },
      {
        question: "Does Starlink work in the Niger Delta creeks?",
        answer:
          "Satellite coverage extends over the creeks, but banks, mangrove canopy, and vessel motion affect performance. Tall masts and correct plan class matter. Shore-fixed camps differ from moving creek boats — survey each.",
      },
      {
        question: "How do I protect maritime Starlink from salt corrosion?",
        answer:
          "Use marine-grade stainless mounts, IP-rated glands, drip loops, and periodic freshwater rinse schedules. Bond cable shields properly and inspect glands each drydock or quarterly on active charter boats.",
      },
      {
        question: "What upload speed should I expect for CCTV on a vessel?",
        answer:
          "Upload varies by plan and rain conditions — often 10–100 Mbps in good conditions. Continuous multi-camera uplink needs shaping and realistic plan sizing; test to your actual VMS cloud, not generic speed tests alone.",
      },
      {
        question: "Does DataGram install on offshore platforms?",
        answer:
          "Yes, where PTW and access windows allow. We coordinate with [offshore maritime installation](/starlink-offshore-maritime-installation) scopes including platforms and OSVs operating from Nigerian ports.",
      },
    ),
  },
  {
    slug: "flat-high-performance-vs-standard-dish-maritime",
    title: "Flat High Performance vs Standard Dish for Maritime Starlink Use",
    excerpt:
      "Motion tracking, power draw, deck footprint, and when each dish type makes sense for Nigerian coastal and offshore vessels.",
    metaDescription:
      "Flat High Performance vs standard Starlink dish for maritime use: motion, power, cost, and Nigerian Gulf of Guinea vessel fit.",
    author: "DataGram Nigeria",
    date: "2026-06-11",
    readTime: "12 min read",
    category: "Evergreen",
    image: img("blog/flat-high-performance-vs-standard-dish-maritime.jpg"),
    imageAlt: "Flat High Performance Starlink dish compared to standard dish on vessel",
    imageFile: "blog/flat-high-performance-vs-standard-dish-maritime.jpg",
    featured: false,
    serviceCta: {
      label: "Boat installation",
      href: "/starlink-boat-installation",
      blurb: "Yachts, pilot boats, and coastal craft — correct dish class and marine mount for your motion profile.",
    },
    blocks: blocks(
      p("Choosing between Flat High Performance and standard Starlink hardware for maritime use comes down to motion profile, sky obstruction, power budget, and how much upload your ops actually need. Nigerian operators often ask if a residential standard dish 'will do' for a supply boat in Port Harcourt — sometimes at the pier, rarely underway without compromise."),
      p("This comparison is written for vessel owners, fleet managers, and marine IT leads evaluating hardware before procurement. We install both classes through our [maritime](/starlink-offshore-maritime-installation) and [boat](/starlink-boat-installation) services — here's how they differ in the field."),
      h2("How maritime tracking differs from land fixed installs"),
      p("Standard fixed dishes assume a stationary roof with a wide sky window. Flat High Performance uses a phased array that tracks more satellites simultaneously and tolerates more motion before dropouts. Dedicated maritime terminals extend that further for commercial underway profiles. The [Starlink specifications page](https://www.starlink.com/specifications) lists environmental and power ratings — verify before deck mounting."),
      h2("Side-by-side comparison for vessel operators"),
      h3("Motion tolerance"),
      p("Standard: acceptable at calm berth; performance degrades with roll/pitch underway. Flat HP: better tracking on coastal transits and moderate sea state. Full maritime tier: intended for continuous commercial motion — confirm plan and hardware pairing with Starlink checkout."),
      h3("Power draw"),
      p("Standard draws less steady wattage — attractive on small boats with limited house battery. Flat HP draws more; budget inverter or genset headroom on Nigerian vessels that already struggle with fridge and AC loads on transfer. Size power before mast height."),
      h3("Obstruction and mount footprint"),
      p("Flat HP sits lower profile on many brackets — useful under crane booms on OSVs if sky view permits. Standard on a tall mast may clear deck clutter but adds windage in harmattan gusts. Survey at berth and at heading."),
      h3("Throughput and upload"),
      p("Both classes vary with rain fade and beam load. Flat HP generally sustains better concurrent sessions for crew welfare and ops tablets. CCTV-heavy platforms should baseline upload after install — neither dish removes physics during Gulf of Guinea squalls."),
      h3("Hardware cost"),
      p("Flat HP hardware costs more upfront than standard residential kits. Factor total cost: mount, marine glands, UPS, VLAN router, and install labour. Cheap dish on wrong plan class is wasted capex."),
      h2("When standard dish is enough"),
      p("Small skiffs and creek craft that only need connectivity tied up at a fixed jetty may use land-appropriate hardware if plan class matches fixed use and motion is minimal. Shore offices on fixed platforms in [Bayelsa](/starlink-installation-bayelsa-yenagoa) may use tall mast land installs instead of marine tier — category matters."),
      h2("When Flat High Performance is worth it"),
      p("Coastal ferries, pilot boats, yachts on passage Lagos to Calabar, and OSVs with meaningful underway hours benefit from Flat HP or higher maritime class. Crew calling home on WhatsApp while rolling in swell is the use case that exposes standard dish limits."),
      h2("Installation implications on Nigerian vessels"),
      p("Marine mounts, bonding, and cable glands cost similar regardless of dish — don't skip them to fund a bigger dish. [Professional maritime install](/starlink-offshore-maritime-installation) documents torque, drip loops, and RF zones for PTW."),
      p("Pair with VLAN separation between crew Wi-Fi and bridge systems. Upload-heavy ops should test during rain — Port Harcourt operators know afternoon squalls are the real acceptance test."),
    ),
    cta: "Not sure which dish matches your berth versus underway split? Send vessel photos, typical routes, and power constraints to [DataGram](/contact) or request a [boat installation survey](/starlink-boat-installation). We'll recommend hardware before you buy the wrong kit.",
    faqs: faqs(
      {
        question: "Is Flat High Performance required for all boats in Nigeria?",
        answer:
          "No. Fixed jetty use with minimal motion may suit standard hardware on the correct land plan. Vessels with regular underway time should step up to Flat HP or maritime-class equipment.",
      },
      {
        question: "Can I upgrade from standard to Flat HP later?",
        answer:
          "Yes, but you pay new hardware and remount costs. Plan class changes may apply. Fleet buyers should decide at procurement to avoid double spend.",
      },
      {
        question: "Which dish uses less generator fuel?",
        answer:
          "Standard draws less power. If fuel is the bottleneck and you're mostly at calm berth, power savings may outweigh motion benefits — until you leave the pier.",
      },
      {
        question: "Does rain affect Flat HP less than standard?",
        answer:
          "Rain fade hits all LEO links. Flat HP recovers faster in some motion/obstruction mixes but won't eliminate Nigerian rainy season attenuation.",
      },
      {
        question: "Where can I get marine installation in Port Harcourt?",
        answer:
          "DataGram covers [Port Harcourt and Rivers State](/starlink-installation-rivers-state-port-harcourt) with [maritime](/starlink-offshore-maritime-installation) and [boat](/starlink-boat-installation) scopes.",
      },
    ),
  },
];

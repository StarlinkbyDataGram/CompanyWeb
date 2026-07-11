import type { SeoArticle } from "../article-types";
import { blocks, faqs, h2, h3, img, p } from "../article-types";

/** Posts 4–9 of the enterprise/maritime B2B batch. */
export const enterpriseMaritimeB2bMoreArticles: SeoArticle[] = [
  {
    slug: "power-starlink-flat-hp-24v-boat-system-nigeria",
    title: "How to Power Starlink Flat High Performance on a 12V/24V Boat System",
    excerpt:
      "Inverter sizing, cable gauge, battery bank maths, shore power, and solar offset for Starlink FHP on Nigerian boats — pure sine wave only.",
    metaDescription:
      "Starlink FHP draws up to 150W peak. Here's exactly how to power it from a 12V or 24V marine DC system on Nigerian boats and vessels.",
    author: "DataGram Nigeria",
    date: "2026-07-11",
    readTime: "14 min read",
    category: "Maritime",
    image: img("blog/power-starlink-flat-hp-24v-boat-system-nigeria.jpg"),
    imageAlt: "Marine boat electrical system for powering Starlink Flat High Performance dish",
    imageFile: "blog/power-starlink-flat-hp-24v-boat-system-nigeria.jpg",
    featured: false,
    serviceCta: {
      label: "Plan marine power with install",
      href: "/starlink-boat-installation",
      blurb: "We size inverter, battery headroom, and shore-power options as part of the boat install — not as an afterthought.",
    },
    blocks: blocks(
      p("Powering Starlink Flat High Performance from a 12V or 24V boat system is where many Nigerian marine installs fail after the dish looks fine in the app. FHP expects clean AC. Your vessel often only offers DC house banks, noisy generators, and bilge humidity. Get the inverter, cable, and battery maths wrong and you chase phantom offline events that are really brownouts."),
      p("This guide is for marine electricians, captains, and owners specifying a [boat Starlink install](/starlink-boat-installation). Figures use typical FHP draw ranges — confirm your kit's label and Starlink documentation for the exact terminal you buy."),
      h2("Starlink FHP power facts that drive the design"),
      p("Under normal conditions FHP commonly draws about 75–100 W. Peak can approach ~150 W during motor activity or cold-weather calibration behaviour. The stock power path expects 100–240 V AC input. That means a DC vessel needs an inverter between the battery bank and the Starlink supply — there is no honest \"wire 12V straight to the dish\" shortcut for standard FHP kits."),
      h2("Why pure sine wave is mandatory"),
      p("Modified sine / stepped approximate inverters cause router instability, odd reboot loops, and heat stress on power supplies. Some warranty conversations get unfriendly when gear has lived on dirty AC. Budget a pure sine wave inverter sized for continuous load plus headroom — not the cheapest square-wave block in Balogun market."),
      h2("Inverter sizing on 12V systems"),
      p("To deliver 150 W AC you need more than 150 W on the inverter nameplate because conversion is not 100% efficient. Plan roughly 25% overhead on top of peak load, then add margin for other small loads sharing the inverter. Practical minimum for FHP alone: about 200 W continuous capability; we recommend a 300 W pure sine inverter so the unit is not sitting at 100% every time the dish peaks."),
      p("At 12 V, 150 W of AC load implies on the order of 12.5 A DC before inverter losses — higher once efficiency is included. Undersized inverters trip; undersized DC feeds sag and reboot the router mid-call."),
      h2("Inverter sizing on 24V systems"),
      p("The same AC wattage applies, but DC current halves for a given power, which is kinder to cable voltage drop. 24 V banks are generally the better marine choice when you already run 24 V house power. Still use pure sine and still size ~300 W class for FHP-only duty with headroom."),
      h2("Cable sizing from battery to inverter"),
      p("Voltage drop kills 12 V installs. For runs under about 2 m at these currents, 4 mm² copper is a practical minimum; use 6 mm² for longer runs or shared paths. Fuse at the battery end. Keep inverter DC leads short and tight. Corroded lugs in salt air are a failure mode — see also our corrosion discipline on [offshore installs](/starlink-offshore-maritime-installation)."),
      h2("Battery bank for overnight runtime"),
      p("Eight hours at ~100 W average is ~800 Wh. On a 12 V system that is roughly 67 Ah of usable energy before you add buffers. Lead-acid should not be routinely drained deep; add ~50% buffer and you are in the ~100 Ah class as a minimum for that duty cycle. LiFePO4 is the better marine chemistry for cycle life and usable capacity — size the bank to your real night watch pattern, not a brochure."),
      p("If the fridge, nav gear, and Starlink share one bank, recalculate. Starlink is modest compared with air-con, but it is continuous."),
      h2("Shore power when moored"),
      p("At a marina with 240 V shore power, feed Starlink from the shore inlet through proper marine breakers and avoid draining the house bank overnight. Isolate correctly so you are not backfeeding. Many Nigerian leisure boats only get reliable shore power in a handful of Lagos and PH facilities — design for both modes."),
      h2("Solar offset in Nigerian sun"),
      p("A ~100 W panel in good Nigerian sun might deliver roughly 400–500 Wh on a strong day after real-world losses — enough to offset about four to five hours of ~100 W Starlink draw, not a full 24-hour duty cycle alone. Pair solar with adequate battery and honest expectations in rainy season. MPPT controllers beat cheap PWM for marine banks."),
      h2("Installation notes for Nigerian vessels"),
      p("Waterproof every connection. Use marine-grade connectors, drip loops, and routes that stay out of bilge splash. Keep the router in a dry, ventilated locker — not above the engine. Document the power-up order for crew: inverter, dish/router, then WiFi gear. If you also run dual-WAN, coordinate power so the failover router survives the same changeovers — see [marine SD-WAN](/starlink-marine-sdwan-integration)."),
      p("DataGram includes power path review in boat and offshore surveys. Bring battery voltage, inverter brand, and whether you have shore power when you request a quote."),
      p("Common field failures we correct: inverter sharing a circuit with a thruster pump that collapses voltage when both start; DC lugs finger-tight only, then vibrating loose on every passage; Starlink plugged into a cheap multi-socket with no fuse discipline; bilge-adjacent Ethernet adapters that green-light on the dock and fail after the first wet trip. None of those are \"Starlink bugs.\""),
      p("For OSVs and platforms with ship AC already available, you may skip the DC inverter path and feed from a conditioned AC circuit with UPS through generator transfers — still survey inrush and breaker sizing. Leisure craft without gensets lean harder on battery maths. Match the design to the hull, not to a WhatsApp template."),
      p("Write the expected runtime on a laminated card in the radio room: \"Starlink + router ≈ X hours on house bank at Y% charge.\" Crew who know the number stop blaming the dish when the bank is empty."),
      p("If you add mesh nodes or a dual-WAN appliance, recount watt-hours. A Peplink-class router plus PoE cameras can double the AC load the inverter sees. Survey the full communications stack, not Starlink in isolation."),
      p("For aluminium hulls and bonded earthing systems, involve the vessel electrician on equipotential bonding between mount, cable shield, and ship earth so lightning and RF paths stay intentional. Gulf of Guinea storms punish improvisation."),
    ),
    cta: "Need FHP powered correctly on a 12V or 24V boat? [Contact DataGram](/contact) for marine power integration with your [boat installation](/starlink-boat-installation).",
    faqs: faqs(
      {
        question: "What inverter size do I need for Starlink on a boat?",
        answer:
          "For Flat High Performance, plan pure sine capacity around 300 W so 150 W peaks are not hard against the limit. Smaller boats sometimes run Mini on less power — size to the terminal you actually bought.",
      },
      {
        question: "Can I run Starlink Flat High Performance on a 12V battery bank?",
        answer:
          "Yes, through a pure sine inverter and correctly sized DC cabling. Expect higher DC current than on 24 V. Budget battery capacity for your runtime target — roughly 100 Ah-class minimum for multi-hour night use at ~100 W average, depending on chemistry and shared loads.",
      },
      {
        question: "Why does Starlink need a pure sine wave inverter on a vessel?",
        answer:
          "Modified sine output causes unstable router behaviour and unnecessary stress on the power supply. Pure sine matches the AC the kit was designed for and avoids mystery reboot loops at sea.",
      },
      {
        question: "How many solar panels do I need to run Starlink on a boat in Nigeria?",
        answer:
          "One 100 W panel might offset roughly 4–5 hours of typical FHP draw on a strong sun day — not full-time operation alone. Size panels and battery together for your cruise profile and rainy-season weeks.",
      },
    ),
  },
  {
    slug: "configure-vlan-starlink-crew-wifi-bridge-operations",
    title: "Configuring VLANs on Starlink for Crew WiFi vs Bridge Operations",
    excerpt:
      "How vessel IT separates crew browsing from bridge, SCADA, and CCTV on Starlink using Ethernet bypass, managed routers, and QoS.",
    metaDescription:
      "Separate crew WiFi from bridge and ops networks on a Starlink vessel — VLAN design, bypass routers, and QoS for Nigerian maritime IT teams.",
    author: "DataGram Nigeria",
    date: "2026-07-11",
    readTime: "14 min read",
    category: "Maritime",
    image: img("blog/configure-vlan-starlink-crew-wifi-bridge-operations.jpg"),
    imageAlt: "Ship bridge navigation screens for VLAN crew WiFi and bridge operations separation",
    imageFile: "blog/configure-vlan-starlink-crew-wifi-bridge-operations.jpg",
    featured: false,
    serviceCta: {
      label: "Request vessel network architecture",
      href: "/starlink-marine-sdwan-integration",
      blurb: "VLAN design, QoS, and dual-WAN options scoped to your OSV or platform — not a flat consumer WiFi dump.",
    },
    blocks: blocks(
      p("Configuring VLANs on Starlink for crew WiFi versus bridge operations is mandatory once a vessel treats the satellite link as production infrastructure. A flat network where tablets on the mess deck share a broadcast domain with navigation aids is a bandwidth and security problem waiting for a night watch."),
      p("This write-up is for vessel IT officers and network engineers. It assumes you already have — or are installing — a mobility-rated terminal via [offshore maritime installation](/starlink-offshore-maritime-installation). DataGram can configure the first architecture; your IT team usually owns day-to-day user adds."),
      h2("Why segregation matters on a vessel"),
      p("Crew streaming and app updates will consume any open pipe. Bridge and navigation traffic needs predictable latency. Operations and SCADA-adjacent tools should not be reachable from guest phones. CCTV upload should not stall VOIP. Without VLANs and QoS, the loudest app wins."),
      p("Security is not theoretical. Phishing on a crew phone should not land an attacker in the same Layer-2 neighbourhood as an ops tablet. Isolation limits blast radius even when users share one satellite uplink."),
      h2("What Starlink gives you by default"),
      p("The stock Starlink router presents a single flat WiFi/LAN. It does not speak vessel VLAN design. If you need segmentation, you bypass or cascade: Starlink provides WAN; your managed gear provides policy."),
      p("Bypass does not void the need for the correct maritime plan class or mount. Network elegance on top of a residential dish at sea still fails policy and physics."),
      h2("The bypass path"),
      p("Typical pattern: Starlink Ethernet adapter → WAN port on a VLAN-capable router or firewall → managed switch to zones. Platforms such as Peplink, MikroTik, or Cisco appear often on vessels — named here as examples of capability classes, not exclusive endorsements. Confirm firmware, port count, and power budget during survey."),
      p("Put the Starlink router in bypass or bridge mode per current hardware guidance so you are not double-NAT'ing yourself into broken VPNs. Test one laptop on the WAN before you re-cable the whole accommodation block."),
      h3("Example VLAN plan for an OSV"),
      p("VLAN 10 — Bridge and navigation: highest QoS, restricted device list, no casual BYOD. VLAN 20 — Operations and SCADA: isolated from crew, medium QoS. VLAN 30 — Crew WiFi: standard QoS with per-user or SSID rate limits. VLAN 40 — CCTV and IP cameras: isolated, lower priority so camera bursts do not drown voice."),
      p("Tag trunks between router and switch correctly. Access ports to end devices stay untagged on the correct VLAN. Document the map in the handover pack so the next vendor does not flatten everything \"to make WiFi work.\""),
      p("On smaller boats you may collapse to two VLANs — ops and crew — but keep the principle. One SSID for everyone is how chart updates lose to football streams."),
      h2("QoS and traffic shaping"),
      p("Prioritise VOIP and navigation flows. Rate-limit crew entertainment SSIDs. If you run Ocean Mode with a priority data cap, QoS is how you stretch the useful month — pair with [marine SD-WAN](/starlink-marine-sdwan-integration) when a second WAN exists."),
      p("Failover behaviour matters: when Starlink drops to 4G or VSAT, the backup pipe is usually thinner. QoS rules should still prefer bridge traffic on the skinny path. Test that on the dock, not during a pilotage."),
      h2("Physical install realities"),
      p("Place the managed router in a dry, cool enclosure — not an unventilated deck box in Gulf of Guinea heat. Run Cat6 to zones with drip loops and strain relief. Weatherproof any exposed terminations. Follow PTW and two-man rules for cable glands and height work — see [offshore HSE practice](/starlink-offshore-hse-compliance)."),
      p("Label every patch. Future you — or the next contractor — will thank you when a camera VLAN dies and nobody remembers which orange cable is which."),
      h2("What DataGram configures vs what vessel IT owns"),
      p("We typically deliver: WAN handoff from Starlink, initial VLAN/SSID map, QoS baseline, dual-WAN failover order if scoped, and a labelled diagram. Vessel IT usually owns: user onboarding, ongoing firewall rules, certificate VPN clients, and change control after handover. Agree that split in writing before mobilisation."),
      p("Skip segregation and you will eventually blame \"Starlink\" for a congestion problem that started on the mess-deck SSID. Fix the LAN design first; then judge the satellite path on an honest baseline."),
      p("If procurement only budgets \"dish + mount,\" ask for a line item covering managed router configuration. The FHP on the mast cannot invent VLANs that were never funded."),
      p("A useful acceptance test: from a crew SSID, attempt to reach a bridge device IP — it should fail. From the bridge VLAN, confirm navigation or ops hosts still resolve. From the CCTV VLAN, confirm cameras record while a crew speed test runs without collapsing VOIP. Capture those results in the handover PDF."),
      p("Change control after go-live matters. When a captain asks for \"open WiFi for visitors,\" that request is a VLAN and QoS change, not a Starlink plan change. Route it through whoever owns the managed router credentials — often vessel IT, sometimes DataGram under a support retainer."),
      p("On platforms with existing VSAT, keep legacy paths on a separate WAN with explicit failover order. Flattening both into one happy LAN recreates the original mess with nicer latency until the first congestion event."),
      p("Budget training time for the radio officer. A thirty-minute walkthrough of SSIDs, VLAN purpose, and \"who to call\" prevents most after-hours tickets that are really guest-password problems."),
      p("Document DHCP scopes per VLAN so printers and cameras do not roam onto the wrong subnet after a power cycle. Static reservations for bridge-critical hosts reduce surprise IP changes during generator tests."),
      p("When auditors ask who can reach the CCTV NVR from crew WiFi, you want a screenshot of firewall rules — not a shrug. Build that evidence during handover, not during an incident investigation."),
    ),
    cta: "Need a vessel network architecture proposal? [Contact DataGram](/contact) — start from [marine SD-WAN](/starlink-marine-sdwan-integration) or [offshore installation](/starlink-offshore-maritime-installation).",
    faqs: faqs(
      {
        question: "Can Starlink support VLANs on a vessel?",
        answer:
          "Starlink's stock router does not provide vessel-grade VLAN segmentation. Use Ethernet handoff into a managed router or firewall that creates VLANs downstream.",
      },
      {
        question: "How do I separate crew WiFi from bridge operations on Starlink?",
        answer:
          "Bypass or cascade into a managed router, put bridge devices on a restricted VLAN with high QoS, and put crew on a rate-limited SSID/VLAN with no access to ops subnets.",
      },
      {
        question: "What router do I need for VLAN configuration with Starlink on a ship?",
        answer:
          "Any marine-suitable dual-WAN or VLAN-capable platform with enough ports and stable firmware — Peplink, MikroTik, and Cisco-class gear are common examples. Choose by feature need and support, not brand slogans.",
      },
      {
        question: "Can DataGram configure the network after Starlink is installed?",
        answer:
          "Yes. Network architecture can follow physical install or ship as one package. We document VLANs and QoS; your IT team typically manages users after handover.",
      },
    ),
  },
];

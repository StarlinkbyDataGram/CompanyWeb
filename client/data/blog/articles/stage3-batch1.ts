import type { SeoArticle } from "../article-types";
import { blocks, faqs, h2, h3, img, p } from "../article-types";

/** Stage 3 batch 1 — new articles only. Existing URLs are updated in place. */
export const stage3Batch1Articles: SeoArticle[] = [
  {
    slug: "starlink-for-communities-nigeria",
    title: "Starlink for Communities in Nigeria: How Shared Access Works",
    seoTitle: "Starlink for Communities in Nigeria | DataGram",
    excerpt:
      "What Starlink's Community Host model is, how access passes differ from owning a kit, and what Nigeria still cannot assume.",
    metaDescription:
      "Starlink Community Host lets one kit serve nearby users through time-based passes. Nigeria availability, approval, and pass prices are not confirmed.",
    author: "DataGram Nigeria",
    date: "2026-10-09",
    readTime: "9 min read",
    category: "Communities",
    image: img("StarlinkRoofMount.jpeg"),
    imageAlt: "Starlink dish on a Nigerian rooftop during installation",
    imageFile: "StarlinkRoofMount.jpeg",
    imageComment:
      "IMAGE: StarlinkRoofMount.jpeg — DataGram rooftop terminal. A community site would start from a dish like this, not from a shared-phone graphic.",
    featured: true,
    serviceCta: {
      label: "Plan a shared-site install",
      href: "/starlink-estate-wifi-nigeria",
      blurb: "A compound or estate that needs one terminal and proper Wi-Fi distribution is a DataGram install. That is separate from Starlink's Community Host passes.",
    },
    blocks: blocks(
      p("Starlink for Communities is a shared-access model: one kit at a host site, and nearby people buy a pass for a period of time instead of each household owning a dish. It is not the same thing as buying a Standard Kit or a Mini for your own address. As of 9 October 2026, Nigerian availability, NCC approval, pass prices, and any launch date have not been confirmed. Do not budget or advertise a Nigerian community service from a headline alone."),
      p("Starlink's own community host page did not return readable text to a normal fetch on 9 October 2026, because the page requires JavaScript. The description below follows contemporaneous reports of that page by Broadband Breakfast (6 October 2026) and Telecompetitor (2 October 2026). Where those reports stop, this article stops."),
      h2("What a Community Host actually does"),
      p("The reported model is a beta waitlist, not a finished national product. A host proposes a place where one Starlink kit could serve several nearby users. The examples named in that coverage include apartment buildings, campgrounds, rural communities, venues, and small businesses. The host orders the kit, provides power, and looks after the site. Starlink is described as handling payments, who is allowed on, and the connection itself."),
      p("Coverage can be extended with more routers or more kits. That is a Wi-Fi and mounting problem, the same class of work as an [estate Wi-Fi distribution](/starlink-estate-wifi-nigeria) job. It does not, by itself, create a licence to resell internet outside Starlink's own scheme."),
      h2("How the access passes are described"),
      p("The reports of Starlink's page list four pass lengths. An hour pass, a day pass, and a week pass are each described as covering one device. A month pass is described as covering up to four devices. No pass price, and no host payout or revenue share, was published in those reports. This page does not invent either number."),
      p("A pass is time on someone else's terminal. It is not a residential subscription in your name, and it is not hardware you can move to another town. If the host site loses power, or the dish is obstructed, every pass holder on that site feels it. Owning a kit at your own address is a different risk: you control the mount, the account, and the plan, and you pay the kit and the monthly plan yourself. Current client-supplied Starlink equipment references, which are not Community prices, are on the [Nigeria price guide](/blog/how-much-is-starlink-nigeria-price-naira-2026)."),
      h2("What Nigeria cannot assume yet"),
      p("Nothing checked for this article confirms that Community Host is open in Nigeria, that the NCC has approved it, or that a Nigerian launch month exists. One African report on 5 October 2026 described a host application form that listed Kenya among its countries. That is not a Nigeria approval, and it is not a reason to treat informal resale in Nigeria as authorised."),
      p("Starlink's ordinary terms in other markets have long restricted reselling a residential service without permission. A host inside Starlink's own programme would be selling with Starlink taking the payment. Someone who shares a neighbour's dish outside that programme is in a different position. DataGram does not advise that arrangement. If you need a lawful shared network on a site you control, start with a survey, not a pass you saw on social media."),
      h2("What this could mean for estates, schools, and rural towns"),
      p("An estate or block of flats is the clearest local picture. One terminal on a roof with a clear sky, then cabling and access points so flats actually get a signal, is work DataGram already does. Community passes, if they are ever offered here, would be a billing layer on top of that kind of site. They would not remove the need for a mount, power that survives generator changeover, or a way to keep one flat from using the whole link."),
      p("A school or a clinic in a town with no fibre has the same physical problem: sky view, power, and where people sit. A pass model might later let a host recover some of the running cost from users. Until Starlink publishes Nigeria terms, the honest plan is still a surveyed terminal and a network designed for the building. The older [village gateway article](/blog/starlink-community-gateways-nigeria-rural-villages) discusses shared rural access as an installation pattern. It is not a description of the October 2026 Community Host product."),
      h2("This is not a conventional WISP"),
      p("A wireless ISP builds its own distribution: towers or rooftop radios, customer equipment, and its own customer relationship. DataGram's [WISP setup service](/services/wisp-setup) is that kind of operator project. Community Host, as reported, is narrower. Starlink sells the passes, Starlink controls access, and the host runs the site. Treating a Community Host kit as a homemade WISP, or treating a WISP as if it were Starlink's pass product, mixes two authorisations."),
      p("If you operate a rural network and want satellite backhaul into your own system, say that plainly on a survey. If you are a landlord who wants one dish and fair Wi-Fi for the compound, the estate page is the right conversation. If you are waiting to sell hourly Starlink passes in Nigeria, wait for Starlink to say the programme is available here, and for the price and the approval to be in writing."),
      h2("What to do this month"),
      p("If your compound, school, or yard needs internet now, price a normal installation. Enter the service address on Starlink's site, then book a survey so the mount and the cable path are real. Community Host does not reopen a residential address that the site is not offering, and it does not replace a [home installation](/starlink-home-installation) or an [enterprise deployment](/starlink-enterprise-nigeria) you already need."),
      p("If you are only watching the host programme, watch Starlink's community host page and any NCC notice. A WhatsApp broadcast of a pass price is not either of those."),
    ),
    cta: "Need one terminal and working Wi-Fi for a compound, school, or yard now? [Talk to DataGram](/contact) about an [estate distribution](/starlink-estate-wifi-nigeria) or a [WISP setup](/services/wisp-setup). Community Host passes are a separate Starlink product, and they are not confirmed for Nigeria.",
    faqs: faqs(
      {
        question: "Can Nigerians join Starlink for Communities today?",
        answer:
          "Not on the evidence checked on 9 October 2026. Reports describe a Community Host beta waitlist. They do not confirm Nigerian availability, NCC approval, or a launch date.",
      },
      {
        question: "How much is a Starlink community pass in Nigeria?",
        answer:
          "No pass price was published in the October 2026 reports of Starlink's community host page, and this site does not invent one. There is also no confirmed host revenue share.",
      },
      {
        question: "Is Community Host the same as buying my own Starlink kit?",
        answer:
          "No. A pass is time on a host's terminal. A kit in your own name is hardware plus a plan at your service address. You do not control the host's power, mount, or account.",
      },
      {
        question: "Is this the same as a WISP or estate Wi-Fi?",
        answer:
          "No. A WISP is an operator's own distribution network. Estate Wi-Fi is how DataGram spreads one surveyed terminal through a compound. Community Host, as reported, is Starlink selling time-based passes on a host site.",
      },
    ),
  },
  {
    slug: "starlink-business-vs-enterprise-nigeria",
    title: "Starlink Business vs Enterprise in Nigeria: What's the Difference?",
    seoTitle: "Starlink Business vs Enterprise in Nigeria | DataGram",
    excerpt:
      "How a self-serve business connection differs from a multi-site enterprise deployment, and what has not been confirmed about Enterprise sign-up in Nigeria.",
    metaDescription:
      "Starlink business plans suit a site you can activate at checkout. Enterprise means a larger deployment. No Nigeria notice says self-serve Enterprise is ending.",
    author: "DataGram Nigeria",
    date: "2026-10-09",
    readTime: "8 min read",
    category: "Business",
    image: img("StarlinkCompanyInstallation.jpeg"),
    imageAlt: "Starlink dish on a commercial rooftop in Nigeria beside a conference centre",
    imageFile: "StarlinkCompanyInstallation.jpeg",
    imageComment:
      "IMAGE: StarlinkCompanyInstallation.jpeg — DataGram commercial rooftop install. Used because the article is about business and enterprise sites, not a home kit.",
    featured: true,
    serviceCta: {
      label: "Scope an enterprise deployment",
      href: "/starlink-enterprise-nigeria",
      blurb: "One office can often start on a business plan. Several sites, a yard, or a vessel needs a design, not only a checkout button.",
    },
    blocks: blocks(
      p("A business Starlink connection is the plan and hardware for a site you can order and run from an account. An enterprise deployment is the larger job: several addresses, a harsher site, a vessel, or a network that has to fail over and be handed to IT. Starlink's own help page titled Business vs Enterprise Accounts did not return its body text on 9 October 2026, so this article does not invent account buttons that were not readable. It uses the Business and Enterprise getting-started guide that did load, plus the way those jobs actually show up in Nigeria."),
      h2("What Starlink's business guide actually says"),
      p("The getting-started guide describes Starlink as a hardware platform used at business locations, including as the main link, as a replacement for 4G or VSAT, as backup, as a temporary circuit, and for emergency use. For Priority service plans it points to a 99.9% network-availability service level agreement, and it points larger buyers to a sales consultation and to commercial resellers when they need network management or integration. That is the official frame. It is not a Nigeria price list."),
      p("Monthly business and Priority figures already published on this site stay as they are. The [Priority plan page](/starlink-priority-plan-nigeria) is where a congested address is discussed. This article does not add a new naira or dollar plan price."),
      h2("When a standard business connection is enough"),
      p("A single office, shop, or clinic with a clear roof, a handful of staff, and one service address is usually a business-plan conversation. You need the right hardware for that roof, a plan the checkout will actually sell at that address, and a network that reaches the desks. If fibre is the main line and Starlink is only the spare, the design is a [failover circuit](/blog/combine-starlink-5g-failover-multi-wan), not a second company."),
      p("Hardware still has to match the site. A Standard kit is the common land terminal. Harsher roofs, partial sky, and vessels often need a larger terminal. DataGram checks which terminal the plan allows before anyone pays. The Flat High Performance figure on DataGram's own product pages is that product's selling price. It is not restated here."),
      h2("When the job is an enterprise deployment"),
      p("The job changes when there is more than one site, or the site is not a normal office. A contractor with a yard in Port Harcourt and an office in Lagos does not want two forgotten renewals. A branch rollout belongs with [multi-site account handling](/blog/manage-starlink-multiple-branch-offices-nigeria) and the [fleet management](/starlink-fleet-management-nigeria) service. An industrial yard needs power that survives generator transfer, a mount that stays put, and a handover IT can audit."),
      p("Maritime is the same distinction at sea. A working vessel is not a business checkout with a dish tied to a railing. Plan class, hardware, and the ship network are an [offshore installation](/starlink-offshore-maritime-installation). Global Priority and Ocean Mode are different products; the [Ocean Mode article](/blog/starlink-ocean-mode-50gb-priority-limit-explained) keeps them apart."),
      h3("A practical split"),
      p("Choose a business connection when one address, one plan, and a straightforward install answer the question. Choose an enterprise scope when you are buying uptime across sites, when the LAN has to separate staff, guests, and equipment, or when the terminal will live on a vessel or a camp. [Enterprise Nigeria](/starlink-enterprise-nigeria) is that second conversation."),
      h2("Watch: Enterprise self-subscription in Nigeria"),
      p("This is a watch, not a finding. Posts online have claimed that Starlink is ending self-service Enterprise subscriptions. As of 9 October 2026, DataGram has not confirmed a Nigeria-specific notice from Starlink or the NCC that says so. The getting-started guide still points business and enterprise buyers to Starlink's own materials and to a sales consultation. Until a primary notice exists, do not plan a procurement around the claim, and do not treat a reseller's WhatsApp as the notice."),
      h2("What to ask before you order"),
      p("Ask which service address the checkout will accept, which plan name appears, and which terminal that plan allows. Ask who renews it, and whether a second site or a second WAN is in scope. If the answer is one office and a clean roof, start with Priority or the business plan the screen offers, then a [home or office installation](/starlink-home-installation) if the building is simple. If the answer is several sites, a yard, or a hull, start with the enterprise page so the account and the network are designed together."),
    ),
    cta: "One site or several? [Contact DataGram](/contact) and describe the addresses. We will say whether this is a [Priority activation](/starlink-priority-plan-nigeria) or an [enterprise deployment](/starlink-enterprise-nigeria).",
    faqs: faqs(
      {
        question: "Is Starlink Business the same product as Starlink Enterprise?",
        answer:
          "No. Business here means a connection and plan for a site you can run from an account. Enterprise means a larger deployment: multiple sites, a harsh location, or a vessel, with the network and the account designed together. Starlink's detailed account article did not load as text on 9 October 2026, so this is not a quote of unpublished menu labels.",
      },
      {
        question: "Is Starlink ending self-service Enterprise subscriptions in Nigeria?",
        answer:
          "Not confirmed. No Nigeria-specific Starlink or NCC notice of that change was verified on 9 October 2026. Treat the claim as a watch until a primary source appears.",
      },
      {
        question: "Does a business plan include a public IP and an uptime promise?",
        answer:
          "Starlink's getting-started guide says Priority service plans have a 99.9% network-availability SLA. It does not, in the text retrieved, set Nigeria prices or say every business checkout includes a public IP. Confirm the plan line on the account before you design remote access around it.",
      },
      {
        question: "Which hardware does an enterprise site need?",
        answer:
          "It depends on sky view, motion, and how many people share the link. DataGram checks that before purchase. The Flat High Performance selling price on DataGram's product pages was not changed in this update, and it is not the same figure as an unverified Performance Kit reference.",
      },
    ),
  },
];

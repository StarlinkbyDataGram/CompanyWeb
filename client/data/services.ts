export type Service = {
  id: string;
  slug: string;
  title: string;
  short: string;
  description: string;
  highlights?: string[];
  image?: string;
};

export const services: Service[] = [
  {
    id: "sales-installation",
    slug: "sales-installation",
    title: "Sales, Delivery, and Professional Installation",
    short:
      "Buy Starlink hardware, schedule delivery, and book a surveyed install — equipment prices stay separate from labour.",
    description:
      "We sell Starlink equipment and deliver it to your location. Our team then installs and configures the system after a site survey so mounts, cable routes, and activation match your roof and estate rules. Equipment listed on our product pages is equipment-only; installation labour is quoted separately. We offer Starlink activation support even where some addresses only show Priority plans.",
    highlights: [
      "Starlink hardware sales",
      "Delivery & on-site installation",
      "Activation and configuration",
    ],
    image: "/images/sales.jpeg",
  },
  {
    id: "whole-premises",
    slug: "whole-premises",
    title: "Whole-Premises WiFi Coverage",
    short:
      "Mesh and access-point design so Starlink (or fibre) actually reaches every room, not only the hallway by the router.",
    description:
      "A working Starlink dish does not fix thick concrete or long corridors. We extend Starlink, fibre, and broadband WiFi across your home or office with mesh networking and, where needed, wired backhaul — indoors and outdoors — so bedrooms, offices, and outdoor zones stay usable.",
    highlights: ["Indoor & outdoor mesh", "Site survey & design", "Seamless roaming"],
    image: "/images/Whole-Premises.jpeg",
  
  },
  {
    id: "long-range",
    slug: "long-range",
    title: "Long-Range WiFi Extension (up to 10km)",
    short: "Point-to-point links that carry Starlink or fibre WiFi to distant buildings when mesh alone is not enough.",
    description:
      "When a gatehouse, warehouse, or second building sits beyond mesh range, we design point-to-point WiFi links — up to about 10 km with clear line of sight — so the same Starlink or fibre backhaul can serve multiple structures without a second dish on every roof.",
    highlights: ["Point-to-point links", "Line-of-sight planning", "High-throughput radios"],
    image: "/images/Long-Range.jpeg",
  },
  {
    id: "wisp-setup",
    slug: "wisp-setup",
    title: "WISP Business Setup",
    short:
      "Guidance and technical setup to start an internet resale business using Starlink and fiber.",
    description:
      "We help set up a Wireless Internet Service Provider (WISP) business using Starlink and fiber technology, enabling you to sell internet services to others via voucher systems and managed infrastructure.",
    highlights: ["Billing & vouchers", "Network design", "Reseller support"],
    image: "/images/WIFIWISP.jpeg",
  },
  {
    id: "backup-power",
    slug: "backup-power",
    title: "24/7 Backup Power",
    short:
      "UPS and backup power sized so Starlink survives NEPA flickers and generator changeovers without mysterious offline loops.",
    description:
      "Most “Starlink is down” tickets after a grid blink are power problems, not dish faults. We design UPS and backup power so the dish and router ride through brief outages and generator transfers, with honest runtime targets instead of oversized banks you never recharge.",
    highlights: ["UPS & batteries", "Automatic failover", "Maintenance plans"],
    image: "/images/BackupPower.jpeg",
  },
  {
    id: "accessories",
    slug: "accessories",
    title: "Starlink Accessories",
    short: "Cables, access points, and mesh systems to extend and harden installations.",
    description:
      "We sell various Starlink accessories, including Gigabit Cables for high-speed links, Satellite Access Points that extend WiFi coverage, and wired or wireless satellite mesh systems for seamless connectivity.",
    highlights: ["Gigabit cables", "Satellite access points", "Wired & wireless mesh"],
    image: "/images/StarlinkAccessories.jpeg",
  },
  {
    id: "global-roaming",
    slug: "global-roaming",
    title: "Starlink Global Roaming Subscriptions",
    short:
      "Roaming subscriptions to stay connected across land, sea, and air during travel or field operations.",
    description:
      "Our Starlink roaming subscriptions enable you to stay connected while traveling or working in different locations, including sea, deep sea, air flight and land.",
    highlights: ["Global coverage options", "Flexible plans", "Use in marine & aviation scenarios"],
    image: "/images/StarlinkGloba.jpeg",
  },
  {
    id: "enterprise-plans",
    slug: "enterprise-plans",
    title: "High-Speed Enterprise Plans (up to 1000Mbps)",
    short: "Business and organisation plan selection with install, networking, and failover scoped after survey.",
    description:
      "Offices and organisations need the right Starlink plan class, clean mounting, and often dual-WAN or VLAN handoff — not only a residential kit on the roof. We help select high-throughput business plans (field performance varies by plan and site; up to the order of 1000 Mbps where the service class allows) and pair them with professional installation and networking design.",
    highlights: ["SLA & monitoring", "High throughput", "Failover options"],
    image: "/images/High-Speed.jpeg",
  },
  {
    id: "subscription-services",
    slug: "subscription-services",
    title: "Starlink Subscription Services",
    short: "Managed subscription services for Home, Business, and Organizations.",
    description:
      "We handle Starlink subscription services for Home (fast and reliable internet for families), Business (high-speed solutions), and Organization (customized internet solutions for institutions).",
    highlights: ["Home plans", "Business plans", "Organization & campus plans"],
    image: "/images/StarlinkSubscription.jpeg",
  },
];

import {
  BRAND_NAME,
  BUSINESS_EMAIL,
  BUSINESS_PHONE_E164,
  LEGAL_BUSINESS_NAME,
  SITE_URL,
} from "@/lib/site";
import type { FaqItem } from "./types";

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function buildLocalBusinessSchema(serviceArea: string, geo?: { latitude: number; longitude: number }) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND_NAME,
    legalName: LEGAL_BUSINESS_NAME,
    url: SITE_URL,
    telephone: BUSINESS_PHONE_E164,
    email: BUSINESS_EMAIL,
    serviceArea: { "@type": "AdministrativeArea", name: serviceArea },
    areaServed: { "@type": "Country", name: "Nigeria" },
    priceRange: "₦₦₦",
    description: `Professional Starlink installation and support in ${serviceArea}, Nigeria.`,
  };
  if (geo) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    };
  }
  return schema;
}

export function buildHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to prepare your site for Starlink installation",
    description:
      "Field checklist DataGram uses before mounting a Starlink dish in Nigeria—power, cable path, sky view, and network handover.",
    step: [
      {
        "@type": "HowToStep",
        name: "Confirm sky view and mount location",
        text: "Walk the roof or yard with the Starlink app obstruction tool. Pick a mast or wall point with a clear view of the northern sky arc and note nearby trees that grow seasonally.",
      },
      {
        "@type": "HowToStep",
        name: "Plan the cable route indoors",
        text: "Mark where the cable enters the building, how it crosses concrete or trays, and where the router will sit. Short, straight runs with drip loops reduce water ingress and voltage drop.",
      },
      {
        "@type": "HowToStep",
        name: "Stabilise power for the dish and router",
        text: "Identify the circuit that will feed Starlink gear. For sites with generators, plan a small online UPS on the router and document transfer switch timing so reboots do not stack.",
      },
      {
        "@type": "HowToStep",
        name: "Document network handover details",
        text: "List VLANs, static IPs, VPN ports, and who approves drilling. Share landlord or estate manager contacts so survey crews arrive with access already cleared.",
      },
    ],
  };
}

export function buildBreadcrumb(path: string, pageName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: pageName, item: `${SITE_URL}${path}` },
    ],
  };
}

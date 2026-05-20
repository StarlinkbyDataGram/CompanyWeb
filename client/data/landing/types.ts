import type { LucideIcon } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export type StatItem = { label: string; value: string; note?: string };

export type IconCard = { title: string; body: string; icon: LucideIcon };

export type ProofCard = {
  alt: string;
  caption: string;
  /** REPLACE: swap placeholder src with real deployment photo */
  src: string;
};

export type PackageTier = {
  name: string;
  priceLabel: string;
  features: string[];
  cta: string;
};

export type IndustryLandingConfig = {
  path: string;
  seoTitle: string;
  metaDescription: string;
  canonical: string;
  ogImage?: string;
  h1: string;
  heroLabel: string;
  heroSubheading: string;
  heroImageAlt: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  stats: StatItem[];
  whyTitle: string;
  whyCards: IconCard[];
  proofTitle: string;
  proofCards: ProofCard[];
  speedStat: { label: string; down: string; up: string; latency: string };
  testimonial: { quote: string; attribution: string };
  packagesTitle: string;
  packages: PackageTier[];
  faqs: FaqItem[];
  serviceAreaSchema: string;
  keywords: string[];
  includeHowTo?: boolean;
};

export type RegionalLandingConfig = {
  path: string;
  seoTitle: string;
  metaDescription: string;
  canonical: string;
  ogImage?: string;
  h1: string;
  stateName: string;
  heroLabel: string;
  heroSubheading: string;
  heroImageAlt: string;
  trustSinceYear: string;
  whyTitle: string;
  whyCards: IconCard[];
  proofTitle: string;
  proofCards: ProofCard[];
  speedStat: { label: string; down: string; up: string; latency: string };
  testimonial: { quote: string; attribution: string };
  serviceAreasTitle: string;
  serviceAreas: string[];
  faqs: FaqItem[];
  geo: { latitude: number; longitude: number };
  serviceAreaSchema: string;
  keywords: string[];
};

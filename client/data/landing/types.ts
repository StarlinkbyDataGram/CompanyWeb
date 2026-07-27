import type { LucideIcon } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export type StatItem = { label: string; value: string; note?: string };

export type IconCard = {
  title: string;
  body: string;
  icon: LucideIcon;
  href?: string;
  linkLabel?: string;
};

export type ProofCard = {
  alt: string;
  caption: string;
  src: string;
  /** Filename for JSX comment, e.g. maritime.jpeg */
  imageFile: string;
  /** Full placement note: IMAGE: filename — reason */
  imageComment: string;
  objectPosition?: string;
};

export type PackageTier = {
  name: string;
  priceLabel: string;
  features: string[];
  cta: string;
};

export type SafetyStandardItem = { title: string; body: string };

export type EquipmentSection = {
  title: string;
  paragraphs: string[];
  image: ProofCard;
  secondaryImage?: ProofCard;
};

export type DownloadCta = {
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  note: string;
};

/** Extra body sections (cards, checklist, or detail grid) — reuses Card / CheckCircle2 patterns */
export type ExtraContentSection = {
  title: string;
  paragraphs?: string[];
  /** 2–4 cards with title + body; optional href for internal navigation */
  cards?: { title: string; body: string; href?: string; linkLabel?: string }[];
  /** Checklist lines (rendered with CheckCircle2) */
  checklist?: string[];
  /** Small detail cards (2-col grid) */
  details?: { title: string; body: string }[];
  note?: string;
  footerNote?: string;
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
  /** /images/... path; omit when heroImageMissing is true */
  heroImage?: string;
  heroImageFile?: string;
  heroImageReason?: string;
  heroObjectPosition?: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  stats: StatItem[];
  whyTitle: string;
  whyCards: IconCard[];
  proofTitle: string;
  proofLink?: { label: string; href: string };
  proofCards: ProofCard[];
  speedStat: { label: string; down: string; up: string; latency: string };
  testimonial: { quote: string; attribution: string };
  packagesTitle: string;
  packages: PackageTier[];
  faqs: FaqItem[];
  /** When set, used for FAQPage JSON-LD instead of `faqs` */
  schemaFaqs?: FaqItem[];
  extraSchemas?: Record<string, unknown>[];
  safetyStandards?: { title: string; items: SafetyStandardItem[] };
  equipmentSection?: EquipmentSection;
  downloadCta?: DownloadCta;
  extraSections?: ExtraContentSection[];
  relatedLinks?: { label: string; href: string }[];
  heroPrimaryCta?: { label: string; href?: string };
  ctaBanner?: { title: string; body: string; buttonLabel: string; href: string };
  packagePriceDisclaimer?: boolean;
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
  heroImage?: string;
  heroImageFile?: string;
  heroImageReason?: string;
  heroObjectPosition?: string;
  /** When true, hero shows gradient + missing-hero comment instead of a photo */
  heroImageMissing?: boolean;
  coverageParagraph: string;
  trustSinceYear: string;
  whyTitle: string;
  whyCards: IconCard[];
  proofTitle: string;
  proofCards: ProofCard[];
  speedStat: { label: string; down: string; up: string; latency: string };
  speedStatNote?: string;
  testimonial: { quote: string; attribution: string };
  relatedLinks?: { label: string; href: string }[];
  faqs: FaqItem[];
  entityBadge?: string;
  safetyStandards?: { title: string; items: SafetyStandardItem[] };
  packagePriceDisclaimer?: boolean;
  geo: { latitude: number; longitude: number };
  serviceAreaSchema: string;
  keywords: string[];
};

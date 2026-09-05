/** Shared types and helpers for long-form SEO blog articles. */
export type ArticleBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string };

export type ArticleFaq = { question: string; answer: string };

export type SeoArticle = {
  slug: string;
  title: string;
  /** Optional document title tag. When set, used as-is (include brand suffix). Falls back to `${title} | DataGram Nigeria`. */
  seoTitle?: string;
  excerpt: string;
  metaDescription: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  imageFile: string;
  /** Placement note for hero — format: IMAGE: filename — reason. Renders as JSX comment + data-dg-placement. */
  imageComment?: string;
  featured: boolean;
  /** @deprecated Use blocks — kept for legacy entries */
  paragraphs?: string[];
  blocks?: ArticleBlock[];
  cta?: string;
  faqs?: ArticleFaq[];
  serviceCta: { label: string; href: string; blurb: string };
};

export const img = (file: string) => `/images/${file}`;

export function blocks(...items: ArticleBlock[]): ArticleBlock[] {
  return items;
}

export function p(text: string): ArticleBlock {
  return { type: "p", text };
}

export function h2(text: string): ArticleBlock {
  return { type: "h2", text };
}

export function h3(text: string): ArticleBlock {
  return { type: "h3", text };
}

export function faqs(...items: ArticleFaq[]): ArticleFaq[] {
  return items;
}

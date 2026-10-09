import type { SeoArticle } from "./article-types";
import indexJson from "./blog-index.json";

export type BlogIndexEntry = {
  slug: string;
  title: string;
  seoTitle?: string;
  excerpt: string;
  metaDescription: string;
  author: string;
  date: string;
  updated?: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  imageFile: string;
  imageComment?: string;
  featured: boolean;
  serviceCta: SeoArticle["serviceCta"];
  /** First paragraph, so /blog search matches the same text it did before bodies were split out. */
  searchText: string;
  module: string;
};

export const blogIndex = indexJson as BlogIndexEntry[];

export function getBlogIndexEntry(slug: string): BlogIndexEntry | undefined {
  return blogIndex.find((article) => article.slug === slug);
}

/** Shape the existing blog search hook already understands. */
export function asSearchableArticle(entry: BlogIndexEntry): SeoArticle {
  return {
    slug: entry.slug,
    title: entry.title,
    seoTitle: entry.seoTitle,
    excerpt: entry.excerpt,
    metaDescription: entry.metaDescription,
    author: entry.author,
    date: entry.date,
    updated: entry.updated,
    readTime: entry.readTime,
    category: entry.category,
    image: entry.image,
    imageAlt: entry.imageAlt,
    imageFile: entry.imageFile,
    imageComment: entry.imageComment,
    featured: entry.featured,
    serviceCta: entry.serviceCta,
    paragraphs: entry.searchText ? [entry.searchText] : undefined,
  };
}

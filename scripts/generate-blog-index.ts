/**
 * Writes the lightweight blog index used by the homepage and /blog.
 * Post bodies stay in their phase modules and are loaded on demand.
 */
import fs from "fs";
import path from "path";
import { allSeoArticles2026 } from "../client/data/blog/articles-2026";

const modules = await Promise.all([
  import("../client/data/blog/articles/legacy").then((mod) => ["legacy", mod.legacyArticles] as const),
  import("../client/data/blog/articles/phase1").then((mod) => ["phase1", mod.phase1Articles] as const),
  import("../client/data/blog/articles/evergreen-a").then((mod) => ["evergreen-a", mod.evergreenAArticles] as const),
  import("../client/data/blog/articles/evergreen-b").then((mod) => ["evergreen-b", mod.evergreenBArticles] as const),
  import("../client/data/blog/articles/trending-a").then((mod) => ["trending-a", mod.trendingAArticles] as const),
  import("../client/data/blog/articles/trending-b").then((mod) => ["trending-b", mod.trendingBArticles] as const),
  import("../client/data/blog/articles/geo-a").then((mod) => ["geo-a", mod.geoAArticles] as const),
  import("../client/data/blog/articles/geo-b").then((mod) => ["geo-b", mod.geoBArticles] as const),
  import("../client/data/blog/articles/future-a").then((mod) => ["future-a", mod.futureAArticles] as const),
  import("../client/data/blog/articles/future-b").then((mod) => ["future-b", mod.futureBArticles] as const),
  import("../client/data/blog/articles/roaming-priority").then((mod) => ["roaming-priority", mod.roamingPriorityArticles] as const),
  import("../client/data/blog/articles/enterprise-maritime-b2b").then((mod) => ["enterprise-maritime-b2b", mod.enterpriseMaritimeB2bArticles] as const),
  import("../client/data/blog/articles/enterprise-maritime-b2b-more").then((mod) => ["enterprise-maritime-b2b-more", mod.enterpriseMaritimeB2bMoreArticles] as const),
  import("../client/data/blog/articles/enterprise-maritime-b2b-final").then((mod) => ["enterprise-maritime-b2b-final", mod.enterpriseMaritimeB2bFinalArticles] as const),
  import("../client/data/blog/articles/august-2026-sprint").then((mod) => ["august-2026-sprint", mod.august2026SprintArticles] as const),
  import("../client/data/blog/articles/september-2026-sprint").then((mod) => ["september-2026-sprint", mod.september2026SprintArticles] as const),
  import("../client/data/blog/articles/stage3-batch1").then((mod) => ["stage3-batch1", mod.stage3Batch1Articles] as const),
]);

const byModule = new Map<string, string>();
for (const [moduleId, articles] of modules) {
  for (const article of articles) byModule.set(article.slug, moduleId);
}

function searchText(article: (typeof allSeoArticles2026)[number]): string {
  const first = article.blocks?.[0];
  if (first && typeof first.text === "string" && first.text) return first.text;
  return article.paragraphs?.[0] ?? "";
}

const index = allSeoArticles2026
  .filter((article) => !article.draft)
  .map((article) => {
    const moduleId = byModule.get(article.slug);
    if (!moduleId) throw new Error(`No phase module for ${article.slug}`);
    return {
      slug: article.slug,
      title: article.title,
      seoTitle: article.seoTitle,
      excerpt: article.excerpt,
      metaDescription: article.metaDescription,
      author: article.author,
      date: article.date,
      updated: article.updated,
      readTime: article.readTime,
      category: article.category,
      image: article.image,
      imageAlt: article.imageAlt,
      imageFile: article.imageFile,
      imageComment: article.imageComment,
      featured: article.featured,
      serviceCta: article.serviceCta,
      searchText: searchText(article),
      module: moduleId,
    };
  });

const out = path.resolve("client/data/blog/blog-index.json");
fs.writeFileSync(out, JSON.stringify(index));
console.log(`Wrote ${index.length} posts to ${out} (${fs.statSync(out).size} bytes)`);

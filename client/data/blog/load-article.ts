import type { SeoArticle } from "./article-types";
import { getBlogIndexEntry } from "./blog-index";

/**
 * One chunk per phase file. The blog index stays in the first load;
 * a post body is fetched only when that post is opened.
 */
const loaders: Record<string, () => Promise<SeoArticle[]>> = {
  legacy: () => import("./articles/legacy").then((mod) => mod.legacyArticles),
  phase1: () => import("./articles/phase1").then((mod) => mod.phase1Articles),
  "evergreen-a": () => import("./articles/evergreen-a").then((mod) => mod.evergreenAArticles),
  "evergreen-b": () => import("./articles/evergreen-b").then((mod) => mod.evergreenBArticles),
  "trending-a": () => import("./articles/trending-a").then((mod) => mod.trendingAArticles),
  "trending-b": () => import("./articles/trending-b").then((mod) => mod.trendingBArticles),
  "geo-a": () => import("./articles/geo-a").then((mod) => mod.geoAArticles),
  "geo-b": () => import("./articles/geo-b").then((mod) => mod.geoBArticles),
  "future-a": () => import("./articles/future-a").then((mod) => mod.futureAArticles),
  "future-b": () => import("./articles/future-b").then((mod) => mod.futureBArticles),
  "roaming-priority": () => import("./articles/roaming-priority").then((mod) => mod.roamingPriorityArticles),
  "enterprise-maritime-b2b": () =>
    import("./articles/enterprise-maritime-b2b").then((mod) => mod.enterpriseMaritimeB2bArticles),
  "enterprise-maritime-b2b-more": () =>
    import("./articles/enterprise-maritime-b2b-more").then((mod) => mod.enterpriseMaritimeB2bMoreArticles),
  "enterprise-maritime-b2b-final": () =>
    import("./articles/enterprise-maritime-b2b-final").then((mod) => mod.enterpriseMaritimeB2bFinalArticles),
  "august-2026-sprint": () => import("./articles/august-2026-sprint").then((mod) => mod.august2026SprintArticles),
  "september-2026-sprint": () =>
    import("./articles/september-2026-sprint").then((mod) => mod.september2026SprintArticles),
  "stage3-batch1": () => import("./articles/stage3-batch1").then((mod) => mod.stage3Batch1Articles),
};

export async function loadArticleBySlug(slug: string): Promise<SeoArticle | undefined> {
  const entry = getBlogIndexEntry(slug);
  if (!entry) return undefined;
  const load = loaders[entry.module];
  if (!load) return undefined;
  const articles = await load();
  return articles.find((article) => article.slug === slug);
}

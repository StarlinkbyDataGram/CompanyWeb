/** Long-form SEO articles with slug routes — aggregated from phase modules. */
export type { SeoArticle, ArticleBlock, ArticleFaq } from "./article-types";
export { img, blocks, p, h2, h3, faqs } from "./article-types";

import type { SeoArticle } from "./article-types";
import { phase1Articles } from "./articles/phase1";
import { evergreenAArticles } from "./articles/evergreen-a";
import { evergreenBArticles } from "./articles/evergreen-b";
import { trendingAArticles } from "./articles/trending-a";
import { trendingBArticles } from "./articles/trending-b";
import { geoAArticles } from "./articles/geo-a";
import { geoBArticles } from "./articles/geo-b";
import { futureAArticles } from "./articles/future-a";
import { futureBArticles } from "./articles/future-b";
import { roamingPriorityArticles } from "./articles/roaming-priority";
import { enterpriseMaritimeB2bArticles } from "./articles/enterprise-maritime-b2b";
import { enterpriseMaritimeB2bMoreArticles } from "./articles/enterprise-maritime-b2b-more";
import { enterpriseMaritimeB2bFinalArticles } from "./articles/enterprise-maritime-b2b-final";
import { august2026SprintArticles } from "./articles/august-2026-sprint";
import { september2026SprintArticles } from "./articles/september-2026-sprint";
import { stage3Batch1Articles } from "./articles/stage3-batch1";

import { legacyArticles } from "./articles/legacy";

export const allSeoArticles2026: SeoArticle[] = [
  ...legacyArticles,
  ...phase1Articles,
  ...evergreenAArticles,
  ...evergreenBArticles,
  ...trendingAArticles,
  ...trendingBArticles,
  ...geoAArticles,
  ...geoBArticles,
  ...futureAArticles,
  ...futureBArticles,
  ...roamingPriorityArticles,
  ...enterpriseMaritimeB2bArticles,
  ...enterpriseMaritimeB2bMoreArticles,
  ...enterpriseMaritimeB2bFinalArticles,
  ...august2026SprintArticles,
  ...september2026SprintArticles,
  ...stage3Batch1Articles,
];

/** Published posts only. Drafts stay in source and out of the index, the route, and the sitemap. */
export const seoArticles2026: SeoArticle[] = allSeoArticles2026.filter((article) => !article.draft);

export function getSeoArticleBySlug(slug: string) {
  return seoArticles2026.find((a) => a.slug === slug);
}

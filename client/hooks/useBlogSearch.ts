import { useMemo } from "react";
import type { SeoArticle } from "@/data/blog/article-types";

export function useBlogSearch(articles: SeoArticle[], query: string) {
  const totalCount = articles.length;
  const normalizedQuery = (query || "").trim().toLowerCase();

  const filteredArticles = useMemo(() => {
    if (!normalizedQuery || normalizedQuery.length < 2) return articles;

    return articles.filter((a) => {
      const q = normalizedQuery;

      if (a.title && a.title.toLowerCase().includes(q)) return true;
      if (a.slug && a.slug.toLowerCase().includes(q)) return true;
      if (a.category && a.category.toLowerCase().includes(q)) return true;

      // tags may not exist on all articles; support string or array
      const tagsAny = (a as any).tags;
      if (Array.isArray(tagsAny)) {
        if (tagsAny.join(" ").toLowerCase().includes(q)) return true;
      } else if (typeof tagsAny === "string") {
        if (tagsAny.toLowerCase().includes(q)) return true;
      }

      // first block text (fast path)
      if (Array.isArray(a.blocks) && a.blocks.length > 0) {
        const first = a.blocks[0];
        if (first && typeof first.text === "string" && first.text.toLowerCase().includes(q)) return true;
      }

      // legacy paragraphs
      if (Array.isArray((a as any).paragraphs) && (a as any).paragraphs.length > 0) {
        if (((a as any).paragraphs[0] as string).toLowerCase().includes(q)) return true;
      }

      return false;
    });
  }, [articles, normalizedQuery]);

  return {
    filteredArticles,
    resultCount: filteredArticles.length,
    totalCount,
  };
}

export default useBlogSearch;

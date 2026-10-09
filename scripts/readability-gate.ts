/**
 * Dev-only readability audit and pre-publish gate.
 *
 * Audit (default): score every blog post and landing page. Exit 0.
 *   pnpm exec tsx scripts/readability-gate.ts
 *
 * Gate one article before publish. Exit 1 on failure.
 *   pnpm exec tsx scripts/readability-gate.ts --gate power-backup-starlink-nigeria
 *
 * A failing article is not published. Set draft: true on the SeoArticle
 * so the blog index, the post route, and the sitemap omit it.
 *
 * An article fails when any of these is true:
 * - Flesch-Kincaid grade is above 9 (above 10 when category is Enterprise)
 * - any prose sentence is over 30 words
 * - a listed technical term appears with no plain definition in the page
 * - the opening has fewer than 3 sentences, or those sentences do not
 *   name a choice (use, choose, if, when, right choice, or a number)
 */
import { seoArticles2026, allSeoArticles2026 } from "../client/data/blog/articles-2026";
import { industryLandingPages } from "../client/data/landing/industry-pages";
import { regionalLandingPages } from "../client/data/landing/regional-pages";
import type { SeoArticle } from "../client/data/blog/article-types";

const FILLER = [
  "seamless",
  "robust",
  "leverage",
  "leveraged",
  "leveraging",
  "utilise",
  "utilise",
  "utilize",
  "utilized",
  "utilising",
  "utilizing",
  "comprehensive",
  "optimal",
  "ensure",
  "ensures",
  "ensuring",
  "cutting-edge",
  "cutting edge",
];

const TERMS: { name: string; find: RegExp; defined: RegExp }[] = [
  { name: "UPS", find: /\bUPS\b/, defined: /battery box|keeps a plug|minutes when|uninterruptible/i },
  { name: "inverter", find: /\binverters?\b/i, defined: /turns battery|battery power into|wall plug|kind of power a normal/i },
  { name: "watt", find: /\bwatts?\b/i, defined: /how much power|power a device uses|power the kit uses/i },
  { name: "VA", find: /\bVA\b/, defined: /size printed on the box|size label|volt-amp/i },
  { name: "pure sine", find: /pure sine/i, defined: /smooth power|smooth type|kind a normal wall/i },
  { name: "modified sine", find: /modified sine|modified inverter/i, defined: /rougher wave|rough inverter|not a smooth/i },
  { name: "VLAN", find: /\bVLANs?\b/, defined: /separate network|its own network|split the network/i },
  { name: "SD-WAN", find: /SD-WAN/i, defined: /more than one internet|picks which link|two links/i },
  { name: "failover", find: /\bfailover\b/i, defined: /backup link|second link|takes over|switches over/i },
  { name: "latency", find: /\blatency\b/i, defined: /delay|how long a signal|wait before/i },
  { name: "depriorit", find: /depriorit/i, defined: /slower when|busy cell|not a hard cutoff|speed drops/i },
  { name: "obstruction", find: /\bobstructions?\b/i, defined: /blocked sky|sky view|something in the way|trees or walls/i },
  { name: "PoE", find: /\bPoE\b/, defined: /power through the network cable|power over ethernet/i },
  { name: "NVR", find: /\bNVR\b/, defined: /recorder|records (the )?cameras|local recorder/i },
  { name: "MPPT", find: /\bMPPT\b/, defined: /solar charge controller|charge controller/i },
  { name: "LiFePO4", find: /LiFePO4/i, defined: /lithium battery|a type of battery/i },
  { name: "watt-hour", find: /watt-hours?/i, defined: /watts times hours|energy/i },
  { name: "amp-hour", find: /amp-hours?/i, defined: /battery size|how much charge|sticker/i },
];

type Row = {
  url: string;
  words: number;
  grade: number | null;
  ease: number | null;
  avgSentence: number | null;
  longest: number;
  longestText: string;
  undefinedTerms: string[];
  filler: string[];
  openingSentences: number;
  openingAnswers: boolean;
  technical: boolean;
  failReasons: string[];
};

function stripMarkdown(text: string) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#*_`>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function syllables(word: string) {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return 0;
  if (w.length <= 3) return 1;
  const groups = w
    .replace(/e$/, "")
    .match(/[aeiouy]+/g);
  return Math.max(1, groups?.length ?? 1);
}

function sentencesOf(text: string) {
  const clean = stripMarkdown(text);
  if (!clean) return [];
  return clean
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => /[A-Za-z]/.test(s) && s.split(/\s+/).length >= 3);
}

function wordsOf(text: string) {
  const clean = stripMarkdown(text);
  if (!clean) return [];
  return clean.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w));
}

function articleProse(article: SeoArticle) {
  const blocks = article.blocks ?? (article.paragraphs ?? []).map((text) => ({ type: "p" as const, text }));
  const opening: string[] = [];
  let seenHeading = false;
  const prose: string[] = [];
  for (const block of blocks) {
    if (block.type === "table") {
      prose.push(block.caption ?? "");
      for (const row of block.rows) prose.push(row.join(". "));
      continue;
    }
    if (block.type === "h2" || block.type === "h3") {
      seenHeading = true;
      prose.push(block.text);
      continue;
    }
    prose.push(block.text);
    if (!seenHeading) opening.push(block.text);
  }
  for (const faq of article.faqs ?? []) {
    prose.push(faq.question);
    prose.push(faq.answer);
  }
  return { prose, opening: sentencesOf(opening.join(" ")).slice(0, 3) };
}

function collectStrings(value: unknown, skip: Set<string>, key = ""): string[] {
  if (typeof value === "string") {
    if (skip.has(key)) return [];
    if (value.startsWith("/") || value.startsWith("http") || value.startsWith("IMAGE")) return [];
    return [value];
  }
  if (Array.isArray(value)) return value.flatMap((item) => collectStrings(item, skip, key));
  if (value && typeof value === "object") {
    return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) => collectStrings(v, skip, k));
  }
  return [];
}

const SKIP_KEYS = new Set([
  "path",
  "canonical",
  "href",
  "src",
  "ogImage",
  "heroImage",
  "image",
  "imageFile",
  "keywords",
  "serviceAreaSchema",
  "objectPosition",
  "heroObjectPosition",
  "imageComment",
]);

function score(url: string, chunks: string[], opening: string[], technical: boolean): Row {
  const prose = chunks.filter(Boolean);
  const sentenceList = prose.flatMap(sentencesOf);
  const wordList = prose.flatMap(wordsOf);
  const words = wordList.length;
  const sentenceCount = sentenceList.length;
  const syllableCount = wordList.reduce((sum, word) => sum + syllables(word), 0);
  const lengths = sentenceList.map((s) => wordsOf(s).length);
  const longest = lengths.length ? Math.max(...lengths) : 0;
  const longestText = sentenceList[lengths.indexOf(longest)] ?? "";
  const avgSentence = sentenceCount ? Math.round((words / sentenceCount) * 10) / 10 : null;
  let ease: number | null = null;
  let grade: number | null = null;
  if (words > 0 && sentenceCount > 0) {
    ease = Math.round((206.835 - 1.015 * (words / sentenceCount) - 84.6 * (syllableCount / words)) * 10) / 10;
    grade = Math.round((0.39 * (words / sentenceCount) + 11.8 * (syllableCount / words) - 15.59) * 10) / 10;
  }
  const blob = prose.join("\n");
  const undefinedTerms = TERMS.filter((term) => term.find.test(blob) && !term.defined.test(blob)).map((term) => term.name);
  const filler = FILLER.filter((phrase) => new RegExp(`\\b${phrase}\\b`, "i").test(blob));
  const openingAnswers =
    opening.length >= 3 && /\b(use|choose|choice|if you|when you|right choice)\b/i.test(opening.join(" "));
  const gradeCap = technical ? 10 : 9;
  const failReasons: string[] = [];
  if (grade != null && grade > gradeCap) failReasons.push(`grade ${grade} is above ${gradeCap}`);
  if (longest > 30) failReasons.push(`a sentence is ${longest} words`);
  if (undefinedTerms.length) failReasons.push(`undefined terms: ${undefinedTerms.join(", ")}`);
  if (!openingAnswers) failReasons.push("the first 3 sentences do not answer the question");
  return {
    url,
    words,
    grade,
    ease,
    avgSentence,
    longest,
    longestText,
    undefinedTerms,
    filler,
    openingSentences: opening.length,
    openingAnswers,
    technical,
    failReasons,
  };
}

function articleRow(article: SeoArticle, published: boolean): Row {
  const { prose, opening } = articleProse(article);
  const row = score(`/blog/${article.slug}`, prose, opening, article.category === "Enterprise");
  if (!published) row.url = `${row.url} (draft)`;
  return row;
}

function landingRow(page: { path: string; canonical?: string }, technical: boolean) {
  const chunks = collectStrings(page, SKIP_KEYS);
  const opening = sentencesOf(chunks.slice(0, 6).join(" ")).slice(0, 3);
  return score(page.canonical || page.path, chunks, opening, technical);
}

function printRow(row: Row) {
  console.log(
    [
      row.url,
      row.words,
      row.grade ?? "-",
      row.ease ?? "-",
      row.avgSentence ?? "-",
      row.longest,
      row.undefinedTerms.join("; ") || "-",
      row.filler.join("; ") || "-",
    ].join(" | "),
  );
}

const gateSlug = process.argv.includes("--gate") ? process.argv[process.argv.indexOf("--gate") + 1] : "";

if (gateSlug) {
  const article = allSeoArticles2026.find((item) => item.slug === gateSlug);
  if (!article) {
    console.error(`No article: ${gateSlug}`);
    process.exit(1);
  }
  const row = articleRow(article, !article.draft);
  console.log("URL | words | grade | ease | avg sentence | longest | undefined terms | filler");
  printRow(row);
  if (row.failReasons.length) {
    console.error("FAIL");
    for (const reason of row.failReasons) console.error(`- ${reason}`);
    if (row.longestText) console.error(`Longest: ${row.longestText}`);
    console.error("Do not publish. Set draft: true and report this result.");
    process.exit(1);
  }
  console.log("PASS");
  process.exit(0);
}

const published = new Set(seoArticles2026.map((article) => article.slug));
const rows = [
  ...allSeoArticles2026.map((article) => articleRow(article, published.has(article.slug))),
  ...industryLandingPages.map((page) => landingRow(page, true)),
  ...regionalLandingPages.map((page) => landingRow(page, false)),
].sort((a, b) => (b.grade ?? 0) - (a.grade ?? 0) || b.longest - a.longest);

console.log("URL | words | grade | ease | avg sentence | longest | undefined terms | filler");
for (const row of rows) printRow(row);
console.log(`\n${rows.length} pages. Worst grade: ${rows[0]?.grade}. Sentences over 30 words: ${rows.filter((row) => row.longest > 30).length}.`);

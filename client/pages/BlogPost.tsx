import { Fragment, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import Picture from "@/components/site/Picture";
import { cropForFile } from "@/lib/image-crop";
import { getBlogIndexEntry } from "@/data/blog/blog-index";
import {
  loadArticleBySlug,
  peekCachedArticle,
  readPrerenderedArticle,
  PRERENDER_ARTICLE_SCRIPT_ID,
} from "@/data/blog/load-article";
import type { ArticleBlock, SeoArticle } from "@/data/blog/article-types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Clock, User } from "lucide-react";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";
import { landingContainer, landingPageRoot } from "@/pages/landing/landing-classes";

function renderParagraphWithLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      const [, label, href] = match;
      const isExternal = href.startsWith("http");
      if (isExternal) {
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            {label}
          </a>
        );
      }
      return (
        <Link key={i} to={href} className="text-primary underline-offset-4 hover:underline">
          {label}
        </Link>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function renderBlock(block: ArticleBlock, key: number) {
  if (block.type === "h2") {
    return (
      <h2 key={key} className="mb-4 mt-10 text-xl font-bold tracking-tight sm:text-2xl">
        {block.text}
      </h2>
    );
  }
  if (block.type === "h3") {
    return (
      <h3 key={key} className="mb-3 mt-8 text-lg font-semibold tracking-tight">
        {block.text}
      </h3>
    );
  }
  if (block.type === "table") {
    return (
      <div key={key} className="not-prose my-6 overflow-x-auto">
        {block.caption ? <p className="mb-2 text-sm text-foreground/70">{block.caption}</p> : null}
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b bg-primary/10">
              {block.headers.map((header) => (
                <th key={header} scope="col" className="px-3 py-2 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row[0]} className="border-b align-top">
                {row.map((cell, cellIndex) => (
                  <td key={`${row[0]}-${cellIndex}`} className="px-3 py-3 leading-snug">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <p key={key} className="mb-5 leading-relaxed">
      {renderParagraphWithLinks(block.text)}
    </p>
  );
}

function initialArticle(slug: string | undefined): SeoArticle | undefined {
  if (!slug) return undefined;
  return peekCachedArticle(slug) ?? readPrerenderedArticle(slug);
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? getBlogIndexEntry(slug) : undefined;
  const [article, setArticle] = useState<SeoArticle | undefined>(() => initialArticle(slug));

  useEffect(() => {
    if (!slug || !entry) {
      setArticle(undefined);
      return;
    }
    let cancelled = false;
    const cached = peekCachedArticle(slug) ?? readPrerenderedArticle(slug);
    if (cached) {
      setArticle(cached);
    } else {
      setArticle((prev) => (prev?.slug === slug ? prev : undefined));
    }
    loadArticleBySlug(slug).then((loaded) => {
      if (!cancelled) setArticle(loaded);
    });
    return () => {
      cancelled = true;
    };
  }, [slug, entry]);

  // Leave the body in the prerendered HTML so the next visit hydrates without collapsing the aside.
  useEffect(() => {
    if (!article || typeof document === "undefined") return;
    if (!navigator.userAgent.includes("ReactSnap")) return;
    let el = document.getElementById(PRERENDER_ARTICLE_SCRIPT_ID) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.type = "application/json";
      el.id = PRERENDER_ARTICLE_SCRIPT_ID;
      document.body.appendChild(el);
    }
    el.textContent = JSON.stringify(article);
  }, [article]);

  const faqSchema = useMemo(() => {
    if (!article?.faqs?.length) return null;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };
  }, [article]);

  if (!entry) {
    return (
      <div className="container py-20">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Button asChild className="mt-6">
          <Link to="/blog">Back to blog</Link>
        </Button>
      </div>
    );
  }

  const view = article ?? entry;
  const canonical = `/blog/${view.slug}`;
  const documentTitle = view.seoTitle ?? `${view.title} | DataGram Nigeria`;
  const dateModified = view.updated ?? view.date;
  const formatArticleDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-NG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: view.title,
    description: view.metaDescription,
    datePublished: view.date,
    dateModified,
    author: { "@type": "Organization", name: "DataGram Nigeria" },
    publisher: {
      "@type": "Organization",
      name: "DataGram Nigeria",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/starlinklogo.png` },
    },
    image: view.image.startsWith("http") ? view.image : `${SITE_URL}${view.image}`,
    mainEntityOfPage: `${SITE_URL}${canonical}`,
    url: `${SITE_URL}${canonical}`,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: view.title, item: `${SITE_URL}${canonical}` },
    ],
  };

  const schema = [articleSchema, breadcrumb, ...(faqSchema ? [faqSchema] : [])];
  const bodyBlocks: ArticleBlock[] = article
    ? (article.blocks ?? article.paragraphs?.map((text) => ({ type: "p" as const, text })) ?? [])
    : [];
  const heroImageComment = view.imageComment ?? `IMAGE: ${view.imageFile} — ${view.imageAlt}`;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-background to-secondary/20 ${landingPageRoot}`}>
      <Seo
        title={documentTitle}
        description={view.metaDescription}
        canonical={canonical}
        image={view.image.startsWith("/") ? view.image : DEFAULT_OG_IMAGE}
        type="article"
        publishedTime={view.date}
        updatedTime={view.updated}
        schema={schema}
      />
      <div className={`${landingContainer} py-12 md:py-16`}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_min(100%,280px)]">
          <article className="min-w-0" data-article-ready={article ? "true" : "false"}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{view.category}</p>
            <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">{view.title}</h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-foreground/60">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {view.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatArticleDate(view.date)}
              </span>
              {view.updated ? (
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Last updated {formatArticleDate(view.updated)}
                </span>
              ) : null}
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {view.readTime}
              </span>
            </div>
            <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border">
              {/* IMAGE: hero — see data-dg-placement for filename and reason */}
              <Picture sizes="100vw"
                src={view.image}
                alt={view.imageAlt}
                fetchPriority="high"
                loading="eager"
                data-dg-image={view.imageFile}
                data-dg-placement={heroImageComment}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: cropForFile(view.imageFile),
                }}
              />
            </div>
            {article ? (
              <>
                <div className="prose prose-lg mt-10 max-w-none text-foreground/85">
                  {bodyBlocks.map((block, i) => renderBlock(block, i))}
                </div>

                {article.cta ? (
                  <div className="mt-10 rounded-2xl border bg-card p-6 text-foreground/85">
                    {renderParagraphWithLinks(article.cta)}
                  </div>
                ) : null}

                {article.faqs && article.faqs.length > 0 ? (
                  <section className="mt-12">
                    <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Frequently asked questions</h2>
                    <Accordion type="single" collapsible className="mt-6 w-full rounded-2xl border bg-card p-2 sm:p-3">
                      {article.faqs.map((faq, idx) => (
                        <AccordionItem key={faq.question} value={`faq-${idx}`} className="rounded-xl border-none px-1 sm:px-2">
                          <AccordionTrigger className="py-4 text-left text-sm font-semibold hover:no-underline sm:text-base [&[data-state=open]]:text-primary">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="pb-4 text-sm leading-relaxed text-foreground/80">
                            {renderParagraphWithLinks(faq.answer)}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </section>
                ) : null}
              </>
            ) : (
              <div
                className="mt-10 min-h-[70vh] rounded-2xl border border-dashed border-border/60 bg-muted/20"
                aria-hidden
              />
            )}

            <div className="mt-10">
              <Button asChild variant="outline">
                <Link to="/blog">← All articles</Link>
              </Button>
            </div>
          </article>

          {/* Mount the CTA only with the body so it is not painted under the hero then pushed down. */}
          {article ? (
            <aside className="min-h-[260px]">
              <Card className="lg:sticky lg:top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Need an installer?</CardTitle>
                  <CardDescription>{view.serviceCta.blurb}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    asChild
                    className="h-auto min-h-10 w-full whitespace-normal px-3 py-2.5 text-center text-sm leading-snug"
                  >
                    <Link to={view.serviceCta.href}>{view.serviceCta.label}</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Contact DataGram</Link>
                  </Button>
                </CardContent>
              </Card>
            </aside>
          ) : (
            <aside className="hidden min-h-[260px] lg:block" aria-hidden />
          )}
        </div>
      </div>
    </div>
  );
}

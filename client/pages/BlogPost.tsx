import { Fragment, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import { cropForFile } from "@/lib/image-crop";
import { getSeoArticleBySlug } from "@/data/blog/articles-2026";
import type { ArticleBlock } from "@/data/blog/article-types";
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
  return (
    <p key={key} className="mb-5 leading-relaxed">
      {renderParagraphWithLinks(block.text)}
    </p>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getSeoArticleBySlug(slug) : undefined;

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

  if (!article) {
    return (
      <div className="container py-20">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Button asChild className="mt-6">
          <Link to="/blog">Back to blog</Link>
        </Button>
      </div>
    );
  }

  const canonical = `/blog/${article.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: "DataGram Nigeria" },
    publisher: {
      "@type": "Organization",
      name: "DataGram Nigeria",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/starlinklogo.png` },
    },
    image: article.image.startsWith("http") ? article.image : `${SITE_URL}${article.image}`,
    mainEntityOfPage: `${SITE_URL}${canonical}`,
    url: `${SITE_URL}${canonical}`,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}${canonical}` },
    ],
  };

  const schema = [articleSchema, breadcrumb, ...(faqSchema ? [faqSchema] : [])];
  const bodyBlocks: ArticleBlock[] =
    article.blocks ??
    (article.paragraphs?.map((text) => ({ type: "p" as const, text })) ?? []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-background to-secondary/20 ${landingPageRoot}`}>
      <Seo
        title={`${article.title} | DataGram Nigeria`}
        description={article.metaDescription}
        canonical={canonical}
        image={article.image.startsWith("/") ? article.image : DEFAULT_OG_IMAGE}
        type="article"
        publishedTime={article.date}
        schema={schema}
      />
      <div className={`${landingContainer} py-12 md:py-16`}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_min(100%,280px)]">
          <article className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{article.category}</p>
            <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">{article.title}</h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-foreground/60">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString("en-NG", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>
            <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border">
              {/* REPLACE: hero image — {article.imageAlt} */}
              <img
                src={article.image}
                alt={article.imageAlt}
                data-dg-image={article.imageFile}
                data-dg-placement={`IMAGE: ${article.imageFile} — ${article.imageAlt}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: cropForFile(article.imageFile),
                }}
              />
            </div>
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

            <div className="mt-10">
              <Button asChild variant="outline">
                <Link to="/blog">← All articles</Link>
              </Button>
            </div>
          </article>

          <aside>
            <Card className="lg:sticky lg:top-24">
              <CardHeader>
                <CardTitle className="text-lg">Need an installer?</CardTitle>
                <CardDescription>{article.serviceCta.blurb}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full">
                  <Link to={article.serviceCta.href}>{article.serviceCta.label}</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Contact DataGram</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}

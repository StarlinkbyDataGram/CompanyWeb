import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import { getSeoArticleBySlug } from "@/data/blog/articles-2026";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";
import { BRAND_NAME, DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

function renderParagraphWithLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      const [, label, href] = match;
      return (
        <Link key={i} to={href} className="text-primary underline-offset-4 hover:underline">
          {label}
        </Link>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getSeoArticleBySlug(slug) : undefined;

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
    author: { "@type": "Organization", name: BRAND_NAME },
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/starlinklogo.png` },
    },
    image: article.image.startsWith("http") ? article.image : `${SITE_URL}${article.image}`,
    mainEntityOfPage: `${SITE_URL}${canonical}`,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Seo
        title={`${article.title} | DataGram`}
        description={article.metaDescription}
        canonical={canonical}
        image={article.image.startsWith("/") ? article.image : DEFAULT_OG_IMAGE}
        type="article"
        publishedTime={article.date}
        schema={[articleSchema, breadcrumb]}
      />
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{article.category}</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{article.title}</h1>
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
            {/* REPLACE: hero image for article */}
            <img
              src={article.image}
              alt={article.title}
              className="mt-8 aspect-video w-full rounded-2xl border object-cover"
            />
            <div className="prose prose-lg mt-10 max-w-none text-foreground/85">
              {article.paragraphs.map((p, i) => (
                <p key={i} className="mb-5 leading-relaxed">
                  {renderParagraphWithLinks(p)}
                </p>
              ))}
            </div>
            <div className="mt-10">
              <Button asChild variant="outline">
                <Link to="/blog">← All articles</Link>
              </Button>
            </div>
          </article>

          <aside>
            <Card className="sticky top-24">
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

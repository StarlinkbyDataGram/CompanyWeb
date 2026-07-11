import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { cropFromSrc } from "@/lib/image-crop";
import { getSeoArticleBySlug } from "@/data/blog/articles-2026";

/** Homepage teaser: evergreen guides with strong local install photos. */
const TEASER_SLUGS = [
  "professional-starlink-installation-nigeria-guide",
  "best-starlink-mounts-nigerian-roofs-corrugated-concrete",
  "extend-starlink-wifi-range-large-nigerian-home",
] as const;

/** Prefer proven field photos over weak stock covers for the homepage cards. */
const TEASER_COVER: Record<(typeof TEASER_SLUGS)[number], { src: string; alt: string }> = {
  "professional-starlink-installation-nigeria-guide": {
    src: "/images/datagram-technician-rooftop-mount.jpg",
    alt: "DataGram technician mounting a Starlink dish on a Nigerian rooftop",
  },
  "best-starlink-mounts-nigerian-roofs-corrugated-concrete": {
    src: "/images/StarlinkRoofMount.jpeg",
    alt: "Starlink dish securely mounted on a residential roof in Nigeria",
  },
  "extend-starlink-wifi-range-large-nigerian-home": {
    src: "/images/starlinkEstateInstallation.jpeg",
    alt: "Starlink installation at a Nigerian residential estate for whole-home coverage",
  },
};

export default function BlogTeaser() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const topPosts = useMemo(() => {
    return TEASER_SLUGS.map((slug) => {
      const article = getSeoArticleBySlug(slug);
      if (!article) return null;
      const cover = TEASER_COVER[slug];
      return {
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        author: article.author,
        date: article.date,
        readTime: article.readTime,
        category: article.category,
        image: cover.src,
        imageAlt: cover.alt,
      };
    }).filter(Boolean) as Array<{
      slug: string;
      title: string;
      excerpt: string;
      author: string;
      date: string;
      readTime: string;
      category: string;
      image: string;
      imageAlt: string;
    }>;
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const first = el.querySelector("[data-slide]") as HTMLElement | null;
      const cardW = first?.offsetWidth ?? el.clientWidth;
      const gap = 16;
      const idx = Math.round(el.scrollLeft / (cardW + gap));
      setActive(Math.max(0, Math.min(topPosts.length - 1, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [topPosts.length]);

  const goTo = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.querySelector("[data-slide]") as HTMLElement | null;
    const cardW = first?.offsetWidth ?? el.clientWidth;
    const gap = 16;
    el.scrollTo({ left: idx * (cardW + gap), behavior: "smooth" });
    setActive(idx);
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold">From the Blog</h2>
          <p className="mt-2 text-foreground/70">
            Evergreen guides on professional Starlink installation, mounts, and whole-home Wi-Fi in Nigeria.
          </p>
        </div>

        <div
          ref={scrollerRef}
          className="relative mx-auto flex max-w-[1100px] gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-6 md:overflow-visible xl:gap-8"
        >
          {topPosts.map((post) => (
            <div key={post.slug} data-slide className="min-w-full snap-center md:min-w-0 md:w-auto">
              <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="h-[280px] min-h-[240px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="400"
                      height={280}
                      style={{ objectPosition: cropFromSrc(post.image) }}
                    />
                    <div className="absolute left-3 top-3">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>
                </Link>
                <CardHeader>
                  <div className="mb-2 flex items-center gap-4 text-sm text-foreground/60">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="transition-colors group-hover:text-primary">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-foreground/60">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    <Button asChild variant="ghost" size="sm" className="hover:bg-blue-600 hover:text-white">
                      <Link to={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 md:hidden" aria-label="Blog pagination">
          {topPosts.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 w-2 min-h-0 min-w-0 rounded-full p-0 transition-all ${i === active ? "bg-primary" : "bg-foreground/30"}`}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

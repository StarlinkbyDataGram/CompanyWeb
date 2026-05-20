import { Link } from "react-router-dom";
import { Gauge, Signal, Zap } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { IndustryLandingConfig } from "@/data/landing/types";
import {
  buildBreadcrumb,
  buildFaqSchema,
  buildHowToSchema,
  buildLocalBusinessSchema,
} from "@/data/landing/schema-helpers";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const ICON_FALLBACK = Signal;

type Props = { config: IndustryLandingConfig };

export default function IndustryLandingPage({ config }: Props) {
  const ogImage = config.ogImage ?? DEFAULT_OG_IMAGE;
  const schemas = [
    buildLocalBusinessSchema(config.serviceAreaSchema),
    buildBreadcrumb(config.path, config.h1),
    buildFaqSchema(config.faqs),
  ];
  if (config.includeHowTo) schemas.push(buildHowToSchema());

  return (
    <div className="flex w-full flex-col">
      <Seo
        title={config.seoTitle}
        description={config.metaDescription}
        canonical={config.canonical}
        image={ogImage}
        keywords={config.keywords}
        schema={schemas}
      />

      {/* Hero */}
      <section className="relative border-b bg-[#0a1628] text-white">
        <div className="absolute inset-0 opacity-40">
          {/* REPLACE: real deployment photo */}
          <img
            src="/images/placeholder-hero-industry.jpg"
            alt={config.heroImageAlt}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-10 py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6ea8ff]">{config.heroLabel}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight md:text-5xl">{config.h1}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{config.heroSubheading}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-[#0040ff] hover:bg-[#0033cc]">
              <Link to="/contact">Get a Free Site Survey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
              <a href="https://wa.me/2349060976424">WhatsApp our engineers</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview + stats */}
      <section className="py-14 md:py-18 border-b bg-muted/30">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{config.overviewTitle}</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/80">
              {config.overviewParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {config.stats.map((stat) => (
              <Card key={stat.label} className="border-primary/20">
                <CardHeader className="pb-2">
                  <CardDescription>{stat.label}</CardDescription>
                  <CardTitle className="text-3xl text-primary">{stat.value}</CardTitle>
                </CardHeader>
                {stat.note && (
                  <CardContent className="pt-0 text-sm text-foreground/70">{stat.note}</CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Starlink */}
      <section className="py-14 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{config.whyTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {config.whyCards.map((card) => {
              const Icon = card.icon ?? ICON_FALLBACK;
              return (
                <Card key={card.title} className="h-full">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-foreground/75">{card.body}</CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deployment proof */}
      <section className="border-y bg-muted/20 py-14 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight">{config.proofTitle}</h2>
          <p className="mt-2 text-foreground/70">Proven Track Record — verified speed samples from field tests (replace with live data).</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {config.proofCards.map((card) => (
              <figure key={card.caption} className="overflow-hidden rounded-2xl border bg-card">
                <img src={card.src} alt={card.alt} className="aspect-video w-full object-cover" loading="lazy" />
                <figcaption className="p-4 text-sm text-foreground/75">{card.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Gauge className="h-5 w-5 text-primary" />
                  {config.speedStat.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <p className="text-2xl font-bold text-primary">{config.speedStat.down}</p>
                  <p className="text-foreground/60">Download</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">{config.speedStat.up}</p>
                  <p className="text-foreground/60">Upload</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">{config.speedStat.latency}</p>
                  <p className="text-foreground/60">Latency</p>
                </div>
              </CardContent>
            </Card>
            <blockquote className="rounded-2xl border bg-card p-6 text-base italic leading-relaxed text-foreground/80">
              “{config.testimonial.quote}”
              <footer className="mt-4 text-sm font-semibold not-italic text-foreground">{config.testimonial.attribution}</footer>
            </blockquote>
          </div>
          <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl border bg-muted">
            {/* REPLACE: embed YouTube video ID here */}
            <div className="absolute inset-0 flex items-center justify-center text-sm text-foreground/60">
              Video walkthrough placeholder — swap iframe src when field footage is ready
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-14 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight">{config.packagesTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {config.packages.map((tier) => (
              <Card key={tier.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">{tier.priceLabel}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <ul className="flex-1 space-y-2 text-sm text-foreground/75">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full">
                    <Link to="/contact">{tier.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t bg-muted/30 py-14 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="mt-8 w-full rounded-2xl border bg-card p-2">
            {config.faqs.map((faq, idx) => (
              <AccordionItem key={faq.question} value={`faq-${idx}`} className="rounded-xl border-none px-2">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-foreground/80">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#0040ff] py-12 text-white">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold">Ready to deploy? Contact us today</h2>
            <p className="mt-2 text-white/85">Book a free site survey or message our install desk on WhatsApp.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Book survey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+2349060976424">Call +234 906 097 6424</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

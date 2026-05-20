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
import { DEFAULT_OG_IMAGE, WHATSAPP_URL } from "@/lib/site";
import {
  landingBtnPrimary,
  landingBtnWhatsApp,
  landingContainer,
  landingCtaBtnOutline,
  landingCtaSection,
  landingHeroCtas,
  landingHeroInner,
  landingHeroOverlay,
  landingHeroSection,
  landingHeroSub,
  landingH1,
  landingPageRoot,
  landingSection,
  landingSectionMuted,
} from "./landing-classes";

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
    <div className={landingPageRoot}>
      <Seo
        title={config.seoTitle}
        description={config.metaDescription}
        canonical={config.canonical}
        image={ogImage}
        keywords={config.keywords}
        schema={schemas}
      />

      <section className={landingHeroSection}>
        <div className={landingHeroOverlay}>
          {/* REPLACE: real deployment photo */}
          <img
            src="/placeholder.svg"
            alt=""
            aria-hidden
            className="h-full min-h-[280px] w-full object-cover sm:min-h-[320px]"
          />
        </div>
        <div className={landingContainer}>
          <div className={landingHeroInner}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6ea8ff] sm:tracking-[0.3em]">
              {config.heroLabel}
            </p>
            <h1 className={landingH1}>{config.h1}</h1>
            <p className={landingHeroSub}>{config.heroSubheading}</p>
            <div className={landingHeroCtas}>
              <Button asChild size="lg" className={landingBtnPrimary}>
                <Link to="/contact">Get a Free Site Survey</Link>
              </Button>
              <Button asChild size="lg" className={landingBtnWhatsApp}>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  WhatsApp our engineers
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={`${landingSection} border-b bg-muted/30`}>
        <div className={`${landingContainer} grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10`}>
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{config.overviewTitle}</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/80">
              {config.overviewParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {config.stats.map((stat) => (
              <Card key={stat.label} className="border-primary/20">
                <CardHeader className="pb-2">
                  <CardDescription>{stat.label}</CardDescription>
                  <CardTitle className="text-2xl text-primary sm:text-3xl">{stat.value}</CardTitle>
                </CardHeader>
                {stat.note && (
                  <CardContent className="pt-0 text-sm text-foreground/70">{stat.note}</CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={landingSection}>
        <div className={landingContainer}>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{config.whyTitle}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className={`${landingSection} border-y bg-muted/20`}>
        <div className={landingContainer}>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{config.proofTitle}</h2>
          <p className="mt-2 text-sm text-foreground/70 sm:text-base">
            Proven Track Record — verified speed samples from field tests (replace with live data).
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <Gauge className="h-5 w-5 shrink-0 text-primary" />
                  {config.speedStat.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 text-center text-sm sm:grid-cols-3">
                <div className="rounded-lg border bg-muted/30 p-3 sm:border-0 sm:bg-transparent sm:p-0">
                  <p className="text-xl font-bold text-primary sm:text-2xl">{config.speedStat.down}</p>
                  <p className="text-foreground/60">Download</p>
                </div>
                <div className="rounded-lg border bg-muted/30 p-3 sm:border-0 sm:bg-transparent sm:p-0">
                  <p className="text-xl font-bold text-primary sm:text-2xl">{config.speedStat.up}</p>
                  <p className="text-foreground/60">Upload</p>
                </div>
                <div className="rounded-lg border bg-muted/30 p-3 sm:border-0 sm:bg-transparent sm:p-0">
                  <p className="text-xl font-bold text-primary sm:text-2xl">{config.speedStat.latency}</p>
                  <p className="text-foreground/60">Latency</p>
                </div>
              </CardContent>
            </Card>
            <blockquote className="rounded-2xl border bg-card p-5 text-base italic leading-relaxed text-foreground/80 sm:p-6">
              “{config.testimonial.quote}”
              <footer className="mt-4 text-sm font-semibold not-italic text-foreground">
                {config.testimonial.attribution}
              </footer>
            </blockquote>
          </div>
          <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl border bg-muted">
            {/* REPLACE: embed YouTube video ID here */}
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-foreground/60">
              Video walkthrough placeholder — swap iframe src when field footage is ready
            </div>
          </div>
        </div>
      </section>

      <section className={landingSection}>
        <div className={landingContainer}>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{config.packagesTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      <section className={landingSectionMuted}>
        <div className={landingContainer}>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="mt-8 w-full rounded-2xl border bg-card p-2 sm:p-3">
            {config.faqs.map((faq, idx) => (
              <AccordionItem key={faq.question} value={`faq-${idx}`} className="rounded-xl border-none px-1 sm:px-2">
                <AccordionTrigger className="py-4 text-left text-sm font-semibold hover:no-underline sm:text-base [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className={landingCtaSection}>
        <div className={`${landingContainer} flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between`}>
          <div className="min-w-0">
            <h2 className="text-xl font-bold sm:text-2xl">Ready to deploy? Contact us today</h2>
            <p className="mt-2 text-sm text-white/90 sm:text-base">
              Book a free site survey or message our install desk on WhatsApp.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link to="/contact">Book survey</Link>
            </Button>
            <Button asChild size="lg" className={landingCtaBtnOutline}>
              <a href="tel:+2349060976424">Call +234 906 097 6424</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

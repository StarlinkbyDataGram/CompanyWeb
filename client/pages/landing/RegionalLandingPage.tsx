import { Link } from "react-router-dom";
import { Award, Clock, Headphones, MapPin, ShieldCheck } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { RegionalLandingConfig } from "@/data/landing/types";
import {
  buildBreadcrumb,
  buildFaqSchema,
  buildLocalBusinessSchema,
} from "@/data/landing/schema-helpers";
import { DEFAULT_OG_IMAGE, WHATSAPP_URL } from "@/lib/site";

type Props = { config: RegionalLandingConfig };

export default function RegionalLandingPage({ config }: Props) {
  const ogImage = config.ogImage ?? DEFAULT_OG_IMAGE;
  const schemas = [
    buildLocalBusinessSchema(config.serviceAreaSchema, config.geo),
    buildBreadcrumb(config.path, config.h1),
    buildFaqSchema(config.faqs),
  ];

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

      <section className="relative border-b bg-[#0a1628] text-white">
        <div className="absolute inset-0 opacity-35">
          <img
            src="/images/placeholder-hero-regional.jpg"
            alt={config.heroImageAlt}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-10 py-16 md:py-22">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6ea8ff]">{config.heroLabel}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight md:text-5xl">{config.h1}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{config.heroSubheading}</p>
        </div>
      </section>

      <section className="border-b bg-primary/5 py-8">
        <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-lg font-semibold">
            Serving {config.stateName} since {config.trustSinceYear}
          </p>
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            <span className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" /> Certified Installer
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" /> Same-Day Survey
            </span>
            <span className="flex items-center gap-2">
              <Headphones className="h-5 w-5 text-primary" /> 24/7 Support
            </span>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight">{config.whyTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {config.whyCards.map((card) => {
              const Icon = card.icon ?? MapPin;
              return (
                <Card key={card.title}>
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

      <section className="border-y bg-muted/20 py-14 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight">{config.proofTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {config.proofCards.map((card) => (
              <figure key={card.caption} className="overflow-hidden rounded-2xl border bg-card">
                <img src={card.src} alt={card.alt} className="aspect-video w-full object-cover" loading="lazy" />
                <figcaption className="p-4 text-sm text-foreground/75">{card.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{config.speedStat.label}</CardTitle>
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
            <blockquote className="rounded-2xl border bg-card p-6 italic leading-relaxed text-foreground/80">
              “{config.testimonial.quote}”
              <footer className="mt-4 text-sm font-semibold not-italic">{config.testimonial.attribution}</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight">{config.serviceAreasTitle}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {config.serviceAreas.map((area) => (
              <li key={area} className="flex items-start gap-2 text-foreground/80">
                <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t bg-muted/30 py-14 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight">Regional FAQ</h2>
          <Accordion type="single" collapsible className="mt-8 w-full rounded-2xl border bg-card p-2">
            {config.faqs.map((faq, idx) => (
              <AccordionItem key={faq.question} value={`rfaq-${idx}`} className="rounded-xl border-none px-2">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-foreground/80">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-[#0040ff] py-12 text-white">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-lg font-semibold">Book a free site survey in {config.stateName}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1da851]">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                WhatsApp CTA
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Book a Free Site Survey</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

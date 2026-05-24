import { Link } from "react-router-dom";
import { Award, Clock, Headphones, MapPin } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cropForFile } from "@/lib/image-crop";
import type { RegionalLandingConfig } from "@/data/landing/types";
import {
  buildBreadcrumb,
  buildFaqSchema,
  buildLocalBusinessSchema,
} from "@/data/landing/schema-helpers";
import { DEFAULT_OG_IMAGE, WHATSAPP_URL } from "@/lib/site";
import {
  landingBtnPrimary,
  landingBtnWhatsApp,
  landingContainer,
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

type Props = { config: RegionalLandingConfig };

export default function RegionalLandingPage({ config }: Props) {
  const ogImage = config.ogImage ?? DEFAULT_OG_IMAGE;
  const schemas = [
    buildLocalBusinessSchema(config.serviceAreaSchema, config.geo),
    buildBreadcrumb(config.path, config.h1),
    buildFaqSchema(config.faqs),
  ];

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
          <div className="aspect-[16/9] h-full min-h-[320px] w-full overflow-hidden sm:min-h-[400px]">
            {config.path === "/starlink-installation-abuja" && (
              <>
                {/* IMAGE: StarlinkCompanyInstallation.jpeg — conference facility Abuja institutional */}
              </>
            )}
            {config.path === "/starlink-installation-lagos" && (
              <>
                {/* IMAGE: starlinkSetup.jpeg — commercial building Lagos urban environment */}
              </>
            )}
            {config.path === "/starlink-installation-rivers-state-port-harcourt" && (
              <>
                {/* IMAGE: starlinkCompanyInstalltionImage.jpeg — industrial roof near Port Harcourt port */}
              </>
            )}
            {config.path === "/starlink-installation-delta-state" && (
              <>
                {/* IMAGE: starlinkInstallation.jpeg — solar array background Delta State */}
              </>
            )}
            {config.heroImageMissing ? (
              <>
                {/* MISSING HERO: needs a photo showing Starlink installation in this state.
                    Suggested: rooftop dish with identifiable local landmark or landscape. */}
                <div
                  className="h-full w-full bg-gradient-to-br from-[#001a66] to-[#0040ff]/40"
                  aria-hidden
                />
              </>
            ) : (
              config.heroImage &&
              config.heroImageFile && (
                <>
                  {/* IMAGE ASSIGNED: hero — see data-dg-placement for context */}
                  <img
                    src={config.heroImage}
                    alt={config.heroImageAlt}
                    width={1920}
                    height={1080}
                    data-dg-image={config.heroImageFile}
                    data-dg-placement={config.heroImageReason}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition:
                        config.heroObjectPosition ?? cropForFile(config.heroImageFile ?? ""),
                    }}
                  />
                </>
              )
            )}
          </div>
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

      <section className="border-b bg-primary/5 py-8 sm:py-10">
        <div className={`${landingContainer} flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between`}>
          <p className="text-base font-semibold sm:text-lg">
            Serving {config.stateName} since {config.trustSinceYear}
          </p>
          <div className="flex flex-col gap-3 text-sm font-medium sm:flex-row sm:flex-wrap sm:gap-6">
            <span className="flex items-center gap-2">
              <Award className="h-5 w-5 shrink-0 text-primary" /> Certified Installer
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5 shrink-0 text-primary" /> Same-Day Survey
            </span>
            <span className="flex items-center gap-2">
              <Headphones className="h-5 w-5 shrink-0 text-primary" /> 24/7 Support
            </span>
          </div>
        </div>
      </section>

      <section className={landingSection}>
        <div className={landingContainer}>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{config.whyTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {config.whyCards.map((card) => {
              const Icon = card.icon ?? MapPin;
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
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {config.proofCards.map((card) => (
              <figure key={card.caption} className="overflow-hidden rounded-2xl border bg-card">
                <div className="h-[280px] min-h-[240px] w-full overflow-hidden">
                  {/* IMAGE ASSIGNED: deployment proof — see data-dg-placement */}
                  <img
                    src={card.src}
                    alt={card.alt}
                    width={800}
                    height={280}
                    loading="lazy"
                    data-dg-image={card.imageFile}
                    data-dg-placement={card.imageComment}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: card.objectPosition ?? cropForFile(card.imageFile),
                    }}
                  />
                </div>
                <figcaption className="p-4 text-sm text-foreground/75">{card.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{config.speedStat.label}</CardTitle>
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
                {config.speedStatNote && (
                  <p className="col-span-full text-center text-xs text-foreground/65 sm:text-sm">{config.speedStatNote}</p>
                )}
              </CardContent>
            </Card>
            <blockquote className="rounded-2xl border bg-card p-5 italic leading-relaxed text-foreground/80 sm:p-6">
              {/* PLACEHOLDER TESTIMONIAL — replace with real client quote */}
              “{config.testimonial.quote}”
              <footer className="mt-4 text-sm font-semibold not-italic">{config.testimonial.attribution}</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={landingSection}>
        <div className={landingContainer}>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Coverage in {config.stateName}</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/80">{config.coverageParagraph}</p>
          {config.relatedLinks && config.relatedLinks.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
              {config.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-primary underline-offset-4 hover:underline">
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className={landingSectionMuted}>
        <div className={landingContainer}>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Regional FAQ</h2>
          <Accordion type="single" collapsible className="mt-8 w-full rounded-2xl border bg-card p-2 sm:p-3">
            {config.faqs.map((faq, idx) => (
              <AccordionItem key={faq.question} value={`rfaq-${idx}`} className="rounded-xl border-none px-1 sm:px-2">
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
          <p className="text-base font-semibold sm:text-lg">Book a free site survey in {config.stateName}</p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="w-full bg-[#25D366] text-white hover:bg-[#1da851] sm:w-auto">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link to="/contact">Book a Free Site Survey</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

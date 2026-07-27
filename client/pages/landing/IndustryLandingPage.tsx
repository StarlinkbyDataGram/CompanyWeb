import { Link } from "react-router-dom";
import { CheckCircle2, Gauge, Signal, Zap } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cropForFile } from "@/lib/image-crop";
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
  const faqSchemaSource = config.schemaFaqs ?? config.faqs;
  const schemas = [
    buildLocalBusinessSchema(config.serviceAreaSchema),
    buildBreadcrumb(config.path, config.h1),
    buildFaqSchema(faqSchemaSource),
    ...(config.extraSchemas ?? []),
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
          <div className="aspect-[16/9] h-full min-h-[320px] w-full overflow-hidden sm:min-h-[400px]">
            {config.path === "/starlink-offshore-maritime-installation" && (
              <>
                {/* IMAGE: maritime2.jpeg — wide cinematic tanker deck hero, open ocean horizon */}
              </>
            )}
            {config.path === "/starlink-enterprise-nigeria" && (
              <>
                {/* IMAGE: StarlinkCompanyInstallation.jpeg — NCDMB Conference Centre institutional credibility */}
              </>
            )}
            {config.path === "/starlink-home-installation" && (
              <>
                {/* IMAGE: StarlinkRoofMount.jpeg — Nigerian technician mounting dish on residential roof */}
              </>
            )}
            {config.path === "/starlink-boat-installation" && (
              <>
                {/* IMAGE: maritime3.jpeg — patrol boat mast with Nigerian waterway and bridge */}
              </>
            )}
            {config.path === "/starlink-enterprise-marine-hub" && (
              <>
                {/* IMAGE: hero-enterprise-marine-hub.jpg — dark network rack / ops infrastructure for enterprise-marine hub */}
              </>
            )}
            {config.path === "/starlink-offshore-hse-compliance" && (
              <>
                {/* IMAGE: hero-offshore-hse-compliance.jpg — aerial offshore oil platform complex for HSE page */}
              </>
            )}
            {config.path === "/starlink-marine-sdwan-integration" && (
              <>
                {/* IMAGE: hero-marine-sdwan-integration.jpg — ship bridge navigation console for marine SD-WAN */}
              </>
            )}
            {config.path === "/starlink-fleet-management-nigeria" && (
              <>
                {/* IMAGE: hero-fleet-management-nigeria.jpg — aerial multi-vessel fleet for fleet management */}
              </>
            )}
            {config.path === "/starlink-roaming-global-priority-nigeria" && (
              <>
                {/* IMAGE: maritime2.jpeg — tanker deck open ocean — Roaming & Global Priority activation hero */}
              </>
            )}
            {config.heroImage && config.heroImageFile && (
              <img
                src={config.heroImage}
                alt={config.heroImageAlt}
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
                <Link to={config.heroPrimaryCta?.href ?? "/contact"}>
                  {config.heroPrimaryCta?.label ?? "Get a Free Site Survey"}
                </Link>
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

      {config.downloadCta && (
        <section className={`${landingSection} border-b`}>
          <div className={landingContainer}>
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">{config.downloadCta.title}</CardTitle>
                <CardDescription className="text-base text-foreground/75">
                  {config.downloadCta.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild size="lg" className={landingBtnPrimary}>
                  <a href={config.downloadCta.href} download>
                    {config.downloadCta.buttonLabel}
                  </a>
                </Button>
                <p className="mt-3 text-sm text-foreground/65">{config.downloadCta.note}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

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
                  <CardContent className="space-y-3 text-sm leading-relaxed text-foreground/75">
                    <p>{card.body}</p>
                    {card.href && (
                      <Link
                        to={card.href}
                        className="inline-flex font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        {card.linkLabel ?? "Learn more"}
                      </Link>
                    )}
                  </CardContent>
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
            Field deployments across Nigeria — offshore, enterprise, and residential.
          </p>
          {config.proofLink && (
            <div className="mt-6">
              <Link
                to={config.proofLink.href}
                className="inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
              >
                {config.proofLink.label}
              </Link>
            </div>
          )}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {config.proofCards.map((card) => (
              <figure key={card.caption} className="overflow-hidden rounded-2xl border bg-card">
                <div className="h-[280px] min-h-[240px] w-full overflow-hidden">
                  {/* deployment proof — IMAGE filename and reason on img data-dg-placement */}
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
        </div>
      </section>

      {config.equipmentSection && (
        <section className={`${landingSection} border-b bg-muted/20`}>
          <div className={`${landingContainer} grid gap-8 lg:grid-cols-2 lg:items-start`}>
            <div className="min-w-0">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{config.equipmentSection.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/80">
                {config.equipmentSection.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="grid min-w-0 gap-4">
              <figure className="overflow-hidden rounded-2xl border bg-card">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={config.equipmentSection.image.src}
                    alt={config.equipmentSection.image.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    data-dg-image={config.equipmentSection.image.imageFile}
                    data-dg-placement={config.equipmentSection.image.imageComment}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition:
                        config.equipmentSection.image.objectPosition ??
                        cropForFile(config.equipmentSection.image.imageFile),
                    }}
                  />
                </div>
                <figcaption className="p-4 text-sm text-foreground/75">
                  {config.equipmentSection.image.caption}
                </figcaption>
              </figure>
              {config.equipmentSection.secondaryImage && (
                <figure className="overflow-hidden rounded-2xl border bg-card">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={config.equipmentSection.secondaryImage.src}
                      alt={config.equipmentSection.secondaryImage.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      data-dg-image={config.equipmentSection.secondaryImage.imageFile}
                      data-dg-placement={config.equipmentSection.secondaryImage.imageComment}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition:
                          config.equipmentSection.secondaryImage.objectPosition ??
                          cropForFile(config.equipmentSection.secondaryImage.imageFile),
                      }}
                    />
                  </div>
                  <figcaption className="p-4 text-sm text-foreground/75">
                    {config.equipmentSection.secondaryImage.caption}
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
        </section>
      )}

      {config.safetyStandards && (
        <section className={landingSection}>
          <div className={landingContainer}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{config.safetyStandards.title}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {config.safetyStandards.items.map((item) => (
                <Card key={item.title} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3 text-lg">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{item.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-foreground/75">{item.body}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {config.extraSections?.map((section) => (
        <section key={section.title} className={`${landingSection} border-b bg-muted/20`}>
          <div className={landingContainer}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{section.title}</h2>
            {section.paragraphs && section.paragraphs.length > 0 && (
              <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/80">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
            {section.cards && section.cards.length > 0 && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.cards.map((card) => (
                  <Card key={card.title} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm leading-relaxed text-foreground/75">
                      <p>{card.body}</p>
                      {card.href && (
                        <Link
                          to={card.href}
                          className="inline-flex font-semibold text-primary underline-offset-4 hover:underline"
                        >
                          {card.linkLabel ?? "Learn more"}
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            {section.checklist && section.checklist.length > 0 && (
              <ul className="mt-8 space-y-3">
                {section.checklist.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80 sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.details && section.details.length > 0 && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {section.details.map((item) => (
                  <Card key={item.title} className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-start gap-3 text-lg">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{item.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm leading-relaxed text-foreground/75">{item.body}</CardContent>
                  </Card>
                ))}
              </div>
            )}
            {section.note && (
              <p className="mt-6 text-sm font-medium text-foreground/70">{section.note}</p>
            )}
            {section.footerNote && (
              <p className="mt-4 text-sm text-primary">{section.footerNote}</p>
            )}
          </div>
        </section>
      ))}

      {config.relatedLinks && config.relatedLinks.length > 0 && (
        <section className={`${landingSection} border-b`}>
          <div className={landingContainer}>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Related services</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {config.relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-base font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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
          {config.packagePriceDisclaimer && (
            <p className="mt-6 text-sm text-foreground/65">
              Prices shown are indicative and subject to change based on current USD/NGN exchange rates. Contact us for
              today&apos;s pricing.
            </p>
          )}
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
            <h2 className="text-xl font-bold sm:text-2xl">
              {config.ctaBanner?.title ?? "Ready to deploy? Contact us today"}
            </h2>
            <p className="mt-2 text-sm text-white/90 sm:text-base">
              {config.ctaBanner?.body ??
                "Book a free site survey or message our install desk on WhatsApp."}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link to={config.ctaBanner?.href ?? "/contact"}>
                {config.ctaBanner?.buttonLabel ?? "Book survey"}
              </Link>
            </Button>
            <Button asChild size="lg" className={landingCtaBtnOutline}>
              <a href="tel:+2349060976424">Call +234 906 097 6424</a>
            </Button>
            <Button asChild size="lg" className={landingCtaBtnOutline}>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

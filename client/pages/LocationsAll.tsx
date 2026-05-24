import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { allLocationCards, NORTHERN_STATES_NOTICE } from "@/data/locations-all";
import { SITE_URL } from "@/lib/site";

export default function LocationsAll() {
  const itemList = allLocationCards.map((card, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: card.title,
    url: `${SITE_URL}${card.href}`,
  }));

  return (
    <div className="flex flex-col">
      <Seo
        title="All Starlink Installation Locations in Nigeria | DataGram"
        description="Browse all DataGram Starlink installation locations across Nigeria including Lagos, Abuja, Port Harcourt, Delta, Enugu, Abia, Anambra, Imo and more."
        canonical="/locations/all"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "All Starlink installation locations in Nigeria",
          url: `${SITE_URL}/locations/all`,
          hasPart: {
            "@type": "ItemList",
            itemListElement: itemList,
          },
        }}
      />
      <section className="border-b bg-muted/40 py-14 md:py-20">
        <div className="container">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            All Starlink installation locations in Nigeria
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-foreground/75">
            DataGram installs and activates Starlink across South-South and South-East Nigeria. Select your state or
            city below to read how we handle installations in your area.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allLocationCards.map((card) => (
            <Card key={card.href} className="h-full border bg-card/80 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">{card.title}</CardTitle>
                <p className="text-sm text-foreground/70">{card.regionLabel}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-foreground/80">{card.description}</p>
                <Link
                  className="inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  to={card.href}
                >
                  Read the {card.title} guide →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t bg-muted/30 py-10">
        <div className="container max-w-3xl">
          <p className="text-sm leading-relaxed text-foreground/80">{NORTHERN_STATES_NOTICE}</p>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/locations">← Back to main cities</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

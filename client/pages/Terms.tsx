import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const clauses: { title: string; body: string }[] = [
  {
    title: "Client Ownership of Equipment",
    body: "All Starlink equipment, networking equipment and other items purchased and paid for by the Client shall remain the property of the Client.",
  },
  {
    title: "DataGram's Role",
    body: "DataGram's responsibility is to install, configure and manage the Starlink subscription/service for the Client. DataGram does not guarantee uninterrupted Internet service.",
  },
  {
    title: "Subscription Invoice",
    body: "DataGram shall issue the Client an invoice 5–10 days before the subscription expires.",
  },
  {
    title: "Full Payment Before Renewal",
    body: "All outstanding balances owed to DataGram must be fully paid before any subscription is renewed or any new subscription term commences. No renewal shall be processed while any previous invoice, service charge, logistics charge, repair charge or other agreed amount remains outstanding.",
  },
  {
    title: "Late/Non-Payment",
    body: "If the Client fails to settle all outstanding amounts before the subscription expires, DataGram may decline to renew the subscription without liability for any resulting downtime, loss or business interruption.",
  },
  {
    title: "Network Outages",
    body: "DataGram shall not be liable for outages, interruptions, degradation or downtime caused by Starlink, satellite/network problems, telecommunications failures, weather, maintenance, government restrictions or circumstances outside DataGram's reasonable control.",
  },
  {
    title: "No Liability for Business Loss",
    body: "DataGram shall not be liable for loss of revenue, profit, business, customers, bookings, data, productivity, reputation or any indirect/consequential loss arising from the terminal or Internet service being offline.",
  },
  {
    title: "Physical Engineer Attendance",
    body: "Where a technical issue requires physical attendance, the Client shall pay the applicable logistics, transportation, engineer call-out, diagnostic, labour, repair and related service charges, except where the issue is proven to be solely due to DataGram's defective workmanship covered by warranty.",
  },
  {
    title: "Power & Electrical Infrastructure",
    body: "The Client is responsible for electricity, generator, inverter, UPS, surge protection, earthing and other electrical infrastructure. DataGram shall not be liable for problems caused by the Client's power supply.",
  },
  {
    title: "Equipment Damage",
    body: "The Client shall bear the cost of repair or replacement for damage caused by misuse, negligence, unauthorized modification, lightning, power surge, flooding, fire, vandalism, theft, physical damage or other causes not attributable to DataGram.",
  },
  {
    title: "Unauthorized Modification",
    body: "The Client shall not move, modify, disconnect or permit unauthorized persons to interfere with the installed system without DataGram's approval.",
  },
  {
    title: "Third-Party Equipment",
    body: "DataGram shall not be liable for faults caused by equipment, infrastructure or services not supplied or installed by DataGram.",
  },
  {
    title: "Limitation of Liability",
    body: "DataGram's liability shall be limited to the maximum extent permitted by Nigerian law, with an agreed financial liability cap, except for liabilities that cannot legally be excluded.",
  },
  {
    title: "Client Indemnity",
    body: "The Client shall indemnify DataGram against losses, claims and expenses arising from the Client's negligence, misuse, unauthorized modifications, non-payment, unlawful use or actions of persons using the Client's network.",
  },
  {
    title: "Force Majeure",
    body: "DataGram shall not be liable for events beyond its reasonable control, including natural disasters, fire, flooding, lightning, government action, telecommunications failure and Starlink/satellite/network failure.",
  },
  {
    title: "Outstanding Balances After Termination",
    body: "Termination or expiration of the Agreement shall not cancel any outstanding amount owed to DataGram. All outstanding balances remain immediately payable in accordance with the Agreement.",
  },
  {
    title: "No Guaranteed Uptime",
    body: "DataGram shall not guarantee continuous, uninterrupted or fault-free Internet connectivity because the service depends on third-party infrastructure and circumstances outside DataGram's control.",
  },
  {
    title: "Refund Policy",
    body: "DataGram does not offer a refund on gadgets that have been installed on the client's premises and confirmed online and active.",
  },
  {
    title: "Advance Payment",
    body: "Payment for gadget and subscription are 100% in advance.",
  },
];

export default function Terms() {
  return (
    <div className="flex flex-col">
      <Seo
        title="Terms & Conditions | DataGram Nigeria"
        description="Official service agreement, installation policies, payment terms, and warranty disclaimers for DataGram Starlink installation and managed services."
        canonical="/terms"
      />

      <section className="border-b bg-muted/40 py-16 md:py-24">
        <div className="container max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Legal</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-5 text-base font-medium text-foreground/70 md:text-lg">
            Effective Date: 4th January 2025
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
            These terms govern your use of DataGram&apos;s website and services, including Starlink
            installation, hardware sales, subscription management, and related support in Nigeria.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Contact DataGram</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/privacy">Privacy Policy</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl space-y-8 md:space-y-10">
          {clauses.map((clause, index) => (
            <Card key={clause.title} className="border-border/80 shadow-sm">
              <CardHeader className="flex flex-row items-start gap-5 space-y-0 p-6 pb-4 md:p-8 md:pb-5">
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <CardTitle className="pt-1.5 text-xl font-bold tracking-tight md:text-2xl">
                  {clause.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 pl-[4.25rem] pt-0 md:px-8 md:pb-8 md:pl-[4.75rem]">
                <p className="text-base leading-relaxed text-foreground/80 md:text-lg md:leading-8">
                  {clause.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t bg-muted/30 py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border bg-card p-8 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Questions about these terms?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
              Message our team before you sign or renew. We will clarify payment, warranty, and
              support scope for your install.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Go to Contact</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/privacy">Read Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

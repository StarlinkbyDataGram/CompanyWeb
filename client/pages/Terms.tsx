import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const clauses: { title: string; body: string }[] = [
  {
    title: "1: Client Ownership of Equipment",
    body: "All Starlink equipment, networking equipment and other items purchased and paid for by the Client shall remain the property of the Client.",
  },
  {
    title: "2: DataGram's Role",
    body: "DataGram's responsibility is to install, configure and manage the Starlink subscription/service for the Client. DataGram does not guarantee uninterrupted Internet service.",
  },
  {
    title: "3: Subscription Invoice",
    body: "DataGram shall issue the Client an invoice 5–10 days before the subscription expires.",
  },
  {
    title: "4: Full Payment Before Renewal",
    body: "All outstanding balances owed to DataGram must be fully paid before any subscription is renewed or any new subscription term commences. No renewal shall be processed while any previous invoice, service charge, logistics charge, repair charge or other agreed amount remains outstanding.",
  },
  {
    title: "5: Late/Non-Payment",
    body: "If the Client fails to settle all outstanding amounts before the subscription expires, DataGram may decline to renew the subscription without liability for any resulting downtime, loss or business interruption.",
  },
  {
    title: "6: Network Outages",
    body: "DataGram shall not be liable for outages, interruptions, degradation or downtime caused by Starlink, satellite/network problems, telecommunications failures, weather, maintenance, government restrictions or circumstances outside DataGram's reasonable control.",
  },
  {
    title: "7: No Liability for Business Loss",
    body: "DataGram shall not be liable for loss of revenue, profit, business, customers, bookings, data, productivity, reputation or any indirect/consequential loss arising from the terminal or Internet service being offline.",
  },
  {
    title: "8: Physical Engineer Attendance",
    body: "Where a technical issue requires physical attendance, the Client shall pay the applicable logistics, transportation, engineer call-out, diagnostic, labour, repair and related service charges, except where the issue is proven to be solely due to DataGram's defective workmanship covered by warranty.",
  },
  {
    title: "9: Power & Electrical Infrastructure",
    body: "The Client is responsible for electricity, generator, inverter, UPS, surge protection, earthing and other electrical infrastructure. DataGram shall not be liable for problems caused by the Client's power supply.",
  },
  {
    title: "10: Equipment Damage",
    body: "The Client shall bear the cost of repair or replacement for damage caused by misuse, negligence, unauthorized modification, lightning, power surge, flooding, fire, vandalism, theft, physical damage or other causes not attributable to DataGram.",
  },
  {
    title: "11: Unauthorized Modification",
    body: "The Client shall not move, modify, disconnect or permit unauthorized persons to interfere with the installed system without DataGram's approval.",
  },
  {
    title: "12: Third-Party Equipment",
    body: "DataGram shall not be liable for faults caused by equipment, infrastructure or services not supplied or installed by DataGram.",
  },
  {
    title: "13: Limitation of Liability",
    body: "DataGram's liability shall be limited to the maximum extent permitted by Nigerian law, with an agreed financial liability cap, except for liabilities that cannot legally be excluded.",
  },
  {
    title: "14: Client Indemnity",
    body: "The Client shall indemnify DataGram against losses, claims and expenses arising from the Client's negligence, misuse, unauthorized modifications, non-payment, unlawful use or actions of persons using the Client's network.",
  },
  {
    title: "15: Force Majeure",
    body: "DataGram shall not be liable for events beyond its reasonable control, including natural disasters, fire, flooding, lightning, government action, telecommunications failure and Starlink/satellite/network failure.",
  },
  {
    title: "16: Outstanding Balances After Termination",
    body: "Termination or expiration of the Agreement shall not cancel any outstanding amount owed to DataGram. All outstanding balances remain immediately payable in accordance with the Agreement.",
  },
  {
    title: "17: No Guaranteed Uptime",
    body: "DataGram shall not guarantee continuous, uninterrupted or fault-free Internet connectivity because the service depends on third-party infrastructure and circumstances outside DataGram's control.",
  },
  {
    title: "18: Refund Policy",
    body: "DataGram does not offer a refund on gadgets that have been installed on the client's premises and confirmed online and active.",
  },
  {
    title: "19: Advance Payment",
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

      <section className="border-b bg-muted/40 py-14 md:py-20">
        <div className="container max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Legal</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-base font-medium text-foreground/70 md:text-lg">
            Effective Date: 4th January 2025
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
            These terms govern your use of DataGram&apos;s website and services, including Starlink
            installation, hardware sales, subscription management, and related support in Nigeria.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Contact DataGram</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/privacy">Privacy Policy</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-4xl space-y-5 md:space-y-6">
          {clauses.map((clause, index) => (
            <Card key={clause.title} className="border-border/80 shadow-sm">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-3">
                <span
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <CardTitle className="text-lg font-bold tracking-tight md:text-xl">
                  {clause.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-[3.75rem] pt-0 md:pl-16">
                <p className="text-base leading-relaxed text-foreground/80">{clause.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t bg-muted/30 py-12 md:py-16">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight">Questions about these terms?</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/75">
              Message our team before you sign or renew. We will clarify payment, warranty, and
              support scope for your install.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact">Go to Contact</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/privacy">Read Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

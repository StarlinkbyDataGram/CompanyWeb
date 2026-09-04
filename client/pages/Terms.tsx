import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Clause = {
  title: string;
  /** Paragraphs shown before any list */
  lead?: string[];
  bullets?: string[];
  /** Paragraphs shown after any list */
  trail?: string[];
  /** Numbered acknowledgement items (section 40) */
  numbered?: string[];
};

const clauses: Clause[] = [
  {
    title: "Acceptance of Terms",
    lead: [
      "1.1. These Terms apply to all customers purchasing or using DataGram's products and Services.",
      "1.2. A quotation, proforma invoice, invoice, service agreement, installation report, subscription invoice or other written document issued by DataGram may contain additional terms applicable to a particular transaction.",
      "1.3. Where there is a conflict between these Terms and a separately signed written agreement, the signed agreement shall prevail only to the extent of the conflict.",
      "1.4. DataGram reserves the right to update these Terms from time to time. Updated Terms shall apply to future orders, renewals and Services.",
    ],
  },
  {
    title: "Services Provided by DataGram",
    lead: ["2.1. DataGram may provide, depending on the Client's order:"],
    bullets: [
      "Starlink equipment supply;",
      "Starlink installation;",
      "Internet subscription management;",
      "Network configuration;",
      "Wi-Fi installation and distribution;",
      "Network monitoring and management;",
      "Router, switch and access-point configuration;",
      "Network troubleshooting;",
      "Maintenance and technical support;",
      "Equipment deployment;",
      "Network expansion;",
      "Other telecommunications and IT-related services.",
    ],
    trail: [
      "2.2. The exact scope of Services shall be determined by the applicable quotation, invoice, service agreement or order confirmation.",
      "2.3. DataGram shall only be responsible for services expressly included in the agreed scope.",
      "2.4. Any additional work requested by the Client shall be treated as an additional service and may attract additional charges.",
    ],
  },
  {
    title: "Equipment Ownership",
    lead: [
      "3.1. Equipment purchased and fully paid for by the Client shall become the Client's property, subject to any applicable third-party terms.",
      "3.2. Equipment supplied by DataGram but not fully paid for shall remain the property of DataGram until full payment has been received.",
      "3.3. Where equipment is supplied under a rental, trial, lease, managed-service or temporary arrangement, ownership shall remain with DataGram unless otherwise agreed in writing.",
      "3.4. The Client shall not sell, transfer, pledge, lease, modify or otherwise dispose of equipment belonging to DataGram.",
      "3.5. The Client shall provide reasonable access to DataGram for retrieval of equipment that remains DataGram's property following termination, non-payment or expiry of the applicable arrangement.",
    ],
  },
  {
    title: "Payment Terms",
    lead: [
      "4.1. Payment for gadgets/equipment and subscriptions is 100% in advance, unless DataGram expressly agrees otherwise in writing.",
      "4.2. DataGram is not obligated to purchase, deploy, activate, configure or release equipment or commence a subscription before the required payment has been received.",
      "4.3. Payment shall be made through payment channels approved by DataGram.",
      "4.4. A payment shall be considered received only when cleared and confirmed by DataGram or its authorized payment provider.",
      "4.5. Bank charges, transaction charges and other payment-related costs may be borne by the Client where applicable.",
      "4.6. The Client shall not deduct, withhold, set off or retain any amount from sums payable to DataGram unless DataGram expressly agrees in writing or such deduction is required by law.",
    ],
  },
  {
    title: "Subscription Renewal",
    lead: [
      "5.1. DataGram may issue a subscription invoice approximately 5–10 days before the subscription expiry date.",
      "5.2. The Client is responsible for ensuring that payment is made before the subscription expires.",
      "5.3. Subscription renewal is subject to receipt of full payment.",
      "5.4. All outstanding balances owed to DataGram must be fully paid before any subscription is renewed or a new subscription term commences.",
      "5.5. Outstanding balances may include:",
    ],
    bullets: [
      "Previous subscription invoices;",
      "Equipment charges;",
      "Installation charges;",
      "Service charges;",
      "Logistics charges;",
      "Engineer call-out charges;",
      "Diagnostic charges;",
      "Repair charges;",
      "Maintenance charges;",
      "Other agreed charges.",
    ],
    trail: [
      "5.6. DataGram may refuse to process a renewal where any amount remains outstanding.",
      "5.7. DataGram shall not be liable for downtime, loss, interruption or business disruption resulting from the Client's failure to make payment on time.",
    ],
  },
  {
    title: "No Guaranteed Uptime",
    lead: [
      "6.1. DataGram does not guarantee continuous, uninterrupted, fault-free or error-free Internet connectivity.",
      "6.2. Internet service may be affected by circumstances including, but not limited to:",
    ],
    bullets: [
      "Starlink network conditions;",
      "Satellite availability;",
      "Telecommunications failures;",
      "Network congestion;",
      "Weather;",
      "Obstructions;",
      "Maintenance;",
      "Technical failures;",
      "Power interruptions;",
      "Government restrictions;",
      "Third-party infrastructure;",
      "Equipment failure;",
      "Geographic or environmental conditions.",
    ],
    trail: [
      "6.3. DataGram's role is primarily to install, configure and manage the applicable service and does not make DataGram the operator or owner of third-party telecommunications or satellite infrastructure.",
    ],
  },
  {
    title: "Third-Party Services",
    lead: [
      "7.1. Where DataGram provides or manages a third-party service, including Starlink, the availability, performance, policies and technical limitations of that third-party service are outside DataGram's control.",
      "7.2. DataGram shall not be responsible for any change in third-party pricing, service terms, network availability, coverage, speed, policies, account restrictions or service discontinuation.",
      "7.3. DataGram may assist the Client in communicating with the relevant third-party provider where reasonably necessary, but such assistance does not constitute a guarantee of resolution.",
    ],
  },
  {
    title: "Outages and Service Interruptions",
    lead: [
      "8.1. DataGram shall not be liable for outages, interruptions, degradation, latency or downtime caused by circumstances outside DataGram's reasonable control.",
      "8.2. This includes Starlink outages, satellite failures, network failures, telecommunications failures, weather conditions, power failures, government restrictions, natural disasters and third-party infrastructure failures.",
      "8.3. Where DataGram determines that an issue requires technical investigation, DataGram may conduct remote or physical diagnostics.",
    ],
  },
  {
    title: "Physical Engineer Attendance",
    lead: [
      "9.1. Where a technical problem requires physical attendance at the Client's premises, applicable charges may include:",
    ],
    bullets: [
      "Transportation;",
      "Logistics;",
      "Engineer call-out;",
      "Diagnostic fees;",
      "Labour;",
      "Repairs;",
      "Replacement parts;",
      "Accommodation;",
      "Other reasonable expenses.",
    ],
    trail: [
      "9.2. These charges shall be payable by the Client unless the issue is proven to be solely caused by defective workmanship by DataGram and is covered by an applicable workmanship warranty.",
      "9.3. DataGram may require payment of applicable charges before dispatching an engineer.",
    ],
  },
  {
    title: "Client's Power and Electrical Infrastructure",
    lead: [
      "10.1. The Client is responsible for providing suitable electrical infrastructure for the installed equipment.",
      "10.2. This includes, where applicable:",
    ],
    bullets: [
      "Stable electricity;",
      "Generator;",
      "Inverter;",
      "UPS;",
      "Surge protection;",
      "Earthing;",
      "Lightning protection;",
      "Appropriate electrical wiring;",
      "Proper power outlets.",
    ],
    trail: [
      "10.3. DataGram shall not be liable for equipment failure, downtime or damage caused by unstable electricity, power surges, lightning, inadequate earthing, electrical faults or other power-related problems not attributable to DataGram.",
    ],
  },
  {
    title: "Equipment Damage",
    lead: [
      "11.1. The Client shall be responsible for the cost of repair or replacement where equipment is damaged due to causes not attributable to DataGram.",
      "11.2. Such causes include:",
    ],
    bullets: [
      "Misuse;",
      "Negligence;",
      "Unauthorized modification;",
      "Physical damage;",
      "Theft;",
      "Vandalism;",
      "Lightning;",
      "Power surge;",
      "Flooding;",
      "Fire;",
      "Water damage;",
      "Improper handling;",
      "Unauthorized relocation;",
      "Acts of third parties.",
    ],
    trail: [
      "11.3. Any warranty provided by DataGram shall not cover damage caused by the circumstances listed above.",
    ],
  },
  {
    title: "Unauthorized Modification or Interference",
    lead: [
      "12.1. The Client shall not move, modify, disconnect, reconfigure, dismantle or interfere with the installed system without DataGram's approval where such action could affect the system.",
      "12.2. The Client shall not permit unauthorized persons or third-party technicians to interfere with the system where such interference could affect DataGram's ability to support or maintain the installation.",
      "12.3. DataGram may decline responsibility for faults resulting from unauthorized modification or interference.",
      "12.4. Additional diagnostic or restoration charges may apply where unauthorized interference causes a fault.",
    ],
  },
  {
    title: "Third-Party Equipment",
    lead: [
      "13.1. DataGram shall not be responsible for faults caused by equipment, infrastructure, software, cabling, electrical systems or services that were not supplied or installed by DataGram.",
      "13.2. Where DataGram agrees to troubleshoot third-party equipment, the Client may be charged for the applicable technical service.",
    ],
  },
  {
    title: "Installation and Site Conditions",
    lead: [
      "14.1. The Client shall provide DataGram with safe and reasonable access to the installation site.",
      "14.2. The Client is responsible for obtaining any landlord, property-owner, estate, government or other required permission for installation.",
      "14.3. The Client shall disclose any known hazards, restrictions or conditions that may affect installation.",
      "14.4. Additional costs caused by difficult access, unusual installation requirements, additional materials, height, structural work, civil works, relocation or unforeseen site conditions may be charged separately.",
      "14.5. DataGram may refuse or suspend installation where the site is considered unsafe or unsuitable.",
    ],
  },
  {
    title: "Client Responsibility for Network Use",
    lead: [
      "15.1. The Client is responsible for all activities conducted through its network.",
      "15.2. The Client shall not use DataGram's Services or equipment for unlawful activities, fraud, abuse, unauthorized access, hacking, distribution of malicious software, infringement of third-party rights or any activity prohibited by applicable law.",
      "15.3. The Client shall be responsible for users, employees, contractors, guests and other persons granted access to the Client's network.",
      "15.4. DataGram may suspend or restrict Services where reasonably necessary to comply with law, protect its systems, protect third parties or respond to suspected misuse.",
    ],
  },
  {
    title: "Account and Network Security",
    lead: [
      "16.1. The Client shall keep passwords, account credentials and network access information secure.",
      "16.2. The Client shall notify DataGram promptly if it suspects unauthorized access.",
      "16.3. DataGram shall not be liable for security incidents caused by compromised Client credentials, unauthorized access, weak passwords or actions of persons authorized by the Client.",
    ],
  },
  {
    title: "No Refund on Installed and Activated Equipment",
    lead: [
      "17.1. DataGram does not offer refunds for gadgets/equipment that have been installed at the Client's premises, tested, confirmed online and activated, except where a refund is required by applicable law or DataGram expressly agrees otherwise in writing.",
      "17.2. Once equipment has been deployed, installed, configured, tested and accepted as operational, the transaction shall be considered completed, subject to any applicable warranty.",
      "17.3. A Client's subsequent change of mind, dissatisfaction with third-party service performance or decision not to continue using the service shall not automatically create a right to a refund.",
      "17.4. This clause does not exclude any mandatory statutory consumer rights that cannot lawfully be excluded.",
    ],
  },
  {
    title: "Equipment Warranty",
    lead: [
      "18.1. Where a manufacturer's or DataGram's warranty applies, the warranty shall be subject to its specific terms and conditions.",
      "18.2. Warranty does not cover damage resulting from misuse, negligence, unauthorized modification, electrical problems, lightning, flooding, theft, vandalism, physical damage or other excluded causes.",
      "18.3. DataGram may, at its discretion and subject to applicable warranty terms, repair or replace defective equipment.",
      "18.4. Warranty claims do not automatically include transportation, logistics, installation or engineer attendance unless expressly stated.",
    ],
  },
  {
    title: "Service Support",
    lead: [
      "19.1. DataGram shall provide support within the scope of the Client's purchased Service.",
      "19.2. Response time may vary depending on the nature and severity of the issue, availability of engineers, location, third-party providers and other circumstances.",
      "19.3. DataGram does not guarantee that every fault can be resolved immediately.",
      "19.4. Remote support may be provided where appropriate.",
    ],
  },
  {
    title: "Limitation of Liability",
    lead: [
      "20.1. To the maximum extent permitted by Nigerian law, DataGram shall not be liable for:",
    ],
    bullets: [
      "Loss of profit;",
      "Loss of revenue;",
      "Loss of business;",
      "Loss of customers;",
      "Loss of bookings;",
      "Loss of contracts;",
      "Loss of productivity;",
      "Loss of reputation;",
      "Loss of anticipated savings;",
      "Loss of data;",
      "Business interruption;",
      "Indirect or consequential losses.",
    ],
    trail: [
      "20.2. DataGram's aggregate liability arising from the Services shall, to the maximum extent permitted by law, be limited to the amount actually paid to DataGram by the Client for the specific Service giving rise to the claim during the applicable period, subject to any lower or different limitation contained in a signed agreement.",
      "20.3. Nothing in these Terms shall exclude or limit liability that cannot legally be excluded or limited under applicable Nigerian law.",
    ],
  },
  {
    title: "Client Indemnity",
    lead: [
      "21.1. To the maximum extent permitted by law, the Client shall indemnify and hold harmless DataGram, its directors, employees, engineers, contractors and representatives against claims, losses, damages, liabilities, costs and reasonable expenses arising from:",
    ],
    bullets: [
      "The Client's negligence;",
      "Misuse of equipment;",
      "Unauthorized modifications;",
      "Unauthorized access;",
      "Illegal use of the network;",
      "Violation of applicable law;",
      "Non-payment;",
      "Actions of persons using the Client's network;",
      "Damage caused by the Client or persons under the Client's control.",
    ],
    trail: [
      "21.2. The Client shall cooperate reasonably with DataGram in defending any claim covered by this indemnity.",
    ],
  },
  {
    title: "Suspension of Service",
    lead: ["22.1. DataGram may suspend or decline to provide Services where:"],
    bullets: [
      "Payment is overdue;",
      "Subscription has expired;",
      "The Client has breached these Terms;",
      "The Client uses the Service unlawfully;",
      "Equipment or systems are being misused;",
      "Continued service creates a security or legal risk;",
      "Suspension is required by a third-party provider or applicable law.",
    ],
    trail: [
      "22.2. Where suspension is caused by non-payment, DataGram shall not be responsible for resulting downtime, business interruption or losses.",
      "22.3. Reconnection may be subject to payment of all outstanding balances and applicable reconnection or service charges.",
    ],
  },
  {
    title: "Termination",
    lead: [
      "23.1. Either party may terminate a continuing Service arrangement in accordance with the applicable agreement.",
      "23.2. DataGram may terminate or suspend Services where the Client materially breaches these Terms, fails to pay outstanding amounts, engages in unlawful use or otherwise creates a material risk to DataGram.",
      "23.3. Termination does not cancel amounts already owed to DataGram.",
    ],
  },
  {
    title: "Outstanding Balances After Termination",
    lead: [
      "24.1. Termination or expiration of the Service shall not cancel any outstanding amount owed to DataGram.",
      "24.2. All outstanding balances shall remain immediately payable in accordance with the applicable invoice or agreement.",
      "24.3. DataGram reserves the right to pursue lawful recovery of unpaid amounts.",
      "24.4. Reasonable recovery, legal or collection costs may be recoverable to the extent permitted by applicable law and the relevant agreement.",
    ],
  },
  {
    title: "Force Majeure",
    lead: [
      "25.1. DataGram shall not be liable for failure or delay caused by circumstances beyond its reasonable control.",
      "25.2. Such circumstances may include:",
    ],
    bullets: [
      "Natural disasters;",
      "Flooding;",
      "Fire;",
      "Lightning;",
      "Severe weather;",
      "War;",
      "Civil unrest;",
      "Government action;",
      "Regulatory restrictions;",
      "Telecommunications failures;",
      "Satellite failures;",
      "Starlink/network failures;",
      "Power-grid failures;",
      "Strikes;",
      "Cyber incidents affecting third-party infrastructure;",
      "Supplier failures;",
      "Other events beyond DataGram's reasonable control.",
    ],
    trail: [
      "25.3. DataGram shall use reasonable efforts to restore affected Services when practicable.",
    ],
  },
  {
    title: "Estimates and Quotations",
    lead: [
      "26.1. Quotations and estimates are subject to the validity period stated in the quotation.",
      "26.2. Prices may change where supplier prices, exchange rates, taxes, transportation costs or other relevant costs change before payment.",
      "26.3. A quotation does not constitute acceptance of an order until DataGram confirms the order and receives any required payment.",
    ],
  },
  {
    title: "Taxes and Government Charges",
    lead: [
      "27.1. Applicable taxes, levies, regulatory charges, duties and government-imposed fees may be payable by the Client where applicable.",
      "27.2. Where applicable, such charges may be added to the Client's invoice.",
    ],
  },
  {
    title: "Delivery and Installation Acceptance",
    lead: [
      "28.1. The Client shall inspect equipment and installation upon delivery or completion.",
      "28.2. Where the equipment is tested and confirmed operational, the Client shall be deemed to have accepted the installation unless a material defect is reported within a reasonable period.",
      "28.3. Acceptance of installation does not remove valid warranty rights.",
    ],
  },
  {
    title: "Data and Privacy",
    lead: [
      "29.1. DataGram may collect and process information necessary to provide Services, process payments, manage subscriptions, provide support, communicate with Clients and comply with applicable laws.",
      "29.2. DataGram shall handle personal information in accordance with applicable Nigerian data-protection requirements and its applicable Privacy Policy.",
      "29.3. The Client shall ensure that it has the necessary authority to provide personal information belonging to employees, users or other persons to DataGram.",
    ],
  },
  {
    title: "Intellectual Property",
    lead: [
      "30.1. DataGram's website, branding, logos, software, documents, designs, processes and other intellectual property remain the property of DataGram or its respective licensors.",
      "30.2. The Client shall not reproduce, modify, distribute or commercially exploit DataGram's intellectual property without written authorization.",
    ],
  },
  {
    title: "Website Content",
    lead: [
      "31.1. DataGram.ng may contain product descriptions, specifications, photographs, prices and other information.",
      "31.2. DataGram shall make reasonable efforts to ensure accuracy but does not warrant that all website information will always be complete, current or error-free.",
      "31.3. Product specifications, availability and prices may change without prior notice.",
      "31.4. Website content does not override a written quotation, invoice or signed agreement applicable to a specific transaction.",
    ],
  },
  {
    title: "Third-Party Links and Services",
    lead: [
      "32.1. DataGram.ng may contain links or references to third-party websites or services.",
      "32.2. DataGram is not responsible for the availability, content, security, accuracy or policies of third-party websites or services.",
      "32.3. Use of third-party services may be subject to separate terms imposed by the third-party provider.",
    ],
  },
  {
    title: "Communications",
    lead: [
      "33.1. DataGram may communicate with Clients by email, telephone, SMS, WhatsApp or other contact details supplied by the Client.",
      "33.2. The Client is responsible for ensuring that its contact information remains accurate and accessible.",
      "33.3. Notices sent to the Client's last provided contact details may be treated as properly communicated, subject to applicable law.",
    ],
  },
  {
    title: "Customer Responsibility for Access",
    lead: [
      "34.1. The Client shall provide DataGram with reasonable access to equipment installed at the Client's premises where maintenance, inspection, repair or retrieval is required.",
      "34.2. If access is delayed or denied, DataGram shall not be responsible for delays resulting from such denial.",
      "34.3. Additional attendance or logistics costs caused by failed access arrangements may be charged to the Client.",
    ],
  },
  {
    title: "Changes to Services",
    lead: [
      "35.1. DataGram may modify, replace or discontinue particular products or Services where reasonably necessary.",
      "35.2. Third-party services may be changed or discontinued by their respective providers without DataGram's control.",
      "35.3. Where a material change affects an ongoing Service, DataGram shall provide reasonable notice where practicable.",
    ],
  },
  {
    title: "No Oral Waiver",
    lead: [
      "36.1. Failure by DataGram to immediately enforce any provision of these Terms shall not constitute a waiver of its right to enforce that provision later.",
      "36.2. Any waiver by DataGram must be expressly communicated or confirmed in writing.",
    ],
  },
  {
    title: "Severability",
    lead: [
      "37.1. If any provision of these Terms is determined to be invalid, unlawful or unenforceable, that provision shall be modified or severed to the minimum extent necessary, while the remaining provisions shall continue in effect.",
    ],
  },
  {
    title: "Entire Agreement",
    lead: [
      "38.1. These Terms, together with any applicable quotation, invoice, service agreement, order confirmation and other written terms expressly incorporated into the transaction, constitute the agreement governing the relevant Service.",
      "38.2. Any amendment to a specific contractual arrangement must be agreed in writing by the parties where required.",
    ],
  },
  {
    title: "Governing Law",
    lead: [
      "39.1. These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria.",
      "39.2. Any dispute shall, where reasonably possible, first be addressed through good-faith discussions between the parties.",
      "39.3. Where a dispute cannot be resolved amicably, the parties may refer the matter to the appropriate court or other lawful dispute-resolution mechanism having jurisdiction.",
    ],
  },
  {
    title: "Important Customer Acknowledgement",
    lead: [
      "By purchasing equipment, making payment, accepting installation, activating a subscription or using DataGram's Services, the Client acknowledges that:",
    ],
    numbered: [
      "Equipment and subscription payments are 100% in advance, unless otherwise agreed in writing.",
      "Outstanding balances must be fully settled before subscription renewal.",
      "DataGram does not guarantee uninterrupted Internet service or uptime.",
      "Third-party network and satellite failures are outside DataGram's reasonable control.",
      "DataGram is not responsible for business losses resulting from Internet downtime, subject to applicable law.",
      "The Client is responsible for its electricity and electrical infrastructure.",
      "The Client is responsible for damage caused by misuse, negligence, unauthorized modification or other causes attributable to the Client.",
      "Physical engineer attendance may attract additional charges.",
      "Equipment installed, tested and confirmed online and active is generally non-refundable, subject to applicable law.",
      "Termination or expiry does not cancel outstanding debts owed to DataGram.",
      "The Client is responsible for lawful use of its network.",
      "DataGram's liability is limited to the maximum extent permitted by Nigerian law.",
    ],
  },
];

function ClauseBody({ clause }: { clause: Clause }) {
  return (
    <div className="space-y-4 text-base leading-relaxed text-foreground/80 md:text-lg md:leading-8">
      {clause.lead?.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {clause.bullets && clause.bullets.length > 0 && (
        <ul className="list-disc space-y-2 pl-5">
          {clause.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {clause.trail?.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {clause.numbered && clause.numbered.length > 0 && (
        <ol className="list-decimal space-y-2 pl-5">
          {clause.numbered.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default function Terms() {
  return (
    <div className="flex flex-col">
      <Seo
        title="Terms & Conditions | DataGram Nigeria"
        description="Official Terms and Conditions of Service for DATAGRAM GLOBAL NETWORK LTD — equipment, installation, subscriptions, liability, and support on DataGram.ng."
        canonical="/terms"
      />

      <section className="border-b bg-muted/40 py-16 md:py-24">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Legal</p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-foreground/60">
            DATAGRAM GLOBAL NETWORK LTD
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            Terms and Conditions of Service
          </h1>
          <p className="mt-2 text-base font-medium text-foreground/70 md:text-lg">
            For DataGram.ng
          </p>
          <p className="mt-5 text-base font-medium text-foreground/70 md:text-lg">
            Effective Date: 4 September 2026
          </p>
          <div className="mt-6 max-w-4xl space-y-4 text-base leading-relaxed text-foreground/75 md:text-lg">
            <p>
              These Terms and Conditions (“Terms”) govern the purchase, installation, configuration,
              subscription, management, maintenance and use of internet connectivity, Starlink
              equipment, networking equipment, Wi-Fi solutions and related services (“Services”)
              provided by DATAGRAM GLOBAL NETWORK LTD (“DataGram”, “we”, “us” or “our”) through
              DataGram.ng and other approved channels.
            </p>
            <p>
              By placing an order, making payment, accepting an invoice or quotation, allowing
              installation at your premises, activating a subscription, or using any Service provided
              by DataGram, the customer (“Client”, “you” or “your”) agrees to these Terms.
            </p>
          </div>
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
        <div className="container space-y-8 md:space-y-10">
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
                <ClauseBody clause={clause} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t bg-muted/30 py-16 md:py-20">
        <div className="container">
          <div className="rounded-2xl border bg-card p-8 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Questions about these terms?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/75 md:text-lg">
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

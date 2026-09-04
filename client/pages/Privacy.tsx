import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY, BRAND_NAME } from "@/lib/site";

const sections: { title: string; body: string }[] = [
  {
    title: "1: Who We Are",
    body: `${BRAND_NAME} ("DataGram", "we", "us") provides Starlink hardware sales, professional installation, subscription management, and related networking services in Nigeria. This Privacy Policy explains what personal information we collect, how we use it, and the choices available to you.`,
  },
  {
    title: "2: Information We Collect",
    body: "We may collect: your name, phone number, email address, company or organisation name, service address or installation site details, vessel or site identifiers you provide, billing and payment references, WhatsApp or form messages, and technical notes from surveys and installations (for example mount location, power notes, and network configuration required to deliver the service).",
  },
  {
    title: "3: How We Collect Information",
    body: "We collect information when you contact us through our website forms, WhatsApp, phone, email, social media, or in person; when you request a quote, survey, or installation; when you purchase hardware or subscribe to managed services; and when you communicate with our support team about an active service.",
  },
  {
    title: "4: How We Use Your Information",
    body: "We use your information to respond to enquiries, schedule surveys and installations, deliver and support Starlink and networking services, process invoices and renewals, provide post-installation support, improve our services, and comply with legal or regulatory obligations under Nigerian law.",
  },
  {
    title: "5: Sharing of Information",
    body: "We do not sell your personal information. We may share information with trusted service partners only as needed to fulfil your order or support (for example logistics, payment processors, or account activation workflows), and with authorities when required by law. Where Starlink or other third-party platform accounts are involved, their own terms and privacy practices also apply to data processed on those platforms.",
  },
  {
    title: "6: Cookies and Website Analytics",
    body: "Our website may use cookies or similar technologies that are necessary for the site to function, and may use analytics tools to understand how pages are used so we can improve performance and content. You can control cookies through your browser settings.",
  },
  {
    title: "7: Data Retention",
    body: "We retain personal information for as long as needed to provide services, manage subscriptions, resolve disputes, meet accounting and legal requirements, and maintain installation and support records for clients with active or historical engagements.",
  },
  {
    title: "8: Data Security",
    body: "We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, or misuse. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "9: Your Rights",
    body: "Subject to applicable Nigerian data protection law (including the Nigeria Data Protection Act), you may request access to the personal information we hold about you, ask us to correct inaccurate data, or request deletion or restriction where legally available. To make a request, contact us using the details below. We may need to verify your identity before responding.",
  },
  {
    title: "10: Children's Privacy",
    body: "Our services are directed to adults and organisations. We do not knowingly collect personal information from children for the purpose of selling or marketing Starlink services.",
  },
  {
    title: "11: Third-Party Links",
    body: "Our website may link to third-party sites (including Starlink, payment providers, or social networks). We are not responsible for the privacy practices of those sites. Review their policies before providing personal information.",
  },
  {
    title: "12: Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. The effective date at the top of this page will be revised when changes are published. Continued use of our website or services after an update constitutes notice of the revised policy.",
  },
  {
    title: "13: Contact Us",
    body: `For privacy questions or requests, contact DataGram at ${BUSINESS_EMAIL} or ${BUSINESS_PHONE_DISPLAY}, or use the Contact page on this website.`,
  },
];

export default function Privacy() {
  return (
    <div className="flex flex-col">
      <Seo
        title="Privacy Policy | DataGram Nigeria"
        description="How DataGram collects, uses, and protects personal information for Starlink installation, sales, and managed services in Nigeria."
        canonical="/privacy"
      />

      <section className="border-b bg-muted/40 py-14 md:py-20">
        <div className="container max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Legal</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-base font-medium text-foreground/70 md:text-lg">
            Effective Date: 4th September 2026
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
            How DataGram collects, uses, and protects your information when you use datagram.ng or
            engage us for Starlink and related services in Nigeria.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Contact DataGram</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/terms">Terms & Conditions</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-4xl space-y-5 md:space-y-6">
          {sections.map((section, index) => (
            <Card key={section.title} className="border-border/80 shadow-sm">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-3">
                <span
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <CardTitle className="text-lg font-bold tracking-tight md:text-xl">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-[3.75rem] pt-0 md:pl-16">
                <p className="text-base leading-relaxed text-foreground/80">{section.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t bg-muted/30 py-12 md:py-16">
        <div className="container max-w-4xl">
          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-bold tracking-tight">Need a privacy request?</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/75">
              Reach us by email or phone, or use the contact form. See our Terms for service rules
              that sit alongside this policy.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact">Go to Contact</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/terms">Read Terms & Conditions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

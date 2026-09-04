import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
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
    <div className="min-h-[60vh] py-16">
      <Seo
        title="Privacy Policy | DataGram Nigeria"
        description="How DataGram collects, uses, and protects personal information for Starlink installation, sales, and managed services in Nigeria."
        canonical="/privacy"
      />
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-foreground/60">Effective Date: 4th September 2026</p>
        <hr className="my-6" />

        <p className="mb-8 text-base leading-relaxed text-foreground/70">
          We value your privacy. This page outlines how we collect, use, and protect your information when you use
          datagram.ng or engage DataGram for Starlink and related services in Nigeria.
        </p>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold tracking-tight text-foreground md:text-xl">{section.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-foreground/70">{section.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm text-foreground/60">
          For questions, contact us via the{" "}
          <Link className="text-primary hover:underline" to="/contact">
            Contact
          </Link>{" "}
          page. See also our{" "}
          <Link className="text-primary hover:underline" to="/terms">
            Terms & Conditions
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

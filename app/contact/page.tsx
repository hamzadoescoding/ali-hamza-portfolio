import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Clock, FileText } from "lucide-react";
import StudioHeader from "@/components/StudioHeader";
import StudioFooter from "@/components/studio/StudioFooter";
import ContactForm from "@/components/studio/ContactForm";
import { SplitTitle } from "@/components/studio/Motion";
import { startup } from "@/data/startup";
import { contactTypes, serviceSlugs, type ContactType } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project or request a free website review. Websites, booking and ordering apps, and custom CRMs for small businesses.",
  alternates: { canonical: "/contact" },
};

const planDefaults: Record<string, { service: string; budget: string }> = {
  website: { service: "Business Website", budget: "$500 – $1,000" },
  booking: { service: "Booking / Ordering App", budget: "" },
  crm: { service: "CRM & Dashboard", budget: "" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";

  const typeParam = one(params.type);
  const type: ContactType = contactTypes.some((t) => t.value === typeParam)
    ? (typeParam as ContactType)
    : "project";
  const plan = planDefaults[one(params.plan)];
  const service = serviceSlugs[one(params.service)] ?? plan?.service ?? "";
  const budget = plan?.budget ?? "";

  return (
    <div className="sx-site">
      <a className="sx-skip" href="#main">
        Skip to content
      </a>
      <StudioHeader />
      <main id="main">
        <section className="sx-contact-hero">
          <div className="sx-hero-glow" aria-hidden="true" />
          <div className="sx-container">
            <span className="sx-tag">Contact</span>
            <SplitTitle
              as="h1"
              className="sx-contact-title"
              lines={[{ text: "Let's Build" }, { text: "Something Great", accent: true }]}
            />
            <p className="sx-contact-lead">
              Tell me about your business. You&apos;ll get a reply within one business day and a
              fixed, written quote before any work starts.
            </p>
          </div>
        </section>

        <section id="form" className="sx-container sx-contact-grid">
          <div className="sx-contact-card">
            <ContactForm
              key={`${type}-${service}-${budget}`}
              initialType={type}
              initialService={service}
              initialBudget={budget}
            />
          </div>
          <aside className="sx-contact-side">
            <Image
              className="sx-contact-knot"
              src="/studio/glass-knot.png"
              alt=""
              width={202}
              height={217}
              aria-hidden="true"
            />
            <ul>
              <li>
                <Mail size={22} aria-hidden="true" />
                <div>
                  <strong>Prefer email?</strong>
                  <a href={`mailto:${startup.email}`}>{startup.email}</a>
                </div>
              </li>
              <li>
                <Clock size={22} aria-hidden="true" />
                <div>
                  <strong>Fast replies</strong>
                  <span>Within one business day</span>
                </div>
              </li>
              <li>
                <FileText size={22} aria-hidden="true" />
                <div>
                  <strong>No surprises</strong>
                  <span>Fixed written quote before work begins</span>
                </div>
              </li>
            </ul>
          </aside>
        </section>
      </main>
      <StudioFooter showCta={false} />
    </div>
  );
}

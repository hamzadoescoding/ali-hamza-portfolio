import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CalendarDays,
  Globe,
  LayoutDashboard,
  ShoppingBag,
  Smartphone,
  MessageSquare,
  Users,
  Bell,
  Plus,
} from "lucide-react";
import StartupHeader from "@/components/StartupHeader";
import { startup } from "@/data/startup";
import { projects } from "@/data/projects";

const services = [
  {
    icon: Globe,
    title: "Business websites",
    text: "Fast, mobile-first sites that show up on Google and turn visitors into calls, bookings, and orders.",
    detail:
      "Custom design, WordPress or Next.js, local SEO and schema, multi-location pages, analytics, and copy cleanup.",
  },
  {
    icon: CalendarDays,
    title: "Booking & ordering apps",
    text: "Let customers book appointments, order food, or request quotes online, without phone tag.",
    detail:
      "Online booking flows, menus and ordering, meal-prep subscriptions, reminders, and integrations with tools you already use.",
  },
  {
    icon: LayoutDashboard,
    title: "CRMs & admin dashboards",
    text: "One place for your customers, quotes, orders, and follow-ups, built around how your business works.",
    detail:
      "Customer records, quote and order tracking, role-based staff access, email notifications, and customer portals.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce stores",
    text: "Shopify and WooCommerce stores that are safe to update and easy for customers to buy from.",
    detail:
      "Theme development, product catalogs, checkout fixes, technical SEO audits, and preview-before-live deploy workflows.",
  },
];

const featuredSlugs = ["perfection-auto-spa", "luna-pizza-kitchen", "medimil", "habibis-carbon"];
const featuredStats: Record<string, string[]> = {
  "perfection-auto-spa": ["+35% local search traffic", "40% fewer admin calls"],
  "luna-pizza-kitchen": ["+25% online orders", "1.2s page load"],
  medimil: ["Admin + customer dashboards", "Live shipment tracking"],
  "habibis-carbon": ["5,000+ products shipped", "5.0-star rating"],
};
const featured = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project) => project !== undefined);

const packages = [
  {
    name: "Website",
    price: "From $500",
    text: "A professional, mobile-friendly site for a local business.",
    items: [
      "Up to 5 pages, designed for your brand",
      "Contact, booking, or ordering links",
      "Local SEO setup and Google-ready pages",
      "Launch support and a walkthrough",
    ],
  },
  {
    name: "Booking or ordering app",
    price: "Custom quote",
    text: "For businesses that want customers to book, order, or subscribe online.",
    items: [
      "Appointment, order, or subscription flows",
      "Email confirmations and reminders",
      "Multi-location support",
      "Connects to tools you already use",
    ],
    highlight: true,
  },
  {
    name: "CRM & dashboard",
    price: "Custom quote",
    text: "Internal tools that replace spreadsheets, sticky notes, and missed follow-ups.",
    items: [
      "Customer, quote, and order records",
      "Staff roles and permissions",
      "Automated notifications",
      "Customer self-service portal",
    ],
  },
];

export default function Home() {
  return (
    <div className="startup-site">
      <a className="startup-skip" href="#main">
        Skip to content
      </a>
      <StartupHeader />
      <main id="main">
        <section className="startup-hero startup-container" aria-labelledby="hero-heading">
          <div className="startup-hero-copy">
            <div className="startup-eyebrow">
              <span className="startup-status-dot" /> Web, app &amp; CRM studio for small businesses
            </div>
            <h1 id="hero-heading">
              More bookings.
              <br />
              <span>Less busywork.</span>
            </h1>
            <p className="startup-hero-description">
              I design and build websites, booking and ordering apps, and custom CRMs for clinics,
              salons, restaurants, shops, and service businesses. Fixed quotes, clear updates, and
              projects starting at $500.
            </p>
            <div className="startup-actions">
              <a className="startup-button" href={startup.audit}>
                Get a free website review <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="startup-text-link" href="#work">
                See recent work <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="startup-hero-note">
              <span className="startup-small-line" /> Working with businesses in the US and
              worldwide.
            </div>
          </div>

          <div className="startup-system-wrap">
            <div className="startup-orbit startup-orbit-one" aria-hidden="true" />
            <div className="startup-orbit startup-orbit-two" aria-hidden="true" />
            <div className="startup-system">
              <div className="startup-system-top">
                <span>
                  <span className="startup-status-dot" /> WEBSITE → BOOKING → CRM
                </span>
                <span>Example flow</span>
              </div>
              <div className="startup-system-title">
                <span className="startup-system-icon">
                  <Smartphone size={22} aria-hidden="true" />
                </span>
                <div>
                  <strong>
                    A visitor finds you.
                    <br />A customer stays.
                  </strong>
                  <span>Local service business · Typical setup</span>
                </div>
              </div>
              <div className="startup-tool-flow">
                <div>
                  <span className="startup-tool-icon">
                    <Globe size={14} aria-hidden="true" />
                  </span>
                  <span>
                    Found on Google<small>Fast, SEO-ready website</small>
                  </span>
                  <span className="startup-tool-tag">01</span>
                </div>
                <div>
                  <span className="startup-tool-icon">
                    <CalendarDays size={14} aria-hidden="true" />
                  </span>
                  <span>
                    Books or orders online<small>Booking &amp; ordering app</small>
                  </span>
                  <span className="startup-tool-tag">02</span>
                </div>
                <div>
                  <span className="startup-tool-icon">
                    <Users size={14} aria-hidden="true" />
                  </span>
                  <span>
                    Saved to your CRM<small>Customer records &amp; history</small>
                  </span>
                  <span className="startup-tool-tag">03</span>
                </div>
                <div>
                  <span className="startup-tool-icon">
                    <Bell size={14} aria-hidden="true" />
                  </span>
                  <span>
                    Reminded to come back<small>Automated follow-ups</small>
                  </span>
                  <span className="startup-tool-tag">04</span>
                </div>
              </div>
              <div className="startup-system-bottom">
                <span className="startup-status-dot" /> Less phone tag. More repeat customers.
                <span aria-hidden="true">↗</span>
              </div>
            </div>
            <div className="startup-floating-label">
              <Check size={15} aria-hidden="true" /> Fixed quote before work starts
            </div>
          </div>
        </section>

        <div className="startup-stack-strip">
          <div className="startup-container">
            <span className="startup-kicker">BUILT WITH</span>
            <span>Next.js</span>
            <span>React</span>
            <span>WordPress</span>
            <span>WooCommerce</span>
            <span>Shopify</span>
            <span>Node.js</span>
          </div>
        </div>

        <section id="work" className="startup-section startup-container">
          <div className="startup-section-heading">
            <div>
              <p className="startup-kicker">01 / RECENT WORK</p>
              <h2>
                Real businesses.
                <br />
                Measurable results.
              </h2>
            </div>
            <p>
              Booking sites, restaurant ordering, e-commerce,
              <br className="startup-desktop-break" /> and custom admin platforms.
            </p>
          </div>
          <div className="studio-work-grid">
            {featured.map((project) => (
              <Link
                className="studio-work-card"
                href={`/work/${project.slug}`}
                key={project.slug}
              >
                <div className="studio-work-image">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} website`}
                    width={800}
                    height={500}
                    sizes="(max-width: 760px) 90vw, 600px"
                  />
                </div>
                <div className="studio-work-body">
                  <span className="startup-kicker">
                    {project.category} · {project.year}
                  </span>
                  <h3>
                    {project.title} <ArrowUpRight size={20} aria-hidden="true" />
                  </h3>
                  <p>{project.summary}</p>
                  <ul className="studio-work-stats">
                    {(featuredStats[project.slug] ?? []).map((stat) => (
                      <li key={stat}>{stat}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
          <Link className="startup-text-link studio-work-all" href="/work">
            View all {projects.length} projects <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </section>

        <section id="services" className="startup-capabilities">
          <div className="startup-container startup-section">
            <div className="startup-section-heading">
              <div>
                <p className="startup-kicker">02 / SERVICES</p>
                <h2>
                  Everything online.
                  <br />
                  Built to work together.
                </h2>
              </div>
              <p>
                Start with a website, then add booking,
                <br className="startup-desktop-break" /> ordering, or a CRM as you grow.
              </p>
            </div>
            <div className="startup-capability-grid">
              {services.map(({ icon: Icon, title, text, detail }, index) => (
                <article className="startup-capability" key={title}>
                  <div className="startup-capability-top">
                    <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <details>
                    <summary>
                      What this includes <Plus size={16} aria-hidden="true" />
                    </summary>
                    <p>{detail}</p>
                  </details>
                </article>
              ))}
            </div>
            <div className="studio-ai-note">
              <MessageSquare size={20} aria-hidden="true" />
              <p>
                <strong>Also available: AI assistants.</strong> Add a chat assistant that answers
                service questions and guides visitors to book.{" "}
                <a href={startup.assistant} target="_blank" rel="noopener noreferrer">
                  See the prototype ↗
                </a>
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className="startup-section startup-container">
          <div className="startup-section-heading">
            <div>
              <p className="startup-kicker">03 / PRICING</p>
              <h2>
                Clear pricing.
                <br />
                <span className="startup-muted-heading">No surprises.</span>
              </h2>
            </div>
            <p>
              Every project gets a written, fixed quote
              <br className="startup-desktop-break" /> before any work begins.
            </p>
          </div>
          <div className="studio-pricing-grid">
            {packages.map((pkg) => (
              <article
                className={`studio-price-card${pkg.highlight ? " studio-price-card-highlight" : ""}`}
                key={pkg.name}
              >
                <span className="startup-kicker">{pkg.name}</span>
                <strong className="studio-price">{pkg.price}</strong>
                <p>{pkg.text}</p>
                <ul className="startup-feature-list">
                  {pkg.items.map((item) => (
                    <li key={item}>
                      <Check size={16} aria-hidden="true" /> {item}
                    </li>
                  ))}
                </ul>
                <a className="startup-text-link" href={startup.inquiry}>
                  Ask for a quote <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="startup-section startup-container studio-process-section">
          <div className="startup-section-heading">
            <div>
              <p className="startup-kicker">04 / HOW IT WORKS</p>
              <h2>
                Simple process.
                <br />
                <span className="startup-muted-heading">You stay in control.</span>
              </h2>
            </div>
            <a className="startup-text-link" href={startup.audit}>
              Start with a free review <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="startup-process">
            <article>
              <span>01 — REVIEW</span>
              <h3>Free website review.</h3>
              <p>
                I look at your current site, booking, and ordering setup and send a short list of
                what&apos;s costing you customers. No obligation.
              </p>
            </article>
            <article>
              <span>02 — BUILD</span>
              <h3>Fixed quote, then build.</h3>
              <p>
                You approve the scope and price first. Then you get a private preview link and
                regular written updates as it comes together.
              </p>
            </article>
            <article>
              <span>03 — LAUNCH</span>
              <h3>Launch and support.</h3>
              <p>
                I launch, test everything on real phones, and walk you through updating it yourself.
                Ongoing support is available if you want it.
              </p>
            </article>
          </div>
        </section>

        <section id="about" className="startup-about">
          <div className="startup-container startup-about-grid">
            <div className="startup-founder-image">
              <Image
                src="/portraits/ali-hamza-original.jpg"
                alt="Ali Hamza, web developer"
                width={600}
                height={720}
                sizes="(max-width: 760px) 90vw, 360px"
              />
              <div>
                <span className="startup-status-dot" /> ISLAMABAD · WORKING WITH US CLIENTS
              </div>
            </div>
            <div className="startup-about-copy">
              <p className="startup-kicker">05 / ABOUT</p>
              <h2>
                One developer.
                <br />
                Start to finish.
              </h2>
              <p>
                I&apos;m Ali Hamza, a full-stack developer with a BS in Software Engineering. You
                work directly with me, not an account manager, from the first review to launch.
              </p>
              <p>
                I&apos;ve built booking sites, multi-branch restaurant menus, Shopify stores, a
                headless e-commerce platform with admin and customer dashboards, and publishing
                systems that run across a 330-site network. My background in cybersecurity means
                your site and customer data are handled carefully.
              </p>
              <div className="startup-founder-signature">
                <strong>Ali Hamza</strong>
                <span>Full-Stack Web &amp; App Developer</span>
              </div>
              <a
                className="startup-text-link"
                href={startup.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="startup-contact">
          <div className="startup-container">
            <p className="startup-kicker">
              <span className="startup-status-dot" /> AVAILABLE FOR NEW PROJECTS
            </p>
            <h2>
              Your business.
              <br />
              <span>Working harder online.</span>
            </h2>
            <div className="startup-contact-bottom">
              <p>
                Tell me about your business and what you need.
                <br />
                You&apos;ll get a reply within one business day.
              </p>
              <a className="startup-button startup-button-mint" href={startup.inquiry}>
                Start a project <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
            <a className="startup-contact-email" href={`mailto:${startup.email}`}>
              {startup.email} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <footer className="startup-footer startup-container">
        <Link href="/" className="startup-brand">
          <span className="startup-mark" aria-hidden="true">
            a<span>h</span>
          </span>
          <span>
            Ali Hamza<span className="startup-brand-ai">STUDIO</span>
          </span>
        </Link>
        <p>
          Websites, apps &amp; CRMs for small businesses.
          <br />
          <span>© {new Date().getFullYear()} Ali Hamza</span>
        </p>
        <div>
          <a href={startup.github} target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={startup.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

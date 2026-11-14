import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  CalendarDays,
  Globe,
  LayoutDashboard,
  ShoppingBag,
  MessageSquare,
  Plus,
  Target,
  FileText,
  ShieldCheck,
  Smartphone,
  LifeBuoy,
} from "lucide-react";
import StudioHeader from "@/components/StudioHeader";
import { startup } from "@/data/startup";
import { projects } from "@/data/projects";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    text: "Fast, mobile-first sites that show up on Google and turn visitors into calls, bookings, and orders.",
  },
  {
    icon: CalendarDays,
    title: "Booking & Ordering Apps",
    text: "Online appointments, restaurant ordering, meal-prep subscriptions, and automatic reminders.",
  },
  {
    icon: LayoutDashboard,
    title: "CRMs & Dashboards",
    text: "One place for customers, quotes, orders, and follow-ups, with staff roles and customer portals.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Stores",
    text: "Shopify and WooCommerce stores that are easy to buy from and safe to update.",
  },
  {
    icon: MessageSquare,
    title: "AI Assistants",
    text: "Chat assistants that answer service questions and guide visitors toward booking.",
  },
];

const featuredSlugs = ["perfection-auto-spa", "luna-pizza-kitchen", "medimil", "habibis-carbon"];
const featuredStats: Record<string, string> = {
  "perfection-auto-spa": "+35% local search traffic",
  "luna-pizza-kitchen": "+25% online orders",
  medimil: "Admin + customer dashboards",
  "habibis-carbon": "5,000+ products shipped",
};
const featured = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project) => project !== undefined);

const reasons = [
  { icon: Target, title: "Built to Bring Customers", text: "Every page is designed around one goal: more calls, bookings, and orders." },
  { icon: FileText, title: "Fixed, Written Quotes", text: "You approve the scope and price before any work begins. No surprise invoices." },
  { icon: Smartphone, title: "Mobile-First", text: "Most of your customers are on their phones. Everything is tested on real devices." },
  { icon: ShieldCheck, title: "Security Background", text: "Cybersecurity training means your site and customer data are handled carefully." },
  { icon: LifeBuoy, title: "Ongoing Support", text: "A walkthrough at launch, and help afterwards whenever you need it." },
];

const packages = [
  {
    name: "Website",
    price: "$500",
    prefix: "From",
    text: "A professional, mobile-friendly site for a local business.",
    items: [
      "Up to 5 custom-designed pages",
      "Contact, booking, or ordering links",
      "Local SEO and Google-ready setup",
      "Launch support and a walkthrough",
    ],
  },
  {
    name: "Booking / Ordering App",
    price: "Custom",
    prefix: "Quoted",
    text: "Let customers book, order, or subscribe online without phone tag.",
    items: [
      "Appointment, order, or subscription flows",
      "Email confirmations and reminders",
      "Multi-location support",
      "Connects to tools you already use",
    ],
    highlight: true,
  },
  {
    name: "CRM & Dashboard",
    price: "Custom",
    prefix: "Quoted",
    text: "Replace spreadsheets, sticky notes, and missed follow-ups.",
    items: [
      "Customer, quote, and order records",
      "Staff roles and permissions",
      "Automated notifications",
      "Customer self-service portal",
    ],
  },
];

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Business websites start at $500. Booking apps, ordering systems, and CRMs depend on what you need, so you get a fixed written quote after a short review of your business.",
  },
  {
    q: "Do you work with businesses in the US?",
    a: "Yes. I work remotely with small businesses in the US and elsewhere. We agree on a call time that suits you, and you get written progress updates throughout the project.",
  },
  {
    q: "How long does a project take?",
    a: "A standard business website usually takes a few weeks. Apps and CRMs take longer depending on scope. Your quote includes a timeline.",
  },
  {
    q: "Can I update the website myself?",
    a: "Yes. Sites are built so you can edit text, photos, menus, and hours yourself, and I walk you through it at launch.",
  },
  {
    q: "What is the free website review?",
    a: "Send me your current website and I'll reply with a short list of what may be costing you customers, such as missing information, broken links, or a slow mobile experience. No obligation.",
  },
];

const ticker = ["Websites", "Booking Apps", "Online Ordering", "Custom CRMs", "E-commerce", "Dashboards"];

function Pill({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a className={`sv-pill${dark ? " sv-pill-dark" : ""}`} href={href}>
      {children}
      <span className="sv-pill-icon" aria-hidden="true">
        <ArrowUpRight size={16} />
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="sv-site">
      <a className="sv-skip" href="#main">
        Skip to content
      </a>
      <StudioHeader />
      <main id="main">
        <section className="sv-hero" aria-labelledby="hero-heading">
          <div className="sv-hero-glow" aria-hidden="true" />
          <div className="sv-container sv-hero-inner">
            <p className="sv-eyebrow">
              <span className="sv-dot" /> Available for new projects
            </p>
            <h1 id="hero-heading" className="sv-display">
              More bookings.
              <br />
              <span>Less busywork.</span>
            </h1>
            <p className="sv-hero-services">
              Websites <i>/</i> Booking apps <i>/</i> Online ordering <i>/</i> Custom CRMs <i>/</i>{" "}
              E-commerce
            </p>
            <div className="sv-hero-row">
              <p>
                I build websites, apps, and CRMs for clinics, salons, restaurants, shops, and
                service businesses. Fixed quotes. Projects from $500.
              </p>
              <div className="sv-actions">
                <Pill href={startup.audit}>Free website review</Pill>
                <a className="sv-link" href="#work">
                  See the work <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="sv-hero-wordmark" aria-hidden="true">
            ALI<span>HAMZA</span>
          </div>
        </section>

        <div className="sv-ticker" aria-hidden="true">
          <div className="sv-ticker-track">
            {[...ticker, ...ticker, ...ticker, ...ticker].map((item, i) => (
              <span key={i}>
                {item} <b>✦</b>
              </span>
            ))}
          </div>
        </div>

        <section id="about" className="sv-section sv-container sv-about">
          <div>
            <p className="sv-kicker">Who I am</p>
            <h2 className="sv-h2">
              One developer.
              <br />
              <span>Start to finish.</span>
            </h2>
          </div>
          <div className="sv-about-body">
            <p>
              I&apos;m Ali Hamza, a full-stack developer with a BS in Software Engineering. You work
              directly with me, not an account manager, from the first review to launch day.
            </p>
            <p>
              I&apos;ve built booking sites, multi-branch restaurant menus, Shopify stores, a headless
              e-commerce platform with admin and customer dashboards, and publishing systems running
              across a 330-site network.
            </p>
            <div className="sv-stats">
              <div>
                <strong>
                  6<em>+</em>
                </strong>
                <span>Client projects shipped</span>
              </div>
              <div>
                <strong>
                  330<em>+</em>
                </strong>
                <span>Sites in a network I help maintain</span>
              </div>
              <div>
                <strong>
                  5k<em>+</em>
                </strong>
                <span>Products shipped by a store I build</span>
              </div>
            </div>
          </div>
          <div className="sv-about-photo">
            <Image
              src="/portraits/ali-hamza-original.jpg"
              alt="Ali Hamza, web developer"
              width={600}
              height={720}
              sizes="(max-width: 760px) 90vw, 380px"
            />
          </div>
        </section>

        <section id="services" className="sv-section sv-container">
          <div className="sv-heading">
            <div>
              <p className="sv-kicker">Services</p>
              <h2 className="sv-h2">
                Solutions built
                <br />
                <span>for growth.</span>
              </h2>
            </div>
            <Pill href={startup.inquiry}>Get a quote</Pill>
          </div>
          <div className="sv-services">
            {services.map(({ icon: Icon, title, text }, i) => (
              <article className="sv-service" key={title}>
                <span className="sv-service-num">0{i + 1}</span>
                <span className="sv-service-icon">
                  <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="sv-section sv-container">
          <div className="sv-heading">
            <div>
              <p className="sv-kicker">Selected work</p>
              <h2 className="sv-h2">
                Real businesses.
                <br />
                <span>Real results.</span>
              </h2>
            </div>
            <Link className="sv-pill" href="/work">
              View all projects
              <span className="sv-pill-icon" aria-hidden="true">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
          <div className="sv-work">
            {featured.map((project) => (
              <Link className="sv-work-card" href={`/work/${project.slug}`} key={project.slug}>
                <div className="sv-work-img">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} website`}
                    width={900}
                    height={600}
                    sizes="(max-width: 760px) 90vw, 620px"
                  />
                  <span className="sv-work-stat">{featuredStats[project.slug]}</span>
                </div>
                <div className="sv-work-meta">
                  <h3>{project.title}</h3>
                  <span>
                    {project.year} · {project.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="sv-section sv-container">
          <div className="sv-heading">
            <div>
              <p className="sv-kicker">Why work with me</p>
              <h2 className="sv-h2">
                Simple process.
                <br />
                <span>You stay in control.</span>
              </h2>
            </div>
          </div>
          <div className="sv-reasons">
            {reasons.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <ol className="sv-steps">
            <li>
              <span>01</span>
              <strong>Free review</strong>
              <p>I look at your current setup and send what&apos;s costing you customers.</p>
            </li>
            <li>
              <span>02</span>
              <strong>Fixed quote &amp; build</strong>
              <p>You approve scope and price, then follow along on a private preview link.</p>
            </li>
            <li>
              <span>03</span>
              <strong>Launch &amp; support</strong>
              <p>Tested on real phones, launched, and handed over with a walkthrough.</p>
            </li>
          </ol>
        </section>

        <section id="pricing" className="sv-section sv-container">
          <div className="sv-heading sv-heading-center">
            <div>
              <p className="sv-kicker">Pricing</p>
              <h2 className="sv-h2">
                The right plan.
                <br />
                <span>No surprises.</span>
              </h2>
            </div>
          </div>
          <div className="sv-pricing">
            {packages.map((pkg) => (
              <article className={`sv-price${pkg.highlight ? " sv-price-hot" : ""}`} key={pkg.name}>
                {pkg.highlight && <span className="sv-badge">Most popular</span>}
                <h3>{pkg.name}</h3>
                <p className="sv-price-amount">
                  <small>{pkg.prefix}</small>
                  {pkg.price}
                </p>
                <p className="sv-price-text">{pkg.text}</p>
                <ul>
                  {pkg.items.map((item) => (
                    <li key={item}>
                      <Check size={16} aria-hidden="true" /> {item}
                    </li>
                  ))}
                </ul>
                <Pill href={startup.inquiry} dark={!pkg.highlight}>
                  Get started
                </Pill>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="sv-section sv-container sv-faq-wrap">
          <div>
            <p className="sv-kicker">FAQ</p>
            <h2 className="sv-h2">
              Questions,
              <br />
              <span>answered.</span>
            </h2>
            <p className="sv-faq-note">
              Something else? Email{" "}
              <a href={`mailto:${startup.email}`}>{startup.email}</a>
            </p>
          </div>
          <div className="sv-faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q} <Plus size={20} aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="sv-cta">
          <div className="sv-hero-glow sv-cta-glow" aria-hidden="true" />
          <div className="sv-container">
            <p className="sv-kicker">Let&apos;s work together</p>
            <h2 className="sv-display sv-cta-title">
              Ready to get
              <br />
              <span>more customers?</span>
            </h2>
            <div className="sv-actions sv-cta-actions">
              <Pill href={startup.inquiry}>Start a project</Pill>
              <a className="sv-link" href={`mailto:${startup.email}`}>
                {startup.email} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="sv-footer">
        <div className="sv-ticker sv-ticker-footer" aria-hidden="true">
          <div className="sv-ticker-track">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i}>
                ALI HAMZA STUDIO <b>—</b> LET&apos;S TALK <b>—</b>
              </span>
            ))}
          </div>
        </div>
        <div className="sv-container sv-footer-grid">
          <div>
            <Link href="/" className="sv-logo">
              alihamza<span>.</span>
            </Link>
            <p>Websites, apps &amp; CRMs for small businesses.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h3>Contact</h3>
            <a href={`mailto:${startup.email}`}>{startup.email}</a>
            <a href={startup.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href={startup.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
        <div className="sv-container sv-footer-bottom">
          <span>© {new Date().getFullYear()} Ali Hamza. All rights reserved.</span>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

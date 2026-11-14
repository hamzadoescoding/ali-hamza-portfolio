import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import StudioHeader from "@/components/StudioHeader";
import FaqList from "@/components/studio/FaqList";
import { Reveal, SplitTitle, Counter } from "@/components/studio/Motion";
import { startup } from "@/data/startup";
import { projects } from "@/data/projects";

const services = [
  {
    icon: "/studio/svc-hex.png",
    title: "Business Websites",
    text: "Fast, mobile-first sites that show up on Google and turn visitors into calls, bookings, and orders.",
  },
  {
    icon: "/studio/svc-arch.png",
    title: "Booking & Ordering Apps",
    text: "Online appointments, restaurant ordering, meal-prep subscriptions, and automatic reminders.",
  },
  {
    icon: "/studio/svc-quarter.png",
    title: "CRMs & Dashboards",
    text: "One place for customers, quotes, orders, and follow-ups, with staff roles and customer portals.",
  },
  {
    icon: "/studio/svc-blob.png",
    title: "E-commerce Stores",
    text: "Shopify and WooCommerce stores that are easy to buy from and safe to update.",
  },
  {
    icon: "/studio/svc-cone.png",
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
  {
    tone: "light",
    spark: "/studio/spark-red.png",
    title: "Built to Bring Customers",
    text: "Every page is designed around one goal: more calls, bookings, and orders.",
  },
  {
    tone: "dark",
    spark: "/studio/spark-white.png",
    title: "Fixed, Written Quotes",
    text: "You approve the scope and price before any work begins. No surprise invoices.",
  },
  {
    tone: "accent",
    spark: "/studio/spark-white.png",
    title: "Mobile-First, Always",
    text: "Most of your customers are on their phones. Everything is tested on real devices.",
  },
  {
    tone: "light",
    spark: "/studio/spark-red.png",
    title: "Security Background",
    text: "Cybersecurity training means your site and customer data are handled carefully.",
  },
  {
    tone: "yellow",
    spark: "/studio/spark-white.png",
    title: "Ongoing Support",
    text: "A walkthrough at launch, and help afterwards whenever you need it.",
  },
] as const;

const steps = [
  {
    title: "Free Review",
    text: "I look at your current website, booking, and ordering setup and send a short list of what's costing you customers.",
  },
  {
    title: "Fixed Quote & Build",
    text: "You approve the scope and price first, then follow along on a private preview link with regular updates.",
  },
  {
    title: "Launch & Support",
    text: "Tested on real phones, launched, and handed over with a walkthrough so you can update it yourself.",
  },
];

const packages = [
  {
    name: "Website",
    prefix: "From",
    price: "$500",
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
    prefix: "Fixed quote",
    price: "Custom",
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
    prefix: "Fixed quote",
    price: "Custom",
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

const clients = [
  "Perfection Auto Spa",
  "Luna Pizza Kitchen",
  "Medimil",
  "Habibi's Carbon",
  "Pinion Newswire",
  "The Brainiacs School",
];

const ticker = ["Websites", "Booking Apps", "Online Ordering", "Custom CRMs", "E-commerce", "Dashboards"];

function Pill({
  href,
  children,
  variant = "light",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "accent" | "ghost";
}) {
  return (
    <a className={`sx-pill sx-pill-${variant}`} href={href}>
      {children}
      <span className="sx-pill-icon" aria-hidden="true">
        <ArrowUpRight size={16} />
      </span>
    </a>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="sx-tag">{children}</span>;
}

function RotatingBadge() {
  const text = "FREE WEBSITE REVIEW ✦ FREE WEBSITE REVIEW ✦ ";
  return (
    <a className="sx-badge" href={startup.audit} aria-label="Request a free website review">
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path id="sx-circle" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
        </defs>
        <text>
          <textPath href="#sx-circle" textLength="470" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="sx-badge-core">
        <ArrowUpRight size={28} aria-hidden="true" />
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="sx-site">
      <a className="sx-skip" href="#main">
        Skip to content
      </a>
      <StudioHeader />
      <main id="main">
        {/* HERO */}
        <section className="sx-hero" aria-labelledby="hero-heading">
          <div className="sx-hero-bg" aria-hidden="true">
            <Image src="/studio/grid-lines.png" alt="" fill priority sizes="100vw" />
          </div>
          <div className="sx-hero-glow" aria-hidden="true" />
          <Image
            className="sx-hero-knot"
            src="/studio/glass-knot.png"
            alt=""
            width={202}
            height={217}
            priority
            aria-hidden="true"
          />
          <Image
            className="sx-hero-torus"
            src="/studio/torus.png"
            alt=""
            width={313}
            height={320}
            aria-hidden="true"
          />
          <Image
            className="sx-hero-spark"
            src="/studio/spark-white.png"
            alt=""
            width={59}
            height={59}
            aria-hidden="true"
          />

          <div className="sx-container sx-hero-inner">
            <Reveal y={20}>
              <span className="sx-eyebrow">
                <span className="sx-live" /> Available for new projects
              </span>
            </Reveal>
            <SplitTitle
              as="h1"
              id="hero-heading"
              className="sx-hero-title"
              lines={[{ text: "More bookings." }, { text: "Less busywork.", accent: true }]}
            />
            <Reveal delay={0.4} y={20}>
              <p className="sx-hero-services">
                Websites <i>/</i> Booking apps <i>/</i> Online ordering <i>/</i> Custom CRMs{" "}
                <i>/</i> E-commerce
              </p>
            </Reveal>
            <Reveal delay={0.55} y={20}>
              <div className="sx-hero-bottom">
                <div className="sx-hero-copy">
                  <p>
                    I build websites, apps, and CRMs for clinics, salons, restaurants, shops, and
                    service businesses. Fixed quotes. Projects from $500.
                  </p>
                  <div className="sx-actions">
                    <Pill href={startup.audit}>Get a free review</Pill>
                    <a className="sx-link" href="#work">
                      See the work <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <RotatingBadge />
              </div>
            </Reveal>
          </div>

          <div className="sx-clients">
            <div className="sx-container sx-clients-inner">
              <p>
                Trusted by businesses
                <br />
                like these
              </p>
              <ul>
                {clients.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div className="sx-ticker" aria-hidden="true">
          <div className="sx-ticker-track">
            {[...ticker, ...ticker, ...ticker, ...ticker].map((item, i) => (
              <span key={i}>
                {item}
                <Image src="/studio/spark-small.png" alt="" width={26} height={26} />
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="sx-panel sx-about">
          <div className="sx-container">
            <div className="sx-about-top">
              <div>
                <Reveal>
                  <Tag>Who I am</Tag>
                </Reveal>
                <SplitTitle
                  className="sx-h2"
                  lines={[{ text: "Your Business," }, { text: "Working Harder Online", accent: true }]}
                />
                <Image
                  className="sx-arrow-line"
                  src="/studio/arrow-line.png"
                  alt=""
                  width={360}
                  height={20}
                  aria-hidden="true"
                />
              </div>
              <Reveal delay={0.15} className="sx-about-intro">
                <p>
                  I&apos;m Ali Hamza, a full-stack developer with a BS in Software Engineering. You
                  work directly with me, not an account manager, from the first review to launch
                  day.
                </p>
                <Pill href={startup.inquiry} variant="accent">
                  Start a project
                </Pill>
              </Reveal>
            </div>

            <div className="sx-about-grid">
              <Reveal className="sx-about-card sx-about-work">
                <div>
                  <h3>What I&apos;ve built</h3>
                  <p>
                    Booking sites, multi-branch restaurant menus, Shopify stores, a headless
                    e-commerce platform with admin and customer dashboards, and publishing systems
                    running across a 330-site network.
                  </p>
                </div>
                <ul className="sx-about-list">
                  <li>
                    <Check size={16} aria-hidden="true" /> Next.js, React &amp; Node.js
                  </li>
                  <li>
                    <Check size={16} aria-hidden="true" /> WordPress &amp; WooCommerce
                  </li>
                  <li>
                    <Check size={16} aria-hidden="true" /> Shopify &amp; Liquid
                  </li>
                  <li>
                    <Check size={16} aria-hidden="true" /> Security-minded development
                  </li>
                </ul>
                <div className="sx-stats">
                  <div>
                    <strong>
                      <Counter to={6} suffix="+" />
                    </strong>
                    <span>Client projects shipped</span>
                  </div>
                  <div>
                    <strong>
                      <Counter to={330} suffix="+" />
                    </strong>
                    <span>Sites in a network I help maintain</span>
                  </div>
                  <div>
                    <strong>
                      <Counter to={5000} suffix="+" />
                    </strong>
                    <span>Products shipped by a store I build</span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15} className="sx-about-card sx-about-photo">
                <Image
                  src="/portraits/ali-hamza-original.jpg"
                  alt="Ali Hamza, web developer"
                  width={600}
                  height={720}
                  sizes="(max-width: 900px) 90vw, 400px"
                />
                <div className="sx-photo-caption">
                  <strong>Ali Hamza</strong>
                  <span>Full-Stack Web &amp; App Developer</span>
                </div>
                <span className="sx-photo-plus" aria-hidden="true">
                  +
                </span>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="sx-section">
          <div className="sx-container">
            <div className="sx-heading">
              <Reveal>
                <Tag>Services I provide</Tag>
              </Reveal>
              <SplitTitle
                className="sx-h2"
                lines={[{ text: "Solutions Designed" }, { text: "For Growth", accent: true }]}
              />
            </div>
            <div className="sx-services">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 0.1} className="sx-service">
                  <span className="sx-service-num">0{i + 1}</span>
                  <span className="sx-service-icon">
                    <Image src={s.icon} alt="" width={60} height={60} aria-hidden="true" />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <a className="sx-service-link" href={startup.inquiry}>
                    Ask about this <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </Reveal>
              ))}
              <Reveal delay={0.2} className="sx-services-cta">
                <p>
                  Start with a website, then add booking, ordering, or a CRM as you grow. Every
                  piece is built to work together.
                </p>
                <Pill href={startup.inquiry} variant="accent">
                  Get a quote
                </Pill>
              </Reveal>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="sx-section sx-work-section">
          <div className="sx-container">
            <div className="sx-work-head">
              <Reveal>
                <Tag>Selected work</Tag>
              </Reveal>
              <SplitTitle
                className="sx-mega"
                lines={[{ text: "Selected" }, { text: "Work", accent: true }]}
              />
              <Reveal delay={0.2} className="sx-work-head-side">
                <p>Real businesses, real results. Booking sites, ordering, e-commerce, and custom admin platforms.</p>
                <Link className="sx-pill sx-pill-light" href="/work">
                  View all projects
                  <span className="sx-pill-icon" aria-hidden="true">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </Reveal>
            </div>
            <div className="sx-work">
              {featured.map((project, i) => (
                <Reveal key={project.slug} delay={(i % 2) * 0.12} className="sx-work-item">
                  <Link className="sx-work-card" href={`/work/${project.slug}`}>
                    <div className="sx-work-img">
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} website`}
                        width={900}
                        height={640}
                        sizes="(max-width: 760px) 92vw, 640px"
                      />
                      <span className="sx-work-stat">{featuredStats[project.slug]}</span>
                      <span className="sx-work-arrow" aria-hidden="true">
                        <ArrowUpRight size={22} />
                      </span>
                    </div>
                    <div className="sx-work-meta">
                      <h3>{project.title}</h3>
                      <span>{project.year}</span>
                      <span>{project.category}</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="sx-section sx-why">
          <div className="sx-container">
            <div className="sx-heading sx-heading-split">
              <div>
                <Reveal>
                  <Tag>Why work with me</Tag>
                </Reveal>
                <SplitTitle
                  className="sx-h2"
                  lines={[{ text: "Simple Process." }, { text: "You Stay In Control", accent: true }]}
                />
              </div>
            </div>
            <div className="sx-reasons">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.08} className={`sx-reason sx-reason-${r.tone}`}>
                  <Image src={r.spark} alt="" width={59} height={59} aria-hidden="true" />
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </Reveal>
              ))}
            </div>
            <div className="sx-steps">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.1} className="sx-step">
                  <span className="sx-step-num">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="sx-panel sx-pricing-section">
          <div className="sx-container">
            <div className="sx-heading sx-heading-center">
              <Reveal>
                <Tag>Pricing</Tag>
              </Reveal>
              <SplitTitle
                className="sx-h2"
                lines={[{ text: "Your Success Starts With" }, { text: "The Right Plan", accent: true }]}
              />
              <Reveal delay={0.15}>
                <p className="sx-heading-note">
                  Every project gets a written, fixed quote before any work begins.
                </p>
              </Reveal>
            </div>
            <div className="sx-pricing">
              {packages.map((pkg, i) => (
                <Reveal
                  key={pkg.name}
                  delay={i * 0.1}
                  className={`sx-price${pkg.highlight ? " is-featured" : ""}`}
                >
                  {pkg.highlight && <span className="sx-price-tab">Most popular</span>}
                  <div className="sx-price-top">
                    <p className="sx-price-amount">
                      <small>{pkg.prefix}</small>
                      {pkg.price}
                    </p>
                    <h3>{pkg.name}</h3>
                  </div>
                  <p className="sx-price-text">{pkg.text}</p>
                  <ul>
                    {pkg.items.map((item) => (
                      <li key={item}>
                        <Check size={16} aria-hidden="true" /> {item}
                      </li>
                    ))}
                  </ul>
                  <a className="sx-price-btn" href={startup.inquiry}>
                    Get started
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="sx-section sx-faq-section">
          <Image
            className="sx-faq-spiral"
            src="/studio/glass-spiral.png"
            alt=""
            width={375}
            height={371}
            aria-hidden="true"
          />
          <div className="sx-container sx-faq-wrap">
            <div className="sx-faq-head">
              <Reveal>
                <Tag>FAQ</Tag>
              </Reveal>
              <SplitTitle
                className="sx-h2"
                lines={[{ text: "Common Questions" }, { text: "About My Services", accent: true }]}
              />
              <Reveal delay={0.15}>
                <p className="sx-heading-note">
                  Something else? Email{" "}
                  <a href={`mailto:${startup.email}`}>{startup.email}</a>
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <FaqList items={faqs} />
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER / CTA */}
      <footer id="contact" className="sx-footer">
        <div className="sx-footer-bg" aria-hidden="true">
          <Image src="/studio/grid-lines.png" alt="" fill sizes="100vw" />
        </div>
        <div className="sx-container sx-footer-top">
          <div className="sx-footer-left">
            <Link href="/" className="sx-logo">
              <span className="sx-logo-mark" aria-hidden="true">
                ah
              </span>
              Ali Hamza
            </Link>
            <a className="sx-footer-email" href={`mailto:${startup.email}`}>
              {startup.email}
            </a>
            <p>Websites, apps &amp; CRMs for small businesses in the US and worldwide.</p>
          </div>
          <Image
            className="sx-footer-knot"
            src="/studio/glass-knot.png"
            alt=""
            width={202}
            height={217}
            aria-hidden="true"
          />
          <a className="sx-cta-big" href={startup.inquiry}>
            <span>
              Let&apos;s Talk
              <span className="sx-cta-arrow" aria-hidden="true">
                <ArrowRight size={30} />
              </span>
            </span>
            <span className="sx-accent-text">Work Together</span>
          </a>
        </div>
        <div className="sx-container sx-footer-links">
          <div>
            <h3>Explore</h3>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div>
            <h3>Services</h3>
            <span>Business Websites</span>
            <span>Booking &amp; Ordering Apps</span>
            <span>CRMs &amp; Dashboards</span>
            <span>E-commerce Stores</span>
          </div>
          <div>
            <h3>Connect</h3>
            <a href={startup.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href={startup.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href={startup.audit}>Free website review</a>
          </div>
        </div>
        <div className="sx-container sx-footer-bottom">
          <span>© {new Date().getFullYear()} Ali Hamza. All rights reserved.</span>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

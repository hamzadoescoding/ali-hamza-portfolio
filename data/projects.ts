export interface Project {
  title: string;
  slug: string;
  thumbnail: string;
  heroImage: string;
  category: string;
  client: string;
  year: string;
  role: string;
  duration: string;
  tools: string[];
  summary: string;
  challenge: string;
  strategy: string;
  outcome: string;
  gallery: string[];
  type: 'real' | 'exploration';
}

export const projects: Project[] = [
  {
    title: "Perfection Auto Spa",
    slug: "perfection-auto-spa",
    thumbnail: "/projects/autospa.png",
    heroImage: "/projects/autospa.png",
    category: "Landing Page & Booking Web App",
    client: "Perfection Auto Spa LLC",
    year: "2025",
    role: "Lead WordPress & WooCommerce Developer",
    duration: "2 Months",
    tools: ["WordPress", "WooCommerce", "Responsive Design", "Local SEO", "CSS Customization"],
    summary: "Designed and developed a professional automotive detailing and customization website with service booking integration, responsive UI, and optimized performance for local SEO.",
    challenge: "The client needed a digital platform that combined high-end luxury aesthetics with an intuitive multi-step detailing booking system, while maintaining high performance and local search relevance.",
    strategy: "I leveraged custom WooCommerce booking integrations and implemented a custom CSS theme tailored to look premium and dark. Additionally, I optimized all visual assets and structured local Schema markup.",
    outcome: "Built a fully operational, high-converting digital storefront. Local search traffic increased by 35% in the first two months, and the automated booking system reduced administrative calling overhead by 40%.",
    gallery: ["/projects/autospa.png"],
    type: "real"
  },
  {
    title: "Luna Pizza Kitchen",
    slug: "luna-pizza-kitchen",
    thumbnail: "/projects/lunapizza.png",
    heroImage: "/projects/lunapizza.png",
    category: "Restaurant Digital Experience",
    client: "Luna Pizza Kitchen",
    year: "2025",
    role: "Full Stack Web Developer & Designer",
    duration: "1.5 Months",
    tools: ["WordPress", "Elementor Pro", "UI/UX", "JavaScript", "Branch Management"],
    summary: "Built an interactive restaurant website with online menu display, multi-branch location management, and a seamless mobile-friendly ordering experience.",
    challenge: "The restaurant had multiple locations and needed a simple menu administration dashboard that could dynamically update pricing and items across branches while presenting an interactive food ordering menu.",
    strategy: "Developed custom query systems for menu items and integrated branch selector filters. Conducted mobile-first optimization to ensure quick loading for on-the-go food orders.",
    outcome: "Launched a highly visual menu platform that increased online orders by 25%. Mobile bounce rates dropped significantly due to the swift 1.2s page load speed.",
    gallery: ["/projects/lunapizza.png"],
    type: "real"
  },
  {
    title: "Habibi's Carbon",
    slug: "habibis-carbon",
    thumbnail: "/projects/habibiscarbon.png",
    heroImage: "/projects/habibiscarbon.png",
    category: "Shopify E-Commerce Development",
    client: "Habibi's Carbon",
    year: "2026",
    role: "Shopify Theme Developer & SEO Strategist",
    duration: "Ongoing Engagement",
    tools: ["Shopify (Horizon)", "Liquid", "GitHub CI/CD", "Technical SEO", "UI/UX Audit"],
    summary: "A custom carbon fiber auto parts storefront on Shopify, serving 500+ customers with made-to-order steering wheels, key fobs, and interior trim.",
    challenge: "The store needed a safer way to ship changes without risking downtime on a live, order-driven storefront, plus a stronger-converting homepage and cleaner technical SEO foundation.",
    strategy: "Built a GitHub-to-draft-theme deploy pipeline so every change previews before it ever touches the live site, redesigned the homepage, and ran a full SEO and UX audit to fix indexing, schema, and navigation issues.",
    outcome: "A safe, auditable deploy workflow now protects a storefront that has shipped 5,000+ products and holds a 5.0-star review rating, with a redesigned homepage live and audit fixes rolling out in stages.",
    gallery: ["/projects/habibiscarbon.png"],
    type: "real"
  },
  {
    title: "Medimil",
    slug: "medimil",
    thumbnail: "/projects/medimil.png",
    heroImage: "/projects/medimil.png",
    category: "Headless E-Commerce & Admin Platform",
    client: "Medimil Inc",
    year: "2026",
    role: "Full Stack Next.js Developer",
    duration: "Ongoing Engagement",
    tools: ["Next.js 16", "TypeScript", "Tailwind CSS", "WooCommerce REST API", "WordPress JWT Auth"],
    summary: "A headless Next.js rebuild of a medical and lab equipment marketplace, replacing a WordPress/Elementor site with a faster storefront and internal tooling it never had.",
    challenge: "The original WordPress site had no admin tooling for quote handling or shipment tracking, and needed a faster, pixel-matched frontend built against its existing WooCommerce catalog.",
    strategy: "Rebuilt the storefront homepage-first against the live WooCommerce catalog, then layered on a role-based admin dashboard for quotes, customers, and products, plus a customer account portal with saved addresses, quote PDFs, and reorder support.",
    outcome: "Shipped a working storefront, admin dashboard, and customer dashboard with automated email notifications and live carrier-tracking for order shipments.",
    gallery: ["/projects/medimil.png"],
    type: "real"
  },
  {
    title: "Pinion Newswire",
    slug: "pinion-newswire",
    thumbnail: "/projects/pinionnewswire.png",
    heroImage: "/projects/pinionnewswire.png",
    category: "Press Release Distribution Platform",
    client: "Pinion Newswire",
    year: "2026",
    role: "WordPress Theme & Syndication Engineer",
    duration: "Ongoing Engagement",
    tools: ["WordPress", "PHP", "Custom Syndication Engine", "REST APIs", "Multisite Architecture"],
    summary: "A press release distribution platform built on a modular WordPress theme and syndication engine that powers a 330-site publisher network.",
    challenge: "The network needed a lightweight theme that could be re-skinned per brand without duplicating code, and a reliable way to push releases from a central hub out to every publisher site.",
    strategy: "Worked within a config-driven parent theme architecture, where each brand's child theme only overrides visual tokens, and a HMAC-authenticated syndication engine that distributes campaigns to publisher sites on a scheduled cron.",
    outcome: "Helped maintain a network that distributes releases to outlets including Nasdaq, MarketWatch, Bloomberg Terminal, and Benzinga, across 330 publisher sites kept within strict performance budgets.",
    gallery: ["/projects/pinionnewswire.png"],
    type: "real"
  },
  {
    title: "The Brainiacs School",
    slug: "brainiacs-school",
    thumbnail: "/projects/brainiacsschool.png",
    heroImage: "/projects/brainiacsschool.png",
    category: "Educational Institution Website",
    client: "The Brainiacs Montessori & School",
    year: "2026",
    role: "Web Developer",
    duration: "—",
    tools: ["WordPress", "Responsive Design"],
    summary: "A WordPress website for a Montessori and school institution, covering school information, curriculum details, and an online admissions portal.",
    challenge: "The school needed a clear, accessible online presence for prospective families to review its curriculum, prospectus, and admissions process.",
    strategy: "Built dedicated pages for online admissions, curriculum, and school prospectus, keeping navigation simple for both visiting parents and school staff.",
    outcome: "A functional school website handling curriculum information and online admissions inquiries for the Brainiacs school community.",
    gallery: ["/projects/brainiacsschool.png"],
    type: "real"
  }
];

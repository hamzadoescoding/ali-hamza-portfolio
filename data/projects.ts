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
    title: "Central Ohio Distributors",
    slug: "central-ohio-distributors",
    thumbnail: "/projects/cod.png",
    heroImage: "/projects/cod.png",
    category: "Wholesale & Catalog Portal",
    client: "Central Ohio Distributors",
    year: "2025",
    role: "Backend & WooCommerce Engineer",
    duration: "3 Months",
    tools: ["WordPress", "WooCommerce B2B", "PHP", "Database Management", "Secure Client Portal"],
    summary: "Developed a wholesale distribution website featuring robust catalog management, custom B2B bulk pricing models, product grids, and secure client role-based access.",
    challenge: "Wholesale buyers required custom bulk discount structures, tax-exempt registration processes, and restricted pricing grids that are hidden from non-registered visitors.",
    strategy: "Engineered a custom wholesale catalog using PHP and role-based WooCommerce controllers, allowing tiered client access, instant bulk order grids, and custom tax exemption approval flows.",
    outcome: "Successfully deployed a secure distribution network handling 500+ active wholesale clients. Bulk transactions processed online increased wholesale order volume by 50%.",
    gallery: ["/projects/cod.png"],
    type: "real"
  },
  {
    title: "SecurityPlus Threat Detection",
    slug: "security-plus",
    thumbnail: "/projects/securityplus.png",
    heroImage: "/projects/securityplus.png",
    category: "Cybersecurity Application",
    client: "NAVTTC / Academic Project",
    year: "2023",
    role: "Security Software Developer",
    duration: "3 Months",
    tools: ["Java", "Python", "Network Security", "Threat Detection Algorithms", "Digital Privacy"],
    summary: "Created a multi-layered security application combining Java and Python to provide real-time threat detection, packet analysis, and system vulnerability prevention capabilities.",
    challenge: "Detecting anomalous network packets and system activities with low CPU overhead, while providing a clear visualization of potential threats for non-technical users.",
    strategy: "Implemented lightweight threat scanning models in Python and a high-performance Java dashboard interface to map and classify security scores based on network traffic logs.",
    outcome: "Developed a functional desktop security console capable of identifying up to 94% of common network scan behaviors, keeping memory utilization under 80MB.",
    gallery: ["/projects/securityplus.png"],
    type: "exploration"
  },
  {
    title: "Secure Chat Application",
    slug: "secure-chat-app",
    thumbnail: "/projects/securechat.png",
    heroImage: "/projects/securechat.png",
    category: "Encrypted Messenger Client",
    client: "Personal Exploration",
    year: "2024",
    role: "Full Stack Security Engineer",
    duration: "2 Months",
    tools: ["JavaScript", "Node.js", "WebSockets", "End-to-End Encryption", "AES-GCM / RSA"],
    summary: "Developed an end-to-end encrypted chat application with real-time messaging, secure user handshake protocols, and encrypted file-sharing capabilities.",
    challenge: "Ensuring that message payloads remain fully encrypted in transit and at rest, while maintaining real-time sub-100ms messaging synchronization without central key storage leaks.",
    strategy: "Designed an E2EE protocol utilizing Diffie-Hellman key exchanges directly in the browser, using WebSockets for real-time signaling, and AES-GCM encryption for individual text packages.",
    outcome: "Created a secure, responsive desktop-friendly chat environment. Successfully tested zero-knowledge messaging logs, verifying that server databases store only randomized hexadecimal payloads.",
    gallery: ["/projects/securechat.png"],
    type: "exploration"
  },
  {
    title: "Library Queue Management System",
    slug: "library-queue-management",
    thumbnail: "/projects/libraryqueue.png",
    heroImage: "/projects/libraryqueue.png",
    category: "Data Structures & Systems",
    client: "IIUI University Project",
    year: "2023",
    role: "Systems Developer",
    duration: "1 Month",
    tools: ["C++", "Data Structures", "Scheduling Algorithms", "Console Visualization"],
    summary: "Developed a comprehensive queue management system for library checkouts and resource allocation utilizing custom heap and list structures to optimize waiting time.",
    challenge: "Resolving resource allocation bottlenecks during peak hours in a multi-department college library, where checkout queues grew exponentially.",
    strategy: "Engineered a custom priority queue structure in C++ based on checkout urgency and user tiers, minimizing average checkout queue waiting times through a sorted heap algorithm.",
    outcome: "Reduced simulated average checkout queue wait time by 30%. The algorithm demonstrated efficient O(log N) operations even with high volumes of concurrent checkout requests.",
    gallery: ["/projects/libraryqueue.png"],
    type: "exploration"
  }
];

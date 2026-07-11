export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  image: string; // Tilted project mockup card or asset inside the active service panel
}

export const services: Service[] = [
  {
    id: "ui-ux",
    title: "UI/UX DESIGN",
    description: "Designing clear, scalable, and user-centric interfaces for complex dashboards, mobile applications, SaaS platforms, and conversion-focused websites.",
    details: [
      "Wireframing & High-Fidelity Prototyping",
      "User Research & Usability Testing",
      "Design Systems Creation & Maintenance",
      "Mobile App & Responsive Web Interfaces"
    ],
    image: "/projects/autospa.png"
  },
  {
    id: "web-dev",
    title: "WEB DESIGN & DEVELOPMENT",
    description: "Building production-grade, search-optimized, and highly responsive web platforms utilizing modern tech stacks (React, Next.js, Node.js) and headless/custom WordPress integrations.",
    details: [
      "Custom Next.js & React Web Applications",
      "WooCommerce & B2B E-Commerce Solutions",
      "Performance Auditing & Load-Speed Optimization",
      "Custom WordPress Theme & Plugin Engineering"
    ],
    image: "/projects/cod.png"
  },
  {
    id: "cybersecurity",
    title: "CYBERSECURITY SERVICES",
    description: "Securing applications and network infrastructure, analyzing vulnerabilities, implementing cryptographic data-protection protocols, and auditing privacy configurations.",
    details: [
      "Penetration Testing & Vulnerability Assessment",
      "End-to-End Encryption (E2EE) Integration",
      "Secure Coding Practices & Code Audits",
      "Network Infrastructure & Firewall Security"
    ],
    image: "/projects/securityplus.png"
  },
  {
    id: "machine-learning",
    title: "MACHINE LEARNING & ALGORITHMS",
    description: "Developing intelligent algorithmic pipelines, performing predictive data analysis, model training, and integrating ML capabilities into existing software infrastructures.",
    details: [
      "Supervised & Unsupervised Model Training",
      "Data Analysis & Feature Engineering",
      "Lightweight Deployment of Python ML Models",
      "Algorithmic Optimization & Complexity Auditing"
    ],
    image: "/projects/libraryqueue.png"
  }
];

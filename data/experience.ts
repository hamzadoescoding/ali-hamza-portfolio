export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  thumbnail: string;
}

export const experiences: Experience[] = [
  {
    company: "Freelance Developer",
    role: "Full Stack & WordPress Engineer",
    period: "May 2025 - Present",
    description: [
      "Engineered high-performance WooCommerce B2B platforms, custom bookings, and service dashboards for international automotive and retail clients.",
      "Optimized website load times (reducing LCP by 45%) and enhanced SEO configurations, driving local search traffic upwards.",
      "Maintained system security, applied firewall patches, and implemented automated backup flows."
    ],
    thumbnail: "/projects/autospa.png"
  },
  {
    company: "The Diplomatic Insight",
    role: "WordPress Developer",
    period: "Feb 2025 - May 2025",
    description: [
      "Regulated and managed administrative functions of multiple digital news media and corporate sites, serving thousands of monthly visitors.",
      "Troubleshot database bottlenecks, optimized image scripts, and implemented server-level caching layers.",
      "Ensured platform security, scanning for malware and updating core dependencies daily."
    ],
    thumbnail: "/projects/cod.png"
  },
  {
    company: "Ezitech",
    role: "Machine Learning Intern",
    period: "July 2024 - Sep 2024",
    description: [
      "Participated in regression and classification model development for real-world business scenarios.",
      "Utilized Python, NumPy, Pandas, and Scikit-Learn for clean data pipeline processing and model evaluation metrics.",
      "Collaborated with developers to integrate predictive model scripts into analytical software modules."
    ],
    thumbnail: "/projects/libraryqueue.png"
  },
  {
    company: "NAVTTC Training",
    role: "Cybersecurity Analyst & Trainee",
    period: "June 2023 - Dec 2023",
    description: [
      "Completed rigorous hands-on cybersecurity training focusing on ethical hacking, pen-testing, and database vulnerabilities.",
      "Designed and simulated network firewall setups to identify, log, and isolate active server exploits.",
      "Studied modern encryption mechanisms (RSA, AES) and digital privacy hygiene frameworks."
    ],
    thumbnail: "/projects/securityplus.png"
  }
];

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./startup.css";
import Providers from "./providers";
import { startup } from "@/data/startup";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const description =
  "Ali Hamza AI is an independent AI startup building conversational assistants, tool-powered workflows, and practical AI products. Explore our automotive service and reservation assistant.";

export const metadata: Metadata = {
  title: {
    default: "Ali Hamza AI — Practical AI Tools & Assistants",
    template: "%s | Ali Hamza AI",
  },
  description,
  keywords: [
    "Ali Hamza AI",
    "AI startup",
    "AI tools",
    "AI assistants",
    "workflow automation",
    "conversational AI",
    "Gemini",
    "Islamabad",
  ],
  authors: [{ name: "Ali Hamza", url: startup.github }],
  creator: startup.name,
  metadataBase: new URL("https://alihamzamughal.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ali Hamza AI — AI that gets work done.",
    description,
    url: "/",
    siteName: startup.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Hamza AI — AI that gets work done.",
    description,
  },
  robots: { index: true, follow: true },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://alihamzamughal.dev/#organization",
      name: startup.name,
      url: "https://alihamzamughal.dev",
      description,
      email: startup.email,
      founder: { "@id": "https://alihamzamughal.dev/#person" },
      address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
    },
    {
      "@type": "Person",
      "@id": "https://alihamzamughal.dev/#person",
      name: "Ali Hamza",
      url: "https://alihamzamughal.dev/#about",
      image: "https://alihamzamughal.dev/portraits/ali-hamza-original.jpg",
      jobTitle: "Founder & Software Engineer",
      worksFor: { "@id": "https://alihamzamughal.dev/#organization" },
      sameAs: [startup.github, startup.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": "https://alihamzamughal.dev/#website",
      url: "https://alihamzamughal.dev",
      name: startup.name,
      description,
      publisher: { "@id": "https://alihamzamughal.dev/#organization" },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-brand-charcoal text-brand-black selection:bg-brand-black selection:text-brand-bg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c") }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

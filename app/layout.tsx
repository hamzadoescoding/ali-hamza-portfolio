import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import "./startup.css";
import "./studio.css";
import Providers from "./providers";
import { startup } from "@/data/startup";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const unbounded = Unbounded({ variable: "--font-unbounded", subsets: ["latin"], weight: ["500", "600", "700"] });
const description =
  "Ali Hamza Studio builds websites, booking and ordering apps, and custom CRMs for small businesses in the US and worldwide. Fixed quotes, projects from $500.";

export const metadata: Metadata = {
  title: {
    default: "Ali Hamza Studio — Websites, Apps & CRMs for Small Businesses",
    template: "%s | Ali Hamza Studio",
  },
  description,
  keywords: [
    "Ali Hamza",
    "small business web design",
    "booking website",
    "online ordering app",
    "custom CRM",
    "Next.js developer",
    "WordPress developer",
    "Shopify developer",
  ],
  authors: [{ name: "Ali Hamza", url: startup.github }],
  creator: startup.name,
  metadataBase: new URL("https://alihamzamughal.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ali Hamza Studio — More bookings. Less busywork.",
    description,
    url: "/",
    siteName: startup.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Hamza Studio — More bookings. Less busywork.",
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
      jobTitle: "Full-Stack Web & App Developer",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${unbounded.variable} h-full antialiased`}>
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

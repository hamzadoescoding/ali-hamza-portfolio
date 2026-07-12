import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ali Hamza — Software Engineer & Web Developer",
    template: "%s | Ali Hamza",
  },
  description: "Motivated and detail-oriented Software Engineering professional with hands-on experience in full-stack web development, WooCommerce, and Cybersecurity threat prevention. Designing secure, scalable, and conversion-focused digital products.",
  keywords: ["Ali Hamza", "Software Engineer", "Web Developer", "Cybersecurity", "Next.js", "React", "WordPress Developer", "Islamabad", "Pakistan Portfolio"],
  authors: [{ name: "Ali Hamza", url: "https://github.com/hamzadoescoding" }],
  creator: "Ali Hamza",
  metadataBase: new URL("https://alihamzamughal.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ali Hamza — Software Engineer & Web Developer",
    description: "Designing secure, scalable, and conversion-focused digital products.",
    url: "/",
    siteName: "Ali Hamza Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Hamza — Software Engineer & Web Developer",
    description: "Designing secure, scalable, and conversion-focused digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://alihamzamughal.dev/#person",
      "name": "Ali Hamza",
      "url": "https://alihamzamughal.dev",
      "image": "https://alihamzamughal.dev/portraits/ali-hamza-original.jpg",
      "jobTitle": "Software Engineer & Web Developer",
      "description": "Software Engineer based in Islamabad, Pakistan, specializing in full-stack web development, WooCommerce/headless e-commerce, and cybersecurity.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Islamabad",
        "addressCountry": "PK",
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "International Islamic University Islamabad",
      },
      "knowsAbout": [
        "Software Engineering",
        "Full-Stack Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "WordPress Development",
        "WooCommerce",
        "Cybersecurity",
        "Penetration Testing",
        "Network Security",
        "Machine Learning",
        "UI/UX Design",
      ],
      "sameAs": [
        "https://www.linkedin.com/in/ali-hamza-6a9241225/",
        "https://github.com/hamzadoescoding",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://alihamzamughal.dev/#website",
      "url": "https://alihamzamughal.dev",
      "name": "Ali Hamza Portfolio",
      "description": "Portfolio of Ali Hamza, a software engineer and web developer based in Islamabad, Pakistan.",
      "publisher": { "@id": "https://alihamzamughal.dev/#person" },
      "inLanguage": "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-charcoal text-brand-black selection:bg-brand-black selection:text-brand-bg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

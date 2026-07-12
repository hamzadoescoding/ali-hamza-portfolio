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
  title: "Ali Hamza — Software Engineer & Web Developer",
  description: "Motivated and detail-oriented Software Engineering professional with hands-on experience in full-stack web development, WooCommerce, and Cybersecurity threat prevention. Designing secure, scalable, and conversion-focused digital products.",
  keywords: ["Ali Hamza", "Software Engineer", "Web Developer", "Cybersecurity", "Next.js", "React", "WordPress Developer", "Islamabad", "Pakistan Portfolio"],
  authors: [{ name: "Ali Hamza", url: "https://github.com/alihamzamughalse" }],
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

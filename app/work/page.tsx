import type { Metadata } from "next";
import AllWorkPageClient from "./AllWorkPageClient";

export const metadata: Metadata = {
  title: "All Work",
  description: "Browse every project by Ali Hamza — WordPress, WooCommerce, Shopify, headless Next.js, and cybersecurity work for real clients.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "All Work — Ali Hamza",
    description: "Browse every project by Ali Hamza — WordPress, WooCommerce, Shopify, headless Next.js, and cybersecurity work for real clients.",
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Work — Ali Hamza",
    description: "Browse every project by Ali Hamza — WordPress, WooCommerce, Shopify, headless Next.js, and cybersecurity work for real clients.",
  },
};

export default function AllWorkPage() {
  return <AllWorkPageClient />;
}

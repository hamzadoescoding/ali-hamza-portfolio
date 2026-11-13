import type { Metadata } from "next";
import AllWorkPageClient from "./AllWorkPageClient";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Websites, booking apps, e-commerce stores, and admin dashboards built by Ali Hamza for real businesses.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work — Ali Hamza Studio",
    description:
      "Websites, booking apps, e-commerce stores, and admin dashboards built by Ali Hamza for real businesses.",
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Ali Hamza Studio",
    description:
      "Websites, booking apps, e-commerce stores, and admin dashboards built by Ali Hamza for real businesses.",
  },
};

export default function AllWorkPage() {
  return <AllWorkPageClient />;
}

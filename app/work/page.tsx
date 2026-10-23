import type { Metadata } from "next";
import AllWorkPageClient from "./AllWorkPageClient";

export const metadata: Metadata = {
  title: "Engineering Archive",
  description:
    "Explore the founder’s earlier web engineering projects: the product and systems experience behind Ali Hamza AI.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Engineering Archive — Ali Hamza AI",
    description:
      "Explore the founder’s earlier web engineering projects: the product and systems experience behind Ali Hamza AI.",
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Archive — Ali Hamza AI",
    description:
      "Explore the founder’s earlier web engineering projects: the product and systems experience behind Ali Hamza AI.",
  },
};

export default function AllWorkPage() {
  return <AllWorkPageClient />;
}

import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build the operating layer for the next generation of sales teams. Small, fast-moving team. Always interested in exceptional people.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | AGORA",
    description:
      "Build the operating layer for the next generation of sales teams. Small, fast-moving team.",
    url: "/careers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | AGORA",
    description: "Build the operating layer for the next generation of sales teams.",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}

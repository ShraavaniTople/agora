import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Speed-to-lead coverage, dedicated outbound pods, real-time performance coaching, and enterprise-grade reporting. Four tools. One network.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | AGORA",
    description:
      "Speed-to-lead coverage, dedicated outbound pods, real-time performance coaching, and enterprise-grade reporting.",
    url: "/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | AGORA",
    description:
      "Speed-to-lead coverage, dedicated outbound pods, real-time performance coaching, and enterprise-grade reporting.",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

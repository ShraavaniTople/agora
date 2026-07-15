import type { Metadata } from "next";
import CompanyFormClient from "./CompanyFormClient";

export const metadata: Metadata = {
  title: "Get Started as a Company",
  description:
    "Tell us about your business and outreach goals. We will design a custom AGORA engagement for your revenue team.",
  alternates: { canonical: "/contact/company" },
  openGraph: {
    title: "Get Started as a Company | AGORA",
    description:
      "Tell us about your business and outreach goals. We will design a custom AGORA engagement for your revenue team.",
    url: "/contact/company",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Started as a Company | AGORA",
    description: "Tell us about your business and outreach goals.",
  },
};

export default function CompanyContactPage() {
  return <CompanyFormClient />;
}

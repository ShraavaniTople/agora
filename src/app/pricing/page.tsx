import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Performance-aligned pricing with no rigid tiers. Variable pods replace fixed payroll. Get a custom quote for your revenue program.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | AGORA",
    description:
      "Performance-aligned pricing with no rigid tiers. Variable pods replace fixed payroll.",
    url: "/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | AGORA",
    description:
      "Performance-aligned pricing with no rigid tiers. Variable pods replace fixed payroll.",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}

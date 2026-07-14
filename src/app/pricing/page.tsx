import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Custom, performance-aligned pricing built around your business — no rigid tiers, no bloated packages.",
};

export default function PricingPage() {
  return <PricingClient />;
}

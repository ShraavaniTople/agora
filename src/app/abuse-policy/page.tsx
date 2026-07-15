import type { Metadata } from "next";
import AbusePolicyClient from "./AbusePolicyClient";

export const metadata: Metadata = {
  title: "Abuse Policy",
  description: "AGORA's platform abuse prevention and reporting policy.",
  alternates: { canonical: "/abuse-policy" },
  robots: { index: false, follow: false },
};

export default function AbusePolicyPage() {
  return <AbusePolicyClient />;
}

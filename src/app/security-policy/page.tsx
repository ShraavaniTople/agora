import type { Metadata } from "next";
import SecurityPolicyClient from "./SecurityPolicyClient";

export const metadata: Metadata = {
  title: "Security Policy",
  description:
    "AGORA's security practices, data protection controls, and vulnerability disclosure process.",
  alternates: { canonical: "/security-policy" },
  robots: { index: false, follow: false },
};

export default function SecurityPolicyPage() {
  return <SecurityPolicyClient />;
}

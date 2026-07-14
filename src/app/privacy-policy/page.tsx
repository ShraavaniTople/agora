import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AGORA AI LLC collects, uses, discloses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}

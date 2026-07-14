import type { Metadata } from "next";
import SecurityPolicyClient from "./SecurityPolicyClient";

export const metadata: Metadata = {
  title: "Security Policy",
  description: "AGORA AI's security practices, data protection, and incident response.",
};

export default function SecurityPolicyPage() {
  return <SecurityPolicyClient />;
}

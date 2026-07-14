import type { Metadata } from "next";
import AbusePolicyClient from "./AbusePolicyClient";

export const metadata: Metadata = {
  title: "Abuse Policy",
  description: "AGORA AI's platform abuse prevention policy.",
};

export default function AbusePolicyPage() {
  return <AbusePolicyClient />;
}

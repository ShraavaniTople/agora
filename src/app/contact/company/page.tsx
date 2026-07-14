import type { Metadata } from "next";
import CompanyFormClient from "./CompanyFormClient";

export const metadata: Metadata = {
  title: "Get Started — Company",
  description:
    "Tell us about your company and what you need. We'll set up a custom AGORA engagement for your revenue team.",
};

export default function CompanyContactPage() {
  return <CompanyFormClient />;
}

import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing use of the AGORA AI platform.",
};

export default function TermsPage() {
  return <TermsClient />;
}

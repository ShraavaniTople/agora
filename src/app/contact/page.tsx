import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get started with AGORA. Tell us whether you need outreach capacity or you want to join our agent network.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | AGORA",
    description:
      "Get started with AGORA. Tell us whether you need outreach capacity or you want to join our agent network.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | AGORA",
    description:
      "Get started with AGORA. Tell us whether you need outreach capacity or you want to join our agent network.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

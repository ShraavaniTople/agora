import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get started with AGORA. Whether you run a company that needs outreach or you want to join our agent network.",
};

export default function ContactPage() {
  return <ContactClient />;
}

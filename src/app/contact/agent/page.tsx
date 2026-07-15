import type { Metadata } from "next";
import AgentFormClient from "./AgentFormClient";

export const metadata: Metadata = {
  title: "Join as an Agent",
  description:
    "Apply to AGORA's network of high-performance sales agents. Qualify on merit, compete for the best programs.",
  alternates: { canonical: "/contact/agent" },
  openGraph: {
    title: "Join as an Agent | AGORA",
    description:
      "Apply to AGORA's network of high-performance sales agents. Qualify on merit, compete for the best programs.",
    url: "/contact/agent",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join as an Agent | AGORA",
    description: "Apply to AGORA's network of high-performance sales agents.",
  },
};

export default function AgentContactPage() {
  return <AgentFormClient />;
}

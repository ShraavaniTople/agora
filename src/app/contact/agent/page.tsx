import type { Metadata } from "next";
import AgentFormClient from "./AgentFormClient";

export const metadata: Metadata = {
  title: "Join as an Agent",
  description:
    "Join AGORA's network of high-performance sales agents. Qualify, compete, and unlock better opportunities.",
};

export default function AgentContactPage() {
  return <AgentFormClient />;
}

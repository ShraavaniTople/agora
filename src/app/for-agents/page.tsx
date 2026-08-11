import type { Metadata } from "next";
import AgentLandingClient from "./AgentLandingClient";

export const metadata: Metadata = {
  title: "Join AGORA as an SDR | Build Sales Skills. Get Paid.",
  description:
    "No experience required. AGORA places you in real outbound campaigns across healthcare, recruiting, and commercial real estate — with live coaching and performance pay.",
};

export default function ForAgentsPage() {
  return <AgentLandingClient />;
}

import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AGORA's revenue acceleration services — speed-to-lead coverage, dedicated outbound pods, AI coaching, and enterprise reporting.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}

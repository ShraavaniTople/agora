import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build the operating layer for the next generation of sales teams. We're a small, fast team — always interested in great people.",
};

export default function CareersPage() {
  return <CareersClient />;
}

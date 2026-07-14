import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "AGORA AI — Plug and Play Sales, Built to Scale",
    template: "%s | AGORA AI",
  },
  description:
    "AGORA connects companies that need outreach with proven sales agents. CRM meets gig-sales force — backed by AI.",
  keywords: [
    "sales agents",
    "AI sales",
    "outbound sales",
    "sales marketplace",
    "gig sales",
    "SDR",
    "revenue acceleration",
  ],
  openGraph: {
    title: "AGORA AI — Plug and Play Sales, Built to Scale",
    description:
      "CRM Meets Gig-Sales Force — Backed By AI. Turn More Leads Into Revenue — Immediately.",
    type: "website",
    url: "https://agoraai.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

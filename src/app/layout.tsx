import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shraavanitople.github.io/agora";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AGORA — Plug and Play Sales, Built to Scale",
    template: "%s | AGORA",
  },
  description:
    "AGORA connects companies that need outreach with proven sales agents. Variable pods replace fixed payroll. Deploy in days, not months.",
  keywords: [
    "sales agents",
    "outbound sales",
    "sales marketplace",
    "SDR replacement",
    "revenue acceleration",
    "sales pod",
    "gig sales force",
  ],
  authors: [{ name: "AGORA" }],
  creator: "AGORA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "AGORA",
    title: "AGORA — Plug and Play Sales, Built to Scale",
    description:
      "Variable sales pods that deploy in days. Companies set the brief. Agents compete to deliver.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AGORA — Plug and Play Sales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AGORA — Plug and Play Sales, Built to Scale",
    description:
      "Variable sales pods that deploy in days. Companies set the brief. Agents compete to deliver.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AGORA",
  url: SITE_URL,
  description:
    "AGORA is a two-sided sales marketplace connecting companies with proven outbound agents. Variable pods replace fixed SDR payroll.",
  foundingDate: "2024",
  founders: [{ "@type": "Person", name: "AGORA Team" }],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: `${SITE_URL}/contact`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

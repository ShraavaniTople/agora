"use client";
import Link from "next/link";

const navLinks = [
  { label: "Services",   href: "/#services" },
  { label: "Process",    href: "/#process" },
  { label: "Benefits",   href: "/#benefits" },
  { label: "For SDRs",   href: "/for-agents" },
  { label: "Pricing",    href: "/pricing" },
  { label: "Careers",    href: "/careers" },
];

const legalLinks = [
  { label: "Privacy Policy",    href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Abuse Policy",      href: "/abuse-policy" },
  { label: "Security Policy",   href: "/security-policy" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#f8f7f4", borderTop: "1px solid rgba(0,0,0,0.09)" }}>

      {/* ── Massive CTA heading ── */}
      <div
        className="px-8 sm:px-14 lg:px-20 xl:px-28 pt-20 pb-16 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.09)" }}
      >
        <h2
          className="font-black"
          style={{
            fontSize: "clamp(52px, 9vw, 120px)",
            lineHeight: 0.88,
            letterSpacing: "-0.05em",
            color: "#0d0d0d",
          }}
        >
          GET IN<br />TOUCH.
        </h2>

        <div style={{ maxWidth: 340, paddingTop: 8 }}>
          <p style={{ fontSize: 14, color: "rgba(0,0,0,0.50)", lineHeight: 1.75, marginBottom: 28 }}>
            AGORA is a sales-as-a-service platform that connects companies with proven outbound agents. Variable pods replace fixed SDR payroll.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl font-bold text-white"
              style={{ fontSize: 13, padding: "12px 22px", background: "#6321EE", boxShadow: "0 0 24px rgba(99,33,238,0.40)" }}
            >
              Book a Call ↗
            </a>
            <Link
              href="/contact"
              style={{ fontSize: 13, fontWeight: 600, color: "rgba(0,0,0,0.50)" }}
            >
              Or get started →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Footer columns ── */}
      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Socials */}
        <div>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(0,0,0,0.30)", marginBottom: 20 }}>
            Socials
          </p>
          <div className="flex flex-col gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: "#0d0d0d", fontWeight: 500 }}>LinkedIn ↗</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: "#0d0d0d", fontWeight: 500 }}>X (Twitter) ↗</a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(0,0,0,0.30)", marginBottom: 20 }}>
            Navigation
          </p>
          <ul className="flex flex-col gap-3">
            {navLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href} style={{ fontSize: 13, color: "rgba(0,0,0,0.55)", fontWeight: 500 }}
                  className="hover:text-[#0d0d0d] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(0,0,0,0.30)", marginBottom: 20 }}>
            Contact
          </p>
          <div className="flex flex-col gap-3">
            <a href="mailto:hello@agoraai.tech" style={{ fontSize: 13, color: "rgba(0,0,0,0.55)", fontWeight: 500 }}>
              hello@agoraai.tech
            </a>
            <a href="https://app.agoraai.tech" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: "rgba(0,0,0,0.55)", fontWeight: 500 }}>
              Company Login ↗
            </a>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: "#6321EE", fontWeight: 600 }}>
              Book a call ↗
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(0,0,0,0.30)", marginBottom: 20 }}>
            Legal
          </p>
          <ul className="flex flex-col gap-3">
            {legalLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href} style={{ fontSize: 13, color: "rgba(0,0,0,0.55)", fontWeight: 500 }}
                  className="hover:text-[#0d0d0d] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div
        className="px-8 sm:px-14 lg:px-20 xl:px-28 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(0,0,0,0.09)" }}
      >
        <p style={{ fontSize: 11, color: "rgba(0,0,0,0.32)", fontWeight: 500 }}>
          © 2026 Agora AI LLC. All rights reserved.
        </p>
        <p style={{ fontSize: 11, color: "rgba(0,0,0,0.28)", fontWeight: 500 }}>
          Backed by Georgia Tech CREATE-X
        </p>
      </div>
    </footer>
  );
}

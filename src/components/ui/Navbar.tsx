"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services",  href: "/#services" },
  { label: "Process",   href: "/#process" },
  { label: "Pricing",   href: "/#pricing" },
  { label: "For SDRs",  href: "/for-agents" },
  { label: "Careers",   href: "/careers" },
  { label: "Contact",   href: "/contact" },
];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <>
      {/* ── Top bar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(248,247,244,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "none",
        }}
      >
        <div className="flex items-center justify-between h-[60px] px-8 sm:px-14 lg:px-20 xl:px-28">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src={`${BASE}/agora-mark.png`}
              alt="Agora"
              width={28}
              height={28}
              className="rounded-full flex-shrink-0"
              priority
            />
            <span
              className="font-black text-[16px] tracking-tight transition-colors duration-300"
              style={{ color: scrolled ? "#0d0d0d" : "#ffffff" }}
            >
              AGORA
            </span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="flex flex-col gap-[5px] p-2 transition-opacity hover:opacity-60"
            aria-label="Open menu"
          >
            <span className="block w-5 h-[1.5px] transition-colors duration-300"
              style={{ background: scrolled ? "#0d0d0d" : "#ffffff" }} />
            <span className="block w-5 h-[1.5px] transition-colors duration-300"
              style={{ background: scrolled ? "#0d0d0d" : "#ffffff" }} />
          </button>
        </div>
      </motion.nav>

      {/* ── Full overlay navigation (juncastudio style) ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="fixed inset-0 z-[60]"
              style={{ background: "rgba(5,2,16,0.65)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
              onClick={() => setOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[61] flex flex-col"
              style={{
                width: "min(520px, 100vw)",
                background: "#f8f7f4",
                padding: "32px 44px 40px",
              }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between mb-14">
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(0,0,0,0.32)" }}>
                  Navigation
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/[0.06] transition-colors"
                  aria-label="Close menu"
                  style={{ fontSize: 22, color: "#0d0d0d", lineHeight: 1 }}
                >
                  ×
                </button>
              </div>

              {/* Nav links — large editorial type */}
              <nav className="flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-4 font-black hover:text-[#6321EE] transition-colors duration-200"
                      style={{ fontSize: "clamp(26px, 5vw, 38px)", color: "#0d0d0d", letterSpacing: "-0.03em" }}
                    >
                      {link.label}
                      <span className="text-[rgba(0,0,0,0.15)] group-hover:text-[#6321EE] text-xl transition-colors">↗</span>
                    </Link>
                  </motion.div>
                ))}
                <div style={{ height: 1, background: "rgba(0,0,0,0.08)" }} />
              </nav>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-10 pt-8"
                style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
              >
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: "rgba(0,0,0,0.32)", marginBottom: 18 }}>
                  Get in touch
                </p>
                <div className="flex items-center gap-6">
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl font-bold text-white transition-all"
                    style={{ fontSize: 13, padding: "11px 22px", background: "#6321EE", boxShadow: "0 0 24px rgba(99,33,238,0.45)" }}
                  >
                    Book a Call ↗
                  </a>
                  <a
                    href="https://app.agoraai.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 13, color: "rgba(0,0,0,0.45)", fontWeight: 500 }}
                  >
                    Login
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

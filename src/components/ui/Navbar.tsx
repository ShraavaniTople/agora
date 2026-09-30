"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "For SDRs", href: "/for-agents" },
  { label: "Careers", href: "/careers" },
];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f8f7f4]/95 backdrop-blur-2xl border-b border-black/[0.07]"
          : "bg-transparent"
      }`}
    >
      <div className="px-8 sm:px-14 lg:px-20 xl:px-28">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">

          {/* Left — logo + wordmark */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src={`${BASE}/agora-mark.png`}
              alt="Agora"
              width={32}
              height={32}
              className="rounded-full flex-shrink-0"
              priority
            />
            <span
              className="font-black text-[17px] tracking-tight transition-colors duration-300"
              style={{ color: scrolled ? "#0d0d0d" : "#ffffff" }}
            >
              AGORA
            </span>
          </Link>

          {/* Right — hamburger */}
          <button
            className="p-1.5 transition-colors duration-300"
            style={{ color: scrolled ? "rgba(13,13,13,0.65)" : "rgba(255,255,255,0.70)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-black/[0.07]"
            style={{ background: "#f8f7f4" }}
          >
            <div className="px-8 sm:px-14 lg:px-20 xl:px-28 py-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium py-3 px-3 rounded-lg hover:bg-black/[0.04] transition-all"
                  style={{ color: "rgba(13,13,13,0.65)", letterSpacing: "-0.01em" }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-3 border-t border-black/[0.08] flex flex-col gap-2">
                <a
                  href="https://app.agoraai.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 transition-colors"
                  style={{ color: "rgba(13,13,13,0.40)" }}
                >
                  Login
                </a>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-3 rounded-xl text-sm font-semibold transition-all"
                  style={{ border: "1px solid rgba(13,13,13,0.15)", color: "#0d0d0d" }}
                >
                  Book a Call
                </a>
                <Link
                  href="/contact"
                  className="text-center py-3 rounded-xl text-white text-sm font-bold"
                  style={{ background: "#6321EE", boxShadow: "0 0 20px rgba(99,33,238,0.4)" }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change without triggering a cascading render cycle
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
          ? "bg-[#0A0608]/90 backdrop-blur-2xl border-b border-[#6321EE]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">

          {/* Logo + GT badge */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-[#6321EE] flex items-center justify-center font-black text-white text-sm tracking-tight shadow-[0_0_16px_rgba(99,33,238,0.6)]">
                A
              </div>
            </div>
            <span className="font-black text-[17px] tracking-tight text-white">AGORA</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#6321EE]/15 border border-[#6321EE]/25 text-[10px] font-bold text-[#7FFFD4] tracking-wider uppercase">
              <span className="w-1 h-1 rounded-full bg-[#7FFFD4] inline-block" />
              Georgia Tech
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-150 group rounded-lg hover:bg-white/[0.05]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://app.agoraai.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-white/40 hover:text-white/70 transition-colors px-3 py-2"
            >
              Login
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium px-4 py-2 rounded-lg border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              Book a Call
            </a>
            <Link
              href="/contact"
              className="text-[13px] font-bold px-4 py-2 rounded-lg bg-[#6321EE] text-white hover:bg-[#7331FF] transition-all duration-200 shadow-[0_0_16px_rgba(99,33,238,0.45)] hover:shadow-[0_0_28px_rgba(99,33,238,0.7)]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white/70 hover:text-white p-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-[#0A0608]/95 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/[0.05] transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-white/[0.08] flex flex-col gap-2">
                <a
                  href="https://app.agoraai.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-white px-3 py-2"
                >
                  Company Login
                </a>
                <Link
                  href="/contact"
                  className="text-center py-3 rounded-lg bg-[#6321EE] text-white text-sm font-bold shadow-[0_0_20px_rgba(99,33,238,0.4)]"
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

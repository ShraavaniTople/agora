import Link from "next/link";

const cols = {
  platform: [
    { label: "Services", href: "/#services" },
    { label: "Process", href: "/#process" },
    { label: "Benefits", href: "/#benefits" },
    { label: "Pricing", href: "/pricing" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
    { label: "Abuse Policy", href: "/abuse-policy" },
    { label: "Security Policy", href: "/security-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#070406] border-t border-white/[0.05] overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(99,33,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,33,238,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="w-8 h-8 rounded-lg bg-[#6321EE] flex items-center justify-center font-black text-white text-sm shadow-[0_0_14px_rgba(99,33,238,0.5)]">A</div>
              <span className="font-black text-[17px] text-white tracking-tight">AGORA</span>
            </Link>
            <p className="text-[13px] text-white/35 leading-relaxed max-w-xs mb-5">
              Turn More Leads Into Revenue — Immediately.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#6321EE]/20 bg-[#6321EE]/08">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7FFFD4] animate-pulse" />
              <span className="text-[11px] font-bold text-white/45 tracking-wide">Backed by Georgia Tech</span>
            </div>
          </div>

          {/* Platform */}
          <div>
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/25 mb-5">Platform</p>
            <ul className="space-y-3">
              {cols.platform.map(l => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-[13px] text-white/40 hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/25 mb-5">Legal</p>
            <ul className="space-y-3">
              {cols.legal.map(l => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-[13px] text-white/40 hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/20">© 2026 Agora AI LLC. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="https://app.agoraai.tech" target="_blank" rel="noopener noreferrer"
              className="text-[12px] text-white/25 hover:text-white/60 transition-colors">
              Company Login
            </a>
            <Link href="/contact"
              className="text-[12px] font-bold text-[#7FFFD4] hover:text-white transition-colors">
              Get Started →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

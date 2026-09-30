"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

const faqs = [
  { question: "How long will it take for my business to onboard onto AGORA?", answer: "Most clients are fully operational within one to two weeks of kickoff. The onboarding process involves aligning on targets, scripting, and routing rules, all of which we handle collaboratively. We move fast without cutting corners: the goal is a team that's calibrated and accountable from day one, not a slow-rolling implementation that takes months to show results." },
  { question: "Does AGORA replace my existing infrastructure?", answer: "AGORA is designed to complement what you already have. We integrate with your CRM, communication tools, and calendar systems (including HubSpot, Pipedrive, Salesforce, Slack, Calendly, and more), so your team keeps full visibility without changing how they work. AGORA sits as an execution layer on top of your existing stack." },
  { question: "What use cases does AGORA support?", answer: "AGORA is built for companies with an active pipeline that needs faster, more consistent execution. Our most common use cases include speed-to-lead follow-up, outbound prospecting, account reactivation, and expansion campaigns into new regions or segments." },
  { question: "How is performance measured and reported?", answer: "Every engagement comes with full reporting: contact rates, booking rates, call quality scores, objection trend data, and revenue attribution. You'll have access to real-time dashboards and regular performance reviews. If something isn't working, we'll know before you do and we'll already be adjusting." },
  { question: "How do you make sure messaging matches our brand?", answer: "Brand alignment is baked into onboarding. We work with you to develop and approve scripts, talk tracks, and objection-handling playbooks before a single call is made. Our coaching layer enforces consistency at scale, flagging deviations and scoring quality." },
  { question: "How does pricing work?", answer: "AGORA uses a custom, performance-aligned pricing model. No rigid tiers or bloated packages. Pricing is built around your program size, campaign type, and volume. We offer variable pricing structures designed to tie our economics to your outcomes, not your headcount." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative" style={{ background: "transparent" }}>
      <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />

      <div className="px-8 sm:px-14 lg:px-20 xl:px-28 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-14 lg:gap-24">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div className="flex items-center gap-2.5 mb-8">
              <div style={{ width: 7, height: 7, borderRadius: 2, background: "#6321EE", flexShrink: 0 }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(0,0,0,0.32)" }}>
                Let&apos;s keep in touch
              </span>
            </div>

            <h2
              className="font-black"
              style={{ fontSize: "clamp(40px, 5.5vw, 68px)", lineHeight: 0.92, letterSpacing: "-0.042em", marginBottom: 32, color: "#0d0d0d" }}
            >
              Got a<br />question?<br />
              <span style={{ color: "rgba(0,0,0,0.35)", fontWeight: 300 }}>We answer</span><br />
              it here.
            </h2>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl font-semibold hover:bg-black/[0.04] transition-all duration-200"
              style={{ fontSize: 14, padding: "12px 24px", border: "1px solid rgba(0,0,0,0.16)", color: "#0d0d0d" }}
            >
              Get in touch ↗
            </Link>
          </motion.div>

          {/* ── Right — accordion ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.10, ease: EASE }}
          >
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.09)" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                >
                  <span style={{
                    fontSize: 14, fontWeight: 500, lineHeight: 1.45, letterSpacing: "-0.01em",
                    color: open === i ? "#0d0d0d" : "rgba(0,0,0,0.50)",
                    transition: "color 0.2s",
                  }}>
                    {faq.question}
                  </span>
                  <span style={{
                    fontSize: 22, lineHeight: 1, flexShrink: 0, fontWeight: 300,
                    color: open === i ? "#6321EE" : "rgba(0,0,0,0.28)",
                    transition: "color 0.2s",
                  }}>
                    {open === i ? "×" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: EASE }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{ fontSize: 13, color: "rgba(0,0,0,0.52)", lineHeight: 1.78, paddingBottom: 22 }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div style={{ height: 1, background: "rgba(0,0,0,0.09)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

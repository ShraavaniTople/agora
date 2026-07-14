"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";
import Accordion from "@/components/ui/Accordion";

const faqs = [
  {
    question: "How long will it take for my business to onboard onto AGORA?",
    answer: "Most clients are fully operational within one to two weeks of kickoff. The onboarding process involves aligning on targets, scripting, and routing rules — all of which we handle collaboratively. We move fast without cutting corners: the goal is a team that's calibrated and accountable from day one, not a slow-rolling implementation that takes months to show results.",
  },
  {
    question: "Does AGORA replace my existing infrastructure?",
    answer: "No — AGORA is designed to complement what you already have. We integrate with your CRM, communication tools, and calendar systems (including HubSpot, Pipedrive, Salesforce, Slack, Calendly, and more), so your team keeps full visibility without changing how they work. AGORA sits as an execution layer on top of your existing stack.",
  },
  {
    question: "What use cases does AGORA support?",
    answer: "AGORA is built for companies with an active pipeline that needs faster, more consistent execution. Our most common use cases include speed-to-lead follow-up, outbound prospecting, account reactivation, and expansion campaigns into new regions or segments.",
  },
  {
    question: "How is performance measured and reported?",
    answer: "Every engagement comes with full reporting: contact rates, booking rates, call quality scores, objection trend data, and revenue attribution. You'll have access to real-time dashboards and regular performance reviews — if something isn't working, we'll know before you do, and we'll already be adjusting.",
  },
  {
    question: "How do you make sure messaging matches our brand?",
    answer: "Brand alignment is baked into onboarding. We work with you to develop and approve scripts, talk tracks, and objection-handling playbooks before a single call is made. Our AI coaching layer then enforces consistency at scale — flagging deviations and scoring quality.",
  },
  {
    question: "How does pricing work?",
    answer: "AGORA uses a custom, performance-aligned pricing model. No rigid tiers or bloated packages — pricing is built around your program size, campaign type, and volume. We offer variable pricing structures designed to tie our economics to your outcomes, not your headcount.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-[#0A0608] py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,33,238,0.25), transparent)" }} />
      <div className="absolute inset-0 dot-grid-subtle opacity-40 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUpVariants}
            className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#7FFFD4] mb-3">
            FAQ
          </motion.p>
          <motion.h2 variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Got questions?
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-white/40 text-[14px]">
            Everything you need to know about working with AGORA.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUpVariants}
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  );
}

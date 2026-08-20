"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Users, Brain, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";

const services = [
  {
    icon: Zap,
    id: "speed-to-lead",
    title: "Speed-to-Lead Coverage",
    tagline: "Never let an inbound lead sit unworked.",
    description:
      "When someone fills out a form or calls in, how quickly does your team respond? AGORA agents handle inbound follow-up around the clock, including after hours, weekends, and overflow, so leads don't go cold while your team is tied up.",
    bullets: [
      "Around-the-clock coverage for inbound leads, including after-hours and weekends",
      "Follow-up campaigns for leads that went cold or never got a callback",
      "Every call logged and reported, contact rate, booking rate, outcomes",
      "Your team keeps full control of messaging and routing rules",
    ],
    color: "#6321EE",
  },
  {
    icon: Users,
    id: "outbound-pod",
    title: "Dedicated Outbound Sales Pod",
    tagline: "Scale pipeline without scaling payroll.",
    description:
      "Need to reach new accounts in healthcare, recruiting, or commercial real estate? AGORA builds you a dedicated outbound team, briefed on your pitch, working your list, and reporting back daily. Add more capacity anytime without growing your headcount.",
    bullets: [
      "Dedicated team built around your industry, region, and target accounts",
      "Outbound prospecting and reactivation of dormant accounts",
      "Expand into new markets without reorganizing your internal team",
      "Scale capacity up or down by program, no long-term commitments",
    ],
    color: "#7FFFD4",
  },
  {
    icon: Brain,
    id: "coaching",
    title: "Real-Time Performance Coaching",
    tagline: "Every rep. Every call. Consistent.",
    description:
      "Give every rep and pod live call guidance, script optimization, and objection analytics. Stay consistent across teams and regions, with performance scoring and clear quality controls.",
    bullets: [
      "Live call guidance and objection handling suggestions",
      "Script optimization based on real conversation data",
      "Performance scoring and quality control across all agents",
      "Consistent messaging at scale, regardless of team size or region",
    ],
    color: "#7ACCC8",
  },
  {
    icon: BarChart3,
    id: "reporting",
    title: "Enterprise-Grade Reporting",
    tagline: "Know what's working. Scale it.",
    description:
      "See exactly how your campaign is performing, calls made, contacts reached, bookings created, and where leads are dropping off. No black boxes. Just clear numbers you can act on.",
    bullets: [
      "Daily and weekly dashboards showing calls, contacts, and bookings",
      "Where leads drop off, and what's working to convert them",
      "Script and objection analysis so you can see what messaging actually lands",
      "Compare performance across regions, segments, or campaign types",
    ],
    color: "#6321EE",
  },
];

export default function ServicesClient() {
  return (
    <div className="bg-[#211A1D] min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
        <div className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full blur-[120px] bg-[#6321EE]/10 pointer-events-none glow-orb-secondary" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-xs font-bold tracking-[0.25em] uppercase text-[#7FFFD4] mb-4"
            >
              Services
            </motion.p>
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 max-w-3xl"
            >
              What your{" "}
              <span className="gradient-text">AGORA program</span>{" "}
              includes
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              className="text-base sm:text-xl text-white/55 max-w-xl leading-relaxed"
            >
              We supply trained sales reps for your campaigns, and wrap
              them in coaching, quality control, and reporting. Here&apos;s
              what each piece does.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="space-y-20 lg:space-y-28">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Icon / visual */}
                <motion.div
                  variants={fadeUpVariants}
                  className="lg:w-2/5 flex-shrink-0"
                >
                  <div
                    className="rounded-2xl border p-6 sm:p-10 flex flex-col items-center justify-center text-center h-full min-h-[200px] sm:min-h-[240px]"
                    style={{
                      borderColor: `${service.color}25`,
                      background: `linear-gradient(135deg, ${service.color}08 0%, transparent 60%)`,
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                      style={{
                        background: `${service.color}18`,
                        border: `1px solid ${service.color}35`,
                      }}
                    >
                      <Icon
                        size={28}
                        strokeWidth={1.5}
                        style={{ color: service.color }}
                      />
                    </div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: service.color }}
                    >
                      {service.tagline}
                    </p>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.span
                      variants={fadeUpVariants}
                      className="text-xs font-bold tracking-widest uppercase mb-3 block"
                      style={{ color: service.color }}
                    >
                      0{i + 1}
                    </motion.span>
                    <motion.h2
                      variants={fadeUpVariants}
                      className="text-2xl sm:text-3xl font-bold text-white mb-4"
                    >
                      {service.title}
                    </motion.h2>
                    <motion.p
                      variants={fadeUpVariants}
                      className="text-base text-white/55 leading-relaxed mb-8"
                    >
                      {service.description}
                    </motion.p>
                    <motion.ul
                      variants={staggerContainer}
                      className="space-y-3"
                    >
                      {service.bullets.map((b, j) => (
                        <motion.li
                          key={j}
                          variants={fadeUpVariants}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={16}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: service.color }}
                          />
                          <span className="text-sm text-white/65">{b}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-2xl sm:text-3xl font-bold text-white mb-5"
            >
              Ready to deploy?
            </motion.h2>
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact/company"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#6321EE] text-white font-semibold shadow-[0_0_25px_rgba(99,33,238,0.4)] hover:shadow-[0_0_45px_rgba(99,33,238,0.6)] transition-all duration-300"
              >
                Get Started
                <ArrowRight size={17} />
              </Link>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:border-[#7FFFD4]/50 hover:text-[#7FFFD4] transition-all duration-300"
              >
                Book a Call
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { FormField, TextareaField, SelectField, CheckboxGroup } from "@/components/forms/FormField";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";

const experienceOptions = [
  { label: "Less than 1 year", value: "0-1" },
  { label: "1–3 years", value: "1-3" },
  { label: "3–5 years", value: "3-5" },
  { label: "5–10 years", value: "5-10" },
  { label: "10+ years", value: "10+" },
];

const availabilityOptions = [
  { label: "Full-time (40hrs/wk)", value: "full-time" },
  { label: "Part-time (20–30hrs/wk)", value: "part-time" },
  { label: "Flexible / Project-based", value: "flexible" },
];

const industryOptions = [
  "SaaS / Software",
  "Financial Services",
  "Healthcare",
  "Real Estate",
  "Logistics",
  "Professional Services",
  "E-commerce",
  "Other",
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  industries: string[];
  availability: string;
  whyJoin: string;
  resumeUrl: string;
}

interface Errors {
  fullName?: string;
  email?: string;
  phone?: string;
  location?: string;
  experience?: string;
  availability?: string;
  whyJoin?: string;
}

export default function AgentFormClient() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    industries: [],
    availability: "",
    whyJoin: "",
    resumeUrl: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const errs: Errors = {};
    if (!form.fullName) errs.fullName = "Required";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email required";
    if (!form.phone) errs.phone = "Required";
    if (!form.location) errs.location = "Required";
    if (!form.experience) errs.experience = "Required";
    if (!form.availability) errs.availability = "Required";
    if (!form.whyJoin || form.whyJoin.length < 20)
      errs.whyJoin = "Please tell us a bit more (at least 20 characters)";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    // TODO: connect to backend — POST form data to /api/contact/agent
  };

  return (
    <div className="bg-[#211A1D] min-h-screen pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariants} className="mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={15} />
              Back
            </Link>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#7FFFD4] mb-3">
              Join as an Agent
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Apply to the AGORA network
            </h1>
            <p className="text-white/50 text-base">
              Qualify based on real results, earn performance pay, and unlock
              better opportunities as you grow.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-[#7FFFD4]/30 bg-[#7FFFD4]/05 p-10 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#7FFFD4]/10 border border-[#7FFFD4]/20 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={30} className="text-[#7FFFD4]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Application received
                </h2>
                <p className="text-white/55 mb-8">
                  Thanks, {form.fullName.split(" ")[0]}! We've received your
                  application and will be in touch with next steps.
                </p>
                <Link
                  href="/"
                  className="text-sm font-semibold text-[#6321EE] hover:text-[#7FFFD4] transition-colors"
                >
                  ← Back to home
                </Link>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                variants={fadeUpVariants}
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                <FormField
                  label="Full Name"
                  placeholder="Jordan Smith"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  error={errors.fullName}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label="Email"
                    type="email"
                    placeholder="jordan@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    error={errors.email}
                  />
                  <FormField
                    label="Phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    error={errors.phone}
                  />
                </div>
                <FormField
                  label="Location (City, State or Country)"
                  placeholder="Atlanta, GA"
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                  error={errors.location}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <SelectField
                    label="Sales Experience"
                    options={experienceOptions}
                    value={form.experience}
                    onChange={(v) => setForm({ ...form, experience: v })}
                    error={errors.experience}
                  />
                  <SelectField
                    label="Availability"
                    options={availabilityOptions}
                    value={form.availability}
                    onChange={(v) => setForm({ ...form, availability: v })}
                    error={errors.availability}
                  />
                </div>
                <CheckboxGroup
                  label="Industries you've worked in"
                  options={industryOptions}
                  selected={form.industries}
                  onChange={(v) => setForm({ ...form, industries: v })}
                />
                <TextareaField
                  label="Why do you want to join AGORA?"
                  placeholder="Tell us about your sales background, what motivates you, and why AGORA is a good fit…"
                  value={form.whyJoin}
                  onChange={(e) =>
                    setForm({ ...form, whyJoin: e.target.value })
                  }
                  error={errors.whyJoin}
                />
                <FormField
                  label="Resume or LinkedIn URL (optional)"
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={form.resumeUrl}
                  onChange={(e) =>
                    setForm({ ...form, resumeUrl: e.target.value })
                  }
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#6321EE] text-white font-semibold text-base shadow-[0_0_25px_rgba(99,33,238,0.4)] hover:shadow-[0_0_40px_rgba(99,33,238,0.6)] hover:bg-[#7331FF] disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Submitting…
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

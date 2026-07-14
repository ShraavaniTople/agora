"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { FormField, TextareaField, SelectField, CheckboxGroup } from "@/components/forms/FormField";
import { fadeUpVariants, staggerContainer } from "@/components/ui/SectionWrapper";

const companySizes = [
  { label: "1–10", value: "1-10" },
  { label: "11–50", value: "11-50" },
  { label: "51–200", value: "51-200" },
  { label: "201–500", value: "201-500" },
  { label: "500+", value: "500+" },
];

const industries = [
  { label: "SaaS / Software", value: "saas" },
  { label: "Financial Services", value: "finserv" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Real Estate", value: "realestate" },
  { label: "Logistics / Supply Chain", value: "logistics" },
  { label: "Professional Services", value: "professional" },
  { label: "E-commerce / Retail", value: "ecommerce" },
  { label: "Other", value: "other" },
];

const leadVolumes = [
  { label: "Under 500 leads/mo", value: "under-500" },
  { label: "500–2,000 leads/mo", value: "500-2000" },
  { label: "2,000–10,000 leads/mo", value: "2000-10000" },
  { label: "10,000+ leads/mo", value: "10000+" },
];

const helpOptions = [
  "Speed-to-Lead",
  "Outbound Pod",
  "AI Coaching",
  "Reporting",
  "Other",
];

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  companySize: string;
  industry: string;
  helpWith: string[];
  leadVolume: string;
  message: string;
}

interface Errors {
  companyName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  companySize?: string;
  industry?: string;
  leadVolume?: string;
}

export default function CompanyFormClient() {
  const [form, setForm] = useState<FormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    companySize: "",
    industry: "",
    helpWith: [],
    leadVolume: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const errs: Errors = {};
    if (!form.companyName) errs.companyName = "Required";
    if (!form.contactName) errs.contactName = "Required";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email required";
    if (!form.phone) errs.phone = "Required";
    if (!form.companySize) errs.companySize = "Required";
    if (!form.industry) errs.industry = "Required";
    if (!form.leadVolume) errs.leadVolume = "Required";
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
    // TODO: connect to backend — POST form data to /api/contact/company
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
              Company
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Let's build your AGORA program
            </h1>
            <p className="text-white/50 text-base">
              Tell us about your team and goals — we'll follow up within one
              business day.
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
                  We'll be in touch soon
                </h2>
                <p className="text-white/55 mb-8">
                  Thanks, {form.contactName.split(" ")[0]}. Someone from the
                  AGORA team will reach out within one business day to discuss
                  how we can help {form.companyName}.
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label="Company Name"
                    placeholder="Acme Corp"
                    value={form.companyName}
                    onChange={(e) =>
                      setForm({ ...form, companyName: e.target.value })
                    }
                    error={errors.companyName}
                  />
                  <FormField
                    label="Your Name"
                    placeholder="Alex Johnson"
                    value={form.contactName}
                    onChange={(e) =>
                      setForm({ ...form, contactName: e.target.value })
                    }
                    error={errors.contactName}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label="Work Email"
                    type="email"
                    placeholder="alex@acme.com"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <SelectField
                    label="Company Size"
                    options={companySizes}
                    value={form.companySize}
                    onChange={(v) => setForm({ ...form, companySize: v })}
                    error={errors.companySize}
                  />
                  <SelectField
                    label="Industry"
                    options={industries}
                    value={form.industry}
                    onChange={(v) => setForm({ ...form, industry: v })}
                    error={errors.industry}
                  />
                </div>
                <CheckboxGroup
                  label="What do you need help with?"
                  options={helpOptions}
                  selected={form.helpWith}
                  onChange={(v) => setForm({ ...form, helpWith: v })}
                />
                <SelectField
                  label="Monthly Lead Volume"
                  options={leadVolumes}
                  value={form.leadVolume}
                  onChange={(v) => setForm({ ...form, leadVolume: v })}
                  error={errors.leadVolume}
                />
                <TextareaField
                  label="Message / Notes (optional)"
                  placeholder="Tell us about your current sales motion, goals, or anything else that would help us prepare for the call."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
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
                    "Submit"
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

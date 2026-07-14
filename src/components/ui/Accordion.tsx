"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface AccordionItem { question: string; answer: string; }

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className={`rounded-xl border transition-all duration-300 overflow-hidden ${
            open === i
              ? "border-[#6321EE]/40 bg-[#6321EE]/[0.05]"
              : "border-white/[0.06] bg-[#0F0B0E] hover:border-white/[0.12]"
          }`}
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-[14px] sm:text-[15px] font-semibold text-white">{item.question}</span>
            <motion.div
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                open === i ? "border-[#6321EE] text-[#7FFFD4]" : "border-white/20 text-white/40"
              }`}
            >
              <Plus size={13} />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <p className="px-5 pb-5 text-[13px] text-white/50 leading-relaxed">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

"use client";

import type { InputHTMLAttributes, TextareaHTMLAttributes} from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, className, ...props }, ref) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider text-white/40">
        {label}
      </label>
      <input
        ref={ref}
        className={cn(
          "w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white placeholder-white/25 text-sm transition-all duration-200 outline-none",
          error
            ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"
            : "border-white/[0.08] focus:border-[#6321EE]/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(99,33,238,0.12)]",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-400 mt-0.5">{error}</p>}
    </div>
  )
);
FormField.displayName = "FormField";

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, error, className, ...props }, ref) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider text-white/40">
        {label}
      </label>
      <textarea
        ref={ref}
        rows={4}
        className={cn(
          "w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white placeholder-white/25 text-sm transition-all duration-200 outline-none resize-none",
          error
            ? "border-red-500/50 focus:border-red-500"
            : "border-white/[0.08] focus:border-[#6321EE]/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(99,33,238,0.12)]",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-400 mt-0.5">{error}</p>}
    </div>
  )
);
TextareaField.displayName = "TextareaField";

interface SelectFieldProps {
  label: string;
  error?: string;
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

export function SelectField({ label, error, options, value, onChange }: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider text-white/40">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          "w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm transition-all duration-200 outline-none appearance-none cursor-pointer",
          "[&>option]:bg-[#211A1D] [&>option]:text-white",
          error
            ? "border-red-500/50"
            : "border-white/[0.08] focus:border-[#6321EE]/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(99,33,238,0.12)]"
        )}
      >
        <option value="">Select…</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-400 mt-0.5">{error}</p>}
    </div>
  );
}

interface CheckboxGroupProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export function CheckboxGroup({ label, options, selected, onChange }: CheckboxGroupProps) {
  const toggle = (val: string) => {
    onChange(
      selected.includes(val)
        ? selected.filter((v) => v !== val)
        : [...selected, val]
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-xs font-semibold uppercase tracking-wider text-white/40">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={`text-xs px-3 py-2 rounded-lg border transition-all duration-200 font-medium ${
              selected.includes(opt)
                ? "border-[#6321EE]/60 bg-[#6321EE]/15 text-[#7FFFD4]"
                : "border-white/[0.08] bg-white/[0.02] text-white/50 hover:border-white/20 hover:text-white"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

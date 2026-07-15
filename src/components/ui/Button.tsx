"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-xl select-none";

  const variants = {
    primary: "bg-[#6321EE] text-white shadow-[0_0_20px_rgba(99,33,238,0.4)] hover:shadow-[0_0_36px_rgba(99,33,238,0.65)] hover:bg-[#7331FF]",
    secondary: "bg-[#7FFFD4]/10 text-[#7FFFD4] border border-[#7FFFD4]/30 hover:bg-[#7FFFD4]/20",
    ghost: "text-white/60 hover:text-white hover:bg-white/[0.05]",
    outline: "border border-white/15 text-white hover:border-white/30 hover:text-[#7FFFD4]",
  };

  const sizes = {
    sm: "text-[13px] px-4 py-2",
    md: "text-[14px] px-6 py-3",
    lg: "text-[15px] px-8 py-4",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], sizes[size], disabled && "opacity-50 pointer-events-none", className)}
    >
      {children}
    </motion.button>
  );
}

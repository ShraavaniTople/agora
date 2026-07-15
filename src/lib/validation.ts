import { z } from "zod";

export const companyFormSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  companySize: z.string().min(1, "Select a company size"),
  industry: z.string().min(1, "Select an industry"),
  helpWith: z.array(z.string()).min(1, "Select at least one area"),
  leadVolume: z.string().min(1, "Select a lead volume"),
  message: z.string().optional(),
  // Honeypot — must remain empty
  website: z.string().max(0, ""),
});

export const agentFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  location: z.string().min(2, "Enter your location"),
  yearsExperience: z.string().min(1, "Select years of experience"),
  industries: z.array(z.string()).min(1, "Select at least one industry"),
  tools: z.string().optional(),
  avgDeal: z.string().optional(),
  motivation: z.string().min(10, "Tell us a bit more about your motivation"),
  // Honeypot — must remain empty
  website: z.string().max(0, ""),
});

export type CompanyFormData = z.infer<typeof companyFormSchema>;
export type AgentFormData = z.infer<typeof agentFormSchema>;

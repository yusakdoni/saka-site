import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(6).max(40),
  industry: z.string().trim().max(120).optional().default(""),
  service: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().min(10).max(3000),
  // honeypot field: must stay empty
  website: z.string().max(0).optional().default(""),
  // simple time-trap: ms since form render, must be > 2s for a human
  ts: z.number().optional(),
  source: z.string().optional().default(""),
  lang: z.enum(["id", "en"]).optional().default("id"),
});
export type ContactInput = z.infer<typeof contactSchema>;

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().max(160).optional().default(""),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(6).max(40),
  need: z.string().trim().min(3).max(2000),
  website: z.string().max(0).optional().default(""),
  ts: z.number().optional(),
  source: z.string().optional().default("ai-assistant"),
  lang: z.enum(["id", "en"]).optional().default("id"),
});
export type LeadInput = z.infer<typeof leadSchema>;

export const chatSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(2000),
      })
    )
    .min(1)
    .max(30),
  lang: z.enum(["id", "en"]).optional().default("id"),
});
export type ChatInput = z.infer<typeof chatSchema>;

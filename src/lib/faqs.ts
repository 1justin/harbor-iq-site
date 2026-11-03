import type { Faq } from "@/components/iq/Blocks";
import { INTELLIGENCE as I } from "@/lib/constants";

/**
 * FAQ answers shared across pages (2026-10-29), so a question reads the same
 * wherever a visitor meets it. Page-specific questions stay on their page.
 */

export const FAQ_SETUP: Faq = {
  q: "Do I have to learn a new system or set anything up?",
  a: "No. It's a search box. If you can Google, you can use it, and your first answer needs no setup. It does get smarter the more you give it. Have one person spend an hour dragging in files from your carrier portals: appetite guides, bulletins, underwriter contacts. From then on, your whole team's answers draw on your agency's own documents too.",
};

export const FAQ_CARRIER_CHECK: Faq = {
  q: "What counts as a carrier check?",
  a: `One carrier question and its source-backed answer. Intelligence includes ${I.checksPerMonth} checks each month, shared across your agency. Asking about several carriers in one question is still one check. If you run out, wait for the monthly reset or buy a $${I.pack.price} pack of ${I.pack.checks} more. There are no automatic top-ups.`,
};

export const FAQ_KEEP_AMS: Faq = {
  q: "Can I keep my AMS or CRM?",
  a: "Yes. Use HarborIQ alongside the tools you have, or bring more of your work into Agency OS when you choose. You decide which information and workflows come into HarborIQ.",
};

export const FAQ_SOURCES: Faq = {
  q: "Where do the answers come from?",
  a: "From carrier documents: underwriting guides, appetite bulletins, and program rules, plus any guides your agency adds. Every answer shows the document it came from and the date it was published, so you can check it before you quote.",
};

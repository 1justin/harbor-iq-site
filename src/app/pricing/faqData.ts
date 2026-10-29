import { INTELLIGENCE as I, LAUNCH, PRICING } from "@/lib/constants";
import type { Faq } from "@/components/iq/Blocks";

/**
 * Pricing FAQ (2026-10-28 positioning). Free quantities are not ratified, so
 * no answer states a number for them; see CLAUDE.md before adding one.
 */
export const pricingFaqs: Faq[] = [
  {
    q: "What is included in free carrier research?",
    a: `A limited number of carrier checks with sources, dates, and key conditions, plus a small private guide upload so you can try your own information. Free results keep the evidence and the limitations you need to judge them. Intelligence adds deeper comparison, follow-up research, and ${I.checksPerMonth} checks each month.`,
  },
  {
    q: "What counts as a carrier check?",
    a: "One ordinary carrier question and its source-backed answer. Asking about several carriers in the same question is still one check. Your balance is shared across the agency and shown before you ask.",
  },
  {
    q: "What happens when we use our carrier checks?",
    a: `Wait for the monthly reset, or buy a $${I.pack.price} pack of ${I.pack.checks} more. There are no automatic top-ups. Your existing answers and documents stay available.`,
  },
  {
    q: "What changes when we pay annually?",
    a: `You pay $${I.annual} upfront instead of $${I.monthly} each month, which saves $${I.annualSavings}. You still receive ${I.checksPerMonth} checks each month, shared across your agency. Optional packs are bought separately.`,
  },
  {
    q: "Do reminders verify our licensing or CE requirements?",
    a: "No. You enter the deadlines and choose who gets the reminder and when. HarborIQ does not calculate state CE requirements, verify licenses, or guarantee compliance.",
  },
  {
    q: "Do I have to book a demo to start?",
    a: "No demo is needed for the free workspace or Intelligence. A walkthrough is there for Agency OS, because moving your book is a bigger decision.",
  },
  {
    q: "What does a free marketplace profile do?",
    a: "It describes what your agency insures, where you serve clients, and how to reach you, so people looking for an agency can find you. A listing does not guarantee rankings, recommendations, or leads. Your private carrier guides and client information stay separate from the public profile.",
  },
  {
    q: "Is Agency OS priced the same way as Intelligence?",
    a: `No. Agency OS is priced by agency size: $${PRICING.agency.solo.monthly} solo, $${PRICING.agency.team.monthly} for 2 to 5 people, $${PRICING.agency.os.monthly} for 6 to 15, and published bands up to 50. Everyone in your band is included and every band gets the same features. Never a fee per person.`,
  },
  {
    q: "Do I have to replace my AMS or CRM?",
    a: "No. Keep them, or move more into HarborIQ when it helps. You choose the sources and workflows you use.",
  },
  ...(LAUNCH.chatgpt
    ? [
        {
          q: "Does the ChatGPT connection include a ChatGPT subscription?",
          a: "No. HarborIQ is a separate service. Your ChatGPT account must support the connection, and setup explains the permissions it needs. You can also use HarborIQ directly.",
        },
      ]
    : []),
];

"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is the difference between Solo, Team, and Operating System?",
    a: "Solo is for 1-person agencies and includes the full Command Center, pipeline CRM, carrier directory, and basic AI assistance. Team is for 2 to 5 people and adds team management, engagement automation, team-level reporting, and AI Quoting when Phase 2 ships. Operating System is for 6 to 15 people and adds full performance analytics, advanced AI workflows, priority support, and dedicated onboarding.",
  },
  {
    q: "How does the founding partner reservation work?",
    a: "Pay $100 to reserve your founding partner spot. You lock in 33% off for life at whichever tier fits your agency. Solo is $119/mo, Team is $229/mo, Operating System is $399/mo. The deposit is fully refundable before launch. The offer closes August 1, 2026 and is limited to 20 agencies across all tiers. Founding partners also get AI Quoting free at every tier when Phase 2 ships, priority support, direct product team access, and a listing as a design partner.",
  },
  {
    q: "Wait, those prices are for my whole team? Not per user?",
    a: "Not per user. Not per seat. Not per agent. Solo covers 1 person. Team covers up to 5. Operating System covers up to 15. We priced it this way because per-seat pricing punishes you for growing your team, and that is backwards.",
  },
  {
    q: "What if I outgrow Solo?",
    a: "Upgrade to Team whenever you hire your second person. No migration, no data loss, no onboarding fee. You pay the new monthly rate starting the day you upgrade.",
  },
  {
    q: "What happens if I run out of AI credits?",
    a: "You will see your usage in the app at all times and get an email warning at 80% of your monthly allowance. If you hit 100%, you can pause AI until the next reset or continue at $0.10 per credit above the allowance. A $50 per month overage cap is on by default so you never get a surprise bill. Most agencies never notice the allowance exists.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts. Monthly billing, cancel anytime.",
  },
  {
    q: "When does billing start?",
    a: "Your monthly subscription begins when your agency is onboarded and live on the platform. Not before.",
  },
  {
    q: "What if I have more than 15 employees?",
    a: "We will build a plan that fits. Enterprise includes everything in Operating System plus unlimited users, custom integrations, and a dedicated account manager. Talk to us.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. HarborIQ is a web-based platform. Works in any modern browser. No downloads, no IT department required.",
  },
  {
    q: "How does onboarding work?",
    a: "Free if you import your data yourself with our CSV tool. If you want our team to do it for you, the setup fee equals one month of your plan (Solo $179, Team $349, Operating System $599). Most agencies are up and running within a week. You keep your legacy data for reference.",
  },
  {
    q: '"AI-powered", what does that actually mean?',
    a: "It means intelligence is built into the platform, not sprinkled on top. AI in HarborIQ understands carrier differences. It knows Progressive's \"rental reimbursement\" is Travelers' \"loss of use\". It tells your team what to do next each morning by analyzing your pipeline. It generates your marketing content, from social posts to re-engagement emails. This is not a chatbot we bolted on. The intelligence is in the foundation.",
  },
  {
    q: "Is AI going to replace my agents?",
    a: "No. Full stop. HarborIQ makes your agents faster and smarter, not obsolete. AI handles the repetitive work (re-typing data, remembering follow-ups, drafting posts) so your team can do what actually requires a human: building relationships, advising clients, and closing business. The agent is the value. The AI is the tool.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-ash">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center py-6 text-left gap-4"
          >
            <span className="text-[17px] font-medium text-ink">{faq.q}</span>
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className={`shrink-0 text-stone transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {openIndex === i && (
            <p className="pb-6 text-[16px] text-charcoal leading-relaxed pr-8">
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

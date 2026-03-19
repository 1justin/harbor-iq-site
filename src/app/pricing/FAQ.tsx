"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What's the difference between Core and Pro?",
    a: "Core gives you the essentials: pipeline CRM, client profiles, renewals, and the Command Center for up to 5 users. Pro adds team performance analytics, client engagement automation, AI-assisted quoting, dedicated onboarding, priority support, and covers up to 15 users.",
  },
  {
    q: "How does the founding agency discount work?",
    a: "Use the code FOUNDER at checkout on the Pro plan to get $200/month off, bringing it from $499 to $299/month. That's $2,400 in savings per year. This rate is locked for life. Founding agencies also get direct input on the product roadmap and priority access to new features.",
  },
  {
    q: "Wait, those prices are for my whole team? Not per user?",
    a: "Not per user. Not per seat. Not per agent. Core covers your agency up to 5 people. Pro covers up to 15. We priced it this way because per-seat pricing punishes you for growing your team, and that's backwards.",
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
    a: "Contact us. We'll work with you on a plan that fits.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. HarborIQ is a web-based platform. Works in any modern browser. No downloads, no IT department required.",
  },
  {
    q: "What about my existing data?",
    a: "We help you migrate during onboarding. Bring your client list and we'll get you set up.",
  },
  {
    q: "How does onboarding work?",
    a: "For $499 (one-time), we migrate your client data, clean up formatting issues, and walk your team through the platform. Most agencies are up and running within a week. You keep your legacy data for reference, and we get you set up with a clean starting point in HarborIQ.",
  },
  {
    q: '"AI-powered" \u2014 what does that actually mean?',
    a: 'It means intelligence is built into the platform, not sprinkled on top. AI in HarborIQ understands carrier differences (it knows Progressive\'s "rental reimbursement" is Travelers\' "loss of use"). It tells your team what to do next each morning by analyzing your pipeline. It generates your marketing content, from social posts to re-engagement emails. This isn\'t a chatbot we bolted on. The intelligence is in the foundation.',
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

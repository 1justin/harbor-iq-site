"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Wait, $299 for my whole team? Not per user?",
    a: "Not per user. Not per seat. Not per agent. $299/month covers your entire agency up to 5 people. The Growth plan covers up to 15. We priced it this way because per-seat pricing punishes you for growing your team, and that's backwards.",
  },
  {
    q: "What's included in the founding agency program?",
    a: "Full platform access, priority support, direct input on the product roadmap, and a price that never increases. You're helping us build the product that the rest of the market will use.",
  },
  {
    q: "Is the $100 deposit refundable?",
    a: "Yes. Fully refundable if you decide not to proceed before onboarding. If you continue, it's applied to your first month.",
  },
  {
    q: "When does billing start?",
    a: "Your monthly subscription begins when your agency is onboarded and live on the platform. Not before.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts. Monthly billing, cancel anytime.",
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
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-ash">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center py-5 text-left gap-4"
          >
            <span className="text-[15px] font-medium text-ink">{faq.q}</span>
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className={`shrink-0 text-stone transition-transform ${openIndex === i ? "rotate-180" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {openIndex === i && (
            <p className="pb-5 text-[15px] text-charcoal leading-relaxed pr-8">
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

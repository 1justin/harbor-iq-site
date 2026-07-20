"use client";

import { useEffect, useRef, useState } from "react";
import { MARKETS_START_URL } from "@/lib/constants";

/**
 * Homepage "ask it yourself" section.
 *
 * CONCEPT MOCK: scripted questions and answers, typed out client-side.
 * The production version calls the gated public Carrier Ask endpoint
 * (punch list: email gate after 2-3 questions, per-IP/email rate limits,
 * monthly spend cap, scope lock).
 *
 * Data policy (Justin, 2026-07-18): real answers drawn from the production
 * corpus with carrier names replaced by generic insurance company names,
 * disclosed as real. Questions stay google-able appetite basics; no carrier
 * IP. Real names return once carrier agreements are signed.
 */

type Exchange = {
  id: string;
  question: string;
  answer: string;
  citation: string;
};

const EXCHANGES: Exchange[] = [
  {
    id: "roof",
    question: "Will Meridian Mutual write a home with a 1978 roof?",
    answer:
      "Not without an inspection. Meridian requires roofs 20 years or older to pass inspection before binding, and asphalt shingle roofs over 25 years are not eligible for replacement-cost coverage. An actual-cash-value roof endorsement is available up to 30 years.",
    citation: "Homeowners underwriting guide, p. 14 · updated May 2026",
  },
  {
    id: "restaurant",
    question: "Does Lakeshore P&C have appetite for late-night restaurants?",
    answer:
      "Limited. Lakeshore writes full-service restaurants that close by 11pm. Operations serving past midnight, or with alcohol receipts above 30%, are referral-only and need three years of loss runs attached to the submission.",
    citation: "Commercial appetite bulletin · updated Jun 2026",
  },
  {
    id: "priorauto",
    question: "What prior coverage does Granite Shore require for preferred auto?",
    answer:
      "Six months of continuous prior coverage at 100/300 limits or better. A lapse over 30 days moves the applicant to the standard program, and drivers licensed under three years need an MVR pulled at quote, not at bind.",
    citation: "Personal auto guidelines, p. 6 · updated Apr 2026",
  },
];

export function AskDemo() {
  const [active, setActive] = useState<Exchange | null>(null);
  const [typedQuestion, setTypedQuestion] = useState("");
  const [shownAnswer, setShownAnswer] = useState("");
  const [showCitation, setShowCitation] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  useEffect(() => () => clearTimers(), []);

  const run = (ex: Exchange) => {
    clearTimers();
    setActive(ex);
    setTypedQuestion("");
    setShownAnswer("");
    setShowCitation(false);

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced) {
      setTypedQuestion(ex.question);
      setShownAnswer(ex.answer);
      setShowCitation(true);
      return;
    }

    // Type the question character by character, then stream the answer in
    // word chunks. The citation chip lands last: the source is the point,
    // so it gets the emphasis.
    ex.question.split("").forEach((_, i) => {
      timers.current.push(
        window.setTimeout(() => {
          setTypedQuestion(ex.question.slice(0, i + 1));
        }, 18 * i),
      );
    });

    const questionDone = 18 * ex.question.length + 320;
    const words = ex.answer.split(" ");
    words.forEach((_, i) => {
      timers.current.push(
        window.setTimeout(
          () => {
            setShownAnswer(words.slice(0, i + 1).join(" "));
          },
          questionDone + 26 * i,
        ),
      );
    });
    timers.current.push(
      window.setTimeout(() => {
        setShowCitation(true);
      }, questionDone + 26 * words.length + 260),
    );
  };

  return (
    <section className="bg-linen py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-4 text-[13px] font-medium uppercase tracking-wider text-interactive">
            Ask it yourself
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
            This is the product. Not a video of&nbsp;it.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[16px] leading-relaxed text-charcoal">
            Pick a question an agent asked this month. The answer comes from real
            carrier documents, with the source and its date attached.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-wrap justify-center gap-2">
            {EXCHANGES.map((ex) => (
              <button
                key={ex.id}
                type="button"
                onClick={() => run(ex)}
                aria-pressed={active?.id === ex.id}
                className={`btn-radius border px-4 py-2 text-left text-[14px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-interactive ${
                  active?.id === ex.id
                    ? "border-interactive bg-ice text-ink"
                    : "border-ash bg-paper text-charcoal hover:border-interactive"
                }`}
              >
                {ex.question}
              </button>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-ash bg-paper shadow-lg">
            <div className="flex items-center gap-2 bg-anchor px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-harbor/60" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-harbor/60" aria-hidden="true" />
              <span className="ml-1 text-[13px] font-medium text-paper">
                Carrier Ask
              </span>
            </div>
            <div className="min-h-[220px] px-5 py-5 md:px-7 md:py-6" aria-live="polite">
              {active ? (
                <>
                  <p className="ml-auto max-w-[85%] rounded-lg bg-ice px-4 py-2.5 text-[15px] text-ink md:max-w-[70%]">
                    {typedQuestion}
                  </p>
                  {shownAnswer && (
                    <div className="mt-4 max-w-[92%] md:max-w-[85%]">
                      <p className="text-[15px] leading-relaxed text-charcoal">
                        {shownAnswer}
                      </p>
                      <p
                        className={`mt-3 inline-flex items-center gap-2 rounded-md border border-ash bg-linen px-3 py-1.5 text-[12.5px] text-charcoal transition-all duration-500 ${
                          showCitation
                            ? "translate-y-0 opacity-100"
                            : "translate-y-1 opacity-0"
                        }`}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#2E75B6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M14 2v6h6" />
                        </svg>
                        <span>
                          <span className="font-medium text-ink">Source:</span>{" "}
                          {active.citation}
                        </span>
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <p className="pt-14 text-center text-[15px] text-stone">
                  Pick a question above to see a cited answer.
                </p>
              )}
            </div>
          </div>

          <p className="mt-4 text-center text-[13px] leading-relaxed text-stone">
            Real answers, real documents, real dates. Carrier names changed while
            our carrier partnerships are finalized, the way films say &ldquo;based
            on a true story.&rdquo; Inside the product your team sees the real
            names.
          </p>

          <div className="mt-8 text-center">
            <p className="text-[16px] font-medium text-ink">
              That was 3 carriers. The other 72 are inside.
            </p>
            <a
              href={MARKETS_START_URL}
              className="cta-primary btn-radius mt-4 inline-block bg-copper px-6 py-3 text-[15px] font-medium text-white hover:bg-bronze"
            >
              Start with Markets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

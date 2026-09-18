"use client";

import { useState } from "react";

type Kind = "book" | "carrier";
const QUESTIONS: { q: string; kind: Kind }[] = [
  { q: "Who is my top producer this quarter?", kind: "book" },
  { q: "Will this carrier write a roofer with a prior claim?", kind: "carrier" },
  { q: "Which clients renew in the next 60 days?", kind: "book" },
  { q: "What is the roof age limit on their homeowners form?", kind: "carrier" },
  { q: "Which of my markets will take a vacant property?", kind: "carrier" },
  { q: "What is my retention rate on commercial lines?", kind: "book" },
  { q: "Who is my underwriter there for small commercial, and what is the direct line?", kind: "carrier" },
  { q: "Did their appetite for coastal property change this year?", kind: "carrier" },
];

const VERDICT: Record<Kind, string> = {
  book: "About your book. The management system you run today already answers this. Counting what you own is what legacy software is good at.",
  carrier:
    "About your carriers. The management system you run today cannot answer this. The answer sits in a PDF, a portal, an old email, or the head of whoever has been there longest. This is the kind HarborIQ Markets answers, with the page it came from.",
};

export default function QuestionSorter() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<Kind | null>(null);
  const [right, setRight] = useState(0);
  const done = i >= QUESTIONS.length;
  const carrierCount = QUESTIONS.filter((x) => x.kind === "carrier").length;

  const choose = (k: Kind) => {
    if (picked) return;
    setPicked(k);
    if (k === QUESTIONS[i].kind) setRight((n) => n + 1);
  };
  const next = () => {
    setPicked(null);
    setI((n) => n + 1);
  };
  const restart = () => {
    setI(0);
    setPicked(null);
    setRight(0);
  };

  return (
    <div className="my-2 rounded-xl border border-ash bg-linen p-6" aria-live="polite">
      <p className="text-[12px] uppercase tracking-wider text-stone font-medium">
        Can the system you run today answer it? &middot;{" "}
        {done ? "Result" : `Question ${i + 1} of ${QUESTIONS.length}`}
      </p>

      {done ? (
        <div>
          <p className="mt-2 text-[19px] text-ink font-medium leading-snug">
            A legacy management system answers {QUESTIONS.length - carrierCount} of those {QUESTIONS.length}{" "}
            questions. The other {carrierCount} are about your carriers, and it has nothing to&nbsp;say.
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px]">
            <div className="rounded-lg border border-ash bg-paper p-4">
              <p className="text-stone uppercase tracking-wider text-[11px] font-medium">Your system today</p>
              <p className="mt-1 text-ink font-medium">{QUESTIONS.length - carrierCount} answered, about your book</p>
              <p className="mt-1 text-charcoal">{carrierCount} left to portals, PDFs, and memory</p>
            </div>
            <div className="rounded-lg border border-interactive bg-paper p-4">
              <p className="text-interactive uppercase tracking-wider text-[11px] font-medium">HarborIQ Markets</p>
              <p className="mt-1 text-ink font-medium">Answers the other {carrierCount}</p>
              <p className="mt-1 text-charcoal">From your carriers&rsquo; own guides, with the page it came from</p>
            </div>
          </div>
          <p className="mt-3 text-[14px] text-stone">
            You sorted {right} of {QUESTIONS.length} the way we did.
          </p>
          <button
            type="button"
            onClick={restart}
            className="mt-4 text-[14px] text-interactive hover:text-deep underline underline-offset-4"
          >
            Sort them again
          </button>
        </div>
      ) : (
        <div>
          <p className="mt-2 text-[19px] text-ink font-medium leading-snug min-h-[3.2em]">
            &ldquo;{QUESTIONS[i].q}&rdquo;
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(["book", "carrier"] as Kind[]).map((k) => {
              const isAnswer = picked && k === QUESTIONS[i].kind;
              const isWrong = picked === k && !isAnswer;
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => choose(k)}
                  disabled={!!picked}
                  className={`btn-radius px-5 py-3 text-[15px] font-medium border transition-colors text-center ${
                    isAnswer
                      ? "bg-interactive text-white border-interactive"
                      : isWrong
                        ? "bg-paper text-stone border-ash line-through"
                        : "bg-paper text-ink border-ash hover:border-interactive"
                  }`}
                >
                  {k === "book" ? "About my book" : "About my carriers"}
                </button>
              );
            })}
          </div>
          {picked ? (
            <div className="mt-4">
              <p className="text-[15px] text-charcoal">{VERDICT[QUESTIONS[i].kind]}</p>
              <button
                type="button"
                onClick={next}
                className="mt-3 text-[14px] text-interactive hover:text-deep underline underline-offset-4"
              >
                {i + 1 === QUESTIONS.length ? "See the split" : "Next question"}
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

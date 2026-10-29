"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { AGENCY_OS_DEMO_URL, INTELLIGENCE } from "@/lib/constants";

const GOAL_LABELS: Record<string, string> = {
  markets: "Find a potential market",
  contacts: "Organize carrier contacts",
  deadlines: "Remember license or CE dates",
  profile: "Share what my agency insures",
};

const inputBase =
  "btn-radius w-full border border-ash bg-paper px-3.5 py-3 text-[16px] text-ink focus:border-interactive focus:outline-none focus:ring-2 focus:ring-interactive/20";
const labelBase = "mb-1.5 block text-[14px] font-medium text-ink";

export function SignupForm() {
  const params = useSearchParams();
  const intelligence = params.get("plan") === "intelligence";
  const urlGoal = params.get("goal") ?? "";

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [agency, setAgency] = useState("");
  const [goal, setGoal] = useState(GOAL_LABELS[urlGoal] ? urlGoal : "");
  const [company, setCompany] = useState(""); // honeypot; humans never see it
  const [state, setState] = useState<"form" | "sending" | "done" | "error">("form");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          agency,
          company,
          plan: intelligence ? "intelligence" : "free",
          goal: goal || undefined,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      setState(data.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="iq-card p-7 shadow-lg md:p-8" role="status">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-ice">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E75B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className="text-[24px] font-medium tracking-tight text-ink">
          You&rsquo;re signed up, {firstName.trim() || "thanks"}.
        </h2>
        <p className="mt-3 text-[16px] leading-relaxed text-charcoal">
          We&rsquo;ll email <span className="font-medium text-ink">{email.trim()}</span> to set up your{" "}
          {intelligence ? "Intelligence workspace" : "free workspace"}.{" "}
          {intelligence
            ? "Nothing is charged until you confirm the plan."
            : "No card, no subscription."}
        </p>
        <p className="mt-6 border-t border-ash pt-5 text-[15px] text-charcoal">
          Want to see the whole platform first?{" "}
          <Link href={AGENCY_OS_DEMO_URL} className="cta-secondary text-interactive underline underline-offset-4 hover:text-deep">
            Book a 20-minute walkthrough
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="iq-card relative p-7 shadow-lg md:p-8" noValidate={false}>
      <h2 className="text-[22px] font-medium tracking-tight text-ink">
        {intelligence ? "Start Intelligence" : "Set up your free workspace"}
      </h2>
      <p className="mt-1.5 text-[14px] text-stone">
        {intelligence
          ? `$${INTELLIGENCE.monthly} per agency a month, or $${INTELLIGENCE.annual} a year. Nothing is charged until you confirm.`
          : "Free for your agency. No card needed."}
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="signup-first-name" className={labelBase}>First name</label>
          <input id="signup-first-name" name="firstName" type="text" autoComplete="given-name" required maxLength={80} value={firstName} onChange={(e) => setFirstName(e.target.value)} className={inputBase} />
        </div>
        <div>
          <label htmlFor="signup-email" className={labelBase}>Work email</label>
          <input id="signup-email" name="email" type="email" autoComplete="email" required maxLength={200} value={email} onChange={(e) => setEmail(e.target.value)} className={inputBase} />
        </div>
        <div>
          <label htmlFor="signup-agency" className={labelBase}>Agency name</label>
          <input id="signup-agency" name="agency" type="text" autoComplete="organization" required maxLength={120} value={agency} onChange={(e) => setAgency(e.target.value)} className={inputBase} />
        </div>
        {!intelligence && (
          <div>
            <label htmlFor="signup-goal" className={labelBase}>
              What do you want to start with? <span className="font-normal text-stone">(optional)</span>
            </label>
            <select id="signup-goal" name="goal" value={goal} onChange={(e) => setGoal(e.target.value)} className={inputBase}>
              <option value="">Not sure yet</option>
              {Object.entries(GOAL_LABELS).map(([id, label]) => (
                <option key={id} value={id}>{label}</option>
              ))}
            </select>
          </div>
        )}
        {/* Honeypot: off-screen, tab-skipped, and bots fill it anyway. */}
        <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="signup-company">Company</label>
          <input id="signup-company" name="company" type="text" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
      </div>

      {state === "error" && (
        <p className="mt-4 rounded-lg border border-danger/30 bg-danger/5 px-4 py-3 text-[14px] text-ink" role="alert">
          That didn&rsquo;t go through. Try again, or email{" "}
          <a href="mailto:team@wrkstream.com" className="text-interactive underline">team@wrkstream.com</a> and we&rsquo;ll
          set it up.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="cta-primary btn-radius mt-6 w-full bg-copper px-6 py-3.5 text-[16px] font-medium text-midnight transition-colors hover:bg-copper-light disabled:opacity-70"
      >
        {state === "sending" ? "One moment" : intelligence ? "Start Intelligence" : "Create my free workspace"}
      </button>
      <p className="mt-3 text-center text-[13px] text-stone">We&rsquo;ll only use your email to set up your workspace.</p>
    </form>
  );
}

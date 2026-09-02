"use client";

import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { DEMO_URL, TIDYCAL_PATH } from "@/lib/constants";

const inputBase =
  "w-full rounded-md border border-ash bg-pure px-3 py-2.5 text-[15px] text-ink placeholder:text-fog focus:border-interactive focus:outline-none";
const labelBase = "block text-[13px] font-medium text-stone mb-1.5";

type Step = "form" | "calendar";

/**
 * Two steps on one card. Step one asks for a name and email; step two is the
 * TidyCal calendar embedded with both prefilled, so nothing is typed twice.
 * The capture request never blocks the calendar: if it fails, the prospect
 * still books, and only the follow-up record is lost.
 */
export function DemoBooking() {
  const params = useSearchParams();
  const source = params.get("src") || "site";

  const [step, setStep] = useState<Step>("form");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [agency, setAgency] = useState("");
  const [company, setCompany] = useState(""); // honeypot; humans never see it
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await fetch("/api/demo-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, agency, company, source }),
        keepalive: true,
      });
    } catch {
      // Deliberately swallowed: the calendar is the point, the record is a bonus.
    } finally {
      setSubmitting(false);
      setStep("calendar");
    }
  }

  if (step === "calendar") {
    return (
      <div className="bg-pure rounded-xl border border-ash overflow-hidden">
        <div className="px-6 py-4 border-b border-ash flex items-baseline justify-between gap-4">
          <p className="text-[15px] text-ink font-medium">
            Pick a time, {firstName.trim() || "there"}.
          </p>
          <a
            href={`${DEMO_URL}?name=${encodeURIComponent(firstName.trim())}&email=${encodeURIComponent(email.trim())}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-stone underline underline-offset-4 hover:text-ink whitespace-nowrap"
          >
            Open the calendar in a new tab
          </a>
        </div>
        <div
          className="tidycal-embed min-h-[640px]"
          data-path={TIDYCAL_PATH}
          data-name={firstName.trim()}
          data-email={email.trim()}
        />
        <Script src="https://asset-tidycal.b-cdn.net/js/embed.js" strategy="afterInteractive" />
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-pure rounded-xl border border-ash p-6 md:p-8"
      aria-label="Book a demo"
    >
      <p className="text-[15px] text-charcoal leading-relaxed">
        Two fields, then the calendar. We use these to hold your slot and send
        the confirmation, nothing else.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="demo-first-name" className={labelBase}>
            First name
          </label>
          <input
            id="demo-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            maxLength={80}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="demo-email" className={labelBase}>
            Work email
          </label>
          <input
            id="demo-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="demo-agency" className={labelBase}>
            Agency name <span className="text-fog font-normal">(optional)</span>
          </label>
          <input
            id="demo-agency"
            name="agency"
            type="text"
            autoComplete="organization"
            maxLength={120}
            value={agency}
            onChange={(e) => setAgency(e.target.value)}
            className={inputBase}
          />
        </div>
        {/* Honeypot: off-screen, tab-skipped, and bots fill it anyway. */}
        <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
          <label htmlFor="demo-company">Company</label>
          <input
            id="demo-company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="cta-primary mt-6 w-full bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors disabled:opacity-70"
      >
        {submitting ? "One moment" : "Choose a time"}
      </button>
      <p className="mt-3 text-[13px] text-stone text-center">
        Twenty minutes with the founder. Reschedule anytime from the confirmation.
      </p>
    </form>
  );
}

import type { Metadata } from "next";
import { Suspense } from "react";
import { SignupForm } from "./SignupForm";
import { INTELLIGENCE as I, LAUNCH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Start free | HarborIQ for independent insurance agencies",
  description: `Set up a free HarborIQ workspace for your agency, or start Intelligence at $${I.monthly} per agency a month. Carrier answers with the source attached.`,
  alternates: { canonical: "/start" },
  // Follows the free workspace launch gate: held out of search until signup is self-serve.
  robots: LAUNCH.freeWorkspaceIndexed ? undefined : { index: false, follow: true },
};

const FREE = [
  "Try carrier questions, with the source behind each answer",
  "Underwriter contacts and portal links in one private place",
  "License and CE reminders for the dates you enter",
  "An agency profile, published only if you approve it",
];

/**
 * Signup for the free workspace (default) and Intelligence (?plan=intelligence).
 * Optional ?goal= preselects the first task from the /free picker. Records go
 * through /api/signup; see that route for how they land in the sales database.
 */
export default function StartPage() {
  return (
    <section className="min-h-[70vh] bg-linen py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
        <div>
          <p className="iq-eyebrow mb-4">Start free</p>
          <h1 className="text-3xl font-medium leading-tight tracking-tight text-ink md:text-[44px]">
            Get carrier answers with the source attached.
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-charcoal md:text-[19px]">
            Ask a carrier question the way you&rsquo;d ask Google. Keep your contacts and deadlines in one place. Your
            whole agency can use it, and you keep the tools you already have.
          </p>
          <ul className="mt-7 space-y-3">
            {FREE.map((t) => (
              <li key={t} className="flex gap-3 text-[16px] text-charcoal">
                <span className="mt-0.5 font-medium text-success" aria-hidden="true">✓</span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl border border-ash bg-paper px-6 py-5">
            <p className="text-[15px] font-medium text-ink">${I.monthly} a month covers your whole agency</p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-charcoal">
              Intelligence is ${I.monthly} per agency a month, or ${I.annual} a year, with {I.checksPerMonth} carrier
              checks shared across your team. Never per person.
            </p>
          </div>
        </div>

        <Suspense fallback={null}>
          <SignupForm />
        </Suspense>
      </div>
    </section>
  );
}

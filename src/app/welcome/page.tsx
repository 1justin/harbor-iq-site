import type { Metadata } from "next";
import { WelcomeConfetti } from "@/components/WelcomeConfetti";

export const metadata: Metadata = {
  title: "Welcome aboard | HarborIQ",
  description: "Payment received. Here is exactly what happens next.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/welcome" },
};

/**
 * Post-checkout landing page. Set as the success/redirect URL on every
 * Creem product. Structure follows the post-purchase playbook: confirm
 * fast, set expectations, ONE primary CTA (the carrier list, which is
 * onboarding disguised as a reply), one trust line, easy help.
 */

const CARRIER_LIST_MAILTO =
  "mailto:team@wrkstream.com" +
  "?subject=" +
  encodeURIComponent("My carrier list") +
  "&body=" +
  encodeURIComponent(
    "Hi Justin,\n\nHere are the carriers we represent:\n\n1.\n2.\n3.\n\nAgency name:\nTeam size:\n",
  );

const STEPS = [
  {
    title: "Your receipt is in your inbox",
    body: "It comes from Creem, our payment partner, on behalf of WRKSTREAM. A personal note from Justin follows from team@wrkstream.com.",
  },
  {
    title: "We set up your agency within one business day",
    body: "You will get your login link by email, usually much sooner. No forms to fill in the meantime.",
  },
  {
    title: "Your carriers get loaded before your first login",
    body: "That is what the copper button above is for. Send the list, and Carrier Ask has answers on day one.",
  },
];

export default function WelcomePage() {
  return (
    <>
      <WelcomeConfetti />

      <section className="bg-anchor py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[13px] font-medium text-ice uppercase tracking-wider mb-4">
            Payment received. You&rsquo;re all set.
          </p>
          <h1 className="text-3xl md:text-5xl font-medium text-paper leading-tight tracking-tight">
            Welcome aboard.
          </h1>
          <p className="mt-5 text-[17px] md:text-[19px] text-mist leading-relaxed max-w-xl mx-auto">
            You just did the thing most agencies put off for years, and it took
            you two minutes. Here is exactly what happens next.
          </p>
          <div className="mt-8">
            <a
              href={CARRIER_LIST_MAILTO}
              className="cta-primary inline-block bg-copper text-white btn-radius px-7 py-3.5 text-[16px] font-medium hover:bg-bronze transition-colors"
            >
              Send us your carrier list
            </a>
            <p className="mt-3 text-[13px] text-mist">
              One email, two minutes. It is the only setup step we need from
              you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="space-y-8">
            {STEPS.map((s, i) => (
              <div key={s.title} className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-anchor flex items-center justify-center shrink-0 text-paper text-[15px] font-medium">
                  {i + 1}
                </div>
                <div>
                  <h2 className="text-[17px] font-medium text-ink">{s.title}</h2>
                  <p className="mt-1 text-[15px] text-charcoal leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <figure className="mt-12 rounded-xl border border-ash bg-linen px-6 py-5">
            <blockquote className="font-serif text-[16px] italic leading-relaxed text-ink">
              &ldquo;We&rsquo;ve tried other tools. They all do one thing. This
              is the first platform that actually works the way our agency
              works.&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-[13px] text-stone">
              Andy Sertler, Principal, Sertler and Associates
            </figcaption>
          </figure>

          <div className="mt-6 rounded-xl border border-ash bg-linen px-6 py-5">
            <p className="text-[15px] text-charcoal leading-relaxed">
              Need anything before then, or did something not look right at
              checkout? Email{" "}
              <a
                href="mailto:team@wrkstream.com"
                className="text-interactive underline underline-offset-4"
              >
                team@wrkstream.com
              </a>{" "}
              and a human (the founder, actually) answers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

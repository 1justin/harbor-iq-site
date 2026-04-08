import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Real Cost of Per-User Pricing for Insurance Agencies — HarborIQ",
  description:
    "A 5-person agency paying $94/user/month spends $720/month on their AMS alone. Here's how per-seat pricing quietly becomes your biggest software expense.",
};

export default function PostPage() {
  return (
    <article className="bg-paper py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6">
        <Link
          href="/blog"
          className="text-[13px] text-interactive hover:text-deep transition-colors"
        >
          &larr; Back to Blog
        </Link>

        <h1 className="mt-8 text-3xl md:text-4xl font-medium text-ink leading-tight tracking-tight">
          The Real Cost of Per-User Pricing for Insurance&nbsp;Agencies
        </h1>
        <p className="mt-3 text-[13px] text-stone">
          April 2026 &middot; 5 min read
        </p>

        <div className="mt-10 space-y-6 text-[17px] text-charcoal leading-[1.75]">
          <p>
            Most agency management systems charge per user. It sounds reasonable at first: you pay for
            what you use. But for a growing independent agency, per-seat pricing creates a quiet tax on
            every hire, every promotion, and every part-time CSR you bring&nbsp;on.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">The math nobody shows&nbsp;you</h2>
          <p>
            Take a popular AMS that charges $250/month base plus $94 per user per month.
            A 5-person agency pays $720/month. Reasonable? Maybe. But when you grow to 10 people,
            that&rsquo;s $1,190/month. Hire two more agents next year? $1,378. The price scales with
            headcount, not with value&nbsp;delivered.
          </p>
          <p>
            And that&rsquo;s just the AMS. Most agencies also need a separate comparative rater ($200&ndash;350/month),
            a CRM for prospects ($79&ndash;149/month), and they&rsquo;re still manually entering data across carrier
            portals. The &ldquo;affordable&rdquo; per-seat AMS is actually the foundation of a $1,500+/month tool&nbsp;stack.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">The growth&nbsp;tax</h2>
          <p>
            Per-user pricing punishes the behavior every agency owner wants: growing the team. Every
            new hire increases your software cost before they close a single deal. For small agencies
            operating on tight margins, this creates a perverse incentive: delay hiring, overwork existing
            staff, or give new agents limited system access to save on&nbsp;licenses.
          </p>
          <p>
            None of those are good outcomes. The software should get cheaper per person as you grow,
            not more&nbsp;expensive.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">The alternative: flat&nbsp;pricing</h2>
          <p>
            A flat monthly fee means your software cost is predictable. Hire a new agent? No additional
            license fee. Bring on a part-time CSR for busy season? Already covered. Your team uses the
            full platform from day one without anyone calculating whether the per-seat cost is&nbsp;&ldquo;worth&nbsp;it.&rdquo;
          </p>
          <p>
            At HarborIQ, a 5-person agency pays $299/month. A 10-person agency pays $499/month.
            No per-user fees. No add-ons for basic features. Pipeline CRM, client management,
            AI-assisted quoting, team performance, and client engagement &mdash; all included. One login,
            one price, one&nbsp;platform.
          </p>

          <h2 className="text-xl font-medium text-ink mt-10 mb-4">What to ask your current&nbsp;vendor</h2>
          <p>
            Next time your AMS renewal comes up, calculate your total cost of ownership: base fee +
            per-user fees + add-on tools + the hours your team spends on manual data entry between
            disconnected systems. That&rsquo;s the real price you&rsquo;re&nbsp;paying.
          </p>

          <div className="mt-12 p-6 bg-linen rounded-xl border border-ash">
            <p className="text-[16px] text-ink font-medium">
              Founding agencies lock in $299/month for life.
            </p>
            <p className="mt-2 text-[15px] text-charcoal">
              10 spots. $100 refundable deposit. Your feedback shapes the&nbsp;product.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.creem.io/payment/prod_1SDGs4JxhPJ0yQonbNfIHV"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary bg-copper text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-bronze transition-colors text-center"
              >
                Reserve Your Founding Spot
              </a>
              <a
                href="https://tidycal.com/cjmayer/harboriq-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary bg-interactive text-white btn-radius px-6 py-3 text-[15px] font-medium hover:bg-deep transition-colors text-center"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

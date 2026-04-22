import { MockChrome } from "./MockChrome";

export function RenewalNudgeMock() {
  return (
    <MockChrome label="renewals · at risk">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-copper/40 bg-copper/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-copper">
            Renewal at risk
          </span>
          <span className="text-[10px] text-stone">renews in 14 days</span>
        </div>
        <div>
          <p className="text-[14px] font-semibold text-ink">Whitfield Roofing</p>
          <p className="text-[11px] uppercase tracking-wider text-stone">
            $4,800 premium · FL
          </p>
        </div>
        <div className="dl-beat rounded-lg border border-ash/60 bg-linen/60 px-3 py-2.5">
          <p className="text-[10px] uppercase tracking-wider text-stone">
            Draft · to Jim Whitfield · SMS
          </p>
          <p className="mt-1 text-[12px] leading-snug text-ink">
            &ldquo;Hi Jim, just making sure we&rsquo;ve got time to line up your renewal before the 15th. Want to hop on a quick call Thursday?&rdquo;
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-success">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          <span>
            agent &rsaquo; outreach drafted &middot; awaiting approval
          </span>
        </div>
      </div>
    </MockChrome>
  );
}

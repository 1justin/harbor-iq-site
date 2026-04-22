import { MockChrome } from "./MockChrome";

export function CarrierSearchMock() {
  return (
    <MockChrome label="carrier knowledge · ask">
      <div className="space-y-3">
        <div className="flex items-center gap-2 rounded-lg border border-ash/70 bg-linen/40 px-3 py-2.5">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-stone"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <span className="text-[12px] text-ink">
            Does Travelers write roofers in Florida?
          </span>
        </div>

        <div className="dl-beat rounded-lg border border-ash/60 bg-paper px-3 py-2.5">
          <p className="text-[10px] uppercase tracking-wider text-stone">
            Travelers · commercial appetite 2025 · p.14
          </p>
          <p className="mt-1.5 text-[12px] leading-snug text-ink">
            Roofing contractors are{" "}
            <mark className="dl-beat-highlight bg-copper/20 px-1 py-0.5 text-copper rounded-sm not-italic font-medium">
              in appetite
            </mark>{" "}
            in FL, GA, SC. Revenue ceiling $5M. No TPO-only operations.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-stone">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          <span>Answered in 4.2s &middot; scanned 47 docs across 9 carriers</span>
        </div>
      </div>
    </MockChrome>
  );
}

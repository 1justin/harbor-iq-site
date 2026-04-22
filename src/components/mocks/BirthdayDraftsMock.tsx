import { MockChrome } from "./MockChrome";

const DRAFTS = [
  { initials: "MD", name: "Maria Delgado" },
  { initials: "RW", name: "R. Winters" },
  { initials: "JT", name: "J. Tran" },
];

export function BirthdayDraftsMock() {
  return (
    <MockChrome label="client engagement · drafts">
      <p className="mb-3 text-[11px] uppercase tracking-wider text-stone">
        3 drafts &middot; birthdays today
      </p>
      <div className="space-y-2">
        {DRAFTS.map((d) => (
          <div
            key={d.initials}
            className="flex items-center gap-3 rounded-lg border border-ash/60 bg-paper px-3 py-2"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-anchor/90 text-[12px] font-semibold text-paper">
              {d.initials}
            </span>
            <span className="flex-1 text-[13px] font-medium text-ink">
              {d.name}
            </span>
            <button
              type="button"
              className="dl-beat rounded-full bg-copper px-3 py-1 text-[11px] font-semibold text-paper hover:bg-bronze"
              tabIndex={-1}
              aria-hidden="true"
            >
              Send
            </button>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[10px] text-stone">
        8 more drafts waiting &middot; birthdays, renewal reminders, policy changes
      </p>
    </MockChrome>
  );
}

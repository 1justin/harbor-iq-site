import { MockChrome } from "./MockChrome";

const TASKS = [
  { n: 1, label: "Call Whitfield Roofing" },
  { n: 2, label: "Review Acme quote" },
  { n: 3, label: "Approve 3 drafts" },
];

export function TaskListMock() {
  return (
    <MockChrome label="your day">
      <div className="space-y-2">
        {TASKS.map((t) => (
          <div
            key={t.n}
            className="dl-beat flex items-center gap-3 rounded-lg border border-ash/60 bg-linen/60 px-3 py-2.5"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-anchor text-[12px] font-semibold text-paper">
              {t.n}
            </span>
            <span className="flex-1 text-[13px] font-medium text-ink">
              {t.label}
            </span>
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
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>
    </MockChrome>
  );
}

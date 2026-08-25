// Matches the real Command Center "Your focus today" callout (screenshot
// supplied by Justin) rather than a generic badge: solid Interactive-blue
// box, concentric-circle "focus" icon in a darker chip, bold label, plain
// sentence. This is the actual in-app pattern, not an invented one.
export const FocusBanner: React.FC = () => (
  <div className="rounded-xl bg-interactive px-5 py-5">
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/15">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.4" fill="white" stroke="none" />
        </svg>
      </div>
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-wider text-white/80">
          Your focus today
        </p>
        <p className="mt-1.5 text-[16px] leading-snug text-white">
          Start with: follow up with Ben Wyatt — auto quote ready. This one&apos;s
          overdue.
        </p>
      </div>
    </div>
  </div>
);

export const AIFlagVisual: React.FC = () => (
  <div className="rounded-lg border border-interactive/30 bg-ice/40 px-4 py-4">
    <div className="flex items-center gap-2">
      <span className="rounded-full bg-interactive px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
        AI flagged
      </span>
      <span className="text-[13px] text-stone">Surfaced this morning</span>
    </div>
    <p className="mt-3 text-[16px] leading-snug text-ink">
      Policy #4471 renews in 14 days. No response from the client yet.
    </p>
  </div>
);

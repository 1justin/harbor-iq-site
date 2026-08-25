type CardShellProps = {
  label: string;
  badge?: { text: string; className: string };
  headline: string;
  subhead: string;
  children: React.ReactNode;
};

export const CardShell: React.FC<CardShellProps> = ({
  label,
  badge,
  headline,
  subhead,
  children,
}) => (
  <div className="dl-mock flex h-full w-full flex-col overflow-hidden rounded-2xl border border-ash/70 bg-paper">
    <div className="flex items-center justify-between border-b border-ash/50 px-8 py-5">
      <span className="text-[15px] font-medium uppercase tracking-[0.08em] text-stone">
        {label}
      </span>
      {badge ? (
        <span
          className={`rounded-full px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-white ${badge.className}`}
        >
          {badge.text}
        </span>
      ) : null}
    </div>

    <div className="flex flex-1 flex-col px-8 py-7">
      <p className="text-[26px] font-medium leading-snug text-ink">{headline}</p>
      <p className="mt-2.5 text-[17px] leading-snug text-charcoal">{subhead}</p>
      <div className="mt-7">{children}</div>
    </div>
  </div>
);

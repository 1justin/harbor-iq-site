type CardShellProps = {
  label: string;
  headline: string;
  subhead: string;
  children: React.ReactNode;
};

export const CardShell: React.FC<CardShellProps> = ({
  label,
  headline,
  subhead,
  children,
}) => (
  <div className="dl-mock flex h-full w-full flex-col overflow-hidden rounded-2xl bg-paper">
    <div className="bg-interactive px-10 py-6">
      <span className="text-[24px] font-semibold uppercase tracking-[0.08em] text-white">
        {label}
      </span>
    </div>

    <div className="flex flex-1 flex-col px-10 py-7">
      <p className="text-[44px] font-medium leading-[1.12] text-ink">{headline}</p>
      <p className="mt-3 text-[26px] leading-snug text-charcoal">{subhead}</p>
      <div className="mt-6">{children}</div>
    </div>
  </div>
);

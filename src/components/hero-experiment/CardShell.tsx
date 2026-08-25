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
    <div className="bg-interactive px-9 py-5">
      <span className="text-[20px] font-semibold uppercase tracking-[0.08em] text-white">
        {label}
      </span>
    </div>

    <div className="flex flex-1 flex-col px-9 py-8">
      <p className="text-[36px] font-medium leading-[1.15] text-ink">{headline}</p>
      <p className="mt-3 text-[22px] leading-snug text-charcoal">{subhead}</p>
      <div className="mt-7">{children}</div>
    </div>
  </div>
);

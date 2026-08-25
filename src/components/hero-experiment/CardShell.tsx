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
    <div className="bg-interactive px-9 py-4">
      <span className="text-[16px] font-semibold uppercase tracking-[0.08em] text-white">
        {label}
      </span>
    </div>

    <div className="flex flex-1 flex-col px-9 py-8">
      <p className="text-[31px] font-medium leading-snug text-ink">{headline}</p>
      <p className="mt-3 text-[19px] leading-snug text-charcoal">{subhead}</p>
      <div className="mt-8">{children}</div>
    </div>
  </div>
);

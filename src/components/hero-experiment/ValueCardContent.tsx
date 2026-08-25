type ValueCardContentProps = {
  color: string;
  eyebrow: string;
  headline: string;
  subhead: string;
};

export const ValueCardContent: React.FC<ValueCardContentProps> = ({
  color,
  eyebrow,
  headline,
  subhead,
}) => {
  return (
    <div
      className="flex h-full w-full flex-col justify-center rounded-2xl px-11 py-12"
      style={{ backgroundColor: color }}
    >
      <div className="h-[4px] w-[64px] rounded-full bg-copper" />
      <p className="mt-7 text-[16px] font-medium uppercase tracking-[0.1em] text-mist">
        {eyebrow}
      </p>
      <p className="mt-4 text-[40px] font-bold leading-[1.14] tracking-tight text-paper">
        {headline}
      </p>
      <p className="mt-5 text-[20px] leading-snug text-mist">{subhead}</p>
    </div>
  );
};

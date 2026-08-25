type Tone = "success" | "warning" | "neutral";

const DETAIL_CLASS: Record<Tone, string> = {
  success: "text-success",
  warning: "text-warning",
  neutral: "text-stone",
};

type Row = {
  initials: string;
  avatarClassName: string;
  name: string;
  meta: string;
  detail: string;
  tone?: Tone;
};

export const AvatarList: React.FC<{ rows: Row[] }> = ({ rows }) => (
  <div className="space-y-2.5">
    {rows.map((r) => (
      <div
        key={r.name}
        className="flex items-center gap-3.5 rounded-lg border border-ash/60 bg-linen/40 px-4 py-2.5"
      >
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[16px] font-semibold text-white ${r.avatarClassName}`}
        >
          {r.initials}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[19px] font-medium text-ink">
            {r.name}
          </span>
          <span className="block truncate text-[15px] text-stone">{r.meta}</span>
        </span>
        <span
          className={`shrink-0 text-[15px] font-semibold ${DETAIL_CLASS[r.tone ?? "neutral"]}`}
        >
          {r.detail}
        </span>
      </div>
    ))}
  </div>
);

type Tone = "success" | "interactive" | "warning";

type Row = { primary: string; secondary: string; tone?: Tone };

const DOT_CLASS: Record<Tone, string> = {
  success: "bg-success",
  interactive: "bg-interactive",
  warning: "bg-warning",
};

export const ListVisual: React.FC<{ rows: Row[] }> = ({ rows }) => (
  <div className="space-y-3">
    {rows.map((r) => (
      <div
        key={r.primary}
        className="flex items-center justify-between rounded-lg border border-ash/60 bg-linen/50 px-5 py-3.5"
      >
        <span className="flex items-center gap-3 text-[21px] text-ink">
          {r.tone ? (
            <span className={`h-3 w-3 shrink-0 rounded-full ${DOT_CLASS[r.tone]}`} />
          ) : null}
          {r.primary}
        </span>
        <span className="shrink-0 pl-3 text-[17px] text-stone">{r.secondary}</span>
      </div>
    ))}
  </div>
);

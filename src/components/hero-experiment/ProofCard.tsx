import { interpolate, spring, useCurrentFrame } from "remotion";

// Same disclosed-fictional exchange used in AskDemo.tsx (real answer, carrier
// name swapped pending signed agreements — see the data policy note there).
// Keep this in sync with that file rather than inventing new claims here.
const QUESTION = "Will Meridian Mutual write a home with a 1978 roof?";
const CITATION = "Homeowners underwriting guide, p. 14 · updated May 2026";

const QUESTION_IN = 0;
const ANSWER_IN = 50;
const BADGE_IN = 70;

type ProofCardProps = {
  durationInFrames: number;
  fps: number;
};

const FADE_OUT = 18;

const riseIn = (frame: number, fps: number, delay: number) => {
  const local = Math.max(0, frame - delay);
  const p = spring({ fps, frame: local, config: { damping: 200 } });
  return {
    opacity: p,
    transform: `translateY(${interpolate(p, [0, 1], [10, 0])}px)`,
  };
};

export const ProofCard: React.FC<ProofCardProps> = ({
  durationInFrames,
  fps,
}) => {
  const frame = useCurrentFrame();

  const questionStyle = riseIn(frame, fps, QUESTION_IN);
  const answerStyle = riseIn(frame, fps, ANSWER_IN);
  const badgeStyle = riseIn(frame, fps, BADGE_IN);

  const opacityOut = interpolate(
    frame,
    [durationInFrames - FADE_OUT, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div
      className="flex h-full w-full items-center justify-center p-[1.5%]"
      style={{ opacity: opacityOut }}
    >
      <div className="dl-mock w-full max-w-[1180px] overflow-hidden rounded-xl border border-ash/70 bg-paper shadow-[0_1px_2px_rgba(26,26,24,0.04),0_24px_60px_-20px_rgba(27,58,92,0.35)]">
        <div
          className="flex items-center justify-between border-b border-ash/50 px-7 py-4"
          style={questionStyle}
        >
          <span className="text-[15px] font-medium uppercase tracking-[0.08em] text-stone">
            Carrier Ask
          </span>
          <span
            className="rounded-full bg-success px-3 py-1 text-[12px] font-semibold uppercase tracking-wider text-white"
            style={badgeStyle}
          >
            High confidence
          </span>
        </div>

        <div className="space-y-6 p-9">
          <p className="text-[24px] font-medium leading-snug text-ink" style={questionStyle}>
            {QUESTION}
          </p>

          <div className="border-t border-ash/50 pt-6" style={answerStyle}>
            <p className="text-[19px] leading-relaxed text-charcoal">
              Not without an inspection. Meridian requires roofs{" "}
              <strong className="font-semibold text-ink">20 years or older</strong>{" "}
              to pass inspection before binding, and asphalt shingle roofs over{" "}
              <strong className="font-semibold text-ink">25 years</strong> are not
              eligible for replacement-cost coverage.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-ash bg-linen px-3 py-1.5 text-[13px] text-charcoal">
              <span className="font-medium text-interactive">Source</span>
              <span>{CITATION}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

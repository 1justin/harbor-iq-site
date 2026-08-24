import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

// Same disclosed-fictional exchange used in AskDemo.tsx (real answer, carrier
// name swapped pending signed agreements — see the data policy note there).
// Keep this in sync with that file rather than inventing new claims here.
const QUESTION = "Will Meridian Mutual write a home with a 1978 roof?";
const CITATION = "Homeowners underwriting guide, p. 14 · updated May 2026";
const ANSWER_PREFIX = "Not without an inspection. Meridian requires roofs ";
const ANSWER_HIGHLIGHT = "20 years or older to pass inspection";
const ANSWER_SUFFIX =
  " before binding, and asphalt shingle roofs over 25 years are not eligible for replacement-cost coverage.";
const STATS = "Answered in 4.2s · scanned 47 docs across 9 carriers";

// Calm, deliberate pacing: three sequential fades (question, answer, stats),
// no typewriter/cursor/count-up motion competing with the hero background.
const QUESTION_IN = 0;
const ANSWER_IN = 55;
const STATS_IN = 105;
const HOLD_END = 220;
const FADE_END = 280;

const riseIn = (frame: number, fps: number, delay: number) => {
  const local = Math.max(0, frame - delay);
  const p = spring({ fps, frame: local, config: { damping: 200 } });
  return {
    opacity: p,
    transform: `translateY(${interpolate(p, [0, 1], [10, 0])}px)`,
  };
};

export const CarrierAskLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const questionStyle = riseIn(frame, fps, QUESTION_IN);
  const answerStyle = riseIn(frame, fps, ANSWER_IN);
  const statsStyle = riseIn(frame, fps, STATS_IN);

  const highlightOpacity = interpolate(frame, [ANSWER_IN, ANSWER_IN + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const loopFade = interpolate(
    frame,
    [HOLD_END, FADE_END, durationInFrames],
    [1, 0, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div
      className="flex h-full w-full items-center justify-center bg-transparent p-[1.5%]"
      style={{ opacity: loopFade }}
    >
      <div className="dl-mock relative w-full max-w-[1180px] overflow-hidden rounded-xl border border-ash/70 bg-paper shadow-[0_1px_2px_rgba(26,26,24,0.04),0_24px_60px_-20px_rgba(27,58,92,0.35)]">
        <div className="flex items-center gap-2.5 border-b border-ash/50 px-7 py-4">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-ash" />
            <span className="h-2.5 w-2.5 rounded-full bg-ash" />
            <span className="h-2.5 w-2.5 rounded-full bg-ash" />
          </span>
          <span className="ml-1 text-[15px] font-medium uppercase tracking-[0.08em] text-stone">
            carrier knowledge · ask
          </span>
        </div>

        <div className="space-y-6 p-9">
          <div
            className="flex items-center gap-3 rounded-lg border border-ash/70 bg-linen/40 px-5 py-4.5"
            style={questionStyle}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-stone"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <span className="text-[19px] text-ink">{QUESTION}</span>
          </div>

          <div
            className="rounded-lg border border-ash/60 bg-paper px-5 py-4.5"
            style={answerStyle}
          >
            <p className="text-[13px] uppercase tracking-wider text-stone">
              {CITATION}
            </p>
            <p className="mt-2.5 text-[19px] leading-snug text-ink">
              {ANSWER_PREFIX}
              <span
                className="rounded-sm px-1 py-0.5 font-medium text-copper"
                style={{
                  backgroundColor: `rgba(196,147,90,${0.2 * highlightOpacity})`,
                }}
              >
                {ANSWER_HIGHLIGHT}
              </span>
              {ANSWER_SUFFIX}
            </p>
          </div>

          <div className="flex items-center gap-2.5 text-[15px] text-stone" style={statsStyle}>
            <span className="h-2 w-2 rounded-full bg-success" />
            <span>{STATS}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

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

const TYPE_START = 20;
const TYPE_END = 117;
const SEARCH_PULSE_END = 140;
const ANSWER_IN = 140;
const HIGHLIGHT_START = 167;
const HIGHLIGHT_END = 190;
const STATS_IN = 190;
const HOLD_END = 232;
const FADE_END = 256;

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
  const { fps, durationInFrames } = useVideoConfig();

  const typeProgress = interpolate(frame, [TYPE_START, TYPE_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const visibleChars = Math.round(QUESTION.length * typeProgress);
  const typedText = QUESTION.slice(0, visibleChars);
  const isTyping = frame >= TYPE_START && frame < TYPE_END;
  const cursorOn = isTyping ? frame % 20 < 10 : frame % 30 < 15;

  const searching = frame >= TYPE_END && frame < SEARCH_PULSE_END;
  const searchPulse = searching
    ? 0.4 + 0.6 * Math.abs(Math.sin(((frame - TYPE_END) / 10) * Math.PI))
    : 1;

  const answerStyle = riseIn(frame, fps, ANSWER_IN);

  const highlightWipe = interpolate(
    frame,
    [HIGHLIGHT_START, HIGHLIGHT_END],
    [100, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const statsStyle = riseIn(frame, fps, STATS_IN);
  const seconds = interpolate(frame, [STATS_IN, STATS_IN + 25], [0, 4.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const docCount = Math.round(
    interpolate(frame, [STATS_IN, STATS_IN + 25], [0, 47], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );
  const carrierCount = Math.round(
    interpolate(frame, [STATS_IN, STATS_IN + 25], [0, 9], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );

  const loopFade = interpolate(
    frame,
    [HOLD_END, FADE_END, durationInFrames],
    [1, 0, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div
      className="flex h-full w-full items-center justify-center bg-transparent p-[3%]"
      style={{ opacity: loopFade }}
    >
      <div className="dl-mock relative w-full max-w-[700px] overflow-hidden rounded-xl border border-ash/70 bg-paper shadow-[0_1px_2px_rgba(26,26,24,0.04),0_24px_60px_-20px_rgba(27,58,92,0.35)]">
        <div className="flex items-center gap-2 border-b border-ash/50 px-5 py-3">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-ash" />
            <span className="h-2 w-2 rounded-full bg-ash" />
            <span className="h-2 w-2 rounded-full bg-ash" />
          </span>
          <span className="ml-1 text-[12px] font-medium uppercase tracking-[0.08em] text-stone">
            carrier knowledge · ask
          </span>
        </div>

        <div className="space-y-4 p-6">
          <div className="flex items-center gap-2.5 rounded-lg border border-ash/70 bg-linen/40 px-4 py-3.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-stone"
              style={{ opacity: searchPulse }}
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <span className="text-[15px] text-ink">
              {typedText}
              <span
                className="ml-[1px] inline-block h-[15px] w-[2px] translate-y-[2px] bg-interactive"
                style={{ opacity: cursorOn ? 1 : 0 }}
              />
            </span>
          </div>

          <div
            className="rounded-lg border border-ash/60 bg-paper px-4 py-3.5"
            style={answerStyle}
          >
            <p className="text-[11px] uppercase tracking-wider text-stone">
              {CITATION}
            </p>
            <p className="mt-2 text-[15px] leading-snug text-ink">
              {ANSWER_PREFIX}
              <span className="relative inline-block">
                <span
                  className="absolute inset-0 rounded-sm bg-copper/20"
                  style={{
                    clipPath: `inset(0 ${highlightWipe}% 0 0)`,
                  }}
                />
                <span className="relative px-1 py-0.5 font-medium text-copper">
                  {ANSWER_HIGHLIGHT}
                </span>
              </span>
              {ANSWER_SUFFIX}
            </p>
          </div>

          <div
            className="flex items-center gap-2 text-[12px] text-stone"
            style={statsStyle}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            <span>
              Answered in {seconds.toFixed(1)}s · scanned {docCount} docs
              across {carrierCount} carriers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

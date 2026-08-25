import { AbsoluteFill, Series, useCurrentFrame, useVideoConfig } from "remotion";
import { ProofCard } from "./ProofCard";
import { ValueCard } from "./ValueCard";
import { AGENCY_VALUE_CARDS } from "./valueCards";
import { CARD_AREA_HEIGHT, CARD_AREA_WIDTH } from "./cardMotion";

export const PROOF_CARD_FRAMES = 190;
export const VALUE_CARD_FRAMES = 130;

const CARD_DURATIONS = [
  PROOF_CARD_FRAMES,
  ...AGENCY_VALUE_CARDS.map(() => VALUE_CARD_FRAMES),
];
const CARD_COUNT = CARD_DURATIONS.length;
const BOUNDARIES = CARD_DURATIONS.reduce(
  (acc, d) => [...acc, acc[acc.length - 1] + d],
  [0],
);
export const TOTAL_FRAMES = BOUNDARIES[BOUNDARIES.length - 1];

const activeIndex = (frame: number) => {
  for (let i = 0; i < CARD_COUNT; i++) {
    if (frame < BOUNDARIES[i + 1]) return i;
  }
  return CARD_COUNT - 1;
};

const Dots: React.FC = () => {
  const frame = useCurrentFrame();
  const current = activeIndex(frame);

  return (
    <div className="flex items-center justify-center gap-3">
      {Array.from({ length: CARD_COUNT }).map((_, i) => (
        <div
          key={i}
          className="rounded-full transition-none"
          style={
            i === current
              ? { width: 22, height: 8, borderRadius: 999, backgroundColor: "#C4935A" }
              : {
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  backgroundColor: "transparent",
                  border: "1.5px solid rgba(197,212,232,0.55)",
                }
          }
        />
      ))}
    </div>
  );
};

export const HeroCardRotation: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
      }}
    >
      <div style={{ position: "relative", width: CARD_AREA_WIDTH, height: CARD_AREA_HEIGHT }}>
        <Series>
          <Series.Sequence durationInFrames={PROOF_CARD_FRAMES}>
            <ProofCard durationInFrames={PROOF_CARD_FRAMES} fps={fps} />
          </Series.Sequence>
          {AGENCY_VALUE_CARDS.map((card) => (
            <Series.Sequence key={card.headline} durationInFrames={VALUE_CARD_FRAMES}>
              <ValueCard
                headline={card.headline}
                subhead={card.subhead}
                durationInFrames={VALUE_CARD_FRAMES}
                fps={fps}
              />
            </Series.Sequence>
          ))}
        </Series>
      </div>
      <Dots />
    </AbsoluteFill>
  );
};

import { AbsoluteFill, Series, useVideoConfig } from "remotion";
import { ProofCard } from "./ProofCard";
import { ValueCard } from "./ValueCard";
import { AGENCY_VALUE_CARDS } from "./valueCards";

export const PROOF_CARD_FRAMES = 190;
export const VALUE_CARD_FRAMES = 110;
export const TOTAL_FRAMES =
  PROOF_CARD_FRAMES + AGENCY_VALUE_CARDS.length * VALUE_CARD_FRAMES;

export const HeroCardRotation: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
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
    </AbsoluteFill>
  );
};

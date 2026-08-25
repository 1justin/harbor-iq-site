import { interpolate, spring } from "remotion";

const SLIDE_DISTANCE = 36;
const FADE_OUT = 18;

// Shared enter/exit motion so every card in the rotation moves the same
// way: slides in from the right, holds, slides out to the left. Gives the
// rotation a "next card in a deck" feel instead of a plain crossfade.
export const cardMotion = (
  frame: number,
  fps: number,
  durationInFrames: number,
) => {
  const inProgress = spring({ fps, frame, config: { damping: 200 } });
  const outProgress = interpolate(
    frame,
    [durationInFrames - FADE_OUT, durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const opacity = Math.min(inProgress, 1 - outProgress);
  const translateX =
    interpolate(inProgress, [0, 1], [SLIDE_DISTANCE, 0]) -
    interpolate(outProgress, [0, 1], [0, SLIDE_DISTANCE]);

  return {
    opacity,
    transform: `translateX(${translateX}px)`,
  };
};

export const CARD_AREA_WIDTH = 1180;
export const CARD_AREA_HEIGHT = 620;

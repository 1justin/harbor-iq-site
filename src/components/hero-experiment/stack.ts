import { interpolate, spring } from "remotion";

// Portrait composition with margin built in on every side so the peeking
// cards behind the front one have room to render without being clipped by
// Remotion's own frame bounds (Player clips to compositionWidth/Height
// regardless of the outer DOM wrapper's overflow setting).
export const COMPOSITION_WIDTH = 940;
export const COMPOSITION_HEIGHT = 1840;
export const CARD_WIDTH = 760;
export const CARD_HEIGHT = 1220;

export const CYCLE_LENGTH = 130;

export const frontIndexFloat = (frame: number, fps: number) => {
  const step = Math.floor(frame / CYCLE_LENGTH);
  const localFrame = frame - step * CYCLE_LENGTH;
  const progress = spring({ fps, frame: localFrame, config: { damping: 200 } });
  return step + progress;
};

export const depthOf = (cardIndex: number, front: number, count: number) => {
  const raw = (cardIndex - front) % count;
  return raw < 0 ? raw + count : raw;
};

// Continuous depth -> visual treatment. depth 0 is front and solid. Cards
// behind recede DOWN (not up) and fan out with a slight alternating
// rotation, like a loose pile of photos rather than a rigid vertical
// stack -- deliberately different from the earlier top-back version.
// Culled entirely past ~3 layers so the pile doesn't get visually noisy.
export const stackStyle = (depth: number) => {
  const scale = interpolate(depth, [0, 3], [1, 0.82], { extrapolateRight: "clamp" });
  const translateY = interpolate(depth, [0, 3], [0, 260], { extrapolateRight: "clamp" });
  const rotate = interpolate(depth, [0, 1, 2, 3], [0, -6, 5, -6], {
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(depth, [0, 1, 2.4, 3.2], [1, 0.55, 0.24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Cards behind the front one are also softly blurred, like a shallow
  // depth of field -- keeps their text from reading as legible ghost
  // text bleeding through the front card, whatever the exact offset.
  const blur = interpolate(depth, [0, 1, 3], [0, 2.5, 5], { extrapolateRight: "clamp" });
  return {
    transform: `translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
    opacity,
    filter: blur > 0 ? `blur(${blur}px)` : undefined,
    zIndex: Math.round(1000 - depth * 10),
  };
};

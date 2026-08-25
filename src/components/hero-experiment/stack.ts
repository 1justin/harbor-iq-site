import { interpolate, spring } from "remotion";

// Portrait composition with margin built in on every side so the peeking
// cards behind the front one have room to render without being clipped by
// Remotion's own frame bounds (Player clips to compositionWidth/Height
// regardless of the outer DOM wrapper's overflow setting).
export const COMPOSITION_WIDTH = 680;
export const COMPOSITION_HEIGHT = 1020;
export const CARD_WIDTH = 540;
export const CARD_HEIGHT = 700;

export const CYCLE_LENGTH = 130;

// Brand navy family + Interactive blue, reserved for AI-driven cards.
// Copper is deliberately excluded: the brand kit reserves it for exactly
// one CTA per asset, never decorative, so it doesn't belong in a rotating
// background set. See presets.ts equivalent discussion in remotion-studio.
export const STACK_COLORS = {
  anchor: "#1B3A5C",
  midnight: "#0F2440",
  deep: "#2A5580",
  interactive: "#2E75B6",
} as const;

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

// Continuous depth -> visual treatment. depth 0 is front and solid; each
// step back scales down, moves up, and gets more translucent, culled
// entirely past ~3 layers so the stack doesn't get visually noisy.
export const stackStyle = (depth: number) => {
  const scale = interpolate(depth, [0, 3], [1, 0.84], { extrapolateRight: "clamp" });
  const translateY = interpolate(depth, [0, 3], [0, -150], { extrapolateRight: "clamp" });
  const opacity = interpolate(depth, [0, 1, 2.4, 3.2], [1, 0.7, 0.32, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return {
    transform: `translateY(${translateY}px) scale(${scale})`,
    opacity,
    zIndex: Math.round(1000 - depth * 10),
  };
};

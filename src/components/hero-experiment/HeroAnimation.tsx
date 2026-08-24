"use client";

import { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import { CarrierAskLoop } from "./CarrierAskLoop";

const FPS = 30;
const DURATION_IN_FRAMES = 260;
// Steady state: question typed, answer revealed, highlight settled.
const REDUCED_MOTION_FRAME = 215;

export function HeroAnimation() {
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Player
      component={CarrierAskLoop}
      durationInFrames={DURATION_IN_FRAMES}
      fps={FPS}
      compositionWidth={1280}
      compositionHeight={800}
      style={{ width: "100%", height: "100%" }}
      autoPlay={!reducedMotion}
      loop={!reducedMotion}
      initialFrame={reducedMotion ? REDUCED_MOTION_FRAME : 0}
      controls={false}
      clickToPlay={false}
      showVolumeControls={false}
      spaceKeyToPlayOrPause={false}
    />
  );
}

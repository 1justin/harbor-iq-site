"use client";

import { useEffect, useRef } from "react";

/**
 * One-time confetti burst for the post-purchase welcome page.
 * Brand colors only, fires once on mount, ~2.5 seconds, then removes
 * itself. Skipped entirely under prefers-reduced-motion. Canvas overlay
 * never intercepts clicks.
 */

const COLORS = ["#C4935A", "#3B6FA0", "#7BA3CC", "#E8EEF6", "#2E75B6"];
const PIECES = 140;
const DURATION_MS = 2600;

type Piece = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  rot: number;
  vrot: number;
  color: string;
};

export function WelcomeConfetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const pieces: Piece[] = Array.from({ length: PIECES }, () => {
      const fromLeft = Math.random() < 0.5;
      return {
        x: fromLeft ? width * 0.25 : width * 0.75,
        y: height * 0.35,
        vx: (fromLeft ? 1 : -1) * (1 + Math.random() * 5) * (Math.random() < 0.3 ? -1 : 1),
        vy: -(6 + Math.random() * 8),
        w: 5 + Math.random() * 6,
        h: 8 + Math.random() * 8,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.35,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    });

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = now - start;
      ctx.clearRect(0, 0, width, height);
      const fade = t > DURATION_MS - 600 ? Math.max(0, (DURATION_MS - t) / 600) : 1;
      for (const p of pieces) {
        p.vy += 0.28; // gravity
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;
        ctx.save();
        ctx.globalAlpha = fade;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      if (t < DURATION_MS) {
        raf = requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, width, height);
        canvas.remove();
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
}

"use client";

import { useMemo } from "react";

type SparkleSpec = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

function buildSparkles(seed: number, count: number): SparkleSpec[] {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: rand() * 100,
    top: rand() * 100,
    size: 4 + rand() * 10,
    duration: 6 + rand() * 8,
    delay: -rand() * 10,
    opacity: 0.25 + rand() * 0.45,
  }));
}

type SparkleFieldProps = {
  count?: number;
  className?: string;
  seed?: number;
};

export function SparkleField({ count = 14, className = "", seed = 42 }: SparkleFieldProps) {
  const sparkles = useMemo(() => buildSparkles(seed, count), [count, seed]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden ${className}`}
    >
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="sparkle absolute block"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            opacity: sparkle.opacity,
            animationDuration: `${sparkle.duration}s`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full text-leaf">
            <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

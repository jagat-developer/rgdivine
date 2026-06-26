"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

export function Magnetic({ children, strength = 0.25, className = "" }: MagneticProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 14, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 160, damping: 14, mass: 0.5 });

  function handleMove(event: React.MouseEvent<HTMLSpanElement>) {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  if (reduced) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, display: "inline-block" }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

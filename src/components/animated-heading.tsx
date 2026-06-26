"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedHeadingProps = {
  text: string;
  highlight?: string;
  className?: string;
  highlightClassName?: string;
  as?: "h1" | "h2";
  children?: ReactNode;
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AnimatedHeading({
  text,
  highlight,
  className = "",
  highlightClassName = "text-leaf-deep",
  as = "h1",
}: AnimatedHeadingProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    const titleParts = highlight && text.includes(highlight) ? text.split(highlight) : null;
    const Tag = as;
    return (
      <Tag className={className}>
        {titleParts ? (
          <>
            {titleParts[0]}
            <span className={highlightClassName}>{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          text
        )}
      </Tag>
    );
  }

  const MotionTag = as === "h1" ? motion.h1 : motion.h2;

  return (
    <MotionTag
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {words.map((word, index) => {
        const isHighlight = highlight ? word.replace(/[.,]/g, "") === highlight : false;
        return (
          <span
            key={`${word}-${index}`}
            className="mr-[0.3em] inline-block overflow-hidden align-bottom"
          >
            <motion.span
              variants={wordVariants}
              className={`inline-block ${isHighlight ? highlightClassName : ""}`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </MotionTag>
  );
}

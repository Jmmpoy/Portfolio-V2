
import { motion, Variants } from "motion/react";

interface SplitTextFramerProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  from?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotateX?: number;
    rotateY?: number;
  };
  to?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotateX?: number;
    rotateY?: number;
  };
}

export default function SplitTextFramer({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
  stagger = 0.03,
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
}: SplitTextFramerProps) {
  const chars = text.split("");

  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const charVariants: Variants = {
    initial: from,
    animate: {
      ...to,
      transition: {
        duration,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className={`inline-flex ${className}`}
      style={{ willChange: "transform, opacity" }}
    >
      {chars.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={charVariants}
          className="inline-block"
          style={{
            whiteSpace: char === " " ? "pre" : "normal",
            willChange: "transform, opacity",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

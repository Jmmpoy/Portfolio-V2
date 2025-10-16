import { Variants } from "motion/react";

export const fade: Variants = {
  initial: { opacity: 0, filter: "blur(2px)" },
  enter: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    opacity: 0,
    filter: "blur(2px)",
    transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] },
  },
};

export const delayedFade: Variants = {
  initial: { opacity: 0, filter: "blur(2px)" },
  enter: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.7, 0, 0.3, 1],
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.7, 0, 0.3, 1],
    },
  },
};

export const stagger: Variants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      staggerDirection: 1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

export const slideInLeft: Variants = {
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.79, 0.14, 0.15, 0.86],
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.46, 0.03, 0.52, 0.96],
    },
  },
};

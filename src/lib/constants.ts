import { Variants } from "motion/react";

export const xAnimations: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

export const yAnimations: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

export const modalVariants: Variants = {
  hidden: { opacity: 0, x: "-50%", y: "calc(-50% + 30px)" },
  visible: { opacity: 1, x: "-50%", y: "-50%" },
  exit: { opacity: 0, x: "-50%", y: "calc(-50% + 30px)" },
};

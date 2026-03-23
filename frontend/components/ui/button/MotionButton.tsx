import type { HTMLMotionProps } from "motion/react";
import { motion } from "motion/react";

export const MotionButton = ({
  ref,
  children,
  ...rest
}: HTMLMotionProps<"button"> & {
  ref?: React.RefObject<HTMLButtonElement | null>;
}) => {
  return (
    <motion.button
      initial={true}
      whileFocus={{ scale: 1.02 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      {...rest}
      ref={ref}
    >
      {children}
    </motion.button>
  );
};

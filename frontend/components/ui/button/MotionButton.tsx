import type { HTMLMotionProps } from 'framer-motion';
import { m } from 'framer-motion';

export const MotionButtonBase = ({
  ref,
  children,
  ...rest
}: HTMLMotionProps<'button'> & {
  ref?: React.RefObject<HTMLButtonElement | null>;
}) => {
  return (
    <m.button
      initial={true}
      whileFocus={{ scale: 1.02 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      {...rest}
      ref={ref}
    >
      {children}
    </m.button>
  );
};

MotionButtonBase.displayName = 'MotionButtonBase';

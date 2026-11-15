'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'slideUp' | 'scaleIn';
}

export default function MotionReveal({
  children,
  className,
  delay = 0,
  variant = 'slideUp',
}: MotionRevealProps) {
  const initial =
    variant === 'scaleIn'
      ? { opacity: 1, scale: 0.985 }
      : { opacity: 1, y: 8 };

  const animate =
    variant === 'scaleIn'
      ? { opacity: 1, scale: 1 }
      : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration: 0.35, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

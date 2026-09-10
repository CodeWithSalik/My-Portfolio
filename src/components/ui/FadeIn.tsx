'use client';

import { m, LazyMotion, domAnimation, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function FadeIn({
  children,
  delay = 0,
  className,
  direction = 'up',
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const isReduced = prefersReducedMotion;

  const directionOffsets = {
    up: { y: 16, x: 0 },
    down: { y: -16, x: 0 },
    left: { x: 16, y: 0 },
    right: { x: -16, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialOffset = directionOffsets[direction];

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={isReduced ? { opacity: 1 } : { opacity: 0, ...initialOffset }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.5,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className={cn(className)}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

'use client';

import { cn } from '@/util/cn';
import React, { useId, useRef } from 'react';
import { motion, useInView } from 'motion/react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  revealOnScroll?: boolean;
  margin?: any;
};

const Container = ({
  children,
  className,
  revealOnScroll = false,
  margin = '',
}: ContainerProps) => {
  const id = useId();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: margin });

  const baseClasses = cn(
    'container mx-auto px-8 py-10 md:px-24 lg:px-36 md:py-16 xl:px-22 xl2:px-2',
    className,
  );

  if (revealOnScroll) {
    return (
      <motion.section
        key={`section-${id}`}
        ref={ref}
        className={cn(baseClasses, 'translate-y-4 opacity-0')}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      >
        {children}
      </motion.section>
    );
  }

  return <section className={baseClasses}>{children}</section>;
};

export default Container;

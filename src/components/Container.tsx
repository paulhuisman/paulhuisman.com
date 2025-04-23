'use client';

import { cn } from '@/util/cn';
import React, { useRef } from 'react';
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
  margin = '0',
}: ContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: margin,
    amount: 'some',
  });

  const baseClasses = cn(
    'container mx-auto pl-14 pr-6 py-10 md:px-4 lg:px-8 md:py-16 xl:px-18 xl2:px-2',
    className,
  );

  if (revealOnScroll) {
    return (
      <motion.section
        ref={ref}
        className={baseClasses}
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

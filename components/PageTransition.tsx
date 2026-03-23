'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { usePageTransitionPerformance } from '../hooks/usePageTransitionPerformance';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const { markTransitionStart, markTransitionEnd } = usePageTransitionPerformance();

  useEffect(() => {
    markTransitionStart();
    markTransitionEnd(`Page load: ${pathname}`);
  }, [pathname, markTransitionStart, markTransitionEnd]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -10,
    }
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "easeOut" as const,
    duration: 0.2, // Réduction de 0.5s à 0.2s
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="page-transition"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
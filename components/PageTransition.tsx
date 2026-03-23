'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingIndicator from './LoadingIndicator';
import { usePageTransitionPerformance } from '../hooks/usePageTransitionPerformance';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const { markTransitionStart, markTransitionEnd } = usePageTransitionPerformance();

  useEffect(() => {
    markTransitionStart();
    setIsLoading(true);

    // Réduction du délai de chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
      markTransitionEnd(`Page load: ${pathname}`);
    }, 50);

    return () => clearTimeout(timer);
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
    <>
      <LoadingIndicator isLoading={isLoading} />
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
    </>
  );
}
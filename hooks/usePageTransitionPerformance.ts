import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export const usePageTransitionPerformance = () => {
  const pathname = usePathname();
  const startTimeRef = useRef<number>();

  useEffect(() => {
    startTimeRef.current = performance.now();
    console.log(`⏱️ Starting navigation to ${pathname}`);

    return () => {
      if (startTimeRef.current) {
        const duration = performance.now() - startTimeRef.current;
        console.log(`✅ Page transition to ${pathname} completed in ${duration.toFixed(2)}ms`);
      }
    };
  }, [pathname]);

  return {
    markTransitionStart: () => {
      startTimeRef.current = performance.now();
    },
    markTransitionEnd: (label?: string) => {
      if (startTimeRef.current) {
        const duration = performance.now() - startTimeRef.current;
        console.log(`🎯 ${label || 'Transition'} completed in ${duration.toFixed(2)}ms`);
      }
    }
  };
};
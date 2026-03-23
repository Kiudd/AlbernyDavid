'use client';

import { motion } from 'framer-motion';

interface LoadingIndicatorProps {
  isLoading?: boolean;
}

export default function LoadingIndicator({ isLoading = false }: LoadingIndicatorProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      className="loading-indicator"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <div className="loading-spinner" />
    </motion.div>
  );
}
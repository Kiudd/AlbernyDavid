import { useEffect, useState } from 'react';

interface NotificationProps {
  message: string;
  type?: 'success' | 'error';
  show: boolean;
  onClose: () => void;
}

export default function Notification({ message, type = 'success', show, onClose }: NotificationProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className={`notification ${show ? 'show' : ''}`} style={{
      borderLeftColor: type === 'error' ? 'var(--rose)' : 'var(--gold)'
    }}>
      {message}
    </div>
  );
}
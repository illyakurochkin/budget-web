import React, { useEffect } from 'react';

export const useOutsideClick = (ref: React.RefObject<HTMLDivElement> | null, action?: VoidFunction): void => {
  useEffect(() => {
    if (!ref || !action) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current?.contains(event.target as Node)) return;
      action();
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [action, ref]);
};

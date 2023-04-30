import { useEffect } from 'react';

/**
 * Prevents scrolling on the body element if `prevent` is true (default).
 */
export const usePreventBackgroundScroll = (prevent = true) => {
  useEffect(() => {
    if (!prevent) return;

    const bodyElement = document.querySelector('body');
    if (!bodyElement) return;

    Object.assign(bodyElement.style, { overflow: 'hidden' });

    return () => {
      Object.assign(bodyElement.style, { overflow: null });
    };
  }, [prevent]);
};

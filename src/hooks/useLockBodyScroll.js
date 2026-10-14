import { useEffect } from 'react';

/**
 * Locks page scroll while `locked` is true (used by the mobile nav drawer).
 */
export default function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined;

    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}

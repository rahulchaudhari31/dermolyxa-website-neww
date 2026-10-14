import { useEffect, useRef } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Traps keyboard focus inside the referenced container while `active` is true.
 * On activation it moves focus into the container and restores the previously
 * focused element on deactivation. The container should be focusable
 * (e.g. tabIndex={-1}) or contain at least one focusable element.
 */
export default function useFocusTrap(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!active || !ref.current) return undefined;

    const container = ref.current;
    const previouslyFocused = document.activeElement;

    const getFocusable = () => Array.from(container.querySelectorAll(FOCUSABLE));

    const focusFirst = () => {
      const focusable = getFocusable();
      (focusable[0] ?? container).focus({ preventScroll: true });
    };

    focusFirst();

    const onKeyDown = (event) => {
      if (event.key !== 'Tab') return;

      const focusable = getFocusable();
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus({ preventScroll: true });
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus({ preventScroll: true });
      }
    };

    container.addEventListener('keydown', onKeyDown);

    return () => {
      container.removeEventListener('keydown', onKeyDown);
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus({ preventScroll: true });
      }
    };
  }, [active]);

  return ref;
}

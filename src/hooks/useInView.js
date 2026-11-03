import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element enters the viewport.
 * Uses IntersectionObserver for optimal performance.
 *
 * @param {Object} options
 * @param {number} options.threshold - Percent of target visible before triggering (0.0 to 1.0)
 * @param {string} options.rootMargin - Margin around the root (e.g. '0px 0px -50px 0px')
 * @param {boolean} options.triggerOnce - If true, stays visible once triggered
 * @returns {[React.RefObject, boolean]}
 */
export function useInView({
  threshold = 0.15,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true
} = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

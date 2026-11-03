import React from 'react';
import { useInView } from '../../hooks/useInView';

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.12,
  triggerOnce = true,
  className = '',
  as: Component = 'div',
  ...props
}) {
  const [ref, isInView] = useInView({ threshold, triggerOnce });

  const getAnimationStyles = () => {
    // Initial hidden state styles
    const initialStyles = {
      'fade-up': 'opacity-0 translate-y-10',
      'fade-down': 'opacity-0 -translate-y-10',
      'fade-left': 'opacity-0 translate-x-10',
      'fade-right': 'opacity-0 -translate-x-10',
      'zoom-in': 'opacity-0 scale-95',
      'fade': 'opacity-0',
    };

    // Visible revealed state styles
    const visibleStyles = {
      'fade-up': 'opacity-100 translate-y-0',
      'fade-down': 'opacity-100 translate-y-0',
      'fade-left': 'opacity-100 translate-x-0',
      'fade-right': 'opacity-100 translate-x-0',
      'zoom-in': 'opacity-100 scale-100',
      'fade': 'opacity-100',
    };

    return isInView ? visibleStyles[animation] : initialStyles[animation];
  };

  const inlineStyles = {
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'opacity, transform',
  };

  return (
    <Component
      ref={ref}
      style={inlineStyles}
      className={`transform transition-all ${getAnimationStyles()} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-24 right-6 sm:bottom-8 sm:left-8 sm:right-auto z-40 flex h-11 w-11 items-center justify-center rounded-2xl bg-paper-pure/90 backdrop-blur-md text-charcoal-700 shadow-stationery border border-blush-300 hover:border-rose-400 hover:text-rose-600 hover:bg-blush-50 hover:-translate-y-1 transition-all duration-300 group focus:outline-none"
    >
      <ArrowUp className="h-4 w-4 transform group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}

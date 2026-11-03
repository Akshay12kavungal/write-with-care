import React, { useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import { Feather, Image as ImageIcon } from 'lucide-react';

export default function LazyImage({
  src,
  alt = '',
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-[3/4]',
  placeholderColor = 'bg-paper-cream',
  objectFit = 'object-contain',
  ...props
}) {
  const [ref, isInView] = useInView({ threshold: 0.05, rootMargin: '100px 0px', triggerOnce: true });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset state if src changes
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${aspectRatio} ${placeholderColor} ${containerClassName}`}
    >
      {/* Stationery Ruled Shimmer Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Notebook line simulation in skeleton */}
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-paper-pure/80 to-paper-cream border border-blush-200/60 p-4 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
            
            <div className="space-y-3 w-full">
              <div className="h-3 w-1/3 bg-blush-200/50 rounded-md"></div>
              <div className="h-2 w-full bg-beige-dark/40 rounded"></div>
              <div className="h-2 w-5/6 bg-beige-dark/30 rounded"></div>
              <div className="h-2 w-4/6 bg-beige-dark/30 rounded"></div>
            </div>

            <div className="flex items-center justify-center py-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-100 text-rose-500 animate-pulse">
                <Feather className="h-5 w-5" />
              </div>
            </div>

            <div className="space-y-2 w-full">
              <div className="h-2 w-full bg-beige-dark/30 rounded"></div>
              <div className="h-2 w-3/4 bg-beige-dark/20 rounded"></div>
            </div>
          </div>
        </div>
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-paper-cream text-charcoal-400">
          <ImageIcon className="h-8 w-8 text-rose-300 mb-2" />
          <span className="text-xs font-serif font-medium text-charcoal-600">Sample Preview</span>
        </div>
      )}

      {/* Actual Image when in viewport */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
          className={`w-full h-full ${objectFit} transition-all duration-700 ease-out ${
            isLoaded 
              ? 'opacity-100 filter-none scale-100' 
              : 'opacity-0 blur-sm scale-[0.98]'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
}


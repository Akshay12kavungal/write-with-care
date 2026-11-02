import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  className = '',
  light = false
}) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-2.5">
          <span className="h-px w-6 bg-rose-400"></span>
          <span className="font-handwriting text-lg sm:text-xl font-bold text-rose-600 tracking-wider">
            {eyebrow}
          </span>
          <span className="h-px w-6 bg-rose-400"></span>
        </div>
      )}

      {title && (
        <h2 className={`font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-charcoal-800'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed ${
          light ? 'text-beige-light' : 'text-charcoal-muted'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}


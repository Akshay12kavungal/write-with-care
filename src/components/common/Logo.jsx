import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = '', isLight = false, showTagline = true }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-3 transition-transform hover:scale-[1.01] ${className}`}>
      {/* Pen Nib Logo Icon */}
      <div className={`relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl shadow-sm transition-all duration-300 group-hover:rotate-6 group-hover:shadow-md ${
        isLight 
          ? 'bg-paper-pure text-rose-600 border border-blush-300' 
          : 'bg-gradient-to-br from-blush-200 via-beige to-blush-300 text-charcoal-800 border border-rose-300/60'
      }`}>
        {/* Stylized Pen Nib SVG */}
        <svg viewBox="0 0 36 36" fill="none" className="h-6 w-6 transform transition-transform group-hover:-translate-y-0.5">
          <path d="M18 5L26 18L22 22L18 16L14 22L10 18L18 5Z" fill="#C97F89" />
          <path d="M18 16V28" stroke="#292524" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="22" r="1.5" fill="#292524" />
          <path d="M18 28C16 30 14 31 15 33C16 34 18 33 18 33C18 33 20 34 21 33C22 31 20 30 18 28Z" fill="#C97F89" />
        </svg>
        <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-500 text-[8px] text-white font-bold ring-2 ring-paper-pure">
          ✓
        </span>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
          isLight ? 'text-white' : 'text-charcoal-800 group-hover:text-rose-600'
        }`}>
          Write With Care
        </span>
        {showTagline && (
          <span className={`font-handwriting text-xs sm:text-sm -mt-1 font-semibold tracking-wide ${
            isLight ? 'text-blush-200' : 'text-rose-600'
          }`}>
            Your Handwriting Partner!
          </span>
        )}
      </div>
    </Link>
  );
}


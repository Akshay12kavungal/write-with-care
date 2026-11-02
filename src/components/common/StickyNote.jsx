import React from 'react';
import { Pin, Sparkles } from 'lucide-react';

export default function StickyNote({
  children,
  color = 'yellow', // 'yellow' | 'rose' | 'beige' | 'blue'
  rotate = -2,
  className = '',
  title = 'Student Note',
}) {
  const colorStyles = {
    yellow: 'bg-[#FEF9C3] text-[#713F12] border-[#FDE047] shadow-sm',
    rose: 'bg-blush-100 text-rose-950 border-blush-300 shadow-sm',
    beige: 'bg-beige-light text-charcoal-800 border-beige-dark shadow-sm',
    blue: 'bg-[#E0F2FE] text-[#075985] border-[#BAE6FD] shadow-sm',
  };

  const transformStyle = {
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <div
      style={transformStyle}
      className={`relative rounded-xl p-4 border transition-all duration-300 hover:rotate-0 hover:scale-[1.02] shadow-stationery ${colorStyles[color]} ${className}`}
    >
      {/* Top Push Pin Graphic */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div className="h-4 w-4 rounded-full bg-rose-500 shadow-xs border border-white flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-white opacity-80"></div>
        </div>
      </div>

      {title && (
        <div className="flex items-center gap-1.5 mb-1.5 pt-1 text-[11px] font-bold uppercase tracking-wider opacity-80">
          <Sparkles className="h-3 w-3" />
          <span>{title}</span>
        </div>
      )}

      <div className="font-handwriting text-base sm:text-lg leading-snug">
        {children}
      </div>
    </div>
  );
}


import React from 'react';

export default function Badge({
  children,
  variant = 'blush',
  size = 'md',
  className = '',
  icon: Icon
}) {
  const variantStyles = {
    blush: 'bg-blush-100 text-rose-700 border-blush-300',
    rose: 'bg-rose-500 text-white border-rose-600',
    beige: 'bg-beige text-charcoal-700 border-beige-dark',
    charcoal: 'bg-charcoal text-paper-pure border-charcoal-800',
    outline: 'bg-paper-pure text-rose-600 border-rose-300',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 gap-1 rounded-md font-medium',
    md: 'text-xs px-3 py-1 gap-1.5 rounded-full font-semibold',
    lg: 'text-sm px-4 py-1.5 gap-2 rounded-full font-semibold'
  };

  return (
    <span className={`inline-flex items-center border tracking-wide select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {Icon && <Icon className="h-3.5 w-3.5 flex-shrink-0" />}
      <span>{children}</span>
    </span>
  );
}


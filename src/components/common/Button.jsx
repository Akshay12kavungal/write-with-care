import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  isWhatsApp = false,
  target,
  rel,
  disabled = false,
  type = 'button',
  ...props
}) {
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs font-medium rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-7 py-3.5 text-base font-semibold rounded-2xl gap-2.5 shadow-md',
  };

  const variantStyles = {
    primary: 'bg-rose-500 hover:bg-rose-600 text-white shadow-soft hover:shadow-card-hover border border-rose-400/30 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-charcoal hover:bg-charcoal-800 text-white shadow-soft hover:shadow-card-hover border border-charcoal-700 hover:-translate-y-0.5 active:translate-y-0',
    outline: 'border-2 border-rose-400 text-rose-600 hover:bg-rose-50 hover:border-rose-500 hover:-translate-y-0.5 active:translate-y-0',
    soft: 'bg-blush-100 hover:bg-blush-200 text-rose-700 border border-blush-300 hover:-translate-y-0.5 active:translate-y-0',
    ghost: 'text-charcoal hover:text-rose-600 hover:bg-blush-50',
    whatsapp: 'bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 border border-green-600/20',
    accent: 'bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 text-white shadow-paper hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0'
  };

  const appliedVariant = isWhatsApp ? 'whatsapp' : variant;
  const baseClasses = `inline-flex items-center justify-center font-sans tracking-wide transition-all duration-200 select-none ${sizeStyles[size]} ${variantStyles[appliedVariant]} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'} ${className}`;

  const renderIcon = () => {
    if (isWhatsApp) {
      return <MessageCircle className="h-4 w-4 fill-current flex-shrink-0" />;
    }
    if (Icon) {
      return <Icon className="h-4 w-4 flex-shrink-0" />;
    }
    return null;
  };

  const content = (
    <>
      {iconPosition === 'left' && renderIcon()}
      <span>{children}</span>
      {iconPosition === 'right' && renderIcon()}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('https://wa.me');
    return (
      <a
        href={href}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        className={baseClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  );
}


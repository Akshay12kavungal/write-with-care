import React from 'react';
import { ZoomIn, MessageCircle, ExternalLink } from 'lucide-react';
import Badge from '../common/Badge';
import { createWhatsAppUrl } from '../../utils/whatsapp';

export default function GalleryCard({ item, onZoom }) {
  const whatsappUrl = createWhatsAppUrl(
    `Hi Write With Care, I am interested in your handwriting style for "${item.title}". Can we discuss my requirements?`
  );

  return (
    <div className="group relative flex flex-col rounded-3xl bg-paper-pure border border-blush-300 shadow-soft hover:shadow-card-hover transition-all duration-300 overflow-hidden hover:-translate-y-1">
      {/* Top Paper Tear / Card Header Line */}
      <div className="h-1 bg-gradient-to-r from-blush via-rose-400 to-blush opacity-80"></div>

      {/* Image Preview Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper-cream border-b border-blush-200">
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Floating Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="rose" size="sm">
            {item.categoryName}
          </Badge>
        </div>

        {/* Floating Price or Highlight Badge */}
        {item.badge && (
          <div className="absolute top-3 right-3">
            <span className="font-serif font-bold text-xs bg-paper-pure/95 backdrop-blur-sm text-charcoal-800 px-2.5 py-1 rounded-full shadow-sm border border-blush-300">
              {item.badge}
            </span>
          </div>
        )}

        {/* Hover Overlay with Zoom Button */}
        <div className="absolute inset-0 bg-charcoal-900/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-3">
          <button
            onClick={() => onZoom(item)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-paper-pure text-charcoal-900 shadow-md hover:bg-blush-100 hover:scale-110 transition-all"
            title="Inspect handwriting preview"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md hover:bg-[#20BD5A] hover:scale-110 transition-all"
            title="Inquire on WhatsApp"
          >
            <MessageCircle className="h-5 w-5 fill-current" />
          </a>
        </div>
      </div>

      {/* Card Details */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="flex items-center justify-between text-[11px] text-charcoal-muted mb-1 font-medium">
            <span>{item.pageType}</span>
            <span>{item.pagesPreview}</span>
          </div>

          <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal-800 line-clamp-1 group-hover:text-rose-600 transition-colors">
            {item.title}
          </h3>

          <p className="mt-1.5 text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="mt-4 pt-3 border-t border-blush-200/60 flex items-center justify-between">
          <button
            onClick={() => onZoom(item)}
            className="text-xs font-semibold text-charcoal-700 hover:text-rose-600 inline-flex items-center gap-1 transition-colors"
          >
            <span>Inspect sample</span>
            <span className="text-sm">→</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5 fill-current" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </div>
  );
}


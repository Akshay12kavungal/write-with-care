import React, { useEffect } from 'react';
import { X, ZoomIn, Info, Check, MessageCircle } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { createWhatsAppUrl, WHATSAPP_DISPLAY } from '../../utils/whatsapp';

export default function GalleryLightbox({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!item) return null;

  const inquiryMsg = `Hi Write With Care, I saw your sample "${item.title}" in the gallery. I want my writing to look just like this! Can you help me?`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-900/80 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-paper-pure rounded-3xl shadow-2xl border border-blush-300 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-blush-200 px-6 py-4 bg-paper-cream">
          <div className="flex items-center gap-2.5">
            <Badge variant="blush" size="sm">
              {item.categoryName}
            </Badge>
            <h3 className="font-serif font-bold text-base sm:text-lg text-charcoal-800 line-clamp-1">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-paper-pure text-charcoal-500 hover:text-charcoal-900 hover:bg-blush-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body: Image on left, details on right */}
        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[80vh] overflow-y-auto">
          {/* Image Display */}
          <div className="md:col-span-7 bg-paper-cream flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-blush-200">
            <div className="relative max-w-full max-h-[500px] overflow-hidden rounded-xl shadow-soft border border-beige-dark">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </div>
          </div>

          {/* Details & Specs */}
          <div className="md:col-span-5 p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">
                  Sample Format
                </span>
                <h4 className="font-serif text-xl font-bold text-charcoal-800 mt-0.5">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Specs List */}
              <div className="space-y-2 rounded-2xl bg-paper-cream p-4 border border-beige-dark text-xs">
                <div className="flex justify-between py-1 border-b border-beige-dark/50">
                  <span className="text-charcoal-muted">Paper Type:</span>
                  <span className="font-semibold text-charcoal-800">{item.pageType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-beige-dark/50">
                  <span className="text-charcoal-muted">Ink &amp; Pen:</span>
                  <span className="font-semibold text-charcoal-800">{item.inkType}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-charcoal-muted">Preview Volume:</span>
                  <span className="font-semibold text-charcoal-800">{item.pagesPreview}</span>
                </div>
              </div>

              {/* Sample Disclaimer Notice */}
              <div className="rounded-xl bg-blush-50 p-3 border border-blush-200 flex items-start gap-2.5">
                <Info className="h-4 w-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-charcoal-muted leading-tight">
                  <strong className="text-charcoal-800">Authentic Preview Format:</strong> All samples represent actual formatting, margin disciplines, and handwriting styles provided by Write With Care. Student confidentiality is strictly preserved.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-2 pt-4 border-t border-blush-200">
              <Button
                href={createWhatsAppUrl(inquiryMsg)}
                isWhatsApp
                size="md"
                className="w-full"
              >
                Order This Style on WhatsApp
              </Button>
              <p className="text-center text-[10px] text-charcoal-muted">
                Direct chat with 88917 46484 • Instant replies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


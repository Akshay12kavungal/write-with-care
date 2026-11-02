import React, { useState } from 'react';
import { 
  BookOpen, 
  FileSpreadsheet, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  ZoomIn, 
  MessageCircle, 
  PenTool, 
  Layers,
  ArrowRight
} from 'lucide-react';
import Badge from './Badge';
import Button from './Button';
import { galleryItems } from '../../data/galleryData';
import { createWhatsAppUrl } from '../../utils/whatsapp';

export default function HandwritingShowcase({ onZoomItem }) {
  const [activeId, setActiveId] = useState(galleryItems[0].id);

  const activeItem = galleryItems.find((item) => item.id === activeId) || galleryItems[0];

  const whatsappInquiryUrl = createWhatsAppUrl(
    `Hello Write With Care! I was viewing your "${activeItem.title}" handwriting sample on the website. I want my writing done in this style. Can you share availability?`
  );

  return (
    <div className="rounded-3xl bg-paper-pure border-2 border-blush-300 shadow-stationery p-6 sm:p-8 relative overflow-hidden">
      {/* Decorative Washi Tape on top */}
      <div className="washi-tape-rose"></div>

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pt-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-handwriting text-rose-600 font-bold text-lg">
              Interactive Penmanship Preview
            </span>
            <Badge variant="rose" size="sm">
              Live Showcase
            </Badge>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-800">
            Select A Handwriting Style &amp; Format
          </h3>
        </div>

        <span className="text-xs text-charcoal-muted font-medium bg-paper-cream px-3 py-1.5 rounded-full border border-beige-dark">
          Click any style below to inspect
        </span>
      </div>

      {/* Style Selector Tabs with mini icons */}
      <div className="flex flex-wrap gap-2 mb-6 pb-2 border-b border-blush-200">
        {galleryItems.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-rose-500 text-white shadow-sm ring-2 ring-rose-400/30 -translate-y-0.5'
                  : 'bg-paper-cream text-charcoal-700 hover:bg-blush-100 border border-beige-dark'
              }`}
            >
              <PenTool className={`h-3.5 w-3.5 ${isActive ? 'text-white' : 'text-rose-500'}`} />
              <span>{item.categoryName}</span>
              {item.badge && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                  isActive ? 'bg-white/20 text-white' : 'bg-blush-200 text-rose-800'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Item Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-paper-cream/60 rounded-2xl p-4 sm:p-6 border border-beige-dark">
        {/* Left: Sheet Preview with realistic notebook shadow */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative group w-full max-w-md rounded-2xl bg-paper-pure p-3 shadow-stationery border border-blush-200 overflow-hidden">
            {/* Paper corner washi tape */}
            <div className="washi-tape-corner"></div>

            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-paper-cream">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                {onZoomItem && (
                  <button
                    onClick={() => onZoomItem(activeItem)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-paper-pure text-charcoal-900 font-semibold text-xs shadow-lg hover:bg-blush-100"
                  >
                    <ZoomIn className="h-4 w-4 text-rose-600" />
                    <span>Zoom In Fullscreen</span>
                  </button>
                )}
              </div>
            </div>

            <div className="mt-2.5 flex items-center justify-between text-[11px] text-charcoal-muted px-1">
              <span>Paper: {activeItem.pageType}</span>
              <span className="font-bold text-rose-600">{activeItem.badge}</span>
            </div>
          </div>
        </div>

        {/* Right: Handwriting Specs & Ordering CTA */}
        <div className="lg:col-span-5 space-y-5">
          <div>
            <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">
              {activeItem.categoryName} Format
            </span>
            <h4 className="font-serif text-2xl font-bold text-charcoal-800 mt-0.5">
              {activeItem.title}
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              {activeItem.description}
            </p>
          </div>

          {/* Specifications Checklist */}
          <div className="space-y-2 rounded-2xl bg-paper-pure p-4 border border-blush-200 text-xs">
            <div className="flex justify-between py-1 border-b border-blush-100">
              <span className="text-charcoal-muted">Paper Style:</span>
              <span className="font-semibold text-charcoal-800">{activeItem.pageType}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-blush-100">
              <span className="text-charcoal-muted">Pen &amp; Ink:</span>
              <span className="font-semibold text-charcoal-800">{activeItem.inkType}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-charcoal-muted">Margin Standards:</span>
              <span className="font-semibold text-rose-600">3cm Left Margin + Title Header</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <Button
              href={whatsappInquiryUrl}
              isWhatsApp
              size="lg"
              className="w-full text-center"
            >
              Order This Style on WhatsApp
            </Button>
            
            {onZoomItem && (
              <button
                type="button"
                onClick={() => onZoomItem(activeItem)}
                className="w-full py-2 text-xs font-semibold text-charcoal-700 hover:text-rose-600 transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <ZoomIn className="h-4 w-4" />
                <span>Examine full resolution preview</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


import React, { useState } from 'react';
import { 
  Sparkles, 
  Filter, 
  Info, 
  MessageCircle, 
  CheckCircle2, 
  ZoomIn, 
  BookOpen 
} from 'lucide-react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import SectionHeading from '../components/common/SectionHeading';
import GalleryCard from '../components/gallery/GalleryCard';
import GalleryLightbox from '../components/gallery/GalleryLightbox';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { createWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header Banner */}
      <section className="relative bg-paper-cream border-b border-blush-200 py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stationery-pattern opacity-30 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="blush" size="md">
            Visual Portfolio
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900">
            Handwriting &amp; Presentation Gallery
          </h1>
          <p className="font-serif text-base sm:text-xl text-rose-600 font-semibold italic max-w-2xl mx-auto">
            Explore our handwriting styles, margin disciplines, and notebook layouts.
          </p>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Click on any sample to zoom in, inspect penmanship details, and request a similar format for your college submission.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 select-none ${
                activeCategory === cat.id
                  ? 'bg-rose-500 text-white shadow-soft ring-2 ring-rose-400/40'
                  : 'bg-paper-pure text-charcoal-700 hover:bg-blush-100 border border-blush-300'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onZoom={(target) => setSelectedItem(target)}
            />
          ))}
        </div>

        {/* Sample Disclosure Requirement */}
        <div className="rounded-3xl bg-blush-50 p-6 border border-blush-200 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blush-200 text-rose-700 flex-shrink-0">
            <Info className="h-5 w-5" />
          </div>
          <div className="flex-1 text-xs text-charcoal-600 space-y-1">
            <h4 className="font-serif font-bold text-sm text-charcoal-800">
              Authentic Presentation Previews &amp; Student Privacy
            </h4>
            <p>
              In strict adherence to student privacy and academic integrity, our gallery features authentic format templates and representative penmanship samples. We never publish confidential student submissions without consent.
            </p>
          </div>
          <Button
            href={createWhatsAppUrl('Hi Write With Care! Can you share more sample pictures of your handwriting on WhatsApp?')}
            isWhatsApp
            size="sm"
          >
            Request More Samples
          </Button>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <GalleryLightbox
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}


import React, { useState } from 'react';
import { Calculator, Sparkles, Clock, Check, HelpCircle, ShieldCheck, Zap } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';
import { createWhatsAppUrl, buildEstimateMessage } from '../../utils/whatsapp';

export default function PriceCalculator({ className = '' }) {
  const [selectedService, setSelectedService] = useState('assignments'); // 'assignments' | 'record'
  const [pageCount, setPageCount] = useState(15);

  const rates = {
    assignments: {
      name: 'College Assignments',
      ratePerPage: 10,
      description: 'Ruled or unruled assignment sheets, neat margins & topic headers.',
      badgeText: '₹10 / page'
    },
    record: {
      name: 'Simple Record Writing',
      ratePerPage: 5,
      description: 'Neat academic and practical record book writing adhering to your format.',
      badgeText: '₹5 / page'
    }
  };

  const currentRate = rates[selectedService];
  const estimatedTotal = pageCount * currentRate.ratePerPage;
  const hoursSaved = Math.max(1, Math.round(pageCount * 0.35)); // Average 20 mins per academic page

  const handleWhatsAppOrder = () => {
    const text = buildEstimateMessage({
      service: currentRate.name,
      pages: pageCount,
      estimatedPrice: estimatedTotal
    });
    return createWhatsAppUrl(text);
  };

  return (
    <div className={`rounded-3xl bg-paper-pure p-6 sm:p-8 border-2 border-blush-300 shadow-stationery relative overflow-hidden ${className}`}>
      {/* Decorative Washi Tape on top */}
      <div className="washi-tape-rose"></div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pt-2">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blush-100 text-rose-600 shadow-xs">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-800">
              Interactive Price Estimator
            </h3>
            <p className="text-xs text-charcoal-muted">
              Select your service and calculate your order cost instantly
            </p>
          </div>
        </div>
        <Badge variant="rose" size="sm" icon={Sparkles}>
          Official Verified Rates
        </Badge>
      </div>

      {/* Service Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <button
          type="button"
          onClick={() => setSelectedService('assignments')}
          className={`flex flex-col text-left p-4 rounded-2xl border-2 transition-all duration-200 relative overflow-hidden ${
            selectedService === 'assignments'
              ? 'border-rose-500 bg-blush-50/80 shadow-sm ring-2 ring-rose-400/20'
              : 'border-beige-dark bg-paper-cream hover:border-blush-300'
          }`}
        >
          {selectedService === 'assignments' && (
            <div className="absolute top-0 right-0 bg-rose-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">
              SELECTED
            </div>
          )}
          <div className="flex items-center justify-between mb-1">
            <span className="font-serif font-bold text-sm text-charcoal-800">
              College Assignments
            </span>
            <span className="font-sans font-bold text-xs text-rose-600 bg-paper-pure px-2.5 py-0.5 rounded-full border border-blush-200">
              ₹10 / page
            </span>
          </div>
          <p className="text-[11px] text-charcoal-muted leading-relaxed">
            Standard assignment sheets, clean margins &amp; titles.
          </p>
        </button>

        <button
          type="button"
          onClick={() => setSelectedService('record')}
          className={`flex flex-col text-left p-4 rounded-2xl border-2 transition-all duration-200 relative overflow-hidden ${
            selectedService === 'record'
              ? 'border-rose-500 bg-blush-50/80 shadow-sm ring-2 ring-rose-400/20'
              : 'border-beige-dark bg-paper-cream hover:border-blush-300'
          }`}
        >
          {selectedService === 'record' && (
            <div className="absolute top-0 right-0 bg-rose-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">
              SELECTED
            </div>
          )}
          <div className="flex items-center justify-between mb-1">
            <span className="font-serif font-bold text-sm text-charcoal-800">
              Simple Record Writing
            </span>
            <span className="font-sans font-bold text-xs text-rose-600 bg-paper-pure px-2.5 py-0.5 rounded-full border border-blush-200">
              ₹5 / page
            </span>
          </div>
          <p className="text-[11px] text-charcoal-muted leading-relaxed">
            Practical record books, observations &amp; formulas.
          </p>
        </button>
      </div>

      {/* Page Count Slider & Direct Input */}
      <div className="mb-6 rounded-2xl bg-paper-cream p-4 sm:p-5 border border-beige-dark space-y-3">
        <div className="flex items-center justify-between">
          <label htmlFor="pages-slider" className="font-sans text-xs sm:text-sm font-semibold text-charcoal-800">
            Number of Pages to Write:
          </label>
          <div className="flex items-center gap-2">
            <input
              id="pages-input"
              type="number"
              min="1"
              max="250"
              value={pageCount}
              onChange={(e) => setPageCount(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 rounded-xl border border-blush-300 bg-paper-pure px-2 py-1 text-center font-bold text-rose-700 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 shadow-2xs"
            />
            <span className="text-xs text-charcoal-muted font-medium">pages</span>
          </div>
        </div>

        <input
          id="pages-slider"
          type="range"
          min="1"
          max="100"
          value={pageCount}
          onChange={(e) => setPageCount(parseInt(e.target.value) || 1)}
          className="w-full accent-rose-500 cursor-pointer h-2 bg-blush-200 rounded-lg appearance-none"
        />

        {/* Quick select pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-beige-dark/60">
          <span className="text-[11px] text-charcoal-muted font-medium self-center">Quick pick:</span>
          {[5, 10, 15, 20, 30, 50].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setPageCount(num)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                pageCount === num
                  ? 'bg-rose-500 text-white shadow-2xs'
                  : 'bg-paper-pure text-charcoal-700 hover:bg-blush-100 border border-beige-dark'
              }`}
            >
              {num} pgs
            </button>
          ))}
        </div>
      </div>

      {/* Result Display Box */}
      <div className="mb-6 rounded-3xl bg-gradient-to-br from-blush-100 via-beige to-blush-200 p-5 sm:p-6 border-2 border-blush-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
              Estimated Total Cost
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] bg-white px-2 py-0.5 rounded-full text-charcoal-700 font-semibold border border-blush-200">
              <Clock className="h-3 w-3 text-rose-500" />
              <span>Saves ~{hoursSaved} hrs of writing!</span>
            </span>
          </div>

          <div className="flex items-baseline gap-2 mt-1">
            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900">
              ₹{estimatedTotal}
            </span>
            <span className="text-xs sm:text-sm text-charcoal-700 font-medium">
              ({pageCount} pages × ₹{currentRate.ratePerPage}/page)
            </span>
          </div>
        </div>

        <div className="w-full sm:w-auto">
          <Button
            href={handleWhatsAppOrder()}
            isWhatsApp
            size="lg"
            className="w-full sm:w-auto shadow-md"
          >
            Order with this Estimate
          </Button>
        </div>
      </div>

      {/* Transparent Pricing Disclaimers */}
      <div className="space-y-1 text-[11px] text-charcoal-muted">
        <p className="flex items-start gap-1.5">
          <span className="text-rose-500 font-bold">•</span>
          <span>Urgent orders may have additional charges depending on timeframe.</span>
        </p>
        <p className="flex items-start gap-1.5">
          <span className="text-rose-500 font-bold">•</span>
          <span>Courier / delivery charges are extra, where applicable (Speed Post / DTDC / Local pickup).</span>
        </p>
        <p className="flex items-start gap-1.5">
          <span className="text-rose-500 font-bold">•</span>
          <span>Bulk orders (100+ pages) and customised pricing are available upon contact.</span>
        </p>
      </div>
    </div>
  );
}

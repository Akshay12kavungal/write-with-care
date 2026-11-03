import React from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Truck, 
  Layers, 
  Zap, 
  MessageCircle, 
  HelpCircle,
  CreditCard,
  ShieldCheck,
  Sparkles,
  Clock
} from 'lucide-react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import StickyNote from '../components/common/StickyNote';
import SectionHeading from '../components/common/SectionHeading';
import ScrollReveal from '../components/common/ScrollReveal';
import PriceCalculator from '../components/common/PriceCalculator';
import { officialPricing, pricingTerms, pricingFaqs } from '../data/pricingData';
import { createWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

export default function PricingPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="relative bg-paper-cream border-b border-blush-200 py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stationery-pattern opacity-30 pointer-events-none"></div>

        <ScrollReveal animation="fade-up" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="blush" size="md">
            Clear &amp; Transparent Rates
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900">
            Official Price List
          </h1>
          <p className="font-serif text-base sm:text-xl text-rose-600 font-semibold italic max-w-2xl mx-auto">
            Affordable academic rates designed for college students in Kerala.
          </p>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Every page is written with care and precision. Review our official pricing below with zero hidden costs.
          </p>
        </ScrollReveal>
      </section>

      {/* Official Price Table & Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <ScrollReveal animation="fade-up">
          <SectionHeading
            eyebrow="Verified Rates"
            title="Standard Per-Page Pricing"
            subtitle="Fixed transparent rates for our core academic handwriting services."
          />
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {officialPricing.map((item, idx) => (
            <ScrollReveal
              key={idx}
              animation={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
              delay={idx * 150}
              className="h-full"
            >
              <div className="h-full rounded-3xl bg-paper-pure p-8 border-2 border-blush-300 shadow-stationery flex flex-col justify-between hover:border-rose-400 transition-colors relative">
                <div className="washi-tape-rose"></div>

                <div className="space-y-5 pt-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="rose" size="md">
                      {item.highlight}
                    </Badge>
                    <span className="text-xs text-charcoal-muted">Academic Standard</span>
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl font-bold text-charcoal-800">
                      {item.service}
                    </h2>
                    <p className="text-xs sm:text-sm text-charcoal-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-paper-cream border border-beige-dark flex items-baseline gap-2">
                    <span className="font-serif text-4xl sm:text-5xl font-extrabold text-charcoal-900">
                      {item.price}
                    </span>
                    <span className="font-sans text-sm font-semibold text-rose-600">
                      {item.unit}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-charcoal-700">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-rose-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-blush-200">
                  <Button
                    href={createWhatsAppUrl(`Hi Write With Care, I want to book ${item.service} (${item.price} ${item.unit}).`)}
                    isWhatsApp
                    size="md"
                    className="w-full shadow-md"
                  >
                    Order {item.service}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Sticky note memo right under price cards */}
        <ScrollReveal animation="zoom-in" delay={150} className="max-w-md mx-auto">
          <StickyNote color="yellow" rotate={-1} title="Budget Friendly Guarantee">
            "We keep prices at ₹5 - ₹10 per page so every degree and diploma student can afford neat presentation without financial strain."
          </StickyNote>
        </ScrollReveal>

        {/* Additional Notes Requirements (Mandatory Prompt Requirements) */}
        <ScrollReveal animation="fade-up" delay={200} className="rounded-3xl bg-blush-50 p-6 sm:p-8 border-2 border-blush-300 shadow-stationery">
          <div className="flex items-center gap-2.5 mb-4">
            <AlertCircle className="h-5 w-5 text-rose-600 flex-shrink-0" />
            <h3 className="font-serif text-lg font-bold text-charcoal-800">
              Important Pricing Notes &amp; Policies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-charcoal-700">
            {pricingTerms.map((term, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-paper-pure border border-blush-200 shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></span>
                <div>
                  <strong className="block text-charcoal-900 font-serif font-bold text-sm">
                    {term.title}
                  </strong>
                  <p className="text-charcoal-600 text-xs mt-0.5 leading-relaxed">
                    {term.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-blush-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-muted">
            <span>Need a custom quote for 50+ pages or multiple group records?</span>
            <Button
              href={createWhatsAppUrl('Hello Write With Care! I would like to get a custom pricing quote.')}
              variant="outline"
              size="sm"
            >
              Contact Us for Pricing Details
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Interactive Price Estimator Tool */}
      <ScrollReveal animation="fade-up" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PriceCalculator />
      </ScrollReveal>

      {/* Pricing FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <ScrollReveal animation="fade-up">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about pricing, page calculations, and payments."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pricingFaqs.map((faq, idx) => (
            <ScrollReveal
              key={idx}
              animation="fade-up"
              delay={idx * 100}
            >
              <div className="h-full rounded-2xl bg-paper-pure p-6 border border-blush-300 shadow-xs space-y-2">
                <h4 className="font-serif font-bold text-sm sm:text-base text-charcoal-800">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { 
  BookOpen, 
  FileSpreadsheet, 
  FileText, 
  PenTool, 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Info
} from 'lucide-react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import SectionHeading from '../components/common/SectionHeading';
import ScrollReveal from '../components/common/ScrollReveal';
import PriceCalculator from '../components/common/PriceCalculator';
import { servicesData } from '../data/servicesData';
import { createWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

export default function ServicesPage() {
  const getServiceIcon = (name) => {
    switch (name) {
      case 'BookOpen': return BookOpen;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'FileText': return FileText;
      case 'PenTool': return PenTool;
      default: return BookOpen;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="relative bg-paper-cream border-b border-blush-200 py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stationery-pattern opacity-30 pointer-events-none"></div>

        <ScrollReveal animation="fade-up" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="blush" size="md">
            Academic Penmanship
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900">
            Handwritten Academic Services
          </h1>
          <p className="font-serif text-base sm:text-xl text-rose-600 font-semibold italic max-w-2xl mx-auto">
            We follow the reference materials and instructions provided by students.
          </p>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            From university semester assignments to detailed laboratory record books, get your coursework written neatly, accurately, and ready for evaluation.
          </p>
        </ScrollReveal>
      </section>

      {/* Services Detailed Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <ScrollReveal
                key={service.id}
                animation="fade-up"
                delay={index * 120}
                className="flex"
              >
                <div
                  id={service.id}
                  className="w-full rounded-3xl bg-paper-pure p-8 border border-blush-300 shadow-paper flex flex-col justify-between hover:border-rose-400 transition-all scroll-mt-28"
                >
                  <div className="space-y-5">
                    {/* Top Bar with Icon & Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blush-100 text-rose-600">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="text-right">
                        <span className="font-serif text-xl sm:text-2xl font-bold text-rose-600 block">
                          {service.price}
                        </span>
                        <span className="text-[11px] text-charcoal-muted font-medium">
                          {service.unit}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl font-bold text-charcoal-800">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-rose-600 font-semibold mt-1">
                        {service.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-charcoal-600 mt-2.5 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Key Inclusions */}
                    <div className="space-y-2 pt-3 border-t border-blush-200">
                      <span className="text-xs font-bold text-charcoal-800 uppercase tracking-wider block">
                        What’s Included:
                      </span>
                      <ul className="space-y-1.5 text-xs text-charcoal-700">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-rose-500 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal for student note */}
                    <div className="rounded-xl bg-paper-cream p-3 border border-beige-dark text-xs text-charcoal-muted">
                      <strong className="text-charcoal-800">Ideal For:</strong> {service.idealFor}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="mt-8 pt-6 border-t border-blush-200 flex flex-col sm:flex-row items-center gap-3">
                    <Button
                      href={createWhatsAppUrl(service.whatsappMessage)}
                      isWhatsApp
                      size="md"
                      className="w-full sm:w-auto flex-1"
                    >
                      Order on WhatsApp
                    </Button>
                    <Button
                      to="/order"
                      variant="outline"
                      size="md"
                      className="w-full sm:w-auto"
                    >
                      Custom Order Builder
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Guidelines on Sending Reference Materials */}
      <section className="bg-paper-cream py-16 border-y border-blush-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="Student Instructions"
              title="How to Share Reference Materials"
              subtitle="Follow these quick guidelines when sending your course material via WhatsApp."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal animation="fade-up" delay={100} className="flex">
              <div className="w-full rounded-2xl bg-paper-pure p-6 border border-blush-300 shadow-xs space-y-2">
                <span className="text-rose-500 font-serif font-bold text-lg">01. Clear PDFs &amp; Photos</span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Send clean scans or clear smartphone camera photos. Make sure page numbers and question headings are visible.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200} className="flex">
              <div className="w-full rounded-2xl bg-paper-pure p-6 border border-blush-300 shadow-xs space-y-2">
                <span className="text-rose-500 font-serif font-bold text-lg">02. Formatting Guidelines</span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Mention if your teacher demands specific margin widths, blue or black gel ink, or double-sided writing.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300} className="flex">
              <div className="w-full rounded-2xl bg-paper-pure p-6 border border-blush-300 shadow-xs space-y-2">
                <span className="text-rose-500 font-serif font-bold text-lg">03. Exact Deadline</span>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  State your final submission date and time. We always aim to complete orders at least 24 hours prior to deadline.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Embedded Price Estimator */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="zoom-in" delay={100}>
          <PriceCalculator />
        </ScrollReveal>
      </section>
    </div>
  );
}


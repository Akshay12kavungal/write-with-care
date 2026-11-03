import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Send, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import InstagramIcon from '../components/common/InstagramIcon';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import SectionHeading from '../components/common/SectionHeading';
import ScrollReveal from '../components/common/ScrollReveal';
import EnquiryForm from '../components/forms/EnquiryForm';
import { 
  WHATSAPP_DISPLAY, 
  createWhatsAppUrl, 
  INSTAGRAM_HANDLE, 
  INSTAGRAM_URL, 
  BUSINESS_LOCATION 
} from '../utils/whatsapp';

export default function ContactPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="relative bg-paper-cream border-b border-blush-200 py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stationery-pattern opacity-30 pointer-events-none"></div>

        <ScrollReveal animation="fade-up" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="blush" size="md">
            Get in Touch
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900">
            Contact Write With Care
          </h1>
          <p className="font-serif text-base sm:text-xl text-rose-600 font-semibold italic max-w-2xl mx-auto">
            We are always here to assist with your handwritten assignments &amp; record books.
          </p>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Reach out via WhatsApp for fast responses, or configure your order in the interactive builder below to launch a pre-formatted chat instantly.
          </p>
        </ScrollReveal>
      </section>

      {/* Main Contact Grid: Details on Left, Enquiry Form on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Business Details Cards */}
          <ScrollReveal animation="fade-right" className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-paper-cream p-8 border border-blush-300 shadow-paper space-y-6">
              <div>
                <span className="font-handwriting text-rose-600 text-xl font-bold">
                  Write With Care
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal-800 mt-1">
                  Business Information
                </h3>
                <p className="text-xs text-charcoal-600 mt-1">
                  Your trusted handwriting partner for college assignments &amp; records.
                </p>
              </div>

              {/* Verified Contact Details List */}
              <div className="space-y-5 pt-4 border-t border-blush-200 text-xs sm:text-sm">
                {/* Business Name */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blush-100 text-rose-600 flex-shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-charcoal-muted uppercase tracking-wider block">
                      Business Name
                    </span>
                    <strong className="text-sm sm:text-base font-serif font-bold text-charcoal-900">
                      Write With Care
                    </strong>
                    <p className="text-[11px] text-rose-600 font-medium">Your Handwriting Partner!</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-charcoal-muted uppercase tracking-wider block">
                      Official WhatsApp Number
                    </span>
                    <a
                      href={createWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-emerald-700 hover:underline block"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                    <span className="text-[11px] text-charcoal-muted">Fast replies • Save for exam season</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blush-100 text-rose-600 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-charcoal-muted uppercase tracking-wider block">
                      Location
                    </span>
                    <strong className="text-sm font-semibold text-charcoal-900 block">
                      {BUSINESS_LOCATION}
                    </strong>
                    <span className="text-[11px] text-charcoal-muted">Serving all colleges across Kerala</span>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 flex-shrink-0">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-charcoal-muted uppercase tracking-wider block">
                      Instagram Page
                    </span>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-purple-700 hover:underline block"
                    >
                      @{INSTAGRAM_HANDLE}
                    </a>
                    <span className="text-[11px] text-charcoal-muted">Check our work highlights &amp; updates</span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blush-100 text-rose-600 flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-charcoal-muted uppercase tracking-wider block">
                      Working Hours
                    </span>
                    <span className="text-xs text-charcoal-800 font-semibold block">
                      Monday to Saturday: 8:00 AM – 10:00 PM
                    </span>
                    <span className="text-[11px] text-charcoal-muted">
                      WhatsApp order messages accepted 24/7
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-4 border-t border-blush-200">
                <Button
                  href={createWhatsAppUrl('Hello Write With Care! I would like to connect.')}
                  isWhatsApp
                  size="md"
                  className="w-full"
                >
                  Direct WhatsApp Chat
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive WhatsApp Order Builder */}
          <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-7">
            <EnquiryForm />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

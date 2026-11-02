import React from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  CheckCircle2, 
  FileText, 
  Clock, 
  ShieldCheck, 
  Truck,
  Send
} from 'lucide-react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import SectionHeading from '../components/common/SectionHeading';
import EnquiryForm from '../components/forms/EnquiryForm';
import PriceCalculator from '../components/common/PriceCalculator';
import { WHATSAPP_DISPLAY, createWhatsAppUrl } from '../utils/whatsapp';

export default function OrderPage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header Banner */}
      <section className="relative bg-paper-cream border-b border-blush-200 py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stationery-pattern opacity-30 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="rose" size="md">
            Fast Booking
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900">
            Place Your Handwriting Order
          </h1>
          <p className="font-serif text-base sm:text-xl text-rose-600 font-semibold italic max-w-2xl mx-auto">
            100% WhatsApp Direct Channel — Quick, Convenient &amp; Instant Confirmation.
          </p>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Assignments at ₹10 per page • Simple Record Writing at ₹5 per page. Follow your reference notes and instructions verbatim.
          </p>
        </div>
      </section>

      {/* Main Order Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Quick Pricing & Direct WhatsApp Fast Lane */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Priority Card */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-700 text-white p-6 sm:p-8 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs font-bold bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-xs">
                  Fastest Option
                </span>
                <MessageCircle className="h-6 w-6 text-white fill-current" />
              </div>

              <h3 className="font-serif text-2xl font-bold">
                Order Directly on WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
                Send your PDF materials or topic photos straight to our coordinator. Get immediate confirmation of price and turnaround time.
              </p>

              <div className="pt-2">
                <Button
                  href={createWhatsAppUrl('Hi Write With Care! I want to place an order for my college writing.')}
                  variant="primary"
                  size="lg"
                  className="w-full bg-white text-emerald-800 hover:bg-emerald-50 border-transparent shadow-lg font-bold"
                >
                  Open WhatsApp (88917 46484)
                </Button>
              </div>

              <div className="pt-3 border-t border-emerald-400/40 text-[11px] text-emerald-100 flex items-center justify-between">
                <span>✓ Average reply: Under 15 mins</span>
                <span>✓ 100% Student Care</span>
              </div>
            </div>

            {/* Price Calculator for quick checking */}
            <PriceCalculator />
          </div>

          {/* Right Column: Complete Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}


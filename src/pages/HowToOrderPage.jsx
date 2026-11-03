import React from 'react';
import { 
  MessageSquareText, 
  FolderKanban, 
  CalendarClock, 
  FileUp, 
  CheckCircle2, 
  Truck, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import SectionHeading from '../components/common/SectionHeading';
import ScrollReveal from '../components/common/ScrollReveal';
import { orderSteps, deliveryChannels } from '../data/howToOrderData';
import { WHATSAPP_DISPLAY, createWhatsAppUrl, BUSINESS_LOCATION } from '../utils/whatsapp';

export default function HowToOrderPage() {
  const getStepIcon = (num) => {
    switch (num) {
      case 1: return MessageSquareText;
      case 2: return FolderKanban;
      case 3: return CalendarClock;
      case 4: return FileUp;
      case 5: return CheckCircle2;
      default: return CheckCircle2;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="relative bg-paper-cream border-b border-blush-200 py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stationery-pattern opacity-30 pointer-events-none"></div>

        <ScrollReveal animation="fade-up" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="blush" size="md">
            Seamless &amp; Transparent
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900">
            How to Order Your Handwritten Work
          </h1>
          <p className="font-serif text-base sm:text-xl text-rose-600 font-semibold italic max-w-2xl mx-auto">
            From initial enquiry to completed pages in 5 simple steps.
          </p>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            We make ordering effortless. No complicated registration required—just connect directly with us on WhatsApp or submit our quick order form.
          </p>

          <div className="pt-4">
            <Button
              href={createWhatsAppUrl('Hello Write With Care! I would like to place an order.')}
              isWhatsApp
              size="lg"
            >
              Order Through WhatsApp (88917 46484)
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* 5-Step Order Process Details */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <ScrollReveal animation="fade-up">
          <SectionHeading
            eyebrow="Step-by-Step Guide"
            title="The 5 Simple Ordering Steps"
            subtitle="Everything you need to provide for a smooth, high-scoring submission."
          />
        </ScrollReveal>

        <div className="space-y-6">
          {orderSteps.map((step, idx) => {
            const Icon = getStepIcon(step.step);
            return (
              <ScrollReveal
                key={step.step}
                animation="fade-up"
                delay={idx * 100}
              >
                <div className="rounded-3xl bg-paper-pure p-6 sm:p-8 border border-blush-300 shadow-soft flex flex-col md:flex-row items-start gap-6 hover:shadow-card-hover transition-all">
                  {/* Step Number Circle */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 text-white font-serif font-bold text-xl shadow-md flex-shrink-0">
                    0{step.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-rose-500" />
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal-800">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="rounded-xl bg-blush-50/70 p-3 border border-blush-200/80 text-xs text-charcoal-700 flex items-center gap-2 mt-2">
                      <span className="text-rose-500 font-bold">Tip:</span>
                      <span>{step.tip}</span>
                    </div>
                  </div>

                  {/* Quick Action for Step 1 */}
                  {step.step === 1 && (
                    <div className="w-full md:w-auto self-center md:self-auto pt-2 md:pt-0">
                      <Button
                        href={createWhatsAppUrl('Hello Write With Care! I would like to start my order.')}
                        isWhatsApp
                        size="sm"
                        className="w-full md:w-auto"
                      >
                        Chat Now
                      </Button>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Big Prominent Order Through WhatsApp Button */}
        <ScrollReveal animation="zoom-in" delay={150} className="p-8 rounded-3xl bg-paper-cream border-2 border-blush-300 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-charcoal-800">
            Ready to Hand Over Your Writing Task?
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-md mx-auto">
            Click below to initiate your order directly with our writing coordinator on WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              href={createWhatsAppUrl('Hello Write With Care! I am ready to share my assignment details.')}
              isWhatsApp
              size="lg"
            >
              Order Through WhatsApp
            </Button>
            <Button to="/order" variant="secondary" size="lg">
              WhatsApp Order Builder
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Delivery & Shipping Across Malappuram & Kerala */}
      <section className="bg-paper-cream py-16 border-y border-blush-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <ScrollReveal animation="fade-up">
            <SectionHeading
              eyebrow="Safe &amp; On-Time Delivery"
              title="How You Receive Your Handwritten Work"
              subtitle="Convenient pickup and dispatch channels throughout Malappuram district and all across Kerala."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryChannels.map((channel, i) => (
              <ScrollReveal
                key={i}
                animation="fade-up"
                delay={i * 120}
              >
                <div className="h-full rounded-3xl bg-paper-pure p-6 sm:p-8 border border-blush-300 shadow-soft space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blush-100 text-rose-600">
                      <Truck className="h-5 w-5" />
                    </div>
                    <Badge variant="blush" size="sm">
                      {channel.badge}
                    </Badge>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-charcoal-800">
                    {channel.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {channel.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="text-center text-xs text-charcoal-muted">
            * Courier / delivery charges are extra, where applicable. Express delivery options can be arranged for urgent internal marks deadlines.
          </p>
        </div>
      </section>
    </div>
  );
}


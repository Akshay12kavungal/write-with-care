import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Feather, 
  Clock, 
  Tag, 
  Heart, 
  ShieldCheck, 
  BookOpen, 
  MapPin, 
  Phone, 
  ArrowRight 
} from 'lucide-react';
import InstagramIcon from '../components/common/InstagramIcon';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import SectionHeading from '../components/common/SectionHeading';
import { coreValues } from '../data/servicesData';
import { trustStats } from '../data/reviewsData';
import { WHATSAPP_DISPLAY, createWhatsAppUrl, INSTAGRAM_HANDLE, INSTAGRAM_URL, BUSINESS_LOCATION } from '../utils/whatsapp';

export default function AboutPage() {
  const focusAreas = [
    {
      title: 'Neat and Beautiful Handwriting',
      desc: 'Uniform letter size, consistent slant, clean loops, and zero messy corrections.',
      icon: Feather
    },
    {
      title: 'Quality and Organised Work',
      desc: 'Disciplined 3cm margins, highlighted subheadings, and clear bullet points.',
      icon: Sparkles
    },
    {
      title: 'Timely Completion',
      desc: 'Guaranteed turnaround scheduled ahead of your university or college submission dates.',
      icon: Clock
    },
    {
      title: 'Affordable Pricing',
      desc: 'Transparent ₹10/page assignments and ₹5/page records tailored to student budgets.',
      icon: Tag
    },
    {
      title: 'Customer Satisfaction',
      desc: 'We share preview photos before final handover so you are 100% happy with your work.',
      icon: Heart
    }
  ];

  const writingMaterials = [
    {
      title: 'Paper Varieties',
      desc: 'Standard A4 ruled sheets, unruled assignment paper, laboratory record notebooks, and custom college stationery.'
    },
    {
      title: 'Pen Selection',
      desc: 'High-density black and royal blue waterproof gel pens, smooth micro-tip ballpoints, and calligraphy markers.'
    },
    {
      title: 'Formatting Discipline',
      desc: 'Uniform top, bottom, and left margins. Clear title boxes, formula highlights, and numbered experiment sections.'
    },
    {
      title: 'Safe Packing',
      desc: 'Waterproof protective sleeves and sturdy cardboard backing for postal courier dispatches across Kerala.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Header Banner */}
      <section className="relative bg-paper-cream border-b border-blush-200 py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stationery-pattern opacity-30 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="blush" size="md">
            Our Story &amp; Academic Philosophy
          </Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900">
            About Write With Care
          </h1>
          <p className="font-serif text-lg sm:text-xl text-rose-600 font-semibold italic max-w-2xl mx-auto">
            Your Dedicated Handwriting Partner in Malappuram, Kerala
          </p>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-3xl mx-auto leading-relaxed pt-2">
            Write With Care is a handwritten academic writing service dedicated to providing neat, clear and quality handwriting. Our aim is to help students with handwritten assignments, record writing and academic presentation.
          </p>
        </div>
      </section>

      {/* 2. Brand Highlight Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-blush-100 via-beige to-blush-200 p-8 sm:p-12 border-2 border-rose-300/80 shadow-paper text-center">
          <span className="font-handwriting text-rose-600 text-base sm:text-xl font-bold tracking-wider uppercase block mb-1">
            Our Unwavering Promise
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            “Every Page Is Written With Care!”
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
            We understand that university evaluations reflect not just your research, but also the clarity of your presentation. We never rush through pages. Every single page is crafted with patience, precision, and student pride.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button
              href={createWhatsAppUrl('Hi Write With Care, I would like to know more about your handwriting services.')}
              isWhatsApp
              size="md"
            >
              Chat With Our Writer
            </Button>
            <Button to="/order" variant="secondary" size="md">
              Place Your Order
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Our 5 Core Focus Points */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Commitment to Excellence"
          title="Our 5 Core Focus Pillars"
          subtitle="How Write With Care maintains top-tier standards across every single order."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((focus, index) => {
            const Icon = focus.icon;
            return (
              <div
                key={index}
                className="rounded-3xl bg-paper-pure p-6 sm:p-8 border border-blush-300 shadow-soft flex flex-col justify-between hover:shadow-card-hover transition-all"
              >
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-100 text-rose-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal-800">
                    {focus.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {focus.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-blush-200/60 flex items-center gap-2 text-xs text-rose-600 font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Strict Quality Guarantee</span>
                </div>
              </div>
            );
          })}

          {/* Quick summary card */}
          <div className="rounded-3xl bg-charcoal-900 text-paper-cream p-6 sm:p-8 border border-charcoal-700 shadow-soft flex flex-col justify-between">
            <div className="space-y-3">
              <Badge variant="rose" size="sm">
                Student First
              </Badge>
              <h3 className="font-serif text-xl font-bold text-white">
                Made for Kerala College Students
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed">
                Whether you study at Calicut University, a polytechnic in Manjeri, or a degree college in Malappuram, our service bridges the gap between busy schedules and assignment excellence.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-charcoal-700">
              <span className="font-handwriting text-blush-200 text-lg">
                Your reliable penmanship partner
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Materials & Presentation Standards */}
      <section className="bg-paper-cream py-16 sm:py-20 border-y border-blush-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Craftsmanship"
            title="Materials &amp; Quality Standards"
            subtitle="We don't compromise on paper quality, ink consistency, or layout discipline."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {writingMaterials.map((mat, i) => (
              <div
                key={i}
                className="rounded-2xl bg-paper-pure p-6 border border-blush-300 shadow-xs space-y-3"
              >
                <div className="font-serif font-bold text-rose-600 text-lg">
                  0{i + 1}.
                </div>
                <h4 className="font-serif font-bold text-base text-charcoal-800">
                  {mat.title}
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {mat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Location & Contact Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-paper-pure p-8 sm:p-10 border border-blush-300 shadow-paper flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
              Local Kerala Service
            </span>
            <h3 className="font-serif text-2xl font-bold text-charcoal-800">
              Based in Malappuram District, Kerala
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600">
              WhatsApp: <strong className="text-charcoal-900">{WHATSAPP_DISPLAY}</strong> &bull; Instagram: <strong className="text-charcoal-900">@{INSTAGRAM_HANDLE}</strong>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              href={createWhatsAppUrl('Hello Write With Care! I would like to discuss my writing order.')}
              isWhatsApp
              size="md"
            >
              Order on WhatsApp
            </Button>
            <Button to="/services" variant="outline" size="md">
              Browse Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

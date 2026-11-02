import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Star, 
  Feather, 
  Clock, 
  Tag, 
  BookOpen, 
  FileSpreadsheet, 
  FileText, 
  PenTool, 
  Truck, 
  MapPin, 
  Phone,
  ShieldCheck,
  ChevronRight,
  Zap,
  Award
} from 'lucide-react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import StickyNote from '../components/common/StickyNote';
import SectionHeading from '../components/common/SectionHeading';
import HandwritingShowcase from '../components/common/HandwritingShowcase';
import PresentationComparison from '../components/common/PresentationComparison';
import PriceCalculator from '../components/common/PriceCalculator';
import GalleryCard from '../components/gallery/GalleryCard';
import GalleryLightbox from '../components/gallery/GalleryLightbox';
import { servicesData, coreValues } from '../data/servicesData';
import { officialPricing } from '../data/pricingData';
import { orderSteps } from '../data/howToOrderData';
import { galleryItems } from '../data/galleryData';
import { studentReviews, trustStats } from '../data/reviewsData';
import { WHATSAPP_DISPLAY, createWhatsAppUrl, INSTAGRAM_HANDLE, INSTAGRAM_URL, BUSINESS_LOCATION } from '../utils/whatsapp';

export default function HomePage() {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  const getServiceIcon = (name) => {
    switch (name) {
      case 'BookOpen': return BookOpen;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'FileText': return FileText;
      case 'PenTool': return PenTool;
      default: return Feather;
    }
  };

  const getValueIcon = (name) => {
    switch (name) {
      case 'Feather': return Feather;
      case 'Sparkles': return Sparkles;
      case 'Tag': return Tag;
      case 'Clock': return Clock;
      default: return CheckCircle2;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-32 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 sm:pt-16 pb-16 bg-gradient-to-b from-paper-cream via-paper-pure to-paper-cream border-b border-blush-200">
        {/* Subtle lined paper background */}
        <div className="absolute inset-0 bg-stationery-pattern opacity-40 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-blush-100/90 border border-blush-300 px-4 py-1.5 text-xs font-semibold text-rose-700 shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-rose-500 animate-pulse" />
                <span>Malappuram’s #1 Academic Handwriting Partner</span>
              </div>

              {/* Title & Taglines */}
              <div className="space-y-2.5">
                <span className="font-handwriting text-3xl sm:text-4xl lg:text-5xl text-rose-600 font-bold block transform -rotate-1">
                  Your Handwriting Partner!
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal-900 leading-[1.15]">
                  WRITE WITH CARE
                </h1>
                <p className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-charcoal-700 italic">
                  Beautiful Handwriting. Quality Work. Affordable Prices.
                </p>
              </div>

              {/* Mission Quote */}
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                "We provide neat and well-organised handwritten academic writing services for college students. From assignments to record writing, we help make your academic work presentable, clear and easy to read."
              </p>

              {/* 4 Core Value Highlights (Stationery card pills) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {coreValues.map((val) => {
                  const Icon = getValueIcon(val.icon);
                  return (
                    <div
                      key={val.title}
                      className="group flex flex-col items-center lg:items-start p-3.5 rounded-2xl bg-paper-pure border border-blush-300/80 shadow-xs hover:shadow-md hover:border-rose-400 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blush-100 text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-colors mb-2">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-serif font-bold text-xs sm:text-sm text-charcoal-800 text-center lg:text-left">
                        {val.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
                <Button
                  to="/order"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto ring-4 ring-rose-400/25 shadow-lg"
                >
                  Order Now
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Contact Us
                </Button>
                <Button
                  href={createWhatsAppUrl('Hello Write With Care! I would like to inquire about handwriting my college assignment.')}
                  isWhatsApp
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  WhatsApp: 88917 46484
                </Button>
              </div>

              {/* Location & Pricing Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-charcoal-muted font-medium">
                <span className="inline-flex items-center gap-1.5 bg-paper-pure px-3 py-1 rounded-full border border-blush-200">
                  <MapPin className="h-3.5 w-3.5 text-rose-500" />
                  <span>Malappuram District, Kerala</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-paper-pure px-3 py-1 rounded-full border border-blush-200 font-bold text-rose-700">
                  <span>Assignments: ₹10/pg</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-paper-pure px-3 py-1 rounded-full border border-blush-200 font-bold text-rose-700">
                  <span>Records: ₹5/pg</span>
                </span>
              </div>
            </div>

            {/* Right Column: Hero Artwork / Notebook Illustration with Sticky Notes */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none">
                {/* Floating soft aura */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blush-200 via-beige to-rose-200 rounded-3xl opacity-70 blur-xl transform -rotate-2"></div>

                {/* Artwork Container */}
                <div className="relative rounded-3xl bg-paper-pure p-3 sm:p-5 border-2 border-blush-300 shadow-stationery overflow-hidden">
                  <img
                    src="/images/hero-art.svg"
                    alt="Write With Care stationery and handwriting composition"
                    className="w-full h-auto object-contain rounded-2xl"
                  />

                  {/* Floating Sticky Note Memo Accent */}
                  <div className="mt-3">
                    <StickyNote color="yellow" rotate={-1} title="Semester Reminder">
                      "Send your assignment PDFs or record topics early to ensure delivery well before submission day!"
                    </StickyNote>
                  </div>
                </div>

                {/* Floating wax seal badge */}
                <div className="absolute -bottom-6 -left-4 hidden sm:flex items-center gap-3 bg-paper-pure/95 backdrop-blur-sm p-3.5 rounded-2xl shadow-stationery border border-blush-300">
                  <div className="h-10 w-10 rounded-full wax-seal flex items-center justify-center text-white font-serif font-bold text-xs">
                    WWC
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-xs text-charcoal-900">Verified Quality</h5>
                    <p className="text-[10px] text-rose-600 font-medium">100% Student Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 relative z-10">
        <div className="rounded-3xl bg-charcoal-900 text-white p-6 sm:p-8 shadow-2xl border-t-4 border-blush grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustStats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-blush-200">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-charcoal-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE HANDWRITING STYLE SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          eyebrow="Explore Our Handwriting"
          title="Live Penmanship &amp; Format Preview"
          subtitle="Test out different handwriting styles, margin rules, and paper layouts before placing your order."
        />

        <HandwritingShowcase onZoomItem={(item) => setSelectedGalleryItem(item)} />
      </section>

      {/* 4. THE PRESENTATION ADVANTAGE: BEFORE VS AFTER COMPARISON */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PresentationComparison />
      </section>

      {/* 5. ABOUT PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: About Text */}
          <div className="lg:col-span-7 space-y-5">
            <SectionHeading
              eyebrow="Dedicated Handwriting Partner"
              title="About Write With Care"
              subtitle="Write With Care is a handwritten academic writing service dedicated to providing neat, clear and quality handwriting for students across Malappuram and Kerala."
              center={false}
            />

            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
              Our aim is to help students with handwritten assignments, record writing, and academic presentation. When deadlines pile up during internal exams or lab submissions, we provide the steady, patient penmanship you need to submit top-scoring work with confidence.
            </p>

            {/* Core Focus points */}
            <div className="space-y-3 pt-2">
              <h4 className="font-serif text-sm font-bold text-charcoal-800 uppercase tracking-wider">
                Our Core Focus:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Neat and beautiful handwriting',
                  'Quality and organised work',
                  'Timely completion',
                  'Affordable pricing',
                  'Customer satisfaction'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-charcoal-700">
                    <CheckCircle2 className="h-4 w-4 text-rose-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prominent Quote Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blush-100 via-beige to-blush-50 border-l-4 border-rose-500 text-charcoal-800 shadow-xs">
              <p className="font-handwriting text-2xl sm:text-3xl text-rose-700 font-bold">
                "Every Page Is Written With Care!"
              </p>
              <p className="text-xs text-charcoal-muted mt-1 font-medium">
                WRITE WITH CARE — Every Word, Every Page, With Care!
              </p>
            </div>

            <div className="pt-2">
              <Button to="/about" variant="outline" size="md" icon={ArrowRight} iconPosition="right">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Right: Stationery Card Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-paper-pure p-6 sm:p-8 border-2 border-blush-300 shadow-stationery space-y-4">
              <div className="washi-tape-rose"></div>

              <Badge variant="rose" size="md">
                Why Students Choose Us
              </Badge>
              <h3 className="font-serif text-2xl font-bold text-charcoal-800">
                Reliable academic handwriting designed for top marks.
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Lecturers and evaluators value neatness and structure. Our written work follows strict university standards with balanced margins, legible headers, and accurate reference following.
              </p>

              <div className="pt-4 border-t border-blush-200/80 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blush-200 text-rose-700 font-bold text-xs flex-shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-charcoal-800">Bilingual Script Mastery</h4>
                    <p className="text-[11px] text-charcoal-muted">Graceful English cursive and authentic Malayalam aksharangal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blush-200 text-rose-700 font-bold text-xs flex-shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-charcoal-800">Strict Syllabus Adherence</h4>
                    <p className="text-[11px] text-charcoal-muted">We follow student PDFs, drafts, and notes verbatim.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blush-200 text-rose-700 font-bold text-xs flex-shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-charcoal-800">Speedy Courier &amp; Pickup</h4>
                    <p className="text-[11px] text-charcoal-muted">Fast local handoff in Malappuram or Speed Post across Kerala.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section className="bg-paper-cream py-16 sm:py-24 border-y border-blush-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Academic Services"
            title="What We Write For You"
            subtitle="We follow the reference materials and instructions provided by students to ensure flawless college submissions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => {
              const Icon = getServiceIcon(service.iconName);
              return (
                <div
                  key={service.id}
                  className="flex flex-col justify-between rounded-3xl bg-paper-pure p-6 border-2 border-blush-300 shadow-soft hover:shadow-stationery-hover transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Icon and price badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-100 text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-serif font-bold text-xs bg-beige-light px-2.5 py-1 rounded-full border border-beige-dark text-charcoal-800">
                        {service.price}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-bold text-charcoal-800 group-hover:text-rose-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs text-rose-600 font-medium">
                        {service.tagline}
                      </p>
                      <p className="mt-2 text-xs text-charcoal-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features preview */}
                    <ul className="space-y-1.5 pt-2 border-t border-blush-200/60 text-[11px] text-charcoal-600">
                      {service.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-rose-500 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-blush-200/60 flex items-center justify-between gap-2">
                    <Button
                      href={createWhatsAppUrl(service.whatsappMessage)}
                      isWhatsApp
                      size="sm"
                      className="w-full text-xs"
                    >
                      Order on WhatsApp
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <Button to="/services" variant="secondary" size="md" icon={ArrowRight} iconPosition="right">
              View All Service Details &amp; Options
            </Button>
          </div>
        </div>
      </section>

      {/* 7. PRICING & INTERACTIVE CALCULATOR PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Transparent Student Pricing"
          title="Simple, Affordable Rates"
          subtitle="No hidden costs. College-friendly rates verified for students across Kerala."
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {officialPricing.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-paper-pure p-8 border-2 border-blush-300 shadow-stationery flex flex-col justify-between hover:border-rose-400 transition-colors"
            >
              <div className="washi-tape-rose"></div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <Badge variant="rose" size="md">
                    {item.highlight}
                  </Badge>
                  <span className="text-xs text-charcoal-muted font-medium">Standard Academic Sheet</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-charcoal-800">
                  {item.service}
                </h3>
                
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl sm:text-5xl font-extrabold text-rose-600">
                    {item.price}
                  </span>
                  <span className="text-sm font-semibold text-charcoal-600">
                    {item.unit}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-2 pt-4 border-t border-blush-200 text-xs sm:text-sm text-charcoal-700">
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
                  to="/order"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Book This Service
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Estimator Embedded */}
        <div className="max-w-3xl mx-auto pt-4">
          <PriceCalculator />
        </div>
      </section>

      {/* 8. HOW TO ORDER SECTION */}
      <section className="bg-paper-cream py-16 sm:py-20 border-y border-blush-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Simple 5-Step Process"
            title="How to Order in Minutes"
            subtitle="Follow these simple steps to receive neat, ready-to-submit handwritten work."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {orderSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl bg-paper-pure p-5 border border-blush-300 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white font-serif font-bold text-sm shadow-xs">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                      Step 0{step.step}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-charcoal-800 mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {step.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-beige-dark/60 text-[10px] text-charcoal-muted italic">
                  💡 {step.tip}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Button
              href={createWhatsAppUrl('Hello Write With Care! I would like to place an order.')}
              isWhatsApp
              size="lg"
            >
              Order Through WhatsApp (88917 46484)
            </Button>
          </div>
        </div>
      </section>

      {/* 9. GALLERY PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <SectionHeading
            eyebrow="Authentic Formats &amp; Samples"
            title="Handwriting Gallery Preview"
            subtitle="Explore our sample presentation formats for assignments, records, Malayalam, and English penmanship."
            center={false}
          />

          <Button to="/gallery" variant="outline" size="md" icon={ArrowRight} iconPosition="right">
            View All Samples
          </Button>
        </div>

        {/* Gallery Cards Grid (First 3 samples preview) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.slice(0, 3).map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onZoom={(selected) => setSelectedGalleryItem(selected)}
            />
          ))}
        </div>

        {/* Sample Disclaimer Banner */}
        <div className="rounded-2xl bg-blush-50 p-4 border border-blush-200 text-center text-xs text-charcoal-muted">
          <strong className="text-charcoal-800">Authentic Presentation Preview:</strong> All samples illustrate real layout structures, margin disciplines, and handwriting styles provided by Write With Care. Student submissions remain 100% confidential.
        </div>
      </section>

      {/* 10. CUSTOMER REVIEWS SECTION */}
      <section className="bg-paper-cream py-16 sm:py-20 border-y border-blush-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Student Testimonials"
            title="Loved by College Students Across Kerala"
            subtitle="Real feedback from students studying in Calicut University, government, and private colleges in Malappuram."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentReviews.map((rev) => (
              <div
                key={rev.id}
                className="flex flex-col justify-between rounded-3xl bg-paper-pure p-6 border border-blush-300 shadow-soft hover:shadow-stationery transition-all"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-blush-200">
                  <h4 className="font-serif font-bold text-sm text-charcoal-900">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-rose-600 font-medium">
                    {rev.course}
                  </p>
                  <p className="text-[10px] text-charcoal-muted">
                    {rev.college}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONTACT DETAILS & CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-charcoal via-charcoal-800 to-charcoal text-paper-cream p-8 sm:p-12 overflow-hidden shadow-2xl border-t-4 border-blush">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="rose" size="md">
                Fast Response Guaranteed
              </Badge>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Have an Assignment Deadline Approaching?
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed max-w-2xl">
                Don’t worry about burning the midnight oil or ruining your handwriting. Send us your reference notes on WhatsApp today and get your handwritten work delivered neatly on time.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-blush-200">
                <span className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-rose-400" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-rose-400" />
                  <span>{BUSINESS_LOCATION}</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button
                href={createWhatsAppUrl('Hello Write With Care! I need to discuss an urgent assignment.')}
                isWhatsApp
                size="lg"
                className="w-full text-center"
              >
                Chat on WhatsApp Now
              </Button>
              <Button
                to="/order"
                variant="soft"
                size="lg"
                className="w-full text-center"
              >
                WhatsApp Order Builder
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedGalleryItem && (
        <GalleryLightbox
          item={selectedGalleryItem}
          onClose={() => setSelectedGalleryItem(null)}
        />
      )}
    </div>
  );
}

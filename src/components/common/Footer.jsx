import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import Logo from './Logo';
import Button from './Button';
import { 
  WHATSAPP_DISPLAY, 
  WHATSAPP_NUMBER, 
  createWhatsAppUrl, 
  INSTAGRAM_HANDLE, 
  INSTAGRAM_URL, 
  BUSINESS_LOCATION 
} from '../../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: 'College Assignments (₹10/pg)', path: '/services#assignments' },
    { name: 'Simple Record Writing (₹5/pg)', path: '/services#record-writing' },
    { name: 'Notes Copying', path: '/services#notes-copying' },
    { name: 'Malayalam & English Handwriting', path: '/services#bilingual-handwriting' },
    { name: 'Price List & Calculator', path: '/pricing' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'All Services', path: '/services' },
    { name: 'Official Price List', path: '/pricing' },
    { name: 'Handwriting Gallery', path: '/gallery' },
    { name: 'How to Order (5 Steps)', path: '/how-to-order' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Order Now', path: '/order' },
  ];

  return (
    <footer className="relative bg-charcoal-900 text-paper-cream overflow-hidden border-t-4 border-blush">
      {/* Decorative notebook top trim */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blush via-rose-500 to-blush"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Bio & Values */}
          <div className="lg:col-span-4 space-y-4">
            <Logo isLight showTagline />
            
            <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed pt-2">
              We provide neat and well-organised handwritten academic writing services for college students. From assignments to record writing, we help make your academic work presentable, clear, and easy to read.
            </p>

            {/* Brand Motto Callout */}
            <div className="rounded-2xl bg-charcoal-800/80 p-4 border border-charcoal-700">
              <span className="font-handwriting text-rose-300 text-lg sm:text-xl font-bold block">
                "Every Page Is Written With Care!"
              </span>
              <p className="text-[11px] text-charcoal-300 mt-1">
                WRITE WITH CARE — Every Word, Every Page, With Care!
              </p>
            </div>

            {/* Social & WhatsApp Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={createWhatsAppUrl('Hello Write With Care!')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white hover:scale-105 transition-transform shadow-md"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white hover:scale-105 transition-transform shadow-md"
                title="Follow on Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <span className="text-xs text-charcoal-300 pl-1 font-medium">
                @{INSTAGRAM_HANDLE}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide border-b border-charcoal-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-charcoal-300 hover:text-blush-200 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-rose-400 text-xs">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide border-b border-charcoal-700 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicesLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-charcoal-300 hover:text-blush-200 transition-colors flex items-center justify-between"
                  >
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <span className="text-[11px] text-charcoal-400 block">
                Kerala University &bull; Calicut University &bull; MG University Syllabus Compliant
              </span>
            </div>
          </div>

          {/* Contact Details & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide border-b border-charcoal-700 pb-2">
              Contact Details
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-charcoal-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Location:</strong>
                  <span>{BUSINESS_LOCATION}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">WhatsApp &amp; Calls:</strong>
                  <a 
                    href={createWhatsAppUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blush-200 hover:underline"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <InstagramIcon className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Instagram:</strong>
                  <a 
                    href={INSTAGRAM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blush-200 hover:underline"
                  >
                    @{INSTAGRAM_HANDLE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Working Hours:</strong>
                  <span>Mon - Sat: 8:00 AM - 10:00 PM</span>
                  <span className="block text-[11px] text-charcoal-400">WhatsApp orders open 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner with Verification Pill */}
        <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <p>
            &copy; {currentYear} <strong className="text-white">Write With Care</strong>. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] bg-charcoal-800 px-3 py-1 rounded-full text-blush-200 border border-charcoal-700">
              <CheckCircle2 className="h-3 w-3 text-emerald-400" />
              <span>Verified Handwritten Service &bull; Malappuram, Kerala</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

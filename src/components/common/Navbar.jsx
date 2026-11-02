import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, MapPin, Sparkles } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import Logo from './Logo';
import Button from './Button';
import { WHATSAPP_DISPLAY, createWhatsAppUrl, INSTAGRAM_URL, BUSINESS_LOCATION } from '../../utils/whatsapp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Price List', path: '/pricing' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'How to Order', path: '/how-to-order' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top Student Announcement Bar */}
      <div className="bg-gradient-to-r from-charcoal via-charcoal-800 to-charcoal text-paper-cream py-1.5 px-4 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-rose-400 animate-pulse"></span>
            <span className="text-[11px] sm:text-xs">
              Handwritten Academic Writing in Malappuram, Kerala • College Assignments ₹10/pg • Records ₹5/pg
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-blush-200">
            <a 
              href={`tel:+91${WHATSAPP_DISPLAY.replace(/\s+/g, '')}`} 
              className="hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>
            <span className="text-charcoal-500">|</span>
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <InstagramIcon className="h-3 w-3" />
              <span>@perfectpenworks</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-paper-pure/95 backdrop-blur-md shadow-sm border-b border-blush-200 py-2.5' 
          : 'bg-paper-pure/80 backdrop-blur-sm border-b border-blush-200/50 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-rose-600 bg-blush-100/70 font-semibold shadow-xs'
                        : 'text-charcoal-700 hover:text-rose-600 hover:bg-paper-cream'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Action Buttons (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                href={createWhatsAppUrl('Hi Write With Care, I would like to order handwritten writing for my college assignment/record.')}
                isWhatsApp
                size="sm"
                className="hidden xl:inline-flex"
              >
                WhatsApp
              </Button>
              <Button
                to="/order"
                variant="primary"
                size="sm"
                className="ring-2 ring-rose-400/30"
              >
                Order Now
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                to="/order"
                variant="primary"
                size="sm"
                className="text-xs px-3 py-1.5"
              >
                Order Now
              </Button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-charcoal-700 hover:text-rose-600 hover:bg-blush-100 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-blush-200 bg-paper-pure px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-xl">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blush-100 text-rose-700 font-semibold'
                        : 'text-charcoal-700 hover:bg-paper-cream hover:text-rose-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="pt-4 border-t border-blush-200/60 flex flex-col gap-2">
              <Button
                to="/order"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Order Now (Get Started)
              </Button>
              <Button
                href={createWhatsAppUrl('Hi Write With Care, I would like to enquire about handwritten writing.')}
                isWhatsApp
                size="md"
                className="w-full"
              >
                Chat on WhatsApp (88917 46484)
              </Button>
            </div>

            <div className="pt-2 text-center text-xs text-charcoal-muted">
              📍 Malappuram District, Kerala, India
            </div>
          </div>
        )}
      </header>
    </>
  );
}

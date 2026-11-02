import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Phone, CheckCheck } from 'lucide-react';
import { createWhatsAppUrl, WHATSAPP_DISPLAY } from '../../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const quickPills = [
    {
      label: '📄 Assignment (₹10/pg)',
      text: 'Hi Write With Care! I want to order College Assignment Writing (₹10/page).'
    },
    {
      label: '🔬 Lab Record (₹5/pg)',
      text: 'Hi Write With Care! I need Simple Record Writing (₹5/page) for my practicals.'
    },
    {
      label: '⚡ Urgent Order (24-48 hrs)',
      text: 'Hi Write With Care! I have an urgent assignment deadline coming up. Are you available?'
    },
    {
      label: '🌺 Malayalam Writing',
      text: 'Hi Write With Care! I would like to inquire about Malayalam handwriting service.'
    }
  ];

  const handlePillClick = (text) => {
    window.open(createWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {/* Interactive Micro-Chat Window */}
      {isOpen && (
        <div className="w-[320px] sm:w-[350px] rounded-3xl bg-paper-pure shadow-2xl border-2 border-blush-300 overflow-hidden animate-fade-in transition-all">
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white font-serif font-bold text-base ring-2 ring-white/40">
                ✍️
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-emerald-600"></span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm leading-tight">
                  Write With Care
                </h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>● Online</span> &bull; <span>Malappuram, Kerala</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              title="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="p-4 bg-paper-cream/80 space-y-3 max-h-[280px] overflow-y-auto">
            <div className="rounded-2xl bg-paper-pure p-3.5 shadow-xs border border-blush-200 text-xs text-charcoal-800 space-y-1">
              <p className="font-semibold text-rose-600">
                👋 Hello student!
              </p>
              <p className="leading-relaxed">
                Need your college assignments or practical record book written neatly? We write at <strong>₹5 - ₹10 per page</strong>!
              </p>
              <div className="flex items-center justify-end gap-1 text-[10px] text-charcoal-muted pt-1">
                <span>Just now</span>
                <CheckCheck className="h-3 w-3 text-emerald-600" />
              </div>
            </div>

            {/* Quick action chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold text-charcoal-muted uppercase tracking-wider block">
                Tap to order instantly:
              </span>
              <div className="flex flex-col gap-1.5">
                {quickPills.map((pill, i) => (
                  <button
                    key={i}
                    onClick={() => handlePillClick(pill.text)}
                    className="text-left px-3 py-2 rounded-xl text-xs font-medium bg-paper-pure hover:bg-blush-100 text-charcoal-800 border border-blush-200 hover:border-rose-400 transition-colors flex items-center justify-between group shadow-2xs"
                  >
                    <span>{pill.label}</span>
                    <span className="text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Direct WhatsApp Link */}
          <div className="p-3 bg-paper-pure border-t border-blush-200">
            <a
              href={createWhatsAppUrl('Hello Write With Care! I would like to chat.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs shadow-md transition-all"
            >
              <MessageCircle className="h-4 w-4 fill-current" />
              <span>Start WhatsApp Chat ({WHATSAPP_DISPLAY})</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 rounded-full bg-paper-pure px-3.5 py-2 shadow-lg border border-blush-300 text-xs font-bold text-charcoal-800 hover:bg-blush-50 transition-all hover:scale-105"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Need handwriting help?</span>
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle WhatsApp chat widget"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20BD5A] hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-white/80 focus:outline-none"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <>
              <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 blur-sm group-hover:opacity-75 transition-opacity animate-pulse"></span>
              <MessageCircle className="relative h-7 w-7 fill-current drop-shadow" />
              <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

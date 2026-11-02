import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, Home, MessageCircle } from 'lucide-react';
import Button from '../components/common/Button';
import { createWhatsAppUrl } from '../utils/whatsapp';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-paper-cream">
      <div className="max-w-md w-full text-center rounded-3xl bg-paper-pure p-8 sm:p-10 border border-blush-300 shadow-paper space-y-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blush-100 text-rose-600 mx-auto">
          <FileQuestion className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <span className="font-handwriting text-rose-600 text-2xl font-bold">
            Page Not Found
          </span>
          <h1 className="font-serif text-3xl font-bold text-charcoal-800">
            404 Error
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            Oops! The page you were looking for seems to have been erased or misplaced. Let’s get you back to the right notebook page!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button to="/" variant="primary" size="md" icon={Home} className="w-full sm:w-auto">
            Back to Home
          </Button>
          <Button
            href={createWhatsAppUrl('Hi Write With Care, I need help navigating your website.')}
            isWhatsApp
            size="md"
            className="w-full sm:w-auto"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}


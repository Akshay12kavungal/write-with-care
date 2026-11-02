import React, { useState, useId } from 'react';
import { 
  MessageCircle, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  User, 
  GraduationCap, 
  Phone, 
  FileText, 
  Globe, 
  Layers, 
  Calendar, 
  Clock, 
  Zap, 
  ExternalLink,
  ShieldCheck,
  CheckCheck
} from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { 
  createWhatsAppUrl, 
  buildOrderMessage, 
  WHATSAPP_DISPLAY, 
  quickOrderPresets 
} from '../../utils/whatsapp';

export default function EnquiryForm({ initialService = 'College Assignment Writing', className = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    phone: '',
    service: initialService,
    language: 'English',
    pages: 15,
    deadline: '',
    urgencyOption: 'standard', // 'urgent' | 'standard' | 'flexible'
    instructions: ''
  });

  const [copied, setCopied] = useState(false);

  // Rates calculation
  const getRate = () => {
    if (formData.service.includes('Assignment')) return 10;
    if (formData.service.includes('Record')) return 5;
    return null;
  };

  const rate = getRate();
  const estimatedCost = rate && formData.pages ? formData.pages * rate : null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const setPagesCount = (count) => {
    setFormData((prev) => ({ ...prev, pages: Math.max(1, count) }));
  };

  const formattedWhatsAppMessage = buildOrderMessage({
    name: formData.name,
    college: formData.college,
    phone: formData.phone,
    service: formData.service,
    language: formData.language,
    pages: formData.pages,
    deadline: formData.deadline || (formData.urgencyOption === 'urgent' ? '⚡ Urgent (Within 24-48 hrs)' : 'Standard submission'),
    instructions: formData.instructions,
    estimatedCost: estimatedCost
  });

  const whatsappUrl = createWhatsAppUrl(formattedWhatsAppMessage);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedWhatsAppMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={`relative rounded-3xl bg-paper-pure p-6 sm:p-8 lg:p-10 border-2 border-blush-300 shadow-stationery ${className}`}>
      {/* Decorative Washi Tape on top */}
      <div className="washi-tape-rose"></div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 pt-2 space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-semibold text-emerald-800">
          <MessageCircle className="h-3.5 w-3.5 text-emerald-600 fill-current" />
          <span>100% WhatsApp Direct Channel &bull; Zero Hassle</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900">
          Order Directly via WhatsApp
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-600">
          No sign-ups or waiting for emails. Configure your assignment details below to generate a pre-formatted message and chat with our coordinator instantly.
        </p>
      </div>

      {/* 1-Tap Quick Order Preset Pills */}
      <div className="mb-8 p-4 rounded-2xl bg-paper-cream border border-beige-dark space-y-2">
        <span className="text-[11px] font-bold text-charcoal-muted uppercase tracking-wider block">
          ⚡ 1-Tap Quick Ordering (Tap to launch WhatsApp immediately):
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {quickOrderPresets.map((preset, i) => (
            <a
              key={i}
              href={createWhatsAppUrl(preset.text)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-3 rounded-xl bg-paper-pure hover:bg-blush-50 border border-blush-200 hover:border-rose-400 text-charcoal-800 transition-all hover:-translate-y-0.5 shadow-2xs group"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-xs text-charcoal-900 line-clamp-1">
                  {preset.title}
                </span>
                <span className="text-[10px] font-bold text-rose-600 bg-blush-100 px-1.5 py-0.5 rounded">
                  {preset.rate}
                </span>
              </div>
              <span className="text-[10px] text-charcoal-muted mt-1">
                {preset.cost ? `~${preset.pages} pgs (₹${preset.cost})` : 'Custom turnaround'}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Two Column Layout: Order Configurator (Left) & Live WhatsApp Preview (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Controls */}
        <div className="lg:col-span-7 space-y-5">
          <div className="border-b border-blush-200 pb-3">
            <h4 className="font-serif font-bold text-base text-charcoal-800">
              1. Your Writing Requirements
            </h4>
            <p className="text-xs text-charcoal-muted">
              Fill in your assignment details to preview your WhatsApp message.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Student Name */}
            <div>
              <label htmlFor="student-name" className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                Your Name
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal-400">
                  <User className="h-4 w-4" />
                </div>
                <input
                  id="student-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Fathima / Rahul"
                  className="w-full rounded-xl border border-beige-dark bg-paper-cream pl-9 pr-3 py-2 text-xs sm:text-sm text-charcoal-800 placeholder:text-charcoal-300 focus:bg-paper-pure focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors"
                />
              </div>
            </div>

            {/* College or Location */}
            <div>
              <label htmlFor="student-college" className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                College / District
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal-400">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <input
                  id="student-college"
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="e.g. Calicut Univ / Malappuram"
                  className="w-full rounded-xl border border-beige-dark bg-paper-cream pl-9 pr-3 py-2 text-xs sm:text-sm text-charcoal-800 placeholder:text-charcoal-300 focus:bg-paper-pure focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Service */}
            <div>
              <label htmlFor="order-service" className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                Service Required
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal-400">
                  <FileText className="h-4 w-4" />
                </div>
                <select
                  id="order-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-beige-dark bg-paper-cream pl-9 pr-3 py-2 text-xs sm:text-sm text-charcoal-800 focus:bg-paper-pure focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors"
                >
                  <option value="College Assignment Writing">College Assignments (₹10/pg)</option>
                  <option value="Simple Record Writing">Simple Record Writing (₹5/pg)</option>
                  <option value="Notes Copying">Notes Copying</option>
                  <option value="Malayalam & English Handwriting">Malayalam &amp; English Handwriting</option>
                </select>
              </div>
            </div>

            {/* Language */}
            <div>
              <label htmlFor="order-language" className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                Language
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal-400">
                  <Globe className="h-4 w-4" />
                </div>
                <select
                  id="order-language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-beige-dark bg-paper-cream pl-9 pr-3 py-2 text-xs sm:text-sm text-charcoal-800 focus:bg-paper-pure focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors"
                >
                  <option value="English">English</option>
                  <option value="Malayalam">Malayalam</option>
                  <option value="Both (Bilingual)">Both (Bilingual / Malayalam &amp; English)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Number of Pages with Quick Chips */}
          <div className="p-3.5 rounded-2xl bg-paper-cream border border-beige-dark space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="order-pages-input" className="text-xs font-semibold text-charcoal-800 uppercase tracking-wider">
                Estimated Pages to Write:
              </label>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setPagesCount(formData.pages - 1)}
                  className="h-7 w-7 rounded-lg bg-paper-pure border border-blush-300 font-bold text-charcoal-700 hover:bg-blush-100"
                >
                  -
                </button>
                <input
                  id="order-pages-input"
                  type="number"
                  min="1"
                  max="300"
                  name="pages"
                  value={formData.pages}
                  onChange={(e) => setPagesCount(parseInt(e.target.value) || 1)}
                  className="w-14 text-center rounded-lg border border-blush-300 bg-paper-pure py-1 font-bold text-rose-700 text-xs sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setPagesCount(formData.pages + 1)}
                  className="h-7 w-7 rounded-lg bg-paper-pure border border-blush-300 font-bold text-charcoal-700 hover:bg-blush-100"
                >
                  +
                </button>
                <span className="text-xs text-charcoal-muted ml-1 font-medium">pages</span>
              </div>
            </div>

            {/* Quick Pick Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[10px] text-charcoal-muted font-medium">Quick count:</span>
              {[5, 10, 15, 20, 30, 45, 60].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setPagesCount(num)}
                  className={`px-2.5 py-0.5 rounded-lg text-xs font-medium transition-colors ${
                    formData.pages === num
                      ? 'bg-rose-500 text-white'
                      : 'bg-paper-pure text-charcoal-700 border border-beige-dark hover:bg-blush-100'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Deadline / Urgency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="order-deadline" className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                Specific Deadline Date
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-charcoal-400">
                  <Calendar className="h-4 w-4" />
                </div>
                <input
                  id="order-deadline"
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-beige-dark bg-paper-cream pl-9 pr-3 py-2 text-xs sm:text-sm text-charcoal-800 focus:bg-paper-pure focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
                Turnaround Speed
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, urgencyOption: 'standard' }))}
                  className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                    formData.urgencyOption === 'standard'
                      ? 'bg-rose-500 text-white border-rose-600'
                      : 'bg-paper-cream text-charcoal-700 border-beige-dark hover:bg-blush-100'
                  }`}
                >
                  Standard (3-5 days)
                </button>
                <button
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, urgencyOption: 'urgent' }))}
                  className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                    formData.urgencyOption === 'urgent'
                      ? 'bg-rose-500 text-white border-rose-600'
                      : 'bg-paper-cream text-charcoal-700 border-beige-dark hover:bg-blush-100'
                  }`}
                >
                  ⚡ Urgent (24-48 hrs)
                </button>
              </div>
            </div>
          </div>

          {/* Additional Instructions */}
          <div>
            <label htmlFor="order-instructions" className="block text-xs font-semibold text-charcoal-800 uppercase tracking-wider mb-1">
              Instructions or Reference Details
            </label>
            <textarea
              id="order-instructions"
              name="instructions"
              rows="2"
              value={formData.instructions}
              onChange={handleChange}
              placeholder="e.g. Blue ink, 3cm margin, I have 1 PDF to write..."
              className="w-full rounded-xl border border-beige-dark bg-paper-cream p-2.5 text-xs sm:text-sm text-charcoal-800 focus:bg-paper-pure focus:outline-none focus:ring-2 focus:ring-rose-400 transition-colors resize-y"
            ></textarea>
          </div>
        </div>

        {/* Right Column: Live WhatsApp Chat Simulator & 1-Click Launch */}
        <div className="lg:col-span-5 space-y-4">
          <div className="border-b border-blush-200 pb-3">
            <h4 className="font-serif font-bold text-base text-charcoal-800">
              2. Live WhatsApp Preview
            </h4>
            <p className="text-xs text-charcoal-muted">
              Here is what will be sent to <strong>{WHATSAPP_DISPLAY}</strong>:
            </p>
          </div>

          {/* Smartphone / WhatsApp Chat Simulator Container */}
          <div className="rounded-3xl bg-[#ECE5DD] border-2 border-charcoal-800 shadow-xl overflow-hidden">
            {/* WhatsApp Phone Header Bar */}
            <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold border border-white/30">
                  ✍️
                </div>
                <div>
                  <h5 className="font-sans font-bold text-xs text-white leading-tight">
                    Write With Care Coordinator
                  </h5>
                  <p className="text-[10px] text-emerald-200">
                    ● Online &bull; 88917 46484
                  </p>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-700/80 px-2 py-0.5 rounded text-white font-mono">
                WhatsApp
              </span>
            </div>

            {/* Chat Screen Body with Authentic WhatsApp Chat Bubble */}
            <div className="p-4 bg-[#E5DDD5] min-h-[260px] space-y-3 font-sans text-xs">
              <div className="text-center">
                <span className="bg-[#D1E8E2] text-[#075E54] text-[10px] font-semibold px-2.5 py-0.5 rounded-md shadow-2xs">
                  TODAY
                </span>
              </div>

              {/* Chat Bubble Outgoing */}
              <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-none bg-[#DCF8C6] p-3.5 shadow-sm text-charcoal-900 space-y-1.5 border border-emerald-200/50">
                <p className="font-bold text-[11px] text-emerald-900 border-b border-emerald-300/60 pb-1">
                  ✨ New Order — Write With Care ✨
                </p>

                <div className="space-y-0.5 text-[11px] leading-relaxed">
                  <p>👤 <strong>Student:</strong> {formData.name || 'Student'}</p>
                  {formData.college && <p>🏫 <strong>College:</strong> {formData.college}</p>}
                  <p>📝 <strong>Service:</strong> {formData.service}</p>
                  <p>🌐 <strong>Language:</strong> {formData.language}</p>
                  <p>📄 <strong>Pages:</strong> {formData.pages} pages</p>
                  <p>⏰ <strong>Deadline:</strong> {formData.deadline || (formData.urgencyOption === 'urgent' ? '⚡ Urgent (24-48 hrs)' : 'Standard')}</p>
                  {estimatedCost && (
                    <p className="text-emerald-950 font-bold pt-0.5">
                      💰 <strong>Estimated Cost:</strong> ₹{estimatedCost} ({formData.pages} pgs × ₹{rate}/pg)
                    </p>
                  )}
                  {formData.instructions && (
                    <p className="text-charcoal-700 italic pt-0.5">
                      📌 "{formData.instructions}"
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-emerald-300/40 text-[9px] text-charcoal-500">
                  <span>📎 Ready to share PDF</span>
                  <div className="flex items-center gap-1">
                    <span>Just now</span>
                    <CheckCheck className="h-3 w-3 text-[#34B7F1]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions inside Simulator */}
            <div className="p-3 bg-white border-t border-charcoal-200 space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-98"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
                <span>Send to WhatsApp Now</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-paper-cream hover:bg-blush-100 text-charcoal-700 font-semibold text-xs border border-beige-dark transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Message Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-charcoal-500" />
                    <span>Copy Formatted Message</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Reassurance pill */}
          <div className="p-3 rounded-2xl bg-paper-cream border border-beige-dark text-center text-xs text-charcoal-muted">
            💬 <strong>How it works:</strong> Tapping the button opens WhatsApp with this exact text pre-filled. You can then attach your reference PDFs or photo notes directly in the chat!
          </div>
        </div>
      </div>
    </div>
  );
}

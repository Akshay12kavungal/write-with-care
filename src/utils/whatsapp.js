/**
 * WhatsApp integration utilities for Write With Care
 * Primary ordering number: 88917 46484 (International: 918891746484)
 * 100% WhatsApp Direct Channel
 */

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '918891746484';
export const WHATSAPP_DISPLAY = import.meta.env.VITE_WHATSAPP_DISPLAY || '88917 46484';
export const INSTAGRAM_HANDLE = import.meta.env.VITE_INSTAGRAM_HANDLE || 'perfectpenworks';
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;
export const BUSINESS_LOCATION = import.meta.env.VITE_BUSINESS_LOCATION || 'Malappuram District, Kerala, India';

/**
 * Encodes text and creates wa.me URL
 * @param {string} text - Message to pre-fill
 * @returns {string} - wa.me URL
 */
export const createWhatsAppUrl = (text = '') => {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
  const base = `https://wa.me/${cleanNumber}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text.trim())}`;
};

/**
 * Builds structured order / enquiry message for WhatsApp
 */
export const buildOrderMessage = ({
  name = '',
  college = '',
  phone = '',
  service = 'College Assignment Writing',
  language = 'English',
  pages = '',
  deadline = '',
  instructions = '',
  estimatedCost = null
}) => {
  const lines = [
    '✨ *New Order — Write With Care* ✨',
    '',
    `👤 *Student Name:* ${name.trim() || 'Student'}`,
    college.trim() ? `🏫 *College / Location:* ${college.trim()}` : '',
    phone.trim() ? `📞 *Phone:* ${phone.trim()}` : '',
    `📝 *Service:* ${service}`,
    `🌐 *Language:* ${language}`,
    `📄 *Number of Pages:* ${pages ? `${pages} pages` : 'To be confirmed'}`,
    `⏰ *Required Deadline:* ${deadline || 'As soon as possible'}`,
    estimatedCost ? `💰 *Estimated Total:* ₹${estimatedCost}` : '',
    instructions.trim() ? `📌 *Instructions:* ${instructions.trim()}` : '',
    '',
    '📍 *Location:* Malappuram, Kerala',
    '📎 _I am ready to share my reference PDF / notes photos!_',
    '',
    '_"Every Page Is Written With Care!"_'
  ].filter(Boolean);

  return lines.join('\n');
};

/**
 * Builds quick inquiry message for a specific service
 */
export const buildServiceInquiryMessage = (serviceName) => {
  return [
    `👋 Hello Write With Care!`,
    ``,
    `I am interested in your *${serviceName}* service.`,
    `Could you please share details on current availability, page turnaround time, and how I can send reference notes?`,
    ``,
    `Thank you!`
  ].join('\n');
};

/**
 * Builds price estimate message from calculator
 */
export const buildEstimateMessage = ({ service, pages, estimatedPrice }) => {
  return [
    `👋 Hello Write With Care!`,
    ``,
    `I calculated an estimate on your website:`,
    `• *Service:* ${service}`,
    `• *Pages:* ${pages} pages`,
    `• *Estimated Total:* ₹${estimatedPrice}`,
    ``,
    `I would like to confirm availability and share my assignment notes.`,
    ``,
    `Thank you!`
  ].join('\n');
};

/**
 * 1-Tap Quick presets for Kerala college students
 */
export const quickOrderPresets = [
  {
    title: 'Assignment Writing',
    rate: '₹10/pg',
    pages: 15,
    cost: 150,
    text: 'Hi Write With Care! I need College Assignment Writing (₹10/page). I have about 15 pages to write.'
  },
  {
    title: 'Simple Record Writing',
    rate: '₹5/pg',
    pages: 30,
    cost: 150,
    text: 'Hi Write With Care! I need Simple Record Writing (₹5/page) for my college practicals (approx 30 pages).'
  },
  {
    title: '⚡ Urgent Order (24-48 hrs)',
    rate: 'Express',
    pages: 20,
    cost: null,
    text: 'Hi Write With Care! I have an URGENT submission deadline in 24-48 hours. Are you available for express writing?'
  },
  {
    title: 'Malayalam Assignment',
    rate: 'Custom',
    pages: 10,
    cost: null,
    text: 'Hi Write With Care! I need handwritten Malayalam assignment writing (മലയാളം ലിപി). Can we discuss the topic?'
  }
];

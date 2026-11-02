/**
 * Pricing data for Write With Care
 * Strictly adheres to verified pricing structure:
 * - College Assignments: ₹10 per page
 * - Simple Record Writing: ₹5 per page
 * - Urgent orders, Courier/delivery, and Bulk custom pricing available upon contact.
 */

export const officialPricing = [
  {
    service: 'College Assignments',
    price: '₹10',
    unit: 'per page',
    highlight: 'Most Popular',
    description: 'Complete handwritten assignments on standard ruled or unruled A4 paper with neat margins and headings.',
    features: [
      '₹10 per page written',
      'Follows reference materials & instructions',
      'English cursive or print style',
      'Neat title headers & numbered pages',
      'High-grade ink / ballpoint pens'
    ]
  },
  {
    service: 'Simple Record Writing',
    price: '₹5',
    unit: 'per page',
    highlight: 'Budget Friendly',
    description: 'Neat academic and practical record book writing adhering to your college record format.',
    features: [
      '₹5 per page written',
      'Follows record guidelines & experiments',
      'Carefully aligned tables and values',
      'Leaves adequate room for diagrams / graphs',
      'Uniform script across entire record'
    ]
  }
];

export const pricingTerms = [
  {
    title: 'Urgent Orders',
    text: 'Urgent orders may have additional charges depending on the timeframe and page count.',
    icon: 'Zap'
  },
  {
    title: 'Courier & Delivery Charges',
    text: 'Courier / delivery charges are extra, where applicable (Speed Post, DTDC, Professional Courier across Malappuram & Kerala). Local pickup options available.',
    icon: 'Truck'
  },
  {
    title: 'Bulk & Custom Orders',
    text: 'Bulk orders (e.g. 100+ pages or multiple group records) and customized pricing are available.',
    icon: 'Layers'
  },
  {
    title: 'Contact for Custom Quotes',
    text: 'Have notes copying, bilingual work, or special stationery requirements? Contact us for pricing details!',
    icon: 'MessageCircle'
  }
];

export const pricingFaqs = [
  {
    q: 'How is page count calculated?',
    a: 'Each single side of a sheet is counted as 1 page. For example, writing on both sides of a sheet equals 2 pages.'
  },
  {
    q: 'Can I provide my own record book or paper?',
    a: 'Yes! You can courier or hand over your college record book or preferred assignment sheets, or we can write on standard quality A4 assignment sheets.'
  },
  {
    q: 'How does payment work?',
    a: 'We accept GPay, PhonePe, Paytm, and UPI. For most orders, a nominal advance is requested to confirm, with the balance upon completion before dispatch or delivery.'
  },
  {
    q: 'Are there discounts for friends ordering together?',
    a: 'Yes, bulk orders and group orders qualify for special customised package rates. Chat with us on WhatsApp to discuss your group requirements.'
  }
];


/**
 * Services data for Write With Care
 * Pricing strictly adheres to:
 * - College Assignments: ₹10 per page
 * - Simple Record Writing: ₹5 per page
 * - Notes Copying & Malayalam/English Handwriting: custom quote based on page count / urgency
 */

export const servicesData = [
  {
    id: 'assignments',
    title: 'College Assignment Writing',
    shortTitle: 'Assignments',
    price: '₹10 per page',
    priceValue: 10,
    unit: 'per page',
    popular: true,
    tagline: 'Neat, structured & formatted strictly per your college syllabus.',
    description: 'We craft neat, legible and beautifully formatted handwritten assignments for arts, commerce, science, and engineering students across Calicut University and colleges in Kerala.',
    features: [
      'Clean cursive or print English handwriting',
      'Proper margins, headers, subheadings & page numbers',
      'Follows reference PDFs, lecture notes, or textbooks',
      'Ruled A4 sheets or project assignment sheets',
      'High-grade ballpoint / gel pen presentation'
    ],
    idealFor: 'Degree, PG, Diploma, and B.Ed / M.Ed students needing neat assignment submission.',
    iconName: 'BookOpen',
    whatsappMessage: 'Hi Write With Care, I would like to order College Assignment Writing (₹10/page). Can you please guide me on how to share the reference materials?'
  },
  {
    id: 'record-writing',
    title: 'Handwritten Record Writing',
    shortTitle: 'Record Writing',
    price: '₹5 per page',
    priceValue: 5,
    unit: 'per page (simple record)',
    popular: true,
    tagline: 'Precise, diagram-aligned & neat lab and academic records.',
    description: 'Neat and disciplined record book writing for laboratory observations, science experiments, computer practicals, and workshop records.',
    features: [
      'Simple record writing starting at just ₹5 per page',
      'Crystal-clear formula, procedure, and result presentation',
      'Careful alignment leaving clean spaces for diagrams/graphs',
      'Uniform penmanship from first experiment to the last',
      'Index page & experiment headers neatly labelled'
    ],
    idealFor: 'B.Sc, B.Tech, Polytechnic, Nursing, and Higher Secondary lab records.',
    iconName: 'FileSpreadsheet',
    whatsappMessage: 'Hi Write With Care, I need Simple Record Writing (₹5/page). Can you let me know how soon you can complete my record book?'
  },
  {
    id: 'notes-copying',
    title: 'Notes Copying',
    shortTitle: 'Notes Copying',
    price: 'Affordable Rates',
    priceValue: null,
    unit: 'contact for bulk quote',
    popular: false,
    tagline: 'Complete missing class notes, lecture summaries & exam modules.',
    description: 'Missed lectures or need a clean personal copy of your friend’s handwritten notes? We rewrite and organize semester notes with utmost clarity.',
    features: [
      'Organized with clean bullet points and key highlights',
      'Easy-to-revise layout for fast exam preparation',
      'Discounted custom pricing for bulk semester notes',
      'Option for ruled spiral pads or loose binder sheets',
      'Two-color pen formatting for definitions and points'
    ],
    idealFor: 'Students preparing for university exams needing clean reference notebooks.',
    iconName: 'FileText',
    whatsappMessage: 'Hi Write With Care, I have semester notes that need to be copied and organized. Could you give me a custom price estimate?'
  },
  {
    id: 'bilingual-handwriting',
    title: 'Malayalam & English Handwriting',
    shortTitle: 'Malayalam & English',
    price: 'Custom Quotes Available',
    priceValue: null,
    unit: 'custom per order',
    popular: false,
    tagline: 'Flawless Malayalam aksharangal & graceful English penmanship.',
    description: 'Whether it is a Malayalam literature assignment, language record, translation draft, or English essay, we deliver authentic, fluent script with zero spelling errors.',
    features: [
      'Accurate Malayalam script (അക്ഷരങ്ങൾ) with proper vattezhuthu curves',
      'Graceful English cursive and legible print styles',
      'Follows student guidelines and reference drafts verbatim',
      'Careful spell-checking and line balance',
      'Available for both school and college academic tasks'
    ],
    idealFor: 'Malayalam language students, language optional papers, and bilingual records.',
    iconName: 'PenTool',
    whatsappMessage: 'Hi Write With Care, I need Malayalam & English handwriting service for my college project. Can we discuss the requirements?'
  }
];

export const coreValues = [
  {
    title: 'Neat Handwriting',
    desc: 'Uniform, clean, and legible handwriting that examiners love reading.',
    icon: 'Feather'
  },
  {
    title: 'Quality Work',
    desc: 'Structured with crisp margins, highlighted headings, and zero mess.',
    icon: 'Sparkles'
  },
  {
    title: 'Affordable Prices',
    desc: 'College-friendly pricing starting from just ₹5 to ₹10 per page.',
    icon: 'Tag'
  },
  {
    title: 'Timely Completion',
    desc: 'We respect deadlines so you submit without last-minute panic.',
    icon: 'Clock'
  }
];


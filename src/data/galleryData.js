/**
 * Gallery data for Write With Care
 * Stored in a dedicated file for effortless updates.
 *
 * NOTE: As per instructions, these samples represent authentic presentation
 * layouts and formats, clearly presented for preview purposes without misrepresenting
 * confidential student submissions.
 */

export const galleryCategories = [
  { id: 'all', name: 'All Works' },
  { id: 'assignments', name: 'Assignments (₹10/pg)' },
  { id: 'record-writing', name: 'Record Writing (₹5/pg)' },
  { id: 'english', name: 'English Handwriting' },
  { id: 'malayalam', name: 'Malayalam Handwriting' },
  { id: 'presentation', name: 'Notebook Presentation' }
];

export const galleryItems = [
  {
    id: 'assignment-management',
    title: 'University Degree Assignment Sample',
    category: 'assignments',
    categoryName: 'College Assignment',
    imageUrl: '/images/samples/assignment-sample.svg',
    pageType: 'A4 Single-Ruled Premium Sheet',
    inkType: 'Royal Black Ink (0.7mm Tip)',
    pagesPreview: 'Page 01 of 12',
    description: 'Neat cursive English assignment adhering to university syllabus format with 3cm margins, highlighted module titles, and structured bullet points.',
    badge: '₹10 / page',
    isSamplePreview: true
  },
  {
    id: 'record-convex-lens',
    title: 'Physics Practical Lab Record',
    category: 'record-writing',
    categoryName: 'Lab Record Writing',
    imageUrl: '/images/samples/record-sample.svg',
    pageType: 'College Practical Record Book',
    inkType: 'Dark Charcoal Ballpoint',
    pagesPreview: 'Experiment 04 (Optics)',
    description: 'Tabular observations, formula highlights, and precise parallax values. Kept clean with dedicated margins for instructor initials and grading.',
    badge: 'Lab Record',
    isSamplePreview: true
  },
  {
    id: 'malayalam-literature',
    title: 'Malayalam Literature Assignment',
    category: 'malayalam',
    categoryName: 'Malayalam Handwriting',
    imageUrl: '/images/samples/malayalam-sample.svg',
    pageType: 'Ruled Kerala Academic Sheet',
    inkType: 'Classic Blue Fluid Gel Pen',
    pagesPreview: 'Page 01 Sample',
    description: 'Beautiful traditional Malayalam lipi (അക്ഷരങ്ങൾ) with balanced curves, proper spacing, and zero grammatical corrections.',
    badge: 'Bilingual Excellence',
    isSamplePreview: true
  },
  {
    id: 'english-poetry-analysis',
    title: 'English Literature Essay & Notes',
    category: 'english',
    categoryName: 'English Handwriting',
    imageUrl: '/images/samples/english-sample.svg',
    pageType: 'A4 Ruled Presentation Paper',
    inkType: 'Deep Burgundy & Navy Blue',
    pagesPreview: 'Romanticism Series',
    description: 'Lyrical poetry analysis with indented quote boxes, underlined literary terms, and balanced margin discipline throughout.',
    badge: 'Cursive Style',
    isSamplePreview: true
  },
  {
    id: 'presentation-masterclass',
    title: 'Notebook Presentation & Diagram Formatting',
    category: 'presentation',
    categoryName: 'Notebook Presentation',
    imageUrl: '/images/samples/presentation-sample.svg',
    pageType: 'Grid-Lined Spiral Academic Pad',
    inkType: 'Two-Color Structured Ink',
    pagesPreview: 'Thermodynamics Module',
    description: 'Two-color ink formatting with neat box frames, thermodynamic system schematic, and clear definitions that help examiners award full marks.',
    badge: 'Neat Formatting',
    isSamplePreview: true
  },
  {
    id: 'chemistry-titration-record',
    title: 'Simple Record Writing — Volumetric Analysis',
    category: 'record-writing',
    categoryName: 'Simple Record Writing',
    imageUrl: '/images/samples/simple-record-sample.svg',
    pageType: 'Standard Ruled Record Sheets',
    inkType: 'Uniform Black Ballpoint Pen',
    pagesPreview: 'Experiment 02 (Titration)',
    description: 'Simple record writing starting at ₹5 per page. Step-by-step calculation lines, concordant burette readings, and clean normality derivation.',
    badge: '₹5 / page',
    isSamplePreview: true
  }
];


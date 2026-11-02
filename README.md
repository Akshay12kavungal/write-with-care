# Write With Care ✍️
### *Your Handwriting Partner!*
**Beautiful Handwriting. Quality Work. Affordable Prices.**

> *"We provide neat and well-organised handwritten academic writing services for college students. From assignments to record writing, we help make your academic work presentable, clear and easy to read."*

---

## 📌 Business Overview

- **Business Name:** Write With Care
- **Tagline:** Your Handwriting Partner!
- **Secondary Tagline:** Beautiful Handwriting. Quality Work. Affordable Prices.
- **Brand Motto:** *"Every Page Is Written With Care!"* / *"WRITE WITH CARE — Every Word, Every Page, With Care!"*
- **Location:** Malappuram District, Kerala, India
- **WhatsApp:** [88917 46484](https://wa.me/918891746484)
- **Instagram:** [@perfectpenworks](https://instagram.com/perfectpenworks)
- **Website Title:** Write With Care | Handwritten Assignments & Record Writing

---

## 💬 100% WhatsApp-First Ordering System

Instead of requiring students to fill out external forms or wait for emails, Write With Care uses a **100% WhatsApp Direct Channel**:

1. **Instant WhatsApp Order Builder:**
   - Configure student name, college, service, language, page count, and deadline.
   - Live real-time smartphone WhatsApp chat simulator showing the exact formatted message.
   - Calculates estimated order totals automatically.
   - 1-tap **"Send to WhatsApp Now"** launches WhatsApp with everything pre-filled.
2. **1-Tap Quick Order Presets:**
   - Pre-configured chips for Assignments (₹10/pg), Lab Records (₹5/pg), and 24-hr Urgent Orders.
3. **Floating WhatsApp Micro-Chat:**
   - Interactive chat drawer with quick questions and direct coordinator connectivity.
4. **Direct PDF & Notes Sharing:**
   - Students attach assignment reference PDFs, book scans, and syllabus photos directly in WhatsApp for immediate confirmation.

---

## 🎨 UI/UX Design System

An elegant, minimal stationery-inspired aesthetic evoking premium notebook pages, fountain pen inks, and disciplined margins:

| Color Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **White** | `#FFFFFF` | Crisp sheet background |
| **Blush Pink** | `#E8B4B8` | Primary accent, delicate border & highlights |
| **Soft Beige** | `#F5EBDD` | Warm paper tone, secondary cards |
| **Rose Pink** | `#C97F89` | Primary CTAs, active links & margin rulings |
| **Dark Charcoal** | `#292524` | Primary typography & high-contrast headers |

### Typography
- **Headings:** `Playfair Display` (serif)
- **Body Text:** `Poppins` (sans-serif)
- **Handwritten Accents & Logo:** `Caveat` (cursive)

### Stationery Accents
- Hand-crafted Washi Tape strips on cards
- Embossed Wax Seal badges
- Push-pin Sticky Notes for semester reminders
- Dual-margin ruled notebook paper textures

---

## 🚀 Technology Stack

- **Frontend Library:** React.js 18
- **Build Tool:** Vite
- **Language:** JavaScript (ES Modules, pure .jsx)
- **Styling:** Tailwind CSS 3 (custom stationery palette & shadows)
- **Routing:** React Router DOM 6
- **Icons:** Lucide React + Custom SVG Icons
- **Primary Ordering Channel:** WhatsApp API (`wa.me/918891746484`)
- **Deployment:** Docker & Nginx (Multi-stage build)

---

## 📝 Verified Academic Pricing

| Service | Price | Inclusions |
| :--- | :--- | :--- |
| **College Assignments** | **₹10 per page** | Standard ruled/unruled A4 sheets, neat margins, topic headers |
| **Simple Record Writing** | **₹5 per page** | Practical record books, observations, neat formula boxes |

### Additional Notes:
1. **Urgent Orders:** Urgent orders may have additional charges depending on turnaround requirements.
2. **Courier / Delivery:** Courier and delivery charges are extra, where applicable (Speed Post, DTDC, or local pickup in Malappuram).
3. **Bulk Orders:** Bulk orders (100+ pages or multiple group records) and customised pricing are available.
4. **Contact for Details:** Contact via WhatsApp for pricing details and custom package estimates.

---

## 📁 Project Architecture

```
write-with-care/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── hero-art.svg
│       └── samples/
│           ├── assignment-sample.svg
│           ├── record-sample.svg
│           ├── malayalam-sample.svg
│           ├── english-sample.svg
│           ├── presentation-sample.svg
│           └── simple-record-sample.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── FloatingWhatsApp.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HandwritingShowcase.jsx
│   │   │   ├── InstagramIcon.jsx
│   │   │   ├── Logo.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── PresentationComparison.jsx
│   │   │   ├── PriceCalculator.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   └── StickyNote.jsx
│   │   ├── forms/
│   │   │   └── EnquiryForm.jsx (Interactive WhatsApp Order Hub)
│   │   └── gallery/
│   │       ├── GalleryCard.jsx
│   │       └── GalleryLightbox.jsx
│   ├── data/
│   │   ├── galleryData.js
│   │   ├── howToOrderData.js
│   │   ├── pricingData.js
│   │   ├── reviewsData.js
│   │   └── servicesData.js
│   ├── layouts/
│   │   └── RootLayout.jsx
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── HowToOrderPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── OrderPage.jsx
│   │   ├── PricingPage.jsx
│   │   └── ServicesPage.jsx
│   ├── utils/
│   │   └── whatsapp.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── package.json
└── README.md
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
```bash
# Clone the repository
cd write-with-care

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Build for Production
```bash
npm run build
npm run preview
```

---

## 🐳 Docker Deployment

The website includes a production-ready, multi-stage Docker setup with Nginx and gzip compression.

### Run with Docker Compose
```bash
docker compose up --build -d
```

The website will be live at:
- `http://localhost` (Port 80)
- `http://localhost:3000` (Port 3000)

### Stop Docker Container
```bash
docker compose down
```

---

## 📞 Contact Information

- **Brand:** Write With Care
- **District:** Malappuram District, Kerala, India
- **WhatsApp:** [88917 46484](https://wa.me/918891746484)
- **Instagram:** [@perfectpenworks](https://instagram.com/perfectpenworks)

# 🌿 ECOVIBE — Premium Eco-Friendly Lifestyle Landing Page

> **Cognetix Technology Internship — Task 3: Product Landing Page**  
> **Brand Name:** ECOVIBE  
> **Tagline:** Conscious Living. Timeless Luxury.  
> **Author:** Tejaswini Rakhunde ([@Tejaswini-2006](https://github.com/Tejaswini-2006))  
> **Repository:** [https://github.com/Tejaswini-2006/Cognetix_ProductLandingPage](https://github.com/Tejaswini-2006/Cognetix_ProductLandingPage)  

---

## 📌 Project Overview

**ECOVIBE** is a modern, high-end editorial product landing page for a fictional sustainable lifestyle brand. Designed around the ethos of *Conscious Living. Timeless Luxury*, ECOVIBE curates artisanal essentials for a mindful home, a slower ritual, and a lighter footprint.

Built entirely with **semantic HTML5, modern CSS3 (Flexbox & CSS Grid), and Vanilla JavaScript (ES6+)**, with zero external frameworks, zero heavy libraries, and no paid services or backends.

The design draws inspiration from boutique sustainable fashion ateliers, high-end Kinfolk aesthetics, and refined organic lifestyle publications. It combines an earthy editorial color palette (deep forest green, warm ivory, soft sage, muted olive, and champagne gold) with responsive layouts, accessible modal dialogs, an interactive slide-over shopping bag drawer, and mindful micro-interactions.

---

## 🎯 Task 3 Objectives & Deliverables

As part of the **Cognetix Technology Frontend / Web Development Internship (Task 3)**, this project fulfills all key criteria:
1. **Semantic HTML5 Structure:** Clear landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`), valid heading hierarchy (`h1` through `h4`), and descriptive `alt` tags.
2. **Pure Vanilla CSS3 Styling:** CSS Custom Properties (Design Tokens), responsive typography via `clamp()`, CSS Grid & Flexbox, subtle glassmorphic blurs, and graceful hover states.
3. **Vanilla JavaScript Functionality:** Modular DOM manipulation, responsive mobile hamburger drawer, category filtering, accessible modals with keyboard `Escape` trap, interactive shopping bag drawer with live counter, and custom toast notifications.
4. **Accessibility (WCAG Compliant):** Skip-to-content links, visible `:focus-visible` styling, ARIA roles (`role="dialog"`, `aria-modal="true"`, `aria-expanded`), and full `@media (prefers-reduced-motion)` support.
5. **Zero Fabrication & Educational Transparency:** Clear labeling of all products, reviews, and metrics as fictional educational demonstration content.

---

## ✨ Comprehensive Section Walkthrough

| Section | Key Elements & Features |
|---|---|
| **A. Announcement Bar** | Slim top bar with champagne highlight: *“LESS WASTE. MORE WONDER. DISCOVER CONSCIOUS LUXURY.”* with direct link to the collection. |
| **B. Header & Navigation** | Botanical logo mark, clean desktop links (*Home, Collection, Our Philosophy, Impact, Journal*), interactive shopping bag trigger with dynamic item counter badge, CTA button, and accessible mobile hamburger drawer with backdrop blur. |
| **C. Hero Section** | Editorial headline (*“Live beautifully. Leave a lighter footprint.”*), dual CTAs, community social proof rating (4.95/5 stars), large lifestyle imagery, and floating glassmorphism badges (*100% Circular Intent* & *Artisanal Heirloom Quality*). |
| **D. Brand Values Strip** | 4 core principles: *Thoughtful Materials*, *Designed to Last*, *Everyday Reusability*, and *Less, But Better* with custom SVG icons. |
| **E. Featured Collection** | 4 core demonstration products (*The Everyday Tote*, *The Solstice Bottle*, *The Terra Home Set*, *The Ritual Travel Kit*) with sample INR prices, category filter tabs (*All, Bags & Carry, Drinkware, Home & Ritual*), Quick-View modals, and Add-to-Bag actions. |
| **F. Brand Philosophy** | Split layout featuring atelier notes (*“Better choices begin with everyday rituals”*), 3 interactive philosophy pillars (*Honest Provenance*, *Slow Architecture*, *Closed-Loop Care*), and pull-quote card. |
| **G. Benefits Section** | 4 value cards: *Designed for Everyday Use*, *Timeless, Versatile Style*, *Reusable Alternatives*, and *Thoughtful Material Choices*. |
| **H. Impact & Sustainability** | Honest circular stewardship pillars (I. Buy Less, Choose Better, II. Care & Repair, III. Everyday Micro-Shifts) + Interactive Mindful Habit Shift Calculator calculating avoided single-use items. |
| **I. Testimonials** | 3 sample demonstration reviews from verified demo personas (Architect, Interior Stylist, Sustainability Educator) clearly identified as demonstration content. |
| **J. Journal & Stories** | 3 editorial article cards (*A Simpler, More Thoughtful Morning*, *Making Reusability Part of Your Routine*, *A Guide to Buying Less, Choosing Better*) with interactive full-screen reader modals. |
| **K. Final CTA Banner** | Atmospheric deep forest green banner with radial champagne glow and dual direct action buttons. |
| **L. Footer** | Wordmark, brand mission, quick navigation links, material care guide toasts, newsletter subscription form with live email validation, dynamic copyright year, and internship attribution. |

---

## 🛍️ Interactive Frontend Features

- **Slide-Over Shopping Bag Drawer:**
  - Real-time item listing with thumbnail, title, and formatted price in Indian Rupees (INR `₹`).
  - Quantity controls (`+`, `−`, and `Remove`).
  - Free shipping progress bar (e.g. unlocks at ₹4,000 threshold).
  - Subtotal calculator and demonstration checkout modal notice.
- **Product Quick-View Modal:**
  - Rich dialog displaying large photography, detailed material specifications, dimensions, and care rituals.
- **Journal Story Reader:**
  - Accessible modal dialog presenting complete essays with pull-quotes and slow living takeaways.
- **Toast Notifications:**
  - Non-intrusive bottom-left notification banners triggered on bag updates and newsletter signups.
- **Back to Top Button:**
  - Floats into view past 400px scroll depth for effortless navigation.

---

## 📁 Project Directory Structure

```text
Cognetix_ProductLandingPage/
├── index.html                # Semantic HTML5 master document
├── style.css                 # Comprehensive Vanilla CSS3 design system
├── script.js                 # Modular ES6+ Vanilla JavaScript logic
├── README.md                 # Detailed documentation & setup guide
├── .gitignore                # Git exclusions
└── assets/
    ├── icons/
    │   ├── bag.svg           # Shopping bag navigation icon
    │   ├── check.svg         # Checkmark icon
    │   ├── circular.svg      # Circular reusability icon
    │   ├── enduring.svg      # Heirloom quality shield icon
    │   ├── leaf.svg          # Botanical leaf icon
    │   ├── logo.svg          # ECOVIBE botanical brand emblem
    │   ├── star.svg          # Rating star icon
    │   └── zen.svg           # Balanced minimalism icon
    └── images/
        ├── hero-lifestyle.jpg       # Editorial morning ritual scene
        ├── product-tote.jpg         # The Everyday Tote catalog shot
        ├── product-bottle.jpg       # The Solstice Bottle catalog shot
        ├── product-terra.jpg        # The Terra Home Set catalog shot
        ├── product-travel.jpg       # The Ritual Travel Kit catalog shot
        ├── philosophy-ritual.jpg    # Mindful living tea ritual photo
        ├── journal-morning.jpg      # Morning routine journal essay
        ├── journal-routine.jpg      # Sustainable kitchen pantry photo
        ├── journal-guide.jpg        # Minimalist interior design photo
        ├── avatar-1.jpg             # Demo reviewer portrait
        ├── avatar-2.jpg             # Demo reviewer portrait
        └── avatar-3.jpg             # Demo reviewer portrait
```

---

## 🚀 How to Run Locally

Because this project uses standard HTML5, CSS3, and JavaScript, **no build steps, compiler, or package manager are required**.

### Method 1: Direct Browser Opening
1. Clone or download the repository to your computer.
2. Double-click `index.html` to open it directly in Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari.

### Method 2: Local HTTP Server (Recommended)
Running via a local HTTP server ensures smooth asset fetching and font rendering:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx serve)
npx -y serve .

# Using VS Code Live Server extension
Right-click index.html -> "Open with Live Server"
```
Then navigate to `http://localhost:8000` (or the port specified).

---

## 🧪 Testing & Verification Guide

### 1. Responsive Viewport Testing
Open browser Developer Tools (`F12` or `Ctrl + Shift + I` / `Cmd + Option + I`), toggle device toolbar (`Ctrl + Shift + M`), and test:
- **Mobile Viewports (360px & 390px):** Verify announcement bar wraps gracefully, hamburger menu operates, hero content stacks smoothly, product grid displays in 1 column, and no horizontal overflow occurs (`scrollWidth === clientWidth`).
- **Tablet (768px):** Verify 2-column product grid, balanced split layout, and comfortable tap targets.
- **Desktop (1200px+):** Verify 4-column product grid, sticky header with blur, hover states, and maximum container centering.

### 2. Interactive Feature Testing
- **Navigation:** Click each anchor link (`#hero`, `#collection`, `#philosophy`, `#impact`, `#journal`). Ensure smooth scrolling stops with proper padding above section headings.
- **Mobile Navigation:** Open menu via hamburger button, test backdrop tap to close, and ensure clicking any link closes the drawer automatically.
- **Filter Tabs:** Click *Bags & Carry*, *Drinkware*, *Home & Ritual*, and *All Objects*. Verify relevant product cards filter with zero layout flicker.
- **Add to Bag & Drawer:**
  - Click *Add to Bag* on any card: notice header badge incrementing with a pop animation and toast confirmation.
  - Open bag via top-right shopping icon: test `+` and `−` quantity buttons, test item removal, verify free shipping progress bar updates dynamically.
- **Modals:**
  - Click *Discover Product* on any product card: verify modal opens with specifications. Press `Escape` or click `✕` to dismiss.
  - Click *Read Story* in the Journal section: verify article text displays in editorial typography. Press `Escape` to close.
- **Habit Calculator:** Move the frequency slider (1 to 7 days) and select different habits: verify annual avoided count updates in real time.
- **Newsletter Form:** Test an invalid email format (e.g., `test@`) to verify inline validation feedback; enter a valid address to verify success toast.
- **Back to Top:** Scroll down past 400px; verify round floating arrow appears and smoothly scrolls to top on click.

---

## 🌐 GitHub Pages Deployment Instructions

To publish this project live for free using GitHub Pages:

1. Open your repository on GitHub:  
   [https://github.com/Tejaswini-2006/Cognetix_ProductLandingPage](https://github.com/Tejaswini-2006/Cognetix_ProductLandingPage)
2. Navigate to **Settings** (top tab navigation).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` (or `master`), and set folder to `/(root)`.
   - Click **Save**.
5. Wait 1–2 minutes for GitHub Actions to build and deploy your site.
6. Refresh the page to see your live URL:  
   `https://tejaswini-2006.github.io/Cognetix_ProductLandingPage/`

---

## ⚖️ Educational Demonstration Disclaimer

**ECOVIBE** is a fictional brand created exclusively for educational purposes as part of the **Cognetix Technology Internship — Task 3**.  
- All product descriptions, pricing in INR, customer reviews, quotes, and sustainability calculations are fictional demonstration elements.
- No real commercial transactions, payments, or orders can be processed through this page.

---

## 👩‍💻 Author & Acknowledgements

- **Developer:** Tejaswini Rakhunde ([@Tejaswini-2006](https://github.com/Tejaswini-2006))
- **Internship Organization:** Cognetix Technology
- **Task:** Task 3 — Product Landing Page
- **Typography:** *Playfair Display* & *Plus Jakarta Sans* via Google Fonts
- **Icons:** Custom SVG vector icons

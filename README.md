# 🚀 NOVA — Smart Productivity Hub

> **Task 3: Product Landing Page**  
> Developed for the **Cognetix Technology Full Stack Developer Internship**  
> **Author:** Tejaswini Rakhunde ([@Tejaswini-2006](https://github.com/Tejaswini-2006))  
> **Repository:** [https://github.com/Tejaswini-2006/Cognetix_ProductLandingPage](https://github.com/Tejaswini-2006/Cognetix_ProductLandingPage)

---

## 📌 Project Overview

**NOVA** is a modern, high-conversion SaaS product landing page created for a fictional all-in-one productivity hub. Engineered around deep-work cognitive science, task orchestration, and team alignment, NOVA presents a visually stunning, responsive, and interactive digital experience.

The landing page showcases NOVA's core capabilities, highlights tangible benefits, walks through a 3-step workflow, establishes trust with sample testimonials, and provides dynamic call-to-action touchpoints.

Built with **pure Vanilla HTML5, CSS3, and modern JavaScript (ES6+)** with zero external frameworks or heavy dependencies.

---

## ✨ Key Features & Functionality

### 1. Navigation Bar
- **Brand Identity:** High-resolution SVG brand icon, bold typographic logotype, and version tag badge.
- **Section Anchors:** Smooth-scrolling links to *Features*, *Benefits*, *How It Works*, *Testimonials*, and *Contact*.
- **Scrollspy / Active State:** Dynamic navigation link highlighting powered by scroll position tracking.
- **Mobile Responsive Drawer:** Accessible hamburger toggle menu (`aria-expanded`, keyboard ESC handling, auto-closing on outside click or anchor selection).
- **Header Blur Effect:** Glassmorphic sticky header with backdrop blur and dynamic elevation on scroll.

### 2. High-Impact Hero Section
- **Compelling Copy:** Punchy headline with gradient text, concise product value proposition, and release badges.
- **Dual Call-to-Action:** Primary gradient glow button ("Get Started Free") and secondary outline button ("See How It Works").
- **Social Proof:** Multi-avatar group preview with 4.9/5 star ratings from over 14,000+ creators and engineers.
- **Interactive Focus Widget:**
  - **Live Pomodoro Focus Timer:** 25-minute countdown with Start / Pause / Reset controls and Web Audio API chime.
  - **Interactive Task Checklist:** Checkboxes with strike-through animations and live progress counter (`X of 3 Done`).
  - **Floating Metric Chips:** Dynamic flow quality score (94%) and daily focus streak counter (12 Days).
- **Product Mockup:** High-resolution vector SaaS dashboard preview embedded within a browser device frame.

### 3. Features Section & Interactive Filtering
- 6 comprehensive feature cards equipped with custom SVGs, category tags, descriptions, and feature bullet lists:
  1. **Smart Task Management:** AI priority scoring, auto-tagging, nested subtask trees.
  2. **Productivity Analytics:** Real-time focus score metrics, burnout prediction, and exportable reports.
  3. **Team Collaboration:** Shared project boards, role permissions, and threaded discussions.
  4. **Progress Tracking:** Sprint burndown graphs, quarterly OKR alignment, and velocity forecasting.
  5. **Smart Reminders:** Context-aware nudges, two-way Google/Outlook calendar sync, and snooze engine.
  6. **Workflow Organization:** Seamless Kanban, list, table, and timeline views.
- **Interactive Category Filter Tabs:** Filter cards instantly by *All*, *Organization*, *Analytics*, or *Collaboration*.

### 4. Benefits Section
- Detailed value propositions explaining why top performers choose NOVA:
  - **Reclaim 8+ Hours Weekly:** +42% increase in completed weekly goals.
  - **Science-Backed Flow Architecture:** 3.5 hours of uninterrupted deep focus unlocked daily.
  - **Lightning Speed & Keyboard Power:** Sub-50ms interaction latency with full keyboard shortcuts.
  - **Private & Offline-First:** 100% client-side encrypted and offline resilience.
- **Key Metrics Highlight Banner:** Showcases 14k+ active users, 2.8M+ tasks completed, and 99.98% platform uptime.

### 5. Simple 3-Step "How It Works" Workflow
- Visual stepped roadmap with glowing connected progress line:
  - **Step 01: Connect & Organize** — 60-second onboarding wizard and workspace initialization.
  - **Step 02: Prioritize & Focus** — Adaptive scheduling engine and distraction shielding.
  - **Step 03: Track & Elevate** — Weekly velocity heatmaps and streak compounding.

### 6. Testimonials Section
- 3 polished testimonial cards with verified roles, star ratings, and feedback quotes:
  - **Sarah Chen** — Staff Software Engineer @ CloudScale
  - **Alex Rivera** — Lead Product Designer @ Studio Forma
  - **Priya Patel** — Founder & CEO @ Horizon Tech
- Transparent disclaimer pill clearly noting sample demonstration testimonials.

### 7. Call-to-Action Banner
- Visually prominent gradient banner with deep violet radial glow.
- "Start Your Free 14-Day Trial" CTA and "Schedule Demo" secondary action.
- Trust badges: No credit card required, instant setup, cancel anytime.

### 8. Contact & Demo Request
- Direct support channels (support email, office headquarters, guaranteed 2-hour response window).
- Interactive form with real-time validation for Full Name, Work Email, Topic, and Message.
- Interactive loading spinner state and automated toast notification feedback.

### 9. Interactive "Get Started" Modal Dialog
- Accessible modal window (`role="dialog"`, backdrop blur, focus trapping, ESC key listener).
- User inputs Full Name, Work Email, and selects a primary productivity goal.
- Generates a personalized workspace domain (`[user-name]-workspace.nova-hub.com`) with a 14-Day Pro Free Trial badge.

### 10. Footer
- Brand info, quick navigation links, product resources, and internship attribution.
- Social media icon links (GitHub, LinkedIn, Twitter/X).
- **Dynamic Year Generation:** Automatically displays current year via JavaScript.
- **Back to Top Button:** Smoothly scrolls back to hero section.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure, accessible landmarks, form validation attributes, Open Graph meta tags |
| **CSS3** | Custom design system tokens, CSS Grid & Flexbox, glassmorphism, responsive media queries |
| **JavaScript (ES6+)** | DOM manipulation, mobile drawer, interactive timer, live checklist, filter tabs, modal dialog, toast alerts |
| **Web Audio API** | Native synthesised completion chime for focus timer without external audio files |
| **SVG** | Crisp vector icons and brand logos ensuring fast load times and infinite scalability |
| **Google Fonts** | Plus Jakarta Sans for clean typography |

---

## 📂 Project Structure

```text
Cognetix_ProductLandingPage/
│
├── index.html                   # Semantic HTML5 landing page structure
├── style.css                    # Design tokens, layouts, animations, and responsive styles
├── script.js                    # Interactive logic, timer, modal, forms, and mobile navigation
├── README.md                    # Project documentation, specifications, and testing log
├── .gitignore                   # Version control ignore rules
│
└── assets/
    ├── images/
    │   ├── dashboard-preview.jpg# High-resolution SaaS product interface graphic
    │   ├── avatar-1.jpg         # Testimonial avatar (Sarah Chen)
    │   ├── avatar-2.jpg         # Testimonial avatar (Alex Rivera)
    │   └── avatar-3.jpg         # Testimonial avatar (Priya Patel)
    │
    └── icons/
        ├── logo.svg             # NOVA brand logo icon
        ├── task.svg             # Smart task management icon
        ├── analytics.svg        # Productivity analytics icon
        ├── team.svg             # Team collaboration icon
        ├── tracking.svg         # Progress tracking icon
        ├── reminder.svg         # Smart reminders icon
        ├── workflow.svg         # Workflow organization icon
        ├── check.svg            # Checkmark bullet icon
        └── star.svg             # Star rating icon
```

---

## 🚀 How to Run Locally

### Option 1: Using Python (Recommended)
1. Clone the repository:
   ```bash
   git clone https://github.com/Tejaswini-2006/Cognetix_ProductLandingPage.git
   cd Cognetix_ProductLandingPage
   ```
2. Start a local server:
   ```bash
   python -m http.server 8080
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:8080/index.html
   ```

### Option 2: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension by Ritwick Dey if not already installed.
3. Right-click on `index.html` and select **Open with Live Server**.

### Option 3: Direct Browser File Access
Double-click `index.html` in your file explorer or open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

---

## 🧪 Testing Checklist & Verification

All items below have been thoroughly tested across multiple viewports and verified error-free:

- [x] **Page Load & Assets:** All HTML, CSS, JavaScript, images, and SVG icons load with HTTP 200 (no 404s).
- [x] **Navigation Bar:** Desktop links scroll smoothly to matching section anchors (`#features`, `#benefits`, `#how-it-works`, `#testimonials`, `#contact`).
- [x] **Active Scrollspy:** Nav links automatically highlight as user scrolls down the page.
- [x] **Mobile Menu Toggle:** Responsive hamburger button opens/closes drawer menu at `< 768px`; auto-closes on link click or outside click.
- [x] **Hero Focus Timer:** Start / Pause / Resume / Reset buttons count down accurately with minutes and seconds display.
- [x] **Interactive Task Checklist:** Checkboxes toggle strike-through state and dynamically update the progress counter (`X of 3 Done`); triggers celebratory toast on completion.
- [x] **Features Category Filter:** Filter tabs correctly isolate *All*, *Organization*, *Analytics*, and *Collaboration* cards.
- [x] **Get Started Modal Dialog:** Opens via any CTA button across the page with backdrop blur; traps focus; closes via close button, outside click, or ESC key.
- [x] **Modal Form Validation:** Validates full name and email; displays mock workspace URL and 14-day Pro trial badge on submission.
- [x] **Contact Form:** Validates name, email, and message; displays loading state and confirmation toast.
- [x] **Toast Notifications:** Reusable toast alerts display with icons and slide in/out seamlessly.
- [x] **Dynamic Copyright Year:** Footer year dynamically reflects current calendar year via JavaScript.
- [x] **Back to Top Button:** Smoothly brings the viewport back to top.
- [x] **Responsive Layout:** Tested and verified at:
  - Mobile: `360px` - `420px` (stacked cards, touch targets, hamburger nav)
  - Tablet: `768px` - `1024px` (2-column grids, adjusted typography)
  - Desktop: `1200px+` (3-column grids, side-by-side hero layout)
- [x] **Zero Console Errors:** Verified clean console logs with zero uncaught exceptions.
- [x] **Accessibility:** Proper heading structure (`h1` - `h4`), color contrast ratios, `aria-labels`, `aria-expanded`, and reduced-motion media query support.

---

## 📷 Screenshots

| Section | Preview |
|---|---|
| **Hero Section & Focus Widget** | `assets/images/dashboard-preview.jpg` |
| **Features Section** | Grid layout with interactive category filtering |
| **Benefits & How It Works** | 3-step workflow roadmap with progress line |
| **Testimonials** | Modern glass cards featuring Sarah, Alex, and Priya |

---

## 🌐 Live Demo & Deployment

- **GitHub Repository:** [https://github.com/Tejaswini-2006/Cognetix_ProductLandingPage](https://github.com/Tejaswini-2006/Cognetix_ProductLandingPage)
- **GitHub Pages Live Demo:** [https://tejaswini-2006.github.io/Cognetix_ProductLandingPage/](https://tejaswini-2006.github.io/Cognetix_ProductLandingPage/)

*(Note: Live demo will be available once GitHub Pages is enabled under repository settings: Settings > Pages > Source: Deploy from branch `main` / root).*

---

## 🎓 Internship Submission Details

- **Company:** Cognetix Technology
- **Internship:** Full Stack Developer Internship
- **Task:** Task 3 — Product Landing Page
- **Candidate:** Tejaswini Rakhunde
- **GitHub:** [@Tejaswini-2006](https://github.com/Tejaswini-2006)

---

⭐ *Built with dedication for the Cognetix Technology Full Stack Developer Internship.*

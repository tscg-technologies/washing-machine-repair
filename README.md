# WASHING MACHINE REPAIR SERVICES — PORTFOLIO DEMONSTRATION

A modern, responsive, high-performance washing machine repair & maintenance services demonstration website designed for the **TSCG Technologies** portfolio.

Built strictly according to project specifications using pure **HTML5**, **CSS3**, and **Vanilla JavaScript** (Zero Frameworks, Zero Build Steps).

---

## 1. PROJECT STRUCTURE

```
washing-machine-repair/
│
├── index.html                 # Page 1: Homepage (Hero, Categories, Highlights, Workflow, Problem Selector)
├── about.html                 # Page 2: About (Approach, Appliance Scope, Demo Team Framework)
├── services.html              # Page 3: Services (8 Dedicated Service Blocks A-H & FAQ Accordion)
├── problems.html              # Page 4: Common Problems (10 Detailed Issues, Safety Panel, Diagnostic Form)
├── projects.html              # Page 5: Projects (8 Showcases, Filter Tabs, Modal Lightbox)
├── contact.html               # Page 6: Contact (Service Desk Info, Enquiry Form, File Upload Simulator)
│
├── assets/
│   ├── css/
│   │   └── style.css          # Comprehensive Master CSS (Design Tokens, Responsive, BEM-like)
│   ├── js/
│   │   └── main.js            # Pure Vanilla JS (Navigation, Modals, Tabs, Forms, Lightbox)
│   └── images/
│       └── placeholders/      # 36 Aspect-Ratio Preserving Placeholder JPEGs
│
├── IMAGE-GENERATION-GUIDE.md  # Complete Master Google Flow Image Generation Prompts (36 Assets)
└── README.md                  # Project Documentation, Local Preview & Hostinger Deployment Guide
```

---

## 2. DESIGN SYSTEM & PALETTE

- **Deep Navy:** `#14243A` (Major backgrounds, headers, footers)
- **Dark Charcoal:** `#1B2938` (Secondary contrast surfaces)
- **Primary Blue:** `#347EC7` (Primary buttons, accents, icons)
- **Aqua Cyan:** `#42C5D8` (Highlights, glowing accents, badges)
- **Soft Mint:** `#DDF4F0` / `#EBFAF7` (Notice boxes, subtle callouts)
- **Light Grey:** `#F3F6F8` (Section contrast backgrounds)
- **White:** `#FFFFFF` (Card surfaces, clean typography)
- **Accent Orange:** `#FFA15A` (Disclaimer notes, alerts)

---

## 3. KEY FEATURES & CAPABILITIES

1. **Sticky Adaptive Navigation:** Transparent over hero on the homepage; automatically transitions to a frosted solid navy background on scroll. Accessible hamburger drawer for mobile devices.
2. **Interactive Problem Selector:** Homepage widget allowing users to click through 10 common washing machine symptoms to review causes and safe checks in real time.
3. **Dedicated Services & FAQ Accordion:** In-depth breakdowns of Front Load, Top Load, Fully Automatic, Semi-Automatic, Installation, Maintenance, and Washer-Dryer care with an accessible FAQ accordion.
4. **Appliance Safety Panel:** Highlighted warning alert outlining crucial household safety rules regarding electricity, water, and qualified repair assessments.
5. **Interactive Project Filter & Modal Lightbox:** Instant category switching (All, Front Load, Top Load, Installation, Maintenance, Repair) and modal detail dialog with Escape key support and keyboard accessibility.
6. **Frontend Form Simulator:** Validates required fields, emails, and phone formats with animated loading states and confirmation toasts. Includes a client-side photo upload dropzone with filename and file size inspection (strictly no external upload/storage).
7. **Zero Framework Dependencies:** Runs directly in any modern browser without Node.js, Webpack, Vite, or external CDNs.

---

## 4. LOCAL PREVIEW INSTRUCTIONS

Because the site uses purely static HTML, CSS, and Vanilla JavaScript, you can run and view it in multiple ways:

### Option A: Direct Browser Opening
Simply double-click `index.html` in your file explorer to open it directly in Chrome, Edge, Safari, or Firefox.

### Option B: Python Local Server (Recommended)
Open a terminal in the project directory and run:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

### Option C: VS Code Live Server
Right-click `index.html` in VS Code and choose **"Open with Live Server"**.

---

## 5. HOSTINGER STATIC HOSTING DEPLOYMENT

This website is pre-configured and optimized for **Hostinger Web Hosting / Cloud Hosting**:

1. Log in to your **Hostinger hPanel**.
2. Go to **Websites** &rarr; Select your domain &rarr; Click **File Manager**.
3. Navigate to the `public_html` root directory.
4. Upload all files and folders directly into `public_html`:
   - `index.html`
   - `about.html`
   - `services.html`
   - `problems.html`
   - `projects.html`
   - `contact.html`
   - `assets/` (including `css/`, `js/`, and `images/`)
   - `IMAGE-GENERATION-GUIDE.md`
   - `README.md`
5. Ensure `index.html` resides directly inside `public_html/`.
6. Visit your domain URL in your browser to verify live deployment.

---

## 6. IMAGE ASSETS & REPLACEMENT

- All 36 image placeholders have been pre-rendered into `images/` with exact dimensions and stable aspect ratios to prevent Cumulative Layout Shift (CLS).
- For replacing placeholders with AI-generated photographic images, refer to `IMAGE-GENERATION-GUIDE.md`, which contains copy-ready individual prompts formatted for Google Flow.

---

## 7. PORTFOLIO DISCLAIMER

> **NOTICE:** This website is a frontend portfolio demonstration developed for **TSCG Technologies**. It does not represent a real operating commercial business. All telephone numbers (`0000000000`), email addresses (`demo@example.com`), physical addresses, technician roles, and case studies are fictional illustrative demonstration content.

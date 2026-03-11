# 🇪🇬 Egyptian CS Student Guide — Full Project Specification
> **This document is a complete, production-ready specification for building the Egyptian CS Student Guide website.**
> It is written to be handed directly to an AI (Claude Code, Cursor, Copilot) or a developer to implement from scratch with zero ambiguity.
> Every page, component, feature, color, interaction, and data structure is defined here.

---

## 📋 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project File Structure](#3-project-file-structure)
4. [Design System](#4-design-system)
5. [Global Features](#5-global-features)
6. [Pages — Full Specification](#6-pages--full-specification)
7. [Custom Components — Full Specification](#7-custom-components--full-specification)
8. [Data Files — Full Specification](#8-data-files--full-specification)
9. [Feature Deep Dives](#9-feature-deep-dives)
10. [Footer](#10-footer)
11. [Deployment](#11-deployment)
12. [Implementation Notes for AI](#12-implementation-notes-for-ai)

---

## 1. Project Overview

**Name:** Egyptian CS Student Guide
**Tagline:** "Everything Egyptian CS students need. In one place."
**Author:** .uwz — [github.com/uwz](https://github.com/uwz) ← replace with real username
**Purpose:** A free, open-source, beautifully designed reference site for Egyptian Computer Science students covering learning roadmaps, career guidance, free courses, developer tools, and CV/project advice.
**Target Audience:** Egyptian CS students at any university, any year (فرقة أولى → رابعة)
**Primary sharing channel:** WhatsApp and Telegram links — mobile-first is non-negotiable
**Design style:** Neobrutalism — thick black borders, offset box shadows, bold typography, mixed accent colors, flat UI. Based on [neobrutalism.dev](https://www.neobrutalism.dev) component patterns.

---

## 2. Tech Stack

```
Framework:        Next.js 14+ (App Router)
Language:         TypeScript
Styling:          Tailwind CSS v3
UI Components:    Custom neobrutalism components (no shadcn dependency required)
Icons:            Lucide React
Fonts:            Space Grotesk (headings) + Inter (body) — both from Google Fonts via next/font
State:            React useState / useEffect (no external state library needed)
Persistence:      localStorage (for progress checklist, theme preference)
Animations:       Tailwind CSS transitions + subtle CSS keyframes (no Framer Motion — keep bundle small)
Deployment:       Vercel (primary) or GitHub Pages (static export fallback)
Package Manager:  npm or pnpm
```

### Why these choices:
- **Next.js App Router** — best for multi-page, SEO-friendly, fast loading
- **No heavy UI library** — custom components keep the bundle small and the neobrutalism style pure
- **No external state** — localStorage + React state is enough for this project's needs
- **Space Grotesk font** — fits neobrutalism perfectly, geometric and bold
- **Lucide icons** — lightweight, consistent, tree-shakeable

---

## 3. Project File Structure

```
egyptian-cs-guide/
│
├── app/
│   ├── layout.tsx                  ← Root layout: fonts, theme provider, navbar, footer
│   ├── page.tsx                    ← Home page
│   ├── globals.css                 ← Base styles, CSS variables, dark mode vars
│   ├── roadmaps/
│   │   └── page.tsx                ← Roadmaps page
│   ├── courses/
│   │   └── page.tsx                ← Courses page
│   ├── careers/
│   │   └── page.tsx                ← Careers page
│   ├── tools/
│   │   └── page.tsx                ← Tools page
│   └── cv-projects/
│       └── page.tsx                ← CV & Projects page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              ← Top navigation, mobile hamburger, theme toggle
│   │   ├── Footer.tsx              ← Footer with author credit
│   │   └── ThemeProvider.tsx       ← Dark/light mode context + localStorage persistence
│   │
│   ├── ui/                         ← Base neobrutalism UI primitives
│   │   ├── NeoCard.tsx             ← Card with thick border + offset shadow
│   │   ├── NeoButton.tsx           ← Button with neo style + hover shift animation
│   │   ├── NeoBadge.tsx            ← Tag/badge component
│   │   ├── NeoAccordion.tsx        ← Collapsible section
│   │   ├── NeoInput.tsx            ← Search/text input
│   │   ├── NeoSelect.tsx           ← Dropdown select
│   │   └── NeoToast.tsx            ← Toast notification (for copy link feedback)
│   │
│   ├── home/
│   │   ├── Hero.tsx                ← Big bold hero section
│   │   ├── YearFilter.tsx          ← "Which year are you?" interactive selector
│   │   ├── FeaturingLost.tsx       ← "I'm feeling lost" modal/drawer flow
│   │   ├── QuickStats.tsx          ← Stats bar (200+ courses, 6 tracks, etc.)
│   │   └── SiteOverview.tsx        ← Cards linking to all pages
│   │
│   ├── roadmaps/
│   │   ├── TrackSelector.tsx       ← Tab/button selector for 6 tracks
│   │   ├── RoadmapFlowchart.tsx    ← Visual clickable flowchart (pure CSS/SVG)
│   │   ├── PhaseCard.tsx           ← Collapsible phase (Phase 1, Phase 2, Phase 3)
│   │   └── RoadmapChecklist.tsx    ← Progress checklist per track (localStorage)
│   │
│   ├── courses/
│   │   ├── CourseSearchBar.tsx     ← Search input with debounce
│   │   ├── CourseFilters.tsx       ← Tag filters (language, track, free/paid, cert, type)
│   │   ├── CourseCard.tsx          ← Individual course card
│   │   ├── CourseGrid.tsx          ← Responsive grid of CourseCards
│   │   ├── StarRating.tsx          ← Visual star rating display
│   │   ├── ArabicBadge.tsx         ← "🇦🇷 Arabic Available" badge
│   │   ├── FinancialAidModal.tsx   ← Modal for paid courses: financial aid questions
│   │   └── RecommendCourse.tsx     ← "Recommend a resource" form modal
│   │
│   ├── careers/
│   │   ├── CompanyCard.tsx         ← Egyptian company card
│   │   ├── CompanyGrid.tsx         ← Grid of company cards
│   │   ├── CompanyFilter.tsx       ← Filter by stack/type/size
│   │   ├── HiringTimeline.tsx      ← How Egyptian hiring works, step by step
│   │   ├── RemoteSection.tsx       ← Remote work guide section
│   │   └── JobBoardList.tsx        ← List of job boards with descriptions
│   │
│   ├── tools/
│   │   ├── ToolCard.tsx            ← Individual tool card
│   │   ├── ToolSection.tsx         ← Grouped tools section (VS Code, Student Pack, etc.)
│   │   └── ToolFilter.tsx          ← Filter tools by category
│   │
│   └── cv-projects/
│       ├── CVTips.tsx              ← CV tips in collapsible sections
│       ├── ProjectIdeaCard.tsx     ← Project idea card
│       ├── ProjectFilter.tsx       ← Filter by stack, difficulty, local vs remote
│       └── CVTemplate.tsx          ← Downloadable CV template section
│
├── data/                           ← All content as TypeScript data files
│   ├── courses.ts                  ← All courses with metadata
│   ├── companies.ts                ← Egyptian companies data
│   ├── roadmaps.ts                 ← Roadmap phases per track
│   ├── tools.ts                    ← Developer tools data
│   ├── projects.ts                 ← Project ideas data
│   ├── faqs.ts                     ← FAQ entries per page
│   └── jobBoards.ts                ← Job board links
│
├── hooks/
│   ├── useLocalStorage.ts          ← Generic localStorage hook
│   ├── useProgress.ts              ← Progress checklist state management
│   ├── useTheme.ts                 ← Dark/light mode hook
│   └── useCopyLink.ts              ← Copy to clipboard hook with toast feedback
│
├── lib/
│   ├── utils.ts                    ← cn() classname utility, misc helpers
│   └── constants.ts                ← Site name, author, nav links, color map
│
├── public/
│   ├── og-image.png                ← Open Graph image for WhatsApp link previews
│   └── favicon.ico
│
├── tailwind.config.ts              ← Extended with neobrutalism design tokens
├── next.config.ts                  ← Config (static export option for GitHub Pages)
├── tsconfig.json
├── package.json
└── README.md                       ← How to run + how to deploy on GitHub Pages
```

---

## 4. Design System

### 4.1 Neobrutalism Core Rules

Every component in this project must follow these neobrutalism principles:

```
Border:       2px solid black (light mode) / 2px solid white (dark mode)
Shadow:       4px 4px 0px 0px black (light) / 4px 4px 0px 0px white (dark)
Border Radius: 0px — NO rounded corners anywhere (flat is neobrutalism)
Hover effect: transform: translate(-2px, -2px) + shadow becomes 6px 6px
Active effect: transform: translate(2px, 2px) + shadow disappears (pressed feel)
Typography:   Heavy weights (700–900) for headings, 400–500 for body
Background:   Solid flat colors — no gradients, no glass morphism, no blur
```

### 4.2 Color Palette

The site uses a **multi-accent system** — each page has its own accent color, but the base palette is shared.

#### Base Colors (CSS Variables)
```css
/* Light Mode */
--bg-primary:     #FFFFF0    /* warm off-white — easier on eyes than pure white */
--bg-secondary:   #F5F5F0    /* slightly darker off-white for cards */
--text-primary:   #0A0A0A    /* near-black */
--text-secondary: #3A3A3A    /* dark gray */
--border:         #0A0A0A    /* black borders */
--shadow:         #0A0A0A    /* black shadows */

/* Dark Mode */
--bg-primary:     #0F0F0F    /* near-black background */
--bg-secondary:   #1A1A1A    /* slightly lighter for cards */
--text-primary:   #F5F5F0    /* off-white text */
--text-secondary: #A0A0A0    /* gray text */
--border:         #F5F5F0    /* white borders */
--shadow:         #F5F5F0    /* white shadows */
```

#### Accent Colors per Page
```
Home:        --accent-yellow:  #FFE500   (classic neobrutalism yellow)
Roadmaps:    --accent-blue:    #4361EE   (strong blue)
Courses:     --accent-green:   #06D6A0   (mint green)
Careers:     --accent-orange:  #FF6B35   (bold orange)
Tools:       --accent-purple:  #9B5DE5   (purple)
CV/Projects: --accent-pink:    #FF0F80   (hot pink)
```

#### Tag/Badge Colors
```
Beginner:     bg #D1FAE5  border #059669  text #065F46
Intermediate: bg #FEF3C7  border #D97706  text #92400E
Advanced:     bg #FEE2E2  border #DC2626  text #991B1B
Free:         bg #DCFCE7  border #16A34A  text #14532D
Paid:         bg #F3E8FF  border #9333EA  text #581C87
Arabic:       bg #FFF7ED  border #EA580C  text #7C2D12
Certificate:  bg #EFF6FF  border #2563EB  text #1E3A8A
YouTube:      bg #FEE2E2  border #DC2626  text #991B1B
Website:      bg #F0FDF4  border #15803D  text #14532D
```

### 4.3 Typography

```css
/* Heading font — Space Grotesk */
@import from next/font/google: Space_Grotesk
weights: 500, 600, 700, 800

/* Body font — Inter */
@import from next/font/google: Inter
weights: 400, 500, 600

/* Font size scale (Tailwind) */
Hero heading:     text-5xl md:text-7xl  font-black  (Space Grotesk)
Page title:       text-4xl md:text-5xl  font-bold   (Space Grotesk)
Section heading:  text-2xl md:text-3xl  font-bold   (Space Grotesk)
Card title:       text-xl               font-bold   (Space Grotesk)
Body:             text-base             font-normal (Inter)
Small/caption:    text-sm               font-medium (Inter)
```

### 4.4 Spacing & Layout

```
Max page width:   max-w-7xl  (1280px)
Page padding:     px-4 md:px-8 lg:px-16
Section gap:      space-y-16
Card gap:         gap-4 md:gap-6
Card padding:     p-4 md:p-6
```

### 4.5 Tailwind Config Extensions

```ts
// tailwind.config.ts
extend: {
  boxShadow: {
    'neo':       '4px 4px 0px 0px #0A0A0A',
    'neo-hover': '6px 6px 0px 0px #0A0A0A',
    'neo-white': '4px 4px 0px 0px #F5F5F0',
    'neo-white-hover': '6px 6px 0px 0px #F5F5F0',
    'neo-colored': (color) => `4px 4px 0px 0px ${color}`,
  },
  fontFamily: {
    heading: ['Space Grotesk', 'sans-serif'],
    body:    ['Inter', 'sans-serif'],
  },
  colors: {
    'neo-yellow':  '#FFE500',
    'neo-blue':    '#4361EE',
    'neo-green':   '#06D6A0',
    'neo-orange':  '#FF6B35',
    'neo-purple':  '#9B5DE5',
    'neo-pink':    '#FF0F80',
    'neo-bg':      '#FFFFF0',
    'neo-dark':    '#0F0F0F',
  },
  animation: {
    'marquee': 'marquee 30s linear infinite',
    'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
  }
}
```

### 4.6 Dark Mode Strategy

```
Implementation: class-based dark mode ("dark" class on <html>)
Persistence:    localStorage key "theme" — read on mount, apply before first render
Toggle:         Button in Navbar — sun/moon icon
Default:        system preference via prefers-color-scheme, falls back to light
Transition:     transition-colors duration-200 on all color properties
```

---

## 5. Global Features

### 5.1 Navbar

**Desktop layout:**
```
[Logo: EG CS Guide]    [Home] [Roadmaps] [Courses] [Careers] [Tools] [CV & Projects]    [🌙 Theme Toggle]
```

**Mobile layout:**
```
[Logo: EG CS Guide]    [🌙]  [☰ Hamburger]
→ Hamburger opens a full-screen slide-in drawer with all nav links
```

**Behavior:**
- Sticky top (position: sticky, top: 0, z-index: 50)
- Neobrutalism border on bottom: `border-b-2 border-black dark:border-white`
- Background: `bg-neo-yellow` (yellow in light mode, `bg-neo-dark` in dark mode)
- Active page link gets underline + bold treatment
- Logo links to `/`
- On mobile: hamburger slides in a drawer from the right covering full viewport

### 5.2 Theme Toggle

```tsx
// Behavior:
// 1. On mount: read localStorage("theme") OR matchMedia("prefers-color-scheme")
// 2. Apply "dark" class to document.documentElement
// 3. Toggle button switches between sun (light) and moon (dark) icons
// 4. Persist new preference to localStorage on every toggle
// 5. Smooth transition via CSS: transition-colors duration-200

// Button appearance:
// NeoButton with icon only: Sun icon in light mode, Moon icon in dark mode
// Size: w-10 h-10
// No text, just icon
```

### 5.3 Copy Link Feature

Every major section, card, course, company, roadmap phase, and tool has a **copy link button**.

```tsx
// Behavior:
// 1. Each section/card has a unique id prop (e.g., id="course-cs50")
// 2. Copy button (Link icon from Lucide) appears on hover (desktop) or always (mobile)
// 3. On click: copies `window.location.origin + pathname + "#" + id` to clipboard
// 4. Shows a NeoToast notification: "Link copied! Ready to share 🔗"
// 5. Toast auto-dismisses after 2500ms

// useCopyLink hook:
export function useCopyLink() {
  const [copied, setCopied] = useState(false)
  const copy = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }
  return { copy, copied }
}
```

### 5.4 Progress Checklist (localStorage)

Available on: Roadmaps page (per track), and the year-based checklist on Home.

```tsx
// Data structure in localStorage:
// Key: "progress_[trackName]" e.g., "progress_webdev"
// Value: JSON array of completed step IDs: ["step_1", "step_3", "step_7"]

// useProgress hook:
export function useProgress(trackKey: string) {
  const [completed, setCompleted] = useLocalStorage<string[]>(`progress_${trackKey}`, [])
  
  const toggle = (stepId: string) => {
    setCompleted(prev =>
      prev.includes(stepId)
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    )
  }
  
  const percentage = (total: number) => 
    Math.round((completed.length / total) * 100)
    
  const reset = () => setCompleted([])
  
  return { completed, toggle, percentage, reset }
}

// UI:
// Each checklist item has a checkbox (neobrutalism styled)
// Checked items get strikethrough text + muted color
// Progress bar at top of checklist showing X% complete
// "Reset progress" button at bottom
// Progress bar uses the page accent color
```

### 5.5 FAQ Sections

Every page ends with an FAQ accordion section.

```tsx
// Each FAQ item:
interface FAQItem {
  id: string
  question: string
  answer: string  // can contain markdown-like formatting
  page: string    // which page it belongs to
}

// Behavior:
// Uses NeoAccordion component
// Only one item open at a time (exclusive accordion)
// Smooth height transition on open/close
// Open indicator: "+" rotates to "×" with CSS transition
```

### 5.6 "Recommend a Resource" Feature

Available on: Courses page (floating button or section at bottom)

```tsx
// This is a modal form — no backend needed
// On submit: opens mailto: link OR copies a pre-formatted message to clipboard
// The user can then paste it in a GitHub issue (link provided in the modal)

// Form fields:
interface RecommendForm {
  resourceName: string       // required
  resourceUrl: string        // required, URL validation
  resourceType: 'course' | 'youtube' | 'book' | 'tool' | 'other'
  track: TrackName           // dropdown
  isFree: boolean
  hasArabic: boolean
  hasCertificate: boolean
  description: string        // optional, max 200 chars
  submitterName: string      // optional, "Anonymous" if empty
}

// On submit behavior:
// 1. Validate required fields
// 2. Format as GitHub issue text
// 3. Open: https://github.com/[username]/egyptian-cs-guide/issues/new?body=[encoded]
// 4. Show success toast: "Opening GitHub to submit your recommendation!"
```

---

## 6. Pages — Full Specification

---

### 6.1 Home Page (`/`)

**Accent color:** `neo-yellow` (#FFE500)

#### Section 1: Hero
```
Layout: Full viewport height (min-h-screen) on desktop, min-h-[80vh] on mobile
Background: neo-yellow (light) / neo-dark with yellow accents (dark)

Content:
- Eyebrow text: "Free. Open Source. Made for Egyptian CS Students 🇪🇬"
- Main heading (H1): "Everything you need to survive & thrive in Egyptian CS"
- Arabic subheading: "دليلك الكامل من السنة الأولى لأول وظيفة"
- Description: 1–2 lines about what the site covers
- Two CTA buttons:
  - Primary: "Start Here →" (black background, white text) → scrolls to YearFilter
  - Secondary: "I'm feeling lost 😅" (white background, black text) → opens FeelingLostModal
- Decorative element: A bold neobrutalism-style block with a rotating text marquee
  showing: "Web Dev • AI & ML • Cybersecurity • Mobile • Cloud • Data Science •" (loops)
```

#### Section 2: Quick Stats Bar
```
Four stat cards in a horizontal row (2x2 on mobile):
- "200+" / Free Courses
- "6" / Learning Tracks
- "30+" / Egyptian Companies
- "100%" / Free to Use

Each card:
- NeoCard with accent color background
- Big bold number
- Small label below
- Subtle hover lift animation
```

#### Section 3: Year Filter — "أنا في الفرقة كام؟"
```
Heading: "What year are you in? / أنا في الفرقة كام؟"
Subheading: "Pick your year and we'll show you exactly what matters right now"

Four big buttons:
- Year 1 — "الفرقة الأولى"
- Year 2 — "الفرقة التانية"
- Year 3 — "الفرقة التالتة"
- Year 4 — "الفرقة الرابعة"

Each button: NeoButton, large (py-4 px-8), each a different accent color

On click:
- Selected year gets visual "active" state (shifted + no shadow = pressed)
- A panel slides/fades in below showing:
  - "Right now, you should focus on:" + a checklist of 5–7 items for that year
  - "Your most important next step:" + a highlighted action card
  - "Go to Roadmaps →" CTA button
- Selection persists in localStorage key "selected_year"
```

#### Section 4: Site Overview (Page Cards)
```
Heading: "What's inside"
Grid: 2 columns on mobile, 3 columns on desktop

Six cards, one per page:
1. Roadmaps card     — blue accent, icon: Map, description + link
2. Courses card      — green accent, icon: BookOpen, description + link
3. Careers card      — orange accent, icon: Briefcase, description + link
4. Tools card        — purple accent, icon: Wrench, description + link
5. CV & Projects card— pink accent, icon: FileText, description + link
(optionally a 6th "Start Here" card for lost beginners)

Each card:
- NeoCard with hover lift
- Accent color top border (4px) or full accent background header
- Icon + title + 1-line description + "Explore →" link
- Copy link button on hover
```

#### Section 5: FAQ
```
Questions:
- "Is this site only for Cairo University students?"
- "Do I need to pay for anything?"
- "How do I use the progress tracker?"
- "Can I contribute or suggest a resource?"
- "Is this site up to date?"
- "What if I'm not a CS student but want to learn programming?"
```

---

### 6.2 Roadmaps Page (`/roadmaps`)

**Accent color:** `neo-blue` (#4361EE)

#### Section 1: Page Header
```
H1: "Learning Roadmaps"
Subtitle: "Pick your track. Follow the phases. Build real things."
Accent strip: blue horizontal bar under heading
```

#### Section 2: Track Selector
```
Six large toggle buttons — clicking one shows that track's content:

1. 🌐 Web Development
2. 🤖 AI & Machine Learning
3. 🔐 Cybersecurity
4. 📱 Mobile Development
5. ☁️ Cloud & DevOps
6. 📊 Data Engineering

Layout: 2×3 grid on mobile, 6 in a row on desktop
Active button: filled with neo-blue background, white text
Inactive: white/dark background, black/white text, blue border

Default selected: Web Development (most common track in Egypt)
```

#### Section 3: Roadmap Content (changes based on selected track)

For each track, show:

**A) Visual Flowchart**
```
A pure CSS/SVG flowchart showing:
- Vertical flow: Phase 1 → Phase 2 → Phase 3
- Each phase box is a clickable NeoCard
- Arrows between phases
- Clicking a phase scrolls to that phase's detail section below
- Color: blue for active phase, gray for locked (future) phases
- On mobile: simplified vertical list instead of complex flowchart
```

**B) Phase Cards (collapsible NeoAccordion)**
```
Each track has 3 phases. Each phase accordion contains:

Header (always visible):
- Phase number + name (e.g., "Phase 1 — المبتدئ")
- Estimated duration (e.g., "4–6 weeks")
- Number of steps
- Progress indicator: "3/8 completed"
- Expand/collapse arrow

Body (when expanded):
- List of steps — each step is a checkbox item
- Step has: checkbox + step title + optional resource link
- Checkboxes connected to useProgress hook
- "Best resource:" link per step
- "Why this matters:" 1-line explanation per step

Footer of body:
- Progress bar showing % complete for this phase
- "Next phase →" button (leads to next accordion)
```

**C) Roadmap Progress Checklist**
```
Sidebar (desktop) / Section below (mobile):
- Track name + overall progress bar
- "X out of Y steps completed"
- Reset button
- Share progress: copies "I'm X% through the [Track] roadmap on EG CS Guide!"
```

**D) Track-specific FAQ**
```
Each track has 3–4 FAQs at the bottom:
Example for Web Dev:
- "Should I learn React or Vue in Egypt?"
- "Do Egyptian companies use TypeScript?"
- "How long does it take to get a junior web dev job in Egypt?"
```

#### Full Roadmap Data (all 6 tracks):

**Web Development Track:**
```
Phase 1 — المبتدئ (4–6 weeks):
  - Learn HTML5 fundamentals
  - Learn CSS3 fundamentals (Box model, Flexbox)
  - CSS Grid
  - JavaScript basics (variables, functions, DOM)
  - Git & GitHub basics
  - Build: personal portfolio static website

Phase 2 — Intermediate (8–12 weeks):
  - JavaScript ES6+ (arrow functions, destructuring, async/await, modules)
  - React.js fundamentals (components, props, state, hooks)
  - Tailwind CSS
  - Node.js + Express basics
  - REST APIs (build and consume)
  - SQL basics (PostgreSQL)
  - Build: Full CRUD app with authentication

Phase 3 — Job-Ready (8–10 weeks):
  - TypeScript
  - Next.js (SSR, SSG, App Router)
  - Authentication (JWT, NextAuth)
  - Database ORM (Prisma)
  - Docker basics
  - Deployment (Vercel, Railway)
  - Testing basics (Jest, React Testing Library)
  - Build: 1 production-grade app with auth + DB + deployment
```

**AI & Machine Learning Track:**
```
Phase 1 — المبتدئ (4–6 weeks):
  - Python fundamentals (if not known)
  - NumPy, Pandas
  - Matplotlib, Seaborn for visualization
  - Statistics basics
  - Build: EDA on a real dataset from Kaggle

Phase 2 — ML Fundamentals (8–10 weeks):
  - Machine Learning theory (Andrew Ng course)
  - Scikit-learn
  - Supervised + Unsupervised learning algorithms
  - Feature engineering
  - Model evaluation metrics
  - Build: End-to-end prediction project

Phase 3 — Deep Learning (10–14 weeks):
  - Neural networks from scratch
  - PyTorch or TensorFlow
  - CNNs for Computer Vision OR Transformers for NLP — pick one
  - Hugging Face models
  - FastAPI for model serving
  - Build: Deploy an ML model as a web API
```

**Cybersecurity Track:**
```
Phase 1 — المبتدئ (4–6 weeks):
  - Linux fundamentals (OverTheWire Bandit)
  - Networking basics (TCP/IP, DNS, HTTP, OSI model)
  - Python scripting
  - CS50 Cybersecurity

Phase 2 — Intermediate (8–10 weeks):
  - TryHackMe learning paths
  - Web security (PortSwigger Academy)
  - OWASP Top 10
  - Burp Suite basics
  - CTF competitions (easy level)
  - Build: Set up a home lab with VirtualBox

Phase 3 — Advanced (10–14 weeks):
  - Hack The Box Academy
  - Buffer overflows
  - Active Directory basics
  - Network penetration testing
  - Report writing
  - Prepare for CEH or CompTIA Security+
```

**Mobile Development Track:**
```
Phase 1 — المبتدئ (3–4 weeks):
  - Dart language fundamentals (for Flutter)
  - Flutter installation and setup
  - Flutter widgets basics
  - State management with setState

Phase 2 — Intermediate (8–10 weeks):
  - Flutter layouts (Row, Column, Stack, ListView)
  - Navigation and routing
  - State management (Provider or Riverpod)
  - REST API consumption in Flutter
  - Local storage (SharedPreferences, Hive)
  - Build: Full mobile app with navigation + API

Phase 3 — Production Ready (8–10 weeks):
  - Flutter animations
  - Push notifications (Firebase)
  - Firebase integration (Auth, Firestore)
  - Publishing to Google Play Store
  - Testing in Flutter
  - Build: Published app on Play Store
```

**Cloud & DevOps Track:**
```
Phase 1 — Foundations (4–6 weeks):
  - Linux command line proficiency
  - Bash scripting
  - Git & GitHub Actions
  - Docker fundamentals (containers, images, volumes)
  - AWS or Azure free tier setup

Phase 2 — Cloud Practitioner (8–10 weeks):
  - AWS core services (EC2, S3, RDS, Lambda, VPC)
  - Cloud networking basics
  - Infrastructure as Code (Terraform basics)
  - CI/CD pipelines (GitHub Actions)
  - Build: Deploy a containerized app to AWS

Phase 3 — Advanced (10–12 weeks):
  - Kubernetes fundamentals
  - Monitoring (Prometheus, Grafana)
  - Advanced Terraform
  - AWS Solutions Architect concepts
  - Prepare for AWS Cloud Practitioner or Azure AZ-900
```

**Data Engineering Track:**
```
Phase 1 — Foundations (4–6 weeks):
  - SQL — master it completely (joins, window functions, CTEs)
  - Python + Pandas for data manipulation
  - Data modeling concepts
  - Build: Analyze a real Egyptian dataset (population, economic data)

Phase 2 — Data Pipeline Basics (8–10 weeks):
  - Apache Spark basics
  - Airflow for orchestration
  - Cloud data warehouses (BigQuery or AWS Redshift — free tiers)
  - ETL pipeline design
  - Build: End-to-end ETL pipeline

Phase 3 — Production (8–10 weeks):
  - dbt (data build tool)
  - Streaming data (Kafka basics)
  - Data quality and testing
  - Advanced SQL optimization
  - Dashboard with Metabase or Apache Superset
  - Build: Full data platform for a business use case
```

---

### 6.3 Courses Page (`/courses`)

**Accent color:** `neo-green` (#06D6A0)

#### Section 1: Page Header
```
H1: "Free & Paid Courses"
Subtitle: "200+ curated courses. Rated by real students. Filter to find exactly what you need."
Stat: "X free • Y paid • Z with Arabic content"
```

#### Section 2: Search + Filters

**Search Bar:**
```
- Full-width text input with search icon
- Placeholder: "Search courses, topics, or platforms..."
- Debounced (300ms) — filters results in real time
- Clears with X button
```

**Filter Bar (horizontal scrollable on mobile):**
```
Row 1 — Track:
  All | Web Dev | AI/ML | Cybersecurity | Mobile | Cloud/DevOps | Data | CS Fundamentals | Math | Other

Row 2 — Language:
  All | Python | JavaScript | Java | C/C++ | Dart | Go | Rust | SQL | No Specific Language

Row 3 — Type:
  All | Free | Paid | Audit Free (pay for cert only)

Row 4 — Format:
  All | YouTube | Website/Platform | Book (Free Online)

Row 5 — Certificate:
  All | With Certificate | No Certificate

Row 6 — Content Language:
  All | English | Arabic | Bilingual

Active filters show as removable badge chips below the filter rows.
"Clear all filters" button appears when any filter is active.
Result count: "Showing 47 of 200 courses"
```

#### Section 3: Course Grid

**CourseCard component:**
```tsx
interface Course {
  id: string
  title: string
  platform: string          // "freeCodeCamp", "Coursera", "YouTube", etc.
  instructor: string        // "Andrew Ng", "Elzero Web School", etc.
  url: string
  type: 'free' | 'paid' | 'audit_free'
  format: 'youtube' | 'website' | 'book'
  hasCertificate: boolean
  hasArabic: boolean
  arabicUrl?: string        // link to Arabic version if different
  contentLanguage: 'english' | 'arabic' | 'bilingual'
  tracks: TrackName[]       // can belong to multiple tracks
  languages: ProgrammingLanguage[]  // programming languages covered
  level: 'beginner' | 'intermediate' | 'advanced' | 'all'
  durationHours?: number
  rating: number            // 1–5, curated by author
  ratingCount?: number      // approximate number of real reviews
  description: string       // 2–3 sentences
  tags: string[]            // flexible additional tags
  isFeatured?: boolean      // shows featured badge
  price?: number            // in USD, for paid courses
  financialAidAvailable?: boolean  // for Coursera, edX paid courses
}

// Card layout:
// TOP: Platform logo area (text) + Type badge (Free/Paid/Audit Free) + Format icon
// MIDDLE: Title (bold), Instructor, Description (2 lines truncated)
// BOTTOM ROW 1: Level badge + Track badges (first 2 shown, +N more)
// BOTTOM ROW 2: ⭐⭐⭐⭐⭐ rating + Arabic badge if hasArabic
// BOTTOM ROW 3: [Visit Course →] button + [🔗 Copy link] button
// If paid + financialAidAvailable: [💸 Get Financial Aid] button

// Grid: 1 column mobile, 2 columns tablet, 3 columns desktop
```

#### Section 4: Financial Aid Modal

```tsx
// Triggered by: "💸 Get Financial Aid" button on paid courses (Coursera, edX mainly)
// This is a guided questionnaire that generates a financial aid application text

interface FinancialAidModal {
  courseName: string
  platform: string  // "Coursera" or "edX"
  platformAidUrl: string
}

// Questions asked in order:
const questions = [
  {
    id: "country",
    question: "What country are you from?",
    type: "text",
    prefill: "Egypt",
    hint: "Coursera weighs this heavily — Egypt qualifies strongly for aid"
  },
  {
    id: "income",
    question: "What is your approximate monthly household income in USD?",
    type: "select",
    options: ["Under $100", "$100–$300", "$300–$600", "$600–$1000", "Over $1000"],
    hint: "Students in Egypt under $600/month have very high approval rates"
  },
  {
    id: "why_course",
    question: "Why do you want to take this course?",
    type: "textarea",
    hint: "Be specific: mention career goals, job market, skills you'll gain"
  },
  {
    id: "why_aid",
    question: "Why can't you afford it right now?",
    type: "textarea",
    hint: "Mention being a student, currency devaluation, family situation"
  },
  {
    id: "use",
    question: "How will you use what you learn?",
    type: "textarea",
    hint: "Mention projects you'll build, jobs you're targeting, impact on your career"
  }
]

// On "Generate Application" button:
// Combines answers into a well-formatted financial aid application text
// Shows the generated text in a readonly textarea
// [Copy Text] button copies it
// [Open Coursera Aid Page →] button opens the actual platform's financial aid page
// Shows tip: "Approval usually takes 10–15 days. Apply even if unsure — approval rate is high for Egyptian students"
```

#### Section 5: Full Course Data

The data file `data/courses.ts` must contain at minimum these courses (add more):

```ts
// TIER 1 — CS FUNDAMENTALS
{ id: "cs50x", title: "CS50x — Introduction to Computer Science", platform: "Harvard/edX", instructor: "David Malan", type: "free", format: "website", hasCertificate: true, hasArabic: false, level: "beginner", tracks: ["cs_fundamentals"], rating: 5, durationHours: 100 }
{ id: "cs50p", title: "CS50P — Python", platform: "Harvard/edX", instructor: "David Malan", type: "free", format: "website", hasCertificate: true, level: "beginner", tracks: ["cs_fundamentals", "ai_ml"] }
{ id: "cs50sql", title: "CS50 SQL", platform: "Harvard/edX", type: "free", level: "beginner", tracks: ["data"] }
{ id: "cs50cyber", title: "CS50 Cybersecurity", platform: "Harvard/edX", type: "free", level: "beginner", tracks: ["cybersecurity"] }
{ id: "cs50ai", title: "CS50 AI with Python", platform: "Harvard/edX", type: "free", level: "intermediate", tracks: ["ai_ml"] }

// WEB DEVELOPMENT
{ id: "top", title: "The Odin Project — Full Stack", platform: "theodinproject.com", type: "free", level: "beginner", tracks: ["web"] }
{ id: "fcc_webdev", title: "Responsive Web Design Certification", platform: "freeCodeCamp", type: "free", hasCertificate: true, level: "beginner", tracks: ["web"] }
{ id: "fullstackopen", title: "Full Stack Open", platform: "University of Helsinki", type: "free", hasCertificate: true, level: "intermediate", tracks: ["web"], languages: ["javascript"] }
{ id: "nextjs_learn", title: "Next.js Official Learn Course", platform: "Vercel/Next.js", type: "free", level: "intermediate", tracks: ["web"] }
{ id: "elzero_html", title: "Learn HTML — Elzero Web School", platform: "YouTube", instructor: "Elzero", type: "free", hasArabic: true, contentLanguage: "arabic", level: "beginner", tracks: ["web"] }
{ id: "elzero_css", title: "Learn CSS — Elzero Web School", platform: "YouTube", instructor: "Elzero", type: "free", hasArabic: true, contentLanguage: "arabic", level: "beginner", tracks: ["web"] }
{ id: "elzero_js", title: "JavaScript Bootcamp — Elzero Web School", platform: "YouTube", instructor: "Elzero", type: "free", hasArabic: true, contentLanguage: "arabic", level: "beginner", tracks: ["web"] }

// AI & ML
{ id: "andrew_ng_ml", title: "Machine Learning Specialization", platform: "Coursera/DeepLearning.AI", instructor: "Andrew Ng", type: "audit_free", hasCertificate: true, level: "beginner", tracks: ["ai_ml"], financialAidAvailable: true, rating: 5 }
{ id: "fastai", title: "Practical Deep Learning for Coders", platform: "fast.ai", type: "free", level: "intermediate", tracks: ["ai_ml"] }
{ id: "huggingface", title: "Hugging Face NLP Course", platform: "huggingface.co", type: "free", level: "intermediate", tracks: ["ai_ml"] }
{ id: "google_ml_crash", title: "Machine Learning Crash Course", platform: "Google", type: "free", level: "beginner", tracks: ["ai_ml"] }
{ id: "deeplearning_short", title: "Short Courses — LLMs & LangChain", platform: "DeepLearning.AI", type: "free", level: "intermediate", tracks: ["ai_ml"] }
{ id: "codezilla_python", title: "Python & Data Science — Codezilla", platform: "YouTube", instructor: "Codezilla", type: "free", hasArabic: true, contentLanguage: "arabic", level: "beginner", tracks: ["ai_ml", "cs_fundamentals"] }

// CYBERSECURITY
{ id: "tryhackme", title: "TryHackMe — Pre-Security Path", platform: "TryHackMe", type: "free", level: "beginner", tracks: ["cybersecurity"], rating: 5 }
{ id: "portswigger", title: "Web Security Academy", platform: "PortSwigger", type: "free", level: "intermediate", tracks: ["cybersecurity"], rating: 5 }
{ id: "google_cyber", title: "Google Cybersecurity Certificate", platform: "Coursera/Google", type: "audit_free", hasCertificate: true, level: "beginner", tracks: ["cybersecurity"], financialAidAvailable: true }

// DATA SCIENCE
{ id: "kaggle_learn", title: "Kaggle Learn — Python, ML, SQL", platform: "Kaggle", type: "free", hasCertificate: true, level: "beginner", tracks: ["data", "ai_ml"] }
{ id: "ibm_data", title: "IBM Data Science Professional Certificate", platform: "Coursera/IBM", type: "audit_free", level: "beginner", tracks: ["data", "ai_ml"], financialAidAvailable: true }
{ id: "google_data", title: "Google Data Analytics Certificate", platform: "Coursera/Google", type: "audit_free", hasCertificate: true, level: "beginner", tracks: ["data"], financialAidAvailable: true }

// CLOUD & DEVOPS
{ id: "aws_ccp", title: "AWS Cloud Practitioner — freeCodeCamp", platform: "YouTube/freeCodeCamp", type: "free", level: "beginner", tracks: ["cloud"], durationHours: 13 }
{ id: "azure_900", title: "Azure Fundamentals AZ-900", platform: "Microsoft Learn", type: "free", hasCertificate: false, level: "beginner", tracks: ["cloud"] }
{ id: "docker_tutorial", title: "Docker — TechWorld with Nana", platform: "YouTube", type: "free", level: "beginner", tracks: ["cloud"] }
{ id: "github_skills", title: "GitHub Skills", platform: "GitHub", type: "free", hasCertificate: true, level: "beginner", tracks: ["cloud"] }

// MOBILE
{ id: "flutter_codelabs", title: "Flutter Official Codelabs", platform: "Flutter/Google", type: "free", level: "beginner", tracks: ["mobile"], languages: ["dart"] }
{ id: "android_compose", title: "Android Basics with Compose", platform: "Google Developers", type: "free", hasCertificate: true, level: "beginner", tracks: ["mobile"], languages: ["kotlin"] }

// MATH
{ id: "3b1b_linalg", title: "Essence of Linear Algebra", platform: "YouTube/3Blue1Brown", type: "free", level: "beginner", tracks: ["math"], rating: 5 }
{ id: "khan_math", title: "Mathematics — Khan Academy", platform: "Khan Academy", type: "free", level: "beginner", tracks: ["math"] }
{ id: "mit_linalg", title: "Linear Algebra — MIT 18.06 (Gilbert Strang)", platform: "MIT OCW", type: "free", level: "intermediate", tracks: ["math", "ai_ml"] }
```

#### Section 6: FAQ
```
- "What's the difference between Free and Audit Free?"
- "Can I really get financial aid for Coursera courses from Egypt?"
- "Which course should an absolute beginner start with?"
- "Are Arabic courses lower quality than English ones?"
- "How were the star ratings determined?"
```

---

### 6.4 Careers Page (`/careers`)

**Accent color:** `neo-orange` (#FF6B35)

#### Section 1: Page Header
```
H1: "Careers in Egyptian Tech"
Subtitle: "From your first internship to remote work — the honest guide."
```

#### Section 2: How Egyptian Hiring Actually Works
```
A step-by-step visual timeline (horizontal on desktop, vertical on mobile):

Step 1: Build Skills & Portfolio
  → CV, GitHub, LinkedIn
Step 2: Apply (LinkedIn, Wuzzuf, referrals)
  → Referrals fill most positions before posting
Step 3: Screening Call (15–30 min, HR)
  → English level, general fit, salary expectation
Step 4: Technical Assessment
  → Take-home task OR online coding test
Step 5: Technical Interview (1–2 rounds)
  → Problem solving, system design (senior), past projects
Step 6: HR/Culture Fit Round
Step 7: Offer

Each step: NeoCard, collapsible, with tips for that stage
```

#### Section 3: Egyptian Companies

**CompanyFilter:**
```
Filter by:
- Type: [All] [Egyptian Startup] [Egyptian Corporate] [Multinational MNC]
- Stack: [Python] [Java] [JavaScript] [.NET] [Flutter] [Embedded]
- Size: [Startup <50] [Mid 50–500] [Large 500+]
```

**CompanyCard:**
```tsx
interface Company {
  id: string
  name: string
  type: 'egyptian_startup' | 'egyptian_corporate' | 'multinational'
  description: string       // 1–2 lines
  techStack: string[]       // main technologies used
  careersUrl: string
  linkedinUrl?: string
  size: 'startup' | 'mid' | 'large'
  domains: string[]         // fintech, healthtech, logistics, etc.
  knownFor: string          // e.g., "Strong engineering culture"
  hiresInterns: boolean
  hiresRemote: boolean
}
```

**Full company list in `data/companies.ts`:**
```ts
// Egyptian Startups
{ name: "Instabug", type: "egyptian_startup", techStack: ["iOS", "Android", "Ruby", "React"], domains: ["DevTools", "Mobile SDK"], knownFor: "World-class engineering culture, used by Fortune 500 apps", hiresInterns: true, hiresRemote: true, careersUrl: "https://instabug.com/careers" }
{ name: "Fawry", type: "egyptian_corporate", techStack: ["Java", "Spring", ".NET", "React"], domains: ["Fintech", "Payments"], knownFor: "Largest Egyptian fintech, stable employment, huge team", hiresInterns: true, hiresRemote: false }
{ name: "Paymob", type: "egyptian_startup", techStack: ["Python", "React", "Node.js"], domains: ["Fintech", "Payments"], knownFor: "Fast-growing, well-funded, modern stack", hiresInterns: true }
{ name: "Breadfast", type: "egyptian_startup", techStack: ["Python", "React", "Flutter"], domains: ["E-commerce", "Grocery"], knownFor: "Strong product and engineering focus" }
{ name: "Bosta", type: "egyptian_startup", techStack: ["Node.js", "React", "Python"], domains: ["Logistics", "Tech"] }
{ name: "Halan", type: "egyptian_startup", techStack: ["Flutter", "Node.js", "Python"], domains: ["Super App", "Fintech", "Logistics"], knownFor: "Large engineering team, growing fast" }
{ name: "Vezeeta", type: "egyptian_startup", techStack: ["React", "Node.js", "Flutter"], domains: ["HealthTech"] }
{ name: "MaxAB", type: "egyptian_startup", techStack: ["Python", "React", "Data"], domains: ["B2B", "Food Distribution"] }
{ name: "Cartona", type: "egyptian_startup", techStack: ["Node.js", "Flutter"], domains: ["B2B Marketplace"] }
// Multinationals
{ name: "Microsoft Egypt", type: "multinational", techStack: [".NET", "Azure", "C#", "TypeScript"], domains: ["Cloud", "Enterprise"], knownFor: "Strong compensation, great culture" }
{ name: "IBM Egypt", type: "multinational", techStack: ["Java", "Python", "Cloud"], domains: ["Cloud", "AI", "Consulting"] }
{ name: "Valeo Egypt", type: "multinational", techStack: ["C", "C++", "Embedded", "Python"], domains: ["Automotive", "Embedded Systems"], knownFor: "Best-paying embedded systems employer in Egypt" }
{ name: "Vodafone Egypt", type: "multinational", techStack: ["Java", "Python", ".NET", "Network"], domains: ["Telecom", "Tech"] }
{ name: "Orange Egypt", type: "multinational", techStack: ["Java", "Python", "Cloud"], domains: ["Telecom", "Security"] }
{ name: "SAP Egypt", type: "multinational", techStack: ["ABAP", "Java", ".NET", "SAP BTP"], domains: ["Enterprise", "ERP"] }
{ name: "Dell Technologies", type: "multinational", techStack: ["Java", "Python", "C++"], domains: ["Software Engineering"] }
{ name: "Siemens EDA (Mentor)", type: "multinational", techStack: ["C++", "Python", "EDA"], domains: ["Electronic Design Automation"], knownFor: "Very high salaries for EDA engineers" }
```

#### Section 4: Job Boards
```
Cards for each job board:
- LinkedIn Jobs — best for all levels, especially remote. Filter "Egypt" + "Remote"
- Wuzzuf — largest Egyptian job board, most local companies post here
- Forasna — Egyptian jobs, more SMEs and smaller companies
- Bayt — MENA-wide, good for Gulf remote roles
- Indeed Egypt — good for entry-level search
- Glassdoor — use to check company reviews and salaries before interviewing
- We Work Remotely — for remote-only positions globally
- Remote.co — tech remote jobs
- Wellfound (AngelList) — startup jobs globally, some Egypt-based
```

#### Section 5: Remote Work Guide
```
Collapsible NeoAccordion sections:
1. "Why remote work is the biggest opportunity for Egyptian devs"
   → Currency math: $1,500/month = ~75,000 EGP vs 15,000 EGP local
2. "Prerequisites before applying for remote work"
   → English level, async communication, portfolio, tools (Slack, Notion, Loom)
3. "Where to find remote jobs"
   → Platform list with descriptions
4. "How to stand out as an Egyptian remote candidate"
   → Portfolio tips, LinkedIn optimization, cover letter advice
5. "Realistic remote income expectations"
   → Table: Level × Experience → USD/month range
6. "How to receive international payments"
   → Payoneer, Wise, USD bank accounts, brief mention of P2P
```

#### Section 6: Internship Guide
```
Collapsible sections:
1. "Why your first internship is your most important career move"
2. "Where to find internships in Egypt"
3. "The cold email strategy that works"
   → Template email they can copy and use directly
4. "What to expect from Egyptian internships"
   → Timeline, paid vs unpaid, remote vs on-site
5. "ITI Summer Training" — link to Tools page ITI section
```

#### Section 7: FAQ
```
- "What skills do Egyptian companies actually care about?"
- "Is GPA important for getting hired in Egypt?"
- "How long does the Egyptian hiring process take?"
- "Should I apply to companies or freelance first?"
- "Do I need a car to work at companies in Smart Village?"
```

---

### 6.5 Tools Page (`/tools`)

**Accent color:** `neo-purple` (#9B5DE5)

#### Section 1: Page Header
```
H1: "Developer Tools & Free Perks"
Subtitle: "Everything you need as a developer. Most of it free. All of it useful."
```

#### Section 2: Tool Categories

Eight grouped sections, each a NeoAccordion or NeoCard cluster:

**1. GitHub Student Developer Pack**
```
Big featured NeoCard with yellow/purple accent:
- What it is: "The most valuable free thing you can get as a student"
- Step-by-step how to apply (3 steps)
- Full list of included tools:
  - GitHub Pro (private repos, advanced features)
  - JetBrains IDEs ($70/year value)
  - Namecheap .me domain ($15 value)
  - DigitalOcean $200 credit
  - Microsoft Azure $100 credit
  - DataCamp 3 months free
  - Canva Pro
  - 1Password
  - And 80+ more
- Link: education.github.com/pack
```

**2. Code Editors & IDEs**
```
Tools:
- VS Code (free, most popular) — extensions list included
- JetBrains IDEs (free for students) — IntelliJ, PyCharm, WebStorm
- Neovim (free, for the committed) — mention, don't push
- Cursor (AI-powered editor, free tier) — great for AI-assisted coding

VS Code Extensions to install:
- Prettier — code formatter
- ESLint — JavaScript linting
- GitLens — Git superpowers
- GitHub Copilot — free for students (via GitHub Student Pack)
- Tailwind CSS IntelliSense
- Python (Microsoft)
- Pylance
- Thunder Client — REST API testing inside VS Code
- Error Lens — shows errors inline
- Auto Rename Tag
- Path Intellisense
- Material Icon Theme
- One Dark Pro (theme)
- Arabic language pack (if needed)
```

**3. Free Cloud Credits & Hosting**
```
- AWS Free Tier — 12 months of free services, always-free tier after
- Azure for Students — $100 credit, no credit card
- Google Cloud Free Tier — $300 credit for 90 days
- Vercel — free hosting for Next.js / React / static sites
- Netlify — free static hosting + serverless functions
- Railway — free tier for backend deployments
- Render — free tier for web services
- GitHub Pages — free static hosting directly from repo
- Supabase — free Postgres database + auth + storage
- PlanetScale — free MySQL database (check current free tier)
- MongoDB Atlas — free 512MB cluster
```

**4. Design Tools**
```
- Figma — free education plan (apply with university email)
- Canva — free Pro via GitHub Student Pack
- Excalidraw — free online whiteboard for diagrams
- drawio / diagrams.net — free system design diagrams
- Coolors — free color palette generator
- Google Fonts — free fonts
- unDraw — free open-source illustrations
- Heroicons / Lucide — free icon sets
- Flaticon — icons (free tier)
```

**5. Learning & Productivity**
```
- Notion — free student plan (apply with university email)
- Obsidian — free note-taking, great for CS notes
- Anki — free flashcards for memorization (commands, syntax)
- Excalidraw — whiteboard for learning diagrams
- Loom — free screen recording (for async remote work)
- Zoom — free tier (40-min limit)
- Google Meet — free
- Pomodoro Timer — pomofocus.io (free)
```

**6. VPN & Internet Tools**
```
Note: "For accessing geo-restricted educational content and securing public wifi"
- ProtonVPN — free tier, trustworthy, no logs. Best free VPN.
- Windscribe — 10GB/month free, good free option
- Mullvad — paid but cheap (~$5/month), best for remote work
- NordVPN — popular paid option, often has sales
- Note on why VPNs matter for Egyptian devs:
  Some course platforms, GitHub Copilot, and payment platforms work better with VPN
  Securing connection when working from cafes / university wifi
```

**7. AI & Developer AI Tools**
```
- GitHub Copilot — free for students via GitHub Student Pack
- Claude (Anthropic) — free tier, excellent for code explanation and debugging
- ChatGPT — free tier available
- Gemini — free tier, integrated with Google tools
- Cursor — AI-powered VS Code fork, free tier
- Codeium — free AI code completion (alternative to Copilot)
- v0 by Vercel — free AI UI component generation
- Perplexity — free AI search for research
```

**8. Egyptian-Specific Tools**
```
- Payoneer — for receiving international payments
- Wise — cheaper international transfers
- Instapay Egypt — local instant transfers
- CIB Online / NBE Online — Egyptian bank apps
- Vodafone Cash / Orange Money — mobile wallets useful for freelancers
- fawry — for paying bills, subscriptions
```

#### Section 3: ITI Programs Highlight
```
Featured section with orange accent:
"The Most Valuable Free/Subsidized Program in Egypt"
- What ITI is
- Available tracks (list)
- How to apply
- Application timeline (usually April–May)
- Link: iti.gov.eg
```

#### Section 4: FAQ
```
- "Is GitHub Copilot really free for students?"
- "Which VPN is safest to use in Egypt?"
- "How do I get JetBrains IDEs for free?"
- "What's the best free database to use for projects?"
```

---

### 6.6 CV & Projects Page (`/cv-projects`)

**Accent color:** `neo-pink` (#FF0F80)

#### Section 1: Page Header
```
H1: "CV & Project Ideas"
Subtitle: "Build a CV that gets responses. Build projects that get interviews."
```

#### Section 2: Tabs
```
Two tabs:
[CV Guide]    [Project Ideas]
```

**Tab 1: CV Guide**

```
Sub-section A: "What Egyptian Hiring Managers Actually Look For"
NeoCard with tips:
- Your GitHub link is more important than your GPA
- 1 page max for less than 3 years of experience
- List projects with links to GitHub AND live demo
- Include your tech stack clearly
- Don't lie about skills — you will be tested
- English CV for most companies (even local ones at mid-large scale)

Sub-section B: "What to Include — Section by Section"
Collapsible accordion per section:

1. Contact & Links
   ✅ Name, email, phone (WhatsApp number), GitHub URL, LinkedIn URL
   ✅ Portfolio website if you have one
   ❌ Address (unnecessary), photo (optional and risky), age/birthdate

2. Summary / Objective (optional but powerful if done right)
   ✅ 2–3 lines: who you are, main skills, what you're looking for
   ❌ Generic statements like "hardworking team player"
   Example: "CS student at Cairo University specializing in backend development with Python and Django. Built 3 production apps. Looking for a backend internship where I can solve real problems."

3. Education
   ✅ University name, faculty, expected graduation year, GPA (only if > 3.5/4 or equivalent)
   ❌ High school info (after year 2)

4. Skills
   ✅ Categorized: Languages (Python, JS), Frameworks (React, Django), Tools (Git, Docker), Databases (PostgreSQL, MongoDB)
   ❌ Soft skills list (communication, teamwork) — everyone says this

5. Projects (most important section)
   ✅ Project name + 1-line description + tech stack used + GitHub link + live demo link
   ✅ Mention impact: "Reduced loading time by 60%", "500+ users"
   ❌ Tutorial copies, university homework

6. Experience / Internships
   ✅ Company, role, dates, 2–3 bullet points of what you did + impact
   ✅ Even unpaid internships count — mention them
   ❌ Unrelated work experience (unless nothing else exists)

7. Certifications (optional)
   ✅ Only real certs: Google, AWS, Meta, Harvard CS50
   ❌ Udemy certificates (everyone has them — they don't impress)

Sub-section C: "CV Template"
A downloadable/copyable plain text + LaTeX CV template in Egyptian style
Options:
- Link to Overleaf free LaTeX template
- Link to Jake's Resume (popular CS resume template on GitHub)
- Link to Canva CS Resume template (free)
Note: "Keep it clean, black and white, ATS-friendly"
```

**Tab 2: Project Ideas**

```
ProjectFilter:
- Filter by Stack: [All] [Python] [JavaScript/React] [Flutter] [Node.js] [AI/ML] [Security]
- Filter by Difficulty: [All] [Beginner] [Intermediate] [Advanced]
- Filter by Target: [All] [Good for local Egyptian companies] [Good for remote/global] [Both]
- Filter by Type: [All] [Web App] [Mobile App] [API/Backend] [Data/ML] [Security Tool]

ProjectIdeaCard:
interface ProjectIdea {
  id: string
  title: string
  description: string      // 2–3 lines
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  stack: string[]
  type: string[]
  targetMarket: 'local' | 'remote' | 'both'
  whyItImpress: string     // 1-line — why this stands out to employers
  keyFeatures: string[]    // 4–6 bullet points of what to build
  bonusFeatures: string[]  // optional extras to add if time permits
  estimatedTime: string    // "2–3 weeks", "1 month"
}

Full project ideas list (minimum 20 ideas across all difficulties/stacks):

Beginner:
1. Personal Portfolio Website — HTML/CSS/JS — build your actual portfolio
2. Arabic/English Dictionary App — React — API integration practice
3. Expense Tracker — React + localStorage — state management practice
4. Weather App — React + OpenWeather API — API consumption
5. GitHub Profile Viewer — React — GitHub API, useful for others
6. Pomodoro Timer — vanilla JS — useful for other students

Intermediate:
7. Egyptian University Events Aggregator — Next.js + scraping — solves real local problem
8. Freelance Job Board for Egypt — Next.js + Postgres — market gap
9. Arabic Resume Builder — React — market need in Egypt
10. Food Delivery App Clone — Flutter + Firebase — mobile + real-time
11. Student Mental Health Platform — Next.js + auth — meaningful project
12. CS50 Problem Set Tracker — React — your classmates will actually use it
13. Egyptian Tech Job Board — Next.js — curated local jobs
14. Graduation Project Finder — React — helps students find project ideas
15. WhatsApp Study Group Organizer — React/Node — solves real student problem
16. Prayer Times + Study Schedule App — Flutter — local product idea

Advanced:
17. AI-Powered Arabic Text Summarizer — Python + FastAPI + React — NLP + real need
18. Crop Disease Detection for Egyptian Agriculture — Python + CV — impactful AI
19. Smart Expense Report from Receipt Photo — Python + OCR + React — real product
20. Egyptian Stock Market Dashboard — Python + React + websockets — data + finance
21. Automated Vulnerability Scanner — Python — impressive for security track
22. Full E-commerce Platform with Fawry Integration — Next.js + Node — local payment
```

#### Section 3: Graduation Project Guide
```
Collapsible sections:
1. "The difference between a forgettable and impressive graduation project"
2. "The professor vs the industry — what each actually wants"
3. "How to pick your topic in 3 questions"
   Q1: Does a real person need this?
   Q2: Can you demo it live on presentation day?
   Q3: Does it involve tech you want to put on your CV?
4. "Presentation tips that make supervisors remember you"
5. "How to put your graduation project on GitHub properly"
```

#### Section 4: FAQ
```
- "My GPA is not great. How do I compensate?"
- "How many projects should I have before applying for jobs?"
- "Should I build projects from tutorials or from scratch?"
- "Is it okay to list a graduation project that's not finished yet?"
- "What makes a project impressive to a remote employer vs a local Egyptian company?"
```

---

## 7. Custom Components — Full Specification

### NeoCard
```tsx
interface NeoCardProps {
  children: React.ReactNode
  className?: string
  accent?: string          // hex color for top accent border
  hover?: boolean          // enable hover lift animation (default: true)
  shadow?: 'default' | 'colored' | 'none'
  id?: string              // for copy link feature
}

// Base styles:
// border-2 border-black dark:border-white
// shadow-[4px_4px_0px_0px_#0A0A0A] dark:shadow-[4px_4px_0px_0px_#F5F5F0]
// bg-white dark:bg-[#1A1A1A]
// transition-all duration-150
// hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#0A0A0A]
// If accent: border-t-4 with accent color
```

### NeoButton
```tsx
interface NeoButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  accent?: string
  onClick?: () => void
  href?: string
  className?: string
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

// primary: black bg, white text, black border
// secondary: white bg, black text, black border
// ghost: transparent bg, border on hover only

// Hover: -translate-x-[2px] -translate-y-[2px]
// Active: translate-x-[2px] translate-y-[2px] shadow-none
```

### NeoAccordion
```tsx
interface NeoAccordionProps {
  items: Array<{
    id: string
    trigger: React.ReactNode     // header content
    content: React.ReactNode     // body content
    defaultOpen?: boolean
  }>
  exclusive?: boolean            // only one open at a time
  accent?: string
}

// Trigger: full-width button with border-b-2
// Open indicator: "+" / "×" with rotate transition
// Content: smooth height animation using max-height transition
// Border: 2px black border on entire accordion
// Each item has border-b between items
```

### NeoBadge
```tsx
interface NeoBadgeProps {
  label: string
  color?: 'yellow' | 'green' | 'blue' | 'orange' | 'purple' | 'pink' | 'red'
  size?: 'sm' | 'md'
  removable?: boolean        // shows ✕ button for active filter tags
  onRemove?: () => void
}

// Styles: inline-flex, border-2, font-bold, uppercase text, tight padding
// No border radius (flat neobrutalism)
```

### NeoInput
```tsx
interface NeoInputProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
  icon?: React.ReactNode
  clearable?: boolean
  className?: string
}

// Styles: border-2 border-black dark:border-white
// Focus: outline-2 outline-offset-2 outline-black (no default browser focus ring)
// Background: white dark:bg-[#1A1A1A]
```

### NeoToast
```tsx
// Fixed position: bottom-right on desktop, bottom-center on mobile
// Appears with slide-up animation
// Auto-dismiss after 2500ms
// Styles: NeoCard with black bg + white text (inverted)
// Shows: icon + message text

interface ToastMessage {
  id: string
  message: string
  type: 'success' | 'info' | 'error'
  icon?: string
}
```

### StarRating
```tsx
interface StarRatingProps {
  rating: number    // 1–5
  max?: number      // default 5
  size?: 'sm' | 'md'
  showNumber?: boolean
}

// Filled stars: colored with page accent
// Empty stars: gray
// Show rating number next to stars if showNumber
```

### ProgressBar
```tsx
interface ProgressBarProps {
  value: number      // 0–100
  accent?: string    // color of the filled portion
  label?: string     // e.g., "12 of 20 steps"
  size?: 'sm' | 'md'
}

// Border: 2px black
// Fill: accent color background
// Flat (no border radius)
// Label shown above or below bar
```

---

## 8. Data Files — Full Specification

### data/roadmaps.ts
```ts
export type TrackId = 'webdev' | 'ai_ml' | 'cybersecurity' | 'mobile' | 'cloud_devops' | 'data_engineering'

export interface RoadmapStep {
  id: string
  title: string
  description?: string
  resourceUrl?: string
  resourceName?: string
  estimatedDays?: number
}

export interface RoadmapPhase {
  id: string
  number: 1 | 2 | 3
  name: string
  arabicName: string
  durationEstimate: string     // "4–6 weeks"
  description: string
  steps: RoadmapStep[]
  buildProject: string         // what to build at end of this phase
  buildProjectDescription: string
}

export interface Track {
  id: TrackId
  name: string
  arabicName: string
  icon: string                 // emoji
  description: string
  accentColor: string          // hex
  phases: RoadmapPhase[]
  faqs: FAQItem[]
  egyptianMarketNote: string   // why this track matters in Egypt specifically
}
```

### data/courses.ts
```ts
export type TrackName = 'web' | 'ai_ml' | 'cybersecurity' | 'mobile' | 'cloud' | 'data' | 'cs_fundamentals' | 'math' | 'other'
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced' | 'all'
export type CourseType = 'free' | 'paid' | 'audit_free'
export type CourseFormat = 'youtube' | 'website' | 'book'
export type ContentLanguage = 'english' | 'arabic' | 'bilingual'

export interface Course {
  id: string
  title: string
  platform: string
  instructor?: string
  url: string
  type: CourseType
  format: CourseFormat
  hasCertificate: boolean
  hasArabic: boolean
  arabicUrl?: string
  contentLanguage: ContentLanguage
  tracks: TrackName[]
  languages?: string[]          // programming languages used in the course
  level: CourseLevel
  durationHours?: number
  rating: number                // 1–5, author-curated
  ratingCount?: number
  description: string
  tags: string[]
  isFeatured?: boolean
  price?: number
  financialAidAvailable?: boolean
  lastVerified?: string         // date string, for keeping data fresh
}
```

### data/companies.ts
```ts
export type CompanyType = 'egyptian_startup' | 'egyptian_corporate' | 'multinational'
export type CompanySize = 'startup' | 'mid' | 'large'

export interface Company {
  id: string
  name: string
  type: CompanyType
  size: CompanySize
  description: string
  techStack: string[]
  domains: string[]
  careersUrl: string
  linkedinUrl?: string
  websiteUrl?: string
  knownFor: string
  hiresInterns: boolean
  hiresRemote: boolean
  location?: string            // "Cairo - Smart Village", "Cairo - Maadi", etc.
}
```

### data/tools.ts
```ts
export type ToolCategory = 'editor' | 'cloud' | 'design' | 'productivity' | 'vpn' | 'ai' | 'payment' | 'student_pack'

export interface Tool {
  id: string
  name: string
  description: string
  url: string
  category: ToolCategory
  isFree: boolean
  hasFreeStudentPlan: boolean
  studentPlanUrl?: string
  tags: string[]
  platforms?: string[]         // "Windows", "Mac", "Linux", "Web"
  recommendedFor?: string      // "Best for: Python developers", etc.
}
```

### data/faqs.ts
```ts
export interface FAQItem {
  id: string
  page: string         // 'home' | 'roadmaps' | 'courses' | 'careers' | 'tools' | 'cv_projects'
  track?: string       // optional, for track-specific FAQs on roadmaps page
  question: string
  answer: string
}
```

---

## 9. Feature Deep Dives

### 9.1 "I'm Feeling Lost" Flow

```tsx
// Trigger: Button on Home hero section
// Implementation: Modal or full-screen overlay

// Step 1: "What describes you right now?"
// Options (each a large NeoButton):
//   "I'm brand new to programming"
//   "I know some basics but don't know what to do next"
//   "I know what to learn but don't know how to find a job"
//   "I'm about to graduate and I'm scared"

// Step 2: Based on answer, show tailored guidance:

// If "brand new":
//   → "Perfect. Start here, in this order:"
//   → 1. Watch CS50 Week 0 (link) — "This will change how you think"
//   → 2. Pick The Odin Project (link) — "The best free guided curriculum"
//   → 3. Make a GitHub account — "Today, not later"
//   → "Come back when you've finished CS50 Week 0. You'll know what to do next."
//   → [Go to CS50 →] big button

// If "know basics but lost":
//   → "The issue is probably one of these:"
//   → Option A: "I don't know what to specialize in" → link to Roadmaps page
//   → Option B: "I know my track but don't know what to learn next" → Year filter
//   → Option C: "I keep starting courses and not finishing" → short advice card

// If "can't find job":
//   → "Read this. Seriously:"
//   → Checklist: GitHub profile? ✓, LinkedIn? ✓, 2+ projects? ✓, Applied 50+ places? ?
//   → Link to Careers page

// If "scared about graduating":
//   → "You have more time than you think. Here's the honest breakdown:"
//   → Timeline: 3 months of focused work = job-ready
//   → Priority checklist: 5 items to do before graduation
//   → Link to CV page

// Each flow ends with a [Close] button and optional [Share this guide] button
```

### 9.2 Roadmap Visual Flowchart

```
Implementation: Pure CSS/HTML — no canvas or heavy SVG library needed

Desktop layout:
┌─────────────────────────────────────────┐
│           PHASE 1 — المبتدئ             │
│      Click to scroll to details ↓       │
└─────────────────┬───────────────────────┘
                  │
                  ▼ (arrow: thick black line with arrowhead)
┌─────────────────────────────────────────┐
│         PHASE 2 — Intermediate          │
│      Click to scroll to details ↓       │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│          PHASE 3 — Job-Ready            │
│      Click to scroll to details ↓       │
└─────────────────────────────────────────┘

Each box:
- NeoCard with phase accent color
- Phase number + name prominently
- Duration estimate
- "N steps" count
- Progress indicator: "X/N complete"
- Clicking scrolls to that phase's accordion below

Mobile layout:
- Simplified: just three stacked NeoCards with down arrow between them
- Same click behavior
```

### 9.3 Course Filtering System

```ts
// Filter state:
interface CourseFilters {
  search: string
  tracks: TrackName[]
  languages: string[]
  type: CourseType | 'all'
  format: CourseFormat | 'all'
  hasCertificate: boolean | null
  contentLanguage: ContentLanguage | 'all'
  rating: number | null        // minimum rating filter
}

// Filtering logic (pure function, fast):
function filterCourses(courses: Course[], filters: CourseFilters): Course[] {
  return courses.filter(course => {
    if (filters.search) {
      const q = filters.search.toLowerCase()
      const match = course.title.toLowerCase().includes(q)
        || course.platform.toLowerCase().includes(q)
        || course.instructor?.toLowerCase().includes(q)
        || course.tags.some(t => t.toLowerCase().includes(q))
      if (!match) return false
    }
    if (filters.tracks.length > 0) {
      if (!filters.tracks.some(t => course.tracks.includes(t))) return false
    }
    if (filters.type !== 'all' && course.type !== filters.type) return false
    if (filters.format !== 'all' && course.format !== filters.format) return false
    if (filters.hasCertificate !== null && course.hasCertificate !== filters.hasCertificate) return false
    if (filters.contentLanguage !== 'all' && course.contentLanguage !== filters.contentLanguage) return false
    if (filters.rating && course.rating < filters.rating) return false
    return true
  })
}

// Active filters shown as removable NeoBadge chips
// "Clear all" button resets to default state
// Result count updates in real time
// Empty state: "No courses match your filters — try removing some filters"
```

---

## 10. Footer

**The footer is the same across all pages.**

```tsx
// Layout: 3-column on desktop, stacked on mobile

// Column 1: Branding
// - Site name: "EG CS Guide" (bold, heading font)
// - Tagline: "Built for Egyptian CS students 🇪🇬"
// - Made with ❤️ by .uwz (clickable, links to GitHub profile)

// Column 2: Quick Links
// - Home
// - Roadmaps
// - Courses
// - Careers
// - Tools
// - CV & Projects

// Column 3: Contribute
// - "Found a mistake?" → GitHub Issues link
// - "Suggest a resource" → triggers RecommendCourse modal
// - "Star on GitHub ⭐" → GitHub repo link
// - "Share with a friend" → copies site URL

// Bottom bar (full width):
// Left: "Last updated: [date]"
// Center: "Made with ❤️ by .uwz" ← THIS EXACT LINE, .uwz links to GitHub
// Right: "Open source — MIT License"

// Styling:
// Border top: 2px solid black dark:white
// Background: same as page background
// All links are underlined on hover
```

---

## 11. Deployment

### Option A: Vercel (Recommended)
```
1. Push project to GitHub
2. Go to vercel.com → New Project → Import GitHub repo
3. Framework: Next.js (auto-detected)
4. Deploy → get a URL like https://egyptian-cs-guide.vercel.app
5. Custom domain: point any domain you buy to Vercel
```

### Option B: GitHub Pages (Static Export)
```ts
// next.config.ts for static export:
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
}

// Deploy steps:
// 1. Add to package.json: "deploy": "next build && touch out/.nojekyll"
// 2. Push to GitHub
// 3. Settings → Pages → Source: GitHub Actions
// 4. Add .github/workflows/deploy.yml for automatic deploys
```

### README.md must include:
```markdown
# EG CS Guide

Egyptian CS Student Guide — Everything you need in one place.

## Run locally
\`\`\`bash
git clone https://github.com/[username]/egyptian-cs-guide
cd egyptian-cs-guide
npm install
npm run dev
\`\`\`

## Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/[username]/egyptian-cs-guide)

## Contribute
Found a mistake or want to add a resource? Open an issue or submit a PR.

## Made with ❤️ by .uwz
```

---

## 12. Implementation Notes for AI

> **This section is specifically written for Claude Code, Cursor, or any AI agent implementing this project.**

### Start Here — Implementation Order:
```
1. Initialize Next.js 14 project with TypeScript + Tailwind
2. Set up tailwind.config.ts with all design tokens from Section 4.5
3. Set up globals.css with CSS variables for light/dark mode
4. Build ThemeProvider + useTheme hook + localStorage persistence
5. Build all UI primitives: NeoCard, NeoButton, NeoBadge, NeoAccordion, NeoInput, NeoToast
6. Build Navbar (desktop + mobile) with theme toggle
7. Build Footer with exact "made with ❤️ by .uwz" credit
8. Create all data files (courses.ts, companies.ts, roadmaps.ts, tools.ts, faqs.ts)
9. Build Home page (Hero → QuickStats → YearFilter → SiteOverview → FAQ)
10. Build Roadmaps page
11. Build Courses page (this is the most complex — filters + financial aid modal)
12. Build Careers page
13. Build Tools page
14. Build CV & Projects page
15. Add copy link feature globally
16. Add progress checklist to roadmaps
17. Add "I'm feeling lost" modal flow
18. Test all pages on mobile (375px viewport)
19. Test dark mode on all pages
20. Verify all external links open in new tab
```

### Non-Negotiable Rules:
```
✅ Every external link: target="_blank" rel="noopener noreferrer"
✅ All pages mobile-first — test at 375px first
✅ Dark mode must work on every single component
✅ No border-radius on neobrutalism components (flat = neobrutalism)
✅ Progress checklist persists on page refresh (localStorage)
✅ Theme preference persists on page refresh (localStorage)
✅ All filter state lives in URL search params (so users can share filtered views)
✅ Footer is identical across all pages
✅ "Made with ❤️ by .uwz" links to the actual GitHub profile
✅ All images have alt text
✅ Tab/keyboard navigation works for accessibility
✅ No console errors in production build
```

### Performance Requirements:
```
- No unnecessary client components — use server components where possible
- CourseGrid should use virtualization if list exceeds 50 items (react-window or similar)
- Images: use next/image for any images
- Fonts: use next/font for Space Grotesk + Inter (no flash of wrong font)
- Avoid installing heavy dependencies — keep bundle lean
```

### Component Naming Conventions:
```
- All component files: PascalCase.tsx
- All hook files: camelCase.ts, prefixed with "use"
- All data files: camelCase.ts
- All page files: page.tsx (Next.js convention)
- CSS classes: Tailwind utility classes only, no custom CSS unless absolutely needed
- IDs for copy link: kebab-case (e.g., "course-cs50x", "company-instabug")
```

---

*End of Project Specification*

---

> **Author:** .uwz
> **GitHub:** [github.com/uwz](https://github.com/uwz) ← replace with real username
> **License:** MIT — free to use, modify, and share
> **Made with ❤️ for Egyptian CS students everywhere**
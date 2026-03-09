# Product Requirements Document
## Bentevi — AI Assistant Landing Page (V1)

**Version:** 1.0
**Date:** 2026-03-09
**Status:** Active

---

## 1. Overview

Bentevi is an AI chat assistant platform that enables website owners to embed an AI powered by their own knowledge base. Unlike generic AI chatbots, Bentevi answers only from content the user provides — no internet browsing, no hallucinations, no off-brand responses.

This document covers the requirements for the **marketing landing page (V1)** only.

**Purpose of this page:**
- Communicate Bentevi's core value proposition in seconds
- Build a waitlist of early adopters
- Establish the brand identity (calm, nature-inspired, minimal)

---

## 2. Target Users

### Primary visitor personas

| Persona | Description | Primary goal |
|---|---|---|
| Personal website owner | Portfolio owners, bloggers | Intelligent FAQ bot for their personal site |
| Small business owner | Shops and service providers | Answer customer questions 24/7 without support staff |
| Internal team lead | Engineering, product, ops teams | Conversational company knowledge base |

---

## 3. Goals

### Primary Goal
Capture waitlist signups (email + optional website URL) from qualified leads.

### Secondary Goals
- Communicate the problem (hallucinating AI) clearly and concisely
- Differentiate Bentevi's knowledge-sandbox approach from generic AI chatbots
- Establish trust through clean, calm design language

---

## 4. Page Sections

### 4.1 Navbar
- **Logo:** "Bentevi" wordmark + leaf icon in brand green
- **Navigation links (desktop):** How it Works, Features, Use Cases — smooth-scroll anchors
- **CTA button:** "Get Early Access" — scrolls to #waitlist, brand green fill
- **Scroll behavior:** Transparent on initial load (overlays dark hero); glass blur + border on scroll
- **Mobile:** Hamburger opens a full-width dropdown with the same links

### 4.2 Hero
- **Headline (very large, ~60px on desktop):** "AI that answers using your knowledge."
- **Supporting text:** Brief product description, 2 sentences max
- **Primary CTA:** "Join Early Access" → scrolls to #waitlist
- **Secondary CTA:** "See how it works" → scrolls to #how-it-works (outlined button)
- **Visual:** Static chat UI mockup on the right showing a user question → AI answer exchange
- **Background:** Dark forest-green gradient (placeholder for a real nature photo in a future version)
- **Social proof note:** "No credit card required · Free to join the waitlist"

### 4.3 Problem Statement
- **Section label:** "The problem"
- **Headline:** "AI answers are often unreliable."
- **Subtext:** Explains that generic AI pulls from the internet and produces hallucinations
- **Three pain point cards:**
  1. Hallucinations — AI invents information
  2. No control — Can't restrict what it knows
  3. Off-brand answers — Doesn't match your tone or facts
- **Design note:** Flat cards with amber left border to signal "problem" context

### 4.4 Solution
- **Section label:** "The Bentevi approach"
- **Headline:** "Your AI answers from your knowledge sandbox."
- **Description:** Explains the knowledge-first approach — users define what the AI knows
- **Visual diagram (built in JSX):** Your Content → Bentevi → AI Answer flow
- **Proof points:** 4 checkmark bullets reinforcing the sandbox concept
- **Design note:** White background; green checkmarks signal the positive contrast to the problem section

### 4.5 How it Works (`id="how-it-works"`)
- **Section label:** "How it works"
- **Headline:** "Get started in 3 simple steps."
- **Step 1:** Add your knowledge — Upload docs, paste text, connect your content
- **Step 2:** Train your assistant — Bentevi indexes and prepares the knowledge base
- **Step 3:** Embed on your site — One line of code, assistant is live
- **Design note:** Numbered glass cards on light green background; dashed connector line between cards on desktop

### 4.6 Features (`id="features"`)
- **Section label:** "Features"
- **Headline:** "Everything you need to run a reliable AI assistant."
- **6 feature cards (3-column grid):**
  1. Knowledge sandbox — Answers only from user-defined sources
  2. Zero hallucinations — Says "I don't know" instead of guessing
  3. Easy embedding — One script tag
  4. Website chat — Customizable widget
  5. Conversation dashboard — Review and analyze chats
  6. Human handoff — Transfer to a human when needed

### 4.7 Use Cases (`id="use-cases"`)
- **Section label:** "Use cases"
- **Headline:** "Built for different needs, same core idea."
- **Three persona cards:**
  1. Personal websites — Portfolio, blogger assistant
  2. Small businesses — Customer FAQ automation
  3. Internal documentation — Team knowledge base
- **Design note:** Each card includes an example question in an italic quote block

### 4.8 Waitlist / Early Access (`id="waitlist"`)
- **Headline:** "Be the first to know when we launch."
- **Subtext:** Brief, honest — no hype about what the waitlist does
- **Form fields:**
  - Email address (required, `type="email"`)
  - Website URL (optional, `type="url"`, no required attribute)
- **Submit behavior:**
  - Loading state: spinner in button, "Joining..." label
  - Success state: Replace form with a thank-you message and green checkmark (no page redirect)
  - Error state: Inline error message below the form
- **Social proof:** "120+ people already on the waitlist" (static, below the form card)
- **V1 implementation:** Submissions logged to console. See Tech.md for upgrade path.

### 4.9 Footer
- **Layout:** 4-column grid (brand + product + company + legal)
- **Brand column:** Logo, one-line description
- **Product:** How it Works, Features, Use Cases, Pricing (placeholder)
- **Company:** About, Blog, Contact (all placeholder)
- **Legal:** Privacy Policy, Terms of Service (placeholder)
- **Bottom row:** Copyright + "Early access" label

---

## 5. Non-Goals (V1 Landing Page)

- Backend waitlist persistence (Mailchimp, database — planned for post-V1)
- Authentication or user accounts
- Pricing table with real pricing
- Blog or documentation
- Dark mode
- Animations (Framer Motion — post-V1)
- Real hero background photography (deferred to after brand assets are ready)
- Analytics integration (Plausible, Vercel Analytics — post-V1)

---

## 6. Success Metrics

| Metric | Target |
|---|---|
| Waitlist signups | 500 in first 30 days |
| Email capture rate | >15% of unique visitors |
| Page load (LCP) | <2.5s on mobile |
| Core Web Vitals | All green |
| Mobile bounce rate | <60% |

---

## 7. Design Principles

- **Calm over hype** — No aggressive CTAs, no countdown timers, no flashy colors
- **Nature-inspired** — Brand name Bentevi means "bird" in Portuguese; visual language uses greens and natural imagery
- **Green means growth** — Brand color #577F4F signals nature, trust, and measured confidence
- **White space is content** — Generous padding communicates quality
- **Mobile-first** — Designed for small screens first, enhanced for desktop
- **Clear hierarchy** — Very large headings, short paragraphs, obvious CTAs

---

## 8. Brand

| Token | Value |
|---|---|
| Primary color | `#577F4F` |
| Dark variant | `#3d5c37` |
| Light variant | `#6fa364` |
| Muted background | `#e8f0e6` |
| Primary font | Nunito Sans |
| Font weights | 400, 500, 600, 700 |

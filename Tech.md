# Technical Specification
## Bentevi — Landing Page (V1)

**Version:** 1.0
**Date:** 2026-03-09
**Derived from:** PRD.md v1.0

---

## 1. Tech Stack

| Layer | Choice | Version | Reason |
|---|---|---|---|
| Framework | Next.js (App Router) | 16.x | SSG, built-in font optimization, image optimization |
| Language | TypeScript | 5.x | Type safety across all components |
| Styling | Tailwind CSS | 4.x | Utility-first, zero runtime CSS overhead |
| Font | Nunito Sans via `next/font/google` | — | Self-hosted by Next.js, zero layout shift |
| PostCSS | `@tailwindcss/postcss` | 4.x | Required by Tailwind v4 |
| Hosting | Vercel (recommended) | — | Zero-config Next.js deployment |

**Note on Tailwind v4:** This project uses Tailwind CSS v4, which uses a CSS-based configuration model. There is no `tailwind.config.ts` file. All theme tokens, custom colors, and font overrides are defined in `app/globals.css` via the `@theme inline {}` block.

---

## 2. Repository Structure

```
/app
  layout.tsx          # Root layout: Nunito Sans font variable, metadata, imports globals.css
  page.tsx            # Composes all section components in order
  globals.css         # @import "tailwindcss", @theme tokens, custom utilities

/components
  Navbar.tsx          # Fixed header, scroll-aware glass blur, mobile hamburger — CLIENT
  Hero.tsx            # Headline, dual CTA, static chat mockup, dark green gradient — SERVER
  Problem.tsx         # 3 pain point cards with amber accent — SERVER
  Solution.tsx        # Knowledge sandbox concept, JSX flow diagram — SERVER
  HowItWorks.tsx      # 3-step numbered glass cards — SERVER
  Features.tsx        # 6-feature grid — SERVER
  UseCases.tsx        # 3 persona blocks with example quotes — SERVER
  Waitlist.tsx        # Email form, loading/success state, console.log handler — CLIENT
  Footer.tsx          # 4-column links, copyright — SERVER

/public
  (empty in v1 — images added post-v1)

package.json
tsconfig.json
postcss.config.mjs
PRD.md
Tech.md
```

---

## 3. Brand Tokens (Tailwind v4 — CSS-based)

Defined in `app/globals.css` inside `@theme inline {}`:

```css
@theme inline {
  --color-brand:       #577F4F;  /* Primary green — buttons, accents, icons */
  --color-brand-dark:  #3d5c37;  /* Hover and pressed states */
  --color-brand-light: #6fa364;  /* Decorative accents */
  --color-brand-muted: #e8f0e6;  /* Card backgrounds, tag fills */
  --font-sans: var(--font-nunito-sans); /* Maps Nunito Sans to Tailwind's font-sans */
}
```

These tokens become available as Tailwind utility classes:
- `bg-brand`, `text-brand`, `border-brand`
- `bg-brand-dark`, `bg-brand-muted`

For inline styles (where Tailwind classes don't reach, or for hover state management in Server Components), use the raw hex values.

---

## 4. Font Setup

### layout.tsx
```typescript
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito-sans",  // CSS custom property name
  display: "swap",                  // Prevent invisible text during font load
});

// Applied to <html>:
<html lang="en" className={nunitoSans.variable}>
```

### How it connects to Tailwind v4
The `@theme inline` block maps `--font-sans` to `var(--font-nunito-sans)`. Because `body` has no explicit `font-family` in Tailwind v4, it inherits from the `--font-sans` variable, which resolves to Nunito Sans.

**Important:** The `body` in `globals.css` explicitly sets `font-family: var(--font-nunito-sans), Arial, Helvetica, sans-serif` as a fallback chain to ensure Nunito Sans loads correctly even before Tailwind processes the theme.

---

## 5. Custom Utilities

Defined in `app/globals.css` using `@layer utilities`:

```css
.glass {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.section-padding {
  padding: 5rem 1.5rem;   /* mobile */
}
@media (min-width: 768px) {
  .section-padding { padding: 7rem 1.5rem; }
}

.container-max {
  max-width: 1200px;
  margin: 0 auto;
}
```

**Usage:** Apply `.glass` to cards that need the frosted-glass look. Requires a non-white background behind the element for the blur to be visible.

---

## 6. Client vs Server Components

| Component | Type | Reason |
|---|---|---|
| Navbar | `"use client"` | `scroll` event listener for blur toggle + `useState` for mobile menu |
| Hero | Server | Static markup only |
| Problem | Server | Static markup only |
| Solution | Server | Static markup only |
| HowItWorks | Server | Static markup only |
| Features | Server | Static markup only |
| UseCases | Server | Static markup only |
| Waitlist | `"use client"` | Form state, submission handler, loading/success states |
| Footer | Server | Static markup only |

Only two components ship JavaScript to the browser: Navbar and Waitlist. All others are React Server Components — zero JS overhead.

---

## 7. Form Handling

### V1 — Console log (current implementation)

```typescript
// components/Waitlist.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  // Simulate network delay for UX realism
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Log submission to console — replace this with an API call post-v1
  console.log("Bentevi waitlist submission:", {
    email,
    website: website || null,
  });

  setSubmitted(true);
  setLoading(false);
};
```

### Post-V1 — API Route upgrade path

1. Create `/app/api/waitlist/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, website } = await request.json();

  // Option A: Write to a database (Supabase, PlanetScale, etc.)
  // Option B: Add to Resend audience
  // Option C: Send to Mailchimp list via their API

  return NextResponse.json({ success: true });
}
```

2. Update `Waitlist.tsx` to replace the `setTimeout` with:

```typescript
const response = await fetch("/api/waitlist", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, website }),
});
if (!response.ok) throw new Error("Submission failed");
```

---

## 8. Scroll Behavior

Smooth scrolling is enabled globally:
```css
html { scroll-behavior: smooth; }
```

Fixed navbar offset fix (prevents content hiding behind the 64px navbar):
```css
[id] { scroll-margin-top: 80px; }
```

Section anchor IDs used in nav links:
- `#how-it-works` → HowItWorks section
- `#features` → Features section
- `#use-cases` → UseCases section
- `#waitlist` → Waitlist section

---

## 9. Performance Strategy

- **Minimal client JS:** Only 2 client components (Navbar + Waitlist)
- **Self-hosted fonts:** Nunito Sans loaded via `next/font/google` — no Google Fonts CDN request at runtime
- **No external UI library:** Zero icon library dependencies — all icons are inline SVG
- **CSS-only hero background:** Dark green gradient with no image file (V1)
- **No heavy animations:** CSS transitions only (`transition-all`, `transition-colors`) — no Framer Motion in V1
- **`next/image`:** Not used in V1 (no images). When real hero photography is added, use `<Image fill object-fit="cover">` with a green overlay

---

## 10. TypeScript Conventions

```typescript
// Props — always explicit interfaces, not inline types
interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

// Named exports for all components except page.tsx and layout.tsx
export default function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  // ...
}

// Data — typed arrays at module level, not inside components
const features: FeatureCardProps[] = [
  { emoji: "🔒", title: "Knowledge sandbox", description: "..." },
  // ...
];
```

TypeScript strict mode is enabled in `tsconfig.json` (default from `create-next-app`).

---

## 11. Build and Dev Commands

```bash
# Start development server
npm run dev

# Type check without emitting files
npx tsc --noEmit

# Production build
npm run build

# Start production server (after build)
npm run start
```

---

## 12. Hero Background — Image Upgrade Path

In V1, the hero uses a CSS gradient:
```css
background: linear-gradient(135deg, #0f1f0d 0%, #1a2e17 30%, #2d4a26 65%, #577F4F 100%);
```

When a real forest/nature photo is available:

1. Place the image at `/public/images/hero.webp`
2. Update `Hero.tsx`:

```tsx
import Image from "next/image";

// Inside the section element:
<Image
  src="/images/hero.webp"
  alt=""
  fill
  priority
  className="object-cover"
  style={{ opacity: 0.4 }}  // Dark overlay effect
/>
// Keep the gradient div for the color tint on top
```

---

## 13. Deployment

### Vercel (recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. No environment variables needed for V1 (no API calls)
4. Deploy — Vercel auto-detects Next.js and builds correctly

### Environment variables (post-V1, when API route is added)

```env
# Example for Resend integration
RESEND_API_KEY=re_xxxxx
RESEND_AUDIENCE_ID=xxxxx
```

---

## 14. Post-V1 Roadmap

| Feature | Priority | Notes |
|---|---|---|
| Waitlist API route | High | Replace console.log with real persistence |
| Email confirmation (Resend) | High | Send confirmation to waitlist subscribers |
| Real hero photography | Medium | Nature/forest image via `next/image` |
| Vercel Analytics | Medium | Page views and conversion tracking |
| Section entrance animations | Low | Framer Motion, fade-up on scroll |
| Dark mode | Low | CSS variable swap, media query |
| Pricing page | Future | Separate route `/pricing` |
| Documentation | Future | Separate route `/docs` |

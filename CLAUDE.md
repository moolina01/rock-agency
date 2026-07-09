# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
- Idioma principal del UI: Español
## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js App Router** marketing site for "Rock Agency", positioned as an e-commerce partner for Chilean supermarkets/minimarkets (Shopify + the in-house same-day delivery product **Fium**). It uses TypeScript, Tailwind CSS 4, and Framer Motion for animations.

### Page Structure

The home page (`app/page.tsx`) composes all landing sections sequentially:

```
Hero → Partners → Diagnostico → Servicios → Fium → Integraciones → Numeros → Plans → Work → CtaStrip → Footer
```

Navbar is rendered in the root layout (`app/layout.tsx`) and handles smooth scroll navigation to section IDs (`#diagnostico`, `#servicios`, `#fium`, `#integraciones`, `#planes`). Real routes (`/contact`, `/faq`, `/projects`, `/legal/terms`, `/legal/privacy`) share the same design tokens.

### Component Organization

- `components/landing/` — Section components for the landing page (Hero, Partners, Diagnostico, Servicios, Fium, Integraciones, Numeros, Plans, Work, CtaStrip)
- `components/layout/` — Navbar, Footer, ScrollToTop
- `components/ui/` — Shared primitives: `Reveal` (scroll-in-view fade/translate wrapper), `Annotation` (hand-drawn underline/circle SVG draw-on effect), `SectionMarker` (numbered section eyebrow), `Marquee` (infinite scrolling strip)

### Key Patterns

- Components using Framer Motion require `"use client"` directives
- Smooth scroll in Navbar uses `document.getElementById` with a pixel offset to account for the sticky header
- Scroll reveals go through the `Reveal` component (`whileInView`, respects `useReducedMotion`) rather than ad-hoc `motion.div` blocks
- Decorative loops (blobs, marquee, pulses, spinners) are plain CSS `@keyframes` registered as Tailwind v4 `--animate-*` theme tokens in `app/globals.css`; JS-driven motion (Hero's cart sequence, Fium's courier-on-path) uses React state machines / `useAnimationFrame` instead of imperative DOM manipulation
- Tailwind theme customization via CSS variables (`--color-*`, `--font-*`, `--animate-*`) in `app/globals.css`
- Path alias `@/` maps to the project root (configured in `tsconfig.json`)

### Styling

- **Palette:** `ink` `#16151A`, `paper` `#F4F1EA` (+ `paper-2`/`paper-dim`), `indigo` `#4B2BE0` (+ `indigo-dark`/`indigo-tint`), `lime` `#C9F03C`, `green` `#1F4C39`, `line` `#D8D2C4` — exposed as Tailwind utilities (`bg-indigo`, `text-ink-soft`, etc.) via `@theme` in `app/globals.css`
- **Fonts:** Sora (`font-heading`, headings), Inter (`font-sans`, default body), JetBrains Mono (`font-mono`, prices/labels/eyebrows) — loaded via `next/font/google` in `app/layout.tsx`
- Responsive breakpoints follow Tailwind defaults; most layouts go 1 col → 2–3 cols at `md`

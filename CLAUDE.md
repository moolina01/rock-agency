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

This is a **Next.js App Router** marketing landing page for "Rock Agency", a Shopify-focused digital agency. It uses TypeScript, Tailwind CSS 4, and Framer Motion for animations.

### Page Structure

The home page (`app/page.tsx`) composes all landing sections sequentially:

```
Hero → Features → Partners → Specialists → Footer
```

Navbar is rendered in the root layout (`app/layout.tsx`) and handles smooth scroll navigation to section IDs.

### Component Organization

- `components/landing/` — Section components for the landing page (Hero, Features, FeatureCard, Partners, Specialists)
- `components/layout/` — Navbar and Footer

### Key Patterns

- Components using Framer Motion require `"use client"` directives
- Smooth scroll in Navbar uses `document.getElementById` with a pixel offset to account for the sticky header
- Tailwind theme customization via CSS variables in `app/globals.css`
- Path alias `@/` maps to the project root (configured in `tsconfig.json`)

### Styling

- **Primary color:** Violet/Purple (`#402178`)
- **Fonts:** Poppins (headings/body, weights 400–800) and Geist (default)
- Responsive breakpoints follow Tailwind defaults; most layouts go 1 col → 2–3 cols at `md`

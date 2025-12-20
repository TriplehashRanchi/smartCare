This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# Development Documentation

For learning purposes, below is the record of the UI Overhaul performed on this project.

## 1. Task Checklist (UI Overhaul)

- [x] Analyze current UI structure and styles
- [x] Create Implementation Plan for "Cool" UI
- [x] Setup Design System (Typography, Colors, Tailwind Config)
- [x] Refactor Navigation/Header
- [x] Refactor Hero Section
- [x] Refactor Features/Services Sections
- [x] Refactor Footer
- [x] Ensure Mobile Responsiveness
- [x] Add Animations (Framer Motion)
- [x] Verify changes

## 2. Implementation Plan

**Goal**: Modernize the UI with a "Cyber/Premium" aesthetic using glassmorphism, fluid animations, and a modern color palette.

### Layout & Style Changes
- **Global Theme**: Updated `globals.css` with `oklch` colors for deep dark mode (Navy/Neon).
- **Glassmorphism**: Added `glass` and `glass-card` utilities for frosted effects.
- **Floating Navbar**: Converted the navbar to a centralized "pill" design.
- **Hero Section**: Refactored to a split layout with animated 3D-style graphics.

### Components Modified
- `navbar.jsx`: Floating pill design, active states.
- `hero.jsx`: Split layout, glowing backgrounds, framer-motion animations.
- `services.jsx`: Bento-grid layout, hover glow effects.
- `footer.jsx`: Large gradient background, 4-column layout.

## 3. Walkthrough of Changes

The SmartCare website now features a modern "Cyber/Premium" look.

### Key Features Added
- **"Cyber" Dark Mode**: Deep navy backgrounds with neon blue highlights.
- **Glassmorphism**: Frosted glass effects on the Navbar, Cards, and Overlays.
- **Animations**: Smooth entry animations for all sections.
- **Floating Navbar**: A modern, pill-shaped navigation bar.

### Verification
- **Build**: Passes `npm run build`.
- **Responsive**: Tested on standard breakpoints (Mobile, Tablet, Desktop).

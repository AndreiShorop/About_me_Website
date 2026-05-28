# Andrii Shorop — Portfolio Website

A modern, dark-themed personal portfolio for a Junior Python Developer / Azubi.
Built with **React 18 + Vite + Tailwind CSS + Framer Motion**.

## Features
- Animated hero section with typewriter effect
- Glassmorphism cards & floating orbs
- Scroll-triggered animations (Framer Motion + react-intersection-observer)
- Responsive design (mobile + desktop)
- Skills with animated progress bars
- Project cards with tech tags
- Vertical learning timeline
- Contact form (opens mailto)

## Tech Stack
React · Vite · Tailwind CSS · Framer Motion · Lucide Icons · typewriter-effect

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Vercel auto-detects Vite — click **Deploy**

Or via Vercel CLI:
```bash
npm i -g vercel
vercel --prod
```

## Personalisation

| What | File |
|------|------|
| Name / bio | `src/components/About.jsx` |
| Hero text / intro | `src/components/Hero.jsx` |
| Skills | `src/components/Skills.jsx` |
| Projects | `src/components/Projects.jsx` |
| Timeline | `src/components/Experience.jsx` |
| Contact links | `src/components/Contact.jsx`, `src/components/Footer.jsx` |
| LinkedIn URL | Search for `linkedin.com` across `src/` |

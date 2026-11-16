# Neckera Studio website

Site for Neckera Studio and its game Faulty Loops. Built with Next.js 16, Tailwind CSS 4, GSAP and Lenis.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. The contact form needs the EmailJS keys from `.env.local.example` copied into `.env.local`.

## Layout

- `src/app/(studio)/` holds the studio pages (home, contact, terms) in the olive and serif theme.
- `src/app/faulty-loops/` holds the game page and press kit. Its `layout.tsx` sets the game's font and colours, so the shared footer takes that theme too.
- `src/lib/socialLinks.ts` holds the store links, press email and social links used across pages.
- `opengraph-image.jpg` files set the preview image shown when a page is shared. `icon.png` and `apple-icon.png` are the favicons.

## Motion

Smooth scrolling (Lenis), the hero parallax and the autoplaying clips all respect `prefers-reduced-motion`. When a visitor asks for less motion, the page scrolls natively and stays still.

# Beyond Sight Group — Nimbus

Marketing site for [Beyond Sight Group](https://beyondsightgroup.com), showcasing our first product, **Nimbus** — a decentralized, privacy-first data platform.

Built as a Huly.io-style single-page experience using Astro, Tailwind CSS v4 and anime.js.

## Tech stack

- **Astro 5** — static site, near-zero JS by default
- **Tailwind CSS v4** — CSS-first theme via `@theme` blocks
- **anime.js v3** — animations, dynamically imported per section
- **GitHub Actions → GitHub Pages** — auto-deploy on push to `main`

## Project structure

```
public/
  CNAME, _headers, robots.txt
  images/nimbus/{logo.png, console/*.png}
src/
  pages/index.astro              # the only route
  layouts/BaseLayout.astro       # head, CSP, nav + footer slots
  styles/global.css              # tailwind theme + reduced-motion
  lib/{anime.ts, reveal.ts}      # shared animation helpers
  components/
    Nav.astro, Footer.astro
    primitives/{RevealOnScroll, MockupFrame, GradientGlow}.astro
    sections/{Hero, WhyNimbus, ConsoleMarquee, AppCarousel,
              UIReplicas, Architecture, WaitlistCTA}.astro
    animations/{CommandPaletteDemo, StatusBarDemo,
                SparklineDemo}.astro
.github/workflows/deploy.yml     # build → publish dist/ to Pages
legacy/                          # previous static site (kept for one release)
```

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves dist/ for production-mode QA
```

Requires Node 20 or later.

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`, which runs `astro build` and publishes `dist/` via GitHub Pages. The `CNAME` and `_headers` files in `public/` land at the deploy root automatically.

To enable, set the repo's Pages source to **GitHub Actions** (Settings → Pages).

## Design notes

- **Palette** (in `src/styles/global.css` `@theme` block): bg `#0b0f17`, panel `#111826`, text `#e6edf3`, accent `#59c2ff`, accent-2 `#6ee7b7`.
- **anime.js loading**: each animated section dynamically imports `animejs` inside an IntersectionObserver callback. Result: the 7.4 kB anime.js chunk is fetched once, on first visible animation, and cached.
- **`prefers-reduced-motion`** is respected globally — CSS kills transitions and each animation script no-ops when the media query matches.

## Contact

- Email: hello@beyondsightgroup.com
- Site: [beyondsightgroup.com](https://beyondsightgroup.com)

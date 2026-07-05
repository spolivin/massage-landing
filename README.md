<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="images/logos/Serenity-white-01.svg" />
  <img src="images/logos/Serenity-01.svg" alt="Serenity Massage" width="420" />
</picture>

<p><strong>A responsive, single-page marketing site for a fictional massage therapy studio — built with plain HTML, CSS, and vanilla JavaScript. No frameworks, no build tools, no dependencies.</strong></p>

<p>
  <a href="https://massage-landing-five.vercel.app/"><strong>View live demo →</strong></a>
</p>

<p>
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-e34f26?logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572b6?logo=css3&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-f7df1e?logo=javascript&logoColor=black" />
  <img alt="No build step" src="https://img.shields.io/badge/build-none-2f3a34" />
</p>

</div>

---

## Overview

This project is a frontend skills showcase. The business, brand, content, and contact details are entirely fictional and exist only to give the page realistic context. The focus is on clean, dependency-free frontend engineering: semantic markup, a modular CSS architecture, and progressive UI enhancements written in vanilla JavaScript.

## Highlights

- **Semantic HTML** structure across multiple, clearly delineated sections
- **Modular CSS architecture** — one stylesheet per section, with design tokens exposed as CSS custom properties
- **Modern layouts** using flexbox, CSS grid, and scroll snap
- **Fully responsive** with dedicated mobile breakpoints
- **Vanilla JavaScript** for all interactivity — no libraries
- **Scroll-triggered animations** via `IntersectionObserver` (fade-up, slide-in, scale)
- **Accessible FAQ accordion** with proper ARIA attributes
- **Interactive contact form** — inline validation through the `ValidityState` API, loading state, animated success state, and correct `autocomplete` hints (submission is simulated; no backend)
- **Adaptive back-to-top** — a floating button on desktop, a footer link on mobile
- **CSS-only tooltips** via `data-tooltip` and the `::after` pseudo-element
- **Theme-aware inline SVG icons** using `fill: currentColor`
- **Self-hosted fonts** via `@font-face` (no Google Fonts)
- **Performance-minded loading** — `<link rel="preload">` and `fetchpriority="high"` on the first slider image to eliminate load flash

## Sections

| Section      | Notes                                                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Navbar       | Fixed; SVG logo; hides on scroll down and reappears on scroll up; desktop CTA button; animated hamburger dropdown on mobile      |
| Hero         | Full-viewport background image with overlay text and CTA                                                                         |
| About        | Two-column grid with therapist image                                                                                             |
| Services     | Image slider with arrows and overlay text                                                                                        |
| Benefits     | Four-column icon grid                                                                                                            |
| Testimonials | Three-column cards with profile photos and quote icon                                                                            |
| Pricing      | Four-column cards with duration and price options per service                                                                    |
| FAQ          | Accordion with five questions                                                                                                    |
| Contact      | Two-column layout; per-field validation, loading state, and success message — submission is simulated (no real backend)          |
| Footer       | Logo, GitHub source link, tech-stack badges with tooltips, LinkedIn credits with role labels, and a mobile-only back-to-top link |

## Getting started

No build step is required. Open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

### Running with Docker

```bash
make build   # builds the image as massage-landing
make run     # runs the container at http://localhost:8080
make stop    # stops the running container
```

Or without Make:

```bash
docker build -t massage-landing .
docker run --rm --name massage-website -d -p 8080:80 massage-landing
docker stop massage-website
```

The image is based on `nginx:alpine` and serves the static files directly — no application runtime is needed.

## Project structure

```
index.html          # Single HTML file — all markup, links every stylesheet and script
styles/             # One CSS file per section (see load order in CLAUDE.md)
scripts/            # navbar.js, slider.js, animations.js, faq.js, contact.js, back-to-top.js
fonts/              # Self-hosted Montserrat woff2 files (weights 400, 500, 800, 900)
icons/              # Favicons (16/32/48px PNG) + apple-touch-icon (180px)
images/
  backgrounds/      # Hero background
  services/         # One image per massage service
  ui/               # Therapist photo, quote icon
  profile-photos/   # Testimonial avatars
  logos/            # SVG logo variants
  preview/          # hero-preview.jpg (1200×630px) — og:image for social sharing
Dockerfile          # nginx:alpine image for static serving
Makefile            # build / run / stop shortcuts
```

## License

The Montserrat font is licensed under the SIL Open Font License 1.1 — see [fonts/OFL.txt](./fonts/OFL.txt).

# Massage Therapy Landing Page

A fictional single-page website for a made-up massage therapy business — built purely to demonstrate HTML, CSS, and vanilla JavaScript skills. No frameworks, no build tools, no dependencies.

## Purpose

This project is a frontend skills showcase. The business, brand, content, and contact details are entirely fictional and exist only to give the page realistic context.

## What it demonstrates

- Semantic HTML structure across multiple sections
- CSS architecture with separate files per section and design tokens via custom properties
- CSS custom layouts: flexbox, CSS grid, scroll snap
- Responsive design with mobile breakpoints
- Vanilla JS for UI interactions (no libraries)
- Scroll-triggered animations via `IntersectionObserver` (fade-up, slide-in, scale)
- Accessible accordion (FAQ) with ARIA attributes
- Interactive contact form: inline validation via `ValidityState` API, loading state, animated success state; `autocomplete` attributes for correct browser autofill
- Adaptive back-to-top: floating button on desktop, footer link on mobile — same function, different form factor
- CSS-only tooltips via `data-tooltip` attribute and `::after` pseudo-element — no JavaScript required
- Inline SVG icons with `fill: currentColor` for theme-aware colouring
- Local custom fonts via `@font-face` (no Google Fonts)

## Sections

| Section      | Notes                                                                    |
| ------------ | ------------------------------------------------------------------------ |
| Navbar       | Fixed, SVG logo, hides on scroll down, reappears on scroll up, CTA button (desktop), hamburger with smooth animated dropdown on mobile |
| Hero         | Full-viewport background image with overlay text and CTA                 |
| About        | Two-column grid with therapist image                                     |
| Services     | Image slider with arrows and overlay text                                |
| Benefits     | Four-column icon grid                                                    |
| Testimonials | Three-column cards with real profile photos and quote icon               |
| Pricing      | Four-column cards with duration and price options per service            |
| FAQ          | Accordion with five questions, no nav link                               |
| Contact      | Two-column: info left, enquiry form right; per-field validation, loading state, success message — form submission is simulated (no real backend) |
| Footer       | Logo, GitHub source link, tech stack badges (HTML5/CSS3/JS) with tooltips, LinkedIn credits with role labels, back-to-top link (mobile only) |

## Running locally

No build step required. Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

## Running with Docker

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

The image uses `nginx:alpine` to serve the static files. No application runtime is needed.

## Project structure

```
index.html
styles/           # One CSS file per section
scripts/          # navbar.js, slider.js, animations.js, faq.js, contact.js, back-to-top.js
fonts/            # Local Montserrat woff2 files
icons/            # Favicons (16, 32, 48px PNG) + apple-touch-icon (180px)
images/
  backgrounds/    # Hero background
  services/       # One image per massage service
  ui/             # Therapist photo, quote icon
  profile-photos/ # Testimonial avatars
  logos/          # SVG logo variants
  preview/        # hero-preview.jpg (1200×630px) used as og:image for social sharing
Dockerfile        # nginx:alpine image for static serving
Makefile          # build and run shortcuts
```

## Font

Montserrat font is licensed under the SIL Open Font License 1.1 — see [fonts/OFL.txt](./fonts/OFL.txt).

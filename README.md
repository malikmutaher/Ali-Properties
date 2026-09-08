# Ali Properties Luxury

Design and build a premium, editorial-style single-page real estate website for "Ali Properties," a real estate agency in Lahore, Pakistan. This should feel like a luxury property/architecture magazine website, not a generic SaaS or template — think fashion-brand-meets-real-estate: bold typography, generous whitespace, smooth scroll-triggered reveals, and a confident, minimal layout.

BUSINESS INFO:

- Name: Ali Properties

- Type: Real Estate Agency

- Address: Main Boulevard, Lake City, Sector M7 Mall, Lahore, 54000, Pakistan

- Phone: +92 300 8074958

- Hours: Open 24 hours

- Rating: 5.0 (6 Google reviews)

- Google Plus Code: 9732+4V Lahore, Pakistan

DESIGN DIRECTION:

- Color theme: Deep black (#0A0A0A) as the dominant background, dark gold/antique gold (#B08D57 or similar muted metallic gold — not bright yellow-gold) as the accent, and off-white/cream (#F5F1E8 or #FAFAF7) for text and light sections. Avoid pure white (#FFFFFF) and pure gold (#FFD700) — keep everything muted, warm, and expensive-looking.

- Typography: Pair a high-contrast serif (like Playfair Display, Canela, or Fraunces) for headlines with a clean modern sans-serif (like Inter, Neue Montreal, or General Sans) for body text. Large, confident headline sizing (60-120px on desktop). Generous letter-spacing on small caps/labels.

- Avoid: rounded corners everywhere, generic bootstrap-like cards, purple/blue gradients, emoji icons, stock "AI website" gradients, centered-everything layouts. Use asymmetry, offset grids, and full-bleed imagery instead.

- Motion: Subtle scroll-triggered fade/slide-up reveals (using something like Framer Motion), a sticky/transforming navbar that shrinks on scroll, smooth parallax on hero imagery, hover states with gold underline/border reveals rather than color-fill buttons everywhere.

- Layout should feel like a long-form scrolling story, section by section, not a boxed dashboard.

SECTIONS / ENDPOINTS (build as a multi-page or scroll-anchored site with real routes):

1. Home (/) — Full-bleed hero with a large property image/video background, agency name in serif type, a short tagline, subtle scroll-down indicator. Below: a marquee/ticker strip with stats (Years of experience, properties sold, 5.0 rating, 24/7 availability).

2. Properties (/properties) — Grid/masonry listing of properties with filter by type (Residential, Commercial, Plots), price range, and location. Each card has hover zoom on image + gold accent line reveal.

3. Property Detail (/properties/:id) — Large image gallery/carousel, price, specs (size, bedrooms, location), a sticky "Enquire Now" panel, embedded Google Map for the property location.

4. About (/about) — Brand story section with a large pull-quote in serif type, timeline of the agency's milestones, team section with photos in a consistent duotone (black/gold) filter treatment.

5. Services (/services) — Sections for Buying, Selling, Rental Management, Investment Consultation — each with a full-width alternating image/text layout.

6. Reviews (/reviews or embedded section) — Showcase the 5.0 rating with elegant star iconography in gold, pull actual Google review quotes into styled testimonial cards.

7. Contact (/contact) — Split layout: left side contact info (address, phone with click-to-call, 24-hour badge, embedded Google Map pinned to Main Boulevard, Lake City Sector M7 Mall, Lahore), right side a minimal inquiry form (Name, Phone, Email, Property Interest, Message).

8. Sticky footer — Logo mark, quick links, social icons (styled as thin-line gold icons), copyright, address, phone.

FUNCTIONALITY:

- Fully responsive (mobile-first breakpoints, hamburger menu with full-screen gold/black takeover animation on mobile).

- Click-to-call phone number.

- "Get Directions" button linking to Google Maps using the coordinates/plus code above.

- Contact form connected to a working backend (Lovable Cloud/Supabase) that stores submissions in a database table.

- WhatsApp floating button linking to +92 300 8074958.

- SEO-friendly meta tags, page titles, and Open Graph tags for each route.

- Smooth scroll navigation with active-section highlighting in the navbar.

TONE: Confident, exclusive, minimal — like a boutique property brand, not a busy listings portal like Zameen or Graana. Prioritize whitespace and typography over dense information.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8902c340-1e6e-43d6-8f15-96c1f42d8bb6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

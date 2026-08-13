# E3 Strategic Ventures - Design System & Language

## 1. Core Philosophy
- **Vibe**: Editorial, authoritative, and minimalist.
- **Audience**: B2B buyers, C-suite executives, and organizational leaders.
- **Dial Settings**: Variance (6/10 - Restrained asymmetric), Motion (3/10 - Highly constrained/Performance-first), Visual Density (3/10 - Airy/Typographic focus).
- **Performance First**: Zero scroll-hijacking, complex physics, or heavy WebGL. The site must load instantly and render perfectly on low-end mobile devices and high-end desktops alike.

## 2. Color Palette (The E3 Gold Standard)
The color system is extracted directly from the E3 Strategic Ventures brand book, utilizing a luxurious dark tone combined with gold gradients for contrast and emphasis.

### Light Mode
- **Body Background**: Off-White (`#fcfcfc`)
- **Elevated Surfaces (Cards)**: Pure White (`#ffffff`)
- **Primary Text**: E3 Dark (`#231F20`)
- **Accent (CTAs, Highlights)**: E3 Gold (`#C0923B`)

### Dark Mode
- **Body Background**: E3 Dark (`#231F20`)
- **Elevated Surfaces**: Raised Dark (`#2e292a`)
- **Primary Text**: Pure White (`#fcfcfc`)
- **Accent (CTAs, Highlights)**: E3 Light Gold (`#D1AA5B`) for AAA accessibility against dark backgrounds.

## 3. Typography
- **Display Font (Headlines)**: `Satoshi` (Variable). High-impact, modern geometric sans-serif for commanding headlines.
- **Sans Font (Body, UI, Nav, CTAs)**: `Montserrat`. Clean, highly legible geometric sans ensuring maximum digital readability.

## 4. Layout & UI Guidelines
- **No Eyebrow Slop**: Avoid tiny uppercase tracked labels above section headers. Let the Bodoni Moda headlines stand on their own.
- **Card Discipline**: Avoid repeating identical 3-column grids. Mix layout families (e.g., 50/50 split screens, typographic quotes, asymmetric bento grids).
- **Responsive Architecture**: Do not use `100vh` (fixes iOS Safari bugs). Use `min-h-[100dvh]` and CSS Grid.
- **Button Restraint**: CTA labels must be short (1-3 words) and must never wrap to a second line on mobile breakpoints.
- **Materiality**: Use sharp or slightly rounded corners consistently. Shadows should be tinted to the background hue, never pure black.

## 5. Motion Guidelines
- **Restraint**: Do not use generic infinite spinners, heavy scroll-reveals on every element, or hover physics.
- **Tactile Feedback**: Subtle scaling (`scale: 0.98`) or color shifts on button `:active` and `:hover` states are acceptable.

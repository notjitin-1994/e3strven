# E3 Strategic Ventures - Design System & Language

## 1. Core Philosophy
- **Vibe**: Editorial, authoritative, and minimalist.
- **Audience**: B2B buyers, C-suite executives, and organizational leaders.
- **Dial Settings**: Variance (6/10 - Restrained asymmetric), Motion (3/10 - Highly constrained/Performance-first), Visual Density (3/10 - Airy/Typographic focus).
- **Performance First**: Zero scroll-hijacking, complex physics, or heavy WebGL. The site must load instantly and render perfectly on low-end mobile devices and high-end desktops alike.

## 2. Color Palette (The Siena Films Editorial)
The color system is extracted directly from the E3 Media brand guidelines, utilizing a warm editorial cream combined with a strong, highly-contrasting maroon.

### Light Mode
- **Body Background**: Warm Cream / Off-White (`#FAF8F4`)
- **Elevated Surfaces (Cards)**: Pure White (`#FFFFFF`) to pop against the warm background.
- **Sunken Surfaces**: Deeper Cream (`#ECE7DC`)
- **Primary Text**: Near-Black Ink (`#0A0A0A`)
- **Body Text**: Dark Gray (`#1A1A1A`)
- **Accent (CTAs, Highlights)**: Brand Maroon (`#990000`)
- **Accent on Dark**: Bright Red / Gold (`#FF3333`)

### Dark Mode
- **Body Background**: Deep Ink / Near Black (`#0A0A0A` to `#030303`)
- **Elevated Surfaces**: Lifted Dark (`#141414`)
- **Primary Text**: Cream Text (`#FFFFFF`)
- **Accent (CTAs, Highlights)**: Brand Maroon Light (`#CC3333`) for AAA accessibility against dark backgrounds.

## 3. Typography
We employ a "Typographic Hero" approach, relying on font contrast rather than imagery to establish authority.
- **Display Font (Headlines)**: `Bodoni Moda` (Variable). High-contrast Didone serif conveying luxury, heritage, and authority.
- **Sans Font (Body, UI, Nav, CTAs)**: `Inter` (Variable). Clean, modern grotesque ensuring maximum digital legibility.

## 4. Layout & UI Guidelines
- **No Eyebrow Slop**: Avoid tiny uppercase tracked labels above section headers. Let the Bodoni Moda headlines stand on their own.
- **Card Discipline**: Avoid repeating identical 3-column grids. Mix layout families (e.g., 50/50 split screens, typographic quotes, asymmetric bento grids).
- **Responsive Architecture**: Do not use `100vh` (fixes iOS Safari bugs). Use `min-h-[100dvh]` and CSS Grid.
- **Button Restraint**: CTA labels must be short (1-3 words) and must never wrap to a second line on mobile breakpoints.
- **Materiality**: Use sharp or slightly rounded corners consistently. Shadows should be tinted to the background hue, never pure black.

## 5. Motion Guidelines
- **Restraint**: Do not use generic infinite spinners, heavy scroll-reveals on every element, or hover physics.
- **Tactile Feedback**: Subtle scaling (`scale: 0.98`) or color shifts on button `:active` and `:hover` states are acceptable.

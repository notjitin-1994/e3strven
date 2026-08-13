# Implementation Plan: E3 Strategic Ventures Hub

## 1. Objective
Build a quick, simple, and high-performance static website that serves as a central hub for E3 Strategic Ventures. The design follows the "impeccable", "taste", and "frontend design" skill frameworks, specifically adopting a premium, editorial "typographic hero" aesthetic derived from the E3 Media codebase.

## 2. Tech Stack
- **Framework**: Vite + Vanilla TypeScript (HTML-first, high performance, no heavy JS overhead).
- **Styling**: Tailwind CSS v4, mapped to the `e3media` design system.
- **Typography**: Bodoni Moda (Display) and Inter (Sans).

## 3. Design System & Theming
- **Colors**:
  - `bg-cream` (#faf8f4) as the primary body background.
  - `brand-maroon` (#990000) for primary CTAs and accents.
  - `text-primary` (#0a0a0a) for high-contrast AAA readability.
- **Layout**: 
  - Restrained, airy layout with asymmetric bento cards for the group companies.
  - Sharp corners for a premium, non-playful corporate identity.

## 4. Execution Steps (Completed)
1. **Asset Generation & Collection**:
   - `hero.jpg`: Generated using high-end AI (Nano Banana Pro prompt translation) depicting abstract minimalist architecture.
   - `services.jpg`: Generated featuring premium consulting elements (leather notebook, coffee) on a cream table.
   - `riyas-hakkim.png`: Copied original founder photo from `riyashakkim-website`.
   - `e3media-logo.svg`: Copied from the `e3media` codebase.
2. **Project Setup**:
   - Initialized Vite + Tailwind v4.
   - Mapped all `e3media` CSS variables in `src/style.css`.
3. **HTML Architecture**:
   - Built a 100dvh hero section with strong typographic hierarchy.
   - Built an asymmetric Bento Grid displaying E3 Global, Riyas Hakkim, E3 Media, and Humans Hub.
   - Implemented placeholders for Humans Hub and social media links.
4. **Development Server**:
   - Spun up via Vite for local review.

## 5. Pending / Placeholders (Action Required Later)
- **Humans Hub Logo & Content**: Currently using "HH" initials placeholder and linking to `www.humanslearninghub.com`.
- **Riyas Hakkim Logo Placeholder**: The WhatsApp Image path provided was a local Windows path not accessible directly inside this environment. We are temporarily using the founder image (`hero1.png` from the existing site) as a placeholder for his card.
- **Social Media Links**: LinkedIn and Instagram are text placeholders in the footer.
- **Group Logos (SVG)**: We need high-res SVGs for E3 Strategic Ventures, Riyas Hakkim, and Humans Hub to finalize the branding.

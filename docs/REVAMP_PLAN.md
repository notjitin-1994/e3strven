# Section Revamp Plan: Group Companies & Services

## 1. Research & Rationale
According to my research on Awwwards-winning premium B2B and conglomerate websites (e.g., luxury tech, high-end consulting), the traditional "Bento Box" grid is becoming a cliché that often feels too much like a SaaS product dashboard rather than a high-end advisory firm. 

To achieve a "world-class, industry-leading, modern, elegant" aesthetic, the gold standard is the **Editorial Index Layout**:
- **Extreme Minimalism**: Removing the heavy card containers and replacing them with full-width, airy rows separated by 1px hairlines.
- **Layered Storytelling**: Displaying the number, category, brand name, and a concise blurb in a clean, horizontal reading rhythm.
- **Intentional Interaction**: Adding a sophisticated hover state where the row gently highlights, an elegant circular arrow CTA animates, and the respective logos/images fade into full opacity.

## 2. Implementation Execution
We will replace the existing `<section id="group">` bento grid with an **Interactive Row Index**:

1. **Architecture**: 
   - A single column of full-width `<a>` tags acting as interactive rows.
   - Each row is divided into 3 responsive columns: Brand (Left), Blurb (Center), and Visuals/CTA (Right).
2. **Typography**: 
   - Massive `Bodoni Moda` titles that shift to the `brand-maroon` accent color on hover.
   - Extremely tracked-out (`tracking-[0.2em]`) uppercase eyebrows (e.g., `01 — CONSULTING`).
3. **Motion**: 
   - Circular arrow buttons that animate up and right (`translate-x-1 -translate-y-1`) on hover, mimicking the interaction paradigm of premium luxury agencies.
   - Smooth `duration-500` crossfades on all colors and Opacity to ensure the interaction feels heavy and expensive, not fast and cheap.

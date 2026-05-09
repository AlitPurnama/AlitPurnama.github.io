---
name: Magical Dev Portfolio
colors:
  surface: '#fbfaee'
  surface-dim: '#dbdbcf'
  surface-bright: '#fbfaee'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4e8'
  surface-container: '#efeee3'
  surface-container-high: '#e9e9dd'
  surface-container-highest: '#e4e3d7'
  on-surface: '#1b1c15'
  on-surface-variant: '#40484c'
  inverse-surface: '#303129'
  inverse-on-surface: '#f2f1e5'
  outline: '#70787c'
  outline-variant: '#bfc8cc'
  surface-tint: '#1e667a'
  primary: '#1e667a'
  on-primary: '#ffffff'
  primary-container: '#a7e8ff'
  on-primary-container: '#236a7e'
  inverse-primary: '#8fd0e6'
  secondary: '#6f5092'
  on-secondary: '#ffffff'
  secondary-container: '#d9b5ff'
  on-secondary-container: '#614283'
  tertiary: '#2d694c'
  on-tertiary: '#ffffff'
  tertiary-container: '#adecc7'
  on-tertiary-container: '#316d4f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b4ebff'
  primary-fixed-dim: '#8fd0e6'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#004e5f'
  secondary-fixed: '#efdbff'
  secondary-fixed-dim: '#dbb8ff'
  on-secondary-fixed: '#29074a'
  on-secondary-fixed-variant: '#573878'
  tertiary-fixed: '#b1f1cb'
  tertiary-fixed-dim: '#96d4b0'
  on-tertiary-fixed: '#002112'
  on-tertiary-fixed-variant: '#105136'
  background: '#fbfaee'
  on-background: '#1b1c15'
  surface-variant: '#e4e3d7'
typography:
  headline-lg:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-desktop: 40px
  container-padding-mobile: 20px
  gutter: 24px
  section-gap: 80px
---

## Brand & Style

This design system captures a "Magical Tech" aesthetic, blending the precision of software engineering with the whimsy of fantasy anime and game interfaces. It is designed for a developer who wants to appear approachable and creative without sacrificing technical credibility.

The visual style is a hybrid of **Glassmorphism** and **Tactile Softness**. It utilizes semi-transparent surfaces to create a sense of ethereal depth, while "bubble-like" rounded containers provide a friendly, safe atmosphere. Decorative elements should include "slime" or "blob" shapes that pulse gently, mimicking a living, magical ecosystem. The emotional response is one of calm wonder and "comfy" professionalism.

## Colors

The palette is rooted in low-saturation pastels that suggest a dreamlike "sky island" or "magical laboratory" environment.

- **Primary (Pale Sky Blue):** Used for main interactions and primary glowing effects.
- **Secondary (Lavender):** Used for magical accents, tags, and secondary highlights.
- **Tertiary (Mint):** Used for success states and "growth" related metrics or links.
- **Neutral (Creamy White):** The base canvas color, providing a warm, organic alternative to pure white.
- **Aqua Blue:** Used for deep links and interactive states requiring higher visibility.

Gradients should be used liberally but subtly, typically transitioning between Pale Sky Blue and Lavender with a 40% opacity blur.

## Typography

This design system employs a tiered typography strategy to balance playfulness with technical rigor.

- **Headings:** Use **Quicksand**. Its rounded terminals match the "bubble" container shapes and reinforce the friendly, whimsical tone.
- **Body:** Use **Plus Jakarta Sans**. It offers excellent legibility with a contemporary, soft geometric feel that maintains professionalism.
- **Technical/Labels:** Use **JetBrains Mono**. For code snippets, metadata, or version numbers, this monospaced font provides a subtle nod to the developer's craft while remaining clean and modern.

All text should avoid pure black; use the `text_main` charcoal-grey to maintain the soft pastel harmony.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** with generous "breathing room" to maintain the airy, magical atmosphere.

- **Desktop (1440px+):** 12-column grid with 24px gutters. Content is centered in a max-width container of 1200px.
- **Tablet (768px - 1024px):** 8-column grid with 20px gutters. 
- **Mobile (<768px):** 4-column grid with 16px gutters and 20px side margins.

Spacing is based on an 8px base unit. Component containers should use large internal padding (minimum 24px) to emphasize the "bubble" effect. Elements should never feel cramped; if in doubt, increase the whitespace.

## Elevation & Depth

Depth is conveyed through **Glassmorphism** and **Outer Glows** rather than traditional drop shadows.

1.  **Surfaces:** Use 60-80% opacity white/cream with a `backdrop-filter: blur(12px)`.
2.  **Borders:** Every container must have a 2px solid border. Use a gradient for the border (e.g., Primary to Secondary) at 50% opacity to create a "shimmer" effect.
3.  **Glows:** Instead of black shadows, use soft, colored shadows that match the element's primary hue (e.g., a Lavender glow for a lavender button). These should be highly diffused (20px-40px blur) and low opacity (15%).
4.  **Floating Blobs:** Large, organic SVG "slime" shapes should sit at the lowest Z-index, moving slowly behind the glass containers to create parallax depth.

## Shapes

The shape language is dominated by the **Pill-shaped** aesthetic. 

- **Containers:** All cards and sections must use `rounded-xl` or larger (24px to 48px radius) to evoke a liquid, bubble-like feel.
- **Interactive Elements:** Buttons and tags should be fully rounded (pill-shaped).
- **Decorative Slimes:** Use organic, non-geometric shapes created with high-variance border-radii (e.g., `60% 40% 30% 70% / 60% 30% 70% 40%`) and animate them with subtle "wobble" keyframes.

## Components

- **Glass Cards:** The primary content vessel. Features a 2px pastel gradient border, backdrop blur, and a subtle inner white glow to make the edges "pop."
- **Slime Buttons:** High-contrast pastel backgrounds (Aqua or Lavender) with white text. On hover, the button should slightly expand (scale 1.05) and its outer glow should intensify.
- **Tech Tags:** Small pill-shaped chips using `label-sm` typography. Each tag should have a background color corresponding to its category (e.g., Frontend = Cyan, Backend = Mint).
- **Glass Inputs:** Subtle 1px borders that glow when focused. The cursor should be a custom magical "sparkle" or soft dot.
- **Project Blobs:** Large, colorful blobs that act as the background for project screenshots, making the rectangular images feel more integrated into the organic layout.
- **Progress Orbs:** Instead of flat bars, use circular "mana-meter" style orbs to represent skill proficiency or project completion.
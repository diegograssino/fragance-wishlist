---
name: EssenceData Argentina
colors:
  surface: "#f9f9f9"
  surface-dim: "#dadada"
  surface-bright: "#f9f9f9"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f3f3f3"
  surface-container: "#eeeeee"
  surface-container-high: "#e8e8e8"
  surface-container-highest: "#e2e2e2"
  on-surface: "#1b1b1b"
  on-surface-variant: "#4c4546"
  inverse-surface: "#303030"
  inverse-on-surface: "#f1f1f1"
  outline: "#7e7576"
  outline-variant: "#cfc4c5"
  surface-tint: "#5e5e5e"
  primary: "#000000"
  on-primary: "#ffffff"
  primary-container: "#1b1b1b"
  on-primary-container: "#848484"
  inverse-primary: "#c6c6c6"
  secondary: "#735c00"
  on-secondary: "#ffffff"
  secondary-container: "#fed65b"
  on-secondary-container: "#745c00"
  tertiary: "#000000"
  on-tertiary: "#ffffff"
  tertiary-container: "#1b1b1b"
  on-tertiary-container: "#848484"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#e2e2e2"
  primary-fixed-dim: "#c6c6c6"
  on-primary-fixed: "#1b1b1b"
  on-primary-fixed-variant: "#474747"
  secondary-fixed: "#ffe088"
  secondary-fixed-dim: "#e9c349"
  on-secondary-fixed: "#241a00"
  on-secondary-fixed-variant: "#574500"
  tertiary-fixed: "#e2e2e2"
  tertiary-fixed-dim: "#c6c6c6"
  on-tertiary-fixed: "#1b1b1b"
  on-tertiary-fixed-variant: "#474747"
  background: "#f9f9f9"
  on-background: "#1b1b1b"
  surface-variant: "#e2e2e2"
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: "600"
    lineHeight: "1.3"
  title-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: "600"
    lineHeight: "1.5"
    letterSpacing: 0.01em
  body-main:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "600"
    lineHeight: "1"
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "700"
    lineHeight: "1"
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1440px
  gutter: 24px
---

## Brand & Style

This design system establishes a high-tier financial aesthetic tailored for the Argentine market, merging the gravitas of a traditional luxury institution with the aggressive momentum of a high-conversion analytics platform. The personality is authoritative, precise, and exclusive, utilizing a "Modern Corporate" style with "Minimalist" restraint.

The target audience consists of high-net-worth investors and professional analysts who value data integrity but are driven by the "oportunidad única" (unique opportunity). The UI evokes a sense of "prestigio y precisión," ensuring every data point feels like a curated insight rather than raw information.

Tone of Voice:

- **Professional Argentine Spanish (Voseo):** "Explorá tus activos," "Mirá el reporte," "Gestioná tu cartera."
- **Direct & Confident:** Avoid fluff; use assertive, action-oriented language that highlights exclusivity.

## Colors

The palette avoids the common financial blue/yellow tropes to focus on a "Premium Black & Gold" narrative.

- **Primary (Deep Black):** Used for primary text, main navigation backgrounds, and high-emphasis components to anchor the design in stability.
- **Secondary (Sophisticated Gold):** Reserved for "Golden Opportunities," call-to-action buttons, and critical data highlights. It signifies value and high-conversion "deals."
- **Muted Variants:** For backgrounds of alerts or secondary buttons, use the primary colors at 25% opacity or desaturated equivalents (e.g., Gold-Muted: `#F1E3B5`).
- **Dark Mode:** Transitions to a Rich Charcoal (#121212) base with elevated surfaces in slightly lighter shades of grey (#1E1E1E) to maintain depth without losing the premium "True Black" feel.

## Typography

This design system employs a sophisticated typographic contrast to separate narrative from data.

- **Headlines (Noto Serif):** Used for page titles, section headers, and high-level insights. This font provides a literary, authoritative feel that communicates "Elite Finance."
- **Data & UI (Inter):** Chosen for its exceptional legibility in dense analytics dashboards. All numeric values, form labels, and interactive UI elements use Inter.
- **Hierarchy:** Use all-caps with increased letter spacing for labels (`label-caps`) to create an organized, architectural feel within the dashboard.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop analytics to ensure data visualization remains consistent and readable.

- **Grid:** A 12-column grid with a 24px gutter.
- **Rhythm:** An 8px base unit (linear scale) governs all padding and margins.
- **Density:** Use generous whitespace (48px+) around "Opportunity" cards to draw focus, but maintain high density (12px padding) within data tables for maximum information per view.
- **Margins:** 80px side margins on desktop to create a "letterboxed" luxury look.

## Elevation & Depth

Depth is communicated through **Tonal Layers** rather than aggressive shadows, maintaining a sleek, modern professional look.

- **Light Mode:** Use subtle 1px borders in a soft warm grey (#E5E5E5) for cards. High-priority "Deals" receive a soft, low-opacity Gold shadow (4% opacity) to make them appear slightly lifted.
- **Dark Mode:** Depth is achieved by lightening the background of cards to a Charcoal Grey (#1E1E1E).
- **Glassmorphism:** Use sparingly for floating navigation bars or modals (Backdrop Blur: 12px, Opacity: 80%) to maintain context of the underlying analytics.

## Shapes

The shape language is **Soft** (0.25rem), prioritizing a sharp, professional edge while avoiding the harshness of 0px corners.

- **Primary Buttons:** Subtle 4px radius to feel modern but serious.
- **Data Cards:** 8px (rounded-lg) for the main containers to provide a gentle container for dense information.
- **Selection States:** Use 2px sharp strokes to indicate focus or active states in data grids.

## Components

- **Buttons:**
  - _Primary:_ Solid Black background with White text for high contrast.
  - _Opportunity:_ Solid Gold background with Black text (High Conversion).
  - _Ghost:_ Transparent with 1px Black/Gold border for secondary actions.
- **Chips/Badges:** Use "Muted" colors (e.g., Muted Emerald for "Subida") with bold text of the parent color for status indicators.
- **Inputs:** Underlined or minimally boxed with 1px bottom borders. Active state uses a 2px Gold underline.
- **Data Tables:** Zebra striping using the "Warm Grey" at 2% opacity. Headers must be in `label-caps`.
- **Investment Cards:** Featured cards should have a Gold top-border (2px) to signify "Golden Opportunities."
- **Argentine-Specific Formatting:** Currency formats must use $ (ARS) or U$S (USD) clearly, using `data-mono` for all price-points.

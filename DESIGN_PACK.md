# Senitac Design Pack

## Logo Files

All logo files are located in `/public/` for easy access.

### Primary Logo Files

| File | Use Case | Format |
|------|----------|---------|
| `logo.svg` | **Primary logo** - Full color gradient version for main use | SVG (Scalable) |
| `logo-white.svg` | White version for dark backgrounds | SVG (Scalable) |
| `logo-black.svg` | Black version for light backgrounds | SVG (Scalable) |
| `logo-icon.svg` | Small icon version (favicon, app icons, social media) | SVG (Scalable) |
| `logo-horizontal.svg` | Horizontal layout with "SENITAC" text | SVG (Scalable) |

### Logo Variations

#### 1. **Primary Gradient Logo** (`logo.svg`)
- **Use for:** Website headers, presentations, marketing materials
- **Colors:** Orange gradient (#f97316 → #fb923c)
- **Background:** Works best on dark or neutral backgrounds
- **Format:** Scalable vector (infinite quality)

#### 2. **White Logo** (`logo-white.svg`)
- **Use for:** Dark backgrounds, night mode, video overlays
- **Colors:** Pure white (#FFFFFF)
- **Background:** Dark backgrounds only
- **Format:** Scalable vector

#### 3. **Black Logo** (`logo-black.svg`)
- **Use for:** Light backgrounds, print materials, contracts
- **Colors:** Pure black (#000000)
- **Background:** Light backgrounds only
- **Format:** Scalable vector

#### 4. **Icon Logo** (`logo-icon.svg`)
- **Use for:** Favicons, app icons, social media profile pictures, small UI elements
- **Size:** Optimized for 256×256px and smaller
- **Colors:** Orange gradient
- **Format:** Scalable vector

#### 5. **Horizontal Logo** (`logo-horizontal.svg`)
- **Use for:** Website navigation, email signatures, letterheads
- **Layout:** Symbol + "SENITAC" text side-by-side
- **Colors:** Gradient symbol + white text
- **Format:** Scalable vector

---

## Brand Colors

### Primary Colors
```css
--orange-primary: #f97316;  /* Senitac Orange */
--orange-light: #fb923c;    /* Light Orange (gradient end) */
--orange-dark: #ea580c;     /* Dark Orange (hover states) */
```

### Secondary Colors
```css
--white: #FFFFFF;           /* Primary text on dark */
--white-70: rgba(255, 255, 255, 0.7);  /* Secondary text */
--white-40: rgba(255, 255, 255, 0.4);  /* Tertiary text */
--black: #000000;           /* Background */
```

### Gradients
```css
/* Primary Gradient */
background: linear-gradient(135deg, #f97316 0%, #fb923c 100%);

/* Glow Effect */
box-shadow: 0 0 30px rgba(249, 115, 22, 0.3);
```

---

## Typography

### Font Stack
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Headings
- **H1:** 60px (3.75rem) - Bold - Hero sections
- **H2:** 48px (3rem) - Semibold - Section headers
- **H3:** 32px (2rem) - Semibold - Subsections
- **H4:** 24px (1.5rem) - Semibold - Card headers

### Body Text
- **Large:** 18px (1.125rem) - Hero descriptions
- **Base:** 16px (1rem) - Standard text
- **Small:** 14px (0.875rem) - Labels, captions
- **XS:** 12px (0.75rem) - Fine print

### Text Colors
- **Primary:** `text-white` - Main headings
- **Secondary:** `text-white/80` - Important text
- **Tertiary:** `text-white/70` - Body text
- **Muted:** `text-white/60` - Less important text
- **Subtle:** `text-white/40` - Disabled text

### Orange Highlighting
Use `text-orange-400 font-medium` for emphasis instead of white bolding.

---

## Spacing System

```css
/* Tailwind spacing scale */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
```

---

## Component Patterns

### Badges
```html
<span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-300 font-semibold uppercase tracking-wider">
  AI-POWERED
</span>
```

### Cards
```html
<div class="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300">
  <!-- Content -->
</div>
```

### Primary Button
```html
<a href="#" class="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-glow">
  Call to Action
</a>
```

### Secondary Button
```html
<a href="#" class="px-6 py-3 bg-white/5 border border-white/20 hover:border-orange-500/50 text-white font-medium rounded-lg transition-all duration-300">
  Secondary Action
</a>
```

---

## Export Formats for Different Uses

### Web
- Use SVG files directly in HTML/React
- Ensures crisp display on all screen sizes
- Supports gradient and transparency

### Social Media
- **Facebook:** Use `logo-icon.svg` exported as 512×512px PNG
- **Twitter/X:** Use `logo-icon.svg` exported as 400×400px PNG
- **LinkedIn:** Use `logo-icon.svg` exported as 300×300px PNG
- **Instagram:** Use `logo-icon.svg` exported as 512×512px PNG

### App Icons
- **iOS:** Export `logo-icon.svg` to PNG at multiple sizes (120px, 180px, 1024px)
- **Android:** Export `logo-icon.svg` to PNG at multiple densities (48dp, 72dp, 96dp, 144dp, 192dp)
- **Favicon:** Use `logo-icon.svg` exported as 16×16px, 32×32px, 48×48px PNG

### Print
- Use `logo-black.svg` for documents
- Export at 300 DPI minimum for professional printing
- CMYK conversion: Orange (#f97316) → C:0 M:60 Y:95 K:0

### Email Signatures
Use `logo-horizontal.svg` at 600×150px

### Presentations
- PowerPoint/Keynote: Use `logo.svg` or export as high-res PNG
- Dark slides: Use `logo.svg` or `logo-white.svg`
- Light slides: Use `logo-black.svg`

---

## Usage Guidelines

### Do's ✓
- Use the gradient logo on dark backgrounds
- Use the white logo on dark/photo backgrounds
- Use the black logo on light backgrounds
- Maintain clear space around logo (minimum 20px)
- Scale proportionally (never stretch or skew)
- Use horizontal layout for navigation bars
- Use icon version for favicons and small spaces

### Don'ts ✗
- Don't change the gradient colors
- Don't rotate the logo
- Don't add effects (shadows, glows, outlines) unless specified
- Don't place gradient logo on light backgrounds
- Don't use JPG/PNG when SVG is available
- Don't place logo on busy backgrounds without backdrop

---

## File Structure
```
/public/
  ├── logo.svg                 # Primary gradient logo
  ├── logo-white.svg          # White version
  ├── logo-black.svg          # Black version
  ├── logo-icon.svg           # Icon/favicon version
  ├── logo-horizontal.svg     # Horizontal with text
  └── senitac_logo_2048.png   # Legacy (low quality, avoid)
```

---

## Quick Reference

**Need a logo for...?**
- Website header → `logo-horizontal.svg`
- Dark section → `logo.svg` or `logo-white.svg`
- Light section → `logo-black.svg`
- Favicon → `logo-icon.svg` (export to PNG)
- Social media → `logo-icon.svg` (export to PNG)
- Email signature → `logo-horizontal.svg` (export at 600×150px)
- Print document → `logo-black.svg` (export at 300 DPI)
- App icon → `logo-icon.svg` (export to required sizes)

---

## Contact

For brand inquiries or custom logo variations, contact the Senitac design team.

**Website:** https://senitac.com
**Email:** hello@senitac.com

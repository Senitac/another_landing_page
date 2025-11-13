# Senitac Logo Usage Guide

## Current Logo

**Main Logo File:** `/public/senitac_logo_2048.png`
- Size: 2048×2048px
- Format: PNG with transparency
- Design: Infinity knot / Celtic knot with orange-to-yellow gradient

## Current Website Implementation

The logo is now integrated across the website:
- **Navigation header:** Logo icon (40×40px) + "Senitac" text
- **Footer:** Logo icon (40×40px) + "Senitac" text
- **Favicon:** Uses the PNG logo

## Improving Logo Quality

The current PNG is 2048×2048px which is good quality, but for professional use across all platforms, consider:

### Option 1: Professional Vectorization
Have a designer trace the logo in Adobe Illustrator or similar to create a true SVG version. This gives:
- Infinite scalability
- Smaller file sizes
- Crisp edges at any size
- Easy color adjustments

### Option 2: Export Optimization
From the existing 2048px PNG, export optimized versions:

**For Web:**
- Small (128×128px) - Navigation bars
- Medium (256×256px) - General use
- Large (512×512px) - Hero sections
- Use WebP format for better compression

**For Social Media:**
- Twitter: 400×400px
- Facebook: 512×512px
- LinkedIn: 300×300px
- All as PNG with transparency

**For App Icons:**
- iOS: 1024×1024px (App Store), 180×180px, 120×120px
- Android: Various densities (48dp to 192dp)
- Favicon: 32×32px, 16×16px

**For Print:**
- Export at 300 DPI minimum
- Consider professional vectorization for best print quality

## Brand Colors (from logo)

```css
--senitac-orange-dark: #D2664A;   /* Left side of logo */
--senitac-orange-mid: #E07F55;    /* Middle gradient */
--senitac-yellow: #F5B366;        /* Right side of logo */
```

## Quick Commands

To optimize the existing PNG for web:
```bash
# Install ImageMagick if needed
# Then create optimized sizes:
convert senitac_logo_2048.png -resize 512x512 senitac_logo_512.png
convert senitac_logo_2048.png -resize 256x256 senitac_logo_256.png
convert senitac_logo_2048.png -resize 128x128 senitac_logo_128.png
convert senitac_logo_2048.png -resize 32x32 favicon-32x32.png
convert senitac_logo_2048.png -resize 16x16 favicon-16x16.png
```

## Recommendations

1. **Short-term:** Continue using the 2048px PNG - it works well for website use
2. **Medium-term:** Export optimized sizes (128px, 256px, 512px) for faster loading
3. **Long-term:** Get professional vectorization to SVG for ultimate quality and flexibility

## Logo Design

The Senitac logo features:
- **Symbol:** Infinity knot / Celtic knot design
- **Meaning:** Represents continuous flow, connection, and endless possibilities
- **Gradient:** Orange to yellow (warm, energetic, innovative)
- **Style:** Modern, tech-forward, professional
- **Concentric rings:** Show depth and layers (like data layers)

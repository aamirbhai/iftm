# UI Context

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #950000 | Buttons, links, accents |
| Primary Dark | #7a0000 | Hover states |
| Navy | #1b1f52 | Header, footer background |
| Dark | #1a1a1a | Text, headings |
| Text | #333333 | Body text |
| Text Light | #666666 | Secondary text |
| Light | #f8f9fa | Section backgrounds |
| Border | #e5e5e5 | Dividers, card borders |
| White | #ffffff | Card backgrounds |
| Gold | #ffc107 | Highlights, accents |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings | Plus Jakarta Sans | 700-800 | 2rem-3.5rem |
| Body | Plus Jakarta Sans | 400 | 14px-16px |
| Numbers | Teko | 600-700 | 2.5rem-4rem |
| Labels | Plus Jakarta Sans | 500-600 | 12px-13px |
| Buttons | Plus Jakarta Sans | 600 | 13px-14px |

### Spacing Scale

```
4px  - Tight (icon gaps)
8px  - Small (list items)
12px - Default (card padding)
16px - Medium (section padding)
20px - Large (heading margins)
24px - XL (card padding)
30px - XXL (section padding)
40px - Huge (section margins)
80px - Section spacing
```

### Border Radius

| Element | Radius |
|---------|--------|
| Buttons | 6px |
| Cards | 12px |
| Images | 12px |
| Badges | 20px (pill) |
| Circular | 50% |

### Shadows

```css
--shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
--shadow-md: 0 4px 12px rgba(0,0,0,0.1);
--shadow-lg: 0 8px 30px rgba(0,0,0,0.12);
--shadow-xl: 0 20px 60px rgba(0,0,0,0.15);
```

## Component Patterns

### Header
- Sticky position
- White background with shadow
- Logo left, navigation right
- "Apply Now" CTA button
- Mobile hamburger menu
- Mega menu dropdowns

### Hero Section
- Full-width slider
- Fade transitions (4s interval)
- Responsive images (mobile/desktop)
- Text overlay with CTA buttons
- Dark gradient overlay

### Section Headings
```
SUB-HEAD (uppercase, small, primary color)
    Main heading (large, bold, dark)
    Optional description (small, gray)
```

### Statistics Cards
```
┌─────────────────┐
│    [Icon]        │
│    25+           │  ← Large number (Teko font)
│    YEARS IN      │  ← Uppercase label
│    EXCELLENCE    │
└─────────────────┘
```

### Program Cards
```
┌─────────────────┐
│ PROGRAM NAME     │  ← Bold, uppercase
│─────────────────│
│ • Course 1       │
│ • Course 2       │  ← Scrollable list
│ • Course 3       │
│ • Course 4       │
└─────────────────┘
```

### Footer
- Dark background (#1a1a1a)
- Multi-column layout
- Social media icons (SVG)
- Contact information
- Quick links
- Copyright notice

## Animation Patterns

### Scroll Reveal
```typescript
// Intersection Observer triggers
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Counter Animation
- Start from 0 (or specified start)
- Animate to target value
- Duration: 2-3 seconds
- Easing: ease-out
- Trigger: when section enters viewport

### Hover Effects
- Cards: translateY(-4px) + shadow increase
- Buttons: darken background + translateY(-2px)
- Links: color change + padding-left increase
- Images: scale(1.03) + shadow increase

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | Single column |
| Tablet | 640-1024px | Two columns |
| Desktop | > 1024px | Full layout |
| Large | > 1280px | Max width container |

## Section Order (Homepage)

1. Topbar (announcement)
2. Header (navigation)
3. Hero Slider
4. Highlights/Rankings
5. Statistics
6. Programs
7. News/Updates
8. Placements
9. Testimonials
10. Campus Experience
11. Footer

## Accessibility Requirements

- Focus visible on all interactive elements
- Skip to main content link
- ARIA labels on icons
- Alt text on all images
- Keyboard navigable menu
- Color contrast 4.5:1 minimum
- Reduced motion support

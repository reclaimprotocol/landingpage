# Configuration Guide

## Logo Carousel Configuration

### How to Configure Customer Logos

Edit `/config/logos.ts` to customize the logos displayed in the carousel.

### Configuration Options

Each logo requires:
- **name**: Company name (for accessibility)
- **logoPath**: Path to logo image in `/public` folder
- **website**: Company website URL
- **hoverText**: Tooltip text shown on hover

### Example

```typescript
{
  name: 'Acme Corp',
  logoPath: '/customers/acme-logo.png',
  website: 'https://acme.com',
  hoverText: 'Acme Corp - Leading Innovation Partner',
}
```

### Adding Logo Images

1. Place logo images in `/public/customers/`
2. Recommended format: PNG with transparent background
3. Recommended size: 200x100px (or similar aspect ratio)
4. File naming: `company-name.png`

### Carousel Features

- **Auto-scrolling**: Logos scroll continuously from right to left
- **Pause on hover**: Hovering pauses the animation
- **Grayscale effect**: Logos appear grayscale by default, color on hover
- **Seamless loop**: Logos duplicate for infinite scrolling
- **Clickable**: Each logo links to the company website
- **Speed**: 30 seconds per full cycle (adjustable in CSS)

### Customizing Speed

To change scroll speed, edit `/app/globals.css`:

```css
.logos-track {
  animation: scroll 30s linear infinite; /* Change 30s to your preferred duration */
}
```

Smaller values = faster scrolling
Larger values = slower scrolling

---

## Accordion Configuration

### How to Configure Accordion Items

Edit `/config/accordion.ts` to customize the accordion items displayed below the logo carousel.

### Configuration Options

Each accordion item requires:
- **title**: The clickable header text
- **image**: Path to the large image shown when expanded
- **bulletPoints**: Array of 3 strings for key points

### Example

```typescript
{
  title: 'Why Choose Our Platform',
  image: '/accordion/feature-1.png',
  bulletPoints: [
    'Lightning fast verification in under 30 seconds',
    'Bank-level security with zero-knowledge proofs',
    'Supports 200+ countries and 29,000+ institutions',
  ],
}
```

### Adding Images

1. Place accordion images in `/public/accordion/`
2. Recommended format: PNG or JPG
3. Recommended size: 1200x600px or similar landscape aspect ratio
4. File naming: `item1.png`, `item2.png`, etc.

### Accordion Features

- **Expandable sections**: Click to expand/collapse each item
- **First item open by default**: The first accordion item is expanded on page load
- **Responsive layout**: 
  - Desktop: 3 bullet points displayed horizontally
  - Mobile: 3 bullet points stacked vertically
- **Smooth animations**: Expand/collapse with smooth transitions
- **Visual feedback**: Hover effects and active states

### Customization Tips

1. Keep titles concise (4-8 words recommended)
2. Use high-quality images that illustrate the feature
3. Write bullet points that are scannable and compelling
4. Each bullet point should be 5-15 words for best readability

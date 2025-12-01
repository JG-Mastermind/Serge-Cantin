# Design Guidelines: Serge Cantin Custom Metal Store Fixtures

## Design Approach

**Selected Approach**: Professional B2B Industrial Design System
This is a credibility-focused B2B manufacturing website requiring a clean, professional aesthetic that emphasizes precision, quality, and expertise. Drawing inspiration from industrial excellence sites while maintaining modern web standards.

**Key Principles**:
- Industrial precision and professionalism
- Clear hierarchy and readability
- Credibility through visual quality
- Efficient information architecture

---

## Typography

**Font System**: Google Fonts via CDN
- **Primary**: Inter or Work Sans (clean, professional sans-serif)
  - Headings: 600-700 weight
  - Body: 400 weight
  - Captions: 400 weight, smaller size
  
**Hierarchy**:
- H1: text-4xl lg:text-5xl font-bold (hero titles, page headers)
- H2: text-3xl lg:text-4xl font-semibold (section headers)
- H3: text-xl lg:text-2xl font-semibold (subsections)
- Body: text-base lg:text-lg (main content)
- Small: text-sm (captions, meta info)

---

## Layout System

**Spacing Units**: Consistent use of Tailwind spacing
- Primary spacing set: 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 lg:py-24
- Component spacing: gap-6 lg:gap-8
- Container max-width: max-w-7xl mx-auto px-4 lg:px-8

**Grid System**:
- Homepage features: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Client list: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Product categories: grid-cols-1 lg:grid-cols-2
- Projects showcase: masonry-style or grid-cols-1 md:grid-cols-2 gap-8

---

## Component Library

**Navigation**:
- Desktop: Horizontal menu with clean separation between items (px-4 spacing)
- Mobile: Hamburger menu (right-aligned) with slide-in panel
- Active state: border-b-2 or subtle background treatment
- Logo: Left-aligned, company name with optional icon

**Hero Sections**:
- Homepage: Large hero image (industrial manufacturing scene) with overlay text, min-h-[60vh]
- Other pages: Smaller hero (min-h-[40vh]) with page title and brief description
- Hero text: Centered or left-aligned with semi-transparent background for readability

**Cards & Containers**:
- Product/feature cards: border rounded-lg with subtle shadow, p-6
- Client list: Simple text list with clean typography, organized by region headers
- Project cards: Image + title + brief description, hover effect (subtle scale)

**Images**:
- Hero images: Full-width, high-quality industrial/manufacturing scenes
- Workshop/process images: Mix of full-width and inline images with text wrapping (float-left or float-right with mx-4 my-2)
- Project images: Consistent aspect ratios (16:9 or 4:3), lazy loading
- Alt text required for all images

**Forms** (Contact page):
- Clean input fields with border, rounded corners
- Labels above inputs
- Full-width on mobile, structured grid on desktop
- Submit button: Primary CTA style

**Lists**:
- Client lists: Simple bullet points or grid of names
- Product categories: Organized with clear headers and nested lists
- Use proper semantic HTML (ul/ol)

---

## Page-Specific Layouts

**Homepage (eng.html)**:
- Hero with manufacturing image + company tagline
- Services overview: 3-column grid with icons/images
- Brief company intro section
- CTA to realisations/contact

**Realisations (real_e.html)**:
- Hero with featured project images
- Client list section: Organized by region with clear headers
- Project showcase: Grid of project cards with anchor IDs (#timberland, etc.)
- Smooth scroll behavior for anchor links

**Workshop (cw_e.html)**:
- Department sections with images floating left/right of text
- 2-column layout on desktop for text + image pairs
- Process flow visualization if applicable

**Stands (stand_e.html)**:
- Categorized product lists with clear headers
- Grid or list layout for product types
- Optional: Product images if available

**Contact (contact_e.html)**:
- 2-column layout: Contact form + company info/map
- Clear, accessible form design
- Company details prominently displayed

**Blog Placeholder**:
- Clean header with "Coming Soon" message
- Grid layout ready for future posts (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)

---

## Images Strategy

**Required Images**:
- Homepage hero: Modern manufacturing facility or metal fabrication scene
- Workshop page: 6-8 images showing different departments/processes
- Realisations: Project photos for each featured client (use placeholders with project names if originals unavailable)
- All images: Lazy loading, descriptive alt text, optimized aspect ratios

**Image Placement**:
- Heroes: Full-width, prominent placement
- Workshop: Inline with text, floating left/right
- Projects: Grid-based, consistent sizing
- No images on Stands page unless product photos available

---

## Language Switcher

Clean toggle/link component in navigation
- "EN | FR" format or flag icons
- Links to French equivalents (eng.html ↔ fr.html, etc.)

---

## Accessibility & Performance

- Semantic HTML5 elements
- ARIA labels for navigation and forms
- Keyboard navigation support
- Lazy loading for all images
- No excessive animations (smooth scroll only)
- Fast loading via Tailwind CDN
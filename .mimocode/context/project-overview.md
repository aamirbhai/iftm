# Project Overview

## What Is This?

**IFTM University Website** - A modern, responsive website for IFTM University Moradabad, built with Next.js. The design is inspired by Lovely Professional University's (lpu.in) website architecture and visual style.

## Why Are We Building This?

The current IFTM website (iftmuniversity.ac.in) is:
- Built with static HTML and Bootstrap 3 (outdated)
- Not mobile-responsive properly
- Uses deprecated elements (marquee tags)
- Slow loading with multiple jQuery versions
- Poor SEO structure
- Difficult to maintain

## Who Is This For?

### Primary Users
- **Prospective students** researching universities
- **Parents** evaluating educational options
- **Current students** checking updates and resources

### Secondary Users
- **Faculty** accessing academic resources
- **Administrators** managing content
- **Recruiters** viewing placement data

## Success Criteria

1. **Performance**: Lighthouse score > 90 on all metrics
2. **Responsive**: Works perfectly on mobile, tablet, desktop
3. **SEO**: Proper meta tags, structured data, semantic HTML
4. **Accessibility**: WCAG 2.1 AA compliance
5. **Maintainability**: Component-based, easy to update

## Scope

### In Scope (Phase 1)
- Homepage with all sections
- Responsive header with navigation
- Hero slider with campus images
- Statistics section with animated counters
- Programs listing
- News/updates section
- Footer with links and contact info

### Out of Scope (Phase 1)
- Inner pages (about, admissions, etc.)
- Blog/news CMS
- Student portal integration
- ERP system integration
- Payment gateway

### Future Phases
- Phase 2: Inner pages
- Phase 3: CMS integration
- Phase 4: Student services
- Phase 5: Analytics and optimization

## Key Constraints

- Must use IFTM branding (colors, logo)
- Must preserve all existing content
- Must work without JavaScript for core content
- Must be SEO-friendly for Indian university searches
- Must load fast on mobile networks

## Design Reference

Primary reference: **LPU (lpu.in)**
- Clean, modern header
- Hero slider with fade transitions
- Card-based content layouts
- Animated statistics
- Professional color scheme
- Sticky navigation
- Mobile-first responsive design

## Technical Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Framework | Next.js 15 | SSR, performance, SEO |
| Styling | Tailwind CSS | Rapid development, consistency |
| Language | TypeScript | Type safety, better DX |
| Router | App Router | Server Components, layouts |
| Images | next/image | Automatic optimization |
| Fonts | next/font | Zero layout shift |

## Stakeholders

- **University administration**: Brand representation
- **IT team**: Maintainability
- **Students**: User experience
- **SEO team**: Search visibility

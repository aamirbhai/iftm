# IFTM University Page Templates Design Spec

## [S1] Problem

The IFTM University website currently only has a homepage. We need reusable page templates for:
- Generic static pages (About, Contact, etc.)
- Blog posts
- News articles
- Course/Programme detail pages

## [S2] Solution Overview

Create 4 Next.js App Router page templates with:
- Shared Header/Footer from existing homepage
- Consistent design language (colors, fonts, spacing)
- Static dummy data (CMS-ready structure)
- Mobile-first responsive design
- Proper SEO metadata

## [S3] File Structure

```
src/app/
├── [slug]/page.tsx           ← Generic Page template
├── blog/
│   ├── [slug]/page.tsx       ← Blog Post template
│   └── page.tsx              ← Blog listing
├── news/
│   ├── [slug]/page.tsx       ← News Article template
│   └── page.tsx              ← News listing
└── programmes/
    ├── [slug]/page.tsx        ← Programme detail
    └── page.tsx               ← Programmes listing

src/components/
├── PageHero.tsx               ← Reusable hero banner
├── BlogSidebar.tsx            ← Blog sidebar
├── NewsSidebar.tsx            ← News sidebar
└── ProgrammeSidebar.tsx       ← Programme sidebar
```

## [S4] Page Template (`/[slug]`)

**Purpose**: Generic static pages like About, Admissions, Campus Life.

**Layout**:
- PageHero: Title + breadcrumb + optional subtitle
- Two-column: Content (left) + Sidebar (right)
- Content: Rich text with headings, paragraphs, lists
- Sidebar: Quick links, related pages, contact card

**Data**: Static object with `title`, `subtitle`, `content`, `sidebarLinks`

## [S5] Blog Post Template (`/blog/[slug]`)

**Purpose**: Individual blog post detail page.

**Layout**:
- Hero with featured image overlay + category badge
- Author info bar (name, date, read time)
- Full-width content body
- Related posts grid (3 cards)
- Sidebar: Recent posts, Categories list

**Data**: Static object with `title`, `category`, `author`, `date`, `readTime`, `content`, `relatedPosts`

## [S6] News Article Template (`/news/[slug]`)

**Purpose**: Official news/announcement detail page.

**Layout**:
- Hero with image + "Official News" badge
- Department/source attribution
- Content body
- Notice board sidebar (like homepage)
- Related news cards

**Data**: Static object with `title`, `department`, `date`, `content`, `relatedNews`

## [S7] Programme Detail Template (`/programmes/[slug]`)

**Purpose**: Individual course/programme information page.

**Layout**:
- Hero with programme name + school badge + level tag
- Quick stats bar: Duration | Level | Eligibility | Fee
- Tabbed content: Overview | Curriculum | Eligibility | Fee | Career
- Apply Now CTA (sticky on mobile)
- Related programmes sidebar

**Data**: Static object with `name`, `school`, `level`, `duration`, `eligibility`, `fee`, `overview`, `curriculum`, `career`, `relatedProgrammes`

## [S8] Design Tokens

All templates use existing design system:
- Colors: `iftm-primary`, `iftm-navy`, `iftm-gold`, `iftm-light`
- Fonts: Plus Jakarta Sans (heading), Teko (numbers)
- Spacing: `max-w-[1400px]`, `px-4 md:px-6`
- Cards: `rounded-xl`, `border-iftm-border`, hover effects

## [S9] SEO Strategy

Each template includes:
- Dynamic `generateMetadata` with title, description, OG tags
- JSON-LD structured data (Article for blog/news, Course for programmes)
- Breadcrumb navigation
- Proper heading hierarchy (h1 → h2 → h3)

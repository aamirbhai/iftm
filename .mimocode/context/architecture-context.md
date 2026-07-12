# Architecture Context

## Project Type
**IFTM University Website** - Next.js 15 App Router

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 15.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Runtime | Node.js | 20.x |
| Package Manager | npm | 10.x |

## Directory Structure

```
src/
├── app/              # App Router pages and layouts
│   ├── layout.tsx    # Root layout (fonts, metadata)
│   ├── page.tsx      # Homepage
│   └── globals.css   # Global styles
├── components/       # Reusable UI components
│   ├── Header.tsx    # Navigation header
│   ├── Hero.tsx      # Hero slider section
│   ├── Footer.tsx    # Site footer
│   └── ...
├── lib/              # Utility functions
├── hooks/            # Custom React hooks
└── types/            # TypeScript type definitions
```

## Architecture Decisions

### App Router (not Pages Router)
- Server Components by default
- Client Components only when needed (interactivity, browser APIs)
- Layouts for shared UI (header, footer)
- Loading states with Suspense

### Component Pattern
- One component per file
- Props interface defined in same file
- Default export for components
- Named exports for utilities

### State Management
- Local state: useState
- Server state: Server Components (no fetch needed)
- Global state: Avoid unless necessary (Context if needed)

### Styling Strategy
- Tailwind utility classes
- CSS modules for complex component styles
- CSS variables for theme values
- No inline styles except dynamic values

## Data Flow

```
Server Component
    ↓ (props)
Client Component
    ↓ (user interaction)
State Update
    ↓ (re-render)
UI Update
```

## Performance Considerations

- Images: Use Next.js Image component
- Fonts: next/font for zero layout shift
- Scripts: next/script with strategy
- Code splitting: Automatic with dynamic imports

## SEO Strategy

- Metadata API for meta tags
- JSON-LD structured data
- Semantic HTML
- Open Graph images

# Code Standards

## TypeScript Rules

### Strict Mode
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true
  }
}
```

### Type Definitions
- Prefer `interface` for object shapes
- Use `type` for unions, intersections, primitives
- Export types alongside components
- Avoid `any` - use `unknown` if type is truly unknown

### Naming Conventions
```
Components:     PascalCase    (UserProfile, HeroSlider)
Functions:      camelCase     (getUserData, formatDate)
Constants:      UPPER_SNAKE   (API_BASE_URL, MAX_RETRIES)
Types/Interfaces: PascalCase  (UserData, SlideProps)
Files (components): PascalCase.tsx
Files (utilities): camelCase.ts
```

## React Patterns

### Component Structure
```typescript
// ComponentName.tsx
import { type FC } from 'react'

interface ComponentNameProps {
  required: string
  optional?: number
}

const ComponentName: FC<ComponentNameProps> = ({ required, optional = 0 }) => {
  return <div>{required}</div>
}

export default ComponentName
```

### When to Use "use client"
- Event handlers (onClick, onChange)
- useState, useEffect, useRef
- Browser APIs (localStorage, window)
- Third-party client libraries

### When NOT to Use "use client"
- Data fetching
- Static content rendering
- SEO-critical content
- Database access

## HTML Standards

### Semantic Elements
```html
<header>    <!-- Site header, navigation -->
<main>      <!-- Primary content -->
<section>   <!-- Thematic grouping -->
<article>   <!-- Self-contained content -->
<aside>     <!-- Sidebar, tangential content -->
<footer>    <!-- Site footer -->
<nav>       <!-- Navigation links -->
```

### Accessibility
- All images must have `alt` text
- Interactive elements must be keyboard accessible
- Form inputs must have labels
- Color contrast ratio >= 4.5:1
- Use ARIA attributes only when semantic HTML isn't sufficient

## CSS/Tailwind Rules

### Class Organization
```html
<!-- Layout → Spacing → Typography → Visual → State -->
<div class="flex items-center gap-4 text-lg font-bold text-white hover:bg-gray-100">
```

### Responsive Design
- Mobile-first: base styles for mobile
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- Never use fixed widths for main content

### Custom CSS
- Use CSS variables for theme values
- Scope styles to components
- Avoid `!important`
- Avoid `#id` selectors for styling

## File Organization

```
components/
├── Header/
│   ├── Header.tsx
│   ├── Header.module.css
│   ├── index.ts          # Re-export
│   └── __tests__/
│       └── Header.test.tsx
```

## Error Handling

```typescript
// Good: Specific error handling
try {
  const data = await fetchData()
} catch (error) {
  if (error instanceof NetworkError) {
    // Handle network issue
  }
  throw error // Re-throw unknown errors
}

// Bad: Swallowing errors
try {
  const data = await fetchData()
} catch (e) {
  console.log(e) // Don't just log and continue
}
```

## Testing Standards

- Unit tests for utility functions
- Component tests for interactive components
- E2E tests for critical user flows
- Test behavior, not implementation

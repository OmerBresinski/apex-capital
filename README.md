# Apex Capital

A premium crypto venture capital website built with Next.js 14, featuring an "Obsidian & Amber" dark mode design aesthetic.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Pages

- `/` - Homepage with hero, thesis, portfolio preview, team, and contact sections
- `/about` - Company story, values, and statistics
- `/portfolio` - Filterable grid of portfolio companies
- `/team` - Leadership and investment team profiles
- `/contact` - Contact form, email options, and office locations

## Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Obsidian | `#0a0a0a` | Primary background |
| Charcoal | `#141414` | Secondary background |
| Dark Card | `#1a1a1a` | Card backgrounds |
| Ivory | `#f5f2eb` | Primary text |
| Amber | `#c9a227` | Accent color |
| Amber Hover | `#e3bc4a` | Hover states |

### Components

- `Navigation` - Fixed header with scroll-aware background
- `Hero` - Full-height hero with Ken Burns background effect
- `Thesis` - Investment focus areas
- `Portfolio` - Company grid with hover effects
- `Team` - Team member cards with grayscale-to-color transition
- `Contact` - CTA section with social links
- `Footer` - Site footer with navigation and contact info

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── about/page.tsx
│   ├── portfolio/page.tsx
│   ├── team/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Thesis.tsx
│   ├── Portfolio.tsx
│   ├── About.tsx
│   ├── Team.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── globals.css
```

## Deploy

Deploy on [Vercel](https://vercel.com) for the best Next.js experience:

```bash
npm run build
```

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.

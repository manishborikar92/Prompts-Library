# PromptBase - Tech Stack Summary

**Quick Reference Guide - Updated February 2026**

---

## 🎯 Core Stack

| Category | Technology | Version | Why |
|----------|-----------|---------|-----|
| **Framework** | Next.js | 16.1.6 | Latest LTS, Turbopack, React 19 support |
| **UI Library** | React | 19.2.4 | Server Components, new hooks, Actions |
| **Language** | TypeScript | 5.9.x | Type safety, better DX |
| **Styling** | Tailwind CSS | 4.1.18 | 10x faster, CSS-first config |
| **Components** | shadcn/ui | CLI 3.8.2 | Copy-paste, full control |
| **Database** | Supabase (PostgreSQL) | 2.94.1 | Best for Next.js, real-time, auth |
| **ORM** | Drizzle | 1.0.0-beta.13 | Lightweight, SQL-first, fast |
| **Auth** | Supabase Auth | Built-in | OAuth providers (GitHub), email/password |
| **Deployment** | Vercel | Latest | Zero-config, built by Next.js team |

---

## 📦 Package.json Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    
    "@supabase/supabase-js": "^2.94.1",
    "@supabase/ssr": "^0.6.1",
    "drizzle-orm": "^1.0.0-beta.13",
    "postgres": "^3.4.5",
    
    "zustand": "^5.0.11",
    "react-hook-form": "^7.71.1",
    "@hookform/resolvers": "^5.2.2",
    "zod": "^4.3.6",
    
    "fuse.js": "^7.1.0",
    "date-fns": "^4.1.0",
    "lucide-react": "^0.563.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.0.0",
    "class-variance-authority": "^0.7.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.18",
    "@types/node": "^22.12.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.9.0",
    "drizzle-kit": "^1.0.0-beta.13",
    "tailwindcss": "^4.1.18",
    "eslint": "^9.39.2",
    "eslint-config-next": "16.1.6",
    "prettier": "^3.8.1",
    "prettier-plugin-tailwindcss": "^0.6.11",
    "vitest": "^4.0.18",
    "@vitest/coverage-v8": "^4.0.18",
    "@playwright/test": "^1.58.1"
  }
}
```

---

## 🌐 Environment Variables

### .env.example
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://xxx.supabase.co"
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY="sb_publishable_xxx or eyJ..."

# Database (Drizzle)
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# GitHub OAuth (configured in Supabase Dashboard)
# No secrets needed in app - stored in Supabase

# Google AI (Optional)
GOOGLE_AI_API_KEY="AIza..."

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

---

## 🚀 Quick Start Commands

### Development
```bash
# Navigate to web directory
cd web

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npm run format
```

### Database
```bash
# Generate migrations
npm run db:generate

# Run migrations
npm run db:migrate

# Push schema changes
npm run db:push

# Open Drizzle Studio
npm run db:studio
```

### Testing
```bash
# Run unit tests
npm run test

# Run with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

---

## 📊 Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| First Contentful Paint | < 1.5s | Lighthouse |
| Time to Interactive | < 3s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Lighthouse Score | > 90 | Lighthouse |
| Bundle Size | < 200KB | Bundle Analyzer |
| API Response Time | < 200ms | Vercel Analytics |

---

## 🔗 Important Links

### Documentation
- **Next.js 16:** https://nextjs.org/docs
- **React 19:** https://react.dev
- **Tailwind v4:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com
- **Drizzle ORM:** https://orm.drizzle.team
- **Supabase:** https://supabase.com/docs
- **Auth.js:** https://authjs.dev

### Tools
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Supabase Dashboard:** https://app.supabase.com
- **Google AI Studio:** https://aistudio.google.com

---

## 🎨 Design System

### Colors (Tailwind v4 - OKLCH)
```css
@theme {
  --color-primary: oklch(0.65 0.2 250);
  --color-secondary: oklch(0.55 0.15 280);
  --color-accent: oklch(0.7 0.25 165);
  --color-background: oklch(0.12 0.02 260);
  --color-foreground: oklch(0.95 0 0);
}
```

### Typography
- **Sans Font:** Inter (via next/font)
- **Mono Font:** JetBrains Mono
- **Headings:** font-bold
- **Body:** font-normal

---

## 🧪 Testing Strategy

### Unit Tests
- **Framework:** Vitest
- **Coverage Target:** > 80%
- **Focus:** Utilities, hooks, components

### Integration Tests
- **Framework:** Vitest
- **Focus:** API routes, database queries

### E2E Tests
- **Framework:** Playwright
- **Focus:** Critical user flows

---

## 🔐 Security Checklist

- ✅ Environment variables secured
- ✅ API keys not exposed to client
- ✅ Row Level Security (RLS) enabled
- ✅ Input validation with Zod
- ✅ CSRF protection (Next.js built-in)
- ✅ HTTPS only (Vercel automatic)
- ✅ SQL injection prevention (Drizzle ORM)
- ✅ XSS prevention (React automatic)

---

**Last Updated:** February 6, 2026  
**Version:** 2.0

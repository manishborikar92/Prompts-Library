# PromptBase - Tech Stack Summary

**Quick Reference Guide**

---

## 🎯 Core Stack

| Category | Technology | Version | Why |
|----------|-----------|---------|-----|
| **Framework** | Next.js | 15.5 | Latest stable, Turbopack, React 19 support |
| **UI Library** | React | 19 | Server Components, new hooks, Actions |
| **Language** | TypeScript | 5.x | Type safety, better DX |
| **Styling** | Tailwind CSS | 4.0 | 10x faster, CSS-first config |
| **Components** | shadcn/ui | Latest | Copy-paste, full control |
| **Database** | Supabase (PostgreSQL) | Latest | Best for Next.js, real-time, auth |
| **ORM** | Drizzle | Latest | Lightweight, SQL-first, fast |
| **AI** | Google AI Studio (Gemini) | 2.5/3 | Latest models, good pricing |
| **Deployment** | Vercel | Latest | Zero-config, built by Next.js team |

---

## 📦 Package.json Dependencies

### Core Dependencies
```json
{
  "dependencies": {
    "next": "^15.5.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.3.0",
    
    "@google/genai": "^1.0.0",
    "@supabase/supabase-js": "^2.39.0",
    "drizzle-orm": "^0.29.0",
    
    "tailwindcss": "^4.0.0",
    "@radix-ui/react-*": "latest",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    
    "react-hook-form": "^7.49.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",
    
    "zustand": "^4.4.0",
    "fuse.js": "^7.0.0",
    "date-fns": "^3.0.0",
    "lucide-react": "^0.309.0"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "drizzle-kit": "^0.20.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^15.5.0",
    "prettier": "^3.1.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

---

## 🔧 Configuration Files

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  images: {
    domains: ['supabase.co'],
  },
}

module.exports = nextConfig
```

### tailwind.config.ts (v4)
```typescript
// @ts-check
import { type Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
} satisfies Config
```

### drizzle.config.ts
```typescript
import type { Config } from 'drizzle-kit'

export default {
  schema: './lib/db/schema.ts',
  out: './lib/db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 🌐 Environment Variables

### .env.local
```bash
# Database (Supabase)
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://xxx.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJ..."
SUPABASE_SERVICE_ROLE_KEY="eyJ..."

# Google AI Studio
GOOGLE_AI_API_KEY="AIza..."

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

---

## 🚀 Quick Start Commands

### Development
```bash
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

# Seed database
npm run db:seed
```

### Deployment
```bash
# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

---

## 📊 Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| First Contentful Paint | < 1.5s | Lighthouse |
| Time to Interactive | < 3s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Total Blocking Time | < 300ms | Lighthouse |
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
- **Google AI:** https://ai.google.dev/docs

### Tools
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Supabase Dashboard:** https://app.supabase.com
- **Google AI Studio:** https://aistudio.google.com

### Community
- **Next.js Discord:** https://discord.gg/nextjs
- **Tailwind Discord:** https://discord.gg/tailwindcss
- **Supabase Discord:** https://discord.supabase.com

---

## 🎨 Design System

### Colors (Tailwind v4 - OKLCH)
```css
@theme {
  --color-primary: oklch(0.5 0.2 250);
  --color-secondary: oklch(0.6 0.15 200);
  --color-accent: oklch(0.7 0.25 150);
  --color-background: oklch(0.98 0 0);
  --color-foreground: oklch(0.15 0 0);
}
```

### Typography
- **Font:** Inter (via next/font)
- **Headings:** font-bold
- **Body:** font-normal
- **Code:** font-mono

### Spacing Scale
- **Base:** 4px (0.25rem)
- **Scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96

---

## 🧪 Testing Strategy

### Unit Tests
- **Framework:** Vitest
- **Coverage Target:** > 80%
- **Focus:** Utilities, hooks, components

### Integration Tests
- **Framework:** Playwright
- **Focus:** User flows, API routes

### E2E Tests
- **Framework:** Playwright
- **Focus:** Critical paths

---

## 📈 Monitoring & Analytics

### Performance
- **Vercel Analytics:** Built-in
- **Web Vitals:** Automatic tracking

### Errors
- **Sentry:** Error tracking (optional)
- **Vercel Logs:** Built-in logging

### Usage
- **Supabase Analytics:** Database queries
- **Custom Events:** Track user actions

---

## 🔐 Security Checklist

- ✅ Environment variables secured
- ✅ API keys not exposed to client
- ✅ Row Level Security (RLS) enabled
- ✅ Input validation with Zod
- ✅ CSRF protection (Next.js built-in)
- ✅ Rate limiting on API routes
- ✅ HTTPS only (Vercel automatic)
- ✅ Content Security Policy
- ✅ SQL injection prevention (Drizzle ORM)
- ✅ XSS prevention (React automatic)

---

**Last Updated:** February 5, 2026  
**Version:** 1.0

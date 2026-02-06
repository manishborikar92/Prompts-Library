# Getting Started with PromptBase Development

**Quick setup guide to start developing the PromptBase web application**

**Note:** This guide is for setting up the web application. The Prompts Library collection is already complete and ready to use.

---

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.17 or later
- **npm** or **yarn** or **pnpm**
- **Git**
- **Supabase account** (free tier is fine)
- **Google AI Studio API key** (free tier available)
- **Vercel account** (optional, for deployment)

---

## 🚀 Step-by-Step Setup

### 1. Create Next.js Project

```bash
# Navigate to repository root
cd Prompts-Library

# Create web app directory
mkdir web
cd web

# Create new Next.js 16 app
npx create-next-app@latest .

# Options to select:
# ✅ TypeScript
# ✅ ESLint
# ✅ Tailwind CSS
# ✅ src/ directory: No
# ✅ App Router: Yes
# ✅ Turbopack: Yes
# ❌ Import alias: Use default (@/*)

cd promptbase
```

### 2. Install Dependencies

```bash
# Core dependencies
npm install @google/genai @supabase/supabase-js drizzle-orm

# UI dependencies
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-select
npm install class-variance-authority clsx tailwind-merge lucide-react

# Form & validation
npm install react-hook-form zod @hookform/resolvers

# State & utilities
npm install zustand fuse.js date-fns

# Dev dependencies
npm install -D drizzle-kit @types/node prettier prettier-plugin-tailwindcss
```

### 3. Initialize shadcn/ui

```bash
# Initialize shadcn/ui
npx shadcn@latest init

# Options:
# Style: Default
# Base color: Slate
# CSS variables: Yes

# Add components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add select
npx shadcn@latest add badge
npx shadcn@latest add separator
npx shadcn@latest add toast
```

### 4. Set Up Supabase

```bash
# 1. Go to https://supabase.com
# 2. Create new project
# 3. Wait for database to be ready
# 4. Go to Settings > API
# 5. Copy your credentials
```

Create `.env.local`:
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# Database
DATABASE_URL=postgresql://postgres:[password]@db.xxxxx.supabase.co:5432/postgres
DIRECT_URL=postgresql://postgres:[password]@db.xxxxx.supabase.co:5432/postgres

# Google AI
GOOGLE_AI_API_KEY=AIza...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 5. Configure Drizzle ORM

Create `drizzle.config.ts`:
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

Add scripts to `package.json`:
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:generate": "drizzle-kit generate:pg",
    "db:migrate": "drizzle-kit push:pg",
    "db:studio": "drizzle-kit studio"
  }
}
```

### 6. Create Database Schema

Create `lib/db/schema.ts`:
```typescript
import { pgTable, uuid, varchar, text, boolean, integer, timestamp, serial } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  avatarUrl: text('avatar_url'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: text('description'),
  icon: varchar('icon', { length: 50 }),
  orderIndex: integer('order_index'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const prompts = pgTable('prompts', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title', { length: 500 }).notNull(),
  content: text('content').notNull(),
  description: text('description'),
  categoryId: integer('category_id').references(() => categories.id),
  userId: uuid('user_id').references(() => users.id),
  isPublic: boolean('is_public').default(true),
  isFeatured: boolean('is_featured').default(false),
  tags: text('tags').array(),
  usageCount: integer('usage_count').default(0),
  favoriteCount: integer('favorite_count').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
```

### 7. Run Database Migrations

```bash
# Generate migration files
npm run db:generate

# Apply migrations to database
npm run db:migrate

# Open Drizzle Studio to view database
npm run db:studio
```

### 8. Set Up Supabase Client

Create `lib/supabase/client.ts`:
```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

Create `lib/supabase/server.ts`:
```typescript
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
}
```

### 9. Set Up Google AI Client

Create `lib/ai/gemini.ts`:
```typescript
import { GoogleGenerativeAI } from '@google/genai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!)

export const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

export async function generatePromptSuggestion(description: string) {
  const prompt = `Generate a professional AI prompt based on this description: ${description}`
  
  const result = await model.generateContent(prompt)
  const response = await result.response
  return response.text()
}

export async function improvePrompt(originalPrompt: string) {
  const prompt = `Improve this AI prompt for clarity and effectiveness: ${originalPrompt}`
  
  const result = await model.generateContent(prompt)
  const response = await result.response
  return response.text()
}
```

### 10. Create Basic Layout

Update `app/layout.tsx`:
```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PromptBase - AI Prompt Management Platform',
  description: 'Search, create, and manage AI prompts for developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

### 11. Create Home Page

Update `app/page.tsx`:
```typescript
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to PromptBase
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your AI Prompt Management Platform
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/prompts"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
          >
            Browse Prompts
          </a>
          <a
            href="/login"
            className="px-6 py-3 border border-input rounded-lg hover:bg-accent"
          >
            Sign In
          </a>
        </div>
      </div>
    </main>
  )
}
```

### 12. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

---

## 📁 Project Structure

After setup, your project should look like:

```
promptbase/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── ui/              # shadcn/ui components
├── lib/
│   ├── db/
│   │   └── schema.ts
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   ├── ai/
│   │   └── gemini.ts
│   └── utils.ts
├── public/
├── .env.local
├── drizzle.config.ts
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## ✅ Verification Checklist

- [ ] Next.js 16 app running on http://localhost:3000
- [ ] Tailwind CSS working (styles applied)
- [ ] shadcn/ui components installed
- [ ] Supabase connection working
- [ ] Database schema created
- [ ] Drizzle Studio accessible
- [ ] Environment variables set
- [ ] Google AI API key configured
- [ ] No TypeScript errors
- [ ] No console errors

---

## 🐛 Common Issues & Solutions

### Issue: "Module not found" errors
**Solution:** Run `npm install` again and restart dev server

### Issue: Database connection fails
**Solution:** Check DATABASE_URL in .env.local, ensure Supabase project is active

### Issue: Tailwind styles not applying
**Solution:** Restart dev server, check tailwind.config.ts content paths

### Issue: Google AI API errors
**Solution:** Verify API key is correct, check quota limits

### Issue: TypeScript errors
**Solution:** Run `npm run build` to see all errors, fix one by one

---

## 📚 Next Steps

1. **Seed Database:** Import the 58 existing prompts
2. **Build Components:** Create PromptCard, PromptList, etc.
3. **Implement Search:** Add search functionality
4. **Add Authentication:** Set up Supabase Auth
5. **Create CRUD Operations:** Build prompt management features

---

## 🆘 Need Help?

- **Documentation:** See `docs/DEVELOPMENT_PLAN.md`
- **Tech Stack:** See `docs/TECH_STACK_SUMMARY.md`
- **Discord:** Join Next.js, Tailwind, or Supabase Discord servers
- **GitHub Issues:** Create an issue in the repository

---

**Happy Coding! 🚀**

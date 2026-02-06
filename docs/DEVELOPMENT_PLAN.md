# PromptBase - Development Plan & Technical Documentation

**Web Application for Prompts Library**

**Version:** 2.0  
**Last Updated:** February 6, 2026  
**Status:** Implementation Phase

---

## 📛 Project Names

- **Repository:** Prompts Library (`Prompts-Library`)
- **Web Application:** PromptBase (`promptbase.dev`)
- **Web Directory:** `web/` (Next.js 16 application)

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Architecture](#architecture)
4. [Features & Requirements](#features--requirements)
5. [Database Schema](#database-schema)
6. [API Design](#api-design)
7. [Development Phases](#development-phases)
8. [Deployment Strategy](#deployment-strategy)
9. [Security Considerations](#security-considerations)
10. [Performance Optimization](#performance-optimization)

---

## 🎯 Project Overview

### Vision
PromptBase is an AI-powered prompt management platform that allows developers to search, create, edit, delete, and manage AI prompts through an intuitive web interface. It combines a curated library of 58+ professional prompts with AI-powered features for prompt generation and optimization.

### Goals
- **Accessibility:** Make high-quality AI prompts easily discoverable and usable
- **Collaboration:** Enable teams to share and manage prompts effectively
- **Intelligence:** Leverage Google AI Studio API for prompt suggestions and improvements
- **Extensibility:** Support custom prompts and categories
- **Performance:** Fast search and retrieval with excellent UX

### Target Audience
- Software developers using AI assistants (ChatGPT, Claude, etc.)
- Development teams needing standardized prompts
- AI enthusiasts building prompt libraries
- Technical writers creating documentation

---

## 🛠️ Tech Stack

### Frontend Framework
**Next.js 16** (16.1.6 - Latest LTS, January 2026)
- **Why:** Production-ready with Turbopack, React 19 support, improved caching
- **Key Features:**
  - Turbopack (stable) - 10x faster builds
  - Server Components & Server Actions
  - Improved hydration error messages
  - Enhanced TypeScript support with typed routes

**React 19** (19.2.4 - Latest stable)
- **New Features:**
  - Server Components (stable)
  - Actions for async operations
  - `useActionState`, `useFormStatus`, `useOptimistic` hooks
  - `use` hook for promises and context
  - Improved error boundaries

### Styling & UI
**Tailwind CSS v4** (4.1.18 - Latest stable)
- **Why:** 10x faster builds, modern CSS features, simplified configuration
- **Key Features:**
  - New high-performance engine (builds in microseconds)
  - CSS-first configuration with `@theme`
  - Built-in container queries
  - OKLCH color palette
  - `@starting-style` support for animations

**shadcn/ui** (CLI 3.8.2 - Latest)
- **Why:** Copy-paste components, full customization, no dependency lock-in
- **Components:** 50+ accessible, customizable components

### AI Integration
**Google AI Studio API (Gemini)**
- **SDK:** `@google/genai`
- **Model:** Gemini 2.5 Flash / Gemini 3
- **Features:**
  - Text generation for prompt suggestions
  - Content analysis and optimization

### Database & ORM
**Supabase** (PostgreSQL)
- **Client:** `@supabase/supabase-js` v2.94.1
- **Features:**
  - PostgreSQL database
  - Real-time subscriptions
  - Row-level security
  - Built-in authentication
  - Storage for exports

**Drizzle ORM** (1.0.0-beta.13 - Latest)
- **Why:** Lightweight, SQL-first, better performance
- **Benefits:**
  - Type-safe queries
  - Zero dependencies
  - SQL-like syntax
  - Excellent TypeScript support

### Authentication
**Auth.js (NextAuth v5)** (5.0.0-beta.30)
- OAuth providers (GitHub, Google)
- Database sessions with Drizzle adapter
- Secure by default

### State Management
**Zustand** (5.0.11 - Latest)
- **Why:** Simple, performant, no boilerplate
- **Use Cases:**
  - UI state (modals, filters)
  - User preferences
  - Search state

### Form Handling
**React Hook Form** (7.71.1) + **Zod** (4.3.6)
- **Why:** Best performance, excellent TypeScript support
- **Features:**
  - Minimal re-renders
  - Schema validation with Zod
  - Easy integration with shadcn/ui

### Search & Filtering
**Fuse.js** (7.1.0)
- **Why:** Fast, lightweight, no backend needed for basic search
- **Features:**
  - Fuzzy matching
  - Weighted search
  - Highlighting

### Development Tools
- **TypeScript** 5.9.x
- **ESLint** 9.39.2
- **Prettier** 3.8.1
- **Vitest** 4.0.18
- **Playwright** 1.58.1

### Deployment
**Vercel** (Recommended)
- **Why:** Built by Next.js creators, zero-config, excellent DX
- **Features:**
  - Automatic deployments from Git
  - Preview deployments for PRs
  - Edge functions
  - Analytics
  - Free SSL & CDN

---

## 🏗️ Architecture

### Application Structure

```
Prompts-Library/
├── web/                          # Next.js 16 Application
│   ├── src/
│   │   ├── app/                  # App Router pages
│   │   │   ├── (marketing)/      # Public pages
│   │   │   ├── (auth)/           # Auth routes
│   │   │   ├── (dashboard)/      # Protected routes
│   │   │   └── api/              # API routes
│   │   ├── components/           # React components
│   │   │   ├── ui/               # shadcn/ui components
│   │   │   ├── layout/           # Layout components
│   │   │   ├── prompts/          # Prompt components
│   │   │   ├── auth/             # Auth components
│   │   │   └── shared/           # Shared components
│   │   ├── lib/                  # Utilities
│   │   │   ├── db/               # Database layer
│   │   │   ├── auth/             # Auth config
│   │   │   ├── ai/               # AI integration
│   │   │   ├── utils/            # Helpers
│   │   │   └── validations/      # Zod schemas
│   │   ├── hooks/                # Custom hooks
│   │   ├── stores/               # Zustand stores
│   │   ├── types/                # TypeScript types
│   │   └── config/               # App config
│   └── public/                   # Static assets
│
├── content/                      # Prompt library content
│   └── prompts/                  # Organized prompt files
│
├── scripts/                      # Python CLI tools
│   ├── list_prompts.py
│   ├── search_prompts.py
│   └── ...
│
└── docs/                         # Documentation
```

### Data Flow

```
User Interface (React Components)
         ↓
    Server Actions / API Routes
         ↓
    Business Logic Layer
         ↓
    ┌─────────────┬──────────────┐
    ↓             ↓              ↓
Database      Google AI      Cache
(Supabase)    (Gemini)    (Next.js)
```

---

## ✨ Features & Requirements

### Phase 1: Core Features (MVP)

#### 1.1 Browse & Search
- ✅ View all prompts in a grid/list layout
- ✅ Filter by category (20 categories)
- ✅ Search by keyword (fuzzy search)
- ✅ Sort by: newest, popular, alphabetical
- ✅ Pagination or infinite scroll

#### 1.2 View Prompt Details
- ✅ Full prompt text display
- ✅ Category badge
- ✅ Copy to clipboard button
- ✅ Syntax highlighting for code blocks

#### 1.3 User Authentication
- ✅ Sign up / Login (Auth.js)
- ✅ OAuth providers (Google, GitHub)
- ✅ Password reset
- ✅ User profile

#### 1.4 Prompt Management (CRUD)
- ✅ Create new prompt
- ✅ Edit existing prompt
- ✅ Delete prompt
- ✅ Mark as favorite
- ✅ Private/Public toggle

### Phase 2: AI Features
- 🔄 Generate prompt variations
- 🔄 Improve prompt clarity
- 🔄 Auto-categorize prompts
- 🔄 Semantic search

### Phase 3: Collaboration
- 📅 Share prompts via link
- 📅 Collections
- 📅 Comments
- 📅 Version history

**Legend:** ✅ Phase 1 | 🔄 Phase 2 | 📅 Phase 3

---

## 🗄️ Database Schema

See `web/src/lib/db/schema.ts` for the complete Drizzle ORM schema including:

- **users** - User accounts
- **categories** - Prompt categories
- **prompts** - Core prompts table
- **favorites** - User favorites
- **prompt_versions** - Version history
- **collections** - User collections
- **collection_prompts** - Collection-prompt junction

---

## 🔌 API Design

### REST API Endpoints

#### Prompts
```
GET    /api/prompts              # List all prompts (with filters)
GET    /api/prompts/:id          # Get single prompt
POST   /api/prompts              # Create prompt
PUT    /api/prompts/:id          # Update prompt
DELETE /api/prompts/:id          # Delete prompt
POST   /api/prompts/:id/copy     # Duplicate prompt
POST   /api/prompts/:id/favorite # Toggle favorite
```

#### Categories
```
GET    /api/categories           # List all categories
GET    /api/categories/:slug     # Get category with prompts
```

#### Search
```
GET    /api/search               # Search prompts
```

#### AI Features
```
POST   /api/ai/suggest           # Generate prompt suggestions
POST   /api/ai/improve           # Improve existing prompt
```

---

## 📅 Development Phases

### Phase 1: Foundation ✅ COMPLETED
- [x] Initialize Next.js 16 project with TypeScript
- [x] Configure Tailwind CSS v4
- [x] Set up project structure
- [x] Create database schema with Drizzle ORM
- [x] Set up TypeScript types and Zod validations
- [x] Create design system and global styles
- [x] Build landing page

### Phase 2: Core Features (In Progress)
- [ ] Set up Supabase project
- [ ] Configure Auth.js with providers
- [ ] Initialize shadcn/ui components
- [ ] Build prompt listing page
- [ ] Create prompt detail view
- [ ] Implement search functionality
- [ ] Add category filtering

### Phase 3: User Features
- [ ] Implement CRUD operations
- [ ] Add favorites feature
- [ ] Build user settings page
- [ ] Create collections feature

### Phase 4: Polish & Deploy
- [ ] Add loading states and error boundaries
- [ ] Optimize for performance
- [ ] Write tests
- [ ] Deploy to Vercel

---

## 🚀 Deployment Strategy

### Vercel Deployment

#### Environment Variables
```bash
# Database
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# Auth.js
AUTH_SECRET=...
AUTH_GITHUB_ID=...
AUTH_GITHUB_SECRET=...
AUTH_GOOGLE_ID=...
AUTH_GOOGLE_SECRET=...

# Google AI
GOOGLE_AI_API_KEY=...

# App
NEXT_PUBLIC_APP_URL=https://promptbase.dev
```

---

## 🔒 Security Considerations

- ✅ Use Auth.js (secure by default)
- ✅ Implement Row Level Security (RLS) in Supabase
- ✅ Validate user permissions on server actions
- ✅ Use CSRF protection (built into Next.js)
- ✅ Sanitize user inputs (use Zod validation)
- ✅ Prevent SQL injection (Drizzle ORM handles this)
- ✅ Use HTTPS only

---

## ⚡ Performance Optimization

- **Code Splitting:** Automatic with Next.js App Router
- **Image Optimization:** Use `next/image`
- **Font Optimization:** Use `next/font`
- **Lazy Loading:** Use `React.lazy()` for heavy components
- **Caching:** Leverage Next.js caching strategies

---

**Last Updated:** February 6, 2026  
**Version:** 2.0

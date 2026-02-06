# PromptBase Web Application

**Next.js 16 Web Application for PromptBase**

This directory contains the web application for the PromptBase AI prompt management platform.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20.0.0 or higher
- npm or yarn
- Supabase account (for database)

### Development

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📁 Project Structure

```
web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (marketing)/        # Public pages (landing, about)
│   │   ├── (auth)/             # Authentication pages
│   │   ├── (dashboard)/        # Protected dashboard
│   │   ├── api/                # API routes
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Landing page
│   │   └── globals.css         # Global styles
│   │
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui base components
│   │   ├── layout/             # Header, Footer, Sidebar
│   │   ├── prompts/            # Prompt-specific components
│   │   ├── auth/               # Auth components
│   │   └── shared/             # Shared components
│   │
│   ├── lib/                    # Utilities and libraries
│   │   ├── db/                 # Database (Drizzle ORM)
│   │   ├── auth/               # Auth.js configuration
│   │   ├── ai/                 # Google AI integration
│   │   ├── utils/              # Helper functions
│   │   └── validations/        # Zod schemas
│   │
│   ├── hooks/                  # Custom React hooks
│   ├── stores/                 # Zustand state stores
│   ├── types/                  # TypeScript type definitions
│   └── config/                 # App configuration
│
├── public/                     # Static assets
├── drizzle.config.ts           # Drizzle ORM config
├── next.config.ts              # Next.js config
├── tsconfig.json               # TypeScript config
├── .env.example                # Environment template
└── package.json                # Dependencies
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run unit tests with Vitest |
| `npm run test:e2e` | Run E2E tests with Playwright |
| `npm run db:generate` | Generate database migrations |
| `npm run db:migrate` | Run database migrations |
| `npm run db:push` | Push schema changes |
| `npm run db:studio` | Open Drizzle Studio |

---

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
# Database (Supabase)
DATABASE_URL="postgresql://..."

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://xxx.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJ..."

# Auth.js
AUTH_SECRET="your-secret-min-32-chars"
AUTH_GITHUB_ID="your-github-client-id"
AUTH_GITHUB_SECRET="your-github-secret"

# Google AI (Optional)
GOOGLE_AI_API_KEY="AIza..."
```

### Setting up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your credentials
3. Run database migrations: `npm run db:push`

---

## 📚 Tech Stack

- **Next.js 16.1.6** - React framework
- **React 19.2.4** - UI library
- **TypeScript 5.9** - Type safety
- **Tailwind CSS 4.1** - Styling
- **shadcn/ui** - UI components
- **Drizzle ORM** - Database access
- **Auth.js** - Authentication
- **Zustand** - State management
- **Zod** - Validation

---

## 📝 License

MIT License - See the root LICENSE file for details.

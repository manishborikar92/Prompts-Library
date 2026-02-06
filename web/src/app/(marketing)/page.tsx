import Link from 'next/link'
import { ArrowRight, BookOpen, Sparkles, Zap, Search, Code, Shield, Database } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-20" />

        <div className="container relative mx-auto px-4 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 text-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">58+ Professional AI Prompts</span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="gradient-text">AI Prompts</span> for
              <br />
              Modern Developers
            </h1>

            {/* Description */}
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              A curated collection of professional AI prompts designed to accelerate your development workflow.
              Search, create, and manage prompts for ChatGPT, Claude, and any AI assistant.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/prompts"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
              >
                Browse Prompts
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all hover:bg-card hover:border-primary/50"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="container mx-auto px-4 py-24">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features to supercharge your AI-assisted development
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="border-t border-border/50">
        <div className="container mx-auto px-4 py-24">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              20 Categories, 58+ Prompts
            </h2>
            <p className="text-lg text-muted-foreground">
              Covering the entire software development lifecycle
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/30 p-4 transition-all hover:border-primary/50 hover:bg-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.count} prompts</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              View all categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/50 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join developers who use PromptBase to streamline their AI workflow.
            </p>
            <Link
              href="/signup"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
            >
              Create Free Account
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">PromptBase</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PromptBase. Open source under MIT License.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link
                href="https://github.com/manishborikar92/Prompts-Library"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: 'Smart Search',
    description: 'Find the perfect prompt instantly with fuzzy search across all categories and content.',
    icon: Search,
  },
  {
    title: 'AI-Powered',
    description: 'Get prompt suggestions and improvements powered by Google Gemini AI.',
    icon: Sparkles,
  },
  {
    title: 'Lightning Fast',
    description: 'Built with Next.js 16 and optimized for performance. No loading spinners.',
    icon: Zap,
  },
  {
    title: 'Code-Ready',
    description: 'Prompts designed for developers, covering code analysis, refactoring, and more.',
    icon: Code,
  },
  {
    title: 'Secure',
    description: 'Your prompts are private by default. Share only what you want to share.',
    icon: Shield,
  },
  {
    title: 'Organized',
    description: 'Create collections, save favorites, and organize prompts your way.',
    icon: Database,
  },
]

const categories = [
  { name: 'Code Analysis', slug: 'code-analysis', count: 5, icon: Code },
  { name: 'API Development', slug: 'api-development', count: 4, icon: Zap },
  { name: 'Security', slug: 'security', count: 4, icon: Shield },
  { name: 'Database', slug: 'database', count: 4, icon: Database },
]

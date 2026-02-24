import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center mx-auto px-4 md:px-8">
                <div className="mr-8 flex items-center gap-2">
                    <Link href="/" className="mr-6 flex items-center space-x-2 group">
                        <div className="flex bg-primary/10 group-hover:bg-primary/20 p-1.5 rounded-lg transition-colors">
                            <Sparkles className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-bold sm:inline-block">
                            PromptBase
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href="/prompts"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Discover
                        </Link>
                        <Link
                            href="/categories"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Categories
                        </Link>
                        <Link
                            href="/collections"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Collections
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-2">
                        <Button variant="ghost" asChild className="hidden md:flex">
                            <Link href="/login">Sign In</Link>
                        </Button>
                        <Button asChild className="rounded-full shadow-lg hover:shadow-primary/20 transition-all">
                            <Link href="/signup">Get Started</Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

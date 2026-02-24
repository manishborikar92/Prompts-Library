import { getPrompts } from '@/lib/db/queries/prompts'
import { PromptCard } from '@/components/prompts/prompt-card'
import { PromptSearch } from '@/components/prompts/prompt-search'
import { getUser } from '@/lib/auth'

export const dynamic = 'force-dynamic'

type Props = {
    searchParams: Promise<{ q?: string }>
}

export default async function PromptsPage({ searchParams }: Props) {
    const { q } = await searchParams
    const user = await getUser()

    const prompts = await getPrompts(50, 0, q, user?.id)

    return (
        <div className="container py-8 space-y-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Browse Prompts</h1>
                    <p className="text-muted-foreground text-lg">
                        Discover and share AI prompts for efficient development.
                    </p>
                </div>
                <PromptSearch />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {prompts.map((prompt) => (
                    <PromptCard key={prompt.id} prompt={prompt} />
                ))}
                {prompts.length === 0 && (
                    <div className="col-span-full py-12 text-center">
                        <h3 className="text-xl font-semibold">No prompts found</h3>
                        <p className="text-muted-foreground">
                            {q ? `No results for "${q}"` : 'Try updating your filters.'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

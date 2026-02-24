import { getCategories } from '@/lib/db/queries/categories'
import { PromptForm } from '@/components/prompts/prompt-form'
import { createPrompt } from '@/lib/actions/prompts'

export const dynamic = 'force-dynamic'

export default async function CreatePromptPage() {
    const categories = await getCategories()

    return (
        <div className="container py-8">
            <PromptForm categories={categories} action={createPrompt} />
        </div>
    )
}

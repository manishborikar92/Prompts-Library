import { notFound, redirect } from 'next/navigation'
import { getPromptById } from '@/lib/db/queries/prompts'
import { getCategories } from '@/lib/db/queries/categories'
import { updatePrompt } from '@/lib/actions/prompts'
import { PromptForm } from '@/components/prompts/prompt-form'
import { createClient } from '@/lib/supabase/server'

type Props = {
    params: Promise<{ id: string }>
}

export default async function EditPromptPage({ params }: Props) {
    const { id } = await params

    // Verify User
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        redirect('/login')
    }

    const prompt = await getPromptById(id)
    if (!prompt) {
        notFound()
    }

    // Check ownership
    if (prompt.userId !== user.id) {
        return (
            <div className="container py-20 text-center">
                <h1 className="text-2xl font-bold text-destructive">Unauthorized</h1>
                <p>You do not have permission to edit this prompt.</p>
            </div>
        )
    }

    const categories = await getCategories()

    // Bind ID to update action (Note: we need to import updatePrompt)
    const updateAction = updatePrompt.bind(null, id)

    return (
        <div className="container py-8">
            <PromptForm
                categories={categories}
                initialData={prompt}
                action={updateAction}
                submitLabel="Update Prompt"
            />
        </div>
    )
}

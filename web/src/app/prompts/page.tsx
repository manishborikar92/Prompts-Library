import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function PromptsPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    return (
        <div className="container py-8">
            <h1 className="text-3xl font-bold mb-6">Prompts</h1>
            <p className="text-muted-foreground">My Prompts will appear here.</p>
        </div>
    )
}

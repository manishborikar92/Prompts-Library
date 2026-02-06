import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { Heart } from 'lucide-react'

import { db } from '@/lib/db'
import { favorites, prompts } from '@/lib/db/schema'
import { eq, desc } from 'drizzle-orm'
import { createClient } from '@/lib/supabase/server'
import { PromptCard } from '@/components/prompts/prompt-card'
import { Button } from '@/components/ui/button'

export const dynamic = 'force-dynamic'

async function getUserFavorites(userId: string) {
    const data = await db.query.favorites.findMany({
        where: eq(favorites.userId, userId),
        orderBy: [desc(favorites.createdAt)],
        with: {
            prompt: {
                with: {
                    category: true,
                    user: true,
                    // We know it is favorited by CURRENT user if it is in this list
                }
            }
        }
    })
    return data
}

export default async function FavoritesPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const favorites = await getUserFavorites(user.id)

    return (
        <div className="container py-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Favorites</h1>
                    <p className="text-muted-foreground text-lg">
                        Prompts you have liked.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((fav) => (
                    <PromptCard
                        key={fav.id}
                        prompt={{
                            ...fav.prompt,
                            isFavorited: true // Logic: It's in favorites list
                        }}
                    />
                ))}

                {favorites.length === 0 && (
                    <div className="col-span-full py-12 text-center border rounded-lg border-dashed">
                        <Heart className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
                        <h3 className="text-xl font-semibold">No favorites yet</h3>
                        <p className="text-muted-foreground mb-4">
                            Browse prompts and tap the heart icon to save them here.
                        </p>
                        <Link href={"/prompts" as any}>
                            <Button>Browse Prompts</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}



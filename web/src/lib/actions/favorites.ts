'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { db } from '@/lib/db'
import { favorites, prompts } from '@/lib/db/schema'
import { eq, and, sql } from 'drizzle-orm'

export async function toggleFavorite(promptId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return { error: 'You must be logged in' }
    }

    try {
        const existing = await db.query.favorites.findFirst({
            where: and(eq(favorites.promptId, promptId), eq(favorites.userId, user.id)),
        })

        if (existing) {
            await db.delete(favorites)
                .where(and(eq(favorites.promptId, promptId), eq(favorites.userId, user.id)))

            // Decrement count
            await db.update(prompts)
                .set({ favoriteCount: sql`${prompts.favoriteCount} - 1` })
                .where(eq(prompts.id, promptId))

            revalidatePath('/prompts')
            return { favorited: false }
        } else {
            await db.insert(favorites).values({
                promptId,
                userId: user.id,
            })

            // Increment count
            await db.update(prompts)
                .set({ favoriteCount: sql`${prompts.favoriteCount} + 1` })
                .where(eq(prompts.id, promptId))

            revalidatePath('/prompts')
            return { favorited: true }
        }
    } catch (error) {
        console.error('Favorite Error:', error)
        return { error: 'Failed' }
    }
}

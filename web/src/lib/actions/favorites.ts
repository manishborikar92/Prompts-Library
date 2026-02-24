'use server'

import { revalidatePath } from 'next/cache'
import { getUser } from '@/lib/auth'
import { db } from '@/lib/db'
import { favorites, prompts } from '@/lib/db/schema'
import { eq, and, sql } from 'drizzle-orm'

export async function toggleFavorite(promptId: string) {
    const user = await getUser()

    if (!user) {
        return { error: 'You must be logged in' }
    }

    try {
        const result = await db.insert(favorites).values({
            promptId,
            userId: user.id,
        }).onConflictDoNothing().returning({ id: favorites.id })

        if (result.length > 0) {
            // Increment count since it was newly inserted
            await db.update(prompts)
                .set({ favoriteCount: sql`${prompts.favoriteCount} + 1` })
                .where(eq(prompts.id, promptId))

            revalidatePath('/prompts')
            return { favorited: true }
        } else {
            // Already existed, therefore we are unfavoriting
            await db.delete(favorites)
                .where(and(eq(favorites.promptId, promptId), eq(favorites.userId, user.id)))

            // Decrement count
            await db.update(prompts)
                .set({ favoriteCount: sql`${prompts.favoriteCount} - 1` })
                .where(eq(prompts.id, promptId))

            revalidatePath('/prompts')
            return { favorited: false }
        }
    } catch (error) {
        console.error('Favorite Error:', error)
        return { error: 'Failed' }
    }
}

import { db } from '@/lib/db'
import { prompts, categories, users, favorites } from '@/lib/db/schema'
import { desc, eq, and, or, ilike } from 'drizzle-orm'

export async function getPrompts(limit = 20, offset = 0, search?: string, userId?: string) {
    const data = await db.query.prompts.findMany({
        limit,
        offset,
        orderBy: [desc(prompts.createdAt)],
        where: (prompts, { or, ilike }) =>
            search
                ? or(
                    ilike(prompts.title, `%${search}%`),
                    ilike(prompts.content, `%${search}%`),
                    ilike(prompts.description || '', `%${search}%`)
                )
                : undefined,
        with: {
            category: true,
            user: true,
            favorites: userId ? {
                where: (favorites, { eq }) => eq(favorites.userId, userId),
                columns: { id: true }
            } : undefined
        },
    })

    return data.map(p => ({
        ...p,
        isFavorited: p.favorites ? p.favorites.length > 0 : false,
    }))
}

export async function getPromptById(id: string, userId?: string) {
    const data = await db.query.prompts.findFirst({
        where: eq(prompts.id, id),
        with: {
            category: true,
            user: true,
            favorites: userId ? {
                where: (favorites, { eq }) => eq(favorites.userId, userId),
                columns: { id: true }
            } : undefined,
            versions: {
                orderBy: [desc(prompts.createdAt)],
            },
        },
    })

    if (!data) return null

    return {
        ...data,
        isFavorited: data.favorites ? data.favorites.length > 0 : false
    }
}

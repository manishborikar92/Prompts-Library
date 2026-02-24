import { db } from '@/lib/db'
import { prompts, categories, users, favorites } from '@/lib/db/schema'
import { desc, eq, and, or, ilike, sql } from 'drizzle-orm'

export async function getPrompts(limit = 20, offset = 0, search?: string, userId?: string) {
    const data = await db.query.prompts.findMany({
        limit,
        offset,
        orderBy: [desc(prompts.createdAt)],
        where: (prompts, { or, and, ilike, eq, sql }) => {
            const searchCondition = search
                ? or(
                    ilike(prompts.title, `%${search}%`),
                    ilike(prompts.content, `%${search}%`),
                    prompts.description ? ilike(prompts.description, `%${search}%`) : undefined
                )
                : undefined;
            const privacyCondition = or(
                eq(prompts.isPublic, true),
                userId ? eq(prompts.userId, userId) : sql`false`
            );
            return searchCondition ? and(searchCondition, privacyCondition) : privacyCondition;
        },
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
        where: and(
            eq(prompts.id, id),
            or(
                eq(prompts.isPublic, true),
                userId ? eq(prompts.userId, userId) : sql`false`
            )
        ),
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

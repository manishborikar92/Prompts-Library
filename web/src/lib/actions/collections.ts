'use server'

import { revalidatePath } from 'next/cache'
import { getUser } from '@/lib/auth'
import { db } from '@/lib/db'
import { collections, collectionPrompts } from '@/lib/db/schema'
import { eq, and, desc } from 'drizzle-orm'

export async function createCollection(formData: FormData) {
    const user = await getUser()

    if (!user) return { error: 'Unauthorized' }

    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const isPublic = formData.get('isPublic') === 'on'

    if (!name || name.length < 3) return { error: 'Name must be at least 3 characters' }

    try {
        const [newCollection] = await db.insert(collections).values({
            name,
            description,
            isPublic,
            userId: user.id
        }).returning()

        revalidatePath('/collections')
        return { success: true, collection: newCollection }
    } catch (error) {
        console.error('Create Collection Error:', error)
        return { error: 'Failed to create collection' }
    }
}

export async function addToCollection(collectionId: string, promptId: string) {
    const user = await getUser()
    if (!user) return { error: 'Unauthorized' }

    try {
        // Verify ownership of collection
        const collection = await db.query.collections.findFirst({
            where: and(eq(collections.id, collectionId), eq(collections.userId, user.id))
        })
        if (!collection) return { error: 'Collection not found' }

        // Check if already added
        const existing = await db.query.collectionPrompts.findFirst({
            where: and(eq(collectionPrompts.collectionId, collectionId), eq(collectionPrompts.promptId, promptId))
        })
        if (existing) return { error: 'Prompt already in collection' }

        await db.insert(collectionPrompts).values({
            collectionId,
            promptId
        })

        return { success: true }
    } catch (error) {
        console.error('Add to Collection Error:', error)
        return { error: 'Failed to add to collection' }
    }
}

export async function getUserCollections() {
    const user = await getUser()
    if (!user) return []

    return await db.query.collections.findMany({
        where: eq(collections.userId, user.id),
        orderBy: [desc(collections.createdAt)],
        with: {
            collectionPrompts: true
        }
    })
}

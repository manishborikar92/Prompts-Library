'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { db } from '@/lib/db'
import { prompts } from '@/lib/db/schema'
import { promptSchema } from '@/lib/validations/prompts'
import { eq, and } from 'drizzle-orm'

export type ActionState = {
    error?: string
    success?: boolean
    fieldErrors?: Record<string, string[]>
}

export async function createPrompt(prevState: ActionState, formData: FormData): Promise<ActionState> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return { error: 'You must be logged in to create a prompt' }
    }

    // Parse and validate
    const rawData = {
        title: formData.get('title'),
        content: formData.get('content'),
        description: formData.get('description'),
        categoryId: formData.get('categoryId'),
        tags: formData.get('tags'),
        isPublic: formData.get('isPublic') === 'on',
    }

    const validatedFields = promptSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return {
            error: 'Invalid fields',
            fieldErrors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { title, content, description, categoryId, tags, isPublic } = validatedFields.data

    // Process tags
    const tagArray = tags
        ? tags.split(',').map((t) => t.trim()).filter(Boolean)
        : []

    try {
        const [newPrompt] = await db.insert(prompts).values({
            title,
            content,
            description: description || '',
            categoryId,
            userId: user.id,
            isPublic,
            tags: tagArray,
        }).returning() // Get the ID

        // We can't redirect inside try-catch easily if we want to return state on error, 
        // but successful redirect throws "NEXT_REDIRECT".
    } catch (error) {
        // Check if it's a redirect error
        if ((error as any).message === 'NEXT_REDIRECT') {
            throw error
        }
        console.error('Database Error:', error)
        return { error: 'Failed to create prompt. Please try again.' }
    }

    revalidatePath('/prompts')
    redirect('/prompts' as any)
}

export async function updatePrompt(id: string, prevState: ActionState, formData: FormData): Promise<ActionState> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return { error: 'You must be logged in to edit a prompt' }
    }

    // Parse and validate
    const rawData = {
        title: formData.get('title'),
        content: formData.get('content'),
        description: formData.get('description'),
        categoryId: formData.get('categoryId'),
        tags: formData.get('tags'),
        isPublic: formData.get('isPublic') === 'on',
    }

    const validatedFields = promptSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return {
            error: 'Invalid fields',
            fieldErrors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { title, content, description, categoryId, tags, isPublic } = validatedFields.data
    const tagArray = tags ? tags.split(',').map((t) => t.trim()).filter(Boolean) : []

    try {
        // Verify ownership
        // In a real app we check if user owns the prompt or is admin.
        // For now relying on simple check or assuming UI protects it, but backend MUST check.
        // Drizzle check:
        const existing = await db.query.prompts.findFirst({
            where: (prompts, { eq }) => eq(prompts.id, id),
        })

        if (!existing) return { error: 'Prompt not found' }
        if (existing.userId !== user.id) return { error: 'Unauthorized' }

        await db.update(prompts)
            .set({
                title,
                content,
                description,
                categoryId,
                isPublic,
                tags: tagArray,
                updatedAt: new Date(),
            })
            .where(
                and(eq(prompts.id, id), eq(prompts.userId, user.id))
            )

    } catch (error) {
        if ((error as any).message === 'NEXT_REDIRECT') throw error
        console.error('Database Error:', error)
        return { error: 'Failed to update prompt.' }
    }

    revalidatePath(`/prompts/${id}`)
    revalidatePath('/prompts')
    redirect(`/prompts/${id}` as any)
}

export async function deletePrompt(id: string): Promise<ActionState> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return { error: 'Unauthorized' }

    try {
        await db.delete(prompts)
            .where(and(eq(prompts.id, id), eq(prompts.userId, user.id)))
    } catch (error) {
        console.error('Delete Error:', error)
        return { error: 'Failed to delete prompt' }
    }

    revalidatePath('/prompts')
    redirect('/prompts' as any)
}

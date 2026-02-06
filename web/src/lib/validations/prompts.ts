import { z } from 'zod'

export const promptSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    content: z.string().min(10, 'Content must be at least 10 characters'),
    description: z.string().optional(),
    categoryId: z.coerce.number().min(1, 'Please select a category'),
    tags: z.string().optional(), // Comma separated string for input
    isPublic: z.boolean().default(true),
})

export type PromptFormData = z.infer<typeof promptSchema>

import { z } from 'zod'

export const promptSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters').max(500, 'Title too long'),
    content: z.string().min(10, 'Content must be at least 10 characters').max(8192, 'Content too long'),
    description: z.string().max(8192, 'Description too long').optional(),
    categoryId: z.coerce.number().min(1, 'Please select a category'),
    tags: z.string().max(1024, 'Tags too long').optional(), // Comma separated string for input
    isPublic: z.boolean().default(true),
})

export type PromptFormData = z.infer<typeof promptSchema>

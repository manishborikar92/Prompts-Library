import { z } from 'zod'

/**
 * Schema for creating a new prompt
 */
export const createPromptSchema = z.object({
    title: z
        .string()
        .min(3, 'Title must be at least 3 characters')
        .max(500, 'Title must be less than 500 characters'),
    content: z
        .string()
        .min(10, 'Content must be at least 10 characters')
        .max(50000, 'Content must be less than 50000 characters'),
    description: z.string().max(1000, 'Description must be less than 1000 characters').optional(),
    categoryId: z.number().int().positive().optional(),
    isPublic: z.boolean().default(true),
    tags: z.array(z.string().max(50)).max(10, 'Maximum 10 tags allowed').optional(),
})

/**
 * Schema for updating an existing prompt
 */
export const updatePromptSchema = createPromptSchema.partial().extend({
    id: z.string().uuid('Invalid prompt ID'),
})

/**
 * Schema for searching prompts
 */
export const searchPromptsSchema = z.object({
    query: z.string().min(1).max(200).optional(),
    categoryId: z.number().int().positive().optional(),
    categorySlug: z.string().max(100).optional(),
    isPublic: z.boolean().optional(),
    isFeatured: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    sortBy: z.enum(['newest', 'popular', 'alphabetical', 'usage']).default('newest'),
    limit: z.number().int().min(1).max(100).default(20),
    offset: z.number().int().min(0).default(0),
})

/**
 * Schema for creating a collection
 */
export const createCollectionSchema = z.object({
    name: z
        .string()
        .min(1, 'Name is required')
        .max(255, 'Name must be less than 255 characters'),
    description: z.string().max(1000, 'Description must be less than 1000 characters').optional(),
    isPublic: z.boolean().default(false),
})

/**
 * Schema for updating a collection
 */
export const updateCollectionSchema = createCollectionSchema.partial().extend({
    id: z.string().uuid('Invalid collection ID'),
})

// Type exports
export type CreatePromptInput = z.infer<typeof createPromptSchema>
export type UpdatePromptInput = z.infer<typeof updatePromptSchema>
export type SearchPromptsInput = z.infer<typeof searchPromptsSchema>
export type CreateCollectionInput = z.infer<typeof createCollectionSchema>
export type UpdateCollectionInput = z.infer<typeof updateCollectionSchema>

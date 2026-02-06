/**
 * Prompt-related type definitions
 */

export interface Prompt {
    id: string
    title: string
    content: string
    description?: string
    categoryId?: number
    userId?: string
    isPublic: boolean
    isFeatured: boolean
    tags: string[]
    usageCount: number
    favoriteCount: number
    createdAt: Date
    updatedAt: Date
}

export interface Category {
    id: number
    name: string
    slug: string
    description?: string
    icon?: string
    orderIndex?: number
    createdAt: Date
}

export interface PromptWithCategory extends Prompt {
    category?: Category
}

export interface CreatePromptInput {
    title: string
    content: string
    description?: string
    categoryId?: number
    isPublic?: boolean
    tags?: string[]
}

export interface UpdatePromptInput extends Partial<CreatePromptInput> {
    id: string
}

export interface PromptFilters {
    categoryId?: number
    categorySlug?: string
    search?: string
    isPublic?: boolean
    isFeatured?: boolean
    tags?: string[]
    userId?: string
    sortBy?: 'newest' | 'popular' | 'alphabetical' | 'usage'
    limit?: number
    offset?: number
}

export interface PromptSearchResult {
    prompts: PromptWithCategory[]
    total: number
    hasMore: boolean
}

export interface Favorite {
    id: string
    userId: string
    promptId: string
    createdAt: Date
}

export interface Collection {
    id: string
    name: string
    description?: string
    userId: string
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
}

export interface CollectionWithPrompts extends Collection {
    prompts: Prompt[]
}

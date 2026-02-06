/**
 * Database-related type definitions
 * These types augment the Drizzle ORM schema types
 */

export interface User {
    id: string
    email: string
    name?: string
    image?: string
    createdAt: Date
    updatedAt: Date
}

export interface Session {
    user: User
    expires: Date
}

export interface DatabaseConfig {
    connectionString: string
    ssl?: boolean
}

// Pagination types
export interface PaginationParams {
    page?: number
    limit?: number
}

export interface PaginatedResult<T> {
    data: T[]
    pagination: {
        page: number
        limit: number
        total: number
        totalPages: number
        hasNext: boolean
        hasPrev: boolean
    }
}

// Sort types
export type SortDirection = 'asc' | 'desc'

export interface SortParams {
    field: string
    direction: SortDirection
}

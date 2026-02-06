import {
    boolean,
    index,
    integer,
    pgTable,
    serial,
    text,
    timestamp,
    uuid,
    varchar,
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

/**
 * Users table - stores user account information
 * Integrated with Auth.js for authentication
 */
export const users = pgTable('users', {
    id: uuid('id').primaryKey().defaultRandom(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    name: varchar('name', { length: 255 }),
    image: text('image'),
    emailVerified: timestamp('email_verified', { mode: 'date' }),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow().notNull(),
})

/**
 * Categories table - organizes prompts into logical groups
 */
export const categories = pgTable('categories', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    slug: varchar('slug', { length: 255 }).notNull().unique(),
    description: text('description'),
    icon: varchar('icon', { length: 50 }),
    orderIndex: integer('order_index').default(0),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
})

/**
 * Prompts table - the core table storing all AI prompts
 */
export const prompts = pgTable(
    'prompts',
    {
        id: uuid('id').primaryKey().defaultRandom(),
        title: varchar('title', { length: 500 }).notNull(),
        content: text('content').notNull(),
        description: text('description'),
        categoryId: integer('category_id').references(() => categories.id, { onDelete: 'set null' }),
        userId: uuid('user_id').references(() => users.id, { onDelete: 'set null' }),
        isPublic: boolean('is_public').default(true).notNull(),
        isFeatured: boolean('is_featured').default(false).notNull(),
        tags: text('tags').array(),
        usageCount: integer('usage_count').default(0).notNull(),
        favoriteCount: integer('favorite_count').default(0).notNull(),
        createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
        updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow().notNull(),
    },
    (table) => [
        index('idx_prompts_category').on(table.categoryId),
        index('idx_prompts_user').on(table.userId),
        index('idx_prompts_public').on(table.isPublic),
        index('idx_prompts_created').on(table.createdAt),
    ]
)

/**
 * Favorites table - tracks which prompts users have favorited
 */
export const favorites = pgTable(
    'favorites',
    {
        id: uuid('id').primaryKey().defaultRandom(),
        userId: uuid('user_id')
            .notNull()
            .references(() => users.id, { onDelete: 'cascade' }),
        promptId: uuid('prompt_id')
            .notNull()
            .references(() => prompts.id, { onDelete: 'cascade' }),
        createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
    },
    (table) => [
        index('idx_favorites_user').on(table.userId),
        index('idx_favorites_prompt').on(table.promptId),
    ]
)

/**
 * Prompt versions table - stores version history of prompts
 */
export const promptVersions = pgTable(
    'prompt_versions',
    {
        id: uuid('id').primaryKey().defaultRandom(),
        promptId: uuid('prompt_id')
            .notNull()
            .references(() => prompts.id, { onDelete: 'cascade' }),
        title: varchar('title', { length: 500 }).notNull(),
        content: text('content').notNull(),
        description: text('description'),
        versionNumber: integer('version_number').notNull(),
        createdBy: uuid('created_by').references(() => users.id, { onDelete: 'set null' }),
        createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
    },
    (table) => [index('idx_versions_prompt').on(table.promptId)]
)

/**
 * Collections table - user-created prompt collections
 */
export const collections = pgTable(
    'collections',
    {
        id: uuid('id').primaryKey().defaultRandom(),
        name: varchar('name', { length: 255 }).notNull(),
        description: text('description'),
        userId: uuid('user_id')
            .notNull()
            .references(() => users.id, { onDelete: 'cascade' }),
        isPublic: boolean('is_public').default(false).notNull(),
        createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
        updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow().notNull(),
    },
    (table) => [index('idx_collections_user').on(table.userId)]
)

/**
 * Collection prompts junction table
 */
export const collectionPrompts = pgTable(
    'collection_prompts',
    {
        id: uuid('id').primaryKey().defaultRandom(),
        collectionId: uuid('collection_id')
            .notNull()
            .references(() => collections.id, { onDelete: 'cascade' }),
        promptId: uuid('prompt_id')
            .notNull()
            .references(() => prompts.id, { onDelete: 'cascade' }),
        orderIndex: integer('order_index').default(0),
        addedAt: timestamp('added_at', { mode: 'date' }).defaultNow().notNull(),
    },
    (table) => [
        index('idx_collection_prompts_collection').on(table.collectionId),
        index('idx_collection_prompts_prompt').on(table.promptId),
    ]
)

// ============================================================================
// Relations
// ============================================================================

export const usersRelations = relations(users, ({ many }) => ({
    prompts: many(prompts),
    favorites: many(favorites),
    collections: many(collections),
}))

export const categoriesRelations = relations(categories, ({ many }) => ({
    prompts: many(prompts),
}))

export const promptsRelations = relations(prompts, ({ one, many }) => ({
    category: one(categories, {
        fields: [prompts.categoryId],
        references: [categories.id],
    }),
    user: one(users, {
        fields: [prompts.userId],
        references: [users.id],
    }),
    favorites: many(favorites),
    versions: many(promptVersions),
    collectionPrompts: many(collectionPrompts),
}))

export const favoritesRelations = relations(favorites, ({ one }) => ({
    user: one(users, {
        fields: [favorites.userId],
        references: [users.id],
    }),
    prompt: one(prompts, {
        fields: [favorites.promptId],
        references: [prompts.id],
    }),
}))

export const promptVersionsRelations = relations(promptVersions, ({ one }) => ({
    prompt: one(prompts, {
        fields: [promptVersions.promptId],
        references: [prompts.id],
    }),
    createdByUser: one(users, {
        fields: [promptVersions.createdBy],
        references: [users.id],
    }),
}))

export const collectionsRelations = relations(collections, ({ one, many }) => ({
    user: one(users, {
        fields: [collections.userId],
        references: [users.id],
    }),
    collectionPrompts: many(collectionPrompts),
}))

export const collectionPromptsRelations = relations(collectionPrompts, ({ one }) => ({
    collection: one(collections, {
        fields: [collectionPrompts.collectionId],
        references: [collections.id],
    }),
    prompt: one(prompts, {
        fields: [collectionPrompts.promptId],
        references: [prompts.id],
    }),
}))

// ============================================================================
// Type exports for use in the application
// ============================================================================

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert

export type Category = typeof categories.$inferSelect
export type NewCategory = typeof categories.$inferInsert

export type Prompt = typeof prompts.$inferSelect
export type NewPrompt = typeof prompts.$inferInsert

export type Favorite = typeof favorites.$inferSelect
export type NewFavorite = typeof favorites.$inferInsert

export type PromptVersion = typeof promptVersions.$inferSelect
export type NewPromptVersion = typeof promptVersions.$inferInsert

export type Collection = typeof collections.$inferSelect
export type NewCollection = typeof collections.$inferInsert

export type CollectionPrompt = typeof collectionPrompts.$inferSelect
export type NewCollectionPrompt = typeof collectionPrompts.$inferInsert

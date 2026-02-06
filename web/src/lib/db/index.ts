import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// Database URL from environment variables
const connectionString = process.env.DATABASE_URL

if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not set')
}

// Create the connection
// Use "as any" to bypass potential type mismatch with strict mode if default export is not typed correctly
const client = (postgres as any)(connectionString, {
    prepare: false, // Disable prepared statements for serverless
})

// Create the Drizzle ORM instance with schema
export const db = drizzle(client, { schema })

// Export schema for use elsewhere
export * from './schema'

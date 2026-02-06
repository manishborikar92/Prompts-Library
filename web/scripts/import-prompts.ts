import fs from 'fs'
import path from 'path'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '../src/lib/db/schema'
import * as dotenv from 'dotenv'
import { eq } from 'drizzle-orm'

// Load environment variables
dotenv.config({ path: '.env.local' })
dotenv.config({ path: '.env' })

if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not defined')
    process.exit(1)
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 })
const db = drizzle(client, { schema })

const CONTENT_DIR = path.join(__dirname, '../../content/prompts')

async function main() {
    console.log('🚀 Starting prompt migration...')

    // 1. Ensure a user exists (System User)
    const SYSTEM_EMAIL = 'admin@promptbase.com'
    let user = await db.query.users.findFirst({
        where: eq(schema.users.email, SYSTEM_EMAIL),
    })

    if (!user) {
        console.log(`Creating system user: ${SYSTEM_EMAIL}`)
        const [newUser] = await db.insert(schema.users).values({
            email: SYSTEM_EMAIL,
            name: 'System Admin',
            image: '',
        }).returning()
        user = newUser
    }

    // 2. Read Categories and Prompts
    const entries = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })

    for (const entry of entries) {
        if (entry.isDirectory()) {
            const categoryDir = entry.name
            // Format: 01_Category_Name -> Category Name
            const categoryName = categoryDir.replace(/^\d+_/, '').replace(/_/g, ' ')
            const categorySlug = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-')

            console.log(`Processing category: ${categoryName}`)

            // Upsert Category
            let category = await db.query.categories.findFirst({
                where: eq(schema.categories.slug, categorySlug)
            })

            if (!category) {
                const [newCat] = await db.insert(schema.categories).values({
                    name: categoryName,
                    slug: categorySlug,
                    description: `Prompts related to ${categoryName}`,
                    icon: 'folder', // Default icon
                }).returning()
                category = newCat
            }

            // Read prompts in this category
            const promptFiles = fs.readdirSync(path.join(CONTENT_DIR, categoryDir))
                .filter(file => file.endsWith('.md'))

            for (const promptFile of promptFiles) {
                const filePath = path.join(CONTENT_DIR, categoryDir, promptFile)
                const content = fs.readFileSync(filePath, 'utf-8')

                const { title, description, promptBody } = parsePromptFile(content, promptFile)

                // Upsert Prompt (by title and category)
                const existingPrompt = await db.query.prompts.findFirst({
                    where: (prompts, { and, eq }) => and(
                        eq(prompts.title, title),
                        eq(prompts.categoryId, category.id)
                    )
                })

                if (!existingPrompt) {
                    await db.insert(schema.prompts).values({
                        title,
                        content: promptBody,
                        description: description || '',
                        categoryId: category.id,
                        userId: user.id,
                        isPublic: true,
                        tags: [],
                    })
                    console.log(`  + Imported: ${title}`)
                } else {
                    console.log(`  . Skipped (exists): ${title}`)
                }
            }
        }
    }

    console.log('✅ Migration complete!')
    process.exit(0)
}

function parsePromptFile(fileContent: string, filename: string): { title: string, description: string, promptBody: string } {
    const lines = fileContent.split('\n')
    let title = filename.replace('.md', '').replace(/_/g, ' ')
    let description = ''
    let promptBody = ''
    let isCodeBlock = false
    let codeBlockLines: string[] = []

    // Try to extract title from # Header
    const titleLine = lines.find(l => l.startsWith('# '))
    if (titleLine) {
        title = titleLine.replace('# ', '').trim()
    }

    // Extract content
    // Strategy: Identify code block ``` ... ``` as the prompt body
    // Everything else before it (excluding Category line) might be description?

    for (const line of lines) {
        if (line.trim().startsWith('```')) {
            isCodeBlock = !isCodeBlock
            continue
        }

        if (isCodeBlock) {
            codeBlockLines.push(line)
        }
    }

    if (codeBlockLines.length > 0) {
        promptBody = codeBlockLines.join('\n')
    } else {
        // Fallback if no code block: use text after "---" separator
        const separatorIndex = lines.findIndex(l => l.trim() === '---')
        if (separatorIndex !== -1) {
            promptBody = lines.slice(separatorIndex + 1).join('\n').trim()
        } else {
            promptBody = fileContent // Fallback to raw content
        }
    }

    return { title, description, promptBody }
}

main().catch(err => {
    console.error(err)
    process.exit(1)
})

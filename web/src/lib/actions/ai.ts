'use server'

import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { generateObject } from 'ai'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

// Fallback mock generator if no API key
async function mockGenerate(instruction: string) {
    await new Promise(r => setTimeout(r, 1000))
    return {
        title: `AI Generated: ${instruction.slice(0, 20)}...`,
        content: `This is a mock AI response for "${instruction}". Configuration: Free Tier (Mock).\n\nTo use real AI, set GOOGLE_GENERATIVE_AI_API_KEY in .env`,
        description: `Generated description for ${instruction}`,
        tags: ['ai-generated', 'mock', 'free-tier']
    }
}

export async function generatePromptWithAI(instruction: string, context?: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { error: 'Unauthorized AI execution.' }

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY

    if (!apiKey) {
        // Return mock data so the UI works without key
        return { success: true, data: await mockGenerate(instruction) }
    }

    try {
        const google = createGoogleGenerativeAI({
            apiKey: apiKey
        })

        const result = await generateObject({
            model: google('models/gemini-1.5-flash-latest'), // Free tier friendly model
            schema: z.object({
                title: z.string().describe('A catchy, descriptive title for the prompt'),
                content: z.string().describe('The full prompt content/template'),
                description: z.string().describe('A short description/summary'),
                tags: z.array(z.string()).describe('Relevant tags')
            }),
            prompt: `
                You are an expert Prompt Engineer. 
                Task: Create a high-quality prompt based on the user's instruction.
                
                Instruction: ${instruction}
                ${context ? `Context/Refinement: ${context}` : ''}
                
                Return a JSON object with title, content, description, and tags.
            `
        })

        return { success: true, data: result.object }
    } catch (error) {
        console.error('AI Generation Error:', error)
        return { error: 'Failed to generate prompt. Please try again.' }
    }
}

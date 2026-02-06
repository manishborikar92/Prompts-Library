import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

/**
 * Create a Supabase client for use in Server Components, Route Handlers, and Server Actions
 * 
 * This client automatically handles cookie management for session persistence.
 * Always create a fresh client for each request (don't store in global variables).
 * 
 * @see https://supabase.com/docs/guides/auth/server-side/nextjs
 */
export async function createClient() {
    const cookieStore = await cookies()

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(
                    cookiesToSet: Array<{
                        name: string
                        value: string
                        options?: any
                    }>
                ) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        )
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have proxy.ts refreshing user sessions.
                    }
                },
            },
        }
    )
}

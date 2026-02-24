import { createClient } from '@/lib/supabase/server'
import type { User } from '@supabase/supabase-js'

/**
 * Get the current authenticated user from the server
 * 
 * IMPORTANT: For route protection, use getClaims() instead of getUser().
 * getClaims() validates the JWT signature against Supabase's public keys.
 * 
 * @returns User object or null if not authenticated
 */
export async function getUser(): Promise<User | null> {
    const supabase = await createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (user) {
        // Ensure user exists in our local users table as a fallback 
        // to prevent foreign key errors if Supabase triggers aren't set
        try {
            const { db } = await import('@/lib/db')
            const { users } = await import('@/lib/db/schema')

            await db.insert(users).values({
                id: user.id,
                email: user.email!,
                name: user.user_metadata?.full_name || user.user_metadata?.name || '',
                image: user.user_metadata?.avatar_url || '',
            }).onConflictDoNothing()
        } catch (error) {
            console.error('Failed to sync user to database:', error)
        }
    }

    return user
}

/**
 * Get claims from the JWT token (validated server-side)
 * 
 * This is the recommended way to check authentication on the server.
 * Unlike getSession(), getClaims() validates the JWT signature.
 * 
 * @returns Claims object or null if not authenticated
 */
export async function getClaims() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getClaims()

    if (error || !data?.claims) {
        return null
    }

    return data.claims
}

/**
 * Check if the current user is authenticated
 * Uses getClaims() for validated authentication check.
 */
export async function isAuthenticated(): Promise<boolean> {
    const claims = await getClaims()
    return !!claims
}

/**
 * Get the current session
 * 
 * NOTE: For server-side route protection, prefer getClaims() instead.
 * getSession() doesn't revalidate the token.
 */
export async function getSession() {
    const supabase = await createClient()
    const {
        data: { session },
    } = await supabase.auth.getSession()
    return session
}

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

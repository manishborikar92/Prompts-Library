import { createBrowserClient } from '@supabase/ssr'

/**
 * Create a Supabase client for use in browser/client components
 * 
 * Use this client for:
 * - Client Components that need to call Supabase
 * - Real-time subscriptions
 * - Client-side authentication state changes
 * 
 * @see https://supabase.com/docs/guides/auth/server-side/nextjs
 */
export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    )
}

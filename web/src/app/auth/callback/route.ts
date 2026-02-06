import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

/**
 * OAuth callback handler
 * 
 * This route handles the callback from OAuth providers (GitHub).
 * It exchanges the authorization code for a session.
 * 
 * Flow:
 * 1. User clicks "Sign in with GitHub"
 * 2. User is redirected to GitHub for authentication
 * 3. GitHub redirects to Supabase callback: https://[project-ref].supabase.co/auth/v1/callback
 * 4. Supabase redirects to this route with an auth code
 * 5. We exchange the code for a session
 * 
 * @see https://supabase.com/docs/guides/auth/social-login/auth-github
 */
export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')

    // If "next" is in param, use it as the redirect URL
    let next = searchParams.get('next') ?? '/prompts'
    if (!next.startsWith('/')) {
        // If "next" is not a relative URL, use the default
        next = '/prompts'
    }

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (!error) {
            const forwardedHost = request.headers.get('x-forwarded-host')
            const isLocalEnv = process.env.NODE_ENV === 'development'

            if (isLocalEnv) {
                // In local dev, redirect to origin
                return NextResponse.redirect(`${origin}${next}`)
            } else if (forwardedHost) {
                // In production with load balancer, use forwarded host
                return NextResponse.redirect(`https://${forwardedHost}${next}`)
            } else {
                return NextResponse.redirect(`${origin}${next}`)
            }
        }
    }

    // Return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}

'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

/**
 * Sign up with email and password
 */
export async function signUp(prevState: any, formData: FormData) {
    const supabase = await createClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const name = formData.get('name') as string

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
                full_name: name,
            },
            emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
        },
    })

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/', 'layout')
    redirect('/login?message=Check your email to confirm your account' as any)
}

/**
 * Sign in with email and password
 */
export async function signIn(prevState: any, formData: FormData) {
    const supabase = await createClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/', 'layout')
    redirect('/prompts' as any)
}

/**
 * Sign in with GitHub OAuth
 */
export async function signInWithGitHub() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
            redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
        },
    })

    if (error) {
        redirect(`/login?message=${encodeURIComponent(error.message)}` as any)
    }

    if (data.url) {
        redirect(data.url as any)
    }
}

/**
 * Sign out the current user
 */
export async function signOut() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    revalidatePath('/', 'layout')
    redirect('/' as any)
}

/**
 * Request password reset email
 */
export async function resetPassword(prevState: any, formData: FormData) {
    const supabase = await createClient()

    const email = formData.get('email') as string

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/update-password`,
    })

    if (error) {
        return { error: error.message }
    }

    redirect('/login?message=Check your email for a password reset link' as any)
}

/**
 * Update password (after reset)
 */
export async function updatePassword(prevState: any, formData: FormData) {
    const supabase = await createClient()

    const password = formData.get('password') as string

    const { error } = await supabase.auth.updateUser({
        password,
    })

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/', 'layout')
    redirect('/prompts' as any)
}

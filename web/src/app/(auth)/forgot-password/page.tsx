'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { resetPassword } from '@/lib/auth/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

/**
 * Forgot Password page component
 */
export default function ForgotPasswordPage() {
    const [state, formAction, isPending] = useActionState(resetPassword, undefined)

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold tracking-tight">Reset Password</CardTitle>
                    <CardDescription>
                        Enter your email address and we'll send you a link to reset your password
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={formAction}>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" name="email" placeholder="m@example.com" required />
                        </div>
                        {state?.error && (
                            <p className="text-sm text-destructive mt-2">{state.error}</p>
                        )}
                        <Button className="w-full mt-4" type="submit" disabled={isPending}>
                            {isPending ? 'Sending Link...' : 'Send Reset Link'}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <div className="text-sm text-center text-muted-foreground w-full">
                        Remember your password?{' '}
                        <Link href="/login" className="underline underline-offset-4 hover:text-primary">
                            Sign in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

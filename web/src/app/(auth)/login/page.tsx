'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { signIn, signInWithGitHub } from '@/lib/auth/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { GitHubIcon } from '@/components/auth/github-icon'

/**
 * Login page component
 */
export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(signIn, undefined)

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold tracking-tight">Sign in using</CardTitle>
                    <CardDescription>
                        Choose your preferred sign in method
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <form action={formAction}>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" name="email" placeholder="m@example.com" required />
                        </div>
                        <div className="grid gap-2 mt-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" name="password" required />
                        </div>
                        {state?.error && (
                            <p className="text-sm text-destructive mt-2">{state.error}</p>
                        )}
                        <Button className="w-full mt-4" type="submit" disabled={isPending}>
                            {isPending ? 'Signing in...' : 'Sign in using Email'}
                        </Button>
                    </form>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <form action={signInWithGitHub}>
                        <Button variant="outline" className="w-full" type="submit">
                            <GitHubIcon className="mr-2 h-4 w-4" />
                            GitHub
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                    <div className="text-sm text-center text-muted-foreground">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="underline underline-offset-4 hover:text-primary">
                            Sign up
                        </Link>
                    </div>
                    <div className="text-sm text-center text-muted-foreground">
                        <Link href="/forgot-password" className="underline underline-offset-4 hover:text-primary">
                            Forgot your password?
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

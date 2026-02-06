import Link from 'next/link'

/**
 * Error page shown when OAuth authentication fails
 */
export default function AuthCodeError() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
            <div className="w-full max-w-md space-y-6 text-center">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold text-foreground">Authentication Error</h1>
                    <p className="text-muted-foreground">
                        Sorry, we couldn&apos;t complete the authentication process.
                    </p>
                </div>

                <div className="rounded-lg border border-border bg-card p-6 text-left">
                    <h2 className="mb-3 text-lg font-semibold">What might have happened:</h2>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• The authentication link has expired</li>
                        <li>• You denied access to your account</li>
                        <li>• There was a network issue during authentication</li>
                        <li>• The OAuth provider is temporarily unavailable</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Link
                        href="/login"
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Try Again
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

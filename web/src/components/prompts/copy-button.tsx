'use client'

import * as React from 'react'
import { Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CopyButtonProps extends React.ComponentProps<typeof Button> {
    value: string
}

export function CopyButton({ value, className, variant = 'outline', ...props }: CopyButtonProps) {
    const [hasCopied, setHasCopied] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }, [hasCopied])

    const copyToClipboard = React.useCallback((value: string) => {
        if (typeof window === 'undefined') return
        navigator.clipboard.writeText(value)
        setHasCopied(true)
    }, [])

    return (
        <Button
            size="icon"
            variant={variant}
            className={className}
            onClick={() => copyToClipboard(value)}
            {...props}
        >
            {hasCopied ? (
                <Check className="h-4 w-4" />
            ) : (
                <Copy className="h-4 w-4" />
            )}
            <span className="sr-only">Copy</span>
        </Button>
    )
}

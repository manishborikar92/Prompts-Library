'use client'

import * as React from 'react'
import { Heart } from 'lucide-react'
import { toggleFavorite } from '@/lib/actions/favorites'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Props = {
    promptId: string
    initialIsFavorited: boolean
    count?: number
}

export function FavoriteButton({ promptId, initialIsFavorited, count }: Props) {
    const [isFavorited, setFavorited] = React.useOptimistic(
        initialIsFavorited,
        (state, newStatus: boolean) => newStatus
    )

    const handleToggle = async (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()

        React.startTransition(() => {
            setFavorited(!isFavorited)
        })

        const result = await toggleFavorite(promptId)
        if (result?.error) {
            // Revert optimization logic could go here, or just toast error
        }
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            className={cn("h-8 w-8 transition-colors", isFavorited && "text-red-500 hover:text-red-600")}
            onClick={handleToggle}
        >
            <Heart className={cn("h-4 w-4", isFavorited && "fill-current")} />
            <span className="sr-only">Favorite</span>
        </Button>
    )
}

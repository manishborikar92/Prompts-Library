'use client'

import * as React from 'react'
import { Trash2 } from 'lucide-react'
import { deletePrompt } from '@/lib/actions/prompts'
import { Button } from '@/components/ui/button'

type Props = {
    id: string
}

export function DeleteButton({ id }: Props) {
    const [isPending, startTransition] = React.useTransition()

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this prompt? This action cannot be undone.')) {
            return
        }

        startTransition(async () => {
            const result = await deletePrompt(id)
            if (result.error) {
                alert(result.error)
            }
        })
    }

    return (
        <Button
            variant="destructive"
            size="sm"
            onClick={handleDelete}
            disabled={isPending}
            className="flex items-center gap-1"
        >
            <Trash2 className="h-4 w-4" />
            {isPending ? 'Deleting...' : 'Delete'}
        </Button>
    )
}

'use client'

import * as React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function PromptSearch() {
    const searchParams = useSearchParams()
    const { replace } = useRouter()

    // Custom debounced search handler if package is missing, 
    // but plan listed generic utils. I'll implement manual debounce here to be safe and dependency-free.
    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('q', term)
        } else {
            params.delete('q')
        }
        replace(`/prompts?${params.toString()}`)
    }

    // Simple debounce
    const [searchTerm, setSearchTerm] = React.useState(searchParams.get('q')?.toString() || '')

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchTerm !== (searchParams.get('q')?.toString() || '')) {
                handleSearch(searchTerm)
            }
        }, 500) // 500ms debounce
        return () => clearTimeout(timeoutId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm])

    return (
        <div className="relative flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search prompts..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
        </div>
    )
}

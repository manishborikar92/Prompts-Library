import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formatDistanceToNow } from 'date-fns'
import { Folder, Lock, Globe } from 'lucide-react'

import { db } from '@/lib/db'
import { collections, collectionPrompts } from '@/lib/db/schema'
import { eq, and, desc } from 'drizzle-orm'
import { createClient } from '@/lib/supabase/server'
import { PromptCard } from '@/components/prompts/prompt-card'

type Props = {
    params: Promise<{ id: string }>
}

async function getCollectionById(id: string, userId?: string) {
    const collection = await db.query.collections.findFirst({
        where: eq(collections.id, id),
        with: {
            user: true,
            collectionPrompts: {
                orderBy: [desc(collectionPrompts.addedAt)],
                with: {
                    prompt: {
                        with: {
                            category: true,
                            user: true,
                            favorites: userId ? {
                                where: (favorites, { eq }) => eq(favorites.userId, userId),
                                columns: { id: true }
                            } : undefined
                        }
                    }
                }
            }
        }
    })
    return collection
}

export default async function CollectionDetailPage({ params }: Props) {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const collection = await getCollectionById(id, user?.id)

    if (!collection) notFound()

    // Privacy check: if not owner and not public, 404
    if (!collection.isPublic && collection.userId !== user?.id) {
        notFound() // Or Not Authorized
    }

    return (
        <div className="container py-8 space-y-8">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Link href="/collections" className="hover:underline">Collections</Link>
                    <span>/</span>
                    <span>{collection.name}</span>
                </div>

                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                        {collection.name}
                        {collection.isPublic ? <Globe className="h-5 w-5 text-muted-foreground" /> : <Lock className="h-5 w-5 text-muted-foreground" />}
                    </h1>
                    {collection.description && (
                        <p className="text-muted-foreground text-lg">{collection.description}</p>
                    )}
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <span>Created by {collection.user?.name}</span>
                        <span>•</span>
                        <span>Updated {formatDistanceToNow(collection.updatedAt, { addSuffix: true })}</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collection.collectionPrompts.map((cp) => (
                    <PromptCard
                        key={cp.id}
                        prompt={{
                            ...cp.prompt,
                            isFavorited: cp.prompt.favorites ? cp.prompt.favorites.length > 0 : false
                        }}
                    />
                ))}
                {collection.collectionPrompts.length === 0 && (
                    <div className="col-span-full py-12 text-center text-muted-foreground">
                        This collection is empty.
                    </div>
                )}
            </div>
        </div>
    )
}

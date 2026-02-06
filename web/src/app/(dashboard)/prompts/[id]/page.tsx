import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formatDistanceToNow } from 'date-fns'
import { Calendar, User as UserIcon, Tag, Folder, Pencil } from 'lucide-react'

import { getPromptById } from '@/lib/db/queries/prompts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CopyButton } from '@/components/prompts/copy-button'
import { DeleteButton } from '@/components/prompts/delete-button'
import { FavoriteButton } from '@/components/prompts/favorite-button'
import { AddToCollectionDialog } from '@/components/collections/add-to-collection-dialog'
import { createClient } from '@/lib/supabase/server'

type Props = {
    params: Promise<{ id: string }>
}

export default async function PromptDetailPage({ params }: Props) {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const prompt = await getPromptById(id, user?.id)

    if (!prompt) {
        notFound()
    }

    const isOwner = user?.id === prompt.userId

    return (
        <div className="container max-w-5xl py-8 space-y-8">
            {/* Header Section */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="space-y-4 flex-1">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            {prompt.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            {prompt.category && (
                                <Link href={`/categories/${prompt.category.slug}` as any}>
                                    <Badge variant="secondary" className="hover:bg-secondary/80 flex gap-1 items-center">
                                        <Folder className="h-3 w-3" />
                                        {prompt.category.name}
                                    </Badge>
                                </Link>
                            )}
                            <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {prompt.createdAt && formatDistanceToNow(prompt.createdAt, { addSuffix: true })}
                            </span>
                            <span className="flex items-center gap-1">
                                <UserIcon className="h-3 w-3" />
                                by {prompt.user?.name || 'Anonymous'}
                            </span>
                        </div>
                    </div>
                </div>



                <div className="flex items-center gap-2">
                    {isOwner && (
                        <>
                            <Link href={`/prompts/${id}/edit` as any}>
                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                    <Pencil className="h-4 w-4" />
                                    Edit
                                </Button>
                            </Link>
                            <DeleteButton id={id} />
                        </>
                    )}
                    <AddToCollectionDialog promptId={prompt.id} />
                    <FavoriteButton promptId={prompt.id} initialIsFavorited={!!prompt.isFavorited} count={prompt.favoriteCount} />
                    <CopyButton value={prompt.content} />
                    <Button variant="default">Use Prompt</Button>
                </div>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <Card>
                        <CardHeader className="bg-muted/30 border-b py-3 px-4 flex flex-row items-center justify-between">
                            <div className="font-mono text-sm font-medium">Prompt Content</div>
                            <CopyButton value={prompt.content} variant="ghost" className="h-8 w-8" />
                        </CardHeader>
                        <CardContent className="p-6 overflow-hidden">
                            <div className="prose dark:prose-invert max-w-none break-words whitespace-pre-wrap font-mono text-sm">
                                {prompt.content}
                            </div>
                        </CardContent>
                    </Card>

                    {prompt.description && (
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Description</h3>
                            <p className="text-muted-foreground whitespace-pre-wrap">{prompt.description}</p>
                        </div>
                    )}
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardContent className="p-4 space-y-4">
                            <div className="space-y-2">
                                <h4 className="text-sm font-medium leading-none">Category</h4>
                                <div className="flex flex-wrap gap-2">
                                    {prompt.category ? (
                                        <Link href={`/categories/${prompt.category.slug}` as any} className="text-sm text-primary hover:underline">
                                            {prompt.category.name}
                                        </Link>
                                    ) : 'Uncategorized'}
                                </div>
                            </div>
                            {prompt.tags && prompt.tags.length > 0 && (
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium leading-none">Tags</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {prompt.tags.map(tag => (
                                            <Badge key={tag} variant="outline" className="text-xs">
                                                <Tag className="mr-1 h-3 w-3" />
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

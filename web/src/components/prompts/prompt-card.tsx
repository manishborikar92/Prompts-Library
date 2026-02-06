import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Prompt, Category, User } from '@/lib/db/schema'
import { Calendar, User as UserIcon } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { AddToCollectionDialog } from '@/components/collections/add-to-collection-dialog'
import { CopyButton } from '@/components/prompts/copy-button'
import { FavoriteButton } from '@/components/prompts/favorite-button'

type PromptCardProps = {
    prompt: Prompt & {
        category: Category | null
        user: User | null
        isFavorited?: boolean
    }
}

export function PromptCard({ prompt }: PromptCardProps) {
    return (
        <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
            <CardHeader>
                <div className="flex justify-between items-start gap-2">
                    <div className="space-y-1">
                        <CardTitle className="line-clamp-1 text-lg">
                            <Link href={`/prompts/${prompt.id}` as any} className="hover:underline">
                                {prompt.title}
                            </Link>
                        </CardTitle>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            {prompt.category && (
                                <Badge variant="secondary" className="font-normal">
                                    {prompt.category.name}
                                </Badge>
                            )}
                            <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {formatDistanceToNow(prompt.createdAt, { addSuffix: true })}
                            </span>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-3">
                    {prompt.description || prompt.content.slice(0, 150)}
                </p>
            </CardContent>
            <CardFooter className="border-t pt-4 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                        {prompt.user?.image ? (
                            <img src={prompt.user.image} alt={prompt.user?.name || 'User'} className="h-full w-full object-cover" />
                        ) : (
                            <UserIcon className="h-3 w-3" />
                        )}
                    </div>
                    <span>{prompt.user?.name || 'Anonymous'}</span>
                </div>
                <div className="flex items-center gap-1">
                    <AddToCollectionDialog promptId={prompt.id} />
                    <FavoriteButton promptId={prompt.id} initialIsFavorited={!!prompt.isFavorited} count={prompt.favoriteCount} />
                    <CopyButton value={prompt.content} />
                </div>
            </CardFooter>
        </Card>
    )
}

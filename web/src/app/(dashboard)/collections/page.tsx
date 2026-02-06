import Link from 'next/link'
import { Folder, ArrowRight, MoreHorizontal } from 'lucide-react'
import { getUserCollections } from '@/lib/actions/collections'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDistanceToNow } from 'date-fns'

export const dynamic = 'force-dynamic'

export default async function CollectionsPage() {
    const collections = await getUserCollections()

    return (
        <div className="container py-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">My Collections</h1>
                    <p className="text-muted-foreground text-lg">
                        Organize your favorite prompts.
                    </p>
                </div>
                {/* Note: Creation is handled via "Add to Collection" dialog for now, or we can add a standalone Create button here */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collections.map((collection) => (
                    <Card key={collection.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <Folder className="h-8 w-8 text-primary mb-2" />
                            </div>
                            <CardTitle>
                                <Link href={`/collections/${collection.id}` as any} className="hover:underline">
                                    {collection.name}
                                </Link>
                            </CardTitle>
                            <CardDescription className="line-clamp-2">
                                {collection.description || 'No description'}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-sm text-muted-foreground">
                                {collection.collectionPrompts.length} prompts
                            </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4 text-xs text-muted-foreground">
                            Updated {formatDistanceToNow(collection.updatedAt, { addSuffix: true })}
                        </CardFooter>
                    </Card>
                ))}

                {collections.length === 0 && (
                    <div className="col-span-full py-12 text-center border rounded-lg border-dashed">
                        <Folder className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
                        <h3 className="text-xl font-semibold">No collections yet</h3>
                        <p className="text-muted-foreground mb-4">
                            Start by adding prompts to a collection.
                        </p>
                        <Link href={"/prompts" as any}>
                            <Button>Browse Prompts</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

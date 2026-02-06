'use client'

import * as React from 'react'
import { Plus, Bookmark, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'
import { createCollection, addToCollection, getUserCollections } from '@/lib/actions/collections'
import { Collection } from '@/lib/db/schema'

type Props = {
    promptId: string
}

export function AddToCollectionDialog({ promptId }: Props) {
    const [open, setOpen] = React.useState(false)
    const [collections, setCollections] = React.useState<Collection[]>([])
    const [loading, setLoading] = React.useState(false)
    const [newCollectionName, setNewCollectionName] = React.useState('')
    const [isCreating, setIsCreating] = React.useState(false)

    // Fetch collections when dialog opens
    React.useEffect(() => {
        if (open) {
            setLoading(true)
            getUserCollections()
                .then(data => setCollections(data))
                .catch(console.error)
                .finally(() => setLoading(false))
        }
    }, [open])

    const handleCreate = async () => {
        if (!newCollectionName) return
        setIsCreating(true)
        const formData = new FormData()
        formData.append('name', newCollectionName)

        const res = await createCollection(formData)
        if (res.error) {
            alert(res.error)
        } else if (res.collection) {
            setCollections([res.collection, ...collections])
            setNewCollectionName('')
        }
        setIsCreating(false)
    }

    const handleAdd = async (collectionId: string) => {
        const res = await addToCollection(collectionId, promptId)
        if (res.error) {
            alert(res.error)
        } else {
            setOpen(false)
            // feedback
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Bookmark className="h-4 w-4" />
                    <span className="sr-only">Add to collection</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add to Collection</DialogTitle>
                    <DialogDescription>
                        Save this prompt to one of your collections.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex items-center gap-2">
                        <Input
                            placeholder="Create new collection..."
                            value={newCollectionName}
                            onChange={(e) => setNewCollectionName(e.target.value)}
                        />
                        <Button size="sm" onClick={handleCreate} disabled={!newCollectionName || isCreating}>
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="font-medium text-sm text-muted-foreground mt-2">Your Collections</div>
                    <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                        {loading ? (
                            <div className="text-center py-4 text-sm">Loading...</div>
                        ) : collections.length === 0 ? (
                            <div className="text-center py-4 text-sm text-muted-foreground">No collections found. Create one above.</div>
                        ) : (
                            <div className="space-y-2">
                                {collections.map(col => (
                                    <Button
                                        key={col.id}
                                        variant="ghost"
                                        className="w-full justify-start text-left font-normal"
                                        onClick={() => handleAdd(col.id)}
                                    >
                                        <FolderIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                                        {col.name}
                                    </Button>
                                ))}
                            </div>
                        )}
                    </ScrollArea>
                </div>
            </DialogContent>
        </Dialog>
    )
}

function FolderIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z" />
        </svg>
    )
}

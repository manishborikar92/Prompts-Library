'use client'

import * as React from 'react'
import { useActionState } from 'react'
import { createPrompt } from '@/lib/actions/prompts'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Prompt, Category } from '@/lib/db/schema'
import { ActionState } from '@/lib/actions/prompts'

type Props = {
    categories: Category[]
    initialData?: Partial<Prompt>
    action: (state: ActionState, formData: FormData) => Promise<ActionState>
    submitLabel?: string
}

export function PromptForm({ categories, initialData, action, submitLabel = 'Create Prompt' }: Props) {
    const [state, formAction, isPending] = useActionState(action, {})

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>{initialData ? 'Edit Prompt' : 'Create New Prompt'}</CardTitle>
                <CardDescription>{initialData ? 'Update your prompt details.' : 'Share your prompt with the community.'}</CardDescription>
            </CardHeader>
            <form action={formAction}>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            placeholder="e.g., Code Review Assistant"
                            required
                            defaultValue={initialData?.title}
                        />
                        {state?.fieldErrors?.title && (
                            <p className="text-sm text-destructive">{state.fieldErrors.title[0]}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="categoryId">Category</Label>
                        <Select name="categoryId" required defaultValue={initialData?.categoryId?.toString() || ""}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem key={category.id} value={category.id.toString()}>
                                        {category.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {state?.fieldErrors?.categoryId && (
                            <p className="text-sm text-destructive">{state.fieldErrors.categoryId[0]}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            name="description"
                            placeholder="Short description of what (optional)"
                            className="resize-none h-20"
                            defaultValue={initialData?.description || ''}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="content">Prompt Content</Label>
                        <Textarea
                            id="content"
                            name="content"
                            placeholder="The actual prompt text..."
                            className="min-h-[200px] font-mono text-sm"
                            required
                            defaultValue={initialData?.content}
                        />
                        {state?.fieldErrors?.content && (
                            <p className="text-sm text-destructive">{state.fieldErrors.content[0]}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="tags">Tags</Label>
                        <Input
                            id="tags"
                            name="tags"
                            placeholder="coding, python, debug (comma separated)"
                            defaultValue={initialData?.tags?.join(', ')}
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="isPublic"
                            name="isPublic"
                            defaultChecked={initialData?.isPublic ?? true}
                        />
                        <Label htmlFor="isPublic">Make this prompt public</Label>
                    </div>

                    {state?.error && (
                        <div className="text-sm text-destructive font-medium">
                            {state.error}
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" type="button" onClick={() => window.history.back()}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isPending}>
                        {isPending ? 'Saving...' : submitLabel}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}


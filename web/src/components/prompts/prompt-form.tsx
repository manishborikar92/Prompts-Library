'use client'

import * as React from 'react'
import { useState, useActionState } from 'react'
import { createPrompt } from '@/lib/actions/prompts'
import { AIAssistantDialog } from './ai-assistant-dialog'
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

    // Controlled state
    const [title, setTitle] = useState(initialData?.title || '')
    const [content, setContent] = useState(initialData?.content || '')
    const [description, setDescription] = useState(initialData?.description || '')
    const [tags, setTags] = useState(initialData?.tags?.join(', ') || '')
    const [categoryId, setCategoryId] = useState(initialData?.categoryId?.toString() || '')
    const [isPublic, setIsPublic] = useState(initialData?.isPublic ?? true)

    const handleAIAccept = (data: { title: string, content: string, description: string, tags: string[] }) => {
        setTitle(data.title)
        setContent(data.content)
        setDescription(data.description)
        setTags(data.tags.join(', '))
        // Keep category/public as is
    }

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div className="space-y-1">
                    <CardTitle>{initialData ? 'Edit Prompt' : 'Create New Prompt'}</CardTitle>
                    <CardDescription>{initialData ? 'Update your prompt details.' : 'Share your prompt with the community.'}</CardDescription>
                </div>
                <AIAssistantDialog onAccept={handleAIAccept} currentContent={content} />
            </CardHeader>
            <form action={formAction}>
                {/* Hidden inputs if formAction works with FormData directly, but since we are controlled, 
                     the inputs will have values and names so FormData works automatically. */}
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="e.g., Code Review Assistant"
                            required
                        />
                        {state?.fieldErrors?.title && (
                            <p className="text-sm text-destructive">{state.fieldErrors.title[0]}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="categoryId">Category</Label>
                        <Select name="categoryId" required value={categoryId} onValueChange={setCategoryId}>
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
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Short description of what (optional)"
                            className="resize-none h-20"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="content">Prompt Content</Label>
                        <Textarea
                            id="content"
                            name="content"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            placeholder="The actual prompt text..."
                            className="min-h-[200px] font-mono text-sm"
                            required
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
                            value={tags}
                            onChange={e => setTags(e.target.value)}
                            placeholder="coding, python, debug (comma separated)"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="isPublic"
                            name="isPublic"
                            checked={isPublic}
                            onCheckedChange={(checked) => setIsPublic(checked as boolean)}
                        />
                        {/* Checkbox handling in FormData: uncheck sends nothing. We usually use a hidden input or ensure name is handled. 
                            Radix Checkbox doesn't render native input by default unless using 'form' prop or similar? 
                            Actually shadcn Checkbox is standard radix. 
                            Wait, simple fix: Radix Checkbox handles it?
                            Usually we include a hidden input for form submission if using native action. */}
                        <input type="hidden" name="isPublic" value={isPublic ? 'on' : 'off'} />
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


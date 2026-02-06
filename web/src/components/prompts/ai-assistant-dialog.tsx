'use client'

import * as React from 'react'
import { Wand2, Loader2, Sparkles } from 'lucide-react'
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
import { Textarea } from '@/components/ui/textarea'
import { generatePromptWithAI } from '@/lib/actions/ai'


type AIResult = {
    title: string
    content: string
    description: string
    tags: string[]
}

type Props = {
    onAccept: (data: AIResult) => void
    currentContent?: string
}

export function AIAssistantDialog({ onAccept, currentContent }: Props) {
    const [open, setOpen] = React.useState(false)
    const [instruction, setInstruction] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const handleGenerate = async () => {
        if (!instruction) return
        setLoading(true)

        try {
            const result = await generatePromptWithAI(instruction, currentContent)

            if (result.error) {
                alert(result.error)
            } else if (result.data) {
                onAccept(result.data)
                setOpen(false)
                setInstruction('')
            }
        } catch (e) {
            console.error(e)
            alert('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                    <Sparkles className="h-4 w-4" />
                    AI Assistant
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Generate with AI</DialogTitle>
                    <DialogDescription>
                        Describe what you want, and I'll create a prompt template for you.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label>Instructions</Label>
                        <Textarea
                            placeholder="e.g., Create a prompt for debugging React useEffect hooks..."
                            value={instruction}
                            onChange={(e) => setInstruction(e.target.value)}
                            className="h-24"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleGenerate} disabled={!instruction || loading}>
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Generating...
                            </>
                        ) : (
                            <>
                                <Wand2 className="mr-2 h-4 w-4" />
                                Generate
                            </>
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

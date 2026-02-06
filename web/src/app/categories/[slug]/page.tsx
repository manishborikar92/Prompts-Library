type Props = {
    params: Promise<{ slug: string }>
}

export default async function CategoryPage({ params }: Props) {
    const { slug } = await params

    return (
        <div className="container py-8">
            <h1 className="text-3xl font-bold mb-6">Category: {slug}</h1>
            <p className="text-muted-foreground">Prompts in this category.</p>
        </div>
    )
}

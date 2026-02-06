export const siteConfig = {
    name: 'PromptBase',
    description:
        'AI Prompt Management Platform - Search, create, and manage AI prompts for developers',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    ogImage: '/images/og-image.png',
    links: {
        github: 'https://github.com/manishborikar92/Prompts-Library',
    },
    creator: 'Manish Borikar',
    keywords: [
        'AI prompts',
        'prompt engineering',
        'ChatGPT prompts',
        'Claude prompts',
        'developer tools',
        'code generation',
        'AI assistant',
    ],
} as const

export type SiteConfig = typeof siteConfig

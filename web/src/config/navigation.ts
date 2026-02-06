import {
    BookOpen,
    Code,
    Database,
    FileText,
    Heart,
    Home,
    LayoutDashboard,
    Search,
    Settings,
    Shield,
    type LucideIcon,
} from 'lucide-react'

export interface NavItem {
    title: string
    href: string
    icon?: LucideIcon
    disabled?: boolean
    external?: boolean
    description?: string
}

export interface NavItemWithChildren extends NavItem {
    items?: NavItemWithChildren[]
}

export const mainNav: NavItem[] = [
    {
        title: 'Home',
        href: '/',
        icon: Home,
    },
    {
        title: 'Prompts',
        href: '/prompts',
        icon: BookOpen,
    },
    {
        title: 'Categories',
        href: '/categories',
        icon: LayoutDashboard,
    },
]

export const dashboardNav: NavItemWithChildren[] = [
    {
        title: 'Dashboard',
        href: '/prompts',
        icon: LayoutDashboard,
        description: 'Browse and manage all prompts',
    },
    {
        title: 'Favorites',
        href: '/favorites',
        icon: Heart,
        description: 'Your saved favorite prompts',
    },
    {
        title: 'Categories',
        href: '/categories',
        icon: Code,
        items: [
            { title: 'Code Analysis', href: '/categories/code-analysis', icon: Code },
            { title: 'Database', href: '/categories/database', icon: Database },
            { title: 'Security', href: '/categories/security', icon: Shield },
            { title: 'Documentation', href: '/categories/documentation', icon: FileText },
        ],
    },
    {
        title: 'Search',
        href: '/search',
        icon: Search,
        description: 'Search across all prompts',
    },
    {
        title: 'Settings',
        href: '/settings',
        icon: Settings,
        description: 'Manage your account settings',
    },
]

export type MainNav = typeof mainNav
export type DashboardNav = typeof dashboardNav

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Image optimization configuration
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },

  // Enable typed routes for better TypeScript support
  typedRoutes: true,

  // Experimental features
  experimental: {
  },

  // Webpack configuration
  webpack: (config) => {
    // Fix for packages that don't support ESM
    config.resolve.fallback = { fs: false, net: false, tls: false }
    return config
  },

  turbopack: {},
}

export default nextConfig

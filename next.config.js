const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['your-cdn.com', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  compiler: {
    styledComponents: true,
  },
  // Custom headers for caching static assets
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|js|css|json)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(withPWA(nextConfig));

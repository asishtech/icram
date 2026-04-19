import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* SEO and Performance Optimizations */

  // Turbopack configuration
  turbopack: {
    root: __dirname,
  },

  // Allow preview domains for development
  allowedDevOrigins: [
    'preview-emxnoxxlrxtb.share.sandbox.dev',
    'preview-lhlxcqcrzpri.share.sandbox.dev',
    'preview-ttqhjbthrgut.share.sandbox.dev',
    'preview-ggnjvzjxhtww.share.sandbox.dev',
    'preview-vijjihyxbnha.share.sandbox.dev',
    'preview-mmolkfnhsyut.share.sandbox.dev',
    'preview-qgsijlaqfdar.share.sandbox.dev',
    'preview-bufpliwgniqy.share.sandbox.dev',
    'preview-cjgfwhkymclf.share.sandbox.dev',
    'preview-qkqgskjgpixx.share.sandbox.dev',
  ],

  // Enable compression
  compress: true,

  // Custom headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ];
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 90],
  },

  // Enable React strict mode for better development
  reactStrictMode: true,

  // Power optimization
  poweredByHeader: false,
};

export default nextConfig;

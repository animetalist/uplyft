/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  images: {
    deviceSizes: [440, 640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
  },

  webpack(config, options) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    )

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        // issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
              // expandProps: false
            },
          },
        ],
      }
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

module.exports = nextConfig

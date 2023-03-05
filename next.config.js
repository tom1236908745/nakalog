/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`, // path.join(__dirname, "src/") でも可
    },
  },
  reactStrictMode: false, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    enableUndici: true,
    esmExternals: true,
    // Required:
    appDir: true,
  },
};

module.exports = {
  ...nextConfig,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@/components': path.resolve(__dirname, 'components'),
      '@/styles': path.resolve(__dirname, 'styles'),
    };
    return config;
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    enableUndici: true,
    esmExternals: true,
    // Required:
    appDir: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/portfolio",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;

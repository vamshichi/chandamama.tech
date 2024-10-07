/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEWS_USERNAME: process.env.NEWS_USERNAME,
    NEWS_PASSWORD: process.env.NEWS_PASSWORD,
  },
}

export default nextConfig
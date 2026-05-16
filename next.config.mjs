/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'prod-images.nawy.com' },
      { protocol: 'https', hostname: 'www.palmhillsdevelopments.com' },
    ],
  },
}
export default nextConfig

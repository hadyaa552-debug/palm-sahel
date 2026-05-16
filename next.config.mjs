/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'sadaninvestment.com.eg' },
      { protocol: 'https', hostname: 'gprproperty.com' },
      { protocol: 'https', hostname: 'www.palmhillsdevelopments.com' },
    ],
  },
}
export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: JSON.parse(process.env.NEXT_PUBLIC_DOMAINS_NAME) || [],
    // domains: [],
    minimumCacheTTL: 31536000,
    // dangerouslyAllowAllDomains: true,
  },
}

module.exports = nextConfig

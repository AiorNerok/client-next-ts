/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  images:{
    domains: ['github.com']
  }
}

module.exports = nextConfig

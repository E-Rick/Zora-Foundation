/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.mirror-media.xyz', 'gateway.pinata.cloud', 'f8n-production-collection-assets.imgix.net'],
	},
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['images.mirror-media.xyz', 'gateway.pinata.cloud'],
	},
}

module.exports = nextConfig

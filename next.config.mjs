/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "digitalmarketplace-production-7b55.up.railway.app",
			},
		],
	},
};

export default nextConfig;

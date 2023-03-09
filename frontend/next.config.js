module.exports = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/products/coffees",
				permanent: true,
			},
			{
				source: "/products",
				destination: "/products/coffees",
				permanent: true,
			},
			{
				source: "/api",
				destination: "/api/coffees",
				permanent: true,
			},
		];
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: process.env.API_BASE_URL + ':path*',
			},
		];
	},
};

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",                       // frontend path
        destination: `${process.env.OG_BACKEND_URL}/:path*`, // backend
      },
    ];
  },
  eslint: {
      ignoreDuringBuilds: true,
  },
};

export default nextConfig;
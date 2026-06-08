import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bitcoininfonews.com',
      },
    ],
  },
};

export default nextConfig;

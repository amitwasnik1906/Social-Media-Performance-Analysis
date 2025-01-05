import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  reactStrictMode: true,
  eslint: {
      ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Replace fs with a mock in client-side code
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
};

export default nextConfig;

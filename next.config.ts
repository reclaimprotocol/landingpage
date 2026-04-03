import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  async redirects() {
    return [
      {
        source: '/identity',
        destination: '/age-and-identity',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

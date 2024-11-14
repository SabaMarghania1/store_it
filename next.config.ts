import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
      {
        protocol: "https",
        hostname: "img-cdn.pixlr.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "1gb",
    },
  },
};

export default nextConfig;

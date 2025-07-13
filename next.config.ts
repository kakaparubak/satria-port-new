import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'i.imgur.com',
          port: '',
          pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'media1.giphy.com',
        port: '',
        pathname: '**'
      }
    ],
  },
};

export default nextConfig;

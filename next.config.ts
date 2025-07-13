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
      },
      {
        protocol: 'https',
        hostname: 'g8p7b7sjok.ufs.sh',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'pub-d15191339994413ea97910d3f097f601.r2.dev',
        port: '',
        pathname: '**'
      },
    ],
  },
};

export default nextConfig;

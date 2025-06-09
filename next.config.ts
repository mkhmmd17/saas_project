import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    //? what is this structure?
  images: {
      remotePatterns: [
          {hostname: 'img.clerk.com'}
      ]
  }
};

export default nextConfig;

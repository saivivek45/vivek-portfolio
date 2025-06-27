import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // 👈 Allow remote image domains here
  },
};

export default nextConfig;

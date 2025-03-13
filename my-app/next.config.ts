import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],

    // domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/loginHome",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

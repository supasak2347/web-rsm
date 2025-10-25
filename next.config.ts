import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Set the base path for your application
  basePath: "/resume",
  output: "standalone", // Optimized for Docker builds
};

export default nextConfig;

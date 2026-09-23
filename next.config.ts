import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  experimental: {
    // lucide-react is default-optimized; framer-motion stays listed so any
    // remaining import only bundles what is used (currently unused = dropped).
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;

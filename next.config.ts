import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/agora" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

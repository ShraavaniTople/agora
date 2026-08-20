import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shraavanitople.github.io/agora";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/agora" : "",

  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/agora" : "",
  },

  images: {
    unoptimized: true,
  },

  // Security headers apply when running as a Node.js server (not static export).
  // Keep them here so they are active on any future server deployment.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Enforce trailing-slash consistency for canonical URLs.
  trailingSlash: false,

  // Strip powered-by header.
  poweredByHeader: false,

};

// headers() is not used in static export — documented intentionally.
// Remove the function if you never plan to run Next.js as a server.
export default nextConfig;

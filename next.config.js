/** @type {import("next").NextConfig} */
const nextConfig = {
  ...(process.env.VERCEL_ENV ? undefined : { output: "export" }),
  images: {
    unoptimized: !process.env.VERCEL_ENV,
    remotePatterns: [
      { protocol: "https", hostname: "media.githubusercontent.com" },
    ],
  },
};

module.exports = nextConfig;

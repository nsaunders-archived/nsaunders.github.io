/** @type {import("next").NextConfig} */
const nextConfig = {
  ...(process.env.DYNAMIC ? undefined : { output: "export" }),
  images: {
    unoptimized: !process.env.DYNAMIC,
    remotePatterns: [
      { protocol: "https", hostname: "media.githubusercontent.com" },
    ],
  },
};

module.exports = nextConfig;

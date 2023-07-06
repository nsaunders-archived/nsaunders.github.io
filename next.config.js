/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "media.githubusercontent.com" },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://app-area.bestu.com.bd/api/nextjs",
  },
  images: {
    domains: ["cdn.dxomark.com"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://app-area.bestu.com.bd/api/nextjs",
  },
  images: {
    domains: ["app-area.bestu.com.bd"],
  },
};

module.exports = nextConfig;

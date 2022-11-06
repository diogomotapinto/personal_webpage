/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
        pathname: "/gh/devicons/devicon/icons/*/*-original.svg",
      },
    ],
    domains: ["cdn.jsdelivr.net"],
  },
};

module.exports = nextConfig;

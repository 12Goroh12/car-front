/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "public/tesla.svg"],
  },
};

module.exports = nextConfig;

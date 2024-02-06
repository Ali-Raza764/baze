/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c.saavncdn.com",
        pathname: "/**"
      },
      {
        protocol: "http",
        hostname: "c.saavncdn.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.jiosaavn.com",
      },
    ],
  },
};

export default nextConfig;

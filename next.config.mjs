/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
  generateBuildId: async () => {
    return process.env.GIT_HASH;
  },
};

export default nextConfig;

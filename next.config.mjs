/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/intern-frontend-test",
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

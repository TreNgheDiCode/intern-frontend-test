/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/intern-frontend-test",
  reactStrictMode: true,
  distDir: "./out",
  output: "export",
  generateBuildId: async () => {
    return process.env.GIT_HASH;
  },
};

export default nextConfig;

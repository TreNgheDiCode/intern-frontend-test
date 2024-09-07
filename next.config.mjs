/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/intern-test",
  output: "export",
  reactStrictMode: true,
  distDir: "./out",
  generateBuildId: async () => {
    return process.env.GIT_HASH;
  },
};

module.exports = nextConfig;
export default nextConfig;

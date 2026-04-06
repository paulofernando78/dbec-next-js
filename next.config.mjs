import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // distDir: "dist",
  experimental: {
    cpus: 1,
  },
  reactCompiler: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
})

export default withMDX(nextConfig);

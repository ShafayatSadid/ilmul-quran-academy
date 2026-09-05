/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true, // এই লাইনটি যোগ করুন
  },
};

export default nextConfig;

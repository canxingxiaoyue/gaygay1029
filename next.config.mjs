/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Dòng này bắt buộc phải có để chạy trên GitHub Pages
  images: {
    unoptimized: true, // Dòng này giúp hình ảnh không bị lỗi khi chuyển sang web tĩnh
  },
};

export default nextConfig;

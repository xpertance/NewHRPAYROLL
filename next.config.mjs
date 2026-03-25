/** @type {import('next').NextConfig} */

if (process.env.NODE_ENV !== 'production') {
  console.log('\x1b[36m%s\x1b[0m', '=====================================================');
  console.log('\x1b[36m%s\x1b[0m', '🚀 Development Server Started');
  console.log('\x1b[36m%s\x1b[0m', '📚 API Docs available at: http://localhost:3000/api-docs');
  console.log('\x1b[36m%s\x1b[0m', '=====================================================');
}

const nextConfig = {
    serverExternalPackages: ['jspdf', 'fflate', 'node-cron', 'nodemailer'],
};

export default nextConfig;

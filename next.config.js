/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  images: {
    domains: ['editalzap.com.br', 'www.editalzap.com.br'],
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: false,
  // Adiciona cabeçalhos de segurança
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'browsing-topics=(), interest-cohort=()',
          },
        ],
      },
    ]
  },
};

module.exports = nextConfig; 
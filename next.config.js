/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Gera arquivos estáticos para GitHub Pages
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
  // Configuração condicional: se estiver no domínio personalizado, não precisa de basePath
  basePath: '/editalzap',
  // Configuração condicional para assets
  assetPrefix: '/editalzap/',
  trailingSlash: true, // Adiciona barra no final das URLs para melhor compatibilidade
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://connect.facebook.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: https://www.facebook.com; font-src 'self' data:; connect-src 'self' https://www.facebook.com;"
          }
        ]
      }
    ]
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig; 
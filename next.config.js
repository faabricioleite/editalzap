/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Gera arquivos estáticos para GitHub Pages
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
  // Configuração condicional: se estiver no domínio personalizado, não precisa de basePath
  basePath: process.env.NEXT_PUBLIC_DOMAIN === 'custom' ? '' : process.env.NODE_ENV === 'production' ? '/editalzap' : '',
  // Configuração condicional para assets
  assetPrefix: process.env.NEXT_PUBLIC_DOMAIN === 'custom' ? '' : process.env.NODE_ENV === 'production' ? '/editalzap/' : '',
  trailingSlash: true, // Adiciona barra no final das URLs para melhor compatibilidade
};

module.exports = nextConfig; 
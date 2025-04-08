/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Gera arquivos estáticos para GitHub Pages
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
  basePath: process.env.NODE_ENV === 'production' ? '/editalzap' : '', // Prefixo para URLs no GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/editalzap/' : '', // Prefixo para assets
  trailingSlash: true, // Adiciona barra no final das URLs para melhor compatibilidade
};

module.exports = nextConfig; 
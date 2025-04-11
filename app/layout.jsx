import './globals.css';
import { Suspense } from 'react';
import MetaPixel from './components/MetaPixel';

export const metadata = {
  title: 'EditalZap | Alertas de licitações pelo WhatsApp',
  description: 'Alertas de novas licitações publicadas na plataforma PNCP, enviados diretamente para seu WhatsApp',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
    shortcut: '/images/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Essential Open Graph tags */}
        <meta property="og:url" content="https://www.editalzap.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EditalZap | Alertas de licitações pelo WhatsApp" />
        <meta property="og:description" content="Alertas de novas licitações publicadas na plataforma PNCP, enviados diretamente para seu WhatsApp" />
        
        {/* Image tags with explicit dimensions */}
        <meta property="og:image" content="https://www.editalzap.com.br/images/share.png" />
        <meta property="og:image:secure_url" content="https://www.editalzap.com.br/images/share.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="EditalZap - Seu alerta inteligente de licitações" />
        
        {/* Additional Open Graph tags */}
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="EditalZap" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EditalZap | Alertas de licitações pelo WhatsApp" />
        <meta name="twitter:description" content="Alertas de novas licitações publicadas na plataforma PNCP, enviados diretamente para seu WhatsApp" />
        <meta name="twitter:image" content="https://www.editalzap.com.br/images/share.png" />
        
        {/* Favicon tags */}
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        
        {/* Preload image */}
        <link rel="preload" as="image" href="/images/share.png" type="image/png" />
      </head>
      <body>
        {children}
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
      </body>
    </html>
  );
} 
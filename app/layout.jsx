import './globals.css';
import MetaPixel from './components/MetaPixel';
import TikTokPixel from './components/TikTokPixel';
import AttributionTracker from './components/AttributionTracker';

export const metadata = {
  title: 'EditalZap | Receba oportunidades de licitações no WhatsApp',
  description: 'Receba oportunidades de licitações da Lei 14.133/2021 direto no seu WhatsApp.',
  metadataBase: new URL('https://editalzap.com.br'),
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'EditalZap | Receba oportunidades de licitações no WhatsApp',
    description: 'Receba oportunidades de licitações da Lei 14.133/2021 direto no seu WhatsApp.',
    url: 'https://editalzap.com.br',
    siteName: 'Edital Zap',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://editalzap.com.br/images/share.png',
        width: 1200,
        height: 630,
        alt: 'EditalZap | Alertas de licitações no WhatsApp',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Meta tag para corrigir erro de Permissions-Policy */}
        <meta httpEquiv="Permissions-Policy" content="browsing-topics=(), interest-cohort=()" />
        
        {/* Script para capturar parâmetros de atribuição */}
        <AttributionTracker />
        
        {/* Pixel do Facebook - Colocado no head conforme documentação oficial */}
        <MetaPixel />
        
        {/* Pixel do TikTok */}
        <TikTokPixel />
        
        {/* Essential Open Graph tags */}
        <meta property="og:url" content="https://www.editalzap.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EditalZap | Alertas de licitações pelo WhatsApp" />
        <meta property="og:description" content="Alertas de novas licitações publicadas na plataforma PNCP, enviados diretamente para seu WhatsApp" />
        
        {/* Image tags com dimensões explícitas - usando share.png que existe na pasta public/images */}
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
        
        {/* Favicon tags com URL absoluta */}
        <link rel="icon" type="image/png" href="https://www.editalzap.com.br/images/favicon.png" />
        <link rel="apple-touch-icon" href="https://www.editalzap.com.br/images/favicon.png" />
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
} 
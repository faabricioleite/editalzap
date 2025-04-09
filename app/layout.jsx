import './globals.css';

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
        <meta property="og:title" content="EditalZap | Alertas de licitações pelo WhatsApp" />
        <meta property="og:description" content="Alertas de novas licitações publicadas na plataforma PNCP, enviados diretamente para seu WhatsApp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.editalzap.com.br" />
        <meta property="og:image" content="https://www.editalzap.com.br/images/share.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EditalZap | Alertas de licitações pelo WhatsApp" />
        <meta name="twitter:description" content="Alertas de novas licitações publicadas na plataforma PNCP, enviados diretamente para seu WhatsApp" />
        <meta name="twitter:image" content="https://www.editalzap.com.br/images/share.png" />
        
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 
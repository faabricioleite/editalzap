import './globals.css';

export const metadata = {
  title: 'EditalZap | Alertas de licitações pelo WhatsApp',
  description: 'Alertas de novas licitações publicadas na plataforma PNCP, enviados diretamente para seu WhatsApp',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
    shortcut: '/images/favicon.png'
  },
  openGraph: {
    title: 'EditalZap | Alertas de licitações pelo WhatsApp',
    description: 'Alertas de novas licitações publicadas na plataforma PNCP, enviados diretamente para seu WhatsApp',
    images: [
      {
        url: '/images/share.png',
        width: 1200,
        height: 630,
        alt: 'EditalZap - Seu alerta inteligente de licitações'
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EditalZap | Alertas de licitações pelo WhatsApp',
    description: 'Alertas de novas licitações publicadas na plataforma PNCP, enviados diretamente para seu WhatsApp',
    images: ['/images/share.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
} 
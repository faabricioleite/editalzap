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
      <body>
        {children}
      </body>
    </html>
  );
} 
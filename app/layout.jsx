import './globals.css';

export const metadata = {
  title: 'EditalZap | Alertas inteligentes de licitações',
  description: 'Receba alertas de licitações diretamente no seu WhatsApp',
  icons: {
    icon: '/images/icon-logo.svg',
    shortcut: '/images/icon-logo.svg',
    apple: '/images/icon-logo.svg',
  },
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
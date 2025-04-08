import './globals.css';

// Função para gerar caminho correto das imagens no favicon
function getIconPath(path) {
  // Em produção, verifica se está usando domínio personalizado
  if (process.env.NODE_ENV === 'production') {
    // Se estiver usando domínio personalizado, não adiciona o prefixo
    return process.env.NEXT_PUBLIC_DOMAIN === 'custom' ? path : `/editalzap${path}`;
  }
  return path;
}

export const metadata = {
  title: 'EditalZap | Alertas de licitações pelo WhatsApp',
  description: 'Alertas de novas licitações publicadas na plataforma PNCP, enviados diretamente para seu WhatsApp',
  icons: {
    icon: [
      { url: getIconPath('/favicon.ico'), sizes: 'any' },
      { url: getIconPath('/images/icon-logo.svg'), type: 'image/svg+xml' }
    ],
    apple: getIconPath('/images/icon-logo.svg'),
    shortcut: getIconPath('/images/icon-logo.svg')
  },
  manifest: getIconPath('/site.webmanifest')
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Favicon básico */}
        <link rel="icon" href={getIconPath('/favicon.ico')} sizes="any" />
        <link rel="icon" href={getIconPath('/images/icon-logo.svg')} type="image/svg+xml" />
        
        {/* Link para o manifest */}
        <link rel="manifest" href={getIconPath('/site.webmanifest')} />
        
        {/* Favicon para Apple */}
        <link rel="apple-touch-icon" href={getIconPath('/images/icon-logo.svg')} />
        
        {/* Meta tag para tema do site */}
        <meta name="theme-color" content="#22A93A" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 
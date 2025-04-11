'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function MetaPixel() {
  // Função para garantir que o evento PageView seja acionado depois da montagem do componente
  useEffect(() => {
    // Aguardamos um pequeno intervalo para garantir que o script do Meta Pixel já foi carregado
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.fbq) {
        try {
          // Garantimos que o Pixel esteja inicializado
          window.fbq('init', '899641102002155');
          // Enviamos o evento PageView
          window.fbq('track', 'PageView');
          console.log('[Meta Pixel] PageView event sent after component mount');
        } catch (e) {
          console.error('Erro ao acionar evento PageView:', e);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Carregamento do script do Meta Pixel */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '899641102002155');
          fbq('track', 'PageView');
          console.log('[Meta Pixel] Script loaded');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=899641102002155&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
} 
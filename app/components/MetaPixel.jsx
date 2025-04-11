'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function MetaPixel() {
  // ID do Pixel
  const PIXEL_ID = '899641102002155';
  
  // Garantir que o evento PageView seja disparado após o carregamento completo
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Verificar se o fbq está disponível a cada 500ms
      const checkInterval = setInterval(() => {
        if (typeof window.fbq === 'function') {
          try {
            // Reinicializar o pixel e forçar o PageView
            window.fbq('init', PIXEL_ID);
            window.fbq('track', 'PageView');
            console.log('[Meta Pixel] PageView disparado manualmente após carregamento da página');
            clearInterval(checkInterval);
          } catch (error) {
            console.error('[Meta Pixel] Erro ao disparar PageView:', error);
          }
        }
      }, 500);
      
      // Limpar o intervalo após 5 segundos para evitar loop infinito
      setTimeout(() => clearInterval(checkInterval), 5000);
      
      return () => {
        clearInterval(checkInterval);
      };
    }
  }, []);
  
  return (
    <>
      {/* Base script - usando estratégia lazyOnload para evitar bloqueios */}
      <Script
        id="facebook-pixel-base"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      
      {/* Fallback para navegadores com JavaScript desabilitado */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt="Facebook pixel" 
        />
      </noscript>
    </>
  );
} 
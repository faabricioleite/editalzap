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
          // Reinicializar o pixel e forçar o PageView
          window.fbq('init', PIXEL_ID);
          window.fbq('track', 'PageView');
          console.log('[Meta Pixel] PageView disparado manualmente após carregamento da página');
          clearInterval(checkInterval);
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
      {/* 
        Implementação conforme a documentação oficial do Meta Pixel
        https://developers.facebook.com/docs/meta-pixel/implementation
        
        Usando a estratégia beforeInteractive para garantir carregamento precoce
        e innerHtml para garantir que o script seja executado exatamente como recomendado
      */}
      <Script
        id="facebook-pixel-base"
        strategy="beforeInteractive"
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
      
      {/* Garantia adicional de inicialização após o carregamento da página */}
      <Script
        id="facebook-pixel-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof fbq === 'function') {
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
              console.log('[Meta Pixel] PageView disparado via script afterInteractive');
            } else {
              console.error('[Meta Pixel] fbq não disponível no script afterInteractive');
            }
          `,
        }}
      />
      
      {/* Noscript para navegadores com JavaScript desabilitado */}
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
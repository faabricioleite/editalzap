'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function MetaPixel() {
  // Estado para rastrear se o pixel foi carregado
  const [loaded, setLoaded] = useState(false);

  // Função para garantir que o evento PageView seja acionado depois da montagem do componente
  useEffect(() => {
    // Se o script já foi carregado (state), enviar o PageView
    if (loaded && typeof window !== 'undefined' && window.fbq) {
      try {
        // Verificar se o Pixel precisa ser reinicializado
        window.fbq('init', '899641102002155');
        window.fbq('track', 'PageView', {}, {
          eventID: `pageview_${Date.now()}`
        });
        console.log('[Meta Pixel] PageView event sent after component mount');
      } catch (e) {
        console.error('Erro ao acionar evento PageView:', e);
      }
    }
  }, [loaded]); // Dependência do estado de carregamento

  // Função para lidar com o carregamento do script
  const handleScriptLoad = () => {
    console.log('[Meta Pixel] Script loaded successfully');
    setLoaded(true); // Marca o script como carregado
  };

  // Função para lidar com erros no script
  const handleScriptError = () => {
    console.error('[Meta Pixel] Script failed to load');
  };

  return (
    <>
      {/* Script base do Facebook Pixel */}
      <Script 
        id="fb-pixel-base" 
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s) {
              if(f.fbq) return;
              n=f.fbq=function() {
                n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
              };
              if(!f._fbq) f._fbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=b.createElement(e);
              t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
          `
        }}
        onLoad={handleScriptLoad}
        onError={handleScriptError}
      />

      {/* Inicialização e PageView inicial */}
      <Script 
        id="fb-pixel-init" 
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            fbq('init', '899641102002155');
            fbq('track', 'PageView');
          `
        }}
      />

      {/* Fallback para navegadores com JavaScript desabilitado */}
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
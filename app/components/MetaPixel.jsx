'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function MetaPixel() {
  // ID do Pixel
  const PIXEL_ID = '899641102002155';
  // Token de acesso da Conversion API 
  const ACCESS_TOKEN = 'EAAGe7tXaELQBOyAxOUOUTjVb2Ud5aCMPeBA0GCtD5yZCiwjZChX5OfkzfMyika8n5ouQbBwuK6DilbZCJLE06ZBxQyG52bASsKBfacF6EKahFZBNVZBxB10VNAXfHv5AT68BxF78ouqGE8RuOMz6FSjn5ZBF2Gntlrd6DaDrUF4SkvLhp7F6QWbxmBiFEdnRN6OKwZDZD';
  
  // Função para enviar eventos server-side através da Conversion API
  const sendServerEvent = async (eventName, eventData = {}) => {
    if (typeof window === 'undefined') return;
    
    try {
      // Obter dados do usuário para server-side tracking
      const userData = {
        client_ip_address: null, // O IP será preenchido pelo servidor
        client_user_agent: window.navigator.userAgent,
        em: null, // Hashed email, se disponível
        // Outros parâmetros podem ser adicionados conforme necessário
      };
      
      // Preparar o payload do evento
      const eventPayload = {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: window.location.href,
        user_data: userData,
        custom_data: eventData,
      };
      
      // Enviar para a API do Facebook (em ambiente de produção, isto deve ser feito pelo servidor)
      // Implementação front-end apenas para desenvolvimento
      console.log('[Meta Conversion API] Enviando evento:', eventPayload);
      
      // Em um ambiente real, essa chamada deveria ser feita pelo backend
      // Esta implementação é apenas para desenvolvimento e testes
      const response = await fetch(`https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [eventPayload]
        }),
      });
      
      const result = await response.json();
      console.log('[Meta Conversion API] Resposta:', result);
    } catch (error) {
      console.error('[Meta Conversion API] Erro ao enviar evento:', error);
    }
  };
  
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
            // Também enviar o PageView para a Conversion API
            sendServerEvent('PageView');
            console.log('[Meta Pixel] PageView disparado manualmente após carregamento da página');
            clearInterval(checkInterval);
          } catch (error) {
            // Erro silencioso para não afetar a experiência do usuário
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
  
  // Expor a função sendServerEvent globalmente para uso em outros componentes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.sendFBEvent = (eventName, eventData) => {
        // Disparar evento pelo browser pixel
        if (typeof window.fbq === 'function') {
          window.fbq('track', eventName, eventData);
        }
        
        // Disparar evento pela Conversion API
        sendServerEvent(eventName, eventData);
      };
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        delete window.sendFBEvent;
      }
    };
  }, []);
  
  return (
    <>
      {/* Base script - usando estratégia afterInteractive para melhor compatibilidade */}
      <Script
        id="facebook-pixel-base"
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
            
            try {
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            } catch(e) {
              // Erro silencioso
            }
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
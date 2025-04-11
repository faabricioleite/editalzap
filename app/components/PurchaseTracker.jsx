'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function PurchaseTracker() {
  useEffect(() => {
    // Esta função será executada quando o documento estiver pronto
    const trackPurchase = () => {
      // 2. Mapear URLs para produtos e valores
      const productMap = {
        '/obrigado-iniciante': {
          name: 'Zap Iniciante',
          value: 20.00,
          currency: 'BRL'
        },
        '/obrigado-essencial': {
          name: 'Zap Essencial',
          value: 37.00,
          currency: 'BRL'
        },
        '/obrigado-avancado': {
          name: 'Zap Avançado',
          value: 47.00,
          currency: 'BRL'
        },
        '/obrigado-empresarial': {
          name: 'Zap Empresarial',
          value: 67.00,
          currency: 'BRL'
        }
      };

      // 3. Identificar qual produto foi comprado com base na URL
      const getProductFromUrl = () => {
        const path = window.location.pathname;
        
        for (const key in productMap) {
          if (path.includes(key)) {
            return productMap[key];
          }
        }
        
        return null;
      };

      // 4. Função para enviar dados para o webhook do n8n
      const sendToN8n = (eventName, eventData) => {
        return fetch('https://n8n-main.aluanalara.com.br/webhook-test/pixel-editalzap', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            eventName: eventName,
            eventData: eventData,
            pixelId: '899641102002155',
            accessToken: 'EAAGe7tXaELQBOyAxOUOUTjVb2Ud5aCMPeBA0GCtD5yZCiwjZChX5OfkzfMyika8n5ouQbBwuK6DilbZCJLE06ZBxQyG52bASsKBfacF6EKahFZBNVZBxB10VNAXfHv5AT68BxF78ouqGE8RuOMz6FSjn5ZBF2Gntlrd6DaDrUF4SkvLhp7F6QWbxmBiFEdnRN6OKwZDZD',
            url: window.location.href,
            timestamp: new Date().toISOString()
          })
        })
        .then(response => {
          if (response.ok) {
            console.log('Webhook enviado com sucesso para o n8n');
            return response.json();
          }
          throw new Error('Falha ao enviar webhook');
        })
        .catch(error => {
          console.error('Erro ao enviar dados para o n8n:', error);
        });
      };

      // 5. Lógica principal para rastreamento de compra
      const product = getProductFromUrl();
      
      if (product) {
        // Gerar um ID único para esta compra
        const orderID = 'order_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        
        // Dados do evento de compra
        const purchaseData = {
          content_name: product.name,
          content_type: 'product',
          currency: product.currency,
          value: product.value,
          order_id: orderID
        };
        
        // Verificar se fbq está disponível antes de usá-lo
        if (typeof window.fbq === 'function') {
          // Enviar evento de compra para o Facebook Pixel
          window.fbq('track', 'Purchase', purchaseData);
          console.log('Evento de compra enviado para o Meta Pixel:', purchaseData);
        } else {
          console.warn('fbq não está disponível ainda, aguardando...');
          // Tentar novamente em 1 segundo se fbq não estiver disponível
          setTimeout(() => {
            if (typeof window.fbq === 'function') {
              window.fbq('track', 'Purchase', purchaseData);
              console.log('Evento de compra enviado para o Meta Pixel (retry):', purchaseData);
            } else {
              console.error('fbq ainda não está disponível após retry');
            }
          }, 1000);
        }
        
        // Enviar os mesmos dados para o n8n
        sendToN8n('Purchase', purchaseData)
          .then(response => {
            console.log('Resposta do n8n:', response);
          });
      } else {
        console.warn('Não foi possível identificar o produto a partir da URL');
      }
    };

    // Executar trackPurchase quando o componente for montado
    trackPurchase();

  }, []);

  return (
    <>
      {/* Script do Meta Pixel */}
      <Script
        id="facebook-pixel-purchase"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // 1. Configuração do Meta Pixel
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            // Inicializar o Pixel
            fbq('init', '899641102002155');
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
          src="https://www.facebook.com/tr?id=899641102002155&ev=PageView&noscript=1"
          alt="Facebook pixel" 
        />
      </noscript>
    </>
  );
} 
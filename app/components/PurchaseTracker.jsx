'use client';

import Script from 'next/script';

export default function PurchaseTracker() {
  return (
    <>
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
            
            // 3. Função para recuperar parâmetros de rastreamento armazenados
            function getStoredParameter(name) {
              // Tenta obter do localStorage primeiro
              let value = localStorage.getItem(name);
              
              // Se não encontrar no localStorage, tenta nos cookies
              if (!value && name === 'fbclid') {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                  const cookie = cookies[i].trim();
                  if (cookie.startsWith('fbclid=')) {
                    value = cookie.substring(7);
                    break;
                  }
                }
              }
              
              return value || '';
            }
            
            // 4. Identificar qual produto foi comprado com base na URL
            function getProductFromUrl() {
              const path = window.location.pathname;
              
              for (const key in productMap) {
                if (path.includes(key)) {
                  return productMap[key];
                }
              }
              
              return null;
            }
            
            // 5. Função para enviar dados para o webhook do n8n
            function sendToN8n(eventName, eventData) {
              // Obter parâmetros de rastreamento
              const fbclid = getStoredParameter('fbclid');
              const fbp = getStoredParameter('fbp');
              const utmSource = getStoredParameter('utm_source');
              const utmMedium = getStoredParameter('utm_medium');
              const utmCampaign = getStoredParameter('utm_campaign');
              
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
                  fbclid: fbclid,
                  fbp: fbp,
                  utm_source: utmSource,
                  utm_medium: utmMedium,
                  utm_campaign: utmCampaign,
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
            }
            
            // 6. Função principal que é executada quando a página carrega
            function trackPurchase() {
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
                
                // Enviar evento de compra para o Facebook Pixel
                fbq('track', 'Purchase', purchaseData);
                console.log('Evento de compra enviado para o Meta Pixel:', purchaseData);
                
                // Enviar os mesmos dados para o n8n
                sendToN8n('Purchase', purchaseData)
                  .then(response => {
                    console.log('Resposta do n8n:', response);
                  });
              } else {
                console.warn('Não foi possível identificar o produto a partir da URL');
              }
            }
            
            // 7. Executar a função quando o documento estiver pronto
            document.addEventListener('DOMContentLoaded', trackPurchase);
          `
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
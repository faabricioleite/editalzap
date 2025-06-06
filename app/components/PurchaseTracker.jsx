'use client';

import Script from 'next/script';

export default function PurchaseTracker() {
  return (
    <Script
      id="purchase-tracker-simplified"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          console.log("Inicializando script de rastreamento de conversão v1.0.1");
          
          // Função para identificar o produto
          function getProductInfo() {
            const path = window.location.pathname;
            
            if (path.includes('/obrigado-iniciante')) {
              return {
                name: 'Zap Iniciante',
                value: 20.00,
                currency: 'BRL'
              };
            } else if (path.includes('/obrigado-essencial')) {
              return {
                name: 'Zap Essencial',
                value: 37.00,
                currency: 'BRL'
              };
            } else if (path.includes('/obrigado-avancado')) {
              return {
                name: 'Zap Avançado',
                value: 47.00,
                currency: 'BRL'
              };
            } else if (path.includes('/obrigado-empresarial')) {
              return {
                name: 'Zap Empresarial',
                value: 67.00,
                currency: 'BRL'
              };
            }
            
            return null;
          }
          
          // Função para enviar evento ao n8n
          function sendPurchaseEvent() {
            try {
              console.log("Script de envio iniciado");
              
              const product = getProductInfo();
              
              if (product) {
                console.log("Produto identificado:", product);
                
                // Gerar ID único para esta compra
                const orderID = 'order_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
                
                // Dados da compra
                const purchaseData = {
                  content_name: product.name,
                  content_type: 'product',
                  currency: product.currency,
                  value: product.value,
                  order_id: orderID
                };
                
                // Enviar para o webhook do n8n
                fetch('https://n8n-hook.aluanalara.com.br/webhook/pixel-editalzap', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    eventName: 'Purchase',
                    eventData: purchaseData,
                    pixelId: '899641102002155',
                    accessToken: 'EAAGe7tXaELQBOyAxOUOUTjVb2Ud5aCMPeBA0GCtD5yZCiwjZChX5OfkzfMyika8n5ouQbBwuK6DilbZCJLE06ZBxQyG52bASsKBfacF6EKahFZBNVZBxB10VNAXfHv5AT68BxF78ouqGE8RuOMz6FSjn5ZBF2Gntlrd6DaDrUF4SkvLhp7F6QWbxmBiFEdnRN6OKwZDZD',
                    userInfo: {
                      client_ip_address: '', // O n8n preencherá isso
                      client_user_agent: navigator.userAgent
                    }
                  })
                })
                .then(response => {
                  console.log("Resposta do webhook:", response.status);
                  return response.text();
                })
                .then(data => {
                  console.log("Evento de compra enviado com sucesso:", data);
                })
                .catch(error => {
                  console.error("Erro ao enviar evento:", error);
                });
              } else {
                console.warn("Produto não identificado na URL atual");
              }
            } catch (error) {
              console.error("Erro no script:", error);
            }
          }
          
          // Executar quando a página carregar
          window.addEventListener('load', function() {
            // Pequeno atraso para garantir que a página carregou completamente
            setTimeout(sendPurchaseEvent, 1500);
          });
        `
      }}
    />
  );
} 
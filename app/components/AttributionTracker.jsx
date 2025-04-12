'use client';

import Script from 'next/script';

export default function AttributionTracker() {
  return (
    <Script
      id="attribution-tracker"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          // Função para obter parâmetros da URL
          function getUrlParameter(name) {
              name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
              var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
              var results = regex.exec(location.search);
              return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
          }

          // Capturar e armazenar parâmetros de atribuição
          document.addEventListener('DOMContentLoaded', function() {
              // Verifica fbclid (Facebook Click ID)
              const fbclid = getUrlParameter('fbclid');
              if (fbclid) {
                  localStorage.setItem('fbclid', fbclid);
                  document.cookie = "fbclid=" + fbclid + "; max-age=2592000; path=/; domain=.editalzap.com.br; SameSite=Lax";
              }
              
              // Verifica fbp (Facebook Browser ID, enviado pelo pixel)
              const fbp = document.cookie.split(';').filter(c => c.trim().startsWith('_fbp=')).map(c => c.trim().substring(5))[0];
              if (fbp) {
                  localStorage.setItem('fbp', fbp);
              }
              
              // Captura utm parameters (se estiver usando)
              const utmSource = getUrlParameter('utm_source');
              const utmMedium = getUrlParameter('utm_medium');
              const utmCampaign = getUrlParameter('utm_campaign');
              
              if (utmSource) localStorage.setItem('utm_source', utmSource);
              if (utmMedium) localStorage.setItem('utm_medium', utmMedium);
              if (utmCampaign) localStorage.setItem('utm_campaign', utmCampaign);
          });

          // Executa também logo ao carregar o script, não apenas no DOMContentLoaded
          // para garantir que ele funcione mesmo se o script for carregado após o evento
          (function() {
              try {
                  // Verifica fbclid (Facebook Click ID)
                  const fbclid = getUrlParameter('fbclid');
                  if (fbclid) {
                      localStorage.setItem('fbclid', fbclid);
                      document.cookie = "fbclid=" + fbclid + "; max-age=2592000; path=/; domain=.editalzap.com.br; SameSite=Lax";
                  }
                  
                  // Verifica fbp (Facebook Browser ID, enviado pelo pixel)
                  const fbp = document.cookie.split(';').filter(c => c.trim().startsWith('_fbp=')).map(c => c.trim().substring(5))[0];
                  if (fbp) {
                      localStorage.setItem('fbp', fbp);
                  }
                  
                  // Captura utm parameters (se estiver usando)
                  const utmSource = getUrlParameter('utm_source');
                  const utmMedium = getUrlParameter('utm_medium');
                  const utmCampaign = getUrlParameter('utm_campaign');
                  
                  if (utmSource) localStorage.setItem('utm_source', utmSource);
                  if (utmMedium) localStorage.setItem('utm_medium', utmMedium);
                  if (utmCampaign) localStorage.setItem('utm_campaign', utmCampaign);
              } catch (e) {
                  console.error('Erro ao processar parâmetros de atribuição:', e);
              }
          })();
        `
      }}
    />
  );
} 
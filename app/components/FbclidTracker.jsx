'use client';

import Script from 'next/script';

export default function FbclidTracker() {
  return (
    <Script
      id="fbclid-tracker"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          // Função para obter parâmetros da URL
          function getUrlParameter(name) {
              name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
              var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
              var results = regex.exec(location.search);
              return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
          }
          
          // Capturar fbclid quando o usuário chega ao site
          document.addEventListener('DOMContentLoaded', function() {
              const fbclid = getUrlParameter('fbclid');
              if (fbclid) {
                  // Armazenar em localStorage
                  localStorage.setItem('editalzap_fbclid', fbclid);
                  // Armazenar também como cookie (para maior compatibilidade)
                  document.cookie = "editalzap_fbclid=" + fbclid + "; path=/; max-age=2592000; SameSite=Lax";
                  console.log("fbclid capturado e armazenado:", fbclid);
              }
          });
          
          // Executar também imediatamente, para o caso do script carregar após o DOMContentLoaded
          (function() {
              const fbclid = getUrlParameter('fbclid');
              if (fbclid) {
                  // Armazenar em localStorage
                  localStorage.setItem('editalzap_fbclid', fbclid);
                  // Armazenar também como cookie (para maior compatibilidade)
                  document.cookie = "editalzap_fbclid=" + fbclid + "; path=/; max-age=2592000; SameSite=Lax";
                  console.log("fbclid capturado e armazenado imediatamente:", fbclid);
              }
          })();
        `
      }}
    />
  );
} 
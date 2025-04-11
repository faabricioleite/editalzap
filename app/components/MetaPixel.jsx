'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // Inicializa o Pixel
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    // Inicializa com seu ID
    fbq('init', '899641102002155');
    
    // Rastreia visualização de página
    fbq('track', 'PageView');
  }, [pathname]); // Re-executa quando a rota muda

  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=899641102002155&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  );
} 
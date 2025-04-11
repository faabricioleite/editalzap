/**
 * Utilitário para eventos do Meta Pixel
 * Baseado na documentação: https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking
 */

// Verificação de ambiente do lado do cliente
const isClient = typeof window !== 'undefined';

// Token de acesso à API de Conversões do Facebook
const FACEBOOK_ACCESS_TOKEN = 'EAAGe7tXaELQBOyAxOUOUTjVb2Ud5aCMPeBA0GCtD5yZCiwjZChX5OfkzfMyika8n5ouQbBwuK6DilbZCJLE06ZBxQyG52bASsKBfacF6EKahFZBNVZBxB10VNAXfHv5AT68BxF78ouqGE8RuOMz6FSjn5ZBF2Gntlrd6DaDrUF4SkvLhp7F6QWbxmBiFEdnRN6OKwZDZD';
const PIXEL_ID = '899641102002155';

// Gera um ID único para eventos
const generateEventId = (eventName) => {
  return `${eventName.toLowerCase()}_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
};

// Função para verificar a disponibilidade do fbq
const isFbqAvailable = () => {
  if (!isClient) return false;
  if (typeof window.fbq !== 'function') {
    console.warn('[Meta Pixel] Facebook Pixel (fbq) não está disponível');
    return false;
  }
  return true;
};

// Função para enviar eventos para a API de Conversões do Facebook
const sendServerEvent = async (eventName, eventId, userData = {}, customData = {}) => {
  if (!isClient) return;
  
  try {
    // Coletando informações do usuário para melhor correspondência
    const userDataParams = {
      client_user_agent: navigator.userAgent,
      client_ip_address: null, // O IP será detectado pelo servidor do Facebook
      ...userData
    };
    
    // Preparando os dados do evento
    const eventData = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      event_source_url: window.location.href,
      action_source: 'website',
      user_data: userDataParams,
      custom_data: customData
    };
    
    // Configuração da requisição para a API de Conversões
    const url = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [eventData],
        access_token: FACEBOOK_ACCESS_TOKEN,
        test_event_code: 'TEST12345' // Remova isto em produção
      })
    };
    
    // Enviando o evento para a API de Conversões
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    
    if (data && data.events_received) {
      console.log(`[Meta Conversions API] Evento ${eventName} enviado com sucesso. EventID: ${eventId}`);
    } else {
      console.error('[Meta Conversions API] Erro ao enviar evento:', data);
    }
  } catch (e) {
    console.error('[Meta Conversions API] Erro ao enviar evento para o servidor:', e);
  }
};

// Função para tentar inicializar o pixel novamente se necessário
const ensurePixelInitialized = () => {
  if (!isClient) return false;
  
  try {
    if (typeof window.fbq === 'function') {
      // Verifica se já foi inicializado e reinicializa para garantir
      window.fbq('init', PIXEL_ID);
      console.log('[Meta Pixel] Pixel reinicializado via utilitário de eventos');
      return true;
    } else {
      console.warn('[Meta Pixel] Tentando recuperar fbq não disponível');
      
      // Tenta recarregar o script do pixel
      const existingScript = document.getElementById('fb-pixel-recovery');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'fb-pixel-recovery';
        script.innerHTML = `
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
          fbq('init', '${PIXEL_ID}');
          console.log('[Meta Pixel] Script recuperado via utilitário de eventos');
        `;
        document.head.appendChild(script);
        
        // Aguarda um pouco para o script carregar
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(typeof window.fbq === 'function');
          }, 1000);
        });
      }
    }
  } catch (e) {
    console.error('[Meta Pixel] Erro ao tentar recuperar pixel:', e);
    return false;
  }
  
  return false;
};

// Função para extrair dados básicos do usuário para matchear eventos
const getUserData = () => {
  if (!isClient) return {};
  
  // Dados básicos que podem estar disponíveis
  const userData = {
    client_user_agent: navigator.userAgent,
    fbp: getCookie('_fbp') || undefined,
    fbc: getCookie('_fbc') || getFbcFromUrl()
  };
  
  return userData;
};

// Função auxiliar para obter cookies
const getCookie = (name) => {
  if (!isClient) return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

// Função auxiliar para obter o parâmetro fbclid da URL
const getFbcFromUrl = () => {
  if (!isClient) return null;
  
  const params = new URLSearchParams(window.location.search);
  const fbclid = params.get('fbclid');
  if (fbclid) return `fb.1.${Date.now()}.${fbclid}`;
  return null;
};

// Função para adicionar à lista de desejos
export const trackAddToWishlist = async (name = 'EditalZap Acesso', params = {}) => {
  if (!isClient) return;
  
  try {
    // Verifica e tenta restaurar o pixel se necessário
    if (!isFbqAvailable()) {
      const recovered = await ensurePixelInitialized();
      if (!recovered) {
        console.error('[Meta Pixel] Não foi possível recuperar o pixel para AddToWishlist');
      }
    }
    
    // Gerar ID único para este evento
    const eventID = generateEventId('addtowishlist');
    
    // Dados do evento para a API de Conversões
    const customData = {
      content_name: name,
      content_category: 'acesso',
      ...params
    };
    
    // Rastreamos o evento com parâmetros e eventID no navegador (Client-side)
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'AddToWishlist', customData, {
        eventID: eventID
      });
      console.log('[Meta Pixel] AddToWishlist event tracked:', name, 'EventID:', eventID);
    }
    
    // Enviamos o mesmo evento para a API de Conversões (Server-side)
    await sendServerEvent('AddToWishlist', eventID, getUserData(), customData);
    
  } catch (e) {
    console.error('[Meta Pixel] Erro ao rastrear evento AddToWishlist:', e);
  }
};

// Função para visualizar conteúdo
export const trackViewContent = async (name = 'Demonstração EditalZap', params = {}) => {
  if (!isClient) return;
  
  try {
    // Verifica e tenta restaurar o pixel se necessário
    if (!isFbqAvailable()) {
      const recovered = await ensurePixelInitialized();
      if (!recovered) {
        console.error('[Meta Pixel] Não foi possível recuperar o pixel para ViewContent');
      }
    }
    
    // Gerar ID único para este evento
    const eventID = generateEventId('viewcontent');
    
    // Dados do evento para a API de Conversões
    const customData = {
      content_name: name,
      content_type: 'product',
      ...params
    };
    
    // Rastreamos o evento com parâmetros e eventID no navegador (Client-side)
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', customData, {
        eventID: eventID
      });
      console.log('[Meta Pixel] ViewContent event tracked:', name, 'EventID:', eventID);
    }
    
    // Enviamos o mesmo evento para a API de Conversões (Server-side)
    await sendServerEvent('ViewContent', eventID, getUserData(), customData);
    
  } catch (e) {
    console.error('[Meta Pixel] Erro ao rastrear evento ViewContent:', e);
  }
};

// Função para iniciar checkout (passo de compra)
export const trackInitiateCheckout = async (name = 'Plano EditalZap', params = {}) => {
  if (!isClient) return;
  
  try {
    // Verifica e tenta restaurar o pixel se necessário
    if (!isFbqAvailable()) {
      const recovered = await ensurePixelInitialized();
      if (!recovered) {
        console.error('[Meta Pixel] Não foi possível recuperar o pixel para InitiateCheckout');
      }
    }
    
    // Gerar ID único para este evento
    const eventID = generateEventId('initiatecheckout');
    
    // Dados do evento para a API de Conversões
    const customData = {
      content_name: name,
      content_category: 'plano',
      ...params
    };
    
    // Rastreamos o evento com parâmetros e eventID no navegador (Client-side)
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', customData, {
        eventID: eventID
      });
      console.log('[Meta Pixel] InitiateCheckout event tracked:', name, 'EventID:', eventID);
    }
    
    // Enviamos o mesmo evento para a API de Conversões (Server-side)
    await sendServerEvent('InitiateCheckout', eventID, getUserData(), customData);
    
  } catch (e) {
    console.error('[Meta Pixel] Erro ao rastrear evento InitiateCheckout:', e);
  }
}; 
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
  try {
    if (typeof window.fbq !== 'function') {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

// Função para enviar eventos para a API de Conversões do Facebook
const sendServerEvent = async (eventName, eventId, userData = {}, customData = {}) => {
  if (!isClient) return;
  
  try {
    // Preparando os dados do evento
    const eventData = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      event_source_url: window.location.href,
      action_source: 'website',
      user_data: {
        client_user_agent: navigator.userAgent,
        ...userData
      },
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
        access_token: FACEBOOK_ACCESS_TOKEN
      })
    };
    
    // Enviando o evento para a API de Conversões
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    
    if (data && data.events_received) {
      // Sucesso: evento recebido
    } else if (data && data.error) {
      console.error('[Meta API] Erro reportado pela API do Facebook:', data.error.message);
    }
  } catch (e) {
    // Erro silencioso para não afetar a experiência do usuário
  }
};

// Função para inicializar o pixel diretamente
const initializePixel = () => {
  if (!isClient) return false;
  
  try {
    if (typeof window.fbq === 'function') {
      window.fbq('init', PIXEL_ID);
      window.fbq('track', 'PageView');
      return true;
    }
  } catch (error) {
    // Erro silencioso
  }
  
  return false;
};

// Função para extrair dados básicos do usuário para matchear eventos
const getUserData = () => {
  if (!isClient) return {};
  
  try {
    // Dados básicos que podem estar disponíveis
    return {
      client_user_agent: navigator.userAgent,
      fbp: getCookie('_fbp') || undefined,
      fbc: getCookie('_fbc') || getFbcFromUrl()
    };
  } catch (error) {
    return {};
  }
};

// Função auxiliar para obter cookies
const getCookie = (name) => {
  if (!isClient) return null;
  
  try {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  } catch (error) {
    // Erro silencioso
  }
  return null;
};

// Função auxiliar para obter o parâmetro fbclid da URL
const getFbcFromUrl = () => {
  if (!isClient) return null;
  
  try {
    const params = new URLSearchParams(window.location.search);
    const fbclid = params.get('fbclid');
    if (fbclid) return `fb.1.${Date.now()}.${fbclid}`;
  } catch (error) {
    // Erro silencioso
  }
  return null;
};

// Função segura para disparar eventos do pixel
const safeTrackEvent = (eventName, eventData, options) => {
  if (!isClient) return;
  
  try {
    if (typeof window.fbq === 'function') {
      window.fbq('track', eventName, eventData, options);
      return true;
    }
  } catch (error) {
    // Erro silencioso
  }
  return false;
};

// Função para adicionar à lista de desejos
export const trackAddToWishlist = async (name = 'EditalZap Acesso', params = {}) => {
  if (!isClient) return;
  
  try {
    // Gerar ID único para este evento
    const eventID = generateEventId('addtowishlist');
    
    // Dados do evento
    const customData = {
      content_name: name,
      content_category: 'acesso',
      ...params
    };
    
    // Tentar inicializar o pixel se necessário
    if (!isFbqAvailable()) {
      initializePixel();
    }
    
    // Disparar evento no navegador (client-side)
    safeTrackEvent('AddToWishlist', customData, { eventID });
    
    // Enviar evento para a API de Conversões (server-side)
    await sendServerEvent('AddToWishlist', eventID, getUserData(), customData);
  } catch (error) {
    // Erro silencioso para não afetar a experiência do usuário
  }
};

// Função para visualizar conteúdo
export const trackViewContent = async (name = 'Demonstração EditalZap', params = {}) => {
  if (!isClient) return;
  
  try {
    // Gerar ID único para este evento
    const eventID = generateEventId('viewcontent');
    
    // Dados do evento
    const customData = {
      content_name: name,
      content_type: 'product',
      ...params
    };
    
    // Tentar inicializar o pixel se necessário
    if (!isFbqAvailable()) {
      initializePixel();
    }
    
    // Disparar evento no navegador (client-side)
    safeTrackEvent('ViewContent', customData, { eventID });
    
    // Enviar evento para a API de Conversões (server-side)
    await sendServerEvent('ViewContent', eventID, getUserData(), customData);
  } catch (error) {
    // Erro silencioso para não afetar a experiência do usuário
  }
};

// Função para iniciar checkout (passo de compra)
export const trackInitiateCheckout = async (name = 'Plano EditalZap', params = {}) => {
  if (!isClient) return;
  
  try {
    // Gerar ID único para este evento
    const eventID = generateEventId('initiatecheckout');
    
    // Dados do evento
    const customData = {
      content_name: name,
      content_category: 'plano',
      ...params
    };
    
    // Tentar inicializar o pixel se necessário
    if (!isFbqAvailable()) {
      initializePixel();
    }
    
    // Disparar evento no navegador (client-side)
    safeTrackEvent('InitiateCheckout', customData, { eventID });
    
    // Enviar evento para a API de Conversões (server-side)
    await sendServerEvent('InitiateCheckout', eventID, getUserData(), customData);
  } catch (error) {
    // Erro silencioso para não afetar a experiência do usuário
  }
}; 
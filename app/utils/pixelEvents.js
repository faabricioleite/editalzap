/**
 * Utilitário para eventos do Meta Pixel
 * Baseado na documentação: https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking
 */

// Verificação de ambiente do lado do cliente
const isClient = typeof window !== 'undefined';

// Função para adicionar à lista de desejos
export const trackAddToWishlist = (name = 'EditalZap Acesso', params = {}) => {
  if (isClient) {
    try {
      // Verificamos se fbq está definido no escopo global
      if (typeof window.fbq !== 'function') {
        console.warn('Facebook Pixel (fbq) não está disponível');
        return;
      }
      
      // Forçamos a inicialização antes do evento, como garantia
      window.fbq('init', '899641102002155');
      
      // Rastreamos o evento com parâmetros
      window.fbq('track', 'AddToWishlist', {
        content_name: name,
        content_category: 'acesso',
        ...params
      });
      
      console.log('[Meta Pixel] AddToWishlist event tracked:', name);
    } catch (e) {
      console.error('Erro ao rastrear evento AddToWishlist:', e);
    }
  }
};

// Função para visualizar conteúdo
export const trackViewContent = (name = 'Demonstração EditalZap', params = {}) => {
  if (isClient) {
    try {
      // Verificamos se fbq está definido no escopo global
      if (typeof window.fbq !== 'function') {
        console.warn('Facebook Pixel (fbq) não está disponível');
        return;
      }
      
      // Forçamos a inicialização antes do evento, como garantia
      window.fbq('init', '899641102002155');
      
      // Rastreamos o evento com parâmetros
      window.fbq('track', 'ViewContent', {
        content_name: name,
        content_type: 'product',
        ...params
      });
      
      console.log('[Meta Pixel] ViewContent event tracked:', name);
    } catch (e) {
      console.error('Erro ao rastrear evento ViewContent:', e);
    }
  }
};

// Função para iniciar checkout (passo de compra)
export const trackInitiateCheckout = (name = 'Plano EditalZap', params = {}) => {
  if (isClient) {
    try {
      // Verificamos se fbq está definido no escopo global
      if (typeof window.fbq !== 'function') {
        console.warn('Facebook Pixel (fbq) não está disponível');
        return;
      }
      
      // Forçamos a inicialização antes do evento, como garantia
      window.fbq('init', '899641102002155');
      
      // Rastreamos o evento com parâmetros
      window.fbq('track', 'InitiateCheckout', {
        content_name: name,
        content_category: 'plano',
        ...params
      });
      
      console.log('[Meta Pixel] InitiateCheckout event tracked:', name);
    } catch (e) {
      console.error('Erro ao rastrear evento InitiateCheckout:', e);
    }
  }
}; 
/**
 * Utilitário para eventos do Meta Pixel
 * Baseado na documentação: https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking
 */

// Função para adicionar à lista de desejos
export const trackAddToWishlist = (name = 'EditalZap Acesso', params = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'AddToWishlist', {
      content_name: name,
      content_category: 'acesso',
      ...params
    });
  }
};

// Função para visualizar conteúdo
export const trackViewContent = (name = 'Demonstração EditalZap', params = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: name,
      content_type: 'product',
      ...params
    });
  }
};

// Função para iniciar checkout (passo de compra)
export const trackInitiateCheckout = (name = 'Plano EditalZap', params = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: name,
      content_category: 'plano',
      ...params
    });
  }
}; 
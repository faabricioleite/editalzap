export const trackTikTokInitiateCheckout = (planName, planDetails) => {
  if (typeof window !== 'undefined' && window.ttq) {
    const { value, currency = 'BRL' } = planDetails;
    window.ttq.track('InitiateCheckout', {
      contents: [
        {
          content_id: planName.toLowerCase().replace(/\s+/g, '-'), // Ex: zap-iniciante
          content_type: 'product',
          content_name: planName,
        },
      ],
      value: parseFloat(value),
      currency: currency,
    });
    console.log(`TikTok Event: InitiateCheckout - ${planName}`, planDetails);
  } else {
    console.log('TikTok Pixel (ttq) not found. Event InitiateCheckout not sent.');
  }
};

// Você pode adicionar outras funções de rastreamento do TikTok aqui, conforme necessário
// Exemplo: trackTikTokViewContent, trackTikTokAddToCart, etc. 
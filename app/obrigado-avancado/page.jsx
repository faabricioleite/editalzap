'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ObrigadoAvancado() {
  useEffect(() => {
    // Disparar o evento de compra (purchase) quando a página carregar
    if (typeof window !== 'undefined') {
      // Aguardar a inicialização do Pixel
      const checkFbq = setInterval(() => {
        if (typeof window.fbq === 'function') {
          // Disparar o evento usando o Facebook Pixel
          window.fbq('track', 'Purchase', {
            currency: 'BRL',
            value: 47.00,
            content_name: 'Zap Avançado',
            content_type: 'product',
            content_ids: ['zap-avancado'],
          });
          
          console.log('[Meta Pixel] Evento Purchase disparado para o plano Zap Avançado');
          clearInterval(checkFbq);
        }
      }, 300);
      
      // Verificar se a função sendFBEvent global está disponível (implementação da Conversion API)
      const checkSendEvent = setInterval(() => {
        if (typeof window.sendFBEvent === 'function') {
          // Disparar o evento via Pixel browser + Conversion API
          window.sendFBEvent('Purchase', {
            currency: 'BRL',
            value: 47.00,
            content_name: 'Zap Avançado',
            content_type: 'product',
            content_ids: ['zap-avancado'],
          });
          
          console.log('[Meta Conversion API] Evento Purchase disparado para o plano Zap Avançado');
          clearInterval(checkSendEvent);
        }
      }, 300);
      
      // Limpar os intervalos após 5 segundos para evitar tentativas infinitas
      setTimeout(() => {
        clearInterval(checkFbq);
        clearInterval(checkSendEvent);
      }, 5000);
    }
  }, []);

  return (
    <main className="gradient-bg min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image 
            src="https://editalzap.com.br/images/logo.svg" 
            alt="EditalZap Logo" 
            width={180}
            height={48}
            className="w-auto h-12"
            priority
          />
        </div>
        
        {/* Ícone de sucesso */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        {/* Título e mensagem */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Parabéns! Sua assinatura foi confirmada</h1>
        
        <p className="text-gray-600 mb-8">
          Agradecemos por escolher o <span className="font-semibold text-green-600">Plano Zap Avançado</span>. 
          Você está a um passo de começar a receber oportunidades de licitações diretamente no seu WhatsApp.
        </p>
        
        <p className="text-sm text-gray-500 mb-8">
          Agora você precisa cadastrar suas <strong>5 palavras-chave</strong> e seu número de WhatsApp 
          para começar a receber os alertas diários.
        </p>
        
        {/* Botão de acesso */}
        <a
          href="https://wa.link/x9ikpi"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary block w-full py-3 px-4 text-center mb-6"
        >
          Acessar minha conta
        </a>
        
        {/* Link para página inicial */}
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
} 
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PurchaseTracker from '../components/PurchaseTracker';

export default function ObrigadoAvancado() {
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
      
      {/* Rastreador de conversão */}
      <PurchaseTracker />
    </main>
  );
} 
"use client";

import React from 'react';
import Link from 'next/link';
import OptimizedImage from './components/OptimizedImage';

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <Link href="/">
            <OptimizedImage 
              src="/images/logo.svg" 
              alt="EditalZap" 
              width={200} 
              height={60} 
              className="mx-auto w-auto h-12"
            />
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Página não encontrada</h1>
        
        <p className="text-gray-600 mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        
        <Link 
          href="/" 
          className="btn-primary inline-block"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
} 
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Hero from './components/Hero';
import OpportunitiesMap from './components/OpportunitiesMap';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import VideoPopup from './components/VideoPopup';
import OptimizedImage from './components/OptimizedImage';
import FbclidTracker from './components/FbclidTracker';

export default function Home() {
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);

  // Função para abrir o popup de vídeo
  const openVideoPopup = () => {
    setIsVideoPopupOpen(true);
  };

  // Função para fechar o popup de vídeo
  const closeVideoPopup = () => {
    setIsVideoPopupOpen(false);
  };

  return (
    <main className="gradient-bg min-h-screen relative">
      {/* Rastreador de fbclid */}
      <FbclidTracker />
      
      {/* Navbar fixa centralizada */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <div className="flex items-center gap-8 bg-white rounded-full px-4 py-2 shadow-lg">
          <Link href="/">
            <OptimizedImage 
              src="/images/logo.svg" 
              alt="EditalZap Logo" 
              width={90}
              height={24}
              className="w-auto h-6"
              priority
            />
          </Link>
          
          <Link href="#funcionalidades" className="text-[#333333] hover:text-gray-900 text-sm hidden md:inline-block">
            Funcionalidades
          </Link>
          
          <Link href="#planos" className="text-[#333333] hover:text-gray-900 text-sm hidden md:inline-block">
            Planos
          </Link>
          
          <a
            href="https://wa.link/txu832"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#333333] hover:text-gray-900 text-sm hidden md:inline-block"
          >
            Contato
          </a>
          
          <Link href="sobre" className="text-[#333333] hover:text-gray-900 text-sm hidden md:inline-block">
            Sobre
          </Link>
          
          <a
            href="https://wa.link/x9ikpi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-1 px-4"
          >
            Acessar
          </a>
        </div>
      </div>

      {/* Conteúdo da página */}
      <div className="pt-20">
        <Hero key="hero-component" onOpenDemoVideo={openVideoPopup} />
        <OpportunitiesMap />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </div>
      
      <Footer onOpenDemoVideo={openVideoPopup} />
      
      {/* Popup de vídeo */}
      <VideoPopup isOpen={isVideoPopupOpen} onClose={closeVideoPopup} />
      
      {/* Script para reiniciar a animação do WhatsApp quando a página for carregada */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Reiniciar a animação sempre que a página carregar
          document.addEventListener('DOMContentLoaded', function() {
            // Força um recálculo para garantir que as animações sejam aplicadas corretamente
            const chatElements = document.querySelectorAll('.animate-fadeIn, .animate-fadeInUp');
            chatElements.forEach(element => {
              element.style.animation = 'none';
              element.offsetHeight; // Força um reflow
              element.style.animation = '';
            });
          });
        `
      }} />
    </main>
  );
} 
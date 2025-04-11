"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import WhatsAppChat from './WhatsAppChat';
import Button from './Button';
import { trackAddToWishlist, trackViewContent } from '../utils/pixelEvents';

export default function Hero({ onOpenDemoVideo }) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const animationStarted = useRef(false);
  const metricsRef = useRef(null);
  const [showDemo, setShowDemo] = useState(false);
  
  // Valores finais
  const finalCount1 = 500;
  const finalCount2 = 17;
  const finalCount3 = 15;
  
  // Função para gerar números aleatórios próximos ao valor final
  const randomNear = (final, progress) => {
    const maxDiff = final * (1 - progress);
    return Math.round(final - (Math.random() * maxDiff));
  };
  
  // Observador de interseção para iniciar a animação quando as métricas forem visíveis
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const startCountAnimation = () => {
      if (animationStarted.current) return;
      animationStarted.current = true;
      
      const duration = 1300;
      const steps = 25;
      const interval = duration / steps;
      let step = 0;
      
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        if (step <= steps) {
          setCount1(randomNear(finalCount1, progress));
          setCount2(randomNear(finalCount2, progress));
          setCount3(randomNear(finalCount3, progress));
        } else {
          setCount1(finalCount1);
          setCount2(finalCount2);
          setCount3(finalCount3);
          clearInterval(timer);
        }
      }, interval);
      
      return () => clearInterval(timer);
    };
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        startCountAnimation();
      }
    }, options);
    
    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }
    
    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, [finalCount1, finalCount2, finalCount3]);
  
  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-4">
        {/* Layout flexível para desktop e mobile */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Lado esquerdo com informações */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
              Fique por dentro das licitações todos os dias
            </h1>
            <p className="text-lg mb-6 text-gray-600 text-center lg:text-left">
              Receba alertas diários sobre novas oportunidades de licitação diretamente no seu WhatsApp e não perca mais nenhuma chance de negócio
            </p>
            
            {/* Métricas */}
            <div ref={metricsRef} className="grid grid-cols-3 gap-4 my-8 transition-all duration-300 ease-in-out">
              <div className="text-center transition-all duration-300 p-3 rounded-lg hover:shadow-md">
                <p className="text-[#22A93A] font-bold text-2xl lg:text-3xl transition-all">+{count1}</p>
                <p className="text-sm lg:text-base text-gray-600">Editais por dia</p>
              </div>
              <div className="text-center transition-all duration-300 p-3 rounded-lg hover:shadow-md">
                <p className="text-[#22A93A] font-bold text-2xl lg:text-3xl transition-all">+{count2}</p>
                <p className="text-sm lg:text-base text-gray-600">Modalidades</p>
              </div>
              <div className="text-center transition-all duration-300 p-3 rounded-lg hover:shadow-md">
                <p className="text-[#22A93A] font-bold text-2xl lg:text-3xl transition-all">+{count3}</p>
                <p className="text-sm lg:text-base text-gray-600">Minut. economiz.</p>
              </div>
            </div>
            
            {/* Botões de ação */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-10 lg:mb-0">
              <a
                href="#planos"
                className="btn-primary text-center w-auto"
                onClick={() => trackAddToWishlist('Comecar Agora Hero')}
              >
                Começar Agora
              </a>
              <button 
                className="btn-secondary text-center" 
                onClick={() => {
                  onOpenDemoVideo();
                  trackViewContent('Ver Demonstração');
                }}
              >
                Ver Demonstração
              </button>
            </div>
          </div>
          
          {/* Lado direito com o chat do WhatsApp (em desktop) */}
          <div className="lg:w-1/2 flex justify-center">
            <WhatsAppChat />
          </div>
        </div>
      </div>
    </div>
  );
} 
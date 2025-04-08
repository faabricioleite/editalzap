"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import WhatsAppChat from './WhatsAppChat';

export default function Hero({ onOpenDemoVideo }) {
  // Estados para as animações de contagem
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const animationStarted = useRef(false);
  const metricsRef = useRef(null);
  
  // Valores finais
  const finalCount1 = 1400;
  const finalCount2 = 96;
  const finalCount3 = 240;

  useEffect(() => {
    // Animação de contagem
    const startCountAnimation = () => {
      if (animationStarted.current) return;
      animationStarted.current = true;
      
      // Iniciar contagem a partir de valores mais pequenos
      setCount1(0);
      setCount2(0);
      setCount3(0);
      
      // Configuração da animação
      const duration = 1300; // 1.3 segundos
      const steps = 25; // Número de etapas
      const intervalTime = duration / steps;
      
      // Função para gerar números aleatórios crescentes para uma sensação de contagem
      const getStepValue = (step, finalValue) => {
        const progress = step / steps;
        // Comece com números pequenos e vá aumentando
        return Math.floor(finalValue * Math.min(progress * 1.5, 1));
      };
      
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        
        if (currentStep < steps) {
          // Durante a animação, exibe números crescendo
          setCount1(getStepValue(currentStep, finalCount1));
          setCount2(getStepValue(currentStep, finalCount2));
          setCount3(getStepValue(currentStep, finalCount3));
        } else {
          // No final da animação, exibe os valores finais
          setCount1(finalCount1);
          setCount2(finalCount2);
          setCount3(finalCount3);
          clearInterval(timer);
        }
      }, intervalTime);
      
      return () => clearInterval(timer);
    };

    // Criar o Intersection Observer para detectar quando as métricas ficam visíveis
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCountAnimation();
          observer.disconnect(); // Desconectar após iniciar a animação
        }
      },
      { threshold: 0.1 } // Gatilho quando pelo menos 10% do elemento estiver visível
    );

    // Observar o elemento de métricas
    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []); // Executar apenas uma vez na montagem
  
  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-4">
        {/* Layout flexível para desktop e mobile */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Lado esquerdo com textos e botões (em desktop) */}
          <div className="lg:w-1/2 lg:pr-8 mb-12 lg:mb-0">
            {/* Badge - Acima do título */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="badge w-auto text-center md:text-left">
                <span className="mr-2">📲</span>
                <span className="text-sm">Receba alertas de licitações no seu WhatsApp</span>
              </div>
            </div>
            
            {/* Título principal - Corrigindo o problema do ç sendo cortado */}
            <h1 className="text-center lg:text-left text-4xl sm:text-5xl md:text-6xl font-bold text-[#333333] mb-6 leading-tight">
              Fique por dentro das <span className="green-gradient-text">licitações</span> <br className="hidden md:block" />todos os dias
            </h1>
            
            {/* Subtítulo */}
            <p className="text-center lg:text-left text-lg md:text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 mb-8">
              Receba alertas diários sobre novas oportunidades de licitação diretamente 
              no seu WhatsApp e não perca mais nenhuma chance de negócio
            </p>
            
            {/* Botões de ação */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-10 lg:mb-0">
              <a
                href="https://wa.link/x9ikpi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center w-auto"
              >
                Começar Agora
              </a>
              <button className="btn-secondary text-center" onClick={onOpenDemoVideo}>
                Ver Demonstração
              </button>
            </div>
          </div>
          
          {/* Lado direito com o chat do WhatsApp (em desktop) */}
          <div className="lg:w-1/2 flex justify-center">
            <WhatsAppChat />
          </div>
        </div>
        
        {/* Métricas com animação */}
        <div 
          ref={metricsRef}
          className="flex flex-col md:flex-row justify-center md:space-x-12 mt-12 space-y-6 md:space-y-0"
        >
          <div className="text-center">
            <div className="text-4xl font-bold green-gradient-text transition-all duration-200">+{count1}</div>
            <div className="text-[#333333]">Nichos Diferentes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold green-gradient-text transition-all duration-200">{count2}%</div>
            <div className="text-[#333333]">Municípios Registrados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold green-gradient-text transition-all duration-200">+{count3}</div>
            <div className="text-[#333333]">Portais de Compras</div>
          </div>
        </div>
      </div>
    </div>
  );
} 
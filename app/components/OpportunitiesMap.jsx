"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function OpportunitiesMap() {
  const [activeBadge, setActiveBadge] = useState(0);
  
  const alertBadges = [
    { 
      id: 1, 
      text: "Pregão Eletrônico em São Paulo", 
      value: "R$ 1.5M",
      position: "top-1/4 left-[75%]"
    },
    { 
      id: 2, 
      text: "Concorrência no Rio Grande do Sul", 
      value: "R$ 800K",
      position: "bottom-[20%] right-[-30%]"
    },
    { 
      id: 3, 
      text: "Dispensa em Minas Gerais", 
      value: "R$ 50K",
      position: "bottom-[38%] right-[20%]"
    },
    { 
      id: 4, 
      text: "Diálogo Competitivo na Bahia", 
      value: "R$ 2.2M",
      position: "top-1/3 left-10"
    }
  ];

  // Anima os badges sequencialmente
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBadge((prev) => (prev + 1) % alertBadges.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Badge superior */}
        <div className="flex justify-center mb-8">
          <div className="badge">
            <span className="mr-2">🎯</span>
            <span className="text-sm">Oportunidades em todo o território nacional</span>
          </div>
        </div>

        {/* Título e Subtítulo */}
        <div className="text-center max-w-4xl mx-auto mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Alertas de licitações em <span className="green-gradient-text">todos os Estados</span>
          </h2>
          <p className="text-lg text-gray-600">
            Cobertura completa da Lei 14.133/2021: Pregão, Concorrência, Diálogo Competitivo, 
            Dispensa e muito mais. Oportunidades para todos os CNAEs em todo o Brasil.
          </p>
        </div>

        {/* Container do Mapa */}
        <div className="relative max-w-5xl mx-auto -mt-16">
          {/* Efeito de Blur Gradiente */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-[#22A93A]/10 via-[#60D669]/5 to-transparent rounded-full blur-3xl -z-10"></div>

          {/* Mapa do Brasil */}
          <div className="relative w-full max-w-xl mx-auto">
            <div className="aspect-w-4 aspect-h-5 relative">
              <Image
                src="/images/vecteezy_drawing-of-brazil-map_22944443.png"
                alt="Mapa do Brasil"
                fill
                className="object-contain transition-all duration-500 hover:opacity-90 [filter:brightness(0)_sepia(1)_hue-rotate(90deg)_saturate(150%)]"
                priority
              />
            </div>

            {/* Badges de Alertas */}
            {alertBadges.map((badge, index) => (
              <div
                key={badge.id}
                className={`absolute ${badge.position} transform -translate-x-1/2 -translate-y-1/2 ${
                  index === activeBadge ? 'scale-110 z-20' : 'scale-100 z-10'
                } transition-all duration-500`}
              >
                <div className={`bg-white rounded-lg shadow-lg p-2 md:p-3 border border-gray-100 min-w-[160px] md:min-w-[220px] ${
                  index === activeBadge ? 'animate-pulse' : ''
                }`}>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#22A93A] rounded-full animate-ping"></div>
                    <p className="text-xs md:text-sm font-medium whitespace-nowrap">{badge.text}</p>
                  </div>
                  <p className="text-[#22A93A] text-sm md:text-base font-bold mt-1">{badge.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
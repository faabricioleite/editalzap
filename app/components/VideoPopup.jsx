"use client";

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function VideoPopup({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é dispositivo móvel
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Verificar no carregamento inicial
    checkMobile();
    
    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkMobile);
    
    // Limpar listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevenir rolagem quando o popup estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setIsPlaying(false); // Reset do estado de reprodução ao fechar
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Fechar ao pressionar ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
        setIsPlaying(false); // Reset do estado de reprodução ao fechar com ESC
      }
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Determinar qual URL do Vimeo usar baseado no dispositivo
  const getVimeoUrl = () => {
    return isMobile 
      ? "https://player.vimeo.com/video/1074966168?autoplay=1&title=0&byline=0&portrait=0"
      : "https://player.vimeo.com/video/1074965689?autoplay=1&title=0&byline=0&portrait=0";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background com blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={() => {
          onClose();
          setIsPlaying(false); // Reset do estado de reprodução ao fechar clicando fora
        }}
      />
      
      {/* Container do vídeo */}
      <div className={`relative z-10 w-full mx-4 bg-black rounded-xl shadow-2xl overflow-hidden ${isMobile ? 'max-w-md' : 'max-w-4xl'}`}>
        {/* Botão de fechar */}
        <button 
          onClick={() => {
            onClose();
            setIsPlaying(false); // Reset do estado de reprodução ao fechar com o botão X
          }}
          className="absolute top-3 right-3 z-20 p-1 bg-white/80 hover:bg-white rounded-full text-gray-800"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>
        
        {/* Container com aspect ratio */}
        <div className={`relative w-full ${isMobile ? 'pt-[177.78%]' : 'pt-[56.25%]'}`}>
          {!isPlaying ? (
            // Thumbnail com botão de play
            <div 
              className="absolute inset-0 cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src="/images/Thumbnail do EditalZap.png"
                alt="Thumbnail do vídeo"
                className="w-full h-full object-cover"
              />
              {/* Botão de play customizado */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-[#22A93A] border-b-[15px] border-b-transparent ml-2" />
                </div>
              </div>
            </div>
          ) : (
            // Iframe do Vimeo
            <iframe
              className="absolute inset-0 w-full h-full"
              src={getVimeoUrl()}
              title="Demonstração EditalZap"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
            />
          )}
        </div>
      </div>
    </div>
  );
} 
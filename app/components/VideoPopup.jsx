"use client";

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function VideoPopup({ isOpen, onClose }) {
  // Prevenir rolagem quando o popup estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Fechar ao pressionar ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background com blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Container do vídeo */}
      <div className="relative z-10 w-full max-w-4xl mx-4 bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Botão de fechar */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-1 bg-white/80 hover:bg-white rounded-full text-gray-800"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>
        
        {/* Iframe do YouTube com aspect ratio */}
        <div className="relative pt-[56.25%] w-full">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/FygW67tPeqk?autoplay=1"
            title="Demonstração EditalZap"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
} 
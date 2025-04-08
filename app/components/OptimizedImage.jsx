"use client";

import React from 'react';
import Image from 'next/image';

/**
 * Componente wrapper para Image do Next.js que ajusta os caminhos
 * para funcionar corretamente no GitHub Pages ou domínio personalizado
 */
export default function OptimizedImage(props) {
  const { src, ...rest } = props;
  
  // Ajusta a URL para caminhos relativos
  const getCorrectSrc = (imageSrc) => {
    // Se já é uma URL completa, retorna como está
    if (imageSrc.startsWith('http')) {
      return imageSrc;
    }
    
    // Verifica se estamos usando domínio personalizado através de variável de ambiente
    const isCustomDomain = typeof window !== 'undefined' && 
      (window.location.hostname === 'editalzap.com.br' || 
       window.location.hostname === 'www.editalzap.com.br');
    
    // Se estamos em produção (GitHub Pages) e não estamos em domínio personalizado, adicione o prefixo
    const isProduction = process.env.NODE_ENV === 'production';
    if (isProduction && !isCustomDomain) {
      // Remove a barra inicial se existir para evitar caminhos duplos
      const cleanPath = imageSrc.startsWith('/') ? imageSrc.substring(1) : imageSrc;
      return `/editalzap/${cleanPath}`;
    }
    
    return imageSrc;
  };
  
  return <Image {...rest} src={getCorrectSrc(src)} />;
} 
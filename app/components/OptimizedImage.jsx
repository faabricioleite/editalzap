"use client";

import React from 'react';
import Image from 'next/image';

/**
 * Componente wrapper para Image do Next.js que ajusta os caminhos
 * para funcionar corretamente no GitHub Pages
 */
export default function OptimizedImage(props) {
  const { src, ...rest } = props;
  
  // Ajusta a URL para caminhos relativos
  const getCorrectSrc = (imageSrc) => {
    // Se já é uma URL completa, retorna como está
    if (imageSrc.startsWith('http')) {
      return imageSrc;
    }
    
    // Se estamos em produção (GitHub Pages), adicione o prefixo
    const isProduction = process.env.NODE_ENV === 'production';
    if (isProduction) {
      // Remove a barra inicial se existir para evitar caminhos duplos
      const cleanPath = imageSrc.startsWith('/') ? imageSrc.substring(1) : imageSrc;
      return `/editalzap/${cleanPath}`;
    }
    
    return imageSrc;
  };
  
  return <Image {...rest} src={getCorrectSrc(src)} />;
} 
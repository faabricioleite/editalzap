"use client";

import React from 'react';
import Image from 'next/image';

/**
 * Componente wrapper para Image do Next.js que utiliza
 * automaticamente o basePath e assetPrefix configurados no next.config.js
 */
export default function OptimizedImage(props) {
  // Apenas repassa as props para o componente Image do Next.js
  // A lógica de basePath/assetPrefix é tratada automaticamente pelo Next.js
  return <Image {...props} />;
} 
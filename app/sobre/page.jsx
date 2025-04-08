"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import VideoPopup from '../components/VideoPopup';
import WhatsAppChat from '../components/WhatsAppChat';
import OptimizedImage from '../components/OptimizedImage';
import { MapPin, Mail, Phone, CheckCircle, Target, Users, Sparkles } from 'lucide-react';

export default function Sobre() {
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
      {/* Navbar fixa centralizada - EXATAMENTE IGUAL À PÁGINA PRINCIPAL */}
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
          
          <Link href="/#funcionalidades" className="text-[#333333] hover:text-gray-900 text-sm hidden md:inline-block">
            Funcionalidades
          </Link>
          
          <Link href="/#planos" className="text-[#333333] hover:text-gray-900 text-sm hidden md:inline-block">
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
          
          <Link href="/sobre" className="text-[#333333] hover:text-gray-900 text-sm hidden md:inline-block">
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

      {/* Conteúdo da página Sobre */}
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Seção de Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre a <span className="green-gradient-text">EditalZap</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Transformando o acesso às licitações públicas através da tecnologia
            </p>
          </div>
          
          {/* Seção Nossa História */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#333333]">Nossa História</h2>
              <div className="space-y-4 text-gray-600">
                <p>A Guia da Licitação Soluções Ltda. surgiu em 2024 com uma visão clara: democratizar o acesso às licitações públicas no Brasil.</p>
                <p>Em pouco tempo, conquistamos milhares de usuários ativos em nossos produtos, que confiam em nossas soluções para se manterem competitivos no mercado de licitações.</p>
                <p>Um de nossos produtos, o EditalZap, está revolucionando a forma como empresas monitoram oportunidades de licitação, trazendo a simplicidade do WhatsApp para um processo tradicionalmente complexo.</p>
                <p>Além disso, estamos desenvolvendo o LicitaIA, uma solução inovadora que combina Inteligência Artificial com o processo licitatório para tornar a participação em licitações ainda mais eficiente.</p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <WhatsAppChat />
            </div>
          </div>
          
          {/* Seção Missão, Visão, Valores */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#333333]">
              Nossa Missão e Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-12 bg-gradient-to-r from-[#22A93A] to-[#1A8A2E] rounded-full flex items-center justify-center mb-4">
                  <Target className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#333333]">Missão</h3>
                <p className="text-gray-600">
                  Democratizar o acesso às licitações públicas, tornando o processo mais eficiente e acessível através da tecnologia.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-12 bg-gradient-to-r from-[#22A93A] to-[#1A8A2E] rounded-full flex items-center justify-center mb-4">
                  <Users className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#333333]">Visão</h3>
                <p className="text-gray-600">
                  Ser a principal referência em soluções tecnológicas para licitações no Brasil, conectando empresas a oportunidades de negócios com o setor público.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-12 bg-gradient-to-r from-[#22A93A] to-[#1A8A2E] rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#333333]">Valores</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="text-[#22A93A] w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Inovação contínua</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#22A93A] w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Simplicidade e transparência</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#22A93A] w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Foco nas necessidades do cliente</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#22A93A] w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Compromisso com resultados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Nossas Soluções */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#333333]">
              Nossas Soluções
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex mb-6">
                  <div className="h-[40px]">
                    <OptimizedImage
                      src="/images/logo.svg"
                      alt="EditalZap Logo"
                      width={125}
                      height={40}
                      className="h-[40px] w-auto"
                    />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Uma solução revolucionária que envia alertas personalizados de licitações diretamente para o WhatsApp dos usuários. Com interface simples e eficiente, permite que você não perca nenhuma oportunidade de negócio.
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="text-[#22A93A] w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Alertas personalizados por palavras-chave</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#22A93A] w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Informações detalhadas sobre cada licitação</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#22A93A] w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Acesso direto aos documentos do edital</span>
                  </li>
                </ul>
                <a
                  href="https://wa.link/x9ikpi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[#22A93A] font-medium hover:underline"
                >
                  Conhecer o EditalZap →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                <div className="absolute -top-1 -right-1">
                  <div className="bg-gradient-to-r from-[#22A93A] to-[#1A8A2E] text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                    Em breve
                  </div>
                </div>
                <div className="flex mb-6">
                  <div className="h-[40px]">
                    <OptimizedImage
                      src="/images/licitaia.svg"
                      alt="LicitaIA Logo"
                      width={150}
                      height={40}
                      className="h-[40px] w-auto"
                    />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Nossa nova solução que combina o poder da Inteligência Artificial com o processo de licitações públicas. A LicitaIA auxilia empresas a encontrar, analisar e preparar propostas para licitações de forma mais eficiente.
                </p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="text-[#22A93A] w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Análise inteligente de editais</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#22A93A] w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Elaboração de documentos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-[#22A93A] w-4 h-4 mr-2 flex-shrink-0" />
                    <span>Pesquisador de Preços Praticados</span>
                  </li>
                </ul>
                <span className="inline-block mt-4 text-gray-400 font-medium">
                  Aguarde novidades
                </span>
              </div>
            </div>
          </div>
          
          {/* Informações de Contato */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#333333]">
              Entre em Contato
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                  <MapPin className="text-[#22A93A] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#333333]">Localização</h3>
                  <p className="text-gray-600">Brasília, DF</p>
                  <p className="text-gray-600">CNPJ: 58.377.226/0001-96</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                  <Mail className="text-[#22A93A] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#333333]">E-mail</h3>
                  <a href="mailto:suporte@guiadalicitacao.com.br" className="text-[#22A93A] hover:underline">
                    suporte@guiadalicitacao.com.br
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                  <Phone className="text-[#22A93A] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#333333]">WhatsApp</h3>
                  <p className="text-gray-600">Suporte: (61) 99510-1582</p>
                  <p className="text-gray-600">Planos/Assinaturas: (61) 3142-1574</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <a
                href="https://wa.link/txu832"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar com nosso time
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer onOpenDemoVideo={openVideoPopup} />
      
      {/* Popup de vídeo */}
      <VideoPopup isOpen={isVideoPopupOpen} onClose={closeVideoPopup} />
    </main>
  );
} 
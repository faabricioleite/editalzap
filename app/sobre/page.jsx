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
                <a
                  href="https://www.licitaia.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[#22A93A] font-medium hover:underline"
                >
                  Conhecer o LicitaIA →
                </a>
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
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                  <Mail className="text-[#22A93A] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#333333]">Email</h3>
                  <a href="mailto:contato@editalzap.com.br" className="text-gray-600 hover:underline">
                    contato@editalzap.com.br
                  </a>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                  <Phone className="text-[#22A93A] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#333333]">WhatsApp</h3>
                  <a 
                    href="https://wa.link/txu832" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:underline"
                  >
                    Clique para conversar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Popup Component */}
      <VideoPopup isOpen={isVideoPopupOpen} onClose={closeVideoPopup} />
      
      {/* Footer */}
      <Footer onOpenDemoVideo={openVideoPopup} />
    </main>
  );
} 
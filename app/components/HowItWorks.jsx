"use client";

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, Clock4, Search, Smartphone, Bell, ArrowUpRight } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-[#22A93A]" />,
      title: "Escolha seu plano",
      description: "Selecione o plano ideal baseado no número de palavras-chave para monitorar."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#22A93A]" />,
      title: "Cadastre seu WhatsApp",
      description: "Cadastre seu número para receber as notificações diárias de licitações."
    },
    {
      icon: <Search className="w-6 h-6 text-[#22A93A]" />,
      title: "Configure seu Termo",
      description: "Defina palavras-chave do seu nicho para receber alertas relevantes."
    },
    {
      icon: <Bell className="w-6 h-6 text-[#22A93A]" />,
      title: "Alertas todos os dias",
      description: "Todo dia às 9h você receberá novas oportunidades no WhatsApp."
    }
  ];

  // Exemplo de mensagem que será recebida
  const exampleMessage = {
    number: "Pregão Eletrônico Nº 123/2024",
    object: "Aquisição de equipamentos de informática para atender as necessidades da Secretaria Municipal de Educação",
    value: "R$ 1.500.000,00",
    link: "pncp.gov.br/123456"
  };

  return (
    <section id="funcionalidades" className="pt-8 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Badge superior */}
        <div className="flex justify-center mb-8">
          <div className="badge">
            <span className="mr-2">⚡</span>
            <span className="text-sm">Receba alertas todo santo dia</span>
          </div>
        </div>

        {/* Título e Subtítulo */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            <span className="green-gradient-text">Simples</span> e prático de usar
          </h2>
          <p className="text-lg text-gray-600">
            Em poucos passos você começa a receber alertas personalizados de licitações 
            diretamente no seu WhatsApp. Toda configuração é pelo WhatsApp.
          </p>
        </div>

        {/* Timeline de passos */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Linha conectora */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#22A93A] to-[#60D669] -z-10"></div>
                )}
                
                {/* Card do passo */}
                <div className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-[200px] transition-all duration-300 ${
                  activeStep === index ? 'scale-105' : 'scale-100'
                }`}>
                  <div className="flex items-center mb-4">
                    <div className="mr-3 p-2 bg-[#22A93A]/10 rounded-full">
                      {step.icon}
                    </div>
                    <h3 className="font-semibold text-lg leading-tight">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preview da mensagem */}
        <div className="max-w-md mx-auto">
          {/* Card Container */}
          <div className="relative bg-white rounded-[32px] shadow-2xl p-1.5 transform hover:scale-102 transition-all duration-300">
            {/* Blur Effect Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#22A93A]/20 to-[#60D669]/20 rounded-[40px] blur-xl -z-10"></div>
            
            {/* Header */}
            <div className="bg-[#004D40] rounded-t-[28px] p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Image 
                      src="/images/icon-logo.svg"
                      alt="EditalZap"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="absolute -right-1 -bottom-1 w-5 h-5 bg-[#22A93A] rounded-full flex items-center justify-center">
                    <Bell className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold">EditalZap</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#22A93A] rounded-full"></div>
                    <p className="text-xs text-white/80">Alerta de Licitação</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center text-white/60 text-sm">
                <Clock4 className="w-4 h-4 mr-1.5" />
                09:00
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              {/* Title Section */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#22A93A]/10 flex items-center justify-center">
                  <span className="text-lg">🔔</span>
                </div>
                <div>
                  <p className="text-[#22A93A] font-medium text-sm">Nova Licitação</p>
                  <h4 className="text-gray-900 font-bold">Pregão Eletrônico Nº 123/2025</h4>
                </div>
              </div>

              {/* Details Card */}
              <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-gray-500">OBJETO</p>
                  <p className="text-sm text-gray-800">Aquisição de equipamentos de informática para atender as necessidades da Secretaria Municipal de Educação</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <div>
                    <p className="text-xs font-medium text-gray-500">VALOR ESTIMADO</p>
                    <p className="text-lg font-bold text-[#22A93A]">R$ 1.500.000,00</p>
                  </div>
                  <button className="flex items-center gap-2 bg-[#004D40] text-white px-4 py-2 rounded-xl hover:bg-[#00352c] transition-colors">
                    Ver no PNCP
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#22A93A] rounded-full animate-pulse"></div>
                  <p className="text-xs text-gray-500">Publicado agora</p>
                </div>
                <div className="flex items-center text-[#34B7F1] text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  Lido
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
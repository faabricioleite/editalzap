'use client';

import { useState } from 'react';
import { Check, Zap, Shield } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Zap Iniciante",
      price: "20",
      keywords: 1,
      link: "https://pay.hotmart.com/N99533605Q?off=wou6rwwc&checkoutMode=10",
      popular: false
    },
    {
      name: "Zap Essencial",
      price: "37",
      keywords: 3,
      link: "https://pay.hotmart.com/N99533605Q?off=hx1joq4n&checkoutMode=10",
      popular: true
    },
    {
      name: "Zap Avançado",
      price: "47",
      keywords: 5,
      link: "https://pay.hotmart.com/N99533605Q?off=7rgynj0d&checkoutMode=10",
      popular: false
    },
    {
      name: "Zap Empresarial",
      price: "67",
      keywords: 10,
      link: "https://pay.hotmart.com/N99533605Q?off=6xep6rft&checkoutMode=10",
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Badge superior */}
        <div className="flex justify-center mb-8">
          <div className="badge">
            <span className="mr-2">💸</span>
            <span className="text-sm">Planos para todos os portes</span>
          </div>
        </div>

        {/* Título e Subtítulo */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Planos do <span className="green-gradient-text">EditalZap</span>
          </h2>
          <p className="text-lg text-gray-600">
            Cada plano permite cadastrar um número específico de palavras-chave.
            <br />
            Quanto mais palavras, mais chances de encontrar editais do seu interesse!
          </p>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Blur Effect para o plano popular */}
              {plan.popular && (
                <div className="absolute -inset-4 bg-gradient-to-r from-[#22A93A]/20 to-[#60D669]/20 rounded-[40px] blur-xl -z-10"></div>
              )}

              {/* Card do Plano */}
              <div className={`relative bg-white rounded-3xl p-6 transition-all duration-300 ${
                plan.popular ? 'border-2 border-[#22A93A] shadow-2xl scale-105' : 'border border-gray-100 shadow-lg'
              } ${hoveredPlan === index ? 'transform -translate-y-2' : ''}`}>
                {/* Tag Popular */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-[#22A93A] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      Popular
                    </div>
                  </div>
                )}

                {/* Conteúdo do Card */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-sm text-gray-500">R$</span>
                    <span className="text-4xl font-bold text-[#22A93A]">{plan.price}</span>
                    <span className="text-sm text-gray-500">/mês</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#22A93A]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#22A93A]" />
                    </div>
                    <span className="text-gray-600">
                      {plan.keywords} {plan.keywords === 1 ? 'palavra-chave' : 'palavras-chave'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#22A93A]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#22A93A]" />
                    </div>
                    <span className="text-gray-600">Alertas diários</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#22A93A]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#22A93A]" />
                    </div>
                    <span className="text-gray-600">Suporte via WhatsApp</span>
                  </div>
                </div>

                {/* Botão */}
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-4 rounded-xl text-center font-medium transition-colors ${
                    plan.popular
                      ? 'bg-[#22A93A] text-white hover:bg-[#1b8830]'
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Começar Agora
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Garantia e Cancelamento */}
        <div className="text-center max-w-3xl mx-auto mt-8">
          <div className="flex flex-col items-center justify-center gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#22A93A]/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#22A93A]" />
              </div>
              <p className="text-lg text-gray-600">
                <span className="font-semibold text-[#22A93A]">Garantia de 7 dias</span> e você pode 
                <span className="font-semibold text-[#22A93A]"> cancelar a qualquer momento</span> sem burocracia
              </p>
            </div>
            
            {/* Informação sobre pagamento Hotmart */}
            <div className="flex flex-col items-center gap-3 w-full">
              <p className="text-gray-600 text-center">
                Pagamento 100% seguro processado pela <span className="font-semibold text-[#22A93A]">Hotmart</span>, 
                plataforma líder em vendas de produtos digitais na América Latina.
              </p>
              <OptimizedImage 
                src="/images/payment.svg" 
                alt="Métodos de pagamento aceitos" 
                width={400}
                height={64}
                className="h-8 mt-2" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
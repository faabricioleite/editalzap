'use client';

import { useState } from 'react';
import { Check, Zap, Shield } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { trackTikTokInitiateCheckout } from '../utils/tiktokEvents';
import { trackInitiateCheckout as trackMetaInitiateCheckout } from '../utils/pixelEvents';

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
    <>
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
            Escolha e ative seu plano <span className="green-gradient-text">em um minuto</span>
            </h2>
            <p className="text-lg text-gray-600">
            Quanto mais palavras você monitora, mais chances de encontrar editais que dão lucro pra sua empresa.
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
                    onClick={() => {
                      trackMetaInitiateCheckout(plan.name, { value: parseFloat(plan.price) });
                      trackTikTokInitiateCheckout(plan.name, { value: parseFloat(plan.price), currency: 'BRL' });
                    }}
                  >
                    Testar por 7 dias
                  </a>
                  <p className="text-center text-xs italic text-gray-500 mt-2">Cancele quando quiser</p>
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

      {/* Botão Flutuante WhatsApp */}
      <a
        href="https://wa.link/x9ikpi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-[#22A93A] to-[#60D669] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Contatar pelo WhatsApp"
      >
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 308 308"
          xmlSpace="preserve"
          className="w-8 h-8 text-white fill-current"
        >
          <g id="XMLID_468_">
            <path
              id="XMLID_469_"
              d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
            />
            <path
              id="XMLID_470_"
              d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
            />
          </g>
        </svg>
      </a>
    </>
  );
}
"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Como funciona o monitoramento de licitações?",
      answer: "O EditalZap monitora automaticamente diversos portais de compras públicas em busca de licitações que contenham suas palavras-chave. Quando encontramos uma oportunidade que corresponde aos seus critérios, enviamos imediatamente um alerta via WhatsApp."
    },
    {
      question: "Receberei alertas todos os dias?",
      answer: "Dependerá da palavra-chave que você cadastrou. Se a palavra-chave for muito comum, você receberá diversos alertas no dia. Tente cadastrar a palavra-chave com mais frequência dentro do seu nicho para receber mais alertas."
    },
    {
      question: "Quais informações recebo nos alertas?",
      answer: "Você recebe todas as informações essenciais: número da licitação, objeto detalhado, valor estimado, data de abertura e um link direto para acessar o edital completo no Portal Nacional de Contratações Públicas (PNCP)."
    },
    {
      question: "Posso alterar minhas palavras-chave depois?",
      answer: "Sim! Você pode cadastrar e alterar suas palavras-chave a qualquer momento através do nosso WhatsApp, basta solicitar a alteração. Com isso, você poderá adaptar o monitoramento conforme suas necessidades mudam."
    },
    {
      question: "Em quais horários recebo os alertas?",
      answer: "Os alertas são enviados diariamente às 9h da manhã, consolidando todas as novas oportunidades encontradas nas últimas 24 horas."
    },{
      question: "Como faço para atualizar a minha assinatura?",
      answer: "A atualização é simples e pode ser feito a qualquer momento através do nosso WhatsApp, basta solicitar a alteração. A diferença proporcional será cobrada automaticamente do mesmo cartão utilizado para contratar o plano."
    },
    {
      question: "Como faço para cancelar a assinatura?",
      answer: "O cancelamento é simples e pode ser feito a qualquer momento através do nosso WhatsApp ou entrando em contato por e-mail: suporte@guiadalicitacao.com.br. Não há multa ou burocracia."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Badge superior */}
        <div className="flex justify-center mb-8">
          <div className="badge">
            <span className="mr-2">❓</span>
            <span className="text-sm">Dúvidas Frequentes</span>
          </div>
        </div>

        {/* Título */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Perguntas <span className="green-gradient-text">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas principais dúvidas sobre o EditalZap
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#22A93A] transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`px-6 overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-48 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
"use client";

import { useState, useEffect } from 'react';
import { CheckCheck } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

export default function WhatsAppChat() {
  const [loadingDots, setLoadingDots] = useState(true);
  const [shownMessages, setShownMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  const messages = [
    { 
      sender: 'bot', 
      content: 'Bom dia! 👋\nAqui estão seus alertas de licitação do dia.',
      delay: 1000
    },
    { 
      sender: 'bot', 
      content: (
        <div className="space-y-2">
          <p className="text-green-600 font-semibold">🔔 Nova Licitação</p>
          <p className="font-semibold">Pregão Eletrônico Nº 05/2025</p>
          <p>Objeto: Aquisição de equipamentos de informática</p>
          <p>Valor: R$ 1.500.000,00</p>
          <p className="text-blue-600">Ver detalhes →</p>
        </div>
      ),
      delay: 2000
    },
    {
      sender: 'user',
      content: 'Obrigado! Vou participar desta licitação.',
      delay: 1500
    }
  ];

  // Gerencia a animação de digitação e mensagens
  useEffect(() => {
    if (loadingDots) {
      const timer = setTimeout(() => {
        setLoadingDots(false);
        showNextMessage();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [loadingDots]);

  const showNextMessage = () => {
    if (shownMessages < messages.length) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setShownMessages(prev => prev + 1);
        
        if (shownMessages + 1 < messages.length) {
          setTimeout(() => {
            showNextMessage();
          }, messages[shownMessages].delay);
        }
      }, 1000);
    }
  };

  // Obter hora atual para exibir nas mensagens
  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <div className="max-w-sm mx-auto my-6">
      {/* iPhone Mockup - Moldura externa */}
      <div className="relative">
        {/* Sombra e reflexo do iPhone */}
        <div className="absolute inset-0 rounded-[55px] bg-gradient-to-b from-gray-800 to-black shadow-2xl blur-md opacity-30 transform scale-[1.02] -z-10"></div>
        
        {/* Corpo do iPhone */}
        <div className="rounded-[45px] overflow-hidden bg-black p-3 shadow-2xl border border-gray-700">
          {/* Brilho na borda */}
          <div className="absolute inset-0 rounded-[45px] bg-gradient-to-tr from-transparent via-gray-500 to-transparent opacity-20 pointer-events-none"></div>
          
          {/* Tela do iPhone */}
          <div className="bg-black relative rounded-[40px] overflow-hidden border-[2px] border-gray-800">
            {/* iPhone Dynamic Island */}
            <div className="absolute top-0 left-0 right-0 h-7 z-30">
              <div className="mx-auto w-[30%] h-7 bg-black rounded-b-2xl flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-opacity-30 bg-gray-500"></div>
                <div className="w-2 h-2 rounded-full bg-opacity-30 bg-gray-500"></div>
              </div>
            </div>
            
            {/* Status Bar */}
            <div className="h-8 bg-[#075E54] pt-1 flex justify-between items-center px-6 z-20">
              <div className="text-xs text-white">{getCurrentTime()}</div>
              <div className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                <div className="font-bold text-white text-xs">100%</div>
              </div>
            </div>
            
            {/* WhatsApp Header */}
            <div className="bg-[#075E54] pt-2 pb-3 px-4 text-white">
              <div className="flex items-center">
                <button className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
                <div className="flex items-center flex-1">
                  <div className="relative w-10 h-10 mr-3 bg-gradient-to-r from-[#22A93A] to-[#60D669] rounded-full overflow-hidden flex items-center justify-center">
                    <OptimizedImage 
                      src="/images/icon-logo.svg" 
                      alt="EditalZap Logo" 
                      width={36} 
                      height={36}
                      className="w-7 h-7"
                      priority
                    />
                  </div>
                  <div>
                    <p className="font-medium text-white">EditalZap</p>
                    <p className="text-xs text-gray-200">online</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Chat Background */}
            <div className="bg-[#E5DDD5] h-[490px] overflow-y-auto pt-2 px-3 pb-16 relative" 
                 style={{
                   backgroundImage: `url("/editalzap/images/zap-back.png")`,
                   backgroundSize: 'cover',
                   backgroundRepeat: 'repeat'
                 }}>
              
              {/* WhatsApp Info Bar */}
              <div className="bg-[#ECE5DD] rounded-lg py-1 px-3 mb-2 text-center">
                <p className="text-xs text-gray-500">Mensagens e chamadas são criptografadas de ponta-a-ponta.</p>
              </div>
              
              {/* Mensagens */}
              <div className="space-y-2 pt-1">
                {loadingDots && (
                  <div className="flex items-start pl-2 animate-fadeIn">
                    <div className="bg-white rounded-2xl rounded-tl-sm p-3 pr-4 shadow">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {!loadingDots && messages.slice(0, shownMessages).map((message, index) => (
                  <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInUp`} 
                      style={{ animationDelay: `${index * 150}ms` }}>
                    <div className={`max-w-[80%] rounded-2xl p-3 shadow ${
                      message.sender === 'user' 
                        ? 'bg-[#DCF8C6] rounded-tr-sm' 
                        : 'bg-white rounded-tl-sm'
                    }`}>
                      {typeof message.content === 'string' 
                        ? message.content.split('\n').map((text, i) => (
                            <p key={i} className="mb-1">{text}</p>
                          ))
                        : message.content
                      }
                      <div className="flex justify-end">
                        <span className="text-xs text-gray-500 mt-1">
                          {getCurrentTime()}
                          {message.sender === 'user' && (
                            <span className="ml-1">
                              <CheckCheck size={12} className="inline text-[#34B7F1]" />
                            </span>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {!loadingDots && isTyping && (
                  <div className="flex items-start pl-2 animate-fadeIn">
                    <div className="bg-white rounded-2xl rounded-tl-sm p-3 pr-4 shadow">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Input Area */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#F0F0F0] p-2">
              <div className="flex items-center">
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#707579]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <div className="flex-1 bg-white rounded-full px-4 py-2 mx-2 flex items-center">
                  <span className="text-gray-500 text-sm">Mensagem</span>
                </div>
                <button className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* iPhone Home Indicator */}
            <div className="h-8 bg-black flex justify-center items-center">
              <div className="w-28 h-1.5 rounded-full bg-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
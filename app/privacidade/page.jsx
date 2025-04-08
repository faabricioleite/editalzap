"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import VideoPopup from '../components/VideoPopup';
import OptimizedImage from '../components/OptimizedImage';

export default function Privacidade() {
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

      {/* Conteúdo da página Política de Privacidade */}
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center green-gradient-text">Política de Privacidade</h1>
            
            <div className="text-gray-700 space-y-6">
              <p className="text-sm text-gray-500 mb-8 text-center">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">1. Introdução</h2>
                <p>
                  A Guia da Licitação Soluções Ltda. (CNPJ: 58.377.226/0001-96), proprietária do serviço EditalZap, valoriza a privacidade dos usuários e está comprometida em proteger suas informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações ao utilizar nossa plataforma e serviços relacionados.
                </p>
                <p className="mt-2">
                  Ao utilizar nossos serviços, você concorda com a coleta e uso de informações de acordo com esta política. Recomendamos a leitura completa deste documento para entender nossas práticas.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">2. Informações que Coletamos</h2>
                <p>Podemos coletar os seguintes tipos de informações:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Informações pessoais:</strong> Nome, e-mail, número de telefone, dados de pagamento e outras informações que você nos fornece ao se registrar ou usar nossos serviços.</li>
                  <li><strong>Informações do WhatsApp:</strong> Mensagens, interações e conteúdos relacionados ao seu uso do serviço EditalZap via WhatsApp.</li>
                  <li><strong>Dados de uso:</strong> Informações sobre como você acessa e utiliza nossos serviços, incluindo logs, estatísticas e preferências de usuário.</li>
                  <li><strong>Dados técnicos:</strong> Endereço IP, tipo de dispositivo, configurações do navegador, localização geográfica aproximada e outros dados técnicos quando você interage com nosso site ou serviços.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">3. Como Utilizamos suas Informações</h2>
                <p>Utilizamos as informações coletadas para:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Fornecer, manter e melhorar nossos serviços de alertas de licitações.</li>
                  <li>Processar pagamentos e gerenciar sua conta.</li>
                  <li>Enviar notificações relevantes sobre licitações conforme suas palavras-chave configuradas.</li>
                  <li>Comunicar atualizações, alterações em nossos serviços e responder a solicitações.</li>
                  <li>Personalizar sua experiência e oferecer conteúdo relevante.</li>
                  <li>Analisar padrões de uso para melhorar nossos serviços.</li>
                  <li>Detectar, prevenir e resolver problemas técnicos ou de segurança.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">4. Compartilhamento de Informações</h2>
                <p>Podemos compartilhar suas informações com:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Parceiros de processamento de pagamento:</strong> Utilizamos o Stripe para processar pagamentos de forma segura.</li>
                  <li><strong>Provedores de serviço:</strong> Empresas que nos ajudam a fornecer e melhorar nossos serviços (hospedagem, análise de dados, suporte ao cliente).</li>
                  <li><strong>Requisitos legais:</strong> Quando necessário para cumprir obrigações legais ou proteger direitos.</li>
                </ul>
                <p className="mt-2">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing sem seu consentimento explícito.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">5. Segurança de Dados</h2>
                <p>
                  Implementamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. 
                  No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro, e não podemos garantir segurança absoluta.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">6. Seus Direitos</h2>
                <p>Você tem os seguintes direitos relacionados a seus dados pessoais:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Acessar, corrigir ou excluir seus dados pessoais.</li>
                  <li>Restringir ou se opor ao processamento de seus dados.</li>
                  <li>Portar seus dados para outro serviço.</li>
                  <li>Retirar seu consentimento a qualquer momento.</li>
                </ul>
                <p className="mt-2">
                  Para exercer esses direitos, entre em contato conosco através do WhatsApp (61) 3142-1574 ou envie um e-mail para suporte@guiadalicitacao.com.br.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">7. Retenção de Dados</h2>
                <p>
                  Mantemos suas informações pessoais apenas pelo tempo necessário para os fins descritos nesta política, ou conforme exigido por lei. 
                  Após esse período, suas informações serão excluídas ou anonimizadas.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">8. Cookies e Tecnologias Similares</h2>
                <p>
                  Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência, analisar o tráfego e personalizar conteúdo.
                  Você pode controlar o uso de cookies através das configurações do seu navegador, mas isso pode afetar a funcionalidade de nossos serviços.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">9. Menores de Idade</h2>
                <p>
                  Nossos serviços não são direcionados a menores de 18 anos e não coletamos intencionalmente informações pessoais de crianças e adolescentes.
                  Se descobrirmos que coletamos informações pessoais de um menor de 18 anos sem verificação de consentimento parental, tomaremos medidas para remover essas informações.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">10. Mudanças nesta Política</h2>
                <p>
                  Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas através de nosso site ou por e-mail antes que as mudanças entrem em vigor.
                  O uso contínuo de nossos serviços após as alterações constitui aceitação da nova Política de Privacidade.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">11. Contato</h2>
                <p>
                  Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou nossas práticas de dados, entre em contato conosco:
                </p>
                <div className="mt-2 space-y-1">
                  <p><strong>Guia da Licitação Soluções Ltda.</strong></p>
                  <p>CNPJ: 58.377.226/0001-96</p>
                  <p>Brasília, DF</p>
                  <p>WhatsApp: (61) 99510-1582</p>
                  <p>E-mail: suporte@guiadalicitacao.com.br</p>
                </div>
                <p className="mt-2">
                  Para questões relacionadas a planos, alterações, cancelamentos e reembolsos, entre em contato pelo WhatsApp (61) 3142-1574.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">12. Declaração sobre Publicidade</h2>
                <p className="text-sm bg-gray-50 p-4 rounded-lg">
                  Este site não é afiliado, endossado ou patrocinado pelo Facebook, Inc. FACEBOOK é uma marca registrada da empresa. Os produtos e serviços vendidos neste site não devem ser interpretados como uma promessa ou garantia de resultados. Seu sucesso depende do tempo, técnicas, conhecimento e habilidades individuais. Os resultados podem variar, e não nos responsabilizamos por suas ações.
                </p>
                <p className="mt-2 text-sm">
                  Utilizamos tráfego direto através de Meta Ads, Google Ads e outros canais de publicidade para divulgar nossos serviços.
                </p>
              </section>
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
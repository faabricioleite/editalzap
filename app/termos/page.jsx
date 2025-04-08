"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import VideoPopup from '../components/VideoPopup';
import OptimizedImage from '../components/OptimizedImage';

export default function Termos() {
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

      {/* Conteúdo da página Termos de Uso */}
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center green-gradient-text">Termos de Uso</h1>
            
            <div className="text-gray-700 space-y-6">
              <p className="text-sm text-gray-500 mb-8 text-center">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar ou usar o serviço EditalZap, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, você não poderá acessar ou utilizar nossos serviços.
                </p>
                <p className="mt-2">
                  Estes Termos de Uso constituem um acordo legal entre você e a Guia da Licitação Soluções Ltda. (CNPJ: 58.377.226/0001-96), proprietária do serviço EditalZap, estabelecida em Brasília, DF.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">2. Descrição do Serviço</h2>
                <p>
                  O EditalZap é um serviço de alertas de licitações que funciona exclusivamente via WhatsApp. Nosso serviço monitora editais de licitação e envia alertas personalizados com base nas palavras-chave configuradas pelos usuários.
                </p>
                <p className="mt-2">
                  Os alertas são enviados diariamente e incluem informações relevantes sobre oportunidades de licitação, como número do edital, objeto, valor estimado e links para mais detalhes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">3. Cadastro e Contas</h2>
                <p>Para utilizar nossos serviços, você precisa:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Ter pelo menos 18 anos de idade ou possuir autorização legal de um responsável.</li>
                  <li>Fornecer informações precisas, completas e atualizadas durante o processo de cadastro.</li>
                  <li>Manter a confidencialidade de suas credenciais de acesso.</li>
                  <li>Possuir uma conta ativa no WhatsApp no número informado durante o cadastro.</li>
                </ul>
                <p className="mt-2">
                  Você é responsável por todas as atividades que ocorrem em sua conta e concorda em notificar imediatamente o EditalZap sobre qualquer uso não autorizado da sua conta.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">4. Planos e Pagamentos</h2>
                <p>
                  O EditalZap oferece diferentes planos de assinatura, que variam de acordo com o número de palavras-chave monitoradas e outros recursos.
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Os valores e características de cada plano estão disponíveis em nosso site.</li>
                  <li>Os pagamentos são processados através do Stripe, um serviço de pagamento seguro.</li>
                  <li>As assinaturas são renovadas automaticamente até que sejam canceladas pelo usuário.</li>
                  <li>Os preços podem ser alterados mediante aviso prévio aos usuários.</li>
                </ul>
                <p className="mt-2">
                  Para gerenciar seus planos, solicitar alterações, cancelamentos ou reembolsos, entre em contato pelo WhatsApp (61) 3142-1574.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">5. Política de Cancelamento e Reembolso</h2>
                <p>
                  Você pode cancelar sua assinatura a qualquer momento seguindo estas diretrizes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Cancelamentos devem ser solicitados via WhatsApp no número (61) 3142-1574.</li>
                  <li>O cancelamento será efetivado no final do período de cobrança atual.</li>
                  <li>Não há reembolsos proporcionais para períodos parciais de assinatura.</li>
                  <li>Reembolsos podem ser concedidos em casos de problemas técnicos comprovados que impeçam o uso do serviço, a critério da administração.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">6. Uso Adequado do Serviço</h2>
                <p>
                  Ao utilizar o EditalZap, você concorda em não:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Violar leis ou regulamentos aplicáveis.</li>
                  <li>Compartilhar sua conta ou credenciais de acesso com terceiros.</li>
                  <li>Usar o serviço para distribuir spam, conteúdo ilegal ou prejudicial.</li>
                  <li>Tentar acessar, modificar ou interferir nos sistemas ou infraestrutura do EditalZap.</li>
                  <li>Realizar engenharia reversa ou tentar extrair o código-fonte da plataforma.</li>
                  <li>Usar meios automáticos para coletar dados do serviço sem autorização prévia.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">7. Propriedade Intelectual</h2>
                <p>
                  Todo o conteúdo disponibilizado no EditalZap, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade exclusiva da Guia da Licitação Soluções Ltda. ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais e tratados internacionais.
                </p>
                <p className="mt-2">
                  A reprodução, distribuição, exibição, transmissão, venda, aluguel ou utilização não autorizada do conteúdo do EditalZap é expressamente proibida e pode resultar em violação de direitos autorais, marcas registradas e outras leis aplicáveis.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">8. Limitações de Responsabilidade</h2>
                <p>
                  O EditalZap se esforça para fornecer informações precisas e atualizadas sobre licitações, mas não podemos garantir:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>A exatidão, integridade ou atualidade de todas as informações fornecidas.</li>
                  <li>Que o serviço será ininterrupto, pontual, seguro ou isento de erros.</li>
                  <li>Que os resultados obtidos com o uso do serviço serão precisos ou confiáveis.</li>
                </ul>
                <p className="mt-2">
                  Em nenhuma circunstância o EditalZap, seus diretores, funcionários ou afiliados serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes decorrentes do uso ou incapacidade de usar nossos serviços.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">9. Isenção de Garantias</h2>
                <p>
                  O serviço é fornecido no estado em que se encontra, sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que o serviço atenderá às suas expectativas ou necessidades específicas, nem que as falhas ou erros serão corrigidos.
                </p>
                <p className="mt-2">
                  O uso do EditalZap é por sua conta e risco. Quaisquer informações ou materiais obtidos através do serviço são utilizados a seu critério e responsabilidade.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">10. Modificações nos Termos</h2>
                <p>
                  Reservamo-nos o direito de modificar ou substituir estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação dos termos atualizados.
                </p>
                <p className="mt-2">
                  O uso contínuo dos serviços após a publicação dos novos termos constitui a aceitação desses termos. É sua responsabilidade verificar periodicamente os Termos de Uso para estar ciente de quaisquer alterações.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">11. Lei Aplicável</h2>
                <p>
                  Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República Federativa do Brasil, independentemente de seus conflitos de princípios legais.
                </p>
                <p className="mt-2">
                  Qualquer disputa decorrente destes termos será submetida à jurisdição exclusiva dos tribunais da cidade de Brasília, DF.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">12. Disposições Gerais</h2>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Se qualquer disposição destes Termos for considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito.</li>
                  <li>O não cumprimento de qualquer direito ou disposição destes Termos não constituirá uma renúncia a esse direito ou disposição.</li>
                  <li>A falha do EditalZap em fazer cumprir qualquer direito ou disposição destes Termos não constituirá uma renúncia a tal direito ou disposição.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">13. Contato</h2>
                <p>
                  Se você tiver dúvidas ou preocupações sobre estes Termos de Uso, entre em contato conosco:
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
                <h2 className="text-xl font-semibold mb-3 text-gray-800">14. Declaração sobre Publicidade</h2>
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
"use client";

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

export default function Footer({ onOpenDemoVideo }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B2028] text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1 - Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <OptimizedImage
                src="/images/logo-black.svg"
                alt="EditalZap"
                width={150}
                height={48}
                className="mb-3"
              />
            </Link>
            <p className="text-sm leading-relaxed opacity-80">
              Receba alertas personalizados de licitações diretamente no seu WhatsApp e nunca mais perca uma oportunidade de negócio.
            </p>
          </div>

          {/* Coluna 2 - Plataforma */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Plataforma</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#funcionalidades" className="text-sm hover:text-white transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="/#planos" className="text-sm hover:text-white transition-colors">
                  Planos e Preços
                </Link>
              </li>
              <li>
                <button 
                  onClick={onOpenDemoVideo}
                  className="text-sm hover:text-white transition-colors text-left w-auto bg-transparent border-none p-0 cursor-pointer"
                >
                  Demonstração
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sobre" className="text-sm hover:text-white transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.link/txu832"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="https://www.licitaia.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  LicitaIA
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacidade" className="text-sm hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-sm hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright e CNPJ */}
            <div className="text-sm opacity-80">
              <p>© {currentYear} EditalZap. Todos os direitos reservados.</p>
              <p className="mt-1">Guia da Licitação Soluções Ltda. CNPJ: 58.377.226/0001-96</p>
            </div>

            {/* Redes Sociais */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/guiadalicitacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/guiadalicitacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.link/txu832"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/guia-da-licita%C3%A7%C3%A3o/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
'use client';

import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { trackInitiateCheckout } from '../utils/pixelEvents';

export default function PricingCard({ 
  popular = false, 
  title, 
  price, 
  priceUnit = "mês", 
  description, 
  features,
  href
}) {
  return (
    <div className={`
      relative border rounded-xl overflow-hidden transition-all duration-300
      ${popular ? 'border-[#22A93A] transform hover:scale-105 shadow-lg' : 'border-gray-200 hover:border-[#22A93A] hover:shadow'}
    `}>
      {popular && (
        <div className="absolute top-0 right-0 bg-[#22A93A] text-white px-3 py-1 text-xs font-semibold rounded-bl">
          POPULAR
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl font-bold text-gray-900">R${price}</span>
          <span className="ml-1 text-gray-600">/{priceUnit}</span>
        </div>
        <p className="mt-2 text-gray-600">{description}</p>

        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <FaCheck className="h-5 w-5 text-[#22A93A]" />
              </div>
              <p className="ml-3 text-gray-600">{feature}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <a
            href={href}
            className={`
              block w-full text-center py-3 px-4 rounded-lg font-medium transition-all duration-300
              ${popular 
                ? 'bg-[#22A93A] text-white hover:bg-[#1e9834] shadow-md hover:shadow-lg' 
                : 'bg-white border-2 border-[#22A93A] text-[#22A93A] hover:bg-gray-50'}
            `}
            onClick={() => trackInitiateCheckout(title, { value: parseFloat(price) })}
          >
            Testar por 7 dias
          </a>
          <p className="text-center text-xs italic text-gray-500 mt-2">Cancele quando quiser</p>
        </div>
      </div>
    </div>
  );
} 
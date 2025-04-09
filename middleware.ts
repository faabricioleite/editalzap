import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Configuração do Rate Limiting
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minuto
const MAX_REQUESTS_PER_WINDOW = 100 // máximo de requisições por minuto

const ipRequestCount = new Map<string, { count: number; timestamp: number }>()

export function middleware(request: NextRequest) {
  // Obtém o IP do cliente
  const ip = request.ip ?? 'anonymous'
  const now = Date.now()

  // Limpa entradas antigas
  for (const [storedIp, data] of ipRequestCount.entries()) {
    if (now - data.timestamp > RATE_LIMIT_WINDOW) {
      ipRequestCount.delete(storedIp)
    }
  }

  // Verifica e atualiza o contador para o IP atual
  const currentData = ipRequestCount.get(ip) ?? { count: 0, timestamp: now }
  
  if (now - currentData.timestamp > RATE_LIMIT_WINDOW) {
    // Reseta o contador se passou o tempo da janela
    currentData.count = 1
    currentData.timestamp = now
  } else {
    // Incrementa o contador
    currentData.count++
  }
  
  ipRequestCount.set(ip, currentData)

  // Verifica se excedeu o limite
  if (currentData.count > MAX_REQUESTS_PER_WINDOW) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': '60',
        'Content-Type': 'text/plain',
      },
    })
  }

  // Headers de segurança adicionais
  const response = NextResponse.next()
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api/auth/* (auth routes)
     * 2. /_next/* (Next.js internals)
     * 3. /fonts/* (static font files)
     * 4. /images/* (static image files)
     * 5. /favicon.ico, /sitemap.xml (static files)
     */
    '/((?!api/auth|_next|fonts|images|favicon.ico|sitemap.xml).*)',
  ],
} 
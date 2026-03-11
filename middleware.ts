import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  // Sadece /admin yollarında çalış
  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      // Çevre değişkenlerinden al ya da varsayılanı kullan (test amaçlı)
      const validUser = process.env.ADMIN_USER || 'admin';
      const validPass = process.env.ADMIN_PASSWORD || 'admin123';

      if (user === validUser && pwd === validPass) {
        return NextResponse.next();
      }
    }

    url.pathname = '/api/auth';
    return new NextResponse('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

// Hangi yollarda çalışacağını belirle
export const config = {
  matcher: ['/admin/:path*'],
};

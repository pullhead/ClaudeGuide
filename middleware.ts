import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const COOKIE_NAME = 'pullhead-auth'
const COOKIE_VALUE = 'authenticated'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only protect /pullhead routes
  if (!pathname.startsWith('/pullhead')) {
    return NextResponse.next()
  }

  // Allow the login API route
  if (pathname === '/pullhead/login') {
    return NextResponse.next()
  }

  // Check auth cookie
  const auth = request.cookies.get(COOKIE_NAME)
  if (auth?.value === COOKIE_VALUE) {
    return NextResponse.next()
  }

  // Redirect to login page
  const loginUrl = new URL('/pullhead/login', request.url)
  loginUrl.searchParams.set('from', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/pullhead/:path*'],
}

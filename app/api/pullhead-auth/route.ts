import { NextResponse } from 'next/server'

const PULLHEAD_PASSWORD = process.env.PULLHEAD_PASSWORD || 'pullhead2026'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password === PULLHEAD_PASSWORD) {
    const response = NextResponse.json({ ok: true })
    response.cookies.set('pullhead-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })
    return response
  }

  return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
}

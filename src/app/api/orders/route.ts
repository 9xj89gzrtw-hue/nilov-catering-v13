import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, phone, email, eventType, eventDate, guestCount, message, cart } = body

  if (!name || !phone) {
    return NextResponse.json({ error: 'name and phone required' }, { status: 400 })
  }

  // Log the order (in production: save to DB + send Telegram notification)
  console.log('NEW ORDER:', JSON.stringify({
    name, phone, email, eventType, eventDate, guestCount, message,
    cart: cart || [],
    receivedAt: new Date().toISOString(),
  }))

  return NextResponse.json({
    order: { name, phone, eventType, eventDate, guestCount },
    status: 'received',
    message: 'Заявка принята. Мы свяжемся в течение 30 минут.',
  })
}

import { NextResponse } from 'next/server'
import { stats, dishes } from '@/lib/data'

export const dynamic = 'force-static'

export async function GET() {
  return NextResponse.json({
    stats: [
      { label: 'Лет опыта', value: 19, suffix: '+' },
      { label: 'Мероприятий', value: 1200, suffix: '+' },
      { label: 'Довольных гостей', value: 85000, suffix: '+' },
      { label: 'Блюд в меню', value: dishes.length, suffix: '' },
    ],
  })
}

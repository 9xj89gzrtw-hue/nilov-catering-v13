import { NextRequest, NextResponse } from 'next/server'
import { dishes } from '@/lib/data'

export const dynamic = 'force-static'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category')
  const signature = searchParams.get('signature')
  const search = searchParams.get('q')

  let filtered = dishes.filter(d => d.isAvailable !== false)
  if (category && category !== 'all') {
    const cat = dishes.find(d => d.category.slug === category)?.category.id
    if (cat) filtered = filtered.filter(d => d.categoryId === cat)
  }
  if (signature === 'true') filtered = filtered.filter(d => d.isSignature)
  if (search) filtered = filtered.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.description.toLowerCase().includes(search.toLowerCase())
  )

  filtered.sort((a, b) => Number(b.isSignature) - Number(a.isSignature) || a.name.localeCompare(b.name))
  return NextResponse.json({ dishes: filtered })
}

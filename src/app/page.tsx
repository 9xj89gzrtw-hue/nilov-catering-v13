'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { useToast } from '@/hooks/use-toast'
import { ShoppingCart, Plus, Minus, Star, Phone, ArrowRight, Check, Menu as MenuIcon, X, MapPin, Clock } from 'lucide-react'
import { dishes, menuPackages, testimonials, portfolioCases, stats, formatPrice, type Dish } from '@/lib/data'

const DISH_IMG: Record<string, string> = {
  c1: '/images/dish-canape-1.jpg', c2: '/images/dish-canape-2.jpg', c3: '/images/dish-canape-3.jpg',
  c4: '/images/dish-canape-4.jpg', c5: '/images/dish-canape-5.jpg', c6: '/images/dish-canape-6.jpg',
  c7: '/images/dish-canape-7.jpg', c8: '/images/dish-canape-8.jpg', c9: '/images/dish-canape-9.jpg',
  c10: '/images/dish-canape-10.jpg', c11: '/images/dish-canape-11.jpg', c12: '/images/dish-canape-12.jpg',
  s1: '/images/dish-salad-1.jpg', s2: '/images/dish-salad-2.jpg', s3: '/images/dish-salad-3.jpg',
  s4: '/images/dish-salad-4.jpg', s5: '/images/dish-salad-5.jpg', s6: '/images/dish-salad-6.jpg',
  s7: '/images/dish-salad-7.jpg', s8: '/images/dish-salad-8.jpg', s9: '/images/dish-salad-9.jpg', s10: '/images/dish-salad-10.jpg',
  h1: '/images/dish-hot-1.jpg', h2: '/images/dish-hot-2.jpg', h3: '/images/dish-hot-3.jpg',
  h4: '/images/dish-hot-4.jpg', h5: '/images/dish-hot-5.jpg', h6: '/images/dish-hot-6.jpg',
  h7: '/images/dish-hot-7.jpg', h8: '/images/dish-hot-8.jpg', h9: '/images/dish-hot-9.jpg', h10: '/images/dish-hot-10.jpg',
  d1: '/images/dish-dessert-1.jpg', d2: '/images/dish-dessert-2.jpg', d3: '/images/dish-dessert-3.jpg',
  d4: '/images/dish-dessert-4.jpg', d5: '/images/dish-dessert-5.jpg', d6: '/images/dish-dessert-6.jpg',
  d7: '/images/dish-dessert-7.jpg', d8: '/images/dish-dessert-8.jpg',
  b1: '/images/dish-drink-1.jpg', b2: '/images/dish-drink-2.jpg', b3: '/images/dish-drink-3.jpg',
  b4: '/images/dish-drink-4.jpg', b5: '/images/dish-drink-5.jpg', b6: '/images/dish-drink-6.jpg',
  b7: '/images/dish-drink-7.jpg', b8: '/images/dish-drink-8.jpg',
}

const PORT_IMG = ['/images/portfolio-1.jpg', '/images/portfolio-2.jpg', '/images/portfolio-3.jpg', '/images/portfolio-4.jpg', '/images/portfolio-5.jpg', '/images/portfolio-1.jpg']

const TABS = [
  { id: 'furshet', label: 'Фуршет', icon: '🥂', price: 1500 },
  { id: 'banket', label: 'Банкет', icon: '🍽️', price: 2500 },
  { id: 'wedding', label: 'Свадьба', icon: '💍', price: 3500 },
  { id: 'corporate', label: 'Корпоратив', icon: '💼', price: 1200 },
] as const

type TabId = typeof TABS[number]['id']

export default function Home() {
  const { toast } = useToast()
  const [cart, setCart] = useState<{ dish: Dish; quantity: number }[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [orderOpen, setOrderOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [tab, setTab] = useState<TabId>('furshet')
  const [form, setForm] = useState({ name: '', phone: '', eventType: 'wedding', guestCount: 50, message: '' })
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const add = (d: Dish) => {
    setCart(p => { const e = p.find(i => i.dish.id === d.id); return e ? p.map(i => i.dish.id === d.id ? { ...i, quantity: i.quantity + 1 } : i) : [...p, { dish: d, quantity: 1 }] })
    toast({ title: '✓ Добавлено', description: d.name })
  }
  const qty = (id: string, d: number) => setCart(p => p.map(i => i.dish.id === id ? { ...i, quantity: Math.max(0, i.quantity + d) } : i).filter(i => i.quantity > 0))
  const total = cart.reduce((s, i) => s + i.dish.price * i.quantity, 0)
  const count = cart.reduce((s, i) => s + i.quantity, 0)

  const submit = async () => {
    if (!form.name || !form.phone) { toast({ title: 'Имя и телефон обязательны', variant: 'destructive' }); return }
    if (!consent) { toast({ title: 'Нужно согласие (152-ФЗ)', variant: 'destructive' }); return }
    await fetch('/api/orders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, cart: cart.map(i => ({ name: i.dish.name, qty: i.quantity })) }) })
    toast({ title: '✓ Заявка отправлена!', description: 'Позвоним за 30 минут.' })
    setOrderOpen(false); setForm({ name: '', phone: '', eventType: 'wedding', guestCount: 50, message: '' })
  }

  const fd = dishes.filter(d => (d.eventTypes || ['furshet','banket','wedding','corporate']).includes(tab as any))
  const fp = menuPackages.filter(p => tab === 'furshet' ? p.type === 'furshet' : tab === 'banket' ? p.type === 'banket' : tab === 'wedding' ? p.type === 'banket' || p.type === 'furshet' : p.type === 'kofe-brejk' || p.type === 'furshet')

  return (
    <div style={{ background: '#0F0F0F', color: '#F5F5F5' }}>
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
        style={{ background: scrolled ? 'rgba(15,15,15,0.85)' : 'rgba(15,15,15,0.2)', backdropFilter: 'blur(24px)', borderBottom: scrolled ? '1px solid rgba(201,169,97,0.15)' : '1px solid transparent' }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4">
          <a href="#" className="font-serif text-lg font-bold" style={{ color: '#F5F5F5' }}>Nilov<span style={{ color: '#C9A961' }}>.</span></a>
          <nav className="hidden md:flex gap-5 text-xs uppercase tracking-wider" style={{ color: '#999' }}>
            <a href="#menu" className="hover:text-white transition-colors">Меню</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Кейсы</a>
            <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setCartOpen(true)} className="relative p-2" style={{ color: '#F5F5F5' }}>
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && <span className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 rounded-full text-[10px] font-bold flex items-center justify-center" style={{ background: '#C9A961', color: '#0F0F0F' }}>{count}</span>}
            </button>
            <button onClick={() => setOrderOpen(true)} className="hidden md:flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105 btn-shine" style={{ background: 'linear-gradient(135deg, #E4CB87, #C9A961)', color: '#0F0F0F', borderRadius: '100px' }}>Заказать</button>
            <button className="md:hidden p-2" onClick={() => setNavOpen(!navOpen)} style={{ color: '#F5F5F5' }}>{navOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}</button>
          </div>
        </div>
        {navOpen && <div className="md:hidden px-6 py-3" style={{ background: '#0F0F0F' }}><a href="#menu" onClick={() => setNavOpen(false)} className="block py-2 text-sm" style={{ color: '#999' }}>Меню</a><a href="#portfolio" onClick={() => setNavOpen(false)} className="block py-2 text-sm" style={{ color: '#999' }}>Кейсы</a><a href="#contacts" onClick={() => setNavOpen(false)} className="block py-2 text-sm" style={{ color: '#999' }}>Контакты</a></div>}
      </header>

      {/* HERO — with CSS animations */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img src="/images/hero.jpg" alt="Кейтеринг Nilov" className="absolute inset-0 w-full h-full object-cover ken-burns" style={{ filter: 'brightness(0.5)' }} fetchPriority="high" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15,15,15,0.6) 70%, rgba(15,15,15,0.95) 100%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
          <div className="slide-in-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#C9A961' }} />
              <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: '#C9A961' }}>СПб · с 2007</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4" style={{ color: '#F5F5F5' }}>
              Кейтеринг для<br/><span className="shimmer-text">особенных</span> событий
            </h1>
            <p className="text-base md:text-lg mb-6 max-w-lg" style={{ color: 'rgba(245,245,245,0.6)' }}>
              Свадьбы, корпоративы, юбилеи. 50+ блюд, прозрачные цены от 390 ₽/гость.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center justify-center gap-2 h-12 px-6 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105 btn-shine" style={{ background: 'linear-gradient(135deg, #E4CB87, #C9A961)', color: '#0F0F0F', borderRadius: '100px', boxShadow: '0 4px 20px rgba(201,169,97,0.3)' }}>
                Выбрать меню <ArrowRight className="h-4 w-4" />
              </button>
              <a href="tel:+78125551919" className="flex items-center justify-center gap-2 h-12 px-5 text-sm font-medium transition-colors hover:bg-white/10" style={{ color: '#F5F5F5', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.15)' }}>
                <Phone className="h-4 w-4" /> +7 812 555-19-19
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8">
              {stats.slice(0, 3).map((s, i) => (
                <div key={i}>
                  <div className="font-serif text-2xl font-bold" style={{ color: '#C9A961' }}>{s.value.toLocaleString('ru-RU')}{s.suffix}</div>
                  <div className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(245,245,245,0.4)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-12 md:py-16" style={{ background: '#0F0F0F' }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="animate-in mb-6">
            <h2 className="font-serif text-2xl md:text-4xl font-bold mb-1" style={{ color: '#F5F5F5' }}>Меню</h2>
            <p className="text-sm" style={{ color: '#666' }}>Выберите тип — покажем подходящие блюда</p>
          </div>

          {/* TABS */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
            {TABS.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all ${tab === t.id ? 'tab-active' : ''}`}
                style={{
                  background: tab === t.id ? 'rgba(201,169,97,0.15)' : 'rgba(255,255,255,0.03)',
                  color: tab === t.id ? '#C9A961' : '#999',
                  border: tab === t.id ? '1px solid rgba(201,169,97,0.4)' : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '100px',
                }}>
                <span>{t.icon}</span> {t.label}
                <span className="text-[10px] opacity-50">{formatPrice(t.price)}</span>
              </button>
            ))}
          </div>

          {/* PACKAGES */}
          {fp.length > 0 && (
            <div className="mb-8 stagger">
              <h3 className="text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: '#666' }}>Готовые пакеты</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {fp.map(pkg => (
                  <div key={pkg.id} className="p-4 card-hover" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="font-bold text-sm" style={{ color: '#F5F5F5' }}>{pkg.name}</h4>
                      <span className="text-[10px]" style={{ color: '#555' }}>{pkg.weightPerGuest}</span>
                    </div>
                    <div className="font-serif text-2xl font-bold mb-1" style={{ color: '#C9A961' }}>{formatPrice(pkg.pricePerGuest)}</div>
                    <div className="text-[10px] mb-3" style={{ color: '#555' }}>на гостя</div>
                    <div className="space-y-1 mb-3">{pkg.includes.slice(0, 3).map((inc, j) => (<div key={j} className="text-xs flex items-center gap-1.5" style={{ color: '#888' }}><Check className="h-3 w-3" style={{ color: '#C9A961' }} /> {inc}</div>))}</div>
                    <button onClick={() => setOrderOpen(true)} className="w-full py-2 text-xs font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]" style={{ background: 'rgba(201,169,97,0.15)', color: '#C9A961', borderRadius: '8px', border: '1px solid rgba(201,169,97,0.3)' }}>Выбрать</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DISHES — 1:1 image mapping, each dish has its OWN photo */}
          <h3 className="text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: '#666' }}>Блюда — {TABS.find(t => t.id === tab)?.label}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 stagger">
            {fd.map((dish) => {
              const inCart = cart.filter(it => it.dish.id === dish.id).reduce((s, it) => s + it.quantity, 0)
              return (
                <div key={dish.id} className="overflow-hidden dish-card card-hover" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: inCart > 0 ? '1px solid #C9A961' : '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={DISH_IMG[dish.id] || '/images/dish-canape-1.jpg'} alt={dish.name} loading="lazy" className="dish-img absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,15,15,0.8) 0%, transparent 50%)' }} />
                    {dish.isSignature && <div className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider" style={{ background: '#C9A961', color: '#0F0F0F', borderRadius: '4px' }}>Шеф</div>}
                    {inCart > 0 && <div className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-xs font-bold rounded-full" style={{ background: '#7C1D2A', color: '#FFF' }}>{inCart}</div>}
                    <div className="absolute bottom-2 left-2 right-2"><h4 className="font-bold text-sm leading-tight" style={{ color: '#F5F5F5', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>{dish.name}</h4></div>
                  </div>
                  <div className="p-2.5">
                    <p className="text-[11px] leading-snug mb-2 line-clamp-2" style={{ color: '#666' }}>{dish.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-bold" style={{ color: '#C9A961' }}>{formatPrice(dish.price)}</span>
                      <button onClick={() => add(dish)} className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold transition-transform active:scale-95" style={{ background: inCart > 0 ? 'rgba(201,169,97,0.15)' : '#C9A961', color: inCart > 0 ? '#C9A961' : '#0F0F0F', borderRadius: '6px' }}>
                        {inCart > 0 ? <><Check className="h-3 w-3" /> {inCart}</> : <><Plus className="h-3 w-3" /> Добавить</>}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* STICKY CART */}
          {count > 0 && (
            <div className="slide-up fixed bottom-0 left-0 right-0 z-30" style={{ background: 'rgba(15,15,15,0.95)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(201,169,97,0.2)' }}>
              <div className="max-w-5xl mx-auto flex items-center justify-between p-3">
                <div className="flex items-center gap-3"><ShoppingCart className="h-5 w-5" style={{ color: '#C9A961' }} /><div><div className="text-[10px] uppercase tracking-wider" style={{ color: '#555' }}>{count} блюд</div><div className="font-serif text-lg font-bold" style={{ color: '#C9A961' }}>{formatPrice(total)}</div></div></div>
                <button onClick={() => setOrderOpen(true)} className="flex items-center gap-1.5 h-10 px-5 text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105 btn-shine" style={{ background: 'linear-gradient(135deg, #E4CB87, #C9A961)', color: '#0F0F0F', borderRadius: '100px' }}>Оформить <ArrowRight className="h-3 w-3" /></button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-12 md:py-16" style={{ background: '#161616' }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="animate-in mb-6"><h2 className="font-serif text-2xl md:text-4xl font-bold mb-1" style={{ color: '#F5F5F5' }}>Кейсы</h2><p className="text-sm" style={{ color: '#666' }}>1200+ мероприятий</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 stagger">
            {portfolioCases.map((c, i) => (
              <div key={c.id} className="group cursor-pointer card-hover" onClick={() => setOrderOpen(true)}>
                <div className="relative aspect-[3/4] overflow-hidden mb-2" style={{ borderRadius: '12px' }}>
                  <img src={PORT_IMG[i % PORT_IMG.length]} alt={c.title} loading="lazy" className="dish-img absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,15,15,0.9) 0%, transparent 50%)' }} />
                  <div className="absolute bottom-0 p-3"><div className="text-[9px] uppercase tracking-wider mb-1" style={{ color: '#C9A961' }}>{c.type}</div><h3 className="font-serif text-base font-bold" style={{ color: '#F5F5F5' }}>{c.title}</h3><div className="text-[10px] mt-0.5" style={{ color: 'rgba(245,245,245,0.5)' }}>{c.guests} гостей · {c.budget}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-12 md:py-16" style={{ background: '#0F0F0F' }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="animate-in mb-6"><h2 className="font-serif text-2xl md:text-4xl font-bold mb-1" style={{ color: '#F5F5F5' }}>Отзывы</h2><div className="flex items-center gap-2"><div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#C9A961' }} />)}</div><span className="text-sm" style={{ color: '#666' }}>4.9 · 850+</span></div></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 stagger">
            {testimonials.map((t) => (
              <div key={t.id} className="p-4 h-full card-hover" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex mb-2">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" style={{ color: '#C9A961' }} />)}</div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: 'rgba(245,245,245,0.7)' }}>«{t.text}»</p>
                <div className="text-sm font-bold" style={{ color: '#F5F5F5' }}>{t.author}</div>
                <div className="text-[10px]" style={{ color: '#555' }}>{t.eventType}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-12 md:py-16" style={{ background: '#161616' }}>
        <div className="max-w-md mx-auto px-4">
          <div className="animate-in">
            <h2 className="font-serif text-2xl md:text-4xl font-bold mb-1" style={{ color: '#F5F5F5' }}>Заявка</h2>
            <p className="text-sm mb-5" style={{ color: '#666' }}>Перезвоним за 30 минут</p>
            <div className="space-y-3 p-5" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="grid grid-cols-2 gap-2">
                <div><Label className="text-[10px] mb-1 block uppercase tracking-wider" style={{ color: '#555' }}>Имя</Label><Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Анна" className="h-10" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#F5F5F5' }} /></div>
                <div><Label className="text-[10px] mb-1 block uppercase tracking-wider" style={{ color: '#555' }}>Телефон</Label><Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+7" className="h-10" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#F5F5F5' }} /></div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Select value={form.eventType} onValueChange={v => setForm({ ...form, eventType: v })}><SelectTrigger className="h-10" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#F5F5F5' }}><SelectValue /></SelectTrigger><SelectContent><SelectItem value="wedding">Свадьба</SelectItem><SelectItem value="corporate">Корпоратив</SelectItem><SelectItem value="birthday">Юбилей</SelectItem><SelectItem value="furshet">Фуршет</SelectItem></SelectContent></Select>
                <Input type="number" value={form.guestCount} onChange={e => setForm({ ...form, guestCount: parseInt(e.target.value) || 0 })} placeholder="Гостей" className="h-10" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#F5F5F5' }} />
              </div>
              <Textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Дата, пожелания..." rows={2} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#F5F5F5' }} />
              {cart.length > 0 && <div className="p-2 text-xs font-bold rounded-lg" style={{ color: '#C9A961', background: 'rgba(201,169,97,0.1)' }}><ShoppingCart className="h-3 w-3 inline mr-1" /> {count} блюд · {formatPrice(total)}</div>}
              <label className="flex items-start gap-2 cursor-pointer text-[11px]" style={{ color: '#666' }}><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-0.5" style={{ accentColor: '#C9A961' }} /><span>Согласие на обработку ПД (152-ФЗ)</span></label>
              <button onClick={submit} className="w-full h-11 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02] btn-shine" style={{ background: 'linear-gradient(135deg, #E4CB87, #C9A961)', color: '#0F0F0F', borderRadius: '100px', boxShadow: '0 4px 20px rgba(201,169,97,0.2)' }}>Отправить заявку</button>
            </div>
            <div className="flex flex-wrap gap-4 mt-5 text-xs" style={{ color: '#555' }}><a href="tel:+78125551919" className="flex items-center gap-1"><Phone className="h-3 w-3" /> +7 812 555-19-19</a><span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 9-22</span><span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> СПб, В.О., 6-я линия, 19</span></div>
          </div>
        </div>
      </section>

      <footer className="py-5 text-center" style={{ background: '#0F0F0F', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="font-serif text-base font-bold mb-1" style={{ color: '#F5F5F5' }}>Nilov<span style={{ color: '#C9A961' }}>.</span> Catering</div>
        <p className="text-[10px]" style={{ color: '#444' }}>© 2007—2026 · ООО «Нилов Кейтеринг» · ИНН 7801234567</p>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/78125551919" target="_blank" rel="noopener noreferrer" className="fixed bottom-5 left-5 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 pulse-glow" style={{ background: '#25D366' }} aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* Cart */}
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent className="w-full sm:max-w-sm flex flex-col" style={{ background: '#0F0F0F', borderLeft: '1px solid rgba(201,169,97,0.15)' }}>
          <SheetHeader><SheetTitle className="font-serif text-lg" style={{ color: '#F5F5F5' }}>Корзина · {count}</SheetTitle></SheetHeader>
          {cart.length === 0 ? <div className="flex-1 flex items-center justify-center text-center p-8" style={{ color: '#444' }}><div><ShoppingCart className="h-10 w-10 mx-auto mb-2 opacity-30" /><p className="text-sm">Пусто</p></div></div> : (
            <>
              <div className="flex-1 px-4 overflow-y-auto"><div className="space-y-2 py-3">{cart.map(it => (<div key={it.dish.id} className="flex items-center justify-between pb-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}><div className="flex-1"><div className="font-medium text-sm" style={{ color: '#F5F5F5' }}>{it.dish.name}</div><div className="text-xs" style={{ color: '#555' }}>{formatPrice(it.dish.price)} × {it.quantity}</div></div><div className="flex items-center gap-1"><button onClick={() => qty(it.dish.id, -1)} className="w-7 h-7 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}><Minus className="h-3 w-3" style={{ color: '#999' }} /></button><span className="min-w-6 text-center text-sm" style={{ color: '#F5F5F5' }}>{it.quantity}</span><button onClick={() => qty(it.dish.id, 1)} className="w-7 h-7 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}><Plus className="h-3 w-3" style={{ color: '#999' }} /></button></div></div>))}</div></div>
              <div className="border-t p-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}><div className="flex justify-between items-baseline mb-3"><span className="font-serif text-lg" style={{ color: '#F5F5F5' }}>Итого:</span><span className="font-serif text-xl font-bold" style={{ color: '#C9A961' }}>{formatPrice(total)}</span></div><button onClick={() => { setCartOpen(false); setOrderOpen(true) }} className="w-full h-11 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02] btn-shine" style={{ background: 'linear-gradient(135deg, #E4CB87, #C9A961)', color: '#0F0F0F', borderRadius: '100px' }}>Оформить</button></div>
            </>
          )}
        </SheetContent>
      </Sheet>

      {/* Order */}
      <Dialog open={orderOpen} onOpenChange={setOrderOpen}>
        <DialogContent className="max-w-md scale-in" style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }}>
          <DialogHeader><DialogTitle className="font-serif text-lg" style={{ color: '#F5F5F5' }}>Заявка</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2"><div><Label className="text-[10px] mb-1 block uppercase tracking-wider" style={{ color: '#555' }}>Имя</Label><Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Анна" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#F5F5F5' }} /></div><div><Label className="text-[10px] mb-1 block uppercase tracking-wider" style={{ color: '#555' }}>Телефон</Label><Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+7" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#F5F5F5' }} /></div></div>
            <div className="grid grid-cols-2 gap-2"><Select value={form.eventType} onValueChange={v => setForm({ ...form, eventType: v })}><SelectTrigger style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#F5F5F5' }}><SelectValue /></SelectTrigger><SelectContent><SelectItem value="wedding">Свадьба</SelectItem><SelectItem value="corporate">Корпоратив</SelectItem><SelectItem value="birthday">Юбилей</SelectItem><SelectItem value="furshet">Фуршет</SelectItem></SelectContent></Select><Input type="number" value={form.guestCount} onChange={e => setForm({ ...form, guestCount: parseInt(e.target.value) || 0 })} placeholder="Гостей" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#F5F5F5' }} /></div>
            <Textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Дата, пожелания..." rows={2} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#F5F5F5' }} />
            {cart.length > 0 && <div className="p-2 text-xs font-bold rounded-lg" style={{ color: '#C9A961', background: 'rgba(201,169,97,0.1)' }}><ShoppingCart className="h-3 w-3 inline mr-1" /> {count} блюд · {formatPrice(total)}</div>}
            <label className="flex items-start gap-2 cursor-pointer text-[11px]" style={{ color: '#666' }}><input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-0.5" style={{ accentColor: '#C9A961' }} /><span>Согласие (152-ФЗ)</span></label>
            <button onClick={submit} className="w-full h-11 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02] btn-shine" style={{ background: 'linear-gradient(135deg, #E4CB87, #C9A961)', color: '#0F0F0F', borderRadius: '100px' }}>Отправить</button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

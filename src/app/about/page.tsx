import Link from 'next/link'

export const metadata = {
  title: 'О компании — Nilov Catering',
  description: 'История, миссия, ценности Nilov Catering. 19 лет на рынке кейтеринга в Санкт-Петербурге.',
}

export default function AboutPage() {
  return (
    <article className="min-h-screen pt-32 pb-24" style={{ background: '#F5F1EA', color: '#0A0A0A' }}>
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: '#8C7E6A' }}>О компании</div>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-8">
          19 лет <em className="italic" style={{ color: '#7C1D2A' }}>гастрономии</em><br />
          в Санкт-Петербурге
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6" style={{ color: 'rgba(10,10,10,0.8)' }}>
            Nilov Catering основан в 2007 году шеф-поваром Иваном Ниловым после 10 лет работы в ресторанах
            L'Ermitage (Москва) и Marc et Pascal (Лион). За 19 лет мы провели более 1200 мероприятий
            для 85 000+ гостей — от камерных фуршетов на 20 персон до дипломатических приёмов на 500 гостей.
          </p>

          <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Наша миссия</h2>
          <p className="text-lg leading-relaxed mb-6">
            Создавать гастрономические впечатления, которые остаются в памяти дольше, чем сами мероприятия.
            Мы верим, что еда — это язык заботы, а сервировка — искусство гостеприимства.
          </p>

          <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Ценности</h2>
          <ul className="space-y-3 mb-6 list-none pl-0">
            <li className="flex gap-3"><span style={{ color: '#C9A961' }}>—</span> <span><strong>Своя ферма.</strong> Мясо, овощи и зелень — с собственного хозяйства в Ленобласти.</span></li>
            <li className="flex gap-3"><span style={{ color: '#C9A961' }}>—</span> <span><strong>Своя логистика.</strong> 6 рефрижераторов, поддержание температурного режима по СанПиН.</span></li>
            <li className="flex gap-3"><span style={{ color: '#C9A961' }}>—</span> <span><strong>Своя посуда.</strong> 4000+ единиц фарфора, стекла, столовых приборов.</span></li>
            <li className="flex gap-3"><span style={{ color: '#C9A961' }}>—</span> <span><strong>Фиксированная цена в договоре.</strong> Без скрытых наценок и доплат «по факту».</span></li>
            <li className="flex gap-3"><span style={{ color: '#C9A961' }}>—</span> <span><strong>Шеф-повар на мероприятии.</strong> Личное присутствие на каждом банкете от 50 гостей.</span></li>
          </ul>

          <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Награды</h2>
          <ul className="space-y-2 mb-6 list-none pl-0">
            <li>• Финалист Bocuse d'Or Russia 2019</li>
            <li>• «Шеф года» 2024 — гид Фемиды</li>
            <li>• Член Федерации кейтерингов России</li>
            <li>• Сертификат соответствия СанПиН 2.3/2.4.3590-20</li>
          </ul>

          <h2 className="font-serif text-3xl font-bold mt-12 mb-4">Клиенты</h2>
          <p className="mb-4">Газпром, Лента, Яндекс, Сбербанк, Ростелеком, ВТБ, X5 Group, Магнит, Тинькофф, Совкомбанк.</p>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgba(10,10,10,0.15)' }}>
          <Link href="/" className="text-sm uppercase tracking-widest hover:opacity-70">← На главную</Link>
        </div>
      </div>
    </article>
  )
}

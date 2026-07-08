import Link from 'next/link'

export const metadata = {
  title: 'Кейсы — Nilov Catering',
  description: 'Реальные мероприятия Nilov Catering 2024-2026: свадьбы, корпоративы, банкеты.',
}

const cases = [
  { id: 1, title: 'Свадьба Анны и Михаила', date: 'Июнь 2026', type: 'Свадьба · 80 гостей', location: 'Особняк Бренчевой, СПб', desc: 'Авторское меню из 8 блюд, винное сопровождение от Дмитрия Орлова, живая музыка. Шеф Иван Нилов лично руководил подачей.', image: '1519225421980-715cb0215aed' },
  { id: 2, title: 'Корпоратив IT-холдинга', date: 'Май 2026', type: 'Корпоратив · 250 гостей', location: 'Лофт «Севкабель», СПб', desc: 'Интерактивные food-станции: устричный бар, паста-станция, десерт-шоу. 12 официантов, 4 шеф-повара на площадке.', image: '1556761175-5973dc0f32e7' },
  { id: 3, title: 'Юбилей Ольги Дмитриевны', date: 'Апрель 2026', type: 'Юбилей · 40 гостей', location: 'Загородный дом, Карельский перешеек', desc: 'Камерный фуршет с акцентом на русскую гастрономию: тельное, расстегаи, паровые рыбники, ягодные морсы.', image: '1414235077428-338989a2e8c0' },
  { id: 4, title: 'Новогодний корпоратив логистики', date: 'Декабрь 2025', type: 'Корпоратив · 180 гостей', location: 'Ресторан «Мансарда», СПб', desc: 'Молекулярная кухня, авторские коктейли, шоколадный фонтан. Программа с дегустацией вин от сомелье.', image: '1551024709-8f23befc6f87' },
  { id: 5, title: 'Конференция Event-Industy', date: 'Март 2026', type: 'Конференция · 120 гостей', location: 'Отель «Тайвань», СПб', desc: 'Три кофе-брейка, бизнес-ланч, фуршет по итогам дня. Полная адаптация под веганов и людей с аллергией.', image: '1519225421980-715cb0215aed' },
  { id: 6, title: 'Дипломатический приём', date: 'Февраль 2026', type: 'Приём · 200 гостей', location: 'Особняк на Мойке, СПб', desc: 'Дипломатический протокол. Классическая русская и французская кухня, винная карта на 40 позиций.', image: '1414235077428-338989a2e8c0' },
]

export default function CasesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24" style={{ background: '#F5F1EA', color: '#0A0A0A' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: '#8C7E6A' }}>Кейсы</div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
            1200+ мероприятий<br />
            <em className="italic" style={{ color: '#7C1D2A' }}>за 19 лет</em>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(10,10,10,0.7)' }}>
            Каждый проект — отдельная история. Вот шесть недавних кейсов 2024-2026.
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((c, i) => (
            <article key={c.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={`https://images.unsplash.com/photo-${c.image}?auto=format&fit=crop&w=1200&q=85`}
                  alt={c.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 border" style={{ borderColor: 'rgba(201,169,97,0.4)' }} />
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <div className="text-xs uppercase tracking-widest mb-2" style={{ color: '#7C1D2A' }}>{c.type}</div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 leading-tight">{c.title}</h2>
                <div className="text-sm mb-4" style={{ color: '#8C7E6A' }}>{c.date} · {c.location}</div>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(10,10,10,0.75)' }}>{c.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t text-center" style={{ borderColor: 'rgba(10,10,10,0.15)' }}>
          <Link href="/" className="text-sm uppercase tracking-widest hover:opacity-70">← На главную</Link>
        </div>
      </div>
    </div>
  )
}

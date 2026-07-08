import Link from 'next/link'

export const metadata = {
  title: 'Блог — Nilov Catering',
  description: 'Статьи о кейтеринге, организации мероприятий, гастрономии.',
}

const posts = [
  { id: 1, slug: 'kak-vybrat-catering', title: 'Как выбрать кейтеринг для свадьбы: 7 критериев', excerpt: 'Выбор кейтеринга — одно из главных решений при планировании свадьбы. Рассказываем, на что смотреть: от наличия собственной фермы до медицинского контроля персонала.', date: '2026-06-28', readTime: '7 мин', image: '1519225421980-715cb0215aed' },
  { id: 2, slug: 'furshet-vs-banket', title: 'Фуршет или банкет: что выбрать для корпоратива', excerpt: 'Сравниваем два формата по бюджету, формату общения гостей, времени подготовки и конверсии в удовольствие. С конкретными цифрами на 50, 100 и 200 человек.', date: '2026-06-15', readTime: '5 мин', image: '1551183053-bf91a1d81141' },
  { id: 3, slug: 'wine-pairing', title: 'Винная карта для мероприятия: гид от сомелье', excerpt: 'Дмитрий Орлов, наш сомелье WSET Level 3, объясняет, как составить винную карту под 5 разных меню — от фуршета до дипломатического приёма.', date: '2026-05-30', readTime: '9 мин', image: '1551024709-8f23befc6f87' },
  { id: 4, slug: 'sanpin-catering', title: 'СанПиН для кейтеринга: что должна знать невеста', excerpt: 'Разбираем СанПиН 2.3/2.4.3590-20 простыми словами. Какие вопросы задать кейтерингу, чтобы убедиться, что еда на вашей свадьбе будет безопасной.', date: '2026-05-12', readTime: '6 мин', image: '1414235077428-338989a2e8c0' },
  { id: 5, slug: 'seasonal-menu', title: 'Сезонное меню: что готовить в июле', excerpt: 'Иван Нилов делится авторским меню на сезонные продукты июля: щавель, молодая картошка, лисички, черешня, клубника. С фотографиями.', date: '2026-04-28', readTime: '4 мин', image: '1467003909585-2f8a72700288' },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-24" style={{ background: '#F5F1EA', color: '#0A0A0A' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: '#8C7E6A' }}>Блог</div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
            О гастрономии<br />
            <em className="italic" style={{ color: '#7C1D2A' }}>и мероприятиях</em>
          </h1>
          <p className="text-lg" style={{ color: 'rgba(10,10,10,0.7)' }}>
            Статьи, гиды и кейсы от шеф-поваров и сомелье Nilov Catering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(p => (
            <article key={p.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden mb-4">
                <img
                  src={`https://images.unsplash.com/photo-${p.image}?auto=format&fit=crop&w=1000&q=85`}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-xs uppercase tracking-widest mb-2" style={{ color: '#8C7E6A' }}>
                {p.date} · {p.readTime}
              </div>
              <h2 className="font-serif text-2xl font-bold mb-2 leading-tight group-hover:opacity-70 transition-opacity">
                {p.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(10,10,10,0.7)' }}>{p.excerpt}</p>
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

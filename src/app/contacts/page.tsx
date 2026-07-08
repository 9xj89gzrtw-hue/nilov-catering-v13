import Link from 'next/link'

export const metadata = {
  title: 'Контакты и реквизиты — Nilov Catering',
  description: 'Адрес, телефоны, email, юридические реквизиты ООО «Нилов Кейтеринг».',
}

export default function ContactsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24" style={{ background: '#F5F1EA', color: '#0A0A0A' }}>
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: '#8C7E6A' }}>Контакты</div>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-12">
          Свяжитесь<br />
          <em className="italic" style={{ color: '#7C1D2A' }}>с нами</em>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color: '#8C7E6A' }}>Телефоны</h2>
            <a href="tel:+78125551919" className="font-serif text-2xl font-bold block mb-2 hover:opacity-70">+7 (812) 555-19-19</a>
            <a href="tel:+79110000000" className="font-serif text-2xl font-bold block hover:opacity-70">+7 (911) 000-00-00</a>
            <p className="text-sm mt-2" style={{ color: '#8C7E6A' }}>Ежедневно, 09:00–22:00</p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color: '#8C7E6A' }}>Email</h2>
            <a href="mailto:order@nilov-catering.ru" className="font-serif text-2xl font-bold block mb-2 hover:opacity-70">order@nilov-catering.ru</a>
            <a href="mailto:info@nilov-catering.ru" className="font-serif text-2xl font-bold block hover:opacity-70">info@nilov-catering.ru</a>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color: '#8C7E6A' }}>Офис и производство</h2>
          <p className="font-serif text-2xl font-bold mb-2">Санкт-Петербург,<br />Васильевский остров, 6-я линия, 19</p>
          <p className="text-sm" style={{ color: '#8C7E6A' }}>Пн–Сб 10:00–20:00 · по предварительной записи</p>
        </div>

        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold mb-4">Юридические реквизиты</h2>
          <div className="border p-6" style={{ borderColor: 'rgba(10,10,10,0.2)', background: '#FFFFFF' }}>
            <table className="w-full text-sm">
              <tbody>
                <tr><td className="py-2 pr-4" style={{ color: '#8C7E6A' }}>Полное наименование:</td><td className="py-2 font-medium">Общество с ограниченной ответственностью «Нилов Кейтеринг»</td></tr>
                <tr><td className="py-2 pr-4" style={{ color: '#8C7E6A' }}>Сокращённое:</td><td className="py-2 font-medium">ООО «Нилов Кейтеринг»</td></tr>
                <tr><td className="py-2 pr-4" style={{ color: '#8C7E6A' }}>ИНН:</td><td className="py-2 font-medium">7801234567</td></tr>
                <tr><td className="py-2 pr-4" style={{ color: '#8C7E6A' }}>КПП:</td><td className="py-2 font-medium">780101001</td></tr>
                <tr><td className="py-2 pr-4" style={{ color: '#8C7E6A' }}>ОГРН:</td><td className="py-2 font-medium">1027801234567</td></tr>
                <tr><td className="py-2 pr-4" style={{ color: '#8C7E6A' }}>Юридический адрес:</td><td className="py-2 font-medium">199004, Санкт-Петербург, 6-я линия В.О., д. 19, пом. 12-Н</td></tr>
                <tr><td className="py-2 pr-4" style={{ color: '#8C7E6A' }}>Фактический адрес:</td><td className="py-2 font-medium">199004, Санкт-Петербург, 6-я линия В.О., д. 19</td></tr>
                <tr><td className="py-2 pr-4" style={{ color: '#8C7E6A' }}>Расчётный счёт:</td><td className="py-2 font-medium">40702810900000001234</td></tr>
                <tr><td className="py-2 pr-4" style={{ color: '#8C7E6A' }}>Корр. счёт:</td><td className="py-2 font-medium">30101810500000000674</td></tr>
                <tr><td className="py-2 pr-4" style={{ color: '#8C7E6A' }}>БИК:</td><td className="py-2 font-medium">044030674</td></tr>
                <tr><td className="py-2 pr-4" style={{ color: '#8C7E6A' }}>Банк:</td><td className="py-2 font-medium">ПАО «Банк «Санкт-Петербург»</td></tr>
                <tr><td className="py-2 pr-4" style={{ color: '#8C7E6A' }}>ОКВЭД:</td><td className="py-2 font-medium">56.21 (услуги по приготовлению и доставке еды)</td></tr>
                <tr><td className="py-2 pr-4" style={{ color: '#8C7E6A' }}>Налоговая система:</td><td className="py-2 font-medium">ОСНО (с НДС)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgba(10,10,10,0.15)' }}>
          <Link href="/" className="text-sm uppercase tracking-widest hover:opacity-70">← На главную</Link>
        </div>
      </div>
    </div>
  )
}

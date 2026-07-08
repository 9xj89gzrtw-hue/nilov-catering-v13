import Link from 'next/link'

export const metadata = {
  title: 'Доставка и оплата — Nilov Catering',
  description: 'Зоны доставки, стоимость, способы оплаты, документы для юрлиц.',
}

export default function DeliveryPage() {
  return (
    <div className="min-h-screen pt-32 pb-24" style={{ background: '#F5F1EA', color: '#0A0A0A' }}>
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: '#8C7E6A' }}>Доставка и оплата</div>
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-12">
          Логистика<br />
          <em className="italic" style={{ color: '#7C1D2A' }}>и расчёты</em>
        </h1>

        <h2 className="font-serif text-3xl font-bold mb-4">Зоны доставки</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Санкт-Петербург (в пределах КАД):</strong> бесплатно при заказе от 30 000 ₽</li>
          <li><strong>Ленинградская область (до 30 км):</strong> 3 000 ₽</li>
          <li><strong>Ленинградская область (30-100 км):</strong> 6 000 ₽</li>
          <li><strong>Другие регионы РФ:</strong> по согласованию, для мероприятий от 200 гостей</li>
        </ul>

        <h2 className="font-serif text-3xl font-bold mb-4 mt-12">Сроки</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Фуршет до 30 гостей:</strong> за 3 дня</li>
          <li><strong>Банкет до 100 гостей:</strong> за 7 дней</li>
          <li><strong>Мероприятия 100-500 гостей:</strong> за 14 дней</li>
          <li><strong>Срочные заказы:</strong> по согласованию, наценка 15%</li>
        </ul>

        <h2 className="font-serif text-3xl font-bold mb-4 mt-12">Способы оплаты</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Безналичный расчёт (для юрлиц):</strong> счёт на оплату с НДС или без НДС (УСН)</li>
          <li><strong>Банковская карта:</strong> Visa, Mastercard, МИР — через защищённый платёжный шлюз</li>
          <li><strong>Наличные:</strong> при самовывозе или курьеру при доставке (лимит 100 000 ₽ по 115-ФЗ)</li>
          <li><strong>СБП (Система быстрых платежей):</strong> по QR-коду</li>
        </ul>

        <h2 className="font-serif text-3xl font-bold mb-4 mt-12">Условия предоплаты</h2>
        <ul className="space-y-3 mb-8">
          <li><strong>Предоплата 30%</strong> — при подписании договора</li>
          <li><strong>Остаток 70%</strong> — за 3 дня до мероприятия</li>
          <li><strong>Для постоянных клиентов:</strong> постоплата (после мероприятия, в течение 5 рабочих дней)</li>
        </ul>

        <h2 className="font-serif text-3xl font-bold mb-4 mt-12">Документы для юрлиц</h2>
        <p className="mb-4">Предоставляем полный пакет закрывающих документов:</p>
        <ul className="space-y-2 mb-8">
          <li>• Договор на оказание услуг</li>
          <li>• Счёт на оплату</li>
          <li>• Акт выполненных работ</li>
          <li>• Счёт-фактура (для плательщиков НДС)</li>
          <li>• УПД (универсальный передаточный документ)</li>
          <li>• Копия дипломов и медицинских книжек персонала (по запросу)</li>
        </ul>

        <h2 className="font-serif text-3xl font-bold mb-4 mt-12">Соблюдение СанПиН</h2>
        <p className="mb-4">
          Все процессы соответствуют <strong>СанПиН 2.3/2.4.3590-20 «Санитарно-эпидемиологические требования к организации общественного питания населения»</strong>:
        </p>
        <ul className="space-y-2 mb-8">
          <li>• Хранение продуктов в холодильных камерах при соблюдении температурных режимов</li>
          <li>• Транспортировка в рефрижераторах с контролем температуры</li>
          <li>• Медицинские книжки у 100% персонала</li>
          <li>• Производственный контроль качества (пробы хранятся 72 часа)</li>
          <li>• Декларации соответствия на всю продукцию</li>
        </ul>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgba(10,10,10,0.15)' }}>
          <Link href="/" className="text-sm uppercase tracking-widest hover:opacity-70">← На главную</Link>
        </div>
      </div>
    </div>
  )
}

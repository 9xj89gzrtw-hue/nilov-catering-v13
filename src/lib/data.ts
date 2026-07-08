// Nilov Catering v2 — Data layer
// All menu packages, dishes, services, testimonials, cases

export type DishCategory = 'canape' | 'salads' | 'hot' | 'desserts' | 'drinks'
export type EventType = 'furshet' | 'banket' | 'wedding' | 'corporate'

export type Dish = {
  id: string
  name: string
  description: string
  price: number
  unit: string
  weight?: string
  category: DishCategory
  eventTypes: EventType[]
  isSignature?: boolean
  dietary?: ('vegetarian' | 'vegan' | 'gluten-free')[]
}

export type MenuPackage = {
  id: string
  type: 'furshet' | 'banket' | 'kofe-brejk'
  name: string
  pricePerGuest: number
  weightPerGuest: string
  includes: string[]
  dishes: string[] // dish ids
  description: string
}

export type ServiceType = {
  id: string
  title: string
  icon: string
  priceFrom: number
  description: string
  features: string[]
}

export type AddOn = {
  id: string
  category: 'drinks' | 'decor' | 'equipment' | 'staff' | 'show' | 'logistics'
  name: string
  description: string
  priceType: 'per_guest' | 'fixed'
  price: number
}

export type Testimonial = {
  id: string
  author: string
  role: string
  text: string
  rating: number
  eventType: string
  eventDate: string
  hasVideo?: boolean
}

export type PortfolioCase = {
  id: string
  title: string
  type: string
  date: string
  guests: number
  budget: string
  location: string
  description: string
  image: string
}

// Event type metadata
export const eventTypes = [
  { id: 'furshet' as EventType, label: 'Фуршет', icon: '🥂', desc: 'Лёгкие закуски, стоячий формат', priceFrom: 1500 },
  { id: 'banket' as EventType, label: 'Банкет', icon: '🍽️', desc: 'Полный сервис, сидя за столом', priceFrom: 2500 },
  { id: 'wedding' as EventType, label: 'Свадьба', icon: '💍', desc: 'Авторское меню + координатор', priceFrom: 3500 },
  { id: 'corporate' as EventType, label: 'Корпоратив', icon: '💼', desc: 'Кофе-брейк, обеды, фуршет', priceFrom: 1200 },
]

// === 60+ dishes ===
export const dishes: Dish[] = [
  // Канапе (12)
  { id: 'c1', name: 'Канапе с красной икрой', description: 'Тост со сливочным маслом и красной икрой', price: 180, unit: 'шт', weight: '25 г', category: 'canape', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'], isSignature: true },
  { id: 'c2', name: 'Канапе с креветкой и авокадо', description: 'Тигровая креветка со спелым авокадо', price: 150, unit: 'шт', weight: '30 г', category: 'canape', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'], isSignature: true },
  { id: 'c3', name: 'Канапе с лососем и сливочным сыром', description: 'Слабосолёный лосось, сливочный сыр, укроп', price: 140, unit: 'шт', weight: '30 г', category: 'canape', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'c4', name: 'Канапе с пармской ветчиной', description: 'Пармская ветчина с дыней и мятой', price: 160, unit: 'шт', weight: '35 г', category: 'canape', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'c5', name: 'Канапе с ростбифом и хреном', description: 'Нежный ростбиф с пикантным хреном', price: 130, unit: 'шт', weight: '35 г', category: 'canape', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'c6', name: 'Канапе с камамбером и виноградом', description: 'Камамбер с виноградом и грецким орехом', price: 120, unit: 'шт', weight: '30 г', category: 'canape', dietary: ['vegetarian'] },
  { id: 'c7', name: 'Канапе с овощами гриль', description: 'Перец, цукини и баклажан гриль', price: 90, unit: 'шт', weight: '30 г', category: 'canape', dietary: ['vegan', 'vegetarian', 'gluten-free'] },
  { id: 'c8', name: 'Брускетта с томатами и базиликом', description: 'Хрустящий хлеб с томатами, моцареллой и базиликом', price: 140, unit: 'шт', weight: '40 г', category: 'canape', dietary: ['vegetarian'] },
  { id: 'c9', name: 'Тарталетки с икрой', description: 'Песочные тарталетки с красной икрой', price: 220, unit: 'шт', weight: '20 г', category: 'canape', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'], isSignature: true },
  { id: 'c10', name: 'Канапе с тартаром из говядины', description: 'Тартар из говядины с каперсами и луком', price: 200, unit: 'шт', weight: '35 г', category: 'canape', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'c11', name: 'Шашлычок из креветок', description: 'Тигровые креветки с лимоном и травами', price: 220, unit: 'шт', weight: '40 г', category: 'canape', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'], isSignature: true },
  { id: 'c12', name: 'Фруктовые шашлычки', description: 'Клубника, дыня, виноград на шпажке', price: 130, unit: 'шт', weight: '40 г', category: 'canape', dietary: ['vegan', 'vegetarian', 'gluten-free'] },

  // Салаты (10)
  { id: 's1', name: 'Салат с лососем и авокадо', description: 'Слабосолёный лосось, авокадо, микс салатов, грейпфрут', price: 580, unit: 'порция', weight: '180 г', category: 'salads', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'], isSignature: true },
  { id: 's2', name: 'Цезарь с курицей', description: 'Романо, курица, пармезан, гренки, фирменный соус', price: 480, unit: 'порция', weight: '180 г', category: 'salads', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 's3', name: 'Греческий салат', description: 'Томаты, огурцы, фета, оливки каламата, орегано', price: 450, unit: 'порция', weight: '200 г', category: 'salads', dietary: ['vegetarian', 'gluten-free'] },
  { id: 's4', name: 'Салат Нисуаз', description: 'Тунец, стручковая фасоль, оливки, перепелиное яйцо', price: 520, unit: 'порция', weight: '180 г', category: 'salads', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 's5', name: 'Салат с тигровыми креветками', description: 'Креветки, руккола, пармезан, томаты, бальзамик', price: 620, unit: 'порция', weight: '180 г', category: 'salads', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'], isSignature: true },
  { id: 's6', name: 'Тёплый салат с телятиной', description: 'Руккола, тёплая телятина, черри, пармезан', price: 540, unit: 'порция', weight: '200 г', category: 'salads', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 's7', name: 'Свекла с козьим сыром', description: 'Запечённая свекла, козий сыр, орехи, мёд', price: 480, unit: 'порция', weight: '180 г', category: 'salads', dietary: ['vegetarian', 'gluten-free'] },
  { id: 's8', name: 'Салат с ростбифом', description: 'Ростбиф, молодой картофель, маринованные огурцы', price: 560, unit: 'порция', weight: '200 г', category: 'salads', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 's9', name: 'Овощной салат с киноа', description: 'Киноа, запечённые овощи, хумус', price: 420, unit: 'порция', weight: '200 г', category: 'salads', dietary: ['vegan', 'vegetarian', 'gluten-free'] },
  { id: 's10', name: 'Капрезе', description: 'Моцарелла, томаты, базилик, оливковое масло', price: 460, unit: 'порция', weight: '180 г', category: 'salads', dietary: ['vegetarian', 'gluten-free'] },

  // Горячие блюда (10)
  { id: 'h1', name: 'Стейк рибай', description: 'Стейк рибай прожарки medium-rare с маслом трюфеля', price: 980, unit: 'порция', weight: '250 г', category: 'hot', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'], isSignature: true },
  { id: 'h2', name: 'Лосось на гриле', description: 'Филе лосося с лимонным соусом и спаржей', price: 680, unit: 'порция', weight: '200 г', category: 'hot', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'h3', name: 'Утиная грудка с апельсином', description: 'Утиная грудка с апельсиновым соусом и пюре батата', price: 720, unit: 'порция', weight: '220 г', category: 'hot', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'h4', name: 'Телятина Веллингтон', description: 'Телятина в слоёном тесте с грибным duxelles', price: 1450, unit: 'порция', weight: '280 г', category: 'hot', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'], isSignature: true },
  { id: 'h5', name: 'Куриное филе под соусом песто', description: 'Куриное филе с песто, черри и моцареллой', price: 480, unit: 'порция', weight: '220 г', category: 'hot', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'h6', name: 'Морские гребешки', description: 'Гребешки в белом вине с вялеными томатами', price: 890, unit: 'порция', weight: '180 г', category: 'hot', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'], isSignature: true },
  { id: 'h7', name: 'Овощное рагу с тофу', description: 'Тушёные овощи с тофу в томатном соусе', price: 380, unit: 'порция', weight: '250 г', category: 'hot', dietary: ['vegan', 'vegetarian'] },
  { id: 'h8', name: 'Дорада на гриле', description: 'Дорада с лимоном, розмарином и овощами', price: 620, unit: 'порция', weight: '300 г', category: 'hot', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'h9', name: 'Бефстроганов', description: 'Нежная телятина в сметанном соусе с пюре', price: 540, unit: 'порция', weight: '250 г', category: 'hot', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'h10', name: 'Паста карбонара', description: 'Спагетти с беконом, желтком и пармезаном', price: 480, unit: 'порция', weight: '250 г', category: 'hot', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },

  // Десерты (8)
  { id: 'd1', name: 'Тирамису', description: 'Классический тирамису с маскарпоне и эспрессо', price: 320, unit: 'порция', weight: '120 г', category: 'desserts', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'd2', name: 'Чизкейк Нью-Йорк', description: 'Нежный чизкейк с ягодным соусом', price: 300, unit: 'порция', weight: '130 г', category: 'desserts', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'd3', name: 'Шоколадный фондан', description: 'Тёплый шоколадный кекс с жидким центром', price: 360, unit: 'порция', weight: '120 г', category: 'desserts', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'], isSignature: true },
  { id: 'd4', name: 'Павлова с ягодами', description: 'Безе с взбитыми сливками и свежими ягодами', price: 330, unit: 'порция', weight: '140 г', category: 'desserts', dietary: ['gluten-free'] },
  { id: 'd5', name: 'Фруктовая тарелка', description: 'Сезонные фрукты на льду', price: 250, unit: 'порция', weight: '200 г', category: 'desserts', dietary: ['vegan', 'vegetarian', 'gluten-free'] },
  { id: 'd6', name: 'Панна-котта', description: 'Итальянский десерт с ягодным кули', price: 300, unit: 'порция', weight: '120 г', category: 'desserts', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'd7', name: 'Макаруны ассорти', description: 'Французские миндальные пирожные, 3 вкуса', price: 280, unit: 'порция', weight: '90 г', category: 'desserts', dietary: ['vegetarian'] },
  { id: 'd8', name: 'Авторский торт', description: 'Многослойный торт от шеф-кондитера', price: 450, unit: 'порция', weight: '150 г', category: 'desserts', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'], isSignature: true },

  // Напитки (10)
  { id: 'b1', name: 'Чёрный чай ассорти', description: 'Чёрный чай с сахаром и лимоном', price: 80, unit: 'чел', weight: '300 мл', category: 'drinks', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'b2', name: 'Зелёный чай', description: 'Зелёный чай с жасмином', price: 90, unit: 'чел', weight: '300 мл', category: 'drinks', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'b3', name: 'Кофе эспрессо', description: 'Свежесваренный эспрессо из арабики', price: 120, unit: 'чел', weight: '60 мл', category: 'drinks', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'b4', name: 'Кофе латте', description: 'Латте на молоке 3.2%', price: 150, unit: 'чел', weight: '300 мл', category: 'drinks', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'] },
  { id: 'b5', name: 'Морс клюквенный', description: 'Домашний клюквенный морс', price: 90, unit: 'чел', weight: '300 мл', category: 'drinks', dietary: ['vegan', 'vegetarian', 'gluten-free'] },
  { id: 'b6', name: 'Лимонад домашний', description: 'Лимонад с мятой и имбирём', price: 140, unit: 'чел', weight: '400 мл', category: 'drinks', dietary: ['vegan', 'vegetarian'] },
  { id: 'b7', name: 'Соки ассорти', description: 'Апельсиновый, яблочный, томатный', price: 90, unit: 'чел', weight: '200 мл', category: 'drinks', dietary: ['vegan', 'vegetarian', 'gluten-free'] },
  { id: 'b8', name: 'Минеральная вода', description: 'Газ/без газа', price: 60, unit: 'чел', weight: '500 мл', category: 'drinks', dietary: ['vegan', 'vegetarian', 'gluten-free'] },
  { id: 'b9', name: 'Винная карта', description: 'Белое, красное, игристое — подбор сомелье', price: 450, unit: 'чел', weight: '—', category: 'drinks', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'], isSignature: true },
  { id: 'b10', name: 'Коктейльный бар', description: 'Авторские коктейли от бармена', price: 600, unit: 'чел', weight: '—', category: 'drinks', eventTypes: ['furshet', 'banket', 'wedding', 'corporate'], isSignature: true },
]

// === 12 menu packages (from old site research) ===
export const menuPackages: MenuPackage[] = [
  // Фуршет (4)
  {
    id: 'furshet-1', type: 'furshet', name: 'Фуршет «Эконом»', pricePerGuest: 2450, weightPerGuest: '390 г',
    includes: ['Канапе (по 2 шт на гостя)', 'Десерт', 'Напитки', 'Стандартная посуда'],
    dishes: ['c3', 'c7', 'd2', 'b1', 'b5'],
    description: 'Базовый фуршет для камерных мероприятий'
  },
  {
    id: 'furshet-2', type: 'furshet', name: 'Фуршет «Стандарт»', pricePerGuest: 2950, weightPerGuest: '540 г',
    includes: ['Канапе (по 2 шт)', 'Салат в креманке', 'Десерт', 'Напитки', 'Стандартная посуда'],
    dishes: ['c1', 'c3', 's3', 'd1', 'b1', 'b5'],
    description: 'Оптимальный набор для фуршета 30-80 гостей'
  },
  {
    id: 'furshet-3', type: 'furshet', name: 'Фуршет «Премиум»', pricePerGuest: 3950, weightPerGuest: '700 г',
    includes: ['Канапе (по 2 шт)', '2 салата', 'Горячая закуска', 'Десерт', 'Напитки', 'Премиальная посуда'],
    dishes: ['c1', 'c2', 's1', 's4', 'h6', 'd3', 'b3', 'b6'],
    description: 'Премиум-фуршет с авторскими блюдами'
  },
  {
    id: 'furshet-4', type: 'furshet', name: 'Фуршет «Люкс»', pricePerGuest: 5350, weightPerGuest: '750 г',
    includes: ['Канапе (по 2 шт)', '2 салата премиум', 'Горячая закуска', 'Десерт', 'Напитки', 'Премиальная посуда'],
    dishes: ['c1', 'c2', 's5', 's8', 'h1', 'd3', 'b3', 'b9'],
    description: 'Эксклюзивный фуршет с деликатесами'
  },
  // Банкет (3)
  {
    id: 'banket-1', type: 'banket', name: 'Банкет «Стандарт»', pricePerGuest: 4470, weightPerGuest: '1130 г',
    includes: ['Холодные закуски', '2 салата', 'Горячее', 'Десерт', 'Напитки', 'Обслуживание официантами'],
    dishes: ['c3', 'c4', 's2', 's3', 'h5', 'd2', 'b1', 'b5'],
    description: 'Классический банкет для свадеб и юбилеев'
  },
  {
    id: 'banket-2', type: 'banket', name: 'Банкет «Премиум»', pricePerGuest: 4970, weightPerGuest: '1340 г',
    includes: ['Холодные закуски', '2 салата премиум', 'Горячее', 'Десерт', 'Напитки', 'Обслуживание официантами'],
    dishes: ['c1', 'c5', 's1', 's5', 'h2', 'd1', 'b3', 'b6'],
    description: 'Премиум-банкет с морепродуктами'
  },
  {
    id: 'banket-3', type: 'banket', name: 'Банкет «Люкс»', pricePerGuest: 6970, weightPerGuest: '1430 г',
    includes: ['Премиум-ассортимент (осётр, лосось, гребешки)', '2 салата премиум', 'Горячая закуска', 'Горячее', 'Десерт', 'Напитки', 'Сомелье'],
    dishes: ['c9', 'c11', 's4', 's8', 'h6', 'h1', 'd3', 'd8', 'b3', 'b9'],
    description: 'Эксклюзивный банкет для VIP-мероприятий'
  },
  // Кофе-брейк (5)
  {
    id: 'kb-1', type: 'kofe-brejk', name: 'Кофе-брейк «Мини»', pricePerGuest: 390, weightPerGuest: '220 г',
    includes: ['Закуски', 'Напитки', 'Стандартная посуда'],
    dishes: ['c7', 'b1', 'b3', 'b5'],
    description: 'Минимальный набор для конференций'
  },
  {
    id: 'kb-2', type: 'kofe-brejk', name: 'Кофе-брейк «Стандарт»', pricePerGuest: 950, weightPerGuest: '220 г',
    includes: ['Закуски', 'Напитки', 'Стандартная посуда'],
    dishes: ['c8', 'c12', 'b1', 'b3', 'b4', 'b5'],
    description: 'Стандартный кофе-брейк для семинаров'
  },
  {
    id: 'kb-3', type: 'kofe-brejk', name: 'Кофе-брейк «Бизнес»', pricePerGuest: 1250, weightPerGuest: '220 г',
    includes: ['Закуски', 'Напитки', 'Стандартная посуда'],
    dishes: ['c8', 'c10', 'c12', 'b1', 'b3', 'b4', 'b6'],
    description: 'Бизнес-формат для деловых встреч'
  },
  {
    id: 'kb-4', type: 'kofe-brejk', name: 'Кофе-брейк «Премиум»', pricePerGuest: 1950, weightPerGuest: '220 г',
    includes: ['Закуски', 'Десерт', 'Напитки', 'Премиальная посуда'],
    dishes: ['c8', 'c10', 'd6', 'd7', 'b3', 'b4', 'b6', 'b7'],
    description: 'Премиум-кофе-брейк с десертами'
  },
  {
    id: 'kb-5', type: 'kofe-brejk', name: 'Кофе-брейк «Люкс»', pricePerGuest: 2450, weightPerGuest: '220 г',
    includes: ['Закуски', 'Десерт', 'Напитки', 'Премиальная посуда'],
    dishes: ['c9', 'c11', 'd3', 'd8', 'b3', 'b4', 'b6', 'b9'],
    description: 'Эксклюзивный кофе-брейк'
  },
]

// === Services ===
export const services: ServiceType[] = [
  { id: 'weddings', title: 'Свадьбы', icon: '💍', priceFrom: 3500, description: '850+ свадеб за 19 лет. Авторское меню, координатор, дегустация.', features: ['Авторское свадебное меню', 'Свадебный координатор', 'Идеальная сервировка', 'Дегустация для пары', 'Детальный тайминг', 'Выездная регистрация'] },
  { id: 'corporate', title: 'Корпоративы', icon: '💼', priceFrom: 1200, description: 'Бизнес-формат для IT, банков, промышленности. С НДС или УСН.', features: ['Бизнес-формат', 'Кофе-брейк и ланч-пакеты', 'Брендирование блюд', 'Обслуживание от 20 человек', 'Своё оборудование', 'Гибкое меню под бюджет'] },
  { id: 'anniversaries', title: 'Юбилеи', icon: '🎂', priceFrom: 2500, description: 'Камерные и масштабные юбилеи. Авторский подход к каждому.', features: ['Камерный формат', 'Авторское меню', 'Торты на заказ', 'Декор зала', 'Фотограф', 'Музыкальное сопровождение'] },
  { id: 'conferences', title: 'Конференции', icon: '🎤', priceFrom: 390, description: 'Кофе-брейки, обеды, фуршеты для деловых мероприятий.', features: ['Кофе-брейки', 'Бизнес-ланчи', 'Фуршеты', 'Обслуживание 100-500 чел', 'Своё оборудование', 'Гибкое меню'] },
  { id: 'private', title: 'Private dining', icon: '🍷', priceFrom: 5000, description: 'Эксклюзивные ужины для узкого круга. Шеф на дому.', features: ['Шеф на дому', 'Авторское меню', 'Сомелье', 'Премиальная сервировка', 'До 12 гостей', 'Индивидуальный подход'] },
  { id: 'diplomatic', title: 'Дипломатические приёмы', icon: '🏛️', priceFrom: 6000, description: 'Протокольные мероприятия. Классическая русская и французская кухня.', features: ['Дипломатический протокол', 'Классическая кухня', 'Винная карта 40+ позиций', 'Опытные сомелье', 'Сервировка по протоколу', 'От 100 гостей'] },
]

// === Add-ons (доп. услуги) ===
export const addOns: AddOn[] = [
  // Напитки
  { id: 'a1', category: 'drinks', name: 'Винная карта', description: 'Белое, красное, игристое — подбор сомелье', priceType: 'per_guest', price: 450 },
  { id: 'a2', category: 'drinks', name: 'Коктейльный бар', description: 'Авторские коктейли от бармена', priceType: 'per_guest', price: 600 },
  { id: 'a3', category: 'drinks', name: 'Безалкогольные премиум', description: 'Свежевыжатые соки, смузи, авторские лимонады', priceType: 'per_guest', price: 250 },
  // Декор
  { id: 'a4', category: 'decor', name: 'Флористика', description: 'Цветочные композиции и оформление зала', priceType: 'fixed', price: 35000 },
  { id: 'a5', category: 'decor', name: 'Сервировка premium', description: 'Хрусталь, фарфор, столовое серебро', priceType: 'per_guest', price: 200 },
  { id: 'a6', category: 'decor', name: 'Свечи и подсвечники', description: 'Атмосферное освещение', priceType: 'fixed', price: 12000 },
  // Оборудование
  { id: 'a7', category: 'equipment', name: 'Аренда мебели', description: 'Столы, стулья, Lounge-зона', priceType: 'fixed', price: 25000 },
  { id: 'a8', category: 'equipment', name: 'Палатки/шатры', description: 'Для выездных мероприятий', priceType: 'fixed', price: 60000 },
  { id: 'a9', category: 'equipment', name: 'Звуковое оборудование', description: 'Микрофоны, колонки, DJ-пульт', priceType: 'fixed', price: 35000 },
  // Персонал
  { id: 'a10', category: 'staff', name: 'Доп. официанты', description: '1 официант на 10 гостей', priceType: 'fixed', price: 1500 },
  { id: 'a11', category: 'staff', name: 'Сомелье', description: 'Профессиональный сомелье WSET', priceType: 'fixed', price: 3000 },
  { id: 'a12', category: 'staff', name: 'Бармен', description: 'Опытный бармен для коктейльного бара', priceType: 'fixed', price: 2000 },
  // Шоу
  { id: 'a13', category: 'show', name: 'Бармен-шоу', description: 'Интерактивное шоу от бармена', priceType: 'fixed', price: 30000 },
  { id: 'a14', category: 'show', name: 'Шоколадный фонтан', description: 'Бельгийский шоколад, фрукты, маршмеллоу', priceType: 'fixed', price: 15000 },
  { id: 'a15', category: 'show', name: 'Пирамида шампанского', description: 'Эффектная подача игристого', priceType: 'fixed', price: 20000 },
  // Логистика
  { id: 'a16', category: 'logistics', name: 'Доставка за КАД', description: 'Ленинградская область', priceType: 'fixed', price: 8000 },
  { id: 'a17', category: 'logistics', name: 'Парковка для гостей', description: 'Резервирование мест', priceType: 'fixed', price: 10000 },
  { id: 'a18', category: 'logistics', name: 'Транспорт для гостей', description: 'Микроавтобусы Mercedes', priceType: 'fixed', price: 45000 },
]

// === Testimonials ===
export const testimonials: Testimonial[] = [
  { id: 't1', author: 'Анна и Михаил', role: 'Молодожёны', text: 'Невозможно описать словами, как идеально всё прошло. Свадебный координатор продумал каждую минуту, а еда — это просто произведение искусства. Гости до сих пор обсуждают стейк рибай и тирамису.', rating: 5, eventType: 'Свадьба, 80 гостей', eventDate: 'Июнь 2026', hasVideo: true },
  { id: 't2', author: 'Елена Соколова', role: 'HR-директор, IT-холдинг', text: 'Делегировали Nilov Catering корпоратив на 250 человек. Всё вовремя, без единой заминки. Особенно понравились интерактивные станции — гости были в восторге.', rating: 5, eventType: 'Корпоратив, 250 гостей', eventDate: 'Май 2026', hasVideo: true },
  { id: 't3', author: 'Дмитрий и Ольга', role: 'Семейный юбилей', text: 'Заказывали фуршет на юбилей мамы. Команда приехала заранее, всё настроили, обслуживали с улыбкой. Качество блюд — ресторанный уровень.', rating: 5, eventType: 'Юбилей, 40 гостей', eventDate: 'Апрель 2026' },
  { id: 't4', author: 'Сергей Петров', role: 'CEO, логистика', text: 'Уже третий год подряд делаем новогодний корпоратив с Nilov. Каждый раз — новый уровень. В этом году удивили молекулярной кухней.', rating: 5, eventType: 'Корпоратив, 180 гостей', eventDate: 'Декабрь 2025', hasVideo: true },
  { id: 't5', author: 'Мария Иванова', role: 'Event-менеджер', text: 'Работаю с разными кейтерингами 10 лет. Nilov — топ-3 в СПб по соотношению цена/качество. Конструктор меню — киллер-фича.', rating: 5, eventType: 'Конференция, 120 гостей', eventDate: 'Март 2026' },
  { id: 't6', author: 'Андрей и Катя', role: 'Свадьба', text: 'Дегустация перед свадьбой превзошла все ожидания. Шеф лично подошёл обсудить меню, учли все аллергии гостей.', rating: 5, eventType: 'Свадьба, 60 гостей', eventDate: 'Июль 2026' },
]

// === Portfolio cases ===
export const portfolioCases: PortfolioCase[] = [
  { id: 'case1', title: 'Свадьба Анны и Михаила', type: 'Свадьба', date: 'Июнь 2026', guests: 80, budget: '350 000 ₽', location: 'Особняк Бренчевой, СПб', description: 'Авторское меню из 8 блюд, винное сопровождение, живая музыка. Шеф Иван Нилов лично руководил подачей.', image: 'photo-1519225421980-715cb0215aed' },
  { id: 'case2', title: 'Корпоратив IT-холдинга', type: 'Корпоратив', date: 'Май 2026', guests: 250, budget: '650 000 ₽', location: 'Лофт «Севкабель», СПб', description: 'Интерактивные food-станции: устричный бар, паста-станция, десерт-шоу. 12 официантов, 4 шеф-повара.', image: 'photo-1556761175-5973dc0f32e7' },
  { id: 'case3', title: 'Юбилей Ольги Дмитриевны', type: 'Юбилей', date: 'Апрель 2026', guests: 40, budget: '180 000 ₽', location: 'Загородный дом, Карельский перешеек', description: 'Камерный фуршет с акцентом на русскую гастрономию: тельное, расстегаи, паровые рыбники.', image: 'photo-1519162808019-7de16829a322' },
  { id: 'case4', title: 'Новогодний корпоратив', type: 'Корпоратив', date: 'Декабрь 2025', guests: 180, budget: '480 000 ₽', location: 'Ресторан «Мансарда», СПб', description: 'Молекулярная кухня, авторские коктейли, шоколадный фонтан. Дегустация вин от сомелье.', image: 'photo-1551024709-8f23befc6f87' },
  { id: 'case5', title: 'Дипломатический приём', type: 'Приём', date: 'Февраль 2026', guests: 200, budget: '1 200 000 ₽', location: 'Особняк на Мойке, СПб', description: 'Дипломатический протокол. Классическая русская и французская кухня, винная карта 40 позиций.', image: 'photo-1414235077428-338989a2e8c0' },
  { id: 'case6', title: 'Конференция Event-Industry', type: 'Конференция', date: 'Март 2026', guests: 120, budget: '95 000 ₽', location: 'Отель «Тайвань», СПб', description: 'Три кофе-брейка, бизнес-ланч, фуршет. Полная адаптация под веганов и аллергиков.', image: 'photo-1505253149613-112d21d9f6a9' },
]

// === Stats ===
export const stats = [
  { label: 'Лет опыта', value: 19, suffix: '+' },
  { label: 'Мероприятий', value: 1200, suffix: '+' },
  { label: 'Довольных гостей', value: 85000, suffix: '+' },
  { label: 'Блюд в меню', value: 60, suffix: '+' },
]

// === Format helpers ===
export const formatPrice = (n: number) => n.toLocaleString('ru-RU') + ' ₽'

export const categoryLabels: Record<DishCategory, string> = {
  canape: 'Канапе',
  salads: 'Салаты',
  hot: 'Горячие блюда',
  desserts: 'Десерты',
  drinks: 'Напитки',
}

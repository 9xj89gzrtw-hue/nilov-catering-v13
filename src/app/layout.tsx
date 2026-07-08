import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nilov Catering — Кейтеринг в Санкт-Петербурге | Конструктор меню",
  description: "Авторский кейтеринг для свадеб, корпоративов и частных мероприятий. 19 лет, 1200+ мероприятий. Соберите меню за 5 минут — без звонков. Фиксированная цена в договоре.",
  keywords: ["кейтеринг", "Санкт-Петербург", "фуршет", "банкет", "свадьба", "корпоратив", "конструктор меню"],
  authors: [{ name: "Nilov Catering" }],
  openGraph: {
    title: "Nilov Catering — Авторский кейтеринг в Санкт-Петербурге",
    description: "Соберите меню для вашего мероприятия за 5 минут. 19 лет, 1200+ мероприятий.",
    siteName: "Nilov Catering",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nilov Catering",
    description: "Кейтеринг в Санкт-Петербурге",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Caterer",
  name: "Nilov Catering",
  description: "Авторский кейтеринг для свадеб, корпоративов и частных мероприятий в Санкт-Петербурге. 19 лет опыта, 1200+ мероприятий.",
  telephone: "+7-812-555-19-19",
  email: "order@nilov-catering.ru",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6-я линия В.О., д. 19",
    addressLocality: "Санкт-Петербург",
    postalCode: "199004",
    addressCountry: "RU",
  },
  openingHours: "Mo-Su 09:00-22:00",
  priceRange: "₽₽₽",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "850",
  },
  founder: { "@type": "Person", name: "Иван Нилов", jobTitle: "Шеф-повар" },
  foundingDate: "2007",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

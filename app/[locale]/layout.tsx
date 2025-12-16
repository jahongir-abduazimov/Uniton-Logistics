import { Locale, translations, defaultLocale } from '@/lib/i18n';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = (locale as Locale) || defaultLocale;
  const t = translations[currentLocale];

  return {
    title: {
      default: 'Uniton Logistics - Reliable Logistics Solutions',
      template: '%s | Uniton Logistics',
    },
    description:
      currentLocale === 'en'
        ? 'Professional logistics services including international freight, local delivery, warehousing, and customs clearance. Fast, secure, and affordable transportation solutions.'
        : 'Профессиональные логистические услуги, включая международные перевозки, местную доставку, складирование и таможенное оформление. Быстрые, безопасные и доступные решения для транспортировки.',
    keywords:
      currentLocale === 'en'
        ? 'logistics, freight, shipping, delivery, warehousing, customs clearance, cargo transportation'
        : 'логистика, грузоперевозки, доставка, складирование, таможенное оформление, транспортировка грузов',
    openGraph: {
      type: 'website',
      locale: currentLocale,
      title: 'Uniton Logistics - Reliable Logistics Solutions',
      description:
        currentLocale === 'en'
          ? 'Professional logistics services for your business'
          : 'Профессиональные логистические услуги для вашего бизнеса',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params;
  const currentLocale = (locale as Locale) || defaultLocale;

  return (
    <html lang={currentLocale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


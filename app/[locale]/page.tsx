import { Locale, translations, defaultLocale } from '@/lib/i18n';
import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Directions } from '@/components/sections/Directions';
import { About } from '@/components/sections/About';
import { Advantages } from '@/components/sections/Advantages';
import { Statistics } from '@/components/sections/Statistics';
import { CargoTypes } from '@/components/sections/CargoTypes';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = (locale as Locale) || defaultLocale;
  const t = translations[currentLocale];

  return (
    <>
      <Header locale={currentLocale} translations={t} />
      <main>
        <Hero translations={t} />
        <Services translations={t} />
        <Directions translations={t} />
        <About translations={t} />
        <Advantages translations={t} />
        <Statistics translations={t} />
        <CargoTypes translations={t} />
        <Contact translations={t} />
      </main>
      <Footer translations={t} />
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ru' }];
}


import { Locale, translations, defaultLocale, locales } from '@/lib/i18n';
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

// Site URL - should be set via environment variable in production
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uniton-logistics.com';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// SEO metadata for each language
const seoMetadata: Record<Locale, {
  title: string;
  description: string;
  keywords: string;
  openGraphTitle: string;
  openGraphDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}> = {
  en: {
    title: 'Uniton Logistics - Reliable Logistics Solutions for Your Business',
    description: 'Professional logistics services including international freight forwarding, local delivery, warehousing, and customs clearance. Fast, secure, and affordable transportation solutions. 15+ years of experience, worldwide shipping network covering 30+ countries.',
    keywords: 'logistics, freight forwarding, shipping, delivery, warehousing, customs clearance, cargo transportation, international logistics, container logistics, road transport, sea transport, rail transport, air transport, freight services, logistics company',
    openGraphTitle: 'Uniton Logistics - Reliable Logistics Solutions',
    openGraphDescription: 'Professional logistics services including international freight, local delivery, warehousing, and customs clearance. Fast, secure, and affordable transportation solutions.',
    twitterTitle: 'Uniton Logistics - Reliable Logistics Solutions',
    twitterDescription: 'Professional logistics services for your business. International freight, local delivery, warehousing, and customs clearance.',
  },
  ru: {
    title: 'Uniton Logistics - Надежные логистические решения для вашего бизнеса',
    description: 'Профессиональные логистические услуги, включая международные перевозки, местную доставку, складирование и таможенное оформление. Быстрые, безопасные и доступные решения для транспортировки. Более 15 лет опыта, всемирная сеть доставки, охватывающая более 30 стран.',
    keywords: 'логистика, грузоперевозки, доставка, складирование, таможенное оформление, транспортировка грузов, международная логистика, контейнерная логистика, автомобильные перевозки, морские перевозки, железнодорожные перевозки, авиаперевозки, экспедирование грузов, логистическая компания',
    openGraphTitle: 'Uniton Logistics - Надежные логистические решения',
    openGraphDescription: 'Профессиональные логистические услуги, включая международные перевозки, местную доставку, складирование и таможенное оформление. Быстрые, безопасные и доступные решения для транспортировки.',
    twitterTitle: 'Uniton Logistics - Надежные логистические решения',
    twitterDescription: 'Профессиональные логистические услуги для вашего бизнеса. Международные перевозки, местная доставка, складирование и таможенное оформление.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = (locale as Locale) || defaultLocale;
  const metadata = seoMetadata[currentLocale];
  const currentUrl = `${siteUrl}/${currentLocale}`;

  // Generate alternate language links
  const alternates: { languages: Record<string, string> } = {
    languages: {},
  };
  locales.forEach((loc) => {
    alternates.languages[loc] = `${siteUrl}/${loc}`;
  });
  alternates.languages['x-default'] = `${siteUrl}/${defaultLocale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: metadata.title,
      template: '%s | Uniton Logistics',
    },
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: 'Uniton Logistics' }],
    creator: 'Uniton Logistics',
    publisher: 'Uniton Logistics',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: currentLocale === 'en' ? 'en_US' : 'ru_RU',
      url: currentUrl,
      siteName: 'Uniton Logistics',
      title: metadata.openGraphTitle,
      description: metadata.openGraphDescription,
      images: [
        {
          url: `${siteUrl}/img/logo.png`,
          width: 1200,
          height: 630,
          alt: 'Uniton Logistics',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.twitterTitle,
      description: metadata.twitterDescription,
      images: [`${siteUrl}/img/logo.png`],
    },
    alternates: {
      canonical: currentUrl,
      languages: alternates.languages,
    },
    verification: {
      // Add your verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
    category: 'Logistics',
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


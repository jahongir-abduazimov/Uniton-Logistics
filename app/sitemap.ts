import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/lib/i18n';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://unitonlogistics.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Add homepage for each locale
  locales.forEach((locale) => {
    routes.push({
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [loc, `${siteUrl}/${loc}`])
        ),
      },
    });
  });

  return routes;
}

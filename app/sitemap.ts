import type { MetadataRoute } from 'next';
import { SITE_META } from '@/lib/site-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.APP_URL || SITE_META.fallbackBaseUrl).replace(/\/$/, '');

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}

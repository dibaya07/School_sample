import type { MetadataRoute } from 'next';
import { SITE_META } from '@/lib/site-content';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (process.env.APP_URL || SITE_META.fallbackBaseUrl).replace(/\/$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

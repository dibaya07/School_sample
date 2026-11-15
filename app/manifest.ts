import type { MetadataRoute } from 'next';
import { BRAND_INFO, SITE_META } from '@/lib/site-content';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND_INFO.logoName,
    short_name: BRAND_INFO.logoShortName,
    description: SITE_META.description,
    start_url: '/',
    display: 'standalone',
    background_color: SITE_META.backgroundColor,
    theme_color: SITE_META.themeColor,
  };
}

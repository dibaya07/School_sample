import type { Metadata, Viewport } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import {
  BRAND_INFO,
  CONTACT_CONTENT,
  SCHOOL_CONTACT,
  SITE_META,
} from '@/lib/site-content';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const baseUrl = process.env.APP_URL || SITE_META.fallbackBaseUrl;

export const viewport: Viewport = {
  themeColor: SITE_META.themeColor,
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_META.title,
    template: SITE_META.titleTemplate,
  },
  description: SITE_META.description,
  keywords: [...SITE_META.keywords],
  authors: [{ name: BRAND_INFO.logoName }],
  creator: BRAND_INFO.logoName,
  publisher: BRAND_INFO.logoName,
  alternates: {
    canonical: '/',
  },
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
    title: SITE_META.title,
    description: SITE_META.description,
    url: '/',
    siteName: BRAND_INFO.logoName,
    locale: SITE_META.locale,
    type: 'website',
    images: [
      {
        url: SITE_META.ogImage,
        width: 1376,
        height: 768,
        alt: SITE_META.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_META.title,
    description: SITE_META.description,
    images: [SITE_META.ogImage],
  },
};

const schoolJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: BRAND_INFO.logoName,
  description: SITE_META.description,
  url: baseUrl,
  image: `${baseUrl}${SITE_META.ogImage}`,
  foundingDate: BRAND_INFO.foundingYear,
  telephone: SCHOOL_CONTACT.phoneDisplay,
  email: SCHOOL_CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SCHOOL_CONTACT.streetAddress,
    addressLocality: SCHOOL_CONTACT.locality,
    addressRegion: SCHOOL_CONTACT.region,
    postalCode: SCHOOL_CONTACT.postalCode,
    addressCountry: 'IN',
  },
  sameAs: CONTACT_CONTENT.socialLinks
    .map((s) => s.href)
    .filter((href) => href.startsWith('http')),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased bg-[#FFFBF4] text-[#16110E]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

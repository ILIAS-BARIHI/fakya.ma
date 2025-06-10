import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Open_Sans, Rajdhani } from 'next/font/google';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Suspense } from 'react';

import { PostHogProvider } from '@/components/analytics/PostHogProvider';
import { DemoBadge } from '@/components/DemoBadge';
import { routing } from '@/libs/i18nRouting';

// Imports CSS
import '@/styles/global.css';
import '@/assets/css/font-icons.css';
import '@/assets/css/plugins.css';
import './globals.css';
import '@/assets/css/responsive.css';

// Configuration des polices
const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--ltn__body-font',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--ltn__heading-font',
});

export const metadata: Metadata = {
  title: 'Broccoli - Organic Food React Template',
  description: 'Broccoli - Organic Food React Template',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning={true}
      className={`${rajdhani.variable} ${open_sans.variable}`}
    >
      <body className={open_sans.className}>
        <NextIntlClientProvider>
          <PostHogProvider>
            <Suspense fallback={<div></div>}>
              {props.children}
              <Script src="/plugins.js" />
              <Script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCeeHDCOXmUMja1CFg96RbtyKgx381yoBU"
                async
              />
            </Suspense>
          </PostHogProvider>
          <DemoBadge />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

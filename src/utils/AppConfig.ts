import type { LocalizationResource } from '@clerk/types';
import type { LocalePrefixMode } from 'next-intl/routing';
import { arSA, enUS, frFR } from '@clerk/localizations';

const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['en', 'fr', 'ar'],
  defaultLocale: 'fr',
  localePrefix,
};

const supportedLocales: Record<string, LocalizationResource> = {
  en: enUS,
  fr: frFR,
  ar: arSA,
};

export const ClerkLocalizations = {
  defaultLocale: frFR,
  supportedLocales,
};

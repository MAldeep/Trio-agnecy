// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';


export default getRequestConfig(async ({ requestLocale }) => {
  // Provide a sensible default if the locale is missing
  let locale: string | undefined = await requestLocale;

  if (!locale || !routing.locales.includes(locale as never)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
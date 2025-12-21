// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'ar'
});

// Navigation APIs for easy linking between languages
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";
import Footer from '../_components/shared components/Footer';
import WhatsAppButton from '../_components/shared components/WhatsAppBtn';
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; 
  
  // Now you can proceed with your logic
  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Footer/>
          <WhatsAppButton/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
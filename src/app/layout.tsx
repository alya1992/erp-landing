import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://erp.3d-print.cc'),
  title: '3DPrint ERP',
  description: '3DPrint ERP - 3D Printing Business Management',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

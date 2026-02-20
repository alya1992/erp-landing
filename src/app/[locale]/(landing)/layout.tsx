import { Inter } from 'next/font/google';
import { LandingHeader } from '@/components/landing/landing-header';
import { LandingFooter } from '@/components/landing/landing-footer';
import './landing.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`landing-wrapper flex min-h-screen flex-col bg-[var(--color-surface-alt)] text-[var(--color-text)] ${inter.variable}`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-primary)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <LandingHeader />
      <div className="flex-1">{children}</div>
      <LandingFooter />
    </div>
  );
}

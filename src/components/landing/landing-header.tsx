import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { LandingContainer } from './landing-container';
import { MobileMenu } from './mobile-menu';

export async function LandingHeader() {
  const [locale, t] = await Promise.all([
    getLocale(),
    getTranslations('Landing'),
  ]);

  const otherLocale = locale === 'uk' ? 'en' : 'uk';

  const navLinks = [
    { href: '#features', label: t('nav.features') },
    { href: '#integrations', label: t('nav.integrations') },
    { href: '#how-it-works', label: t('nav.howItWorks') },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)]/50 bg-white/80 backdrop-blur-xl">
      <LandingContainer className="flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-[family-name:var(--font-poppins)] text-[26px] font-bold leading-none text-[var(--color-text)]">
          <Image src="/logo/erp-logo.png" alt="3DPrint ERP" width={36} height={36} />
          3DPrint<span className="text-[var(--color-primary)]">ERP</span>
        </Link>

        {/* Nav links — desktop only */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/"
            locale={otherLocale}
            className="rounded-md px-2 py-1 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)]"
          >
            {otherLocale.toUpperCase()}
          </Link>

          <Link
            href="/login"
            className="btn-secondary rounded-lg border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-text)]"
          >
            {t('nav.login')}
          </Link>
          <Link
            href="/try"
            className="btn-primary rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)]"
          >
            {t('nav.tryFree')}
          </Link>
        </div>

        {/* Mobile menu */}
        <MobileMenu navLinks={navLinks} otherLocale={otherLocale} isLoggedIn={false} />
      </LandingContainer>
    </header>
  );
}

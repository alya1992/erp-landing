import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { LandingContainer } from './landing-container';

export async function LandingFooter() {
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
    <footer className="border-t border-[var(--color-border)] bg-white py-12">
      <LandingContainer>
        {/* Three-column layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Logo + description */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-[family-name:var(--font-poppins)] text-2xl font-bold leading-none text-[var(--color-text)]"
            >
              <Image src="/logo/erp-logo.png" alt="3DPrint ERP" width={28} height={28} />
              3DPrint<span className="text-[var(--color-primary)]">ERP</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {t('footer.description')}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)]">
              {t('footer.navigationTitle')}
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Actions + language */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)]">
              {t('footer.actionsTitle')}
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link
                href="/try"
                className="btn-primary inline-flex w-fit items-center gap-2 rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-bold text-white hover:bg-[var(--color-primary-hover)]"
              >
                {t('nav.tryFree')}
              </Link>
              <Link
                href="/"
                locale={otherLocale}
                className="text-[15px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {otherLocale.toUpperCase()}
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-[var(--color-border)]" />

        {/* Copyright */}
        <p className="text-center text-sm text-[var(--color-text-light)]">
          {t('footer.copyright')}
        </p>
      </LandingContainer>
    </footer>
  );
}

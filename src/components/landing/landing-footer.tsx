import { getLocale, getTranslations } from 'next-intl/server';
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
    <footer className="bg-[#F6FCF7] py-12">
      <LandingContainer>
        {/* Three-column layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Logo + description */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-none text-[#1F2937]"
            >
              3DPrint<span className="text-[#6AA570]">ERP</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
              {t('footer.description')}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1F2937]">
              {t('footer.navigationTitle')}
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] text-[#6B7280] transition-colors hover:text-[#1F2937]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Actions + language */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1F2937]">
              {t('footer.actionsTitle')}
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link
                href="/try"
                className="btn-primary inline-flex w-fit items-center gap-2 rounded-lg bg-[#6AA570] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#5A9460]"
              >
                {t('nav.tryFree')}
              </Link>
              <Link
                href="/"
                locale={otherLocale}
                className="text-[15px] text-[#6B7280] transition-colors hover:text-[#1F2937]"
              >
                {otherLocale.toUpperCase()}
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-[#E9DCC6]" />

        {/* Copyright */}
        <p className="text-center text-sm text-[#6B7280]">
          {t('footer.copyright')}
        </p>
      </LandingContainer>
    </footer>
  );
}

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
    <footer className="bg-[#F6FCF7] py-6">
      <LandingContainer>
        {/* Top row */}
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-none text-[#1F2937]"
          >
            3DPrint<span className="text-[#6AA570]">ERP</span>
          </Link>

          {/* Nav + language */}
          <div className="flex flex-wrap items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-[#6B7280] transition-colors hover:text-[#1F2937]"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/"
              locale={otherLocale}
              className="text-[15px] text-[#6B7280] transition-colors hover:text-[#1F2937]"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-[#E9DCC6]" />

        {/* Copyright */}
        <p className="text-center text-sm text-[#6B7280]">
          {t('footer.copyright')}
        </p>
      </LandingContainer>
    </footer>
  );
}

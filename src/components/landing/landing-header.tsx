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
    <header className="sticky top-0 z-50 border-b border-[#EEDFC7] bg-[#FFFFFFD9] backdrop-blur-[10px]">
      <LandingContainer className="flex h-[84px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-[family-name:var(--font-poppins)] text-[30px] font-bold leading-none text-[#1F2937]">
          <Image src="/logo/erp-logo.png" alt="3DPrint ERP" width={40} height={40} />
          3DPrint<span className="text-[#6AA570]">ERP</span>
        </Link>

        {/* Nav links — desktop only */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-[#6B7280] transition-colors hover:text-[#1F2937]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3.5 lg:flex">
          {/* Language switcher */}
          <Link
            href="/"
            locale={otherLocale}
            className="text-[15px] font-medium text-[#6B7280] transition-colors hover:text-[#1F2937]"
          >
            {otherLocale.toUpperCase()}
          </Link>

          <Link
            href="/login"
            className="rounded-[10px] border border-[#E5D7BE] bg-white px-[18px] py-2.5 text-[15px] font-semibold text-[#1F2937] transition-colors hover:border-[#D4C5AA]"
          >
            {t('nav.login')}
          </Link>
          <Link
            href="/try"
            className="rounded-[10px] bg-[#6AA570] px-[18px] py-2.5 text-[15px] font-bold text-[#1F3D2A] transition-colors hover:bg-[#5A9460]"
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

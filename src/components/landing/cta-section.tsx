import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';

export async function CtaSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection
      className="py-[92px]"
      style={{
        background: 'linear-gradient(120deg, #6AA57030 0%, #8B5CF62A 100%)',
      }}
    >
      <LandingContainer className="flex flex-col items-center text-center">
        <h2 className="mx-auto max-w-[840px] font-[family-name:var(--font-poppins)] text-[40px] font-bold leading-[1.2] text-[#1F2937]">
          {t('cta.title')}
        </h2>
        <p className="mt-5 text-lg text-[#6B7280]">
          {t('cta.subtitle')}
        </p>
        <Link
          href="/try"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#6AA570] px-7 py-4 text-xl font-bold text-[#1F3D2A] transition-colors hover:bg-[#5A9460]"
        >
          {t('cta.button')}
        </Link>
        <p className="mt-5 text-sm text-[#1F2937]">
          {t('cta.trustLine')}
        </p>
      </LandingContainer>
    </LandingSection>
  );
}

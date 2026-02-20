import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';
import { ScrollReveal } from './scroll-reveal';

export async function CtaSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection
      className="relative overflow-hidden py-[92px]"
      style={{
        background: 'linear-gradient(120deg, #6AA57030 0%, #8B5CF62A 100%)',
      }}
    >
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-[#6AA570]/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-[#8B5CF6]/10 blur-3xl" aria-hidden="true" />

      <ScrollReveal>
        <LandingContainer className="relative z-10 flex flex-col items-center text-center">
          <h2 className="mx-auto max-w-[840px] font-[family-name:var(--font-poppins)] text-[40px] font-bold leading-[1.2] text-[#1F2937]">
            {t('cta.title')}
          </h2>
          <p className="mt-5 text-lg text-[#6B7280]">
            {t('cta.subtitle')}
          </p>
          <Link
            href="/try"
            className="btn-primary mt-8 inline-flex items-center gap-2 rounded-xl bg-[#6AA570] px-7 py-4 text-xl font-bold text-white hover:bg-[#5A9460]"
          >
            {t('cta.button')}
          </Link>
          <p className="mt-5 text-base text-[#6B7280]">
            {t('cta.trustLine')}
          </p>
        </LandingContainer>
      </ScrollReveal>
    </LandingSection>
  );
}

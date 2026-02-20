import { getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
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
        background: 'linear-gradient(135deg, rgba(106,165,112,0.08) 0%, rgba(59,130,246,0.06) 50%, rgba(191,151,115,0.05) 100%)',
      }}
    >
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-[var(--color-primary)]/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl" aria-hidden="true" />

      <ScrollReveal>
        <LandingContainer className="relative z-10 flex flex-col items-center text-center">
          <h2 className="mx-auto max-w-[840px] font-[family-name:var(--font-poppins)] text-[40px] font-bold leading-[1.2] text-[var(--color-text)]">
            {t('cta.title')}
          </h2>
          <p className="mt-5 text-lg text-[var(--color-text-muted)]">
            {t('cta.subtitle')}
          </p>
          <Link
            href="/try"
            className="btn-primary mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-7 py-4 text-xl font-bold text-white hover:bg-[var(--color-primary-hover)]"
          >
            {t('cta.button')}
            <ArrowRight className="size-5" />
          </Link>
          <p className="mt-5 text-base text-[var(--color-text-light)]">
            {t('cta.trustLine')}
          </p>
        </LandingContainer>
      </ScrollReveal>
    </LandingSection>
  );
}

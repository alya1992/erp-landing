import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { CheckCircle, Zap, Shield } from 'lucide-react';
import { LandingContainer } from '@/components/landing/landing-container';
import { LandingSection } from '@/components/landing/landing-section';
import { RequestAccessForm } from '@/components/landing/request-access-form';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'TryPage' });

  const url = `/${locale}/try`;
  const altLocale = locale === 'uk' ? 'en' : 'uk';

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: {
      canonical: url,
      languages: {
        [locale]: url,
        [altLocale]: `/${altLocale}/try`,
        'x-default': '/uk/try',
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url,
      siteName: '3DPrint ERP',
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: t('meta.title'),
      description: t('meta.description'),
    },
  };
}

const benefits = [
  { Icon: Zap, textKey: 'benefit1' as const },
  { Icon: Shield, textKey: 'benefit2' as const },
  { Icon: CheckCircle, textKey: 'benefit3' as const },
] as const;

export default async function TryPage() {
  const t = await getTranslations('TryPage');

  return (
    <main id="main-content">
      <LandingSection
        className="relative overflow-hidden py-20 lg:py-32"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(106,165,112,0.05) 0%, transparent 70%)',
        }}
      >
        {/* Decorative blurred circles */}
        <div className="pointer-events-none absolute -left-20 top-10 size-64 rounded-full bg-[var(--color-primary)]/5 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 bottom-10 size-64 rounded-full bg-[var(--color-accent)]/5 blur-3xl" aria-hidden="true" />

        <LandingContainer className="flex flex-col items-center">
          <div className="w-full max-w-[520px] text-center">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-[var(--color-primary)] ring-4 ring-[var(--color-primary)]/10">
              <Zap className="size-8 text-white" />
            </div>
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-[var(--color-text)] lg:text-5xl">
              {t('title')}
            </h1>
            <p className="mt-4 text-lg text-[var(--color-text-muted)]">
              {t('description')}
            </p>

            {/* Form card */}
            <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-white/80 p-6 shadow-lg backdrop-blur-sm">
              <RequestAccessForm />
            </div>

            {/* Benefits */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
              {benefits.map(({ Icon, textKey }) => (
                <div key={textKey} className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)]">
                  <Icon className="size-4 text-[var(--color-primary)]" aria-hidden="true" />
                  <span>{t(textKey)}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-[var(--color-text-light)]">
              {t('privacyNote')}
            </p>
          </div>
        </LandingContainer>
      </LandingSection>
    </main>
  );
}

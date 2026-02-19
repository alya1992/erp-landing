import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
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

export default async function TryPage() {
  const t = await getTranslations('TryPage');

  return (
    <main id="main-content">
      <LandingSection className="py-20 lg:py-32">
        <LandingContainer className="flex flex-col items-center">
          <div className="w-full max-w-[520px] text-center">
            <h1 className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#1F2937] lg:text-5xl">
              {t('title')}
            </h1>
            <p className="mt-4 text-lg text-[#6B7280]">
              {t('description')}
            </p>
            <div className="mt-8">
              <RequestAccessForm />
            </div>
            <p className="mt-6 text-sm text-[#6B7280]">
              {t('privacyNote')}
            </p>
          </div>
        </LandingContainer>
      </LandingSection>
    </main>
  );
}

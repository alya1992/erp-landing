import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { HeroSection } from '@/components/landing/hero-section';
import { PainPointsSection } from '@/components/landing/pain-points-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { HowItWorksSection } from '@/components/landing/how-it-works-section';
import { DeepDiveSection } from '@/components/landing/deep-dive-section';
import { IntegrationsSection } from '@/components/landing/integrations-section';
import { WhyUsSection } from '@/components/landing/why-us-section';
import { CtaSection } from '@/components/landing/cta-section';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Landing' });

  const url = `/${locale}`;
  const altLocale = locale === 'uk' ? 'en' : 'uk';

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: {
      canonical: url,
      languages: {
        [locale]: url,
        [altLocale]: `/${altLocale}`,
        'x-default': '/uk',
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

export default function LandingPage() {
  return (
    <main id="main-content">
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DeepDiveSection />
      <IntegrationsSection />
      <WhyUsSection />
      <CtaSection />
    </main>
  );
}

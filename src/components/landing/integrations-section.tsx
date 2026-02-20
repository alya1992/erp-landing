import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';
import { ScrollReveal } from './scroll-reveal';

const cards = [
  { key: 'card1', logo: '/logo/monobank-logo.png', alt: 'Monobank', size: 'size-12' },
  { key: 'card2', logo: '/logo/np-logomark-red.png', alt: 'Нова Пошта', size: 'size-16' },
  { key: 'card3', logo: '/logo/ukrpost.webp', alt: 'Укрпошта', size: 'size-12' },
  { key: 'card4', logo: '/logo/bambulab.png', alt: 'Bambu Lab', size: 'size-16' },
] as const;

export async function IntegrationsSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection id="integrations" bg="slate-tint">
      <LandingContainer>
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-poppins)] text-4xl font-bold text-[var(--color-text)]">
            {t('integrations.title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="reveal-stagger" className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ key, logo, alt, size }) => (
            <div
              key={key}
              className="reveal-item card-hover rounded-2xl border border-[var(--color-border)] bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-[var(--color-surface-muted)]">
                <Image
                  src={logo}
                  alt={alt}
                  width={64}
                  height={64}
                  className={`rounded-xl ${size}`}
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[var(--color-text)]">
                {t(`integrations.${key}.title`)}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                {t(`integrations.${key}.description`)}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </LandingContainer>
    </LandingSection>
  );
}

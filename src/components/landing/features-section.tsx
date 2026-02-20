import { getTranslations } from 'next-intl/server';
import { ClipboardList, CreditCard, Truck, Package, Printer, BarChart3, Calculator, FileText } from 'lucide-react';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';
import { ScrollReveal } from './scroll-reveal';

const cards = [
  { key: 'card1', Icon: ClipboardList, accent: 'primary' },
  { key: 'card2', Icon: CreditCard,    accent: 'primary' },
  { key: 'card3', Icon: Truck,         accent: 'copper' },
  { key: 'card4', Icon: Package,       accent: 'copper' },
  { key: 'card5', Icon: Printer,       accent: 'primary' },
  { key: 'card6', Icon: BarChart3,     accent: 'copper' },
  { key: 'card7', Icon: Calculator,    accent: 'primary' },
  { key: 'card8', Icon: FileText,      accent: 'copper' },
] as const;

const accentStyles = {
  primary: {
    iconBg: 'bg-[var(--color-primary-light)]',
    iconColor: 'text-[var(--color-primary)]',
  },
  copper: {
    iconBg: 'bg-[var(--color-copper-light)]',
    iconColor: 'text-[var(--color-copper)]',
  },
} as const;

export async function FeaturesSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection id="features">
      <LandingContainer>
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-poppins)] text-4xl font-bold text-[var(--color-text)]">
            {t('features.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[var(--color-text-muted)]">
            {t('features.subtitle')}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="reveal-stagger" className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ key, Icon, accent }) => {
            const s = accentStyles[accent];
            return (
              <div
                key={key}
                className="reveal-item card-hover rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm"
              >
                <div className={`flex size-12 items-center justify-center rounded-xl ${s.iconBg}`}>
                  <Icon className={`size-6 ${s.iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--color-text)]">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[var(--color-text-muted)]">
                  {t(`features.${key}.description`)}
                </p>
              </div>
            );
          })}
        </ScrollReveal>
      </LandingContainer>
    </LandingSection>
  );
}

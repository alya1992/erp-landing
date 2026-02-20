import { getTranslations } from 'next-intl/server';
import { Table2, Wallet, Truck, Workflow, Calculator, CreditCard } from 'lucide-react';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';
import { ScrollReveal } from './scroll-reveal';

const cards = [
  { key: 'card1', Icon: Table2 },
  { key: 'card2', Icon: Wallet },
  { key: 'card3', Icon: Truck },
  { key: 'card4', Icon: Workflow },
  { key: 'card5', Icon: Calculator },
  { key: 'card6', Icon: CreditCard },
] as const;

export async function PainPointsSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection id="pain-points" bg="slate-tint">
      <LandingContainer>
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-poppins)] text-4xl font-bold text-[var(--color-text)]">
            {t('painPoints.title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="reveal-stagger" className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ key, Icon }) => (
            <div
              key={key}
              className="reveal-item card-hover min-h-[200px] rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--color-surface-muted)]">
                <Icon className="size-6 text-[var(--color-text-muted)]" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[var(--color-text)]">
                {t(`painPoints.${key}.title`)}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[var(--color-text-muted)]">
                {t(`painPoints.${key}.description`)}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </LandingContainer>
    </LandingSection>
  );
}

import { getTranslations } from 'next-intl/server';
import { ClipboardList, CreditCard, Truck, Package, Printer, BarChart3, Calculator, FileText } from 'lucide-react';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';
import { ScrollReveal } from './scroll-reveal';

const cards = [
  { key: 'card1', Icon: ClipboardList, color: 'text-[#6AA570]', iconBg: 'icon-container--green' },
  { key: 'card2', Icon: CreditCard,    color: 'text-[#6AA570]', iconBg: 'icon-container--green' },
  { key: 'card3', Icon: Truck,         color: 'text-[#BF9773]', iconBg: 'icon-container--copper' },
  { key: 'card4', Icon: Package,       color: 'text-[#BF9773]', iconBg: 'icon-container--copper' },
  { key: 'card5', Icon: Printer,       color: 'text-[#6AA570]', iconBg: 'icon-container--green' },
  { key: 'card6', Icon: BarChart3,     color: 'text-[#BF9773]', iconBg: 'icon-container--copper' },
  { key: 'card7', Icon: Calculator,    color: 'text-[#6AA570]', iconBg: 'icon-container--green' },
  { key: 'card8', Icon: FileText,      color: 'text-[#BF9773]', iconBg: 'icon-container--copper' },
] as const;

export async function FeaturesSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection id="features">
      <LandingContainer>
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#1F2937]">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-center text-lg font-light text-[#6B7280]">
            {t('features.subtitle')}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="reveal-stagger" className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ key, Icon, color, iconBg }) => (
            <div
              key={key}
              className="reveal-item card-hover rounded-[14px] border border-[#E9DCC6] bg-white p-6 shadow-sm"
            >
              <div className={`icon-container ${iconBg} size-12`}>
                <Icon className={`size-6 ${color}`} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#1F2937]">
                {t(`features.${key}.title`)}
              </h3>
              <p className="mt-2 text-base leading-[1.5] text-[#6B7280]">
                {t(`features.${key}.description`)}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </LandingContainer>
    </LandingSection>
  );
}

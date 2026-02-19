import { getTranslations } from 'next-intl/server';
import { ClipboardList, CreditCard, Truck, Package, Printer, BarChart3 } from 'lucide-react';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';

const cards = [
  { key: 'card1', Icon: ClipboardList, color: 'text-[#6AA570]' },
  { key: 'card2', Icon: CreditCard, color: 'text-[#6AA570]' },
  { key: 'card3', Icon: Truck, color: 'text-[#BF9773]' },
  { key: 'card4', Icon: Package, color: 'text-[#BF9773]' },
  { key: 'card5', Icon: Printer, color: 'text-[#6AA570]' },
  { key: 'card6', Icon: BarChart3, color: 'text-[#BF9773]' },
] as const;

export async function FeaturesSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection id="features">
      <LandingContainer>
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#1F2937]">
          {t('features.title')}
        </h2>
        <p className="mt-4 text-center text-lg text-[#6B7280]">
          {t('features.subtitle')}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ key, Icon, color }) => (
            <div
              key={key}
              className="h-[250px] rounded-[14px] border border-[#E9DCC6] bg-white p-[22px]"
            >
              <Icon className={`size-10 ${color}`} aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold text-[#1F2937]">
                {t(`features.${key}.title`)}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.45] text-[#6B7280]">
                {t(`features.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </LandingContainer>
    </LandingSection>
  );
}

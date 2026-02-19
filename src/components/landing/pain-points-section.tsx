import { getTranslations } from 'next-intl/server';
import { Table2, Wallet, Truck, Workflow } from 'lucide-react';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';

const cards = [
  { key: 'card1', Icon: Table2 },
  { key: 'card2', Icon: Wallet },
  { key: 'card3', Icon: Truck },
  { key: 'card4', Icon: Workflow },
] as const;

export async function PainPointsSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection id="pain-points" bg="pain-points">
      <LandingContainer>
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#1F2937]">
          {t('painPoints.title')}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {cards.map(({ key, Icon }) => (
            <div
              key={key}
              className="h-[220px] rounded-[14px] border border-[#E9DCC6] bg-[#FFF7E8] p-5"
            >
              <Icon className="size-8 text-[#6B7280]" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-[#1F2937]">
                {t(`painPoints.${key}.title`)}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.45] text-[#6B7280]">
                {t(`painPoints.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </LandingContainer>
    </LandingSection>
  );
}

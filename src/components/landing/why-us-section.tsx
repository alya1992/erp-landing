import { getTranslations } from 'next-intl/server';
import { Flag, Shield, LayoutDashboard, Zap } from 'lucide-react';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';

const cards = [
  { key: 'card1', Icon: Flag, color: 'text-[#6AA570]' },
  { key: 'card2', Icon: Shield, color: 'text-[#BF9773]' },
  { key: 'card3', Icon: LayoutDashboard, color: 'text-[#6AA570]' },
  { key: 'card4', Icon: Zap, color: 'text-[#BF9773]' },
] as const;

export async function WhyUsSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection id="why-us">
      <LandingContainer>
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#1F2937]">
          {t('whyUs.title')}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ key, Icon, color }) => (
            <div
              key={key}
              className="h-[210px] rounded-[14px] border border-[#E9DCC6] bg-white p-5"
            >
              <Icon className={`size-8 ${color}`} aria-hidden="true" />
              <h3 className="mt-4 text-[19px] font-bold text-[#1F2937]">
                {t(`whyUs.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-[1.4] text-[#6B7280]">
                {t(`whyUs.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </LandingContainer>
    </LandingSection>
  );
}

import { getTranslations } from 'next-intl/server';
import { Flag, Shield, LayoutDashboard, Zap } from 'lucide-react';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';
import { ScrollReveal } from './scroll-reveal';

const cards = [
  { key: 'card1', Icon: Flag,            color: 'text-[#6AA570]', iconBg: 'icon-container--green' },
  { key: 'card2', Icon: Shield,          color: 'text-[#BF9773]', iconBg: 'icon-container--copper' },
  { key: 'card3', Icon: LayoutDashboard, color: 'text-[#6AA570]', iconBg: 'icon-container--green' },
  { key: 'card4', Icon: Zap,             color: 'text-[#BF9773]', iconBg: 'icon-container--copper' },
] as const;

export async function WhyUsSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection id="why-us">
      <LandingContainer>
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#1F2937]">
            {t('whyUs.title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="reveal-stagger" className="mt-10 grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ key, Icon, color, iconBg }) => (
            <div
              key={key}
              className="reveal-item card-hover rounded-[14px] border border-[#E9DCC6] bg-white p-6 shadow-sm"
            >
              <div className={`icon-container ${iconBg} size-12`}>
                <Icon className={`size-6 ${color}`} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-[19px] font-bold text-[#1F2937]">
                {t(`whyUs.${key}.title`)}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.5] text-[#6B7280]">
                {t(`whyUs.${key}.description`)}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </LandingContainer>
    </LandingSection>
  );
}

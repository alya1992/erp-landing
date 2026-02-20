import { getTranslations } from 'next-intl/server';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';
import { ScrollReveal } from './scroll-reveal';

const steps = [
  { key: 'step1', number: 1, circleColor: 'bg-[#6AA570]', ringColor: 'ring-[#6AA570]/10' },
  { key: 'step2', number: 2, circleColor: 'bg-[#BF9773]', ringColor: 'ring-[#BF9773]/10' },
  { key: 'step3', number: 3, circleColor: 'bg-[#6AA570]', ringColor: 'ring-[#6AA570]/10' },
] as const;

function Connector() {
  return (
    <>
      {/* Horizontal — desktop */}
      <div className="hidden items-center lg:flex" aria-hidden="true">
        <div className="h-[2px] w-10 bg-gradient-to-r from-[#E9DCC6] to-[#D4C5AA]" />
        <svg width="12" height="12" viewBox="0 0 12 12" className="text-[#D4C5AA]">
          <path d="M2 1L7 6L2 11" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      {/* Vertical — mobile */}
      <div className="flex flex-col items-center lg:hidden" aria-hidden="true">
        <div className="h-8 w-[2px] bg-gradient-to-b from-[#E9DCC6] to-[#D4C5AA]" />
        <svg width="12" height="12" viewBox="0 0 12 12" className="text-[#D4C5AA]">
          <path d="M1 2L6 7L11 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </>
  );
}

export async function HowItWorksSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection id="how-it-works" bg="pain-points">
      <LandingContainer>
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#1F2937]">
            {t('howItWorks.title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="reveal-stagger" className="mt-10 flex flex-col items-center justify-center gap-0 lg:flex-row">
          {steps.map(({ key, number, circleColor, ringColor }, i) => (
            <div key={key} className="reveal-item flex flex-col items-center lg:flex-row">
              {/* Card */}
              <div className="card-hover flex w-full flex-col items-center rounded-[14px] border border-[#E9DCC6] bg-[#FFF7E8] p-6 text-center shadow-sm lg:w-[300px]">
                <div
                  className={`flex size-16 items-center justify-center rounded-full ring-4 ${circleColor} ${ringColor}`}
                >
                  <span className="text-xl font-bold text-white">{number}</span>
                </div>
                <h3 className="mt-4 text-[22px] font-bold text-[#1F2937]">
                  {t(`howItWorks.${key}.title`)}
                </h3>
                <p className="mt-2 text-base leading-[1.4] text-[#6B7280]">
                  {t(`howItWorks.${key}.description`)}
                </p>
              </div>

              {/* Connector (except after last) */}
              {i < steps.length - 1 && <Connector />}
            </div>
          ))}
        </ScrollReveal>
      </LandingContainer>
    </LandingSection>
  );
}

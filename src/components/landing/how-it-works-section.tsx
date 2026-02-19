import { getTranslations } from 'next-intl/server';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';

const steps = [
  { key: 'step1', number: 1, circleColor: 'bg-[#6AA570]' },
  { key: 'step2', number: 2, circleColor: 'bg-[#BF9773]' },
  { key: 'step3', number: 3, circleColor: 'bg-[#6AA570]' },
] as const;

function Connector() {
  return (
    <>
      {/* Horizontal — desktop */}
      <div className="hidden h-0.5 w-14 bg-[#E9DCC6] lg:block" aria-hidden="true" />
      {/* Vertical — mobile */}
      <div className="h-14 w-0.5 bg-[#E9DCC6] lg:hidden" aria-hidden="true" />
    </>
  );
}

export async function HowItWorksSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection id="how-it-works" bg="pain-points">
      <LandingContainer>
        <h2 className="text-center font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#1F2937]">
          {t('howItWorks.title')}
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-0 lg:flex-row">
          {steps.map(({ key, number, circleColor }, i) => (
            <div key={key} className="flex flex-col items-center lg:flex-row">
              {/* Card */}
              <div className="flex w-full flex-col items-center rounded-[14px] border border-[#E9DCC6] bg-[#FFF7E8] p-6 text-center lg:w-[260px]">
                <div
                  className={`flex size-16 items-center justify-center rounded-full ${circleColor}`}
                >
                  <span className="text-xl font-bold text-white">{number}</span>
                </div>
                <h3 className="mt-4 text-[22px] font-bold text-[#1F2937]">
                  {t(`howItWorks.${key}.title`)}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.4] text-[#6B7280]">
                  {t(`howItWorks.${key}.description`)}
                </p>
              </div>

              {/* Connector (except after last) */}
              {i < steps.length - 1 && <Connector />}
            </div>
          ))}
        </div>
      </LandingContainer>
    </LandingSection>
  );
}

import { getTranslations } from 'next-intl/server';
import { LogIn, Settings, Rocket } from 'lucide-react';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';
import { ScrollReveal } from './scroll-reveal';

const steps = [
  {
    key: 'step1',
    number: '01',
    Icon: LogIn,
    gradient: 'from-[var(--color-primary)] to-emerald-400',
    iconBg: 'bg-[var(--color-primary-light)]',
    iconColor: 'text-[var(--color-primary)]',
    line: 'from-[var(--color-primary)] via-[var(--color-primary)]/20 to-transparent',
  },
  {
    key: 'step2',
    number: '02',
    Icon: Settings,
    gradient: 'from-[var(--color-copper)] to-amber-400',
    iconBg: 'bg-[var(--color-copper-light)]',
    iconColor: 'text-[var(--color-copper)]',
    line: 'from-[var(--color-copper)] via-[var(--color-copper)]/20 to-transparent',
  },
  {
    key: 'step3',
    number: '03',
    Icon: Rocket,
    gradient: 'from-[var(--color-accent)] to-blue-400',
    iconBg: 'bg-[var(--color-accent-light)]',
    iconColor: 'text-[var(--color-accent)]',
    line: 'from-[var(--color-accent)] via-[var(--color-accent)]/20 to-transparent',
  },
] as const;

export async function HowItWorksSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection id="how-it-works" bg="green-tint">
      <LandingContainer>
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-poppins)] text-4xl font-bold text-[var(--color-text)]">
            {t('howItWorks.title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="reveal-stagger" className="relative mt-14">
          {/* Connecting line — desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-[2px] bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent lg:block" aria-hidden="true" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map(({ key, number, Icon, iconBg, iconColor, gradient, line }) => (
              <div key={key} className="reveal-item group relative flex flex-col items-center text-center">
                {/* Number + icon stack */}
                <div className="relative">
                  {/* Background glow */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`} />
                  {/* Circle */}
                  <div className={`relative flex size-[104px] items-center justify-center rounded-full border-2 border-[var(--color-border)] bg-white shadow-sm transition-all duration-300 group-hover:border-transparent group-hover:shadow-lg`}>
                    <div className={`flex size-16 items-center justify-center rounded-2xl ${iconBg} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`size-7 ${iconColor}`} aria-hidden="true" />
                    </div>
                  </div>
                  {/* Step number */}
                  <span className={`absolute -right-1 -top-1 flex size-8 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-xs font-bold text-white shadow-md`}>
                    {number}
                  </span>
                </div>

                {/* Vertical accent line */}
                <div className={`mt-5 h-8 w-[2px] bg-gradient-to-b ${line}`} aria-hidden="true" />

                {/* Text */}
                <h3 className="mt-2 text-xl font-bold text-[var(--color-text)]">
                  {t(`howItWorks.${key}.title`)}
                </h3>
                <p className="mt-2 max-w-[280px] text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {t(`howItWorks.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </LandingContainer>
    </LandingSection>
  );
}

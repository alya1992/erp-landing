import { getTranslations } from 'next-intl/server';
import { Flag, Shield, LayoutDashboard, Zap } from 'lucide-react';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';
import { ScrollReveal } from './scroll-reveal';

const cards = [
  {
    key: 'card1',
    Icon: Flag,
    gradient: 'from-[var(--color-primary)] to-emerald-400',
    iconBg: 'bg-[var(--color-primary-light)]',
    iconColor: 'text-[var(--color-primary)]',
    borderHover: 'group-hover:border-[var(--color-primary)]/30',
  },
  {
    key: 'card2',
    Icon: Shield,
    gradient: 'from-[var(--color-copper)] to-amber-400',
    iconBg: 'bg-[var(--color-copper-light)]',
    iconColor: 'text-[var(--color-copper)]',
    borderHover: 'group-hover:border-[var(--color-copper)]/30',
  },
  {
    key: 'card3',
    Icon: LayoutDashboard,
    gradient: 'from-[var(--color-accent)] to-blue-400',
    iconBg: 'bg-[var(--color-accent-light)]',
    iconColor: 'text-[var(--color-accent)]',
    borderHover: 'group-hover:border-[var(--color-accent)]/30',
  },
  {
    key: 'card4',
    Icon: Zap,
    gradient: 'from-violet-500 to-purple-400',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-500',
    borderHover: 'group-hover:border-violet-300/30',
  },
] as const;

export async function WhyUsSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection id="why-us">
      <LandingContainer>
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-poppins)] text-4xl font-bold text-[var(--color-text)]">
            {t('whyUs.title')}
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="reveal-stagger" className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map(({ key, Icon, gradient, iconBg, iconColor, borderHover }) => (
            <div
              key={key}
              className={`reveal-item group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${borderHover}`}
            >
              {/* Background glow on hover */}
              <div className={`pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br ${gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.07]`} aria-hidden="true" />

              <div className="relative flex items-start gap-5">
                {/* Icon */}
                <div className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${iconBg} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`size-7 ${iconColor}`} aria-hidden="true" />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3 className="text-[19px] font-bold text-[var(--color-text)]">
                    {t(`whyUs.${key}.title`)}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                    {t(`whyUs.${key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </LandingContainer>
    </LandingSection>
  );
}

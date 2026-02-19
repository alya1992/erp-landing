import { cn } from '@/lib/utils';

const bgVariants = {
  transparent: '',
  'pain-points': 'bg-[#F4FBF5]',
  'how-it-works': 'bg-[#F2FAF3]',
  integrations: 'bg-[#F8F2FF]',
  footer: 'bg-[#F6FCF7]',
} as const;

interface LandingSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  bg?: keyof typeof bgVariants;
}

export function LandingSection({ children, id, className, style, bg = 'transparent' }: LandingSectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-20 py-22', bgVariants[bg], className)} style={style}>
      {children}
    </section>
  );
}

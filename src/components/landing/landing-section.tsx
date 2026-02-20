import { cn } from '@/lib/utils';

const bgVariants = {
  transparent: '',
  'pain-points': 'bg-gradient-to-b from-[#F4FBF5] to-[#EEF7EF]',
  'how-it-works': 'bg-gradient-to-br from-[#F2FAF3] to-[#F0F6F1]',
  integrations: 'bg-gradient-to-b from-[#F8F2FF] to-[#F3EDFA]',
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

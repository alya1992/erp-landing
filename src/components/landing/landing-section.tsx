import { cn } from '@/lib/utils';

const bgVariants = {
  transparent: '',
  muted: 'bg-[var(--color-surface)]',
  'green-tint': 'bg-gradient-to-b from-[#F0FDF4] to-[var(--color-surface-alt)]',
  'slate-tint': 'bg-[var(--color-surface-muted)]',
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
    <section id={id} className={cn('scroll-mt-20 py-24', bgVariants[bg], className)} style={style}>
      {children}
    </section>
  );
}

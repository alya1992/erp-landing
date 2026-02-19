import { cn } from '@/lib/utils';

interface LandingContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function LandingContainer({ children, className }: LandingContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-5 lg:max-w-[1060px] xl:max-w-[1360px]', className)}>
      {children}
    </div>
  );
}

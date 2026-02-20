import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`flex min-h-dvh flex-col text-[var(--color-text)] ${inter.variable}`}
      style={{
        '--font-sans': 'var(--font-inter)',
        background: 'linear-gradient(180deg, var(--color-surface-alt) 0%, var(--color-surface) 55%, var(--color-surface-alt) 100%)',
      } as React.CSSProperties}
    >
      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(106,165,112,0.06) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Decorative blurred circles */}
      <div className="pointer-events-none fixed -left-32 top-1/4 size-96 rounded-full bg-[var(--color-primary)]/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none fixed -right-32 bottom-1/4 size-96 rounded-full bg-[var(--color-accent)]/5 blur-3xl" aria-hidden="true" />

      {/* Logo top-left */}
      <div className="relative z-10 px-6 pt-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-poppins)] text-2xl font-bold leading-none text-[var(--color-text)] transition-opacity hover:opacity-80"
        >
          <Image src="/logo/erp-logo.png" alt="3DPrint ERP" width={28} height={28} />
          3DPrint<span className="text-[var(--color-primary)]">ERP</span>
        </Link>
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-1 items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
}

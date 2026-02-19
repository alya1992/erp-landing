import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

/**
 * Auth layout — light themed, matching landing page style.
 * No sidebar, no dashboard shell — just centered content with branding.
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`flex min-h-dvh flex-col text-[#1F2937] ${inter.variable}`}
      style={{
        '--font-sans': 'var(--font-inter)',
        background: 'linear-gradient(180deg, #FFF9F2 0%, #FFFDF8 55%, #F7FAFF 100%)',
      } as React.CSSProperties}
    >
      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(106,165,112,0.08) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)',
        }}
      />

      {/* Logo top-left */}
      <div className="relative z-10 px-6 pt-5">
        <Link
          href="/"
          className="font-[family-name:var(--font-poppins)] text-2xl font-bold leading-none text-[#1F2937]"
        >
          3DPrint<span className="text-[#6AA570]">ERP</span>
        </Link>
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-1 items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
}

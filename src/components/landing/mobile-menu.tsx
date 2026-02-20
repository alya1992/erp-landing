'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface MobileMenuProps {
  navLinks: { href: string; label: string }[];
  otherLocale: string;
  isLoggedIn: boolean;
}

export function MobileMenu({ navLinks, otherLocale, isLoggedIn }: MobileMenuProps) {
  const t = useTranslations('Landing');
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const panel = panelRef.current;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length > 0) focusable[0].focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Menu"
        className="flex size-10 items-center justify-center text-[var(--color-text)]"
      >
        {isOpen ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <Menu className="size-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-[72px] z-40 bg-black/20 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />
          {/* Panel */}
          <div
            ref={panelRef}
            className="fixed inset-x-0 top-[72px] z-50 border-b border-[var(--color-border)] bg-white/95 p-5 backdrop-blur-md"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="text-base text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/"
                locale={otherLocale}
                onClick={close}
                className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {otherLocale.toUpperCase()}
              </Link>
              {isLoggedIn ? (
                <Link
                  href="/dashboard"
                  onClick={close}
                  className="btn-primary rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-center text-sm font-bold text-white"
                >
                  {t('nav.dashboard')}
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={close}
                    className="btn-secondary rounded-xl border border-[var(--color-border)] bg-white px-5 py-2.5 text-center text-sm font-semibold text-[var(--color-text)]"
                  >
                    {t('nav.login')}
                  </Link>
                  <Link
                    href="/try"
                    onClick={close}
                    className="btn-primary rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-center text-sm font-bold text-white"
                  >
                    {t('nav.tryFree')}
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { useState, useTransition } from 'react';

export function RequestAccessForm() {
  const t = useTranslations('TryPage');
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'success' | 'already' | 'error'>('idle');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      // Stub: log to console instead of calling ERP backend
      console.log('[RequestAccess] Email submitted:', email.trim());
      // Simulate success after a brief delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      setState('success');
    });
  }

  if (state === 'success') {
    return (
      <div className="rounded-[14px] border border-[#9BC8A7] bg-[#EAFBF1] p-8 text-center">
        <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-[#6AA570]">
          <svg className="size-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#1F2937]">{t('successTitle')}</h3>
        <p className="mt-2 text-[#6B7280]">{t('successDescription')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state !== 'idle') setState('idle');
          }}
          placeholder={t('emailPlaceholder')}
          required
          className="w-full rounded-[11px] border border-[#E9DCC6] bg-[#FFF7E8] px-5 py-4 text-lg text-[#1F2937] placeholder:text-[#A3A89E] outline-none transition-colors focus:border-[#6AA570] focus:ring-2 focus:ring-[#6AA570]/20"
        />
        {state === 'already' && (
          <p className="mt-2 text-sm text-[#BF9773]">{t('alreadySubmitted')}</p>
        )}
        {state === 'error' && (
          <p className="mt-2 text-sm text-red-500">{t('error')}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="btn-primary inline-flex items-center justify-center gap-2 rounded-[11px] bg-[#6AA570] px-7 py-4 text-xl font-bold text-white hover:bg-[#5A9460] disabled:opacity-60"
      >
        {isPending ? t('submitting') : t('submitButton')}
      </button>
    </form>
  );
}

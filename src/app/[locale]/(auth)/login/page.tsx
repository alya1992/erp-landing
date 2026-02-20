'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2Icon, LogInIcon } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().min(1, 'Required').email('Invalid email'),
  password: z.string().min(1, 'Required'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const t = useTranslations('Auth');
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormData) {
    setServerError(null);
    // Stub: simulate login attempt
    console.log('Login attempt:', data.email);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setServerError(t('invalidCredentials'));
  }

  return (
    <div className="w-full max-w-sm" style={{ animation: 'fade-in-up 0.5s ease-out both' }}>
      {/* Card */}
      <div className="rounded-2xl border border-[#E9DCC6] bg-white/80 p-8 shadow-lg backdrop-blur-sm">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-[#6AA570] ring-4 ring-[#6AA570]/10">
            <LogInIcon className="size-7 text-white" />
          </div>
          <h1 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-[#1F2937]">
            {t('login')}
          </h1>
          <p className="text-sm text-[#6B7280]">{t('loginSubtitle')}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          {serverError && (
            <div
              role="alert"
              className="rounded-lg border border-red-300/50 bg-red-50 p-3 text-center text-sm text-red-600"
              style={{ animation: 'fade-in-up 0.3s ease-out both' }}
            >
              {serverError}
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-[#1F2937]">
              {t('email')}
            </label>
            <input
              id="email"
              type="email"
              placeholder="email@example.com"
              autoComplete="email"
              className="block w-full rounded-xl border border-[#E9DCC6] bg-[#FFF7E8]/60 px-4 py-3 text-sm text-[#1F2937] placeholder-[#B0A090] outline-none transition-all focus:border-[#6AA570] focus:bg-white focus:ring-2 focus:ring-[#6AA570]/20"
              {...register('email')}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-[#1F2937]">
              {t('password')}
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="block w-full rounded-xl border border-[#E9DCC6] bg-[#FFF7E8]/60 px-4 py-3 text-sm text-[#1F2937] placeholder-[#B0A090] outline-none transition-all focus:border-[#6AA570] focus:bg-white focus:ring-2 focus:ring-[#6AA570]/20"
              {...register('password')}
              aria-invalid={!!errors.password}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#6AA570] px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#5A9460] hover:shadow-lg active:scale-[0.98] disabled:opacity-50"
          >
            {isSubmitting && <Loader2Icon className="size-4 animate-spin" />}
            {t('signIn')}
          </button>
        </form>
      </div>

      {/* Trust line */}
      <p className="mt-6 text-center text-xs text-[#6B7280]">
        3DPrint ERP — {t('trustLine')}
      </p>
    </div>
  );
}

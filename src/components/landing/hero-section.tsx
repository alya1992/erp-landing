import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { LandingSection } from './landing-section';

/* Status badge styles */
const S = {
  sent:      'bg-amber-50 text-amber-700 border-amber-200',
  draft:     'bg-slate-50 text-slate-500 border-slate-200',
  producing: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  produced:  'bg-green-50 text-green-700 border-green-200',
  ttn:       'bg-blue-50 text-blue-600 border-blue-200',
  delivered: 'bg-green-50 text-green-700 border-green-200',
};

const PAY = { wait: 'Очікує', partial: '5 %', paid: '100 %' } as const;
const DEL = {
  none:    null,
  transit: { label: 'В дорозі', cls: 'text-blue-600' },
  arrived: { label: 'Прибуло',  cls: 'text-green-700' },
};

const orderRows = [
  { id: '353', client: 'Іваненко І.',    status: 'Відправлено',    st: S.sent,      disc: '0', amount: '391 ₴',   pay: PAY.wait,    print: '45h 9m',   ttn: '—',              del: DEL.none,    items: 3,  date: '15.02' },
  { id: '352', client: 'Петренко О.',    status: 'Чернетка',       st: S.draft,     disc: '0', amount: '1 290 ₴', pay: PAY.wait,    print: '96h 14m',  ttn: '—',              del: DEL.none,    items: 6,  date: '14.02' },
  { id: '351', client: 'Коваленко Є.',   status: 'Чернетка',       st: S.draft,     disc: '0', amount: '643 ₴',   pay: PAY.wait,    print: '32h 46m',  ttn: '—',              del: DEL.none,    items: 8,  date: '14.02' },
  { id: '350', client: 'Бондаренко І.',  status: 'Виготовляється', st: S.producing, disc: '0', amount: '170 ₴',   pay: PAY.wait,    print: '2h 16m',   ttn: '—',              del: DEL.none,    items: 1,  date: '14.02' },
  { id: '349', client: 'Шевченко Д.',    status: 'Чернетка',       st: S.draft,     disc: '5', amount: '3 382 ₴', pay: PAY.partial, print: '232h 23m', ttn: '—',              del: DEL.none,    items: 10, date: '14.02' },
  { id: '348', client: 'Мельник А.',     status: 'Створено ТТН',   st: S.ttn,       disc: '0', amount: '682 ₴',   pay: PAY.wait,    print: '68h 52m',  ttn: '—',              del: DEL.none,    items: 6,  date: '14.02' },
  { id: '347', client: 'Ткаченко Ю.',    status: 'Виготовляється', st: S.producing, disc: '0', amount: '900 ₴',   pay: PAY.wait,    print: '87h 44m',  ttn: '—',              del: DEL.none,    items: 1,  date: '14.02' },
  { id: '346', client: 'Савченко Г.',    status: 'Чернетка',       st: S.draft,     disc: '0', amount: '1 565 ₴', pay: PAY.wait,    print: '129h 40m', ttn: '—',              del: DEL.none,    items: 8,  date: '13.02' },
  { id: '345', client: 'Кравченко Т.',   status: 'Виготовляється', st: S.producing, disc: '0', amount: '815 ₴',   pay: PAY.wait,    print: '54h 24m',  ttn: '—',              del: DEL.none,    items: 3,  date: '13.02' },
  { id: '343', client: 'Бондаренко І.',  status: 'Виготовлено',    st: S.produced,  disc: '0', amount: '1 050 ₴', pay: PAY.wait,    print: '58h 31m',  ttn: '—',              del: DEL.none,    items: 10, date: '13.02' },
  { id: '342', client: 'Литвиненко Д.',  status: 'Відправлено',    st: S.sent,      disc: '0', amount: '545 ₴',   pay: PAY.paid,    print: '—',        ttn: '204513689..135', del: DEL.transit,  items: 9,  date: '13.02' },
  { id: '341', client: 'Лебеденко Л.',   status: 'Виготовляється', st: S.producing, disc: '0', amount: '1 700 ₴', pay: PAY.wait,    print: '3h 26m',   ttn: '—',              del: DEL.none,    items: 10, date: '13.02' },
  { id: '340', client: 'Василенко К.',   status: 'Доставлено',     st: S.delivered, disc: '0', amount: '929 ₴',   pay: PAY.paid,    print: '—',        ttn: '204513684..182', del: DEL.arrived,  items: 9,  date: '13.02' },
  { id: '339', client: 'Павленко К.',    status: 'Відправлено',    st: S.sent,      disc: '0', amount: '1 375 ₴', pay: PAY.paid,    print: '—',        ttn: '204513690..899', del: DEL.transit,  items: 9,  date: '13.02' },
];

const clientOrders = [
  { id: '349', date: '14.02.2026', amount: '₴ 3 382',   status: 'Чернетка',  st: 'text-slate-600 bg-slate-100' },
  { id: '315', date: '28.01.2026', amount: '₴ 1 173',   status: 'Завершено', st: 'text-green-700 bg-green-50' },
  { id: '284', date: '09.01.2026', amount: '₴ 285',     status: 'Завершено', st: 'text-green-700 bg-green-50' },
  { id: '252', date: '16.12.2025', amount: '₴ 481',     status: 'Завершено', st: 'text-green-700 bg-green-50' },
  { id: '241', date: '06.12.2025', amount: '₴ 1 300',   status: 'Завершено', st: 'text-green-700 bg-green-50' },
];

export async function HeroSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection className="relative overflow-hidden py-0">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 -top-40 size-[600px] rounded-full bg-[var(--color-primary)]/[0.04] blur-3xl" />
        <div className="absolute -left-40 bottom-0 size-[400px] rounded-full bg-[var(--color-accent)]/[0.03] blur-3xl" />
      </div>

      <h1 className="sr-only">{t('hero.title')}</h1>

      {/* ─── Desktop ─── */}
      <div className="relative mx-auto hidden h-[760px] max-w-[1200px] px-5 lg:block xl:h-[860px] xl:max-w-[1360px]" aria-hidden="true">
        {/* Text + CTAs */}
        <div
          className="absolute left-5 top-[60px] z-30 w-[390px] xl:top-[80px] xl:w-[460px]"
          style={{ animation: 'fade-in-up 0.7s ease-out both' }}
        >
          <p className="font-[family-name:var(--font-poppins)] text-[42px] font-bold leading-[1.05] tracking-tight text-[var(--color-text)] xl:text-[56px]">
            {t('hero.title')}
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-text-muted)] xl:text-lg">
            {t('hero.subtitle')}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 xl:mt-8 xl:gap-4">
            <Link
              href="/try"
              className="btn-primary inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[var(--color-primary-hover)] xl:px-7 xl:py-3.5 xl:text-base"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="#features"
              className="btn-secondary inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-6 py-3 text-[15px] font-semibold text-[var(--color-text)] xl:px-7 xl:py-3.5 xl:text-base"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>

        {/* Orders panel — top right, z-20 */}
        <div
          className="absolute right-5 top-[58px] z-20 w-[620px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-xl xl:w-[700px]"
          style={{ animation: 'slide-in-right 0.8s ease-out 0.2s both' }}
        >
          <div className="border-b border-[var(--color-border)] px-4 py-3">
            <h2 className="text-[15px] font-semibold text-[var(--color-text)]">
              {t('hero.panelTitle')}
            </h2>
          </div>

          <div className="p-3">
            {/* Header */}
            <div className="flex items-center rounded-lg bg-[var(--color-surface-muted)] px-2 py-1.5">
              <span className="w-[28px] text-[11px] font-semibold text-[var(--color-text-light)]">ID</span>
              <span className="w-[80px] text-[11px] font-semibold text-[var(--color-text-light)]">Клієнт</span>
              <span className="w-[90px] text-[11px] font-semibold text-[var(--color-text-light)]">Статус</span>
              <span className="w-[32px] text-[11px] font-semibold text-[var(--color-text-light)]">Зниж.</span>
              <span className="w-[56px] text-right text-[11px] font-semibold text-[var(--color-text-light)]">Сума</span>
              <span className="w-[40px] text-center text-[11px] font-semibold text-[var(--color-text-light)]">Опл.</span>
              <span className="w-[56px] text-right text-[11px] font-semibold text-[var(--color-text-light)]">Друк</span>
              <span className="w-[80px] pl-2 text-[11px] font-semibold text-[var(--color-text-light)]">ТТН</span>
              <span className="w-[52px] pl-1 text-[11px] font-semibold text-[var(--color-text-light)]">Дост.</span>
              <span className="w-[28px] text-center text-[11px] font-semibold text-[var(--color-text-light)]">Поз.</span>
              <span className="w-[38px] text-right text-[11px] font-semibold text-[var(--color-text-light)]">Дата</span>
            </div>

            <div className="mt-1 flex flex-col gap-px">
              {orderRows.map((row) => (
                <div
                  key={row.id}
                  className="flex h-[32px] items-center rounded-lg px-2 transition-colors hover:bg-[var(--color-surface-muted)]"
                >
                  <span className="w-[28px] text-[11px] font-medium text-[var(--color-text-muted)]">{row.id}</span>
                  <span className="w-[80px] truncate text-[11px] font-medium text-[var(--color-text)]">{row.client}</span>
                  <span className="w-[90px]">
                    <span className={`inline-block rounded-full border px-1.5 py-px text-[9px] font-semibold ${row.st}`}>
                      {row.status}
                    </span>
                  </span>
                  <span className="w-[32px] text-[11px] text-[var(--color-text-light)]">{row.disc !== '0' ? `${row.disc}%` : '—'}</span>
                  <span className="w-[56px] text-right text-[11px] font-semibold text-[var(--color-text)]">{row.amount}</span>
                  <span className="w-[40px] text-center text-[11px] text-[var(--color-text-light)]">
                    {row.pay === PAY.paid ? <span className="text-green-600">✓</span> : row.pay === PAY.partial ? row.pay : '—'}
                  </span>
                  <span className="w-[56px] text-right text-[11px] text-[var(--color-text-light)]">{row.print}</span>
                  <span className="w-[80px] truncate pl-2 text-[11px] text-[var(--color-text-light)]">{row.ttn}</span>
                  <span className="w-[52px] pl-1 text-[11px]">
                    {row.del ? <span className={row.del.cls}>{row.del.label}</span> : '—'}
                  </span>
                  <span className="w-[28px] text-center text-[11px] text-[var(--color-text-light)]">{row.items}</span>
                  <span className="w-[38px] text-right text-[11px] text-[var(--color-text-light)]">{row.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client panel — bottom left, z-10, OVERLAPS orders panel */}
        <div
          className="absolute bottom-0 left-5 z-10 w-[700px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-lg xl:w-[800px]"
          style={{ animation: 'fade-in-up 0.9s ease-out 0.4s both' }}
        >
          <div className="border-b border-[var(--color-border)] px-5 py-3">
            <p className="text-[15px] font-semibold text-[var(--color-text)]">Шевченко Дмитро</p>
          </div>

          <div className="flex gap-4 p-4">
            <div className="min-w-0 flex-1 rounded-xl border border-[var(--color-border)] p-3">
              <div className="flex items-center border-b border-[var(--color-border-light)] pb-2">
                <span className="w-[52px] text-[11px] font-semibold uppercase text-[var(--color-text-light)]">Номер</span>
                <span className="w-[86px] text-[11px] font-semibold uppercase text-[var(--color-text-light)]">Дата</span>
                <span className="w-[72px] text-[11px] font-semibold uppercase text-[var(--color-text-light)]">Сума</span>
                <span className="flex-1 text-[11px] font-semibold uppercase text-[var(--color-text-light)]">Статус</span>
              </div>
              <div className="flex flex-col">
                {clientOrders.map((o) => (
                  <div key={o.id} className="flex items-center border-b border-[var(--color-border-light)] py-2 last:border-0">
                    <span className="w-[52px] text-[12px] font-medium text-[var(--color-primary)]">#{o.id}</span>
                    <span className="w-[86px] text-[12px] text-[var(--color-text)]">{o.date}</span>
                    <span className="w-[72px] text-[12px] text-[var(--color-text)]">{o.amount}</span>
                    <span className="flex-1">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${o.st}`}>
                        {o.status}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-[200px] shrink-0 flex-col gap-3 xl:w-[240px]">
              <div className="rounded-xl bg-[var(--color-primary-light)] p-4 text-center">
                <p className="text-xs font-medium text-[var(--color-text-muted)]">Кількість замовлень</p>
                <p className="mt-1 text-3xl font-bold text-[var(--color-primary)]">12</p>
              </div>
              <div className="rounded-xl bg-[var(--color-primary-light)] p-4 text-center">
                <p className="text-xs font-medium text-[var(--color-text-muted)]">Оборот за 30 днів</p>
                <p className="mt-1 text-3xl font-bold text-[var(--color-primary)]">₴17.2K</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile ─── */}
      <div className="relative px-5 py-16 lg:hidden">
        <div className="text-center">
          <p className="font-[family-name:var(--font-poppins)] text-4xl font-bold leading-[1.05] tracking-tight text-[var(--color-text)]" aria-hidden="true">
            {t('hero.title')}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-text-muted)]">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/try"
              className="btn-primary inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3.5 text-base font-semibold text-white hover:bg-[var(--color-primary-hover)]"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="#features"
              className="btn-secondary inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-6 py-3.5 text-base font-semibold text-[var(--color-text)]"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>

        {/* Condensed mobile product visual */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-lg">
          <div className="border-b border-[var(--color-border)] px-4 py-3">
            <p className="text-sm font-semibold text-[var(--color-text)]">{t('hero.panelTitle')}</p>
          </div>
          <div className="flex flex-col gap-px p-3">
            {orderRows.slice(0, 5).map((row) => (
              <div
                key={row.id}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--color-surface-muted)]"
              >
                <span className="text-xs font-semibold text-[var(--color-text-muted)]">#{row.id}</span>
                <span className="text-xs font-medium text-[var(--color-text)]">{row.client}</span>
                <span className={`inline-block rounded-full border px-2 py-px text-[10px] font-semibold ${row.st}`}>
                  {row.status}
                </span>
                <span className="text-xs font-semibold text-[var(--color-text)]">{row.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LandingSection>
  );
}

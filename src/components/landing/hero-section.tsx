import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { LandingSection } from './landing-section';

/* Status badge styles */
const S = {
  sent:      'bg-[#EEF0FF] text-[#BF9773] border-[#CFAE8E]',
  draft:     'bg-white text-[#6B7280] border-[#E9DCC6]',
  producing: 'bg-[#EAFBF1] text-[#6AA570] border-[#9BC8A7]',
  produced:  'bg-[#E0F5E8] text-[#1E8757] border-[#9CD7B6]',
  ttn:       'bg-[#EAF2FF] text-[#2B5DB8] border-[#BFD5FF]',
  delivered: 'bg-[#EAFBF4] text-[#1E8757] border-[#9CD7B6]',
};

const PAY = { wait: 'Очікує', partial: '5 %', paid: '100 %' } as const;
const DEL = {
  none:    null,
  transit: { label: 'В дорозі', cls: 'text-[#2B5DB8]' },
  arrived: { label: 'Прибуло',  cls: 'text-[#1E8757]' },
  storage: { label: 'На складі', cls: 'text-[#BF9773]' },
};

/* Orders table — full 11-column layout */
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

/* Client order history */
const clientOrders = [
  { id: '349', date: '14.02.2026', amount: '₴ 3 382',   status: 'Чернетка',  st: 'text-[#6B7280] bg-[#F3F4F6]' },
  { id: '315', date: '28.01.2026', amount: '₴ 1 173',   status: 'Завершено', st: 'text-[#1E8757] bg-[#E0F5E8]' },
  { id: '284', date: '09.01.2026', amount: '₴ 285',     status: 'Завершено', st: 'text-[#1E8757] bg-[#E0F5E8]' },
  { id: '252', date: '16.12.2025', amount: '₴ 481',     status: 'Завершено', st: 'text-[#1E8757] bg-[#E0F5E8]' },
  { id: '241', date: '06.12.2025', amount: '₴ 1 300',   status: 'Завершено', st: 'text-[#1E8757] bg-[#E0F5E8]' },
];

export async function HeroSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection
      className="py-0"
      style={{
        background:
          'radial-gradient(ellipse 110% 90% at 56% 20%, #6AA57024 0%, #8B5CF620 46%, #FFF9F2 100%)',
      }}
    >
      {/* Accessible H1 — single instance for all screen sizes */}
      <h1 className="sr-only">{t('hero.title')}</h1>

      {/* Desktop — absolute positioning matching Pencil layout */}
      <div className="relative mx-auto hidden h-[760px] max-w-[1200px] px-5 lg:block xl:h-[860px] xl:max-w-[1360px]" aria-hidden="true">
        {/* Text + CTAs — top-left */}
        <div className="absolute left-5 top-[72px] z-20 w-[380px] xl:w-[440px]">
          <p className="font-[family-name:var(--font-poppins)] text-[44px] font-bold leading-[1.02] text-[#1F2937] xl:text-[56px]">
            {t('hero.title')}
          </p>
          <p className="mt-5 text-[17px] leading-[1.42] text-[#6B7280] xl:text-[19px]">
            {t('hero.subtitle')}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/try"
              className="inline-flex items-center gap-2 rounded-[11px] bg-[#6AA570] px-6 py-3.5 text-lg font-bold text-[#1F3D2A] transition-colors hover:bg-[#5A9460]"
            >
              {t('hero.ctaPrimary')}
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-[11px] border border-[#E9DCC6] bg-white px-6 py-3.5 text-lg font-semibold text-[#1F2937] transition-colors hover:border-[#D4C5AA]"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>

        {/* Orders panel — top-right, FRONT layer */}
        <div
          className="absolute right-5 top-[58px] z-10 w-[620px] rounded-[14px] border border-[#E9DCC6] bg-white p-[14px] xl:w-[700px]"
          style={{ boxShadow: '0 20px 38px #15152229' }}
        >
          <h2 className="mb-2 text-lg font-bold text-[#1F2937]">
            {t('hero.panelTitle')}
          </h2>

          {/* Header */}
          <div className="flex items-center rounded-[7px] bg-[#F3F8F4] px-2 py-1.5">
            <span className="w-[28px] text-[10px] font-semibold text-[#6B7280]">ID</span>
            <span className="w-[80px] text-[10px] font-semibold text-[#6B7280]">Клієнт</span>
            <span className="w-[90px] text-[10px] font-semibold text-[#6B7280]">Статус</span>
            <span className="w-[32px] text-[10px] font-semibold text-[#6B7280]">Зниж.</span>
            <span className="w-[56px] text-right text-[10px] font-semibold text-[#6B7280]">Сума</span>
            <span className="w-[40px] text-center text-[10px] font-semibold text-[#6B7280]">Опл.</span>
            <span className="w-[56px] text-right text-[10px] font-semibold text-[#6B7280]">Друк</span>
            <span className="w-[80px] pl-2 text-[10px] font-semibold text-[#6B7280]">ТТН</span>
            <span className="w-[52px] pl-1 text-[10px] font-semibold text-[#6B7280]">Дост.</span>
            <span className="w-[28px] text-center text-[10px] font-semibold text-[#6B7280]">Поз.</span>
            <span className="w-[38px] text-right text-[10px] font-semibold text-[#6B7280]">Дата</span>
          </div>

          {/* Rows */}
          <div className="mt-1 flex flex-col gap-[3px]">
            {orderRows.map((row) => (
              <div
                key={row.id}
                className="flex h-[32px] items-center rounded-[6px] border border-[#E9DCC6] bg-white px-2"
              >
                <span className="w-[28px] text-[10px] font-semibold text-[#6B7280]">{row.id}</span>
                <span className="w-[80px] truncate text-[10px] font-medium text-[#1F2937]">{row.client}</span>
                <span className="w-[90px]">
                  <span className={`inline-block rounded-full border px-1.5 py-px text-[9px] font-semibold ${row.st}`}>
                    {row.status}
                  </span>
                </span>
                <span className="w-[32px] text-[10px] text-[#6B7280]">{row.disc !== '0' ? `${row.disc}%` : '—'}</span>
                <span className="w-[56px] text-right text-[10px] font-semibold text-[#1F2937]">{row.amount}</span>
                <span className="w-[40px] text-center text-[10px] text-[#6B7280]">
                  {row.pay === PAY.paid ? <span className="text-[#1E8757]">✓</span> : row.pay === PAY.partial ? row.pay : '—'}
                </span>
                <span className="w-[56px] text-right text-[10px] text-[#6B7280]">{row.print}</span>
                <span className="w-[80px] truncate pl-2 text-[10px] text-[#6B7280]">{row.ttn}</span>
                <span className="w-[52px] pl-1 text-[10px]">
                  {row.del ? <span className={row.del.cls}>{row.del.label}</span> : '—'}
                </span>
                <span className="w-[28px] text-center text-[10px] text-[#6B7280]">{row.items}</span>
                <span className="w-[38px] text-right text-[10px] text-[#6B7280]">{row.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client panel — bottom-left, BACK layer */}
        <div
          className="absolute bottom-0 left-5 z-0 w-[700px] rounded-[14px] border border-[#E9DCC6] bg-white p-[18px] xl:w-[800px]"
          style={{ boxShadow: '0 22px 40px #15152222' }}
        >
          <p className="mb-3 text-[17px] font-bold text-[#1F2937]">
            Шевченко Дмитро
          </p>

          <div className="flex gap-3.5">
            {/* Order history */}
            <div className="min-w-0 flex-1 rounded-[10px] border border-[#E9DCC6] bg-white p-3">
              <div className="flex items-center border-b border-[#E9DCC6]/60 pb-2">
                <span className="w-[52px] text-[11px] font-semibold uppercase text-[#6B7280]">Номер</span>
                <span className="w-[86px] text-[11px] font-semibold uppercase text-[#6B7280]">Дата</span>
                <span className="w-[72px] text-[11px] font-semibold uppercase text-[#6B7280]">Сума</span>
                <span className="flex-1 text-[11px] font-semibold uppercase text-[#6B7280]">Статус</span>
              </div>
              <div className="flex flex-col">
                {clientOrders.map((o) => (
                  <div key={o.id} className="flex items-center border-b border-[#E9DCC6]/30 py-2 last:border-0">
                    <span className="w-[52px] text-[12px] font-medium text-[#6AA570]">#{o.id}</span>
                    <span className="w-[86px] text-[12px] text-[#1F2937]">{o.date}</span>
                    <span className="w-[72px] text-[12px] text-[#1F2937]">{o.amount}</span>
                    <span className="flex-1">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${o.st}`}>
                        {o.status}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats sidebar */}
            <div className="flex w-[200px] shrink-0 flex-col gap-3 xl:w-[240px]">
              <div className="rounded-[10px] border border-[#E9DCC6] p-3 text-center">
                <p className="text-xs font-medium text-[#6B7280]">Кількість замовлень</p>
                <p className="mt-1 text-3xl font-bold text-[#6AA570]">12</p>
              </div>
              <div className="rounded-[10px] border border-[#E9DCC6] p-3 text-center">
                <p className="text-xs font-medium text-[#6B7280]">Оборот за 30 днів</p>
                <p className="mt-1 text-3xl font-bold text-[#6AA570]">₴17.2K</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile — text only */}
      <div className="px-5 py-14 text-center lg:hidden">
        <p className="font-[family-name:var(--font-poppins)] text-4xl font-bold leading-[1.05] text-[#1F2937]" aria-hidden="true">
          {t('hero.title')}
        </p>
        <p className="mt-5 text-lg text-[#6B7280]">
          {t('hero.subtitle')}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/try"
            className="inline-flex items-center gap-2 rounded-[11px] bg-[#6AA570] px-6 py-3.5 text-lg font-bold text-[#1F3D2A] transition-colors hover:bg-[#5A9460]"
          >
            {t('hero.ctaPrimary')}
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-[11px] border border-[#E9DCC6] bg-white px-6 py-3.5 text-lg font-semibold text-[#1F2937] transition-colors hover:border-[#D4C5AA]"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </div>
    </LandingSection>
  );
}

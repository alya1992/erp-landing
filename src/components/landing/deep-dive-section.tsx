import { getTranslations } from 'next-intl/server';
import { LandingContainer } from './landing-container';
import { LandingSection } from './landing-section';
import { ScrollReveal } from './scroll-reveal';

/* ── Block A visual: Production Queue ───────────────────────── */
const queueRows = [
  { color: 'bg-[#EAFBF4]', name: 'Товар A', client: 'Клієнт 11', qty: '25 шт', time: '50 хв', order: '#351' },
  { color: 'bg-[#EAFBF1]', name: 'Товар B', client: 'Клієнт 12', qty: '5 шт', time: '1 год', order: '#350' },
  { color: 'bg-[#EEF0FF]', name: 'Товар C', client: 'Клієнт 13', qty: '1 шт', time: '2 год', order: '#349' },
  { color: 'bg-[#EAF2FF]', name: 'Товар D', client: 'Клієнт 14', qty: '9 шт', time: '40 хв', order: '#348' },
];

function ProductionVisual({ title }: { title: string }) {
  return (
    <div className="flex h-[340px] flex-col gap-3 rounded-[14px] border border-[#E9DCC6] bg-white p-[18px] transition-shadow duration-300 hover:shadow-lg">
      <p className="text-base font-semibold text-[#1F2937]">{title}</p>

      {/* Header */}
      <div className="flex items-center justify-between rounded-[10px] bg-[#F3F8F4] px-2.5 py-1.5">
        <span className="w-[28px] text-xs font-semibold text-[#6B7280]">Фото</span>
        <span className="w-[80px] text-xs font-semibold text-[#6B7280]">Назва товару</span>
        <span className="w-[70px] text-xs font-semibold text-[#6B7280]">Клієнт</span>
        <span className="w-[50px] text-xs font-semibold text-[#6B7280]">К-сть</span>
        <span className="w-[46px] text-xs font-semibold text-[#6B7280]">Час</span>
        <span className="w-[40px] text-xs font-semibold text-[#6B7280]">Зам.</span>
      </div>

      {/* Rows */}
      <div className="flex flex-1 flex-col gap-2">
        {queueRows.map((row) => (
          <div
            key={row.order}
            className="flex h-[44px] items-center justify-between rounded-[10px] border border-[#E9DCC6] bg-white px-2.5"
          >
            <div className={`size-[22px] rounded-[6px] ${row.color}`} />
            <span className="w-[80px] text-[13px] font-medium text-[#1F2937]">{row.name}</span>
            <span className="w-[70px] text-[13px] font-medium text-[#6B7280]">{row.client}</span>
            <span className="w-[50px]">
              <span className="inline-block rounded-full bg-[#EAF2FF] px-2 py-0.5 text-[11px] font-semibold text-[#2B5DB8]">
                {row.qty}
              </span>
            </span>
            <span className="w-[46px] text-[13px] font-medium text-[#1F2937]">{row.time}</span>
            <span className="w-[40px] text-[13px] font-semibold text-[#6AA570]">{row.order}</span>
          </div>
        ))}
      </div>

      <p className="text-xs font-medium text-[#6B7280]">Усього в черзі: 7 позицій (демо-дані)</p>
    </div>
  );
}

/* ── Block B visual: Payment matching ───────────────────────── */
function PaymentsVisual({ title }: { title: string }) {
  return (
    <div className="flex h-[340px] flex-col gap-3 rounded-[14px] border border-[#E9DCC6] bg-white p-[18px] transition-shadow duration-300 hover:shadow-lg">
      <p className="text-base font-semibold text-[#1F2937]">{title}</p>

      {/* Two-column layout */}
      <div className="flex flex-1 gap-3">
        {/* Left: strategies */}
        <div className="flex flex-1 flex-col gap-2.5 rounded-xl border border-[#E9DCC6] bg-[#FFFDF7] p-3.5">
          <p className="text-sm font-semibold text-[#1F2937]">6 стратегій розпізнавання</p>
          <p className="text-sm text-[#6B7280]">✓ За номером замовлення</p>
          <p className="text-sm text-[#6B7280]">✓ За сумою платежу</p>
          <p className="text-sm text-[#6B7280]">✓ За телефоном клієнта</p>
        </div>
        {/* Right: QR */}
        <div className="flex w-[184px] flex-col items-center gap-2.5 rounded-xl border border-[#E9DCC6] bg-[#FFFDF7] p-3.5">
          <p className="text-[13px] font-semibold text-[#1F2937]">QR НБУ</p>
          <div className="flex size-[112px] items-center justify-center rounded-[10px] border-2 border-[#1F2937] bg-[#BF9773]">
            <span className="font-[family-name:var(--font-poppins)] text-[32px] font-bold text-[#1F2937]">QR</span>
          </div>
          <p className="text-center text-xs text-[#6B7280]">Клієнт сканує та оплачує миттєво</p>
        </div>
      </div>

      {/* Stat bar */}
      <div className="flex items-center justify-between rounded-[10px] border border-[#CFAE8E] bg-[#EEF0FF] px-3.5 py-2.5">
        <span className="text-sm text-[#1F2937]">91% платежів зіставляються автоматично</span>
        <span className="font-[family-name:var(--font-poppins)] text-lg font-bold text-[#6AA570]">+6.2x</span>
      </div>
    </div>
  );
}

/* ── Block C visual: Shipping tracking ──────────────────────── */
const timelineSteps = [
  { label: 'Прийнято у відділенні №12', color: 'bg-[#BF9773]' },
  { label: 'Транзитний хаб Київ', color: 'bg-[#6AA570]' },
  { label: 'Готується до видачі клієнту', color: 'bg-[#ECEFF4]' },
];

function ShippingVisual({ title }: { title: string }) {
  return (
    <div className="flex h-[340px] flex-col gap-3 rounded-[14px] border border-[#E9DCC6] bg-white p-[18px] transition-shadow duration-300 hover:shadow-lg">
      <p className="text-base font-semibold text-[#1F2937]">{title}</p>

      {/* Summary bar */}
      <div className="flex items-center justify-between rounded-[10px] border border-[#9BC8A7] bg-[#EAFBF1] px-3.5 py-2.5">
        <span className="text-sm text-[#1F2937]">ТТН 20450999821 · Нова Пошта</span>
        <span className="text-sm font-semibold text-[#6AA570]">В дорозі</span>
      </div>

      {/* Timeline */}
      <div className="flex flex-1 flex-col gap-3 rounded-xl border border-[#E9DCC6] bg-[#FFFDF7] p-3.5">
        {timelineSteps.map((step) => (
          <div key={step.label} className="flex items-center gap-2.5">
            <div className={`size-3 rounded-full ${step.color}`} />
            <span className="text-sm text-[#6B7280]">{step.label}</span>
          </div>
        ))}
      </div>

      <p className="text-[13px] text-[#6B7280]">Клієнт і менеджер бачать однаковий актуальний статус</p>
    </div>
  );
}

/* ── Block D visual: Costing calculator ─────────────────────── */
const costBreakdown = [
  { label: 'Філамент', pct: 35, color: 'bg-[#6AA570]' },
  { label: 'Електрика', pct: 12, color: 'bg-[#BF9773]' },
  { label: 'Знос принтера', pct: 18, color: 'bg-[#2B5DB8]' },
  { label: 'Праця', pct: 25, color: 'bg-[#8B5CF6]' },
  { label: 'Компоненти', pct: 10, color: 'bg-[#E9DCC6]' },
];

const costItems = [
  { name: 'Настільний тримач', cost: '₴ 38', price: '₴ 85', margin: '55%', marginColor: 'text-[#1E8757]' },
  { name: 'Корпус контролера', cost: '₴ 124', price: '₴ 250', margin: '50%', marginColor: 'text-[#1E8757]' },
  { name: 'Декоративна фігурка', cost: '₴ 67', price: '₴ 120', margin: '44%', marginColor: 'text-[#BF9773]' },
];

function CostingVisual({ title }: { title: string }) {
  return (
    <div className="flex h-[340px] flex-col gap-3 rounded-[14px] border border-[#E9DCC6] bg-white p-[18px] transition-shadow duration-300 hover:shadow-lg">
      <p className="text-base font-semibold text-[#1F2937]">{title}</p>

      {/* Stacked bar chart */}
      <div className="rounded-xl border border-[#E9DCC6] bg-[#FFFDF7] p-3.5">
        <p className="mb-2 text-sm font-semibold text-[#1F2937]">Розбивка собівартості</p>
        <div className="flex h-6 overflow-hidden rounded-full">
          {costBreakdown.map((item) => (
            <div
              key={item.label}
              className={`${item.color} flex items-center justify-center`}
              style={{ width: `${item.pct}%` }}
            >
              <span className="text-[9px] font-bold text-white">{item.pct}%</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          {costBreakdown.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div className={`size-2.5 rounded-full ${item.color}`} />
              <span className="text-[11px] text-[#6B7280]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mini-table */}
      <div className="flex flex-1 flex-col rounded-xl border border-[#E9DCC6] bg-[#FFFDF7] p-3.5">
        <div className="flex items-center border-b border-[#E9DCC6]/60 pb-1.5">
          <span className="flex-1 text-[11px] font-semibold text-[#6B7280]">Товар</span>
          <span className="w-[60px] text-right text-[11px] font-semibold text-[#6B7280]">Собів.</span>
          <span className="w-[60px] text-right text-[11px] font-semibold text-[#6B7280]">Ціна</span>
          <span className="w-[50px] text-right text-[11px] font-semibold text-[#6B7280]">Маржа</span>
        </div>
        {costItems.map((item) => (
          <div key={item.name} className="flex items-center border-b border-[#E9DCC6]/30 py-1.5 last:border-0">
            <span className="flex-1 text-[12px] font-medium text-[#1F2937]">{item.name}</span>
            <span className="w-[60px] text-right text-[12px] text-[#6B7280]">{item.cost}</span>
            <span className="w-[60px] text-right text-[12px] font-semibold text-[#1F2937]">{item.price}</span>
            <span className={`w-[50px] text-right text-[12px] font-bold ${item.marginColor}`}>{item.margin}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main section ────────────────────────────────────────────── */
export async function DeepDiveSection() {
  const t = await getTranslations('Landing');

  return (
    <LandingSection id="deep-dive" className="py-24">
      <LandingContainer>
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-poppins)] text-4xl font-bold text-[#1F2937]">
            {t('deepDive.title')}
          </h2>
        </ScrollReveal>

        <div className="mt-14 space-y-14">
          {/* Block A — Production */}
          <div className="flex min-h-[360px] flex-col items-center gap-8 xl:flex-row">
            <ScrollReveal variant="reveal-left" className="flex-1">
              <span className="text-xs font-bold uppercase tracking-[1.4px] text-[#6AA570]">
                {t('deepDive.orders.label')}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-poppins)] text-[32px] font-bold leading-[1.2] text-[#1F2937]">
                {t('deepDive.orders.title')}
              </h3>
              <p className="mt-3 text-base leading-[1.45] text-[#6B7280]">
                {t('deepDive.orders.description')}
              </p>
            </ScrollReveal>
            <ScrollReveal variant="reveal-right" className="w-full flex-1">
              <ProductionVisual title={t('deepDive.orders.panelTitle')} />
            </ScrollReveal>
          </div>

          {/* Block B — Payments (reversed) */}
          <div className="flex min-h-[360px] flex-col items-center gap-8 xl:flex-row-reverse">
            <ScrollReveal variant="reveal-right" className="flex-1 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[1.4px] text-[#BF9773]">
                {t('deepDive.payments.label')}
              </span>
              <h3 className="font-[family-name:var(--font-poppins)] text-[32px] font-bold leading-[1.2] text-[#1F2937]">
                {t('deepDive.payments.title')}
              </h3>
              <span className="inline-block rounded-full border border-[#6AA570] bg-[#EAFBF1] px-2.5 py-1 text-[11px] font-semibold text-[#2F5D3F]">
                Monobank BETA · в процесі інтеграції
              </span>
              <p className="text-base leading-[1.45] text-[#6B7280]">
                {t('deepDive.payments.description')}
              </p>
            </ScrollReveal>
            <ScrollReveal variant="reveal-left" className="w-full flex-1">
              <PaymentsVisual title={t('deepDive.payments.panelTitle')} />
            </ScrollReveal>
          </div>

          {/* Block C — Shipping */}
          <div className="flex min-h-[360px] flex-col items-center gap-8 xl:flex-row">
            <ScrollReveal variant="reveal-left" className="flex-1">
              <span className="text-xs font-bold uppercase tracking-[1.4px] text-[#6AA570]">
                {t('deepDive.shipping.label')}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-poppins)] text-[32px] font-bold leading-[1.2] text-[#1F2937]">
                {t('deepDive.shipping.title')}
              </h3>
              <p className="mt-3 text-base leading-[1.45] text-[#6B7280]">
                {t('deepDive.shipping.description')}
              </p>
            </ScrollReveal>
            <ScrollReveal variant="reveal-right" className="w-full flex-1">
              <ShippingVisual title={t('deepDive.shipping.panelTitle')} />
            </ScrollReveal>
          </div>

          {/* Block D — Costing (reversed) */}
          <div className="flex min-h-[360px] flex-col items-center gap-8 xl:flex-row-reverse">
            <ScrollReveal variant="reveal-right" className="flex-1 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[1.4px] text-[#BF9773]">
                {t('deepDive.costing.label')}
              </span>
              <h3 className="font-[family-name:var(--font-poppins)] text-[32px] font-bold leading-[1.2] text-[#1F2937]">
                {t('deepDive.costing.title')}
              </h3>
              <p className="text-base leading-[1.45] text-[#6B7280]">
                {t('deepDive.costing.description')}
              </p>
            </ScrollReveal>
            <ScrollReveal variant="reveal-left" className="w-full flex-1">
              <CostingVisual title={t('deepDive.costing.panelTitle')} />
            </ScrollReveal>
          </div>
        </div>
      </LandingContainer>
    </LandingSection>
  );
}

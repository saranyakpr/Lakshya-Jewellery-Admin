function DashboardPage() {
  return (
    <section className='flex flex-col gap-4 rounded-[1.75rem] bg-white/45 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] ring-1 ring-white/60 sm:p-5'>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between'>
        <div>
          <h1 className='text-[1.75rem] font-black tracking-[-0.03em] text-[var(--text-primary)]'>
            Dashboard
          </h1>
          <p className='mt-1 text-sm text-[var(--text-muted)]'>
            Welcome back, Amit! Here&apos;s what&apos;s happening today.
          </p>
        </div>

        <div className='flex flex-wrap items-center gap-3'>
          <button className='rounded-xl border border-[var(--panel-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-primary)] shadow-sm transition hover:border-[var(--brand-300)] hover:bg-[var(--brand-50)]'>
            Last 30 Days
            <span className='ml-2 text-[0.7rem] text-[var(--text-muted)]'>v</span>
          </button>

          <button className='rounded-xl border border-[var(--panel-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--text-primary)] shadow-sm transition hover:border-[var(--brand-300)] hover:bg-[var(--brand-50)]'>
            Export
          </button>

          <button className='rounded-xl bg-[var(--brand-700)] px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(114,23,104,0.22)] transition hover:bg-[var(--brand-800)]'>
            + Quick Add
          </button>
        </div>
      </div>

      <div className='min-h-[28rem] rounded-[1.5rem] border border-dashed border-[var(--panel-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.66),rgba(246,238,244,0.84))]'></div>
    </section>
  )
}

export default DashboardPage

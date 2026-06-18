function MenuPage({ title, description, parentLabel }) {
  return (
    <section className='flex flex-col gap-4 rounded-[1.75rem] bg-white/45 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] ring-1 ring-white/60 sm:p-5'>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between'>
        <div>
          {parentLabel ? (
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]'>
              {parentLabel}
            </p>
          ) : null}
          <h1 className='mt-1 text-[1.75rem] font-black tracking-[-0.03em] text-[var(--text-primary)]'>
            {title}
          </h1>
          <p className='mt-1 text-sm text-[var(--text-muted)]'>{description}</p>
        </div>

        <div className='flex flex-wrap items-center gap-3'>
          <button className='rounded-xl border border-[var(--panel-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-primary)] shadow-sm transition hover:border-[var(--brand-300)] hover:bg-[var(--brand-50)]'>
            Overview
          </button>
          <button className='rounded-xl border border-[var(--panel-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--text-primary)] shadow-sm transition hover:border-[var(--brand-300)] hover:bg-[var(--brand-50)]'>
            Export
          </button>
        </div>
      </div>

      <div className='grid gap-4 lg:grid-cols-[1.15fr_0.85fr]'>
        <div className='min-h-[20rem] rounded-[1.5rem] border border-dashed border-[var(--panel-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(247,240,245,0.92))] p-5'>
          <h2 className='text-lg font-bold text-[var(--text-primary)]'>{title} Workspace</h2>
          <p className='mt-2 max-w-xl text-sm text-[var(--text-muted)]'>{description}</p>
        </div>

        <div className='min-h-[20rem] rounded-[1.5rem] border border-dashed border-[var(--panel-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(247,240,245,0.92))] p-5'>
          <h2 className='text-lg font-bold text-[var(--text-primary)]'>Next Step</h2>
          <p className='mt-2 text-sm text-[var(--text-muted)]'>
            This route is ready for the real {title.toLowerCase()} module UI and data integration.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MenuPage

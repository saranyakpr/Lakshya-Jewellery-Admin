import PageLayout from '../components/PageLayout'

function MenuPage({ title, description, parentLabel }) {
  return (
    <PageLayout
      eyebrow={parentLabel}
      title={title}
      description={description}
      actions={
        <>
          <button className='rounded-xl border border-[var(--panel-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-primary)] shadow-sm transition hover:border-[var(--brand-300)] hover:bg-[var(--brand-50)]'>
            Overview
          </button>
          <button className='rounded-xl border border-[var(--panel-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--text-primary)] shadow-sm transition hover:border-[var(--brand-300)] hover:bg-[var(--brand-50)]'>
            Export
          </button>
        </>
      }
    >
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
    </PageLayout>
  )
}

export default MenuPage

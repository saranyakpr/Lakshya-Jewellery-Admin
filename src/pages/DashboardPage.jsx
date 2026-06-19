import PageLayout from '../components/PageLayout'

function DashboardPage() {
  return (
    <PageLayout
      title='Dashboard'
      description="Welcome back, Amit! Here's what's happening today."
      actions={
        <>
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
        </>
      }
    />
  )
}

export default DashboardPage

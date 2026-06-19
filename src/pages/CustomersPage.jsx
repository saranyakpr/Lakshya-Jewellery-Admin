import PageLayout from '../components/PageLayout'

function CustomersPage() {
  return (
    <PageLayout
      title='Customers'
      description='Manage customer accounts, history, and engagement from one place.'
      actions={
        <>
          <button className='rounded-xl border border-[var(--panel-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-primary)] shadow-sm transition hover:border-[var(--brand-300)] hover:bg-[var(--brand-50)]'>
            Active Customers
            <span className='ml-2 text-[0.7rem] text-[var(--text-muted)]'>v</span>
          </button>

          <button className='rounded-xl border border-[var(--panel-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--text-primary)] shadow-sm transition hover:border-[var(--brand-300)] hover:bg-[var(--brand-50)]'>
            Export
          </button>

          <button className='rounded-xl bg-[var(--brand-700)] px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(114,23,104,0.22)] transition hover:bg-[var(--brand-800)]'>
            + Add Customer
          </button>
        </>
      }
    >
      <div className='grid gap-4 lg:grid-cols-[1.2fr_0.8fr]'>
        <div className='min-h-[20rem] rounded-[1.5rem] border border-dashed border-[var(--panel-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(247,240,245,0.92))] p-5'>
          <h2 className='text-lg font-bold text-[var(--text-primary)]'>Customer Overview</h2>
          <p className='mt-2 max-w-xl text-sm text-[var(--text-muted)]'>
            This page is ready for your customer table, profile drawer, loyalty info, and order history modules.
          </p>
        </div>

        <div className='min-h-[20rem] rounded-[1.5rem] border border-dashed border-[var(--panel-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(247,240,245,0.92))] p-5'>
          <h2 className='text-lg font-bold text-[var(--text-primary)]'>Segments</h2>
          <p className='mt-2 text-sm text-[var(--text-muted)]'>
            Add VIP tiers, repeat buyers, abandoned carts, and CRM filters here.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default CustomersPage

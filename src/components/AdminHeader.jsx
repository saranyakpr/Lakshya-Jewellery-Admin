import AppIcon from './AppIcon'

function IconButton({ icon, badge, className = '' }) {
  return (
    <button
      className={`relative flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--panel-border)] bg-white text-[var(--text-muted)] shadow-sm transition hover:border-[var(--brand-300)] hover:text-[var(--brand-700)] ${className}`}
    >
      <AppIcon name={icon} className='h-4 w-4' />
      {badge ? (
        <span className='absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--danger)] px-1 text-[0.6rem] font-bold text-white'>
          {badge}
        </span>
      ) : null}
    </button>
  )
}

function AdminHeader({ onMenuClick }) {
  return (
    <header className='sticky top-0 z-20 border-b border-white/70 bg-white/86 backdrop-blur-xl'>
      <div className='flex flex-wrap items-center gap-3 px-4 py-3 sm:px-6 lg:px-8'>
        <button
          type='button'
          onClick={onMenuClick}
          className='flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--panel-border)] bg-white text-[var(--brand-700)] shadow-sm transition hover:border-[var(--brand-300)] lg:hidden'
          aria-label='Open sidebar'
        >
          <AppIcon name='menu' className='h-4 w-4' />
        </button>

        <div className='order-3 w-full sm:order-none sm:min-w-[16rem] sm:flex-1'>
          <label className='flex h-10 items-center gap-2 rounded-xl border border-[var(--panel-border)] bg-[#fbf8fa] px-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]'>
            <AppIcon name='search' className='h-4 w-4 text-[var(--text-muted)]' />
            <input
              type='text'
              placeholder='Search products, orders, customers...'
              className='w-full border-none bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]'
            />
          </label>
        </div>

        <div className='ml-auto flex items-center gap-2 sm:gap-3'>
          <div className='hidden rounded-xl border border-[#f4d599] bg-[var(--gold-bg)] px-3 py-1.5 text-sm font-semibold text-[var(--gold-text)] shadow-sm sm:block'>
            Gold: Rs. 6,842/g
          </div>

          <IconButton icon='moon' />
          <IconButton icon='bell' />
          <IconButton icon='plus' badge='2' />

          <div className='flex items-center gap-3 rounded-xl border border-[var(--panel-border)] bg-[#fbf7f9] px-3 py-1.5 shadow-sm'>
            <div className='flex h-7 w-7 items-center justify-center rounded-full bg-[#f2d081] text-[0.7rem] font-bold text-[#744400]'>
              A
            </div>
            <span className='hidden text-sm font-semibold text-[var(--text-primary)] sm:inline'>
              Admin
            </span>
            <span className='text-[0.65rem] text-[var(--text-muted)]'>v</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader

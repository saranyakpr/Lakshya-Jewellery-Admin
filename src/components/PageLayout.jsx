function PageLayout({ eyebrow, title, description, actions, children }) {
  return (
    <section className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
        <div>
          {eyebrow ? (
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]'>
              {eyebrow}
            </p>
          ) : null}

          <h1 className={`${eyebrow ? 'mt-1' : ''} text-[1.7rem] font-black tracking-[-0.03em] text-[var(--text-primary)]`}>
            {title}
          </h1>
          <p className='mt-1 text-sm text-[var(--text-muted)]'>{description}</p>
        </div>

        {actions ? <div className='flex flex-wrap items-center gap-3'>{actions}</div> : null}
      </div>

      {children}
    </section>
  )
}

export default PageLayout

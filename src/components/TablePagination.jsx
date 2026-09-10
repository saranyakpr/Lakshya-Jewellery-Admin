function TablePagination({ label, pages = [1], activePage = 1, onPageChange, onPrev, onNext }) {
  return (
    <div className='mt-6 flex flex-col gap-3 border-t border-[#efe3ed] pt-4 sm:flex-row sm:items-center sm:justify-between'>
      <p className='text-sm text-[#7e6d83]'>{label}</p>
      <div className='flex items-center gap-2'>
        <button
          type='button'
          onClick={onPrev}
          className='rounded-full border border-[#e9d8f0] bg-white px-4 py-2 text-sm text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff]'
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            type='button'
            onClick={() => onPageChange?.(page)}
            className={
              page === activePage
                ? 'rounded-full bg-[var(--brand-700)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--brand-800)]'
                : 'rounded-full border border-[#e9d8f0] bg-white px-4 py-2 text-sm text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff]'
            }
          >
            {page}
          </button>
        ))}
        <button
          type='button'
          onClick={onNext}
          className='rounded-full border border-[#e9d8f0] bg-white px-4 py-2 text-sm text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff]'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TablePagination

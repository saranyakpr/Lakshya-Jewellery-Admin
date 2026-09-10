import { FiChevronDown, FiSearch } from 'react-icons/fi'

function SearchFilterBar({ searchPlaceholder = 'Search...', searchAriaLabel = 'Search', filters = [] }) {
  return (
    <div className='mb-4 flex flex-col gap-3 rounded-2xl border border-[#efe3ed] bg-white p-3 shadow-[0_10px_28px_rgba(81,28,96,0.05)] sm:p-4 lg:flex-row lg:flex-nowrap lg:items-center'>
      <div className='flex w-full items-center gap-2 rounded-xl bg-[#f7f2f6] px-4 py-2 lg:w-56 lg:shrink-0'>
        <FiSearch className='h-4 w-4 shrink-0 !text-[#8c529d]' />
        <input
          type='text'
          aria-label={searchAriaLabel}
          placeholder={searchPlaceholder}
          className='w-full min-w-0 bg-transparent text-sm !text-[#362940] outline-none placeholder:text-[#9c8ca0]'
        />
      </div>

      <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-1 lg:flex-nowrap lg:gap-3'>
        {filters.map((filter) => (
          <div key={filter.label} className='relative min-w-0 lg:flex-1'>
            <select
              aria-label={filter.label}
              defaultValue={filter.options[0]}
              className='w-full appearance-none rounded-xl bg-[#f7f2f6] py-2 pl-4 pr-9 text-sm !font-medium !text-[#5f4b6e] outline-none transition hover:bg-[#f1e6f4] cursor-pointer'
            >
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FiChevronDown className='pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7d6a83]' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchFilterBar

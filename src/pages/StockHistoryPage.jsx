import {
  FiBarChart2,
  FiCalendar,
  FiChevronDown,
  FiFilter,
  FiList,
  FiMinusCircle,
  FiSearch,
  FiSliders,
  FiTrendingUp,
} from 'react-icons/fi'
import { PiExportBold } from 'react-icons/pi'
import PageLayout from '../components/PageLayout'
import DataTable from '../components/DataTable'
import { OutlineButton } from '../components/ToolbarButtons'
import { stockHistory } from '../data/stockHistory'

const statCards = [
  {
    label: 'TOTAL TRANSACTIONS',
    value: '1,248',
    subtext: 'All time',
    icon: FiList,
    iconBg: 'bg-[#f4e8ff]',
    iconColor: 'text-[#7c21a0]',
    subColor: 'text-[#a0929d]',
  },
  {
    label: 'STOCK ADDED',
    value: '856',
    subtext: '+ Items received',
    icon: FiTrendingUp,
    iconBg: 'bg-[#dcfaea]',
    iconColor: 'text-[#15803d]',
    subColor: 'text-[#15803d]',
  },
  {
    label: 'STOCK REMOVED',
    value: '392',
    subtext: '- Items issued/sold',
    icon: FiMinusCircle,
    iconBg: 'bg-[#ffe1e3]',
    iconColor: 'text-[#e5484d]',
    subColor: 'text-[#c53137]',
  },
  {
    label: 'ADJUSTMENTS',
    value: '156',
    subtext: 'Manual adjustments',
    icon: FiSliders,
    iconBg: 'bg-[#fff3d0]',
    iconColor: 'text-[#caa316]',
    subColor: 'text-[#a0929d]',
  },
  {
    label: 'TOTAL VALUE IMPACT',
    value: '₹18.7L',
    subtext: 'Across all transactions',
    icon: FiBarChart2,
    iconBg: 'bg-[#e7f0ff]',
    iconColor: 'text-[#3680ff]',
    subColor: 'text-[#a0929d]',
  },
]

const categoryOptions = ['All Categories', 'Rings', 'Necklaces', 'Bangles', 'Earrings', 'Bracelets']
const warehouseOptions = ['All Warehouses', 'Main Store', 'Vault A', 'Branch 1', 'Branch 2']
const transactionTypeOptions = ['All Transaction Types', 'Stock In', 'Stock Out', 'Adjustment']
const rowsPerPageOptions = ['10', '25', '50', '100']

const typeBadgeClass = {
  'Stock In': 'bg-[#dcfaea] text-[#15803d]',
  'Stock Out': 'bg-[#ffe1e3] text-[#c53137]',
  Adjustment: 'bg-[#fff3d0] text-[#a3720b]',
}

const performedByAvatar = {
  Ramesh: 'bg-[#e7f0ff] text-[#3680ff]',
  Kavitha: 'bg-[#f4e8ff] text-[#7a1c73]',
  Suresh: 'bg-[#fff0d9] text-[#d38a00]',
  Meena: 'bg-[#dffbf0] text-[#0ca46d]',
}

function formatSignedNumber(value) {
  return value > 0 ? `+${value.toLocaleString('en-IN')}` : value.toLocaleString('en-IN')
}

function formatSignedCurrency(value) {
  const amount = Math.abs(value).toLocaleString('en-IN')
  return value >= 0 ? `+₹${amount}` : `-₹${amount}`
}

function StockHistoryPage() {
  const columns = [
    {
      key: 'dateTime',
      header: 'Date & Time',
      render: (item) => (
        <div>
          <p className='text-sm font-semibold text-[#312533]'>{item.date}</p>
          <p className='text-xs text-[#a596a3]'>{item.time}</p>
        </div>
      ),
    },
    {
      key: 'product',
      header: 'Product',
      render: (item) => (
        <div className='flex items-center gap-3'>
          <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f4e9f8]'>
            <img src={item.image} alt={item.product} className='object-contain' />
          </div>
          <div className='min-w-0'>
            <p className='truncate text-sm font-semibold text-[#312533]'>{item.product}</p>
            <p className='text-xs text-[#a596a3]'>{item.sku}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'type',
      header: 'Type',
      render: (item) => (
        <div>
          <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[0.72rem] font-semibold ${typeBadgeClass[item.type]}`}>
            {item.type}
          </span>
          <p className='mt-1 text-xs text-[#a596a3]'>{item.subtype}</p>
        </div>
      ),
    },
    {
      key: 'reference',
      header: 'Reference',
      cellClassName: 'text-sm font-semibold text-[#7c21a0]',
      accessor: 'reference',
    },
    { key: 'warehouse', header: 'Warehouse', accessor: 'warehouse', cellClassName: 'text-sm text-[#6e5a6e]' },
    {
      key: 'change',
      header: 'Change',
      render: (item) => (
        <span className={`whitespace-nowrap text-sm font-bold ${item.changeQty >= 0 ? 'text-[#15803d]' : 'text-[#c53137]'}`}>
          {formatSignedNumber(item.changeQty)} {item.unit}
        </span>
      ),
    },
    {
      key: 'stockAfter',
      header: 'Stock After',
      render: (item) => (
        <span className='whitespace-nowrap text-sm text-[#6e5a6e]'>
          {item.stockAfter} {item.unit}
        </span>
      ),
    },
    {
      key: 'valueImpact',
      header: 'Value Impact',
      render: (item) => (
        <span className={`whitespace-nowrap text-sm font-bold ${item.valueImpact >= 0 ? 'text-[#15803d]' : 'text-[#c53137]'}`}>
          {formatSignedCurrency(item.valueImpact)}
        </span>
      ),
    },
    {
      key: 'performedBy',
      header: 'Performed By',
      render: (item) => (
        <div className='flex items-center gap-2.5'>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${performedByAvatar[item.performedBy] ?? 'bg-[#f4e8ff] text-[#7a1c73]'}`}
          >
            {item.performedBy.charAt(0)}
          </span>
          <div className='min-w-0'>
            <p className='truncate text-sm font-semibold text-[#312533]'>{item.performedBy}</p>
            <p className='text-xs text-[#a596a3]'>{item.role}</p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <PageLayout
      title='Stock History'
      description='Track all stock movements and changes across your inventory.'
      actions={
        <>
          <OutlineButton icon={PiExportBold}>Export</OutlineButton>
          <OutlineButton icon={FiFilter}>Filters</OutlineButton>
        </>
      }
    >
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5'>
        {statCards.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.label}
              className='rounded-2xl border border-[#efe3ed] bg-white p-4 shadow-[0_10px_28px_rgba(81,28,96,0.05)]'
            >
              <div className='flex items-center gap-2.5'>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${card.iconBg}`}>
                  <Icon className={`h-4 w-4 ${card.iconColor}`} />
                </span>
                <p className='text-[0.68rem] font-bold uppercase tracking-[0.06em] text-[#9d8fa3]'>{card.label}</p>
              </div>
              <p className='mt-3 text-[1.5rem] font-black tracking-[-0.02em] text-[#241a2c]'>{card.value}</p>
              <p className={`mt-1 text-sm font-semibold ${card.subColor}`}>{card.subtext}</p>
            </div>
          )
        })}
      </div>

      <div className='flex flex-col gap-3 rounded-2xl border border-[#efe3ed] bg-white p-3 shadow-[0_10px_28px_rgba(81,28,96,0.05)] sm:p-4 lg:flex-row lg:flex-wrap lg:items-center'>
        <label className='flex w-full items-center gap-2 rounded-xl bg-[#f7f2f6] px-4 py-2 lg:w-auto'>
          <FiCalendar className='h-4 w-4 shrink-0 text-[#8c529d]' />
          <input
            type='date'
            aria-label='From date'
            defaultValue='2024-06-01'
            className='w-full min-w-0 bg-transparent text-sm text-[#362940] outline-none'
          />
          <span className='shrink-0 text-sm text-[#9c8ca0]'>→</span>
          <input
            type='date'
            aria-label='To date'
            defaultValue='2024-06-04'
            className='w-full min-w-0 bg-transparent text-sm text-[#362940] outline-none'
          />
        </label>

        <div className='grid grid-cols-1 gap-2 sm:grid-cols-3 lg:flex lg:flex-1 lg:flex-nowrap lg:gap-3'>
          {[categoryOptions, warehouseOptions, transactionTypeOptions].map((options) => (
            <div key={options[0]} className='relative min-w-0 lg:flex-1'>
              <select
                aria-label={options[0]}
                defaultValue={options[0]}
                className='w-full appearance-none rounded-xl bg-[#f7f2f6] py-2 pl-4 pr-9 text-sm font-medium text-[#5f4b6e] outline-none transition hover:bg-[#f1e6f4] cursor-pointer'
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <FiChevronDown className='pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7d6a83]' />
            </div>
          ))}
        </div>

        <div className='flex w-full items-center gap-2 rounded-xl bg-[#f7f2f6] px-4 py-2 lg:w-64 lg:shrink-0'>
          <FiSearch className='h-4 w-4 shrink-0 text-[#8c529d]' />
          <input
            type='text'
            aria-label='Search product, SKU, ID'
            placeholder='Search product, SKU, ID...'
            className='w-full min-w-0 bg-transparent text-sm text-[#362940] outline-none placeholder:text-[#9c8ca0]'
          />
        </div>
      </div>

      <div>
        <DataTable columns={columns} rows={stockHistory} rowKey={(item) => item.reference} minWidthClassName='min-w-[72rem]' />

        <div className='mt-4 flex flex-col gap-3 border-t border-[#efe3ed] pt-4 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-sm text-[#7e6d83]'>Showing 1 to {stockHistory.length} of 1,248 entries</p>

          <div className='flex flex-wrap items-center gap-2'>
            <button
              type='button'
              disabled
              className='rounded-full border border-[#e9d8f0] bg-white px-4 py-2 text-sm text-[#c3b3c6] cursor-not-allowed'
            >
              Prev
            </button>
            <button type='button' className='rounded-full bg-[var(--brand-700)] px-4 py-2 text-sm font-semibold text-white'>
              1
            </button>
            <button
              type='button'
              className='rounded-full border border-[#e9d8f0] bg-white px-4 py-2 text-sm text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff] cursor-pointer'
            >
              2
            </button>
            <button
              type='button'
              className='rounded-full border border-[#e9d8f0] bg-white px-4 py-2 text-sm text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff] cursor-pointer'
            >
              3
            </button>
            <span className='px-1 text-sm text-[#a596a3]'>…</span>
            <button
              type='button'
              className='rounded-full border border-[#e9d8f0] bg-white px-4 py-2 text-sm text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff] cursor-pointer'
            >
              156
            </button>
            <button
              type='button'
              className='rounded-full border border-[#e9d8f0] bg-white px-4 py-2 text-sm text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff] cursor-pointer'
            >
              Next
            </button>
          </div>

          <label className='flex items-center gap-2 text-sm text-[#7e6d83]'>
            Rows per page:
            <span className='relative'>
              <select
                defaultValue='10'
                aria-label='Rows per page'
                className='appearance-none rounded-lg border border-[#e9d8f0] bg-white py-1.5 pl-3 pr-8 text-sm font-medium text-[#5f4b6e] outline-none cursor-pointer'
              >
                {rowsPerPageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <FiChevronDown className='pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#7d6a83]' />
            </span>
          </label>
        </div>
      </div>
    </PageLayout>
  )
}

export default StockHistoryPage

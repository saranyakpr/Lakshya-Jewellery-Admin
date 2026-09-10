import { useMemo, useState } from 'react'
import {
  FiAlertOctagon,
  FiAlertTriangle,
  FiArrowDownRight,
  FiBox,
  FiChevronDown,
  FiEye,
  FiRefreshCw,
  FiTrendingUp,
} from 'react-icons/fi'
import { PiExportBold } from 'react-icons/pi'
import { FaMoneyBillWave } from 'react-icons/fa'
import PageLayout from '../components/PageLayout'
import DataTable from '../components/DataTable'
import { OutlineButton, PrimaryButton } from '../components/ToolbarButtons'
import { lowStockAlerts } from '../data/lowStockAlerts'

const sortOptions = [
  { key: 'critical-first', label: 'Critical First', icon: FiAlertOctagon, iconColor: 'text-[#e5484d]' },
  { key: 'stock-low-high', label: 'Stock: Low to High', icon: FiTrendingUp, iconColor: 'text-[#caa316]' },
  { key: 'value-high-low', label: 'Value: High to Low', icon: FiArrowDownRight, iconColor: 'text-[#5f4b6e]' },
]

function formatLakhs(value) {
  return `₹${(value / 100000).toFixed(1)}L`
}

function filterTabClass(isActive) {
  return isActive
    ? 'inline-flex items-center gap-1.5 rounded-full bg-[#7c21a0] px-4 py-2 text-sm font-semibold text-white transition cursor-pointer'
    : 'inline-flex items-center gap-1.5 rounded-full border border-[#e9d8f0] bg-white px-4 py-2 text-sm font-semibold text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff] cursor-pointer'
}

function LowStockAlertsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [sortKey, setSortKey] = useState('critical-first')
  const [isSortOpen, setIsSortOpen] = useState(false)

  const totalCount = lowStockAlerts.length
  const criticalCount = lowStockAlerts.filter((item) => item.status === 'Critical').length
  const lowCount = lowStockAlerts.filter((item) => item.status === 'Low Stock').length
  const reorderValueTotal = lowStockAlerts.reduce((sum, item) => sum + item.reorderValue, 0)

  const rows = useMemo(() => {
    const filtered =
      activeFilter === 'all' ? lowStockAlerts : lowStockAlerts.filter((item) => item.status === activeFilter)

    const sorted = [...filtered]
    if (sortKey === 'critical-first') {
      sorted.sort((a, b) => (a.status === b.status ? 0 : a.status === 'Critical' ? -1 : 1))
    } else if (sortKey === 'stock-low-high') {
      sorted.sort((a, b) => a.currentStock - b.currentStock)
    } else if (sortKey === 'value-high-low') {
      sorted.sort((a, b) => b.reorderValue - a.reorderValue)
    }
    return sorted
  }, [activeFilter, sortKey])

  const statCards = [
    {
      label: 'CRITICAL ALERTS',
      value: criticalCount,
      subtext: 'Needs immediate action',
      icon: FiAlertOctagon,
      iconBg: 'bg-[#ffe1e3]',
      iconColor: 'text-[#e5484d]',
      subColor: 'text-[#e5484d]',
    },
    {
      label: 'LOW STOCK',
      value: lowCount,
      subtext: 'Reorder soon',
      icon: FiAlertTriangle,
      iconBg: 'bg-[#fff3d0]',
      iconColor: 'text-[#caa316]',
      subColor: 'text-[#caa316]',
    },
    {
      label: 'TOTAL AFFECTED',
      value: totalCount,
      subtext: 'Across all warehouses',
      icon: FiBox,
      iconBg: 'bg-[#e7f0ff]',
      iconColor: 'text-[#3680ff]',
      subColor: 'text-[#7c21a0]',
    },
    {
      label: 'REORDER VALUE',
      value: formatLakhs(reorderValueTotal),
      subtext: 'Estimated cost',
      icon: FaMoneyBillWave,
      iconBg: 'bg-[#dcfaea]',
      iconColor: 'text-[#15803d]',
      subColor: 'text-[#15803d]',
    },
  ]

  const activeSortOption = sortOptions.find((option) => option.key === sortKey) ?? sortOptions[0]

  const columns = [
    {
      key: 'product',
      header: 'Product',
      render: (item) => (
        <div>
          <p className='text-sm font-semibold text-[#312533]'>{item.name}</p>
          <p className='mt-0.5 text-xs text-[#9d8fa3]'>
            {item.id} · {item.supplier}
          </p>
        </div>
      ),
    },
    {
      key: 'category',
      header: 'Category',
      render: (item) => (
        <div>
          <p className='text-sm text-[#6e5a6e]'>{item.category}</p>
          <p className='text-xs text-[#a596a3]'>{item.weight}</p>
        </div>
      ),
    },
    {
      key: 'stockLevel',
      header: 'Stock Level',
      render: (item) => (
        <div>
          <p className='text-sm'>
            <span className={`font-bold ${item.status === 'Critical' ? 'text-[#e5484d]' : 'text-[#c9860a]'}`}>
              {item.currentStock}
            </span>
            <span className='text-[#9d8fa3]'>
              {' '}
              / {item.totalStock} {item.unit}
            </span>
          </p>
          <p className='text-xs text-[#a596a3]'>Min: {item.minStock}</p>
        </div>
      ),
    },
    {
      key: 'progress',
      header: 'Progress',
      render: (item) => {
        const isCritical = item.status === 'Critical'
        return (
          <div className='min-w-[7.5rem]'>
            <div className='h-1.5 w-full overflow-hidden rounded-full bg-[#f1e5f2]'>
              <div
                className={`h-full rounded-full ${isCritical ? 'bg-[#e5484d]' : 'bg-[#f0a63a]'}`}
                style={{ width: `${item.reorderPercent}%` }}
              />
            </div>
            <p className={`mt-1 text-xs font-semibold ${isCritical ? 'text-[#e5484d]' : 'text-[#c9860a]'}`}>
              {item.reorderPercent}% of reorder point
            </p>
          </div>
        )
      },
    },
    {
      key: 'warehouse',
      header: 'Warehouse',
      render: (item) => (
        <div>
          <p className='text-sm text-[#312533]'>{item.warehouse}</p>
          <p className='text-xs text-[#a596a3]'>{item.updatedAgo}</p>
        </div>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (item) => (
        <span
          className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[0.72rem] font-semibold ${
            item.status === 'Critical' ? 'bg-[#ffe1e3] text-[#c53137]' : 'bg-[#fff3d0] text-[#a3720b]'
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (item) => (
        <div className='flex items-center gap-2'>
          <button
            type='button'
            aria-label={`Reorder ${item.name}`}
            className='inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#7c21a0] px-3 py-1.5 !text-xs !font-semibold text-white transition hover:bg-[#671a86] cursor-pointer'
          >
            <FiRefreshCw className='h-3.5 w-3.5' />
            Reorder
          </button>
          <button
            type='button'
            aria-label={`View ${item.name}`}
            className='inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-[#e9d8f0] bg-white px-3 py-1.5 !text-xs !font-semibold !text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff] cursor-pointer'
          >
            <FiEye className='h-3.5 w-3.5' />
            View
          </button>
        </div>
      ),
    },
  ]

  return (
    <PageLayout
      title='Low Stock Alerts'
      description='Monitor and reorder items that are running low on stock.'
      actions={
        <>
          <OutlineButton icon={PiExportBold}>Export</OutlineButton>
          <PrimaryButton icon={FiRefreshCw}>Bulk Reorder</PrimaryButton>
        </>
      }
    >
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {statCards.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.label}
              className='flex gap-4 rounded-2xl border border-[#efe3ed] bg-white p-4 shadow-[0_10px_28px_rgba(81,28,96,0.05)]'
            >
              <div className='flex items-center gap-2.5'>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${card.iconBg}`}>
                  <Icon className={`h-4 w-4 ${card.iconColor}`} />
                </span>
              </div>
              <div>
                <p className='!text-[0.7rem] !font-bold tracking-[0.08em] !text-[#9d8fa3]'>{card.label}</p>
                <p className='!text-[1.5rem] !font-black !tracking-[-0.02em] !text-[#241a2c]'>{card.value}</p>
                <p className={`mt-1 !text-sm !font-semibold ${card.subColor}`}>{card.subtext}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className='flex flex-col gap-3 rounded-2xl border border-[#efe3ed] bg-white p-3 shadow-[0_10px_28px_rgba(81,28,96,0.05)] sm:flex-row sm:items-center sm:justify-between sm:p-4'>
        <div className='flex flex-wrap items-center gap-2'>
          <button type='button' onClick={() => setActiveFilter('all')} className={filterTabClass(activeFilter === 'all')}>
            All ({totalCount})
          </button>
          <button
            type='button'
            onClick={() => setActiveFilter('Critical')}
            className={filterTabClass(activeFilter === 'Critical')}
          >
            <FiAlertOctagon className={`h-3.5 w-3.5 ${activeFilter === 'Critical' ? 'text-white' : 'text-[#e5484d]'}`} />
            Critical ({criticalCount})
          </button>
          <button
            type='button'
            onClick={() => setActiveFilter('Low Stock')}
            className={filterTabClass(activeFilter === 'Low Stock')}
          >
            <FiAlertTriangle className={`h-3.5 w-3.5 ${activeFilter === 'Low Stock' ? 'text-white' : 'text-[#caa316]'}`} />
            Low ({lowCount})
          </button>
        </div>

        <div className='relative self-stretch sm:self-auto'>
          <button
            type='button'
            onClick={() => setIsSortOpen((open) => !open)}
            className='flex w-full items-center justify-between gap-2 rounded-xl border border-[#e9d8f0] bg-white px-4 py-2 text-sm font-medium text-[#5a4b63] shadow-sm transition hover:border-[#d7bfdc] cursor-pointer sm:w-auto sm:justify-start'
          >
            <span className='text-[#9d8fa3]'>Sort:</span>
            {activeSortOption.label}
            <FiChevronDown className={`h-4 w-4 text-[#9d8fa3] transition ${isSortOpen ? 'rotate-180' : ''}`} />
          </button>

          {isSortOpen ? (
            <>
              <button
                type='button'
                aria-label='Close sort menu'
                onClick={() => setIsSortOpen(false)}
                className='fixed inset-0 z-10 cursor-default'
              />
              <div className='absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-xl border border-[#efe3ed] bg-white py-1 shadow-[0_16px_40px_rgba(81,28,96,0.16)]'>
                {sortOptions.map((option) => (
                  <button
                    key={option.key}
                    type='button'
                    onClick={() => {
                      setSortKey(option.key)
                      setIsSortOpen(false)
                    }}
                    className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm font-medium transition hover:bg-[#faf2ff] cursor-pointer ${
                      option.key === sortKey ? 'bg-[#faf2ff] text-[#7c21a0]' : 'text-[#5a4b63]'
                    }`}
                  >
                    <option.icon className={`h-4 w-4 ${option.iconColor}`} />
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>

      <div>
        <DataTable columns={columns} rows={rows} rowKey={(item) => item.id} minWidthClassName='min-w-[68rem]' />

        <div className='mt-4 flex flex-col gap-2 text-xs text-[#8f8692] sm:flex-row sm:items-center sm:justify-between'>
          <p>
            Showing {rows.length} of {totalCount} alerts
          </p>
          <p className='flex items-center gap-1.5'>
            Last synced: 2 mins ago
            <span className='inline-flex h-1.5 w-1.5 rounded-full bg-[#15803d]' />
            <span className='font-semibold text-[#15803d]'>Live</span>
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default LowStockAlertsPage

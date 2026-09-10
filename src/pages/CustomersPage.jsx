import { FaCrown, FaWallet } from 'react-icons/fa'
import {
  FiArrowUpRight,
  FiCalendar,
  FiChevronDown,
  FiEdit3,
  FiEye,
  FiFilter,
  FiMail,
  FiPhone,
  FiPlus,
  FiSearch,
  FiTrash2,
  FiUserPlus,
  FiUsers,
} from 'react-icons/fi'
import { PiExportBold } from 'react-icons/pi'
import PageLayout from '../components/PageLayout'
import PaginatedDataTable from '../components/PaginatedDataTable'
import { OutlineButton, PrimaryButton } from '../components/ToolbarButtons'
import { customers } from '../data/customers'

const statCards = [
  {
    label: 'Total Customers',
    value: '1,248',
    trend: '12.5% from last month',
    icon: FiUsers,
    iconBg: 'bg-[#f4e8ff]',
    iconColor: 'text-[#7a1c73]',
  },
  {
    label: 'New Customers',
    value: '128',
    trend: '8.3% from last month',
    icon: FiUserPlus,
    iconBg: 'bg-[#dffbf0]',
    iconColor: 'text-[#0ca46d]',
  },
  {
    label: 'Repeat Customers',
    value: '320',
    trend: '15.2% from last month',
    icon: FaCrown,
    iconBg: 'bg-[#fff0d9]',
    iconColor: 'text-[#d38a00]',
  },
  {
    label: 'Total Spent',
    value: '₹2,45,68,320',
    trend: '18.7% from last month',
    icon: FaWallet,
    iconBg: 'bg-[#e7f0ff]',
    iconColor: 'text-[#3680ff]',
  },
]

const groupOptions = ['All Groups', 'VIP', 'Regular', 'New']
const statusOptions = ['All Status', 'Active', 'Inactive']

const groupBadgeClass = {
  VIP: 'bg-[#f4e8ff] text-[#7a1c73]',
  Regular: 'bg-[#e7f0ff] text-[#3680ff]',
  New: 'bg-[#fff3d0] text-[#a3720b]',
}

const statusBadgeClass = {
  Active: 'bg-[#dcfaea] text-[#15803d]',
  Inactive: 'bg-[#f1eef1] text-[#8f8692]',
}

function formatCurrency(amount) {
  return `₹${amount.toLocaleString('en-IN')}`
}

function LabeledSelect({ label, options }) {
  return (
    <label className='flex min-w-0 flex-col gap-1.5 text-xs font-semibold text-[#5f4b6e]'>
      {label}
      <span className='relative'>
        <select
          defaultValue={options[0]}
          className='w-full appearance-none rounded-xl border border-[#e8dfe8] bg-white py-2 pl-3 pr-9 text-sm font-medium text-[#312533] outline-none transition hover:border-[#d7bfdc] cursor-pointer'
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FiChevronDown className='pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7d6a83]' />
      </span>
    </label>
  )
}

function CustomersPage() {
  const columns = [
    {
      key: 'customer',
      header: 'Customer',
      render: (item) => (
        <div className='flex items-center gap-3'>
          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${item.avatar}`}>
            {item.initials}
          </span>
          <div className='min-w-0'>
            <p className='truncate text-sm font-semibold text-[#312533]'>{item.name}</p>
            <p className='truncate text-xs text-[#a596a3]'>{item.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'contact',
      header: 'Contact',
      render: (item) => (
        <div>
          <p className='flex items-center gap-1.5 whitespace-nowrap text-sm text-[#312533]'>
            <FiPhone className='h-3.5 w-3.5 text-[#a596a3]' />
            {item.phone}
          </p>
          <p className='mt-0.5 flex items-center gap-1.5 whitespace-nowrap text-xs text-[#a596a3]'>
            <FiMail className='h-3.5 w-3.5' />
            {item.email}
          </p>
        </div>
      ),
    },
    {
      key: 'group',
      header: 'Group',
      render: (item) => (
        <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[0.72rem] font-semibold ${groupBadgeClass[item.group]}`}>
          {item.group}
        </span>
      ),
    },
    { key: 'totalOrders', header: 'Total Orders', accessor: 'totalOrders', cellClassName: 'text-sm text-[#6e5a6e]' },
    {
      key: 'totalSpent',
      header: 'Total Spent',
      render: (item) => <span className='whitespace-nowrap text-sm font-bold text-[#312533]'>{formatCurrency(item.totalSpent)}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      render: (item) => (
        <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[0.72rem] font-semibold ${statusBadgeClass[item.status]}`}>
          {item.status}
        </span>
      ),
    },
    { key: 'joinedOn', header: 'Joined On', accessor: 'joinedOn', cellClassName: 'whitespace-nowrap text-sm text-[#6e5a6e]' },
    {
      key: 'actions',
      header: 'Actions',
      render: (item) => (
        <div className='flex items-center gap-2'>
          <button
            type='button'
            aria-label={`View ${item.name}`}
            className='inline-flex h-8 w-8 items-center justify-center text-[#8c3fc4] transition hover:bg-[#faf2ff] cursor-pointer'
          >
            <FiEye className='h-4 w-4' />
          </button>
          <button
            type='button'
            aria-label={`Edit ${item.name}`}
            className='inline-flex h-8 w-8 items-center justify-center text-[#3680ff] transition hover:bg-[#faf2ff] cursor-pointer'
          >
            <FiEdit3 className='h-4 w-4' />
          </button>
          <button
            type='button'
            aria-label={`Delete ${item.name}`}
            className='inline-flex h-8 w-8 items-center justify-center text-[#e5484d] transition hover:bg-[#fff2f7] cursor-pointer'
          >
            <FiTrash2 className='h-4 w-4' />
          </button>
        </div>
      ),
    },
  ]

  return (
    <PageLayout
      title='Customers'
      description='Manage and view all your customers'
      actions={
        <>
          <OutlineButton icon={PiExportBold}>Export</OutlineButton>
          <PrimaryButton icon={FiPlus}>Add Customer</PrimaryButton>
        </>
      }
    >
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {statCards.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.label}
              className='rounded-2xl border border-[#efe3ed] bg-white p-4 shadow-[0_10px_28px_rgba(81,28,96,0.05)]'
            >
              <div className='flex items-center gap-3'>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${card.iconBg}`}>
                  <Icon className={`h-5 w-5 ${card.iconColor}`} />
                </span>
                <p className='text-sm font-medium text-[#6e5a6e]'>{card.label}</p>
              </div>
              <p className='mt-3 text-[1.5rem] font-black tracking-[-0.02em] text-[#241a2c]'>{card.value}</p>
              <p className='mt-1 flex items-center gap-1 text-xs font-bold text-[#15803d]'>
                <FiArrowUpRight className='h-3.5 w-3.5' />
                {card.trend}
              </p>
            </div>
          )
        })}
      </div>

      <div className='flex flex-col gap-3 rounded-2xl border border-[#efe3ed] bg-white p-3 shadow-[0_10px_28px_rgba(81,28,96,0.05)] sm:p-4 lg:flex-row lg:flex-wrap lg:items-end'>
        <label className='flex min-w-0 flex-1 items-center gap-2 rounded-xl bg-[#f7f2f6] px-4 py-2.5 lg:min-w-[16rem]'>
          <FiSearch className='h-4 w-4 shrink-0 text-[#8c529d]' />
          <input
            type='text'
            aria-label='Search customers by name, email, phone'
            placeholder='Search customers by name, email, phone...'
            className='w-full min-w-0 bg-transparent text-sm text-[#362940] outline-none placeholder:text-[#9c8ca0]'
          />
        </label>

        <div className='grid grid-cols-1 gap-3 sm:grid-cols-3 lg:flex lg:flex-1 lg:flex-nowrap'>
          <LabeledSelect label='Customer Group' options={groupOptions} />
          <LabeledSelect label='Status' options={statusOptions} />
          <label className='flex min-w-0 flex-col gap-1.5 text-xs font-semibold text-[#5f4b6e]'>
            Registration Date
            <span className='flex items-center gap-2 rounded-xl border border-[#e8dfe8] bg-white px-3 py-2 text-sm font-medium text-[#312533] transition hover:border-[#d7bfdc]'>
              <FiCalendar className='h-4 w-4 shrink-0 text-[#8c529d]' />
              <span className='min-w-0 flex-1 truncate text-[#9d8fa3]'>Select Date Range</span>
              <FiChevronDown className='h-4 w-4 shrink-0 text-[#7d6a83]' />
            </span>
          </label>
        </div>

        <OutlineButton icon={FiFilter}>Filters</OutlineButton>
      </div>

      <PaginatedDataTable
        columns={columns}
        rows={customers}
        rowKey={(item) => item.email}
        minWidthClassName='min-w-[68rem]'
        pageSize={10}
        itemLabel='customers'
      />
    </PageLayout>
  )
}

export default CustomersPage

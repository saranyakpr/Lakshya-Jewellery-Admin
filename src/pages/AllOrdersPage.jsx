import { FiCalendar, FiChevronDown, FiEye, FiFilter, FiMessageSquare, FiMoreVertical } from 'react-icons/fi'
import { PiExportBold } from 'react-icons/pi'
import PageLayout from '../components/PageLayout'
import PaginatedDataTable from '../components/PaginatedDataTable'
import { OutlineButton, PrimaryButton } from '../components/ToolbarButtons'
import { orders } from '../data/orders'

const paymentBadgeClass = {
  Paid: 'bg-[#dcfaea] text-[#15803d]',
  COD: 'bg-[#e7f0ff] text-[#3680ff]',
}

const statusBadgeClass = {
  Delivered: 'bg-[#ddf8ea] text-[#1a9e67]',
  Shipped: 'bg-[#e8f2ff] text-[#3d83f6]',
  Processing: 'bg-[#fff3d8] text-[#d08a00]',
  Cancelled: 'bg-[#ffe7e3] text-[#ff6a5a]',
}

function formatCurrency(amount) {
  return `₹${amount.toLocaleString('en-IN')}`
}

function AllOrdersPage() {
  const columns = [
    { key: 'id', header: 'Order ID', accessor: 'id', cellClassName: 'text-sm font-semibold text-[#312533]' },
    {
      key: 'customer',
      header: 'Customer',
      render: (item) => (
        <div>
          <p className='text-sm font-semibold text-[#312533]'>{item.customerName}</p>
          <p className='text-xs text-[#a596a3]'>{item.customerEmail}</p>
        </div>
      ),
    },
    {
      key: 'products',
      header: 'Products',
      render: (item) => (
        <div className='flex items-center gap-3'>
          <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f4e9f8]'>
            <img src={item.image} alt={item.product} className='object-contain' />
          </div>
          <div className='min-w-0'>
            <p className='truncate text-sm font-semibold text-[#312533]'>{item.product}</p>
            <p className='text-xs text-[#a596a3]'>Qty: {item.qty}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'amount',
      header: 'Amount',
      render: (item) => <span className='whitespace-nowrap text-sm font-bold text-[#312533]'>{formatCurrency(item.amount)}</span>,
    },
    {
      key: 'payment',
      header: 'Payment',
      render: (item) => (
        <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[0.72rem] font-semibold ${paymentBadgeClass[item.payment]}`}>
          {item.payment}
        </span>
      ),
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
    {
      key: 'date',
      header: 'Date',
      render: (item) => (
        <div>
          <p className='whitespace-nowrap text-sm text-[#312533]'>{item.date}</p>
          <p className='whitespace-nowrap text-xs text-[#a596a3]'>{item.time}</p>
        </div>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (item) => (
        <div className='flex items-center gap-2'>
          <button
            type='button'
            aria-label={`View ${item.id}`}
            className='inline-flex h-8 w-8 items-center justify-center text-[#8c3fc4] transition hover:bg-[#faf2ff] cursor-pointer'
          >
            <FiEye className='h-4 w-4' />
          </button>
          <button
            type='button'
            aria-label={`Message customer for ${item.id}`}
            className='inline-flex h-8 w-8 items-center justify-center text-[#e0529c] transition hover:bg-[#fff2fa] cursor-pointer'
          >
            <FiMessageSquare className='h-4 w-4' />
          </button>
          <button
            type='button'
            aria-label={`More actions for ${item.id}`}
            className='inline-flex h-8 w-8 items-center justify-center text-[#5f4b6e] transition hover:bg-[#faf2ff] cursor-pointer'
          >
            <FiMoreVertical className='h-4 w-4' />
          </button>
        </div>
      ),
    },
  ]

  return (
    <PageLayout
      title='All Orders'
      description='View and manage all customer orders'
      actions={
        <>
          <button
            type='button'
            className='inline-flex items-center gap-2 rounded-xl border border-[#e9d8f0] bg-white px-4 py-2 !text-sm !font-semibold !text-[#5f4b6e] shadow-sm transition hover:border-[#d7bfdc] hover:bg-[#faf2ff] cursor-pointer'
          >
            <FiCalendar className='h-4 w-4 text-[#8c529d]' />
            Last 30 Days
            <FiChevronDown className='h-4 w-4 text-[#9d8fa3]' />
          </button>
          <OutlineButton icon={PiExportBold}>Export</OutlineButton>
          <PrimaryButton icon={FiFilter}>Filters</PrimaryButton>
        </>
      }
    >
      <PaginatedDataTable
        columns={columns}
        rows={orders}
        rowKey={(item) => item.id}
        minWidthClassName='min-w-[68rem]'
        pageSize={10}
        itemLabel='orders'
      />
    </PageLayout>
  )
}

export default AllOrdersPage

import { FiCalendar, FiCheckCircle, FiChevronDown, FiEye, FiFilter, FiMoreVertical, FiXCircle } from 'react-icons/fi'
import { PiExportBold } from 'react-icons/pi'
import PageLayout from '../components/PageLayout'
import PaginatedDataTable from '../components/PaginatedDataTable'
import { OutlineButton, PrimaryButton } from '../components/ToolbarButtons'
import { returnRequests } from '../data/returnRequests'

const statusBadgeClass = {
  Approved: 'bg-[#dcfaea] text-[#15803d]',
  Pending: 'bg-[#fff3d0] text-[#a3720b]',
  Rejected: 'bg-[#ffe1e3] text-[#c53137]',
}

function formatCurrency(amount) {
  return `₹${amount.toLocaleString('en-IN')}`
}

function ReturnsRefundsPage() {
  const columns = [
    { key: 'requestId', header: 'Request ID', accessor: 'requestId', cellClassName: 'text-sm font-semibold text-[#312533]' },
    { key: 'orderId', header: 'Order ID', accessor: 'orderId', cellClassName: 'text-sm text-[#6e5a6e]' },
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
      key: 'product',
      header: 'Product',
      render: (item) => (
        <div className='flex items-center gap-3'>
          <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f4e9f8]'>
            <img src={item.image} alt={item.product} className='object-contain' />
          </div>
          <p className='min-w-0 truncate text-sm font-semibold text-[#312533]'>{item.product}</p>
        </div>
      ),
    },
    { key: 'reason', header: 'Reason', accessor: 'reason', cellClassName: 'text-sm text-[#6e5a6e]' },
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
      key: 'refundAmount',
      header: 'Refund Amount',
      render: (item) => <span className='whitespace-nowrap text-sm font-bold text-[#312533]'>{formatCurrency(item.refundAmount)}</span>,
    },
    {
      key: 'requestedOn',
      header: 'Requested On',
      render: (item) => (
        <div>
          <p className='whitespace-nowrap text-sm text-[#312533]'>{item.requestedOn}</p>
          <p className='whitespace-nowrap text-xs text-[#a596a3]'>{item.requestedTime}</p>
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
            aria-label={`View ${item.requestId}`}
            className='inline-flex h-8 w-8 items-center justify-center text-[#8c3fc4] transition hover:bg-[#faf2ff] cursor-pointer'
          >
            <FiEye className='h-4 w-4' />
          </button>
          <button
            type='button'
            aria-label={`Approve ${item.requestId}`}
            className='inline-flex h-8 w-8 items-center justify-center text-[#15803d] transition hover:bg-[#eafcf1] cursor-pointer'
          >
            <FiCheckCircle className='h-4 w-4' />
          </button>
          <button
            type='button'
            aria-label={`Reject ${item.requestId}`}
            className='inline-flex h-8 w-8 items-center justify-center text-[#e5484d] transition hover:bg-[#fff2f7] cursor-pointer'
          >
            <FiXCircle className='h-4 w-4' />
          </button>
          <button
            type='button'
            aria-label={`More actions for ${item.requestId}`}
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
      title='Returns &amp; Refunds'
      description='Manage return requests and process refunds'
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
        rows={returnRequests}
        rowKey={(item) => item.requestId}
        minWidthClassName='min-w-[72rem]'
        pageSize={10}
        itemLabel='return requests'
      />
    </PageLayout>
  )
}

export default ReturnsRefundsPage

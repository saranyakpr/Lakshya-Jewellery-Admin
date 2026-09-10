import { Fragment } from 'react'
import { FiCalendar, FiCheck, FiChevronDown, FiEye, FiFilter } from 'react-icons/fi'
import { PiExportBold } from 'react-icons/pi'
import PageLayout from '../components/PageLayout'
import PaginatedDataTable from '../components/PaginatedDataTable'
import { OutlineButton, PrimaryButton } from '../components/ToolbarButtons'
import { shipments, trackingSteps } from '../data/shipments'

const courierColor = {
  BlueDart: 'text-[#0d5fc7]',
  DTDC: 'text-[#c2185b]',
  Delhivery: 'text-[#1a1a1a]',
}

function TrackingStepper({ completedSteps }) {
  return (
    <div className='min-w-[14rem]'>
      <div className='flex items-center'>
        {trackingSteps.map((label, index) => {
          const isDone = index < completedSteps
          const isLineGreen = index + 1 < completedSteps
          return (
            <Fragment key={label}>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                  isDone ? 'bg-[#15803d] text-white' : 'border-2 border-[#e3d7e8] bg-white text-[#d3c4da]'
                }`}
              >
                <FiCheck className='h-3.5 w-3.5' />
              </span>
              {index < trackingSteps.length - 1 ? (
                <span className={`h-0.5 flex-1 ${isLineGreen ? 'bg-[#15803d]' : 'bg-[#e3d7e8]'}`} />
              ) : null}
            </Fragment>
          )
        })}
      </div>
      <div className='mt-1.5 flex items-start justify-between gap-1'>
        {trackingSteps.map((label, index) => (
          <span
            key={label}
            className={`w-14 text-center text-[0.66rem] font-semibold leading-tight first:text-left last:text-right ${
              index < completedSteps ? 'text-[#15803d]' : 'text-[#a596a3]'
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

function ShippingTrackingPage() {
  const columns = [
    { key: 'trackingId', header: 'Tracking ID', accessor: 'trackingId', cellClassName: 'text-sm font-semibold text-[#312533]' },
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
      key: 'courier',
      header: 'Courier',
      render: (item) => <span className={`whitespace-nowrap text-sm font-black ${courierColor[item.courier] ?? 'text-[#312533]'}`}>{item.courier}</span>,
    },
    {
      key: 'trackingStatus',
      header: 'Tracking Status',
      render: (item) => <TrackingStepper completedSteps={item.completedSteps} />,
    },
    {
      key: 'currentLocation',
      header: 'Current Location',
      render: (item) => (
        <div>
          <p className='whitespace-nowrap text-sm font-semibold text-[#312533]'>{item.status}</p>
          <p className='whitespace-nowrap text-xs text-[#a596a3]'>
            {item.city}, {item.state}
          </p>
        </div>
      ),
    },
    {
      key: 'estimatedDelivery',
      header: 'Estimated Delivery',
      render: (item) => (
        <div>
          <p className='whitespace-nowrap text-sm text-[#312533]'>{item.estimatedDate}</p>
          <p className='whitespace-nowrap text-xs text-[#a596a3]'>{item.isDelivered ? item.estimatedTime : `By ${item.estimatedTime}`}</p>
        </div>
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (item) => (
        <button
          type='button'
          aria-label={`View ${item.trackingId}`}
          className='inline-flex h-8 w-8 items-center justify-center text-[#8c3fc4] transition hover:bg-[#faf2ff] cursor-pointer'
        >
          <FiEye className='h-4 w-4' />
        </button>
      ),
    },
  ]

  return (
    <PageLayout
      title='Shipping &amp; Tracking'
      description='Track shipments and manage delivery details'
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
        rows={shipments}
        rowKey={(item) => item.trackingId}
        minWidthClassName='min-w-[78rem]'
        pageSize={10}
        itemLabel='shipments'
      />
    </PageLayout>
  )
}

export default ShippingTrackingPage

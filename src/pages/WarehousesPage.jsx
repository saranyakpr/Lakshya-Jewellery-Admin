import { useNavigate } from 'react-router-dom'
import { FiCopy, FiEdit3, FiEye, FiPlus, FiTrash2 } from 'react-icons/fi'
import { PiExportBold } from 'react-icons/pi'
import { BiSelectMultiple } from 'react-icons/bi'
import PageLayout from '../components/PageLayout'
import SearchFilterBar from '../components/SearchFilterBar'
import PaginatedDataTable from '../components/PaginatedDataTable'
import { OutlineButton, PrimaryButton } from '../components/ToolbarButtons'
import { warehouses } from '../data/warehouses'

const filterOptions = [
  { label: 'Location', options: ['Location', 'Mumbai', 'Delhi', 'Chennai', 'Kolkata', 'Pune', 'Bengaluru'] },
  {
    label: 'Manager',
    options: warehouses.reduce((options, warehouse) => {
      if (!options.includes(warehouse.manager)) options.push(warehouse.manager)
      return options
    }, ['Manager']),
  },
]

function WarehousesPage() {
  const navigate = useNavigate()

  const columns = [
    { key: 'name', header: 'Warehouse Name', accessor: 'name', cellClassName: 'text-sm text-[#312533]' },
    { key: 'manager', header: 'Manager', accessor: 'manager', cellClassName: 'text-sm font-semibold text-[#312533]' },
    { key: 'managerPhone', header: 'Manager Ph.num', accessor: 'managerPhone', cellClassName: 'text-sm text-[#6e5a6e]' },
    { key: 'location', header: 'Location', accessor: 'location', cellClassName: 'text-sm text-[#6e5a6e]' },
    { key: 'stock', header: 'Stock', accessor: 'stock', cellClassName: 'text-sm text-[#6e5a6e]' },
    {
      key: 'status',
      header: 'Status',
      render: (item) => (
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-[0.72rem] font-semibold ${
            item.status === 'Active' ? 'bg-[#dcfaea] text-[#15803d]' : 'bg-[#f7e7ed] text-[#a0375d]'
          }`}
        >
          {item.status}
        </span>
      ),
    },
    { key: 'created', header: 'Created', accessor: 'created', cellClassName: 'text-sm text-[#6e5a6e]' },
    {
      key: 'actions',
      header: 'Actions',
      render: (item) => (
        <div className='flex items-center gap-2'>
          <button
            type='button'
            className='inline-flex h-8 w-8 items-center justify-center text-[#8c3fc4] transition hover:bg-[#faf2ff] cursor-pointer'
            aria-label={`View ${item.name}`}
          >
            <FiEye className='h-4 w-4' />
          </button>
          <button
            type='button'
            className='inline-flex h-8 w-8 items-center justify-center text-[#3680ff] transition hover:bg-[#faf2ff] cursor-pointer'
            aria-label={`Edit ${item.name}`}
          >
            <FiEdit3 className='h-4 w-4' />
          </button>
          <button
            type='button'
            className='inline-flex h-8 w-8 items-center justify-center text-[#5f4b6e] transition hover:bg-[#faf2ff] cursor-pointer'
            aria-label={`Duplicate ${item.name}`}
          >
            <FiCopy className='h-4 w-4' />
          </button>
          <button
            type='button'
            className='inline-flex h-8 w-8 items-center justify-center text-[#e5484d] transition hover:bg-[#fff2f7] cursor-pointer'
            aria-label={`Delete ${item.name}`}
          >
            <FiTrash2 className='h-4 w-4' />
          </button>
        </div>
      ),
    },
  ]

  return (
    <PageLayout
      title='Warehouse Management'
      description='1,284 products in your catalogue'
      actions={
        <>
          <OutlineButton icon={BiSelectMultiple}>Bulk Actions</OutlineButton>
          <OutlineButton icon={PiExportBold}>Export</OutlineButton>
          <PrimaryButton icon={FiPlus} onClick={() => navigate('/inventory/warehouses/add')}>
            Add Warehouse
          </PrimaryButton>
        </>
      }
    >
      <div className='rounded'>
        <SearchFilterBar searchPlaceholder='Search warehouse...' searchAriaLabel='Search warehouse' filters={filterOptions} />

        <PaginatedDataTable
          columns={columns}
          rows={warehouses}
          rowKey={(item) => item.id}
          minWidthClassName='min-w-[58rem]'
          pageSize={6}
          itemLabel='warehouses'
        />
      </div>
    </PageLayout>
  )
}

export default WarehousesPage

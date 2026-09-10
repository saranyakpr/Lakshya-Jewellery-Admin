import { useNavigate } from 'react-router-dom'
import { FiCopy, FiEdit3, FiEye, FiPlus, FiTrash2 } from 'react-icons/fi'
import { PiExportBold } from 'react-icons/pi'
import { BiSelectMultiple } from 'react-icons/bi'
import PageLayout from '../components/PageLayout'
import SearchFilterBar from '../components/SearchFilterBar'
import DataTable from '../components/DataTable'
import TablePagination from '../components/TablePagination'
import { OutlineButton, PrimaryButton } from '../components/ToolbarButtons'
import { products } from '../data/products'

const filterOptions = [
  { label: 'Category', options: ['categories', 'Rings', 'Necklaces', 'Bangles', 'Earrings', 'Bracelets'] },
  { label: 'Collection', options: ['collections', 'Bridal Collection 2025', 'Festive Gold 2025', 'Minimalist Everyday Wear'] },
  { label: 'Metal Type', options: ['Metal Types', 'Gold', 'Rose Gold', 'White Gold', 'Platinum', 'Silver'] },
  { label: 'Gold Purity', options: ['Purities', '18 Karat', '22 Karat', '24 Karat'] },
  { label: 'Availability', options: ['Availability', 'In Stock', 'Low Stock', 'Out of Stock'] },
  {
    label: 'Price Range',
    options: ['Prices', 'Under ₹50,000', '₹50,000 - ₹1,00,000', '₹1,00,000 - ₹2,00,000', 'Above ₹2,00,000'],
  },
  { label: 'Ware House', options: ['Ware House', 'Main Warehouse', 'North Warehouse', 'South Warehouse'] },
]

const warehouseByIndex = [
  'Main Warehouse',
  'North Warehouse',
  'South Warehouse',
  'North Warehouse',
  'South Warehouse',
  'Main Warehouse',
]

const stockItems = products.map((product, index) => ({
  ...product,
  warehouse: warehouseByIndex[index] ?? product.warehouse,
  status: 'Active',
}))

function StockManagementPage() {
  const navigate = useNavigate()

  const columns = [
    {
      key: 'image',
      header: 'Image',
      render: (item) => (
        <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4e9f8] text-sm font-semibold text-[#7f4a8f]'>
          <img src={item.image} alt={item.name} className='object-contain' />
        </div>
      ),
    },
    { key: 'sku', header: 'SKU', accessor: 'id', cellClassName: 'text-sm text-[#825a7b]' },
    { key: 'name', header: 'Product Name', accessor: 'name', cellClassName: 'text-sm font-semibold text-[#312533]' },
    { key: 'category', header: 'Category', accessor: 'category', cellClassName: 'text-sm text-[#6e5a6e]' },
    { key: 'warehouse', header: 'Warehouse', accessor: 'warehouse', cellClassName: 'text-sm text-[#6e5a6e]' },
    { key: 'goldWt', header: 'Gold Wt.', accessor: 'goldWt', cellClassName: 'text-sm text-[#6e5a6e]' },
    { key: 'diaWt', header: 'Dia Wt.', accessor: 'diaWt', cellClassName: 'text-sm text-[#6e5a6e]' },
    { key: 'price', header: 'Price', accessor: 'price', cellClassName: 'text-sm font-semibold text-[#312533]' },
    { key: 'stock', header: 'Stock', accessor: 'stock', cellClassName: 'text-sm text-[#6e5a6e]' },
    {
      key: 'status',
      header: 'Status',
      render: (item) => (
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-[0.72rem] font-semibold ${
            item.status === 'Active' ? 'bg-[#dfe6ff] text-[#2745a3]' : 'bg-[#f7e7ed] text-[#a0375d]'
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
            onClick={() => navigate(`/products/${item.id}`)}
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
      title='Stock Management'
      description='1,284 products in your catalogue'
      actions={
        <>
          <OutlineButton icon={BiSelectMultiple}>Bulk Actions</OutlineButton>
          <OutlineButton icon={PiExportBold}>Export</OutlineButton>
          <PrimaryButton icon={FiPlus} onClick={() => navigate('/products/add')}>
            Add Inventory
          </PrimaryButton>
        </>
      }
    >
      <div className='rounded'>
        <SearchFilterBar searchPlaceholder='Search products...' searchAriaLabel='Search products' filters={filterOptions} />

        <DataTable columns={columns} rows={stockItems} rowKey={(item) => item.id} minWidthClassName='min-w-[72rem]' />

        <TablePagination label='Showing 1-6 of 1,284 products' pages={[1, 2]} activePage={1} />
      </div>
    </PageLayout>
  )
}

export default StockManagementPage

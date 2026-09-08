import { useNavigate } from 'react-router-dom'
import { FiChevronDown, FiEdit3, FiEye, FiPlus, FiSearch, FiTrash2 } from 'react-icons/fi'
import { PiExportBold } from "react-icons/pi";
import PageLayout from '../components/PageLayout'
import { products } from '../data/products'
import { BiSelectMultiple } from "react-icons/bi";

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
]

function AllProductsPage() {
  const navigate = useNavigate()

  return (
    <PageLayout
      title='Product List'
      description='1,284 products in your catalogue'
      actions={
        <>
          <button className='rounded-xl flex items-center gap-2 border border-[#e9d8f0] bg-white px-4 py-2 !text-sm !font-semibold !text-[#5f4b6e] shadow-sm transition hover:border-[#d7bfdc] hover:bg-[#fbf2ff] cursor-pointer'>
            <BiSelectMultiple className='h-5 w-5' />
            Bulk Actions
          </button>
          <button className='rounded-xl flex items-center gap-2 border border-[#e9d8f0] bg-white px-4 py-2 !text-sm !font-semibold !text-[#5f4b6e] shadow-sm transition hover:border-[#d7bfdc] hover:bg-[#fbf2ff] cursor-pointer'>
            <PiExportBold className='h-5 w-5' />
            Export
          </button>
          <button
            type='button'
            onClick={() => navigate('/products/add')}
            className='inline-flex items-center gap-2 cursor-pointer rounded-lg bg-[#7c21a0]  px-4 py-2 !text-sm !font-semibold !text-white transition hover:shadow-[0_22px_48px_rgba(124,33,160,0.28)] hover:from-[#8d33b5] hover:via-[#a947de] hover:to-[#c860ff]'
          >
            <FiPlus className='h-4 w-4' />
            Add Product
          </button>
        </>
      }
    >
      <div className='rounded'>
        <div className='mb-4 flex flex-col gap-3 rounded-2xl border border-[#efe3ed] bg-white p-3 shadow-[0_10px_28px_rgba(81,28,96,0.05)] sm:p-4 lg:flex-row lg:flex-nowrap lg:items-center'>
          <div className='flex w-full items-center gap-2 rounded-xl bg-[#f7f2f6] px-4 py-2 lg:w-56 lg:shrink-0'>
            <FiSearch className='h-4 w-4 shrink-0 !text-[#8c529d]' />
            <input
              type='text'
              aria-label='Search products'
              placeholder='Search products...'
              className='w-full min-w-0 bg-transparent text-sm !text-[#362940] outline-none placeholder:text-[#9c8ca0]'
            />
          </div>

          <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-1 lg:flex-nowrap lg:gap-3'>
            {filterOptions.map((filter) => (
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

        <div className='overflow-x-auto rounded-[1.8rem] border border-[#efe3ed]'>
          <table className='w-full min-w-[62rem] border-separate border-spacing-0 text-left'>
            <thead className='bg-[#fbf2ff] !text-[0.82rem] !text-[#755270]'>
              <tr>
                <th className='px-3 py-3'>Image</th>
                <th className='px-3 py-3'>SKU</th>
                <th className='px-3 py-3'>Product Name</th>
                <th className='px-3 py-3'>Category</th>
                <th className='px-3 py-3'>Gold Wt.</th>
                <th className='px-3 py-3'>Dia Wt.</th>
                <th className='px-3 py-3'>Price</th>
                <th className='px-3 py-3'>Stock</th>
                <th className='px-3 py-3'>Status</th>
                <th className='px-3 py-3'>Created</th>
                <th className='px-3 py-3'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#fcf5ff]'}>
                  <td className='border-t border-[#f1e5f2] px-3 py-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4e9f8] text-sm font-semibold text-[#7f4a8f]'>
                      <img src={product.image} alt={product.name} className='object-contain' />
                    </div>
                  </td>
                  <td className='border-t border-[#f1e5f2] px-3 py-3 text-sm text-[#825a7b]'>{product.id}</td>
                  <td className='border-t border-[#f1e5f2] px-3 py-3 text-sm font-semibold text-[#312533]'>{product.name}</td>
                  <td className='border-t border-[#f1e5f2] px-3 py-3 text-sm text-[#6e5a6e]'>{product.category}</td>
                  <td className='border-t border-[#f1e5f2] px-3 py-3 text-sm text-[#6e5a6e]'>{product.goldWt}</td>
                  <td className='border-t border-[#f1e5f2] px-3 py-3 text-sm text-[#6e5a6e]'>{product.diaWt}</td>
                  <td className='border-t border-[#f1e5f2] px-3 py-3 text-sm font-semibold text-[#312533]'>{product.price}</td>
                  <td className='border-t border-[#f1e5f2] px-3 py-3 text-sm text-[#6e5a6e]'>{product.stock}</td>
                  <td className='border-t border-[#f1e5f2] px-3 py-3'>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[0.72rem] font-semibold ${
                        product.status === 'Active'
                          ? 'bg-[#dfe6ff] text-[#2745a3]'
                          : 'bg-[#f7e7ed] text-[#a0375d]'
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className='border-t border-[#f1e5f2] px-3 py-3 text-sm text-[#6e5a6e]'>{product.created}</td>
                  <td className='border-t border-[#f1e5f2] px-3 py-3 text-sm text-[#5f4b6e]'>
                    <div className='flex items-center gap-2'>
                          <button
                        type='button'
                        onClick={() => navigate(`/products/${product.id}`)}
                        className='inline-flex h-8 w-8 items-center justify-center text-[#6b4d7a] transition hover:bg-[#faf2ff] cursor-pointer'
                        aria-label={`View ${product.name}`}
                      >
                        <FiEye className='h-4 w-4' />
                      </button>
                      <button type='button' className='inline-flex h-8 w-8 items-center justify-center text-[#8d5e94] transition hover:bg-[#faf2ff] cursor-pointer'>
                        <FiEdit3 className='h-4 w-4' />
                      </button>
                      <button type='button' className='inline-flex h-8 w-8 items-center justify-center text-[#b03159] transition hover:bg-[#fff2f7] cursor-pointer'>
                        <FiTrash2 className='h-4 w-4' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='mt-6 flex flex-col gap-3 border-t border-[#efe3ed] pt-4 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-sm text-[#7e6d83]'>Showing 1-6 of 1,284 products</p>
          <div className='flex items-center gap-2'>
            <button className='rounded-full border border-[#e9d8f0] bg-white px-4 py-2 text-sm text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff]'>Prev</button>
            <button className='rounded-full bg-[var(--brand-700)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--brand-800)]'>1</button>
            <button className='rounded-full border border-[#e9d8f0] bg-white px-4 py-2 text-sm text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff]'>2</button>
            <button className='rounded-full border border-[#e9d8f0] bg-white px-4 py-2 text-sm text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff]'>Next</button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default AllProductsPage

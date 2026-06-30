import { FiEdit3, FiEye, FiPlus, FiSearch, FiTrash2 } from 'react-icons/fi'
import PageLayout from '../components/PageLayout'
import diamond from '../assets/Frame.png'

const products = [
  {
    id: 'LKS-0021',
    name: 'Diamond Solitaire Ring 18K',
    category: 'Rings',
    goldWt: '4.2g',
    diaWt: '0.5ct',
    price: '₹1,82,000',
    stock: 24,
    status: 'Active',
    created: 'Jan 10, 2025',
  },
  {
    id: 'LKS-0022',
    name: 'Rose Gold Bridal Necklace Set',
    category: 'Necklaces',
    goldWt: '18.5g',
    diaWt: '1.2ct',
    price: '₹3,92,000',
    stock: 8,
    status: 'Active',
    created: 'Jan 10, 2025',
  },
  {
    id: 'LKS-0023',
    name: 'Platinum Diamond Bangle',
    category: 'Bangles',
    goldWt: '12.0g',
    diaWt: '0.8ct',
    price: '₹2,64,000',
    stock: 15,
    status: 'Active',
    created: 'Jan 10, 2025',
  },
  {
    id: 'LKS-0024',
    name: 'Gold Kundan Jhumka Earrings',
    category: 'Earrings',
    goldWt: '6.8g',
    diaWt: '0.0ct',
    price: '₹48,200',
    stock: 42,
    status: 'Active',
    created: 'Jan 10, 2025',
  },
  {
    id: 'LKS-0025',
    name: 'Silver Kundan Necklace Set',
    category: 'Necklaces',
    goldWt: '22.0g',
    diaWt: '0.0ct',
    price: '₹38,500',
    stock: 0,
    status: 'Inactive',
    created: 'Jan 10, 2025',
  },
  {
    id: 'LKS-0026',
    name: 'White Gold Tennis Bracelet',
    category: 'Bracelets',
    goldWt: '8.4g',
    diaWt: '2.0ct',
    price: '₹5,24,000',
    stock: 3,
    status: 'Active',
    created: 'Jan 10, 2025',
  },
]

function AllProductsPage() {
  return (
    <PageLayout
      title='Product List'
      description='1,284 products in your catalogue'
      actions={
        <>
          <button className='rounded-xl border border-[#e9d8f0] bg-white px-4 py-2 text-sm font-semibold text-[#5f4b6e] shadow-sm transition hover:border-[#d7bfdc] hover:bg-[#fbf2ff]'>
            Bulk Actions
          </button>
          <button className='rounded-xl border border-[#e9d8f0] bg-white px-4 py-2 text-sm font-semibold text-[#5f4b6e] shadow-sm transition hover:border-[#d7bfdc] hover:bg-[#fbf2ff]'>
            Export
          </button>
          <button className='inline-flex items-center gap-2 rounded-xl bg-[var(--brand-700)] px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(114,23,104,0.22)] transition hover:bg-[var(--brand-800)]'>
            <FiPlus className='h-4 w-4' />
            Add Product
          </button>
        </>
      }
    >
      <div className='rounded-[2rem] border border-[#efe3ed] bg-white/80 p-5 shadow-[0_12px_35px_rgba(81,28,96,0.06)]'>
        <div className='mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex flex-1 items-center gap-2 rounded-xl border border-[#e9d8f0] bg-[#faf3fe] px-4 py-3 shadow-sm'>
            <FiSearch className='h-4 w-4 text-[#8c529d]' />
            <input
              type='text'
              aria-label='Search products'
              placeholder='Search products...'
              className='w-full bg-transparent text-sm text-[#362940] outline-none placeholder:text-[#9c8ca0]'
            />
          </div>

          <div className='flex flex-wrap gap-2'>
            {['Category', 'Collection', 'Metal Type', 'Gold Purity', 'Availability', 'Price Range'].map((filter) => (
              <button
                key={filter}
                type='button'
                className='rounded-xl border border-[#e9d8f0] bg-white px-4 py-2 text-sm font-medium text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff]'
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className='overflow-hidden rounded-[1.8rem] border border-[#efe3ed]'>
          <table className='min-w-full border-separate border-spacing-0 text-left'>
            <thead className='bg-[#fbf2ff] text-[0.82rem] uppercase tracking-[0.12em] text-[#755270]'>
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
                      {/* {product.id.slice(-2)} */}
                      <img src={diamond} alt='diamond'/>
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
                      <button type='button' className='inline-flex h-8 w-8 items-center justify-center text-[#6b4d7a] transition hover:bg-[#faf2ff] cursor-pointer'>
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

import { FiChevronDown, FiChevronRight, FiDollarSign, FiPlus, FiSave } from 'react-icons/fi'
import { SiTicktick } from "react-icons/si";
import PageLayout from '../components/PageLayout'

function AddProduct() {
  return (
    <PageLayout
      title='Add New Product'
      description='Fill in all fields to list a new jewellery product'
      actions={
        <>
          <button className='inline-flex items-center gap-2 rounded-lg border border-[#d4c3d8] bg-white px-4 py-1.5 text-[#5f4b6e] shadow-sm transition hover:border-[#cbb5d2] hover:bg-[#faf4ff] cursor-pointer'>
            <FiSave className='h-3.5 w-3.5' />
            <p className='text-sm'>Save as Draft</p>
          </button>
          <button className='inline-flex items-center gap-2 rounded-lg bg-[#7c21a0] px-5 py-1.5 text-white shadow-[0_16px_30px_rgba(124,33,160,0.24)] transition hover:bg-[#8c33b5] cursor-pointer'>
            <SiTicktick className='h-3 w-3' />
            <p className='text-sm'>Publish Product</p>
          </button>
        </>
      }
    >
      <div className='grid gap-6 xl:grid-cols-[1.6fr_1fr]'>
        <div className='space-y-6'>
          <section className='rounded-lg border border-[#efe3ed] bg-white p-6 shadow-[0_8px_30px_rgba(77,37,74,0.06)]'>
            <div className='flex flex-col gap-1'>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[#8e76a0]'>Basic Information</p>
              {/* <p className='text-sm text-[#776378]'>Product title, SKU, slug and description.</p> */}
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                Product Name *
                <input
                  type='text'
                  placeholder='e.g. Diamond Solitaire Ring 18K'
                  className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'
                />
              </label>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                SKU / Product Code *
                <input
                  type='text'
                  placeholder='LKS-0001'
                  className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'
                />
              </label>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                Slug
                <input
                  type='text'
                  placeholder='diamond-solitaire-ring-18k'
                  className='w-full rounded-2xl border border-[#e8dfe8] bg-[#f8f1ff] px-4 py-3 text-sm text-[#9f8aa8] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'
                />
              </label>
              <div className='sm:col-span-2'>
                <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                  Description
                  <textarea
                    rows='4'
                    placeholder='Enter full product description here...'
                    className='w-full rounded-[1.5rem] border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-4 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'
                  />
                </label>
              </div>
            </div>
          </section>

          <section className='rounded-lg border border-[#efe3ed] bg-white p-6 shadow-[0_8px_30px_rgba(77,37,74,0.06)]'>
            <div className='flex flex-col gap-1'>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[#8e76a0]'>Category Information</p>
              <p className='text-sm text-[#776378]'>Assign category, subcategory and collection.</p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                Category *
                <select className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'>
                  <option>Select Category</option>
                  <option>Rings</option>
                  <option>Necklaces</option>
                  <option>Earrings</option>
                </select>
              </label>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                Sub Category
                <select className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'>
                  <option>Select Sub Category</option>
                  <option>Solitaire</option>
                  <option>Bridal</option>
                  <option>Studs</option>
                </select>
              </label>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63] sm:col-span-2'>
                Collection
                <select className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'>
                  <option>Select Collection</option>
                  <option>Bridal</option>
                  <option>Everyday</option>
                  <option>Festive</option>
                </select>
              </label>
            </div>
          </section>

          <section className='rounded-lg border border-[#efe3ed] bg-white p-6 shadow-[0_8px_30px_rgba(77,37,74,0.06)]'>
            <div className='flex flex-col gap-1'>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[#8e76a0]'>Jewelry Details</p>
              <p className='text-sm text-[#776378]'>Enter metal, purity and gemstone details.</p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                Metal Type *
                <select className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'>
                  <option>Gold</option>
                  <option>Platinum</option>
                  <option>Silver</option>
                </select>
              </label>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                Gold Purity *
                <select className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'>
                  <option>18 Karat</option>
                  <option>22 Karat</option>
                  <option>24 Karat</option>
                </select>
              </label>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                Gold Weight (g) *
                <input
                  type='text'
                  placeholder='4.2'
                  className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'
                />
              </label>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                Diamond Weight (ct)
                <input
                  type='text'
                  placeholder='0.5'
                  className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'
                />
              </label>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63] sm:col-span-2'>
                Diamond Quality
                <select className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'>
                  <option>VVS1</option>
                  <option>VS1</option>
                  <option>SI1</option>
                </select>
              </label>
            </div>
          </section>
        </div>

        <div className='space-y-6'>
          <div className='rounded-lg border border-[#efe3ed] bg-white p-6 shadow-[0_8px_30px_rgba(77,37,74,0.06)]'>
            <div className='flex items-center justify-between gap-3'>
              <div>
                <p className='text-sm font-semibold text-[#5f4b6e]'>Pricing</p>
                <p className='mt-1 text-sm text-[#8d7a95]'>Set live gold rate, GST and pricing details.</p>
              </div>
              <span className='inline-flex rounded-full bg-[#f8ebff] px-3 py-2 text-sm font-semibold text-[#7b3b9a]'>
                Live Gold Rate
              </span>
            </div>

            <div className='mt-5 grid gap-4'>
              <div className='rounded-3xl bg-[#faf2ff] p-4 text-sm font-semibold text-[#7d3c98] shadow-[inset_0_1px_0_rgba(118,83,138,0.08)]'>
                ₹6,842 / gram
              </div>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                Making Charges (₹)
                <input
                  type='text'
                  placeholder='18,500'
                  className='w-full rounded-2xl border border-[#e8dfe8] bg-white px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'
                />
              </label>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                GST (%)
                <select className='w-full rounded-2xl border border-[#e8dfe8] bg-white px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'>
                  <option>3%</option>
                  <option>5%</option>
                  <option>12%</option>
                </select>
              </label>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                Calculated Selling Price
                <input
                  type='text'
                  placeholder='₹1,82,000'
                  className='w-full rounded-2xl border border-[#e8dfe8] bg-[#faf4ff] px-4 py-3 text-sm font-semibold text-[#39243e] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'
                />
              </label>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                Offer Price (₹) — optional
                <input
                  type='text'
                  placeholder='Leave blank for no discount'
                  className='w-full rounded-2xl border border-[#e8dfe8] bg-white px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'
                />
              </label>
            </div>
          </div>

          <div className='rounded-lg border border-[#efe3ed] bg-white p-6 shadow-[0_8px_30px_rgba(77,37,74,0.06)]'>
            <div className='flex flex-col gap-1'>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[#8e76a0]'>Inventory</p>
              <p className='text-sm text-[#776378]'>Control stock and warehouse assignment.</p>
            </div>

            <div className='grid gap-4'>
              <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                Stock Quantity *
                <input
                  type='number'
                  placeholder='24'
                  className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'
                />
              </label>
              <div className='grid gap-4 sm:grid-cols-2'>
                <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                  Min Stock Level
                  <input
                    type='number'
                    placeholder='5'
                    className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'
                  />
                </label>
                <label className='space-y-2 text-sm font-medium text-[#5a4b63]'>
                  Warehouse
                  <select className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'>
                    <option>Mumbai Main</option>
                    <option>Delhi Hub</option>
                    <option>Bengaluru Store</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          <div className='rounded-lg border border-[#efe3ed] bg-white p-6 shadow-[0_8px_30px_rgba(77,37,74,0.06)]'>
            <div className='flex flex-col gap-1'>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[#8e76a0]'>Status</p>
              <p className='text-sm text-[#776378]'>Publish state and visibility.</p>
            </div>

            <div className='space-y-4'>
              <div className='rounded-3xl bg-[#e8f8f0] p-4 text-sm text-[#14694e] shadow-[inset_0_1px_0_rgba(20,105,78,0.08)]'>
                <p className='font-semibold'>Active — visible on store</p>
                <p className='mt-1 text-sm text-[#4e7f6e]'>This product will appear in the storefront immediately.</p>
              </div>
              <div className='rounded-3xl bg-[#f8f1ff] p-4 text-sm text-[#7b3b9a] shadow-[inset_0_1px_0_rgba(124,35,160,0.08)]'>
                <p className='font-semibold'>Draft — not published yet</p>
                <p className='mt-1 text-sm text-[#75507f]'>Save as draft if you want to review before publishing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default AddProduct

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
          <button className='inline-flex items-center gap-2 rounded-lg border !border-[#d4c3d8] bg-white px-4 py-1.5 !text-[#5f4b6e] !font-semibold shadow-sm transition hover:border-[#cbb5d2] hover:bg-[#faf4ff] cursor-pointer'>
            <FiSave className='h-3.5 w-3.5' />
            <p className='!text-sm'>Save as Draft</p>
          </button>
          <button className='inline-flex items-center gap-2 rounded-lg bg-[#7c21a0] px-5 py-1.5 text-white shadow-[0_16px_30px_rgba(124,33,160,0.24)] transition hover:bg-[#8c33b5] cursor-pointer'>
            <SiTicktick className='h-3 w-3' />
            <p className='!text-sm'>Publish Product</p>
          </button>
        </>
      }
    >
      <div className='grid gap-6 xl:grid-cols-[1.6fr_1fr]'>
        <div className='space-y-6'>
          <section className='rounded-lg border border-[#efe3ed] bg-white p-6 shadow-[0_8px_30px_rgba(77,37,74,0.06)]'>
            <div className='flex flex-col gap-1'>
              <p className='text-sm font-bold mb-2'>Basic Information</p>
              {/* <p className='text-sm text-[#776378]'>Product title, SKU, slug and description.</p> */}
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                Product Name *
                <input
                  type='text'
                  placeholder='e.g. Diamond Solitaire Ring 18K'
                  className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'
                />
              </label>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                SKU / Product Code *
                <input
                  type='text'
                  placeholder='LKS-0001'
                  className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'
                />
              </label>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                Slug
                <input
                  type='text'
                  placeholder='diamond-solitaire-ring-18k'
                  className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'
                />
              </label>
              <div className='sm:col-span-2'>
                <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                  Description
                  <textarea
                    rows='4'
                    placeholder='Enter full product description here...'
                    className='w-full rounded-lg border border-[#e8dfe8] px-4 py-4 text-sm !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'
                  />
                </label>
              </div>
            </div>
          </section>

          <section className='rounded-lg border border-[#efe3ed] bg-white p-6 shadow-[0_8px_30px_rgba(77,37,74,0.06)]'>
            <div className='flex flex-col gap-1'>
              <p className='text-sm font-bold mb-2'>Category Information</p>
              {/* <p className='text-sm text-[#776378]'>Assign category, subcategory and collection.</p> */}
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                Category *
                <select className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'>
                  <option>Select Category</option>
                  <option>Rings</option>
                  <option>Necklaces</option>
                  <option>Earrings</option>
                </select>
              </label>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                Sub Category
                <select className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'>
                  <option>Select Sub Category</option>
                  <option>Solitaire</option>
                  <option>Bridal</option>
                  <option>Studs</option>
                </select>
              </label>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63] sm:col-span-2'>
                Collection
                <select className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'>
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
              <p className='text-sm font-bold mb-2'>Jewelry Details</p>
              {/* <p className='text-sm text-[#776378]'>Enter metal, purity and gemstone details.</p> */}
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                Metal Type *
                <select className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'>
                  <option>Gold</option>
                  <option>Platinum</option>
                  <option>Silver</option>
                </select>
              </label>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                Gold Purity *
                <select className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'>
                  <option>18 Karat</option>
                  <option>22 Karat</option>
                  <option>24 Karat</option>
                </select>
              </label>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                Gold Weight (g) *
                <input
                  type='text'
                  placeholder='4.2'
                  className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'
                />
              </label>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                Diamond Weight (ct)
                <input
                  type='text'
                  placeholder='0.5'
                  className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'
                />
              </label>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63] sm:col-span-2'>
                Diamond Quality
                <select className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'>
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
                <p className='text-sm font-bold mb-2'>Pricing</p>
                {/* <p className='mt-1 text-sm text-[#8d7a95]'>Set live gold rate, GST and pricing details.</p> */}
              </div>
            </div>

            <div className='mt-1 grid gap-4'>
              <div className='flex justify-between rounded-lg bg-[#FFF8E1] border border-[#E8C87A] p-2 text-sm font-semibold text-[#7d3c98] shadow-[inset_0_1px_0_rgba(118,83,138,0.08)]'>
                <span className='!text-sm !font-semibold !text-[#5A3000]'>
                  Live Gold Rate
                </span>
                <p>₹6,842 / gram</p>
              </div>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                Making Charges (₹)
                <input
                  type='text'
                  placeholder='18,500'
                  className='w-full rounded-lg border border-[#e8dfe8] bg-white px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'
                />
              </label>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                GST (%)
                <select className='w-full rounded-lg border border-[#e8dfe8] bg-white px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'>
                  <option>3%</option>
                  <option>5%</option>
                  <option>12%</option>
                </select>
              </label>
              <div className='flex justify-between rounded-lg bg-[#EDE7FB] p-2 text-sm font-semibold text-[#60195E] shadow-[inset_0_1px_0_rgba(118,83,138,0.08)]'>
                <span className='!text-[.9rem] !font-extralight !text-gray-700'>
                  Calculated Selling Price
                </span>
                <p>₹1,82,000</p>
              </div>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                Offer Price (₹) — optional
                <input
                  type='text'
                  placeholder='Leave blank for no discount'
                  className='w-full rounded-lg border border-[#e8dfe8] bg-white px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'
                />
              </label>
            </div>
          </div>

          <div className='rounded-lg border border-[#efe3ed] bg-white p-6 shadow-[0_8px_30px_rgba(77,37,74,0.06)]'>
            <div className='flex flex-col gap-1'>
              <p className='text-sm font-bold mb-2'>Inventory</p>
              {/* <p className='text-sm text-[#776378]'>Control stock and warehouse assignment.</p> */}
            </div>

            <div className='grid gap-4'>
              <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                Stock Quantity *
                <input
                  type='number'
                  placeholder='24'
                  className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'
                />
              </label>
              <div className='grid gap-4 sm:grid-cols-2'>
                <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                  Min Stock Level
                  <input
                    type='number'
                    placeholder='5'
                    className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'
                  />
                </label>
                <label className='space-y-2 !text-sm !font-medium !text-[#5a4b63]'>
                  Warehouse
                  <select className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-[.9rem] !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'>
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
              <p className='text-sm font-bold mb-2'>Status</p>
              {/* <p className='text-sm text-[#776378]'>Publish state and visibility.</p> */}
            </div>

            <div className='space-y-4'>
              <div className='flex items-center gap-2 rounded-lg border border-[#059669] bg-[#e8f8f0] p-2 !text-sm text-[#14694e] shadow-[inset_0_1px_0_rgba(20,105,78,0.08)]'>
                <span className='inline-block h-[.8rem] w-[.8rem] shrink-0 rounded-full bg-[#059669]'></span>
                <p className='!font-semibold'>Active — visible on store</p>
              </div>
              <div className='flex items-center gap-2 rounded-lg border border-[#E8E0E8] bg-[#F7F3F7] p-2 !text-sm text-[#646464] shadow-[inset_0_1px_0_rgba(20,105,78,0.08)]'>
                <span className='inline-block h-[.8rem] w-[.8rem] shrink-0 rounded-full bg-[#E8E0E8]'></span>
                <p className='!font-semibold'>Draft — not published yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default AddProduct

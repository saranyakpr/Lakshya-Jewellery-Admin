import { useState } from 'react'
import { FaGem } from 'react-icons/fa'
import { FiEdit3, FiImage, FiPlus, FiTrash2 } from 'react-icons/fi'
import PageLayout from '../components/PageLayout'

const cardClass =
  'rounded-2xl border border-[#eee3ec] bg-white shadow-[0_10px_28px_rgba(81,28,96,0.06)]'

const categories = [
  { name: 'Rings', subtitle: 'Engagement, Wedding, Statement', parent: '—', products: 342, status: 'Active' },
  { name: 'Necklaces', subtitle: 'Choker, Long, Layered', parent: '—', products: 218, status: 'Active' },
  { name: 'Bangles', subtitle: 'Traditional, Modern, Kadha', parent: '—', products: 156, status: 'Active' },
  { name: 'Earrings', subtitle: 'Jhumka, Studs, Hoops, Drops', parent: '—', products: 284, status: 'Active' },
  { name: 'Bracelets', subtitle: 'Tennis, Charm, Cuff', parent: '—', products: 94, status: 'Active' },
]

function CategoriesPage() {
  const [categoryName, setCategoryName] = useState('')
  const [description, setDescription] = useState('')

  return (
    <PageLayout
      title='Product Categories'
      description='Organise products by category hierarchy'
      actions={
        <button
          type='button'
          className='inline-flex items-center gap-2 rounded-xl px-4 py-2 !text-sm !font-semibold !text-white bg-[#7c21a0] cursor-pointer'
        >
          <FiPlus className='h-4 w-4' />
          Add Category
        </button>
      }
    >
      <div className='grid gap-6 xl:grid-cols-[1.7fr_1fr]'>
        <div className={`${cardClass} overflow-hidden`}>
          <div className='overflow-x-auto'>
            <table className='w-full min-w-[42rem] border-separate border-spacing-0 text-left'>
              <thead className='!bg-[#fbf2ff] !text-[0.78rem] !text-[#755270]'>
                <tr>
                  <th className='px-4 py-3 sm:px-5'>Category Name</th>
                  <th className='px-4 py-3 sm:px-5'>Parent Category</th>
                  <th className='px-4 py-3 sm:px-5'>Products</th>
                  <th className='px-4 py-3 sm:px-5'>Status</th>
                  <th className='px-4 py-3 sm:px-5'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={category.name} className={index % 2 === 0 ? 'bg-white' : 'bg-[#fcf5ff]'}>
                    <td className='border-t border-[#f1e5f2] px-4 py-3 sm:px-5'>
                      <div className='flex items-center gap-3'>
                        <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f3e8fb]'>
                          <FaGem className='h-4 w-4 text-[#8c3fc4]' />
                        </div>
                        <div className='min-w-0'>
                          <p className='text-sm font-semibold text-[#312533]'>{category.name}</p>
                          <p className='truncate text-xs text-[#9d8fa3]'>{category.subtitle}</p>
                        </div>
                      </div>
                    </td>
                    <td className='border-t border-[#f1e5f2] px-4 py-3 text-sm text-[#9d8fa3] sm:px-5'>{category.parent}</td>
                    <td className='border-t border-[#f1e5f2] px-4 py-3 text-sm font-semibold text-[#312533] sm:px-5'>{category.products}</td>
                    <td className='border-t border-[#f1e5f2] px-4 py-3 sm:px-5'>
                      <span className='inline-flex rounded-full bg-[#dcfaea] px-3 py-1 text-xs font-semibold text-[#15803d]'>
                        {category.status}
                      </span>
                    </td>
                    <td className='border-t border-[#f1e5f2] px-4 py-3 sm:px-5'>
                      <div className='flex items-center gap-3'>
                        <button type='button' className='text-[#3680ff] transition hover:text-[#1f5fd8] cursor-pointer' aria-label={`Edit ${category.name}`}>
                          <FiEdit3 className='h-4 w-4' />
                        </button>
                        <button type='button' className='text-[#e5484d] transition hover:text-[#c53137] cursor-pointer' aria-label={`Delete ${category.name}`}>
                          <FiTrash2 className='h-4 w-4' />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${cardClass} p-5 sm:p-6`}>
          <h3 className='!text-base !font-bold !text-[#241a2c] !sm:text-lg'>Add Category</h3>

          <div className='mt-3 space-y-4'>
            <label className='block space-y-2 text-sm font-medium text-[#5a4b63]'>
              Category Name *
              <input
                type='text'
                value={categoryName}
                onChange={(event) => setCategoryName(event.target.value)}
                placeholder='e.g. Pendants'
                className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-sm !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'
              />
            </label>

            <label className='block space-y-2 text-sm font-medium text-[#5a4b63]'>
              Parent Category
              <select className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-sm !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'>
                <option>None (Top Level)</option>
                {categories.map((category) => (
                  <option key={category.name}>{category.name}</option>
                ))}
              </select>
            </label>

            <label className='block space-y-2 text-sm font-medium text-[#5a4b63]'>
              Description
              <textarea
                rows='4'
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder='Category description for SEO...'
                className='w-full rounded-lg border border-[#e8dfe8] px-2 py-2 !text-sm !text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff] mt-1'
              />
            </label>

            <button
              type='button'
              className='flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#d9c3e6] bg-[#fbf4ff] px-4 py-6 text-sm font-semibold text-[#60195E] transition hover:border-[#b78cd2] hover:bg-[#f8ecff] cursor-pointer'
            >
              <FiImage className='h-5 w-5' />
              Upload Category Image
            </button>

            <button
              type='button'
              className='w-full rounded-lg bg-[#60195E] px-4 py-3 !text-sm font-semibold text-white shadow-[0_16px_30px_rgba(124,33,160,0.24)] transition hover:bg-[#8c33b5] cursor-pointer'
            >
              Save Category
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default CategoriesPage

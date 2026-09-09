import { useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { FiEdit3, FiImage, FiPlus, FiTrash2 } from 'react-icons/fi'
import PageLayout from '../components/PageLayout'

const cardClass =
  'rounded-2xl border border-[#eee3ec] bg-white shadow-[0_10px_28px_rgba(81,28,96,0.06)]'

const collections = [
  {
    name: 'Bridal Collection 2025',
    description: 'Exquisite bridal jewellery sets crafted for the modern bride',
    status: 'Active',
  },
  {
    name: 'Festive Gold 2025',
    description: 'Vibrant gold and diamond pieces for festive celebrations',
    status: 'Active',
  },
  {
    name: 'Minimalist Everyday Wear',
    description: 'Lightweight daily wear pieces for the modern woman',
    status: 'Active',
  },
]

function CollectionsPage() {
  const [collectionName, setCollectionName] = useState('')
  const [description, setDescription] = useState('')

  return (
    <PageLayout
      title='Collections'
      description='Create and manage curated jewellery collections'
      actions={
        <button
          type='button'
          className='inline-flex items-center gap-2 rounded-xl px-4 py-2 !text-sm !font-semibold !text-white bg-[#60195E] shadow-[0_16px_30px_rgba(124,33,160,0.24)] transition hover:bg-[#8c33b5] cursor-pointer'
        >
          <FiPlus className='h-4 w-4' />
          New Collection
        </button>
      }
    >
      <div className='grid gap-6 xl:grid-cols-[1.7fr_1fr]'>
        <div className='space-y-4'>
          {collections.map((collection) => (
            <div key={collection.name} className={`${cardClass} p-4 sm:p-5`}>
              <div className='flex flex-wrap items-center gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f3e8fb]'>
                  <BsStars className='h-5 w-5 text-[#8c3fc4]' />
                </div>

                <div className='min-w-0 flex-1'>
                  <p className='text-sm font-bold text-[#241a2c] sm:text-base'>{collection.name}</p>
                  <p className='mt-1 truncate text-xs text-[#9d8fa3] sm:text-sm'>{collection.description}</p>
                </div>

                <div className='ml-auto flex items-center gap-4 sm:ml-0'>
                  <span className='inline-flex rounded-full bg-[#dcfaea] px-3 py-1 text-xs font-semibold text-[#15803d]'>
                    {collection.status}
                  </span>
                  <div className='flex items-center gap-3'>
                    <button
                      type='button'
                      className='text-[#3680ff] transition hover:text-[#1f5fd8] cursor-pointer'
                      aria-label={`Edit ${collection.name}`}
                    >
                      <FiEdit3 className='h-4 w-4' />
                    </button>
                    <button
                      type='button'
                      className='text-[#e5484d] transition hover:text-[#c53137] cursor-pointer'
                      aria-label={`Delete ${collection.name}`}
                    >
                      <FiTrash2 className='h-4 w-4' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${cardClass} p-5 sm:p-6`}>
          <h3 className='text-base font-bold text-[#241a2c] sm:text-lg'>New Collection</h3>

          <div className='mt-5 space-y-4'>
            <label className='block space-y-2 text-sm font-medium text-[#5a4b63]'>
              Collection Name *
              <input
                type='text'
                value={collectionName}
                onChange={(event) => setCollectionName(event.target.value)}
                placeholder='e.g. Summer Bloom 2025'
                className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'
              />
            </label>

            <button
              type='button'
              className='flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-[#d9c3e6] bg-[#fbf4ff] px-4 py-6 text-sm font-semibold text-[#7b3b9a] transition hover:border-[#b78cd2] hover:bg-[#f8ecff] cursor-pointer'
            >
              <FiImage className='h-5 w-5' />
              Upload Banner Image
            </button>

            <label className='block space-y-2 text-sm font-medium text-[#5a4b63]'>
              Description
              <textarea
                rows='4'
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder='Describe this collection...'
                className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'
              />
            </label>

            <label className='block space-y-2 text-sm font-medium text-[#5a4b63]'>
              Status
              <select className='w-full rounded-lg border border-[#e8dfe8] bg-[#fbf4ff] px-4 py-3 text-sm text-[#312533] outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'>
                <option>Active</option>
                <option>Draft</option>
                <option>Inactive</option>
              </select>
            </label>

            <button
              type='button'
              className='w-full rounded-lg bg-[#7c21a0] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(124,33,160,0.24)] transition hover:bg-[#8c33b5] cursor-pointer'
            >
              Save Collection
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default CollectionsPage

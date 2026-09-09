import { FaRegStar } from 'react-icons/fa'
import { FiCheck, FiSearch, FiTrash2, FiX } from 'react-icons/fi'

const cardClass =
  'rounded-2xl border border-[#eee3ec] bg-white shadow-[0_10px_28px_rgba(81,28,96,0.06)]'

const summaryStats = [
  { label: 'Average Rating', value: '4.6' },
  { label: 'Total Reviews', value: '2,841' },
  { label: 'Pending Approval', value: '48' },
  { label: 'Rejected Reviews', value: '12' },
]

const statusStyles = {
  Approved: 'bg-[#dcfaea] text-[#15803d]',
  Pending: 'bg-[#fff3d0] text-[#a3720b]',
  Rejected: 'bg-[#ffe1e3] text-[#c53137]',
}

const reviews = [
  {
    initials: 'PS',
    customer: 'Priya Sharma',
    product: 'Diamond Solitaire Ring 18K',
    rating: 5,
    review: 'Absolutely stunning! Very happy.',
    date: 'Jan 18, 2025',
    status: 'Approved',
  },
  {
    initials: 'RK',
    customer: 'Rahul Kumar',
    product: 'Platinum Diamond Bangle',
    rating: 3,
    review: 'Packaging could be improved.',
    date: 'Jan 15, 2025',
    status: 'Pending',
  },
  {
    initials: 'NK',
    customer: 'Neha Kapoor',
    product: 'Rose Gold Bridal Set',
    rating: 5,
    review: 'Loved the collection, will buy again!',
    date: 'Jan 12, 2025',
    status: 'Approved',
  },
  {
    initials: 'AM',
    customer: 'Arjun Mehta',
    product: 'Gold Kundan Earrings',
    rating: 2,
    review: 'Exactly as pictured. Great quality.',
    date: 'Jan 10, 2025',
    status: 'Rejected',
  },
  {
    initials: 'SP',
    customer: 'Sunita Patel',
    product: 'Silver Kundan Necklace',
    rating: 4,
    review: 'Beautiful craftsmanship, true to size.',
    date: 'Jan 8, 2025',
    status: 'Pending',
  },
]

function StarRating({ rating }) {
  return (
    <div className='flex items-center gap-0.5'>
      {Array.from({ length: 5 }).map((_, index) => (
        <FaRegStar key={index} className={`h-3.5 w-3.5 text-[#E8C87A] ${index < rating ? '' : 'opacity-25'}`} />
      ))}
    </div>
  )
}

function ReviewsPage() {
  return (
    <section className='flex flex-col gap-6'>
      <div>
        <h1 className='text-[1.7rem] font-black tracking-[-0.03em] text-[var(--text-primary)]'>Reviews</h1>
        <p className='mt-1 text-sm text-[var(--text-muted)]'>Moderate customer reviews across all products</p>
      </div>

      <div className='grid gap-4 grid-cols-2 lg:grid-cols-4'>
        {summaryStats.map((stat) => (
          <div key={stat.label} className={`${cardClass} flex gap-3 items-center p-4 sm:p-5`}>
            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#fdf0d4]'>
              <FaRegStar className='h-4 w-4 text-[#e8a13a]' />
            </div>
            <div>
              <p className='!text-xl !font-black tracking-[-0.02em] !text-[#241a2c] !sm:text-2xl'>{stat.value}</p>
              <p className='mt-1 !text-sm !text-[#9d8fa3] !sm:text-sm'>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`${cardClass} flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:p-5`}>
        <div className='flex flex-1 items-center gap-2 rounded-lg bg-gray-50 border border-gray-200 px-3 py-2'>
          <FiSearch className='h-4 w-4 shrink-0 text-[#8c529d]' />
          <input
            type='text'
            aria-label='Search reviews'
            placeholder='Search by customer or product...'
            className='w-full bg-transparent text-sm text-[#362940] outline-none placeholder:text-[#9c8ca0]'
          />
        </div>

        <div className='flex flex-wrap gap-3'>
          <select className='rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 !text-sm !font-medium !text-[#5f4b6e]'>
            <option>All Ratings</option>
            <option>5 Stars</option>
            <option>4 Stars</option>
            <option>3 Stars</option>
            <option>2 Stars</option>
            <option>1 Star</option>
          </select>
          <select className='rounded-lg bg-gray-50 border border-gray-200 px-3 py-2 !text-sm !font-medium !text-[#5f4b6e]'>
            <option>All Status</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      <div className={`${cardClass} overflow-hidden`}>
        <div className='overflow-x-auto'>
          <table className='w-full min-w-[54rem] border-separate border-spacing-0 text-left'>
            <thead className='bg-[#fbf2ff] !text-[0.8rem] !text-[#755270]'>
              <tr>
                <th className='px-4 py-3 sm:px-5'>Customer</th>
                <th className='px-4 py-3 sm:px-5'>Product</th>
                <th className='px-4 py-3 sm:px-5'>Rating</th>
                <th className='px-4 py-3 sm:px-5'>Review</th>
                <th className='px-4 py-3 sm:px-5'>Date</th>
                <th className='px-4 py-3 sm:px-5'>Status</th>
                <th className='px-4 py-3 sm:px-5'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((item, index) => (
                <tr key={item.customer} className={index % 2 === 0 ? 'bg-white' : 'bg-[#fcf5ff]'}>
                  <td className='border-t border-[#f1e5f2] px-4 py-3 sm:px-5'>
                    <div className='flex items-center gap-2'>
                      <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f3e8fb] text-[0.68rem] font-bold text-[#8c3fc4]'>
                        {item.initials}
                      </div>
                      <p className='!text-sm !font-semibold !text-[#312533]'>{item.customer}</p>
                    </div>
                  </td>
                  <td className='border-t border-[#f1e5f2] px-4 py-3 text-sm text-[#6e5a6e] sm:px-5'>{item.product}</td>
                  <td className='border-t border-[#f1e5f2] px-4 py-3 sm:px-5'>
                    <StarRating rating={item.rating} />
                  </td>
                  <td className='border-t border-[#f1e5f2] px-4 py-3 text-sm text-[#6e5a6e] sm:px-5'>{item.review}</td>
                  <td className='border-t border-[#f1e5f2] px-4 py-3 text-sm text-[#9d8fa3] sm:px-5'>{item.date}</td>
                  <td className='border-t border-[#f1e5f2] px-4 py-3 sm:px-5'>
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[item.status]}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className='border-t border-[#f1e5f2] px-4 py-3 sm:px-5'>
                    <div className='flex items-center gap-2'>
                      <button
                        type='button'
                        aria-label={`Approve ${item.customer}'s review`}
                        className='flex h-7 w-7 items-center justify-center rounded-lg bg-[#dcfaea] text-[#15803d] transition hover:bg-[#c7f3dc] cursor-pointer'
                      >
                        <FiCheck className='h-3.5 w-3.5' />
                      </button>
                      <button
                        type='button'
                        aria-label={`Reject ${item.customer}'s review`}
                        className='flex h-7 w-7 items-center justify-center rounded-lg bg-[#ffe1e3] text-[#c53137] transition hover:bg-[#ffd0d3] cursor-pointer'
                      >
                        <FiX className='h-3.5 w-3.5' />
                      </button>
                      <button
                        type='button'
                        aria-label={`Delete ${item.customer}'s review`}
                        className='flex h-7 w-7 items-center justify-center rounded-lg text-[#7e6d83] transition hover:bg-[#f3e8fb] hover:text-[#5f4b6e] cursor-pointer'
                      >
                        <FiTrash2 className='h-3.5 w-3.5' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default ReviewsPage

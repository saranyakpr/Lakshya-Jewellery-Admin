import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { findProduct } from '../data/products'
import { FaGem, FaStar } from 'react-icons/fa'
import { FiArrowLeft, FiEdit3 } from 'react-icons/fi'

const cardClass =
  'rounded-2xl border border-[#eee3ec] bg-white p-5 shadow-[0_10px_28px_rgba(81,28,96,0.06)] sm:p-6'

function StatItem({ label, value }) {
  return (
    <div>
      <p className='text-[0.7rem] uppercase tracking-[0.14em] text-[#9d8fa3]'>{label}</p>
      <p className='mt-1 text-sm font-semibold text-[#312533]'>{value}</p>
    </div>
  )
}

function ProductDetailPage() {
  const { productId } = useParams()
  const navigate = useNavigate()

  const product = useMemo(() => findProduct(productId), [productId])

  if (!product) {
    return (
      <PageLayout title='Product Not Found' description='The requested product could not be located.'>
        <div className={`${cardClass} text-center text-sm text-[#6e5a6e]`}>
          <p>Sorry, we could not find the product you are looking for.</p>
          <button
            type='button'
            onClick={() => navigate('/products/all-products')}
            className='mt-6 rounded-xl border border-[#e9d8f0] bg-white px-5 py-3 text-sm font-semibold text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff]'
          >
            Back to all products
          </button>
        </div>
      </PageLayout>
    )
  }

  const primaryReview = product.reviews[0]

  return (
    <PageLayout
      title={product.name}
      description={`SKU: ${product.id} · ${product.category} · ${product.metal}`}
      actions={
        <>
          <button
            type='button'
            onClick={() => navigate('/products/all-products')}
            className='inline-flex items-center gap-2 rounded-xl border border-[#e9d8f0] bg-white px-4 py-3 text-sm font-semibold text-[#5f4b6e] transition hover:border-[#d7bfdc] hover:bg-[#faf2ff]'
          >
            <FiArrowLeft className='h-4 w-4' />
            Back to List
          </button>
          <button
            type='button'
            className='inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7c21a0] via-[#9038c5] to-[#bc5eff] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(124,33,160,0.24)] transition hover:shadow-[0_22px_48px_rgba(124,33,160,0.28)] hover:from-[#8d33b5] hover:via-[#a947de] hover:to-[#c860ff]'
          >
            <FiEdit3 className='h-4 w-4' />
            Edit Product
          </button>
        </>
      }
    >
      <div className='grid gap-6 xl:grid-cols-[1.8fr_1fr]'>
        <div className='space-y-6'>
          <div className={cardClass}>
            <div className='flex items-center justify-between gap-3'>
              <h2 className='text-base font-bold text-[#241a2c] sm:text-lg'>Product Overview</h2>
              <span className='inline-flex shrink-0 items-center rounded-full bg-[#dcfaea] px-3 py-1 text-xs font-semibold text-[#15803d] sm:px-4 sm:text-sm'>
                {product.status}
              </span>
            </div>

            <div className='mt-5 flex flex-col gap-4 sm:flex-row sm:items-start'>
              <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#f3e8fb]'>
                <FaGem className='h-7 w-7 text-[#8c3fc4]' />
              </div>

              <div className='min-w-0 flex-1'>
                <h3 className='text-lg font-bold text-[#221b30] sm:text-xl'>{product.name}</h3>

                <div className='mt-4 flex flex-wrap gap-x-8 gap-y-3'>
                  <StatItem label='Category' value={product.category} />
                  <StatItem label='Metal' value={product.metal} />
                  <StatItem label='Gold Weight' value={product.goldWt} />
                  <StatItem label='Diamond Wt.' value={product.diaWt} />
                </div>
              </div>
            </div>
          </div>

          <div className={cardClass}>
            <h3 className='text-base font-bold text-[#241a2c] sm:text-lg'>Pricing Breakdown</h3>

            {product.pricing.length > 0 ? (
              <div className='mt-4 divide-y divide-[#f1e5f2]'>
                {product.pricing.map((item) => (
                  <div key={item.label} className='flex items-center justify-between gap-4 py-3 text-sm'>
                    <span className='text-[#6e5a6e]'>{item.label}</span>
                    <span className='font-semibold text-[#312533]'>{item.value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className='mt-4 text-sm text-[#6e5a6e]'>No pricing breakdown is available for this product.</p>
            )}

            <div className='mt-3 flex items-center justify-between gap-4 rounded-xl bg-[#f5edff] px-4 py-4 text-sm font-bold text-[#531f7d] sm:px-5'>
              <span>Selling Price (incl. GST)</span>
              <span>{product.price}</span>
            </div>
          </div>

          <div className={cardClass}>
            <div className='flex flex-wrap items-center justify-between gap-3'>
              <h3 className='text-base font-bold text-[#241a2c] sm:text-lg'>Customer Reviews</h3>
              {primaryReview ? (
                <span className='inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#fff4e0] px-3 py-1 text-xs font-semibold text-[#a85d00] sm:text-sm'>
                  <FaStar className='h-3 w-3' />
                  {primaryReview.rating} ({product.reviews.length} reviews)
                </span>
              ) : null}
            </div>

            {primaryReview ? (
              <div className='mt-4'>
                <p className='text-sm font-semibold text-[#312533]'>{primaryReview.author}</p>
                <p className='mt-1 text-xs text-[#9d8fa3]'>
                  {Math.round(primaryReview.rating)} stars · {primaryReview.date}
                </p>
                <p className='mt-3 text-sm leading-6 text-[#5d4b67]'>{primaryReview.text}</p>
              </div>
            ) : (
              <p className='mt-4 text-sm text-[#6e5a6e]'>No reviews are available for this product yet.</p>
            )}
          </div>
        </div>

        <aside className='space-y-6'>
          <div className={cardClass}>
            <h3 className='text-base font-bold text-[#241a2c] sm:text-lg'>Inventory Details</h3>

            <div className='mt-4 rounded-xl bg-[#e9fbf1] px-4 py-4'>
              <p className='text-xs font-semibold uppercase tracking-[0.14em] text-[#2f8f5f]'>Current Stock</p>
              <p className='mt-1 text-2xl font-black text-[#15803d]'>{product.stock} units</p>
            </div>

            <div className='mt-4 grid grid-cols-2 gap-4'>
              <StatItem label='Min Level' value={product.minLevel} />
              <StatItem label='Warehouse' value={product.warehouse} />
            </div>
          </div>

          <div className={cardClass}>
            <h3 className='text-base font-bold text-[#241a2c] sm:text-lg'>Audit Logs</h3>

            <div className='mt-4 space-y-4'>
              {product.auditLogs.length > 0 ? (
                product.auditLogs.map((log, index) => (
                  <div key={`${log.label}-${index}`} className='flex items-start gap-3'>
                    <div className='mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f3e8fb] text-[#8c3fc4]'>
                      <FiEdit3 className='h-3.5 w-3.5' />
                    </div>
                    <div className='min-w-0'>
                      <p className='text-sm font-semibold text-[#312533]'>{log.label}</p>
                      <p className='mt-0.5 text-xs text-[#9d8fa3]'>
                        by Sri · {log.date}, {log.time}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className='text-sm text-[#6e5a6e]'>No audit history recorded yet.</p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </PageLayout>
  )
}

export default ProductDetailPage

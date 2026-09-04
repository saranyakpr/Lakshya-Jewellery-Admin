import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { findProduct } from '../data/products'
import { FiArrowLeft, FiEdit3 } from 'react-icons/fi'

function ProductDetailPage() {
  const { productId } = useParams()
  const navigate = useNavigate()

  const product = useMemo(() => findProduct(productId), [productId])

  if (!product) {
    return (
      <PageLayout title='Product Not Found' description='The requested product could not be located.'>
        <div className='rounded-3xl border border-[#efe3ed] bg-white p-10 text-center text-sm text-[#6e5a6e]'>
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
          <div className='rounded-[2rem] border border-[#efe3ed] bg-white p-6 shadow-[0_12px_35px_rgba(81,28,96,0.06)]'>
            <div className='mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#7e6d83]'>Product Overview</p>
                <h2 className='mt-3 text-2xl font-black tracking-[-0.03em] text-[#1f1532]'>{product.name}</h2>
                <p className='mt-2 text-sm text-[#6e5a6e]'>SKU: {product.id} · {product.category} · {product.metal}</p>
              </div>
              <span className='inline-flex rounded-full bg-[#e9f9f1] px-4 py-2 text-sm font-semibold text-[#1f6f4a]'>{product.status}</span>
            </div>

            <div className='grid gap-6 lg:grid-cols-[240px_1fr]'>
              <div className='rounded-[1.8rem] bg-[#fdf6ff] p-6'>
                <img src={product.image} alt={product.name} className='h-full w-full object-contain' />
              </div>

              <div className='space-y-5'>
                <p className='text-sm leading-7 text-[#5f4b6e]'>{product.description}</p>

                <div className='grid gap-3 sm:grid-cols-2'>
                  <div className='rounded-[1.8rem] bg-[#faf3fe] p-4 text-sm'>
                    <p className='text-[0.7rem] uppercase tracking-[0.22em] text-[#8c7a96]'>Category</p>
                    <p className='mt-2 font-semibold text-[#312533]'>{product.category}</p>
                  </div>
                  <div className='rounded-[1.8rem] bg-[#faf3fe] p-4 text-sm'>
                    <p className='text-[0.7rem] uppercase tracking-[0.22em] text-[#8c7a96]'>Metal</p>
                    <p className='mt-2 font-semibold text-[#312533]'>{product.metal}</p>
                  </div>
                  <div className='rounded-[1.8rem] bg-[#faf3fe] p-4 text-sm'>
                    <p className='text-[0.7rem] uppercase tracking-[0.22em] text-[#8c7a96]'>Gold Weight</p>
                    <p className='mt-2 font-semibold text-[#312533]'>{product.goldWt}</p>
                  </div>
                  <div className='rounded-[1.8rem] bg-[#faf3fe] p-4 text-sm'>
                    <p className='text-[0.7rem] uppercase tracking-[0.22em] text-[#8c7a96]'>Diamond Wt.</p>
                    <p className='mt-2 font-semibold text-[#312533]'>{product.diaWt}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[2rem] border border-[#efe3ed] bg-white p-6 shadow-[0_12px_35px_rgba(81,28,96,0.06)]'>
            <div className='mb-4 flex items-center justify-between gap-4'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#7e6d83]'>Pricing Breakdown</p>
                <h3 className='mt-2 text-lg font-semibold text-[#221b30]'>Pricing Breakdown</h3>
              </div>
              <span className='rounded-full bg-[#f5edff] px-4 py-2 text-sm font-semibold text-[#6f3e95]'>incl. GST</span>
            </div>

            <div className='space-y-3'>
              {product.pricing.map((item) => (
                <div key={item.label} className='flex items-center justify-between rounded-[1.8rem] border border-[#f1e5f2] bg-[#faf6ff] px-5 py-4 text-sm text-[#5f4b6e]'>
                  <span>{item.label}</span>
                  <span className='font-semibold text-[#312533]'>{item.value}</span>
                </div>
              ))}
            </div>

            <div className='mt-5 rounded-[1.8rem] bg-[#f5edff] px-5 py-4 text-sm font-semibold text-[#531f7d]'>
              <div className='flex items-center justify-between'>
                <span>Selling Price (incl. GST)</span>
                <span>{product.price}</span>
              </div>
            </div>
          </div>

          <div className='rounded-[2rem] border border-[#efe3ed] bg-white p-6 shadow-[0_12px_35px_rgba(81,28,96,0.06)]'>
            <div className='mb-5 flex items-center justify-between gap-4'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#7e6d83]'>Customer Reviews</p>
                <h3 className='mt-2 text-lg font-semibold text-[#221b30]'>Customer Reviews</h3>
              </div>
              <span className='rounded-full bg-[#fff4e8] px-4 py-2 text-sm font-semibold text-[#a85d00]'>
                {product.reviews.length > 0 ? `${product.reviews[0].rating} (${product.reviews.length} reviews)` : 'No reviews'}
              </span>
            </div>

            {product.reviews.length > 0 ? (
              <div className='rounded-[1.8rem] border border-[#f1e5f2] bg-[#faf2ff] p-5'>
                <div className='flex items-center justify-between gap-4'>
                  <div>
                    <p className='text-sm font-semibold text-[#312533]'>{product.reviews[0].author}</p>
                    <p className='text-xs text-[#7e6d83]'>{product.reviews[0].date}</p>
                  </div>
                  <span className='rounded-full bg-[#ffefda] px-3 py-1 text-sm font-semibold text-[#a85d00]'>{product.reviews[0].rating} ★</span>
                </div>
                <p className='mt-4 text-sm leading-7 text-[#5d4b67]'>{product.reviews[0].text}</p>
              </div>
            ) : (
              <p className='text-sm text-[#6e5a6e]'>No reviews are available for this product yet.</p>
            )}
          </div>
        </div>

        <aside className='space-y-6'>
          <div className='rounded-[2rem] border border-[#efe3ed] bg-white p-6 shadow-[0_12px_35px_rgba(81,28,96,0.06)]'>
            <h3 className='mb-5 text-lg font-semibold text-[#312533]'>Inventory Details</h3>
            <div className='space-y-4 text-sm text-[#5f4b6e]'>
              <div className='rounded-[1.8rem] bg-[#effbf4] px-4 py-4'>
                <p className='text-xs uppercase tracking-[0.22em] text-[#4c7c5f]'>Current Stock</p>
                <p className='mt-2 text-xl font-semibold text-[#1f6f4a]'>{product.stock} units</p>
              </div>
              <div className='rounded-[1.8rem] bg-[#fffbf5] px-4 py-4'>
                <p className='text-xs uppercase tracking-[0.22em] text-[#7b5d3e]'>Min Level</p>
                <p className='mt-2 text-xl font-semibold text-[#60422e]'>{product.minLevel}</p>
              </div>
              <div className='rounded-[1.8rem] bg-[#f3f7ff] px-4 py-4'>
                <p className='text-xs uppercase tracking-[0.22em] text-[#52688c]'>Warehouse</p>
                <p className='mt-2 text-xl font-semibold text-[#312533]'>{product.warehouse}</p>
              </div>
            </div>
          </div>

          <div className='rounded-[2rem] border border-[#efe3ed] bg-white p-6 shadow-[0_12px_35px_rgba(81,28,96,0.06)]'>
            <h3 className='mb-5 text-lg font-semibold text-[#312533]'>Audit Logs</h3>
            <div className='space-y-3'>
              {product.auditLogs.map((log, index) => (
                <div key={`${log.label}-${index}`} className='flex items-start gap-3 rounded-[1.8rem] bg-[#faf4ff] px-4 py-4'>
                  <span className='mt-1 h-2.5 w-2.5 rounded-full bg-[#8c54c4]' />
                  <div>
                    <p className='text-sm font-semibold text-[#312533]'>{log.label}</p>
                    <p className='text-xs text-[#7e6d83]'>By system · {log.date}, {log.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </PageLayout>
  )
}

export default ProductDetailPage

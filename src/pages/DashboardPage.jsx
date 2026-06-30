
import { useNavigate } from 'react-router-dom'
import { FaRegStar, FaRupeeSign, FaStar } from 'react-icons/fa'
import {
  FiAlertTriangle,
  FiArchive,
  FiArrowDownRight,
  FiArrowUpRight,
  FiBox,
  FiCalendar,
  FiCheckCircle,
  FiChevronDown,
  FiChevronRight,
  FiClock,
  FiCornerUpLeft,
  FiDownload,
  FiPackage,
  FiPlus,
  FiShoppingBag,
  FiTag,
  FiUserPlus,
  FiUsers,
  FiXCircle,
} from 'react-icons/fi'
import PageLayout from '../components/PageLayout'

const surfaceClass =
  'rounded-[1.35rem] border border-[#efe3ea] bg-white shadow-[0_10px_30px_rgba(84,44,68,0.08)]'

const keyMetrics = [
  {
    label: 'Total Revenue',
    value: 'Rs.24,85,640',
    trend: '+14.2% vs last month',
    tone: 'positive',
    icon: FaRupeeSign,
    iconBg: 'bg-[#f4e8ff]',
    iconColor: 'text-[#8d34c7]',
  },
  {
    label: 'Total Orders',
    value: '3,842',
    trend: '+8.5% vs last month',
    tone: 'positive',
    icon: FiShoppingBag,
    iconBg: 'bg-[#e9f2ff]',
    iconColor: 'text-[#3680ff]',
  },
  {
    label: 'Total Customers',
    value: '12,450',
    trend: '+5.1% vs last month',
    tone: 'positive',
    icon: FiUsers,
    iconBg: 'bg-[#e7fff5]',
    iconColor: 'text-[#00a86b]',
  },
  {
    label: 'Total Products',
    value: '1,284',
    trend: '+42 added this month',
    tone: 'info',
    icon: FiBox,
    iconBg: 'bg-[#fff4dc]',
    iconColor: 'text-[#f39b11]',
  },
  {
    label: 'Total Inventory Value',
    value: 'Rs.8,42,36,000',
    trend: '-2.3% vs last month',
    tone: 'negative',
    icon: FiArchive,
    iconBg: 'bg-[#f4ecff]',
    iconColor: 'text-[#7a1c73]',
  },
]

const orderStatuses = [
  { label: 'Pending Orders', value: '248', icon: FiClock, iconBg: 'bg-[#fff1d8]', iconColor: 'text-[#ef9f1b]' },
  { label: 'Processing', value: '182', icon: FiPackage, iconBg: 'bg-[#e9f2ff]', iconColor: 'text-[#4d8af4]' },
  { label: 'Delivered', value: '2,841', icon: FiCheckCircle, iconBg: 'bg-[#e7fff5]', iconColor: 'text-[#16b374]' },
  { label: 'Cancelled', value: '97', icon: FiXCircle, iconBg: 'bg-[#ffe8e6]', iconColor: 'text-[#ff7a66]' },
  { label: 'Return Requests', value: '34', icon: FiCornerUpLeft, iconBg: 'bg-[#f4eaff]', iconColor: 'text-[#7e4ce0]' },
  { label: 'Low Stock', value: '56', icon: FiAlertTriangle, iconBg: 'bg-[#fff2e1]', iconColor: 'text-[#ff8d42]' },
  { label: 'Out of Stock', value: '12', icon: FiArchive, iconBg: 'bg-[#fff1d8]', iconColor: 'text-[#ef9f1b]' },
]

const dailySales = [
  { label: 'Tue', value: 75, amount: '75k', color: 'bg-[#7a1c73]' },
  { label: 'Wed', value: 64, amount: '64k', color: 'bg-[#7a1c73]' },
  { label: 'Thu', value: 81, amount: '81k', color: 'bg-[#7a1c73]' },
  { label: 'Fri', value: 96, amount: '97k', color: 'bg-[#f4c96f]' },
  { label: 'Sat', value: 100, amount: '92k', color: 'bg-[#f4c96f]' },
  { label: 'Sun', value: 95, amount: '95k', color: 'bg-[#7a1c73]' },
  { label: 'Mon', value: 68, amount: '83k', color: 'bg-[#7a1c73]' },
]

const monthlyRevenue = [
  { label: 'Sep', value: 72, amount: '72L', color: 'bg-[#7a1c73]' },
  { label: 'Oct', value: 74, amount: '74L', color: 'bg-[#7a1c73]' },
  { label: 'Nov', value: 81, amount: '81L', color: 'bg-[#f4c96f]' },
  { label: 'Dec', value: 86, amount: '86L', color: 'bg-[#f4c96f]' },
  { label: 'Jan', value: 78, amount: '78L', color: 'bg-[#7a1c73]' },
  { label: 'Aug', value: 71, amount: '71L', color: 'bg-[#7a1c73]' },
]

const orderTrend = [
  { label: 'W1', value: 824, marker: '#7a1c73' },
  { label: 'W2', value: 956, marker: '#7a1c73' },
  { label: 'W3', value: 1032, marker: '#c55aa0' },
  { label: 'W4', value: 1148, marker: '#f4c96f' },
]

const categorySales = [
  { label: 'Rings', percent: 38, value: 'Rs.9.4L', color: '#7a1c73' },
  { label: 'Necklaces', percent: 26, value: 'Rs.6.4L', color: '#f4c96f' },
  { label: 'Bangles', percent: 20, value: 'Rs.5.0L', color: '#2998ff' },
  { label: 'Earrings', percent: 16, value: 'Rs.4.0L', color: '#11b981' },
]

const topProducts = [
  { rank: 1, name: 'Diamond Solitaire Ring 18K', units: '284 units sold', amount: 'Rs.4,82,400', color: 'bg-[#f6cf74] text-[#8c5b00]' },
  { rank: 2, name: 'Rose Gold Bridal Necklace Set', units: '195 units sold', amount: 'Rs.3,92,000', color: 'bg-[#f2f1f7] text-[#7e7d86]' },
  { rank: 3, name: 'Platinum Diamond Bangle', units: '152 units sold', amount: 'Rs.3,04,000', color: 'bg-[#ffe9bf] text-[#9a6500]' },
  { rank: 4, name: 'Gold Kundan Jhumka Earrings', units: '183 units sold', amount: 'Rs.2,62,200', color: 'bg-[#f4e8ff] text-[#8d52c9]' },
]

const customerGrowth = [
  { label: 'Aug', newCustomers: 52, returning: 88 },
  { label: 'Sep', newCustomers: 47, returning: 84 },
  { label: 'Oct', newCustomers: 63, returning: 99 },
  { label: 'Nov', newCustomers: 79, returning: 112 },
  { label: 'Dec', newCustomers: 58, returning: 94 },
  { label: 'Jan', newCustomers: 41, returning: 72 },
]

const recentOrders = [
  { initials: 'PR', name: 'Priya Rajan', meta: 'ORD-9201 · Diamond Ring', amount: 'Rs.38,500', status: 'Delivered', avatar: 'bg-[#f4e8ff] text-[#7a1c73]', statusClass: 'bg-[#ddf8ea] text-[#1a9e67]' },
  { initials: 'AS', name: 'Arjun Sharma', meta: 'ORD-9198 · Bridal Set', amount: 'Rs.1,24,000', status: 'Processing', avatar: 'bg-[#e6f0ff] text-[#2f73de]', statusClass: 'bg-[#fff3d8] text-[#d08a00]' },
  { initials: 'NK', name: 'Neha Kapoor', meta: 'ORD-9195 · Bangle Set', amount: 'Rs.54,200', status: 'Pending', avatar: 'bg-[#fff0d9] text-[#d38a00]', statusClass: 'bg-[#e8f2ff] text-[#3d83f6]' },
  { initials: 'SM', name: 'Sonal Mehta', meta: 'ORD-9190 · Earrings', amount: 'Rs.18,900', status: 'Cancelled', avatar: 'bg-[#ffe6ea] text-[#ff5d73]', statusClass: 'bg-[#ffe7e3] text-[#ff6a5a]' },
]

const recentCustomers = [
  { initials: 'DS', name: 'Deepa Sinha', meta: 'deepa.sinha@email.com · Mumbai', amount: 'Rs.62,400', avatar: 'bg-[#f4e8ff] text-[#7a1c73]' },
  { initials: 'RV', name: 'Rohit Verma', meta: 'rohit.v@email.com · Delhi', amount: 'Rs.1,18,000', avatar: 'bg-[#fff0d9] text-[#d38a00]' },
  { initials: 'MP', name: 'Meena Pillai', meta: 'meena.p@email.com · Chennai', amount: 'Rs.34,800', avatar: 'bg-[#dffbf0] text-[#0ca46d]' },
  { initials: 'KG', name: 'Kiran Gupta', meta: 'kiran.g@email.com · Bangalore', amount: 'Rs.48,200', avatar: 'bg-[#e7f0ff] text-[#3680ff]' },
]
const inventoryAlerts = [
  { name: 'Rose Gold Ring 18K', note: 'Only 3 units left in stock', tag: 'Low Stock', tagClass: 'bg-[#fff0d9] text-[#d38a00]', iconBg: 'bg-[#fff3dd]', iconColor: 'text-[#ee9a15]' },
  { name: 'Platinum Solitaire Pendant', note: 'Out of stock since Jan 12', tag: 'Out of Stock', tagClass: 'bg-[#ffe8e6] text-[#ff695a]', iconBg: 'bg-[#ffe9ee]', iconColor: 'text-[#ff6f86]' },
  { name: 'Diamond Stud Earrings 14K', note: 'Only 5 units left in stock', tag: 'Low Stock', tagClass: 'bg-[#fff0d9] text-[#d38a00]', iconBg: 'bg-[#fff3dd]', iconColor: 'text-[#ee9a15]' },
  { name: 'Silver Kundan Necklace Set', note: 'Out of stock since Jan 18', tag: 'Out of Stock', tagClass: 'bg-[#ffe8e6] text-[#ff695a]', iconBg: 'bg-[#ffe9ee]', iconColor: 'text-[#ff6f86]' },
]

const reviews = [
  { initials: 'PS', name: 'Priya S.', product: 'Diamond Solitaire Ring 18k', time: '2 hours ago', rating: 4, text: 'Absolutely stunning ring! The craftsmanship is exquisite and delivery was very prompt.', avatar: 'bg-[#f4e8ff] text-[#7a1c73]' },
  { initials: 'RK', name: 'Rahul K.', product: 'Platinum Diamond Bangle', time: '5 hours ago', rating: 4, text: 'Good quality bangles but packaging could be improved. Overall satisfied with the purchase.', avatar: 'bg-[#e7f0ff] text-[#3680ff]' },
]

const recentActivities = [
  { title: 'Order ORD-9201 marked as Delivered', time: '2 minutes ago', icon: FiCheckCircle, iconBg: 'bg-[#dffbf0]', iconColor: 'text-[#0ca46d]' },
  { title: 'New customer Deepa Sinha registered', time: '18 minutes ago', icon: FiUserPlus, iconBg: 'bg-[#e7f0ff]', iconColor: 'text-[#3680ff]' },
  { title: 'Low stock alert triggered for Rose Gold Ring', time: '45 minutes ago', icon: FiAlertTriangle, iconBg: 'bg-[#fff3dd]', iconColor: 'text-[#ee9a15]' },
  { title: 'Coupon GOLD20 created and activated', time: '1 hour ago', icon: FiTag, iconBg: 'bg-[#f4e8ff]', iconColor: 'text-[#8d34c7]' },
  { title: 'Return request RET-221 approved by Admin', time: '3 hours ago', icon: FiCornerUpLeft, iconBg: 'bg-[#ffe9ee]', iconColor: 'text-[#ff6f86]' },
]

const quickActions = [
  {
    title: 'Add Product',
    description: 'Add new jewellery to store',
    button: '+ Add Product',
    icon: FiPlus,
    iconBg: 'bg-[#f4e8ff]',
    iconColor: 'text-[#7a1c73]',
    buttonClass: 'bg-[#7a1c73] hover:bg-[#66145f]',
    to: '/products/add',
  },
  { title: 'Create Order', description: 'Manually create a new order', button: '+ Create Order', icon: FiShoppingBag, iconBg: 'bg-[#e7f0ff]', iconColor: 'text-[#1f74e7]', buttonClass: 'bg-[#1f74e7] hover:bg-[#175ebc]' },
  { title: 'Create Coupon', description: 'Generate discount coupons', button: '+ Create Coupon', icon: FiTag, iconBg: 'bg-[#fff3dd]', iconColor: 'text-[#db6b00]', buttonClass: 'bg-[#d86100] hover:bg-[#b85400]' },
  { title: 'Add Customer', description: 'Register a new customer profile', button: '+ Add Customer', icon: FiUserPlus, iconBg: 'bg-[#dffbf0]', iconColor: 'text-[#0ca46d]', buttonClass: 'bg-[#0ca46d] hover:bg-[#098355]' },
]

function SectionTitle({ children }) {
  return <h2 className='text-[1.05rem] font-bold sm:text-[1.08rem] text-[var(--text-primary)]'>{children}</h2>
}

function SplitSection({ title, children }) {
  return (
    <section className='grid gap-4 2xl:grid-cols-[12.5rem_minmax(0,1fr)] 2xl:items-start'>
      <div className='pt-1'>
        <SectionTitle>{title}</SectionTitle>
      </div>
      <div>{children}</div>
    </section>
  )
}

function MetricCard({ item }) {
  const Icon = item.icon
  const trendClass =
    item.tone === 'negative'
      ? 'text-[#ff6a5a]'
      : item.tone === 'info'
        ? 'text-[#3680ff]'
        : 'text-[#0ca46d]'
  const TrendIcon = item.tone === 'negative' ? FiArrowDownRight : FiArrowUpRight

  return (
    <div className={`${surfaceClass} p-4`}>
      <div className='flex items-start justify-between gap-3'>
        <div>
          <p className='text-[0.88rem] font-bold text-[#8f8692]'>{item.label}</p>
          <p className='mt-3 text-[1.18rem] font-black tracking-[-0.02em] text-[#2d2630] sm:text-[1.26rem]'>
            {item.value}
          </p>
        </div>
        <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${item.iconBg}`}>
          <Icon className={`h-4 w-4 ${item.iconColor}`} />
        </div>
      </div>
      <div className={`mt-3 flex items-center gap-1.5 text-[0.76rem] font-bold ${trendClass}`}>
        <TrendIcon className='h-3.5 w-3.5' />
        <span>{item.trend}</span>
      </div>
    </div>
  )
}

function StatusCard({ item }) {
  const Icon = item.icon

  return (
    <div className={`${surfaceClass} relative overflow-hidden p-4`}>
      <div className='absolute -right-6 top-0 h-20 w-20 rounded-full bg-[#fbf2c8] opacity-55' />
      <div className={`relative flex h-7 w-7 items-center justify-center rounded-lg ${item.iconBg}`}>
        <Icon className={`h-3.5 w-3.5 ${item.iconColor}`} />
      </div>
      <p className='relative mt-3 text-[1.62rem] font-black tracking-[-0.03em] sm:text-[1.72rem] text-[#433743]'>{item.value}</p>
      <p className='relative mt-1 text-[0.82rem] font-medium text-[#a0929d]'>{item.label}</p>
    </div>
  )
}

function ChartCard({ title, subtitle, action, children, legend }) {
  return (
    <div className={`${surfaceClass} p-4`}>
      <div className='flex flex-wrap items-start justify-between gap-3'>
        <div>
          <h3 className='text-[0.98rem] font-bold text-[#2e2531]'>{title}</h3>
          <p className='mt-0.5 text-[0.78rem] font-medium text-[#a295a1]'>{subtitle}</p>
        </div>
        <div className='flex items-center gap-3'>
          {legend}
          {action ? (
            <span className='rounded-full bg-[#f7e8fb] px-3 py-1 text-[0.72rem] font-bold text-[#8c2b79]'>
              {action}
            </span>
          ) : null}
        </div>
      </div>
      <div className='mt-4'>{children}</div>
    </div>
  )
}

function MiniBarChart({ items, maxValue = 100 }) {
  return (
    <div className='rounded-[1.1rem] bg-[#fbf7fa] px-3 py-4'>
      <div className='flex h-36 items-end gap-2'>
        {items.map((item) => (
          <div key={item.label} className='flex flex-1 flex-col items-center gap-2'>
            <span className='text-[0.66rem] font-bold text-[#a2909b]'>{item.amount}</span>
            <div
              className={`w-full rounded-t-[0.45rem] ${item.color}`}
              style={{ height: `${Math.max(28, (item.value / maxValue) * 88)}px` }}
            />
            <span className='text-[0.7rem] font-medium text-[#a998a3]'>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
function getLineChartPoints(data) {
  const left = 34
  const top = 18
  const width = 252
  const height = 92
  const min = Math.min(...data.map((item) => item.value))
  const max = Math.max(...data.map((item) => item.value))

  return data.map((item, index) => {
    const x = left + (width / (data.length - 1)) * index
    const y = top + height - ((item.value - min) / (max - min || 1)) * (height - 10)
    return { ...item, x, y }
  })
}

function OrderTrendChart() {
  const points = getLineChartPoints(orderTrend)
  const polyline = points.map((point) => `${point.x},${point.y}`).join(' ')

  return (
    <div className='rounded-[1.1rem] bg-[#fbf7fa] p-3'>
      <svg viewBox='0 0 320 160' className='h-40 w-full'>
        {[18, 48, 78, 108].map((y) => (
          <line key={y} x1='34' y1={y} x2='294' y2={y} stroke='#eee3ea' strokeWidth='1' />
        ))}
        {['300', '200', '100', '0'].map((label, index) => (
          <text key={label} x='4' y={22 + index * 30} fill='#b5a8b2' fontSize='10'>
            {label}
          </text>
        ))}
        <polyline fill='none' stroke='#9d3b8e' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' points={polyline} />
        {points.map((point) => (
          <g key={point.label}>
            <circle cx={point.x} cy={point.y} r='5' fill={point.marker} />
            <text x={point.x} y='134' textAnchor='middle' fill='#b0a0aa' fontSize='10'>
              {point.label}
            </text>
            <text x={point.x} y='151' textAnchor='middle' fill='#5f4c58' fontSize='10' fontWeight='700'>
              {point.value.toLocaleString()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

function CategorySalesCard() {
  const gradientStops = []
  let current = 0
  categorySales.forEach((item) => {
    const next = current + item.percent
    gradientStops.push(`${item.color} ${current}% ${next}%`)
    current = next
  })

  return (
    <div className={`${surfaceClass} p-4`}>
      <div>
        <h3 className='text-[0.98rem] font-bold text-[#2e2531]'>Category Wise Sales</h3>
        <p className='mt-0.5 text-[0.78rem] font-medium text-[#a295a1]'>Revenue split by product category</p>
      </div>

      <div className='mt-4 flex flex-col gap-5 lg:flex-row lg:items-center'>
        <div className='flex justify-center lg:w-[48%]'>
          <div
            className='relative flex h-36 w-36 items-center justify-center rounded-full'
            style={{ background: `conic-gradient(${gradientStops.join(', ')})` }}
          >
            <div className='flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]'>
              <span className='text-[0.96rem] font-black text-[#2f2530]'>Rs.24.8L</span>
              <span className='mt-0.5 text-[0.68rem] font-medium text-[#aa9ca5]'>Total</span>
            </div>
          </div>
        </div>

        <div className='space-y-3 lg:w-[52%]'>
          {categorySales.map((item) => (
            <div key={item.label} className='space-y-1'>
              <div className='flex items-center justify-between gap-3 text-[0.8rem] font-bold text-[#4c3d47]'>
                <span>{item.label}</span>
                <span className='text-[#8c2b79]'>
                  {item.percent}% <span className='text-[#c7b4be]'>-</span> {item.value}
                </span>
              </div>
              <div className='h-1.5 rounded-full bg-[#f4edf1]'>
                <div className='h-1.5 rounded-full' style={{ width: `${item.percent}%`, backgroundColor: item.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TopSellingProductsCard() {
  return (
    <div className={`${surfaceClass} p-4`}>
      <div className='flex items-center justify-between gap-3'>
        <h3 className='text-[0.98rem] font-bold text-[#2e2531]'>Top Selling Products</h3>
        <button className='flex items-center gap-1 text-[0.76rem] font-bold text-[#8c2b79]'>
          View All
          <FiChevronRight className='h-3.5 w-3.5' />
        </button>
      </div>

      <div className='mt-4 space-y-4'>
        {topProducts.map((item) => (
          <div key={item.rank} className='flex items-center gap-3'>
            <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.72rem] font-bold ${item.color}`}>
              {item.rank}
            </div>
            <div className='min-w-0 flex-1'>
              <p className='truncate text-[0.88rem] font-bold text-[#382d39]'>{item.name}</p>
              <p className='mt-0.5 text-[0.76rem] font-medium text-[#aa9ca5]'>{item.units}</p>
            </div>
            <div className='text-right text-[0.88rem] font-bold text-[#342534]'>{item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CustomerGrowthCard() {
  const maxValue = Math.max(...customerGrowth.flatMap((item) => [item.newCustomers, item.returning]))

  return (
    <div className={`${surfaceClass} p-4`}>
      <div className='flex items-start justify-between gap-3'>
        <div>
          <h3 className='text-[0.98rem] font-bold text-[#2e2531]'>Customer Growth</h3>
          <p className='mt-0.5 text-[0.78rem] font-medium text-[#a295a1]'>New vs returning customers per month</p>
        </div>
        <span className='rounded-full bg-[#dcfbef] px-3 py-1 text-[0.72rem] font-bold text-[#0ca46d]'>
          +5.1% growth
        </span>
      </div>

      <div className='mt-4 grid grid-cols-3 gap-3'>
        <div>
          <p className='text-[1.58rem] font-black tracking-[-0.03em] sm:text-[1.7rem] text-[#7a1c73]'>2,841</p>
          <p className='text-[0.78rem] font-medium text-[#a295a1]'>New Customers</p>
        </div>
        <div>
          <p className='text-[1.58rem] font-black tracking-[-0.03em] sm:text-[1.7rem] text-[#f0b542]'>9,609</p>
          <p className='text-[0.78rem] font-medium text-[#a295a1]'>Returning</p>
        </div>
        <div>
          <p className='text-[1.58rem] font-black tracking-[-0.03em] sm:text-[1.7rem] text-[#0ca46d]'>77.2%</p>
          <p className='text-[0.78rem] font-medium text-[#a295a1]'>Retention Rate</p>
        </div>
      </div>

      <div className='mt-4 rounded-[1.1rem] bg-[#fbf7fa] px-3 py-4'>
        <div className='flex h-40 items-end gap-3'>
          {customerGrowth.map((item) => (
            <div key={item.label} className='flex flex-1 items-end justify-center gap-1.5'>
              <div className='w-4 rounded-t-[0.35rem] bg-[#7a1c73]' style={{ height: `${Math.max(20, (item.newCustomers / maxValue) * 108)}px` }} />
              <div className='w-4 rounded-t-[0.35rem] bg-[#f4c96f]' style={{ height: `${Math.max(24, (item.returning / maxValue) * 108)}px` }} />
            </div>
          ))}
        </div>
        <div className='mt-3 flex justify-between px-1 text-[0.7rem] font-medium text-[#aa9ca5]'>
          {customerGrowth.map((item) => (
            <span key={item.label}>{item.label}</span>
          ))}
        </div>
      </div>

      <div className='mt-4 flex flex-wrap items-center justify-center gap-4 text-[0.74rem] font-medium text-[#8d7f8b]'>
        <span className='flex items-center gap-1.5'>
          <span className='h-2 w-2 rounded-full bg-[#7a1c73]' />
          New Customers
        </span>
        <span className='flex items-center gap-1.5'>
          <span className='h-2 w-2 rounded-full bg-[#f4c96f]' />
          Returning Customers
        </span>
      </div>
    </div>
  )
}
function RecentOrdersCard() {
  return (
    <div className={`${surfaceClass} p-4`}>
      <div className='flex items-center justify-between gap-3'>
        <h3 className='text-[0.98rem] font-bold text-[#2e2531]'>Recent Orders</h3>
        <button className='flex items-center gap-1 text-[0.76rem] font-bold text-[#8c2b79]'>
          View All
          <FiChevronRight className='h-3.5 w-3.5' />
        </button>
      </div>

      <div className='mt-4 space-y-4'>
        {recentOrders.map((item) => (
          <div key={item.meta} className='flex items-start gap-3'>
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[0.62rem] font-bold ${item.avatar}`}>
              {item.initials}
            </div>
            <div className='min-w-0 flex-1'>
              <div className='flex flex-wrap items-center justify-between gap-2'>
                <p className='text-[0.88rem] font-bold text-[#382d39]'>{item.name}</p>
                <p className='text-[0.8rem] font-bold text-[#382d39]'>{item.amount}</p>
              </div>
              <div className='mt-0.5 flex flex-wrap items-center justify-between gap-2'>
                <p className='text-[0.76rem] font-medium text-[#aa9ca5]'>{item.meta}</p>
                <span className={`rounded-full px-2 py-0.5 text-[0.62rem] font-semibold ${item.statusClass}`}>
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RecentCustomersCard() {
  return (
    <div className={`${surfaceClass} p-4`}>
      <div className='flex items-center justify-between gap-3'>
        <h3 className='text-[0.98rem] font-bold text-[#2e2531]'>Recent Customers</h3>
        <button className='flex items-center gap-1 text-[0.76rem] font-bold text-[#8c2b79]'>
          View All
          <FiChevronRight className='h-3.5 w-3.5' />
        </button>
      </div>

      <div className='mt-4 space-y-4'>
        {recentCustomers.map((item) => (
          <div key={item.meta} className='flex items-start gap-3'>
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[0.62rem] font-bold ${item.avatar}`}>
              {item.initials}
            </div>
            <div className='min-w-0 flex-1'>
              <div className='flex flex-wrap items-center justify-between gap-2'>
                <p className='text-[0.88rem] font-bold text-[#382d39]'>{item.name}</p>
                <p className='text-[0.8rem] font-bold text-[#8c2b79]'>{item.amount}</p>
              </div>
              <div className='mt-0.5 flex flex-wrap items-center justify-between gap-2'>
                <p className='truncate text-[0.76rem] font-medium text-[#aa9ca5]'>{item.meta}</p>
                <span className='text-[0.64rem] text-[#b9adb6]'>Lifetime value</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function InventoryCard() {
  return (
    <div className={`${surfaceClass} p-4`}>
      <div className='flex flex-wrap items-center gap-2'>
        <h3 className='text-[0.98rem] font-bold text-[#2e2531]'>Inventory</h3>
        <span className='rounded-full bg-[#ffe8e6] px-2.5 py-0.5 text-[0.62rem] font-semibold text-[#ff695a]'>
          68 items need attention
        </span>
      </div>

      <div className='mt-4 space-y-4'>
        {inventoryAlerts.map((item) => (
          <div key={item.name} className='flex items-start gap-3'>
            <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}>
              <FiAlertTriangle className={`h-4 w-4 ${item.iconColor}`} />
            </div>
            <div className='min-w-0 flex-1'>
              <div className='flex flex-wrap items-center justify-between gap-2'>
                <p className='text-[0.88rem] font-bold leading-5 text-[#382d39]'>{item.name}</p>
                <span className={`rounded-full px-2 py-0.5 text-[0.66rem] font-bold ${item.tagClass}`}>
                  {item.tag}
                </span>
              </div>
              <p className='mt-1 text-[0.74rem] font-medium text-[#aa9ca5]'>{item.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LatestReviewsCard() {
  return (
    <div className={`${surfaceClass} p-4`}>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <h3 className='text-[0.98rem] font-bold text-[#2e2531]'>Latest Reviews</h3>
        <div className='flex items-center gap-1 text-[0.68rem] text-[#a295a1]'>
          <div className='flex items-center gap-0.5 text-[#f4c96f]'>
            {Array.from({ length: 4 }).map((_, index) => (
              <FaStar key={index} className='h-2.5 w-2.5' />
            ))}
            <FaRegStar className='h-2.5 w-2.5' />
          </div>
          <span>4.2 avg</span>
        </div>
      </div>

      <div className='mt-4 space-y-4'>
        {reviews.map((item) => (
          <div key={item.name} className='rounded-[1rem] bg-[#fcf8fb] p-3'>
            <div className='flex items-center gap-2'>
              <div className={`flex h-6 w-6 items-center justify-center rounded-full text-[0.58rem] font-bold ${item.avatar}`}>
                {item.initials}
              </div>
              <div className='min-w-0 flex-1'>
                <p className='text-[0.82rem] font-bold text-[#382d39]'>{item.name}</p>
              </div>
              <div className='flex items-center gap-0.5 text-[#f4c96f]'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className={`h-2.5 w-2.5 ${index < item.rating ? '' : 'opacity-25'}`} />
                ))}
              </div>
            </div>
            <p className='mt-3 text-[0.78rem] font-medium leading-5 text-[#5a4c57]'>{item.text}</p>
            <p className='mt-3 text-[0.72rem] font-medium text-[#b2a4ae]'>
              {item.time} · {item.product}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function RecentActivitiesCard() {
  return (
    <div className={`${surfaceClass} p-4`}>
      <div className='flex items-center justify-between gap-3'>
        <h3 className='text-[0.98rem] font-bold text-[#2e2531]'>Recent Activities</h3>
        <span className='text-[0.68rem] text-[#b2a4ae]'>Today</span>
      </div>

      <div className='mt-4 space-y-4'>
        {recentActivities.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.title} className='flex items-start gap-3'>
              <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}>
                <Icon className={`h-4 w-4 ${item.iconColor}`} />
              </div>
              <div>
                <p className='text-[0.84rem] font-bold leading-5 text-[#382d39]'>{item.title}</p>
                <p className='mt-0.5 text-[0.72rem] font-medium text-[#b2a4ae]'>{item.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function QuickActionCard({ item }) {
  const navigate = useNavigate()
  const Icon = item.icon

  return (
    <div className={`${surfaceClass} p-4 text-center`}>
      <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl ${item.iconBg}`}>
        <Icon className={`h-5 w-5 ${item.iconColor}`} />
      </div>
      <h3 className='mt-4 text-[0.95rem] font-bold text-[#2e2531]'>{item.title}</h3>
      <p className='mt-2 text-[0.78rem] font-medium text-[#a295a1]'>{item.description}</p>
      <button
        type='button'
        onClick={() => item.to && navigate(item.to)}
        className={`mt-4 w-full rounded-xl px-4 py-2.5 text-[0.86rem] font-bold text-white transition cursor-pointer ${item.buttonClass}`}
      >
        {item.button}
      </button>
    </div>
  )
}
function DashboardPage() {
  return (
    <PageLayout
      title='Dashboard Overview'
      description='Track your store performance at a glance'
      actions={
        <>
          <button className='inline-flex items-center gap-2 rounded-xl border border-[#eadce4] bg-white px-4 py-2 text-[0.96rem] font-semibold text-[#5f5060] shadow-sm transition hover:border-[#d6bfd0] hover:bg-[#fcf8fb]'>
            <FiCalendar className='h-4 w-4 text-[#8c2b79]' />
            Last 30 Days
            <FiChevronDown className='h-4 w-4 text-[#a896a2]' />
          </button>

          <button className='inline-flex items-center gap-2 rounded-xl border border-[#eadce4] bg-white px-4 py-2 text-[0.96rem] font-bold text-[#8c2b79] shadow-sm transition hover:border-[#d6bfd0] hover:bg-[#fcf8fb]'>
            <FiDownload className='h-4 w-4' />
            Export
          </button>
        </>
      }
    >
      <div className='space-y-6'>
        <section className='space-y-3'>
          <SectionTitle>Key Metrics</SectionTitle>
          <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5'>
            {keyMetrics.map((item) => (
              <MetricCard key={item.label} item={item} />
            ))}
          </div>
        </section>

        <section className='space-y-3'>
          <SectionTitle>Order Status Overview</SectionTitle>
          <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7'>
            {orderStatuses.map((item) => (
              <StatusCard key={item.label} item={item} />
            ))}
          </div>
        </section>

        <SplitSection title='Sales Analytics'>
          <div className='grid gap-4 lg:grid-cols-2'>
            <ChartCard title='Daily Sales' subtitle='Revenue for each day this week' action='This Week'>
              <MiniBarChart items={dailySales} />
            </ChartCard>

            <ChartCard
              title='Monthly Revenue'
              subtitle='Revenue trend over 6 months'
              legend={
                <div className='flex items-center gap-3 text-[0.66rem] text-[#9d8f99]'>
                  <span className='flex items-center gap-1.5'>
                    <span className='h-2 w-2 rounded-full bg-[#7a1c73]' />
                    Revenue
                  </span>
                  <span className='flex items-center gap-1.5'>
                    <span className='h-2 w-2 rounded-full bg-[#f4c96f]' />
                    Target
                  </span>
                </div>
              }
            >
              <MiniBarChart items={monthlyRevenue} maxValue={90} />
            </ChartCard>
          </div>
        </SplitSection>

        <SplitSection title='Orders & Category Insights'>
          <div className='grid gap-4 lg:grid-cols-2'>
            <ChartCard title='Orders Trend' subtitle='Daily order volume over 4 weeks' action='+8.5% up'>
              <OrderTrendChart />
            </ChartCard>
            <CategorySalesCard />
          </div>
        </SplitSection>

        <SplitSection title='Products & Customer Growth'>
          <div className='grid gap-4 lg:grid-cols-2'>
            <TopSellingProductsCard />
            <CustomerGrowthCard />
          </div>
        </SplitSection>

        <SplitSection title='Recent Activity & Alerts'>
          <div className='grid gap-4 lg:grid-cols-2'>
            <RecentOrdersCard />
            <RecentCustomersCard />
          </div>
        </SplitSection>

        <SplitSection title='Inventory Alerts & Reviews'>
          <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
            <InventoryCard />
            <LatestReviewsCard />
            <RecentActivitiesCard />
          </div>
        </SplitSection>

        <SplitSection title='Quick Actions'>
          <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
            {quickActions.map((item) => (
              <QuickActionCard key={item.title} item={item} />
            ))}
          </div>
        </SplitSection>
      </div>
    </PageLayout>
  )
}

export default DashboardPage



import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaBell, FaRegStar } from 'react-icons/fa'
import { FiAlertTriangle, FiRefreshCcw, FiShoppingCart, FiTrendingUp, FiX } from 'react-icons/fi'
import { IoMoonSharp } from 'react-icons/io5'
import AppIcon from './AppIcon'

const initialNotifications = [
  {
    id: 1,
    title: 'New order #ORD-8821 received',
    time: '2m ago',
    icon: FiShoppingCart,
    iconColor: '#76656f',
    iconBg: '#f4edf1',
    unread: true,
    highlighted: true,
  },
  {
    id: 2,
    title: 'Low stock alert: Rose Gold Ring 18k',
    time: '15m ago',
    icon: FiAlertTriangle,
    iconColor: '#b7870d',
    iconBg: '#fbf3df',
    unread: true,
    highlighted: true,
  },
  {
    id: 3,
    title: 'Customer Priya S. left a 5-star review',
    time: '1h ago',
    icon: FaRegStar,
    iconColor: '#f2a11f',
    iconBg: '#fdf1e6',
    unread: false,
    highlighted: false,
  },
  {
    id: 4,
    title: 'Gold rate updated: Rs. 6,842/g',
    time: '2h ago',
    icon: FiTrendingUp,
    iconColor: '#6c8ea2',
    iconBg: '#edf4f8',
    unread: false,
    highlighted: false,
  },
  {
    id: 5,
    title: 'Return request #RET-221 approved',
    time: '3h ago',
    icon: FiRefreshCcw,
    iconColor: '#6d91a4',
    iconBg: '#edf4f8',
    unread: false,
    highlighted: false,
  },
]

function IconButton({ badge, className = '', children, ...props }) {
  return (
    <button
      className={`relative flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--panel-border)] bg-white text-[var(--text-muted)] shadow-sm transition hover:border-[var(--brand-300)] hover:text-[var(--brand-700)] ${className}`}
      {...props}
    >
      {children}
      {badge ? (
        <span className='absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--danger)] px-1 text-[0.6rem] font-bold text-white'>
          {badge}
        </span>
      ) : null}
    </button>
  )
}

function NotificationItem({ title, time, icon: Icon, iconColor, iconBg, unread, highlighted }) {
  return (
    <button
      type='button'
      className={`flex w-full items-start gap-2.5 px-3 py-2.5 text-left transition sm:px-3.5 ${
        highlighted ? 'bg-[#fbf2f8] hover:bg-[#f8ebf4]' : 'bg-white hover:bg-[#faf6f8]'
      }`}
    >
      <div
        className='mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full'
        style={{ backgroundColor: iconBg, color: iconColor }}
      >
        <Icon className='h-3.5 w-3.5' />
      </div>

      <div className='min-w-0 flex-1'>
        <p className='text-[0.84rem] leading-[1.15rem] text-[#31252f] sm:text-[0.9rem] sm:leading-[1.2rem]'>{title}</p>
        <p className='mt-0.5 text-[0.72rem] text-[#a99ba3] sm:text-[0.78rem]'>{time}</p>
      </div>

      <span
        className={`mt-1 h-2 w-2 shrink-0 rounded-full ${unread ? 'bg-[#8c2b79]' : 'bg-transparent'}`}
      />
    </button>
  )
}

function AdminHeader({ onMenuClick }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false)
  const [notifications, setNotifications] = useState(initialNotifications)
  const profileMenuRef = useRef(null)
  const notificationMenuRef = useRef(null)

  const unreadCount = notifications.filter((notification) => notification.unread).length

  useEffect(() => {
    function handlePointerDown(event) {
      if (!profileMenuRef.current?.contains(event.target)) {
        setIsProfileOpen(false)
      }

      if (!notificationMenuRef.current?.contains(event.target)) {
        setIsNotificationOpen(false)
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsProfileOpen(false)
        setIsNotificationOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  function handleNotificationToggle() {
    setIsNotificationOpen((current) => !current)
    setIsProfileOpen(false)
  }

  function handleProfileToggle() {
    setIsProfileOpen((current) => !current)
    setIsNotificationOpen(false)
  }

  function handleMarkAllRead() {
    setNotifications((current) => current.map((item) => ({ ...item, unread: false, highlighted: false })))
  }

  function handleLogoutClick() {
    setIsProfileOpen(false)
    setIsLogoutConfirmOpen(true)
  }

  function handleLogoutCancel() {
    setIsLogoutConfirmOpen(false)
  }

  function handleLogoutConfirm() {
    setIsLogoutConfirmOpen(false)
    console.log('Logout confirmed')
  }

  const logoutModal = isLogoutConfirmOpen && typeof document !== 'undefined' ? createPortal(
    <div className='fixed inset-0 z-[99999] flex items-center justify-center bg-black/40 px-4 py-8 backdrop-blur-sm'>
      <div className='relative w-full max-w-[30rem] overflow-hidden rounded-[2.5rem] bg-white px-8 py-8 shadow-[0_24px_80px_rgba(45,16,71,0.18)]'>
        <button
          type='button'
          onClick={handleLogoutCancel}
          className='absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#ece1ef] bg-white text-[#5f4b6a] transition hover:bg-[#f8f0fb] hover:text-[#3a2543]'
          aria-label='Close logout dialog'
        >
          <FiX className='h-4 w-4 cursor-pointer' />
        </button>

        <div className='space-y-4 text-center'>
          <h2 className='text-[1.3rem] font-semibold text-[#2f2430]'>Confirm logout</h2>
          <p className='mx-auto max-w-[21rem] text-sm leading-6 text-[#6d5862]'>Are you sure you want to log out? Your session will be closed.</p>
        </div>

        <div className='mt-8 flex flex-col gap-3 sm:flex-row justify-between'>
          <button
            type='button'
            onClick={handleLogoutCancel}
            className='min-w-[9rem] rounded-full border border-[#e9d7ef] bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-700)] transition hover:border-[#d2b1d8] hover:bg-[#faf0ff] cursor-pointer'
          >
            Cancel
          </button>
          <button
            type='button'
            onClick={handleLogoutConfirm}
            className='min-w-[9rem] rounded-full bg-[var(--brand-600)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(113,22,103,0.18)] transition hover:bg-[var(--brand-700)] cursor-pointer'
          >
            Logout
          </button>
        </div>
      </div>
    </div>,
    document.body,
  ) : null

  return (
    <header className='sticky top-0 z-20 border-b border-white/70 bg-white/86 backdrop-blur-xl'>
      <div className='flex flex-wrap items-center gap-3 px-4 py-3 sm:px-6 lg:px-8'>
        <button
          type='button'
          onClick={onMenuClick}
          className='flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--panel-border)] bg-white text-[var(--brand-700)] shadow-sm transition hover:border-[var(--brand-300)] lg:hidden'
          aria-label='Open sidebar'
        >
          <AppIcon name='menu' className='h-4 w-4' />
        </button>

        <div className='order-3 w-full sm:order-none sm:min-w-[16rem] sm:flex-1'>
          <label className='flex h-10 items-center gap-2 rounded-xl border border-[var(--panel-border)] bg-[#fbf8fa] px-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]'>
            <AppIcon name='search' className='h-4 w-4 text-[var(--text-muted)]' />
            <input
              type='text'
              placeholder='Search products, orders, customers...'
              className='w-full border-none bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]'
            />
          </label>
        </div>

        <div className='ml-auto flex items-center gap-2 sm:gap-3'>
          <div className='hidden rounded-xl border border-[#f4d599] bg-[var(--gold-bg)] px-3 py-1.5 text-sm font-semibold text-[var(--gold-text)] shadow-sm sm:block'>
            Gold: Rs. 6,842/g
          </div>

          <IconButton aria-label='Toggle theme' className='cursor-pointer'>
            <IoMoonSharp className='h-4 w-4' />
          </IconButton>

          <div className='relative' ref={notificationMenuRef}>
            <IconButton
              aria-label='Open notifications'
              aria-expanded={isNotificationOpen}
              badge={unreadCount || null}
              onClick={handleNotificationToggle}
              className={`cursor-pointer ${isNotificationOpen ? 'border-[#eadde4] text-[var(--brand-700)]' : ''}`}
            >
              <FaBell className='h-4 w-4' />
            </IconButton>

            {isNotificationOpen ? (
              <div className='fixed right-2 top-[4.15rem] z-30 w-[min(18rem,calc(100vw-1rem))] overflow-hidden rounded-[1.1rem] border border-[#eee4e8] bg-white shadow-[0_20px_42px_rgba(58,35,45,0.18)] sm:absolute sm:right-0 sm:top-[calc(100%+0.65rem)] sm:w-[19rem] sm:rounded-[1.2rem]'>
                <div className='flex items-center justify-end gap-3 border-b border-[#f0e6ea] px-3 py-2.5 sm:justify-between sm:px-3.5 sm:py-3'>
                  <h3 className='hidden text-[0.98rem] font-semibold text-[#2f2430] sm:block'>Notifications</h3>
                  <button
                    type='button'
                    onClick={handleMarkAllRead}
                    disabled={!unreadCount}
                    className='shrink-0 text-[0.76rem] font-semibold text-[#8c2b79] transition hover:text-[#6f1e60] disabled:cursor-default disabled:text-[#c8b7c1] sm:text-[0.8rem]'
                  >
                    Mark all read
                  </button>
                </div>

                <div className='notification-scroll max-h-[min(18rem,calc(100vh-5.25rem))] overflow-y-auto sm:max-h-[20rem]'>
                  {notifications.map((notification, index) => (
                    <div
                      key={notification.id}
                      className={index === notifications.length - 1 ? '' : 'border-b border-[#f3ebef]'}
                    >
                      <NotificationItem {...notification} />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className='relative' ref={profileMenuRef}>
            <button
              type='button'
              onClick={handleProfileToggle}
              className={`flex min-h-10 items-center gap-3 rounded-xl border px-3.5 py-1.5 shadow-sm transition cursor-pointer ${
                isProfileOpen
                  ? 'border-[#eadde4] bg-white'
                  : 'border-[#ece1e7] bg-[#f8f3f6] hover:border-[#d9becd]'
              }`}
              aria-haspopup='menu'
              aria-expanded={isProfileOpen}
            >
              <div className='flex h-7 w-7 items-center justify-center rounded-full bg-[#f2cf7d] text-[0.72rem] font-bold text-[#7d5805]'>
                A
              </div>
              <span className='text-sm font-semibold text-[var(--text-primary)]'>Admin</span>
              <span
                className={`ml-1 text-[#7f7179] transition ${isProfileOpen ? 'rotate-180' : ''}`}
              >
                <AppIcon name='chevron' className='h-4 w-4' />
              </span>
            </button>

            {isProfileOpen ? (
              <div className='absolute right-0 top-[calc(100%+0.5rem)] z-30 w-[15rem] overflow-hidden rounded-2xl border border-[#eee4e8] bg-white shadow-[0_20px_42px_rgba(58,35,45,0.18)] cursor-pointer'>
                <div className='border-b border-[#f0e6ea] px-4 py-3.5'>
                  <p className='text-[0.98rem] font-semibold text-[#2f2430]'>Admin</p>
                  <p className='text-sm text-[#ab9ca4]'>Super Admin</p>
                </div>

                <div className='py-1.5 cursor-pointer'>
                  <button
                    type='button'
                    className='flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[0.97rem] text-[#5c4b54] transition-colors duration-150 cursor-pointer hover:bg-[#faf6f8] hover:text-[var(--brand-700)]'
                  >
                    <AppIcon name='profile' className='h-4 w-4 text-[#5d97bf]' />
                    <span>My Profile</span>
                  </button>

                  <button
                    type='button'
                    className='flex w-full items-center gap-2.5 border-t cursor-pointer border-[#f2eaed] px-4 py-2.5 text-left text-[0.97rem] text-[#5c4b54] transition-colors duration-150 hover:bg-[#faf6f8] hover:text-[var(--brand-700)]'
                  >
                    <AppIcon name='settings' className='h-4 w-4 text-[#7f7a7d]' />
                    <span>Settings</span>
                  </button>

                  <button
                    type='button'
                    onClick={handleLogoutClick}
                    className='flex w-full items-center gap-2.5 cursor-pointer border-t border-[#f2eaed] px-4 py-2.5 text-left text-[0.97rem] text-[#5c4b54] transition-colors duration-150 hover:bg-[#faf6f8] hover:text-[var(--brand-700)]'
                  >
                    <AppIcon name='logout' className='h-4 w-4' />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {logoutModal}
    </header>
  )
}

export default AdminHeader

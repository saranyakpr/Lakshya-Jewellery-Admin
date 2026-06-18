import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { TiArrowSortedDown } from 'react-icons/ti'
import AppIcon from './AppIcon'
import { sidebarSections } from '../data/sidebarMenu'

function SidebarItem({ item, isExpanded, onToggle, pathname, onNavigate }) {
  const hasChildren = item.children?.length > 0
  const isAnyChildActive = Boolean(
    item.children?.some(
      (child) => child.path && (pathname === child.path || pathname.startsWith(`${child.path}/`)),
    ),
  )
  const isRouteActive = Boolean(
    item.path && (pathname === item.path || pathname.startsWith(`${item.path}/`)),
  )
  const isActuallyExpanded = hasChildren && (isExpanded || isAnyChildActive)
  const isHighlighted = isRouteActive || isAnyChildActive || isActuallyExpanded
  const itemClassName = `flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[0.97rem] font-medium transition ${
    isHighlighted
      ? 'text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
      : 'text-white/92'
  }`
  const standaloneItemClassName = `${itemClassName} ${
    isHighlighted ? 'bg-white/14' : 'hover:bg-white/9'
  }`

  const itemContent = (
    <>
      <span className='flex h-5 w-5 items-center justify-center text-[0.8rem] text-white/90'>
        <AppIcon name={item.icon} className='h-4 w-4' />
      </span>
      <span className='flex-1'>{item.label}</span>
      {item.badge ? (
        <span className='rounded-full bg-[#f5d166] px-1.5 py-0.5 text-[0.625rem] font-bold text-[#633607]'>
          {item.badge}
        </span>
      ) : null}
    </>
  )

  return (
    <div className='space-y-1'>
      {hasChildren ? (
        <div
          className={`flex items-center gap-1 rounded-xl pr-2 transition cursor-pointer ${
            isHighlighted
              ? 'bg-white/14 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
              : 'hover:bg-white/9'
          }`}
        >
          <button
            type='button'
            onClick={() => onToggle(item.label)}
            className={`min-w-0 flex-1 ${itemClassName} cursor-pointer ${
              isHighlighted ? 'bg-transparent shadow-none' : ''
            }`}
          >
            {itemContent}
          </button>

          <button
            type='button'
            aria-label={`Toggle ${item.label} submenu`}
            onClick={() => onToggle(item.label)}
            className='flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition hover:text-white cursor-pointer'
          >
            <span className={`transition ${isActuallyExpanded ? 'rotate-180 text-white' : ''}`}>
              <TiArrowSortedDown className='h-4 w-4' />
            </span>
          </button>
        </div>
      ) : item.path ? (
        <NavLink to={item.path} onClick={onNavigate} className={standaloneItemClassName}>
          {itemContent}
        </NavLink>
      ) : (
        <button type='button' className={standaloneItemClassName}>
          {itemContent}
        </button>
      )}

      {hasChildren && isActuallyExpanded ? (
        <div className='space-y-1 pl-10 pr-2 pb-1'>
          {item.children.map((child) => (
            <NavLink
              to={child.path}
              onClick={onNavigate}
              key={child.label}
              className={({ isActive }) =>
                `block w-full rounded-lg px-2 py-1.5 text-left text-[0.9rem] transition ${
                  isActive ? 'bg-white/10 text-white' : 'text-white/72 hover:text-white'
                }`
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function AdminSidebar({ isOpen, onClose }) {
  const location = useLocation()
  const [expandedMenus, setExpandedMenus] = useState(() =>
    Object.fromEntries(
      sidebarSections
        .flatMap((section) => section.items)
        .filter((item) => item.children?.length)
        .map((item) => [item.label, Boolean(item.expanded)]),
    ),
  )

  function handleToggle(label) {
    setExpandedMenus((current) => {
      const nextValue = !current[label]

      return Object.fromEntries(
        Object.keys(current).map((key) => [key, key === label ? nextValue : false]),
      )
    })
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-[#2d0d2b]/45 backdrop-blur-[2px] transition duration-300 lg:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[16.25rem] flex-col overflow-hidden border-r border-white/8 bg-[linear-gradient(180deg,var(--sidebar-top)_0%,var(--sidebar-bottom)_100%)] text-white shadow-[18px_0_40px_rgba(71,8,65,0.22)] transition duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='sticky top-0 z-10 border-b border-white/10 bg-[#60195E] px-4 py-4'>
          <div className='flex items-center gap-3'>
            <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white/13 text-sm font-black'>
              L
            </div>
            <div>
              <p className='text-[1rem] font-bold tracking-[-0.02em]'>Lakshya</p>
              <p className='text-[0.6rem] uppercase tracking-[0.24em] text-white/60'>
                Admin Panel
              </p>
            </div>
          </div>
        </div>

        <div className='sidebar-scrollbar flex-1 space-y-5 overflow-y-auto px-3 py-4'>
          {sidebarSections.map((section) => (
            <div key={section.id} className='space-y-2'>
              {section.title ? (
                <p className='px-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/42'>
                  {section.title}
                </p>
              ) : null}

              <div className='space-y-1'>
                {section.items.map((item) => (
                  <SidebarItem
                    key={item.label}
                    item={item}
                    isExpanded={Boolean(expandedMenus[item.label])}
                    onToggle={handleToggle}
                    pathname={location.pathname}
                    onNavigate={onClose}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='border-t border-white/10 px-4 py-4'>
          <div className='flex items-center gap-3 rounded-2xl bg-white/6 px-3 py-2.5'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-[#f5d166] text-xs font-bold text-[#5d3700]'>
              A
            </div>
            <div className='min-w-0 flex-1'>
              <p className='truncate text-sm font-semibold'>Admin</p>
              <p className='truncate text-[0.68rem] text-white/58'>Super Admin</p>
            </div>
            <button
              type='button'
              aria-label='Close sidebar'
              onClick={onClose}
              className='rounded-full p-1 text-white/60 transition hover:bg-white/10 hover:text-white lg:hidden'
            >
              <AppIcon name='chevron' className='h-4 w-4 rotate-90' />
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default AdminSidebar

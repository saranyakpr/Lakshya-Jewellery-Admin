const iconPaths = {
  dashboard: (
    <>
      <rect x='3' y='3' width='7' height='7' rx='1.5' />
      <rect x='12' y='3' width='7' height='11' rx='1.5' />
      <rect x='3' y='12' width='7' height='9' rx='1.5' />
      <rect x='12' y='16' width='7' height='5' rx='1.5' />
    </>
  ),
  products: (
    <>
      <path d='M4.5 8.5 12 4l7.5 4.5-7.5 4.5-7.5-4.5Z' />
      <path d='M4.5 8.5V16L12 20l7.5-4V8.5' />
    </>
  ),
  inventory: (
    <>
      <path d='M12 4.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Z' />
      <path d='m16.25 15.5 3.25 3.25' />
    </>
  ),
  orders: (
    <>
      <path d='M4 6.5h2.3l1.2 8h8.9l1.4-5.5H7.8' />
      <circle cx='9.25' cy='18.25' r='1.25' fill='currentColor' stroke='none' />
      <circle cx='16.25' cy='18.25' r='1.25' fill='currentColor' stroke='none' />
    </>
  ),
  customers: (
    <>
      <circle cx='8' cy='9' r='2.25' />
      <circle cx='16' cy='10' r='2' />
      <path d='M4.5 18c.8-2.1 2.6-3.25 5-3.25s4.2 1.15 5 3.25' />
      <path d='M13.5 18c.55-1.55 1.85-2.4 3.75-2.4 1.35 0 2.4.45 3.15 1.35' />
    </>
  ),
  business: (
    <>
      <path d='m12 3.8 1.8 4.55 4.9.35-3.8 3.1 1.25 4.7L12 14.1 7.85 16.5l1.25-4.7-3.8-3.1 4.9-.35L12 3.8Z' />
    </>
  ),
  finance: (
    <>
      <path d='M12 4.5c-2.35 0-4.25 1.5-4.25 3.35 0 1.65 1.35 2.55 4.25 3.15 2.55.5 3.5 1.05 3.5 2.35 0 1.35-1.4 2.3-3.35 2.3-1.9 0-3.2-.8-3.85-2.15' />
      <path d='M12 3v18' />
    </>
  ),
  marketing: (
    <>
      <path d='M4.5 13.75V10.5c0-1.2.95-2.2 2.15-2.3L18.5 7v10.25l-11.85-1.2a2.31 2.31 0 0 1-2.15-2.3Z' />
      <path d='M8.5 16.2 10 20' />
    </>
  ),
  vendors: (
    <>
      <path d='M6 9.5h12v10H6z' />
      <path d='M9 9.5V7.8A3 3 0 0 1 12 5a3 3 0 0 1 3 2.8v1.7' />
      <path d='M9.5 14h5' />
    </>
  ),
  cms: (
    <>
      <path d='M6 4.75h12v14.5H6z' />
      <path d='M8.5 8.5h7' />
      <path d='M8.5 12h7' />
      <path d='M8.5 15.5h4' />
    </>
  ),
  reports: (
    <>
      <path d='M6 19V9.5' />
      <path d='M12 19V5' />
      <path d='M18 19v-7' />
    </>
  ),
  staff: (
    <>
      <path d='M12 6.2 13.6 9.4l3.55.5-2.55 2.5.6 3.5L12 14.2l-3.2 1.7.6-3.5-2.55-2.5 3.55-.5L12 6.2Z' />
      <path d='M6.5 19a6.85 6.85 0 0 1 11 0' />
    </>
  ),
  settings: (
    <>
      <circle cx='12' cy='12' r='2.8' />
      <path d='M12 4.5v2.1M12 17.4v2.1M19.5 12h-2.1M6.6 12H4.5M17.3 6.7l-1.5 1.5M8.2 15.8l-1.5 1.5M17.3 17.3l-1.5-1.5M8.2 8.2 6.7 6.7' />
    </>
  ),
  search: (
    <>
      <circle cx='10.5' cy='10.5' r='4.75' />
      <path d='m14.25 14.25 4 4' />
    </>
  ),
  menu: (
    <>
      <path d='M4.5 7.5h15' />
      <path d='M4.5 12h15' />
      <path d='M4.5 16.5h15' />
    </>
  ),
  moon: (
    <>
      <path d='M15.7 4.7A7.5 7.5 0 1 0 19.3 16 6.4 6.4 0 1 1 15.7 4.7Z' />
    </>
  ),
  bell: (
    <>
      <path d='M7.2 10.2a4.8 4.8 0 0 1 9.6 0v3.15l1.2 2.15H6l1.2-2.15V10.2Z' />
      <path d='M10 18a2.2 2.2 0 0 0 4 0' />
    </>
  ),
  plus: (
    <>
      <path d='M12 5v14' />
      <path d='M5 12h14' />
    </>
  ),
  chevron: (
    <>
      <path d='m8 10 4 4 4-4' />
    </>
  ),
}

function AppIcon({ name, className = '' }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      className={className}
    >
      {iconPaths[name]}
    </svg>
  )
}

export default AppIcon

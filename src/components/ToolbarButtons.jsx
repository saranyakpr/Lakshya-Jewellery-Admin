export function OutlineButton({ icon: Icon, children, onClick, className = '' }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`flex items-center gap-2 rounded-xl border border-[#e9d8f0] bg-white px-4 py-2 !text-sm !font-semibold !text-[#5f4b6e] shadow-sm transition hover:border-[#d7bfdc] hover:bg-[#fbf2ff] cursor-pointer ${className}`}
    >
      {Icon ? <Icon className='h-5 w-5' /> : null}
      {children}
    </button>
  )
}

export function PrimaryButton({ icon: Icon, children, onClick, className = '' }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`inline-flex items-center gap-2 cursor-pointer rounded-lg bg-[#7c21a0] px-4 py-2 !text-sm !font-semibold !text-white transition hover:shadow-[0_22px_48px_rgba(124,33,160,0.28)] hover:from-[#8d33b5] hover:via-[#a947de] hover:to-[#c860ff] ${className}`}
    >
      {Icon ? <Icon className='h-4 w-4' /> : null}
      {children}
    </button>
  )
}

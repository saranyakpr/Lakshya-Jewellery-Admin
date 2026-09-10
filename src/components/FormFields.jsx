const inputClass =
  'w-full rounded-lg border border-[#e8dfe8] bg-[#f7f2f6] px-3 py-2 !text-sm !text-[#312533] mt-1 !outline-none transition focus:border-[#b78cd2] focus:ring-2 focus:ring-[#e9d4ff]'

function FieldLabel({ label, required }) {
  return (
    <span className='text-[#5a4b63]'>
      {label}
      {required ? <span className='text-[#e5484d]'> *</span> : null}
    </span>
  )
}

export function FormSection({ title, children, className = '', contentClassName = 'grid gap-4 sm:grid-cols-2' }) {
  return (
    <section className={`rounded-2xl border border-[#efe3ed] bg-white p-6 shadow-[0_8px_30px_rgba(77,37,74,0.06)] ${className}`}>
      <h3 className='mb-5 flex items-center gap-2 text-base font-bold text-[#241a2c]'>
        <span className='h-4 w-1 shrink-0 rounded-full bg-[#7c21a0]' />
        {title}
      </h3>
      <div className={contentClassName}>{children}</div>
    </section>
  )
}

export function TextField({ label, required, className = '', ...props }) {
  return (
    <label className={`block space-y-2 text-sm font-medium ${className}`}>
      <FieldLabel label={label} required={required} />
      <input type='text' className={inputClass} {...props} />
    </label>
  )
}

export function TextAreaField({ label, required, className = '', ...props }) {
  return (
    <label className={`block space-y-2 text-sm font-medium ${className}`}>
      <FieldLabel label={label} required={required} />
      <textarea className={inputClass} {...props} />
    </label>
  )
}

export function SelectField({ label, required, options, className = '', ...props }) {
  return (
    <label className={`block space-y-2 text-sm font-medium ${className}`}>
      <FieldLabel label={label} required={required} />
      <select className={inputClass} {...props}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

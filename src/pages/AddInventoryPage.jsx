import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCheck, FiUpload, FiXCircle } from 'react-icons/fi'
import { FormSection, SelectField, TextAreaField, TextField } from '../components/FormFields'
import { OutlineButton, PrimaryButton } from '../components/ToolbarButtons'

const metalTypes = ['Gold', 'Silver', 'Platinum', 'Rose Gold', 'White Gold', 'Palladium']

function AddInventoryPage() {
  const navigate = useNavigate()
  const [metalType, setMetalType] = useState('Gold')
  const [fileName, setFileName] = useState('')

  return (
    <div className='flex flex-col gap-4'>
      {/* <nav className='text-sm text-[#9d8fa3]'>
        <button
          type='button'
          onClick={() => navigate('/inventory/stock-management')}
          className='cursor-pointer hover:text-[#5f4b6e]'
        >
          Inventory
        </button>
        <span className='mx-2'>/</span>
        <span className='font-semibold text-[#7c21a0]'>Add Inventory</span>
      </nav> */}

      <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h1 className='text-[1.7rem] font-black tracking-[-0.03em] text-[var(--text-primary)]'>
            Add New Inventory Item
          </h1>
          <p className='mt-1 text-sm text-[var(--text-muted)]'>Fill in the details below to add a new jewellery product</p>
        </div>

        <div className='flex flex-wrap items-center gap-3'>
          {/* <button
            type='button'
            onClick={() => navigate('/inventory/stock-management')}
            className='inline-flex items-center gap-2 rounded-xl border border-[#e9d8f0] bg-white px-4 py-3 text-sm font-semibold text-[#5f4b6e] cursor-pointer'
          >
            <FiXCircle className='h-4 w-4' />
            Cancel
          </button> */}
          <OutlineButton icon={FiXCircle} onClick={() => navigate('/inventory/stock-management')}>
            Cancel
          </OutlineButton>
          {/* <button
            type='button'
            className='inline-flex items-center gap-2 cursor-pointer rounded-lg bg-[#7c21a0] px-4 py-2 !text-sm !font-semibold !text-white'
          >
            <FiCheck className='h-4 w-4' />
            Publish Item
          </button> */}
          <PrimaryButton icon={FiCheck}>
            Publish Item
          </PrimaryButton>
        </div>
      </div>

      <FormSection title='Basic Information'>
        <TextField label='SKU / Item Code' required placeholder='e.g. LKS-0089' />
        <TextField label='Product Name' required placeholder='e.g. Diamond Solitaire Ring 18K' />
        <SelectField label='Category' required options={['Rings', 'Necklaces', 'Bangles', 'Earrings', 'Bracelets']} />
        <SelectField
          label='Warehouse'
          options={['Select Warehouse', 'Main Warehouse', 'North Warehouse', 'South Warehouse']}
        />
        <TextAreaField label='Description' rows='3' className='sm:col-span-2' />
        <TextField label='HSN Code' placeholder='e.g. 71131910' />
        <TextField label='Tags' placeholder='e.g. bridal, solitaire, 18k, diamond' />
      </FormSection>

      <FormSection title='Target &amp; Occasion'>
        <SelectField
          label='Collection'
          options={['Select Collection', 'Bridal Collection 2025', 'Festive Gold 2025', 'Minimalist Everyday Wear']}
        />
        <TextField label='Price' type='number' placeholder='45000' />

        <label className='block space-y-2 text-sm font-medium text-[#5a4b63]'>
          <span>Image</span>
          <span className='flex items-center gap-2 rounded-lg border border-[#e8dfe8] bg-[#f7f2f6] px-4 py-3 text-sm text-[#312533] transition hover:border-[#b78cd2]'>
            <FiUpload className='h-4 w-4 shrink-0 text-[#8c529d]' />
            <span className='min-w-0 flex-1 truncate text-[#9d8fa3]'>{fileName || 'Choose the image'}</span>
            <input
              type='file'
              accept='image/*'
              onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')}
              className='sr-only'
            />
          </span>
        </label>

        <TextField label='Stock' type='number' placeholder='1000' />
      </FormSection>

      <FormSection title='Metal Details'>
        <div className='sm:col-span-2'>
          <span className='text-sm font-medium text-[#5a4b63]'>
            Metal Type<span className='text-[#e5484d]'> *</span>
          </span>
          <div className='mt-2 flex flex-wrap gap-2'>
            {metalTypes.map((metal) => (
              <button
                key={metal}
                type='button'
                onClick={() => setMetalType(metal)}
                className={`rounded-lg px-5 py-2 !text-sm font-semibold transition cursor-pointer ${
                  metalType === metal
                    ? 'bg-[#7c21a0] text-white shadow-[0_10px_24px_rgba(124,33,160,0.24)]'
                    : 'border border-[#e8dfe8] bg-white text-[#5a4b63] hover:border-[#b78cd2] hover:bg-[#faf4ff]'
                }`}
              >
                {metal}
              </button>
            ))}
          </div>
        </div>

        <SelectField label='Gold Purity' required options={['18K (750)', '22K (916)', '24K (999)']} />
        <TextField label='Gross Weight (g)' required type='number' placeholder='0.00' />
        <TextField label='Net Weight (g)' type='number' placeholder='0.00' />
        <TextField label='Making Charges (₹)' type='number' placeholder='0.00' />
        <TextField label='Wastage %' type='number' placeholder='0.0' />
        <TextField label='Hallmark No.' placeholder='e.g. HM-2024-XXXX' />
      </FormSection>
    </div>
  )
}

export default AddInventoryPage

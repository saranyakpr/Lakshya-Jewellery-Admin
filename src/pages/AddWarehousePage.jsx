import { useNavigate } from 'react-router-dom'
import { FiCheck, FiXCircle } from 'react-icons/fi'
import { FormSection, TextAreaField, TextField } from '../components/FormFields'
import { OutlineButton, PrimaryButton } from '../components/ToolbarButtons'

function AddWarehousePage() {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h1 className='text-[1.7rem] font-black tracking-[-0.03em] text-[var(--text-primary)]'>Add New Warehouse</h1>
          <p className='mt-1 text-sm text-[var(--text-muted)]'>Fill in the details below to add a new warehouse</p>
        </div>

        <div className='flex flex-wrap items-center gap-3'>
          <OutlineButton icon={FiXCircle} onClick={() => navigate('/inventory/warehouses')}>
            Cancel
          </OutlineButton>
          <PrimaryButton icon={FiCheck}>Publish</PrimaryButton>
        </div>
      </div>

      <FormSection title='Warehouse Details'>
        <TextField label='Warehouse Name' required placeholder='Main Warehouse' />
        <TextField label='Manager Name' required placeholder='Manager name' />
        <TextField label='Manager Phn Num' required type='tel' placeholder='9876543219' />
        <TextField label='Stock' type='number' placeholder='450000' />
        <TextAreaField label='Location' rows='3' placeholder={'Address\nstate\npincode'} className='sm:col-span-2' />
      </FormSection>
    </div>
  )
}

export default AddWarehousePage

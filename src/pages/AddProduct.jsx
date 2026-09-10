import { FiSave } from 'react-icons/fi'
import { SiTicktick } from 'react-icons/si'
import PageLayout from '../components/PageLayout'
import { FormSection, SelectField, TextAreaField, TextField } from '../components/FormFields'
import { OutlineButton, PrimaryButton } from '../components/ToolbarButtons'

function AddProduct() {
  return (
    <PageLayout
      title='Add New Product'
      description='Fill in all fields to list a new jewellery product'
      actions={
        <>
          <OutlineButton icon={FiSave}>Save as Draft</OutlineButton>
          <PrimaryButton icon={SiTicktick}>Publish Product</PrimaryButton>
        </>
      }
    >
      <div className='grid gap-6 xl:grid-cols-[1.6fr_1fr]'>
        <div className='space-y-6'>
          <FormSection title='Basic Information'>
            <TextField label='Product Name' required placeholder='e.g. Diamond Solitaire Ring 18K' />
            <TextField label='SKU / Product Code' required placeholder='LKS-0001' />
            <TextField label='Slug' placeholder='diamond-solitaire-ring-18k' />
            <TextAreaField
              label='Description'
              rows='4'
              placeholder='Enter full product description here...'
              className='sm:col-span-2'
            />
          </FormSection>

          <FormSection title='Category Information'>
            <SelectField label='Category' required options={['Select Category', 'Rings', 'Necklaces', 'Earrings']} />
            <SelectField label='Sub Category' options={['Select Sub Category', 'Solitaire', 'Bridal', 'Studs']} />
            <SelectField
              label='Collection'
              options={['Select Collection', 'Bridal', 'Everyday', 'Festive']}
              className='sm:col-span-2'
            />
          </FormSection>

          <FormSection title='Jewelry Details'>
            <SelectField label='Metal Type' required options={['Gold', 'Platinum', 'Silver']} />
            <SelectField label='Gold Purity' required options={['18 Karat', '22 Karat', '24 Karat']} />
            <TextField label='Gold Weight (g)' required placeholder='4.2' />
            <TextField label='Diamond Weight (ct)' placeholder='0.5' />
            <SelectField label='Diamond Quality' options={['VVS1', 'VS1', 'SI1']} className='sm:col-span-2' />
          </FormSection>
        </div>

        <div className='space-y-6'>
          <FormSection title='Pricing' contentClassName='grid gap-4'>
            <div className='flex justify-between rounded-lg border border-[#E8C87A] bg-[#FFF8E1] p-2 text-sm font-semibold text-[#7d3c98] shadow-[inset_0_1px_0_rgba(118,83,138,0.08)]'>
              <span className='!text-sm !font-semibold !text-[#5A3000]'>Live Gold Rate</span>
              <p>₹6,842 / gram</p>
            </div>
            <TextField label='Making Charges (₹)' placeholder='18,500' />
            <SelectField label='GST (%)' options={['3%', '5%', '12%']} />
            <div className='flex justify-between rounded-lg bg-[#EDE7FB] p-2 text-sm font-semibold text-[#60195E] shadow-[inset_0_1px_0_rgba(118,83,138,0.08)]'>
              <span className='!text-[.9rem] !font-extralight !text-gray-700'>Calculated Selling Price</span>
              <p>₹1,82,000</p>
            </div>
            <TextField label='Offer Price (₹) — optional' placeholder='Leave blank for no discount' />
          </FormSection>

          <FormSection title='Inventory' contentClassName='grid gap-4'>
            <TextField label='Stock Quantity' required type='number' placeholder='24' />
            <div className='grid gap-4 sm:grid-cols-2'>
              <TextField label='Min Stock Level' type='number' placeholder='5' />
              <SelectField label='Warehouse' options={['Mumbai Main', 'Delhi Hub', 'Bengaluru Store']} />
            </div>
          </FormSection>

          <FormSection title='Status' contentClassName='space-y-4'>
            <div className='flex items-center gap-2 rounded-lg border border-[#059669] bg-[#e8f8f0] p-2 !text-sm text-[#14694e] shadow-[inset_0_1px_0_rgba(20,105,78,0.08)]'>
              <span className='inline-block h-[.8rem] w-[.8rem] shrink-0 rounded-full bg-[#059669]'></span>
              <p className='!font-semibold'>Active — visible on store</p>
            </div>
            <div className='flex items-center gap-2 rounded-lg border border-[#E8E0E8] bg-[#F7F3F7] p-2 !text-sm text-[#646464] shadow-[inset_0_1px_0_rgba(20,105,78,0.08)]'>
              <span className='inline-block h-[.8rem] w-[.8rem] shrink-0 rounded-full bg-[#E8E0E8]'></span>
              <p className='!font-semibold'>Draft — not published yet</p>
            </div>
          </FormSection>
        </div>
      </div>
    </PageLayout>
  )
}

export default AddProduct

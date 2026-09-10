import { useState } from 'react'
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiChevronDown,
  FiEdit3,
  FiEye,
  FiFilter,
  FiMail,
  FiPhone,
  FiPlus,
  FiSearch,
  FiShield,
  FiTrash2,
  FiUserCheck,
  FiUsers,
  FiUserX,
} from 'react-icons/fi'
import { PiExportBold } from 'react-icons/pi'
import PageLayout from '../components/PageLayout'
import PaginatedDataTable from '../components/PaginatedDataTable'
import { OutlineButton, PrimaryButton } from '../components/ToolbarButtons'
import { roles, staff } from '../data/staff'

const activeStaffCount = staff.filter((member) => member.status === 'Active').length
const inactiveStaffCount = staff.filter((member) => member.status === 'Inactive').length

const statCards = [
  {
    label: 'Total Staff',
    value: staff.length,
    trend: '8.3% from last month',
    trendDirection: 'up',
    icon: FiUsers,
    iconBg: 'bg-[#f4e8ff]',
    iconColor: 'text-[#7a1c73]',
  },
  {
    label: 'Active Staff',
    value: activeStaffCount,
    trend: '12.5% from last month',
    trendDirection: 'up',
    icon: FiUserCheck,
    iconBg: 'bg-[#dffbf0]',
    iconColor: 'text-[#0ca46d]',
  },
  {
    label: 'Inactive Staff',
    value: inactiveStaffCount,
    trend: '25% from last month',
    trendDirection: 'down',
    icon: FiUserX,
    iconBg: 'bg-[#fff0d9]',
    iconColor: 'text-[#d38a00]',
  },
  {
    label: 'Total Roles',
    value: roles.length,
    link: 'View all roles',
    icon: FiShield,
    iconBg: 'bg-[#e7f0ff]',
    iconColor: 'text-[#3680ff]',
  },
]

const roleOptions = ['All Roles', ...roles.map((role) => role.name)]
const statusOptions = ['All Status', 'Active', 'Inactive']
const departmentOptions = ['All Departments', ...new Set(staff.map((member) => member.department))]

const roleBadgeClass = {
  Admin: 'bg-[#f4e8ff] text-[#7a1c73]',
  Manager: 'bg-[#e7f0ff] text-[#3680ff]',
  'Sales Executive': 'bg-[#dcfaea] text-[#15803d]',
  Accountant: 'bg-[#fff0d9] text-[#d38a00]',
  'Inventory Manager': 'bg-[#e6ecff] text-[#4f46e5]',
  'Customer Support': 'bg-[#ffe6f5] text-[#c2185b]',
  'HR Executive': 'bg-[#fff3d0] text-[#a3720b]',
  Staff: 'bg-[#f1eef1] text-[#8f8692]',
}

const statusBadgeClass = {
  Active: 'bg-[#dcfaea] text-[#15803d]',
  Inactive: 'bg-[#f1eef1] text-[#8f8692]',
}

function LabeledSelect({ label, options }) {
  return (
    <label className='flex min-w-0 flex-col gap-1.5 text-xs font-semibold text-[#5f4b6e]'>
      {label}
      <span className='relative'>
        <select
          defaultValue={options[0]}
          className='w-full appearance-none rounded-xl border border-[#e8dfe8] bg-white py-2 pl-3 pr-9 text-sm font-medium text-[#312533] outline-none transition hover:border-[#d7bfdc] cursor-pointer'
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FiChevronDown className='pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7d6a83]' />
      </span>
    </label>
  )
}

function StaffMembersTable() {
  const columns = [
    {
      key: 'staffMember',
      header: 'Staff Member',
      render: (item) => (
        <div className='flex items-center gap-3'>
          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${item.avatar}`}>
            {item.initials}
          </span>
          <div className='min-w-0'>
            <p className='truncate text-sm font-semibold text-[#312533]'>{item.name}</p>
            <p className='truncate text-xs text-[#a596a3]'>{item.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'contact',
      header: 'Contact',
      render: (item) => (
        <div>
          <p className='flex items-center gap-1.5 whitespace-nowrap text-sm text-[#312533]'>
            <FiPhone className='h-3.5 w-3.5 text-[#a596a3]' />
            {item.phone}
          </p>
          <p className='mt-0.5 flex items-center gap-1.5 whitespace-nowrap text-xs text-[#a596a3]'>
            <FiMail className='h-3.5 w-3.5' />
            {item.email}
          </p>
        </div>
      ),
    },
    {
      key: 'role',
      header: 'Role',
      render: (item) => (
        <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[0.72rem] font-semibold ${roleBadgeClass[item.role]}`}>
          {item.role}
        </span>
      ),
    },
    { key: 'department', header: 'Department', accessor: 'department', cellClassName: 'text-sm text-[#6e5a6e]' },
    {
      key: 'status',
      header: 'Status',
      render: (item) => (
        <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-[0.72rem] font-semibold ${statusBadgeClass[item.status]}`}>
          {item.status}
        </span>
      ),
    },
    { key: 'joinedOn', header: 'Joined On', accessor: 'joinedOn', cellClassName: 'whitespace-nowrap text-sm text-[#6e5a6e]' },
    {
      key: 'actions',
      header: 'Actions',
      render: (item) => (
        <div className='flex items-center gap-2'>
          <button
            type='button'
            aria-label={`View ${item.name}`}
            className='inline-flex h-8 w-8 items-center justify-center text-[#8c3fc4] transition hover:bg-[#faf2ff] cursor-pointer'
          >
            <FiEye className='h-4 w-4' />
          </button>
          <button
            type='button'
            aria-label={`Edit ${item.name}`}
            className='inline-flex h-8 w-8 items-center justify-center text-[#3680ff] transition hover:bg-[#faf2ff] cursor-pointer'
          >
            <FiEdit3 className='h-4 w-4' />
          </button>
          <button
            type='button'
            aria-label={`Delete ${item.name}`}
            className='inline-flex h-8 w-8 items-center justify-center text-[#e5484d] transition hover:bg-[#fff2f7] cursor-pointer'
          >
            <FiTrash2 className='h-4 w-4' />
          </button>
        </div>
      ),
    },
  ]

  return (
    <>
      <div className='flex flex-col gap-3 rounded-2xl border border-[#efe3ed] bg-white p-3 shadow-[0_10px_28px_rgba(81,28,96,0.05)] sm:p-4 lg:flex-row lg:flex-wrap lg:items-end'>
        <label className='flex min-w-0 flex-1 items-center gap-2 rounded-xl bg-[#f7f2f6] px-4 py-2.5 lg:min-w-[16rem]'>
          <FiSearch className='h-4 w-4 shrink-0 text-[#8c529d]' />
          <input
            type='text'
            aria-label='Search staff by name, email, phone'
            placeholder='Search staff by name, email, phone...'
            className='w-full min-w-0 bg-transparent text-sm text-[#362940] outline-none placeholder:text-[#9c8ca0]'
          />
        </label>

        <div className='grid grid-cols-1 gap-3 sm:grid-cols-3 lg:flex lg:flex-1 lg:flex-nowrap'>
          <LabeledSelect label='Role' options={roleOptions} />
          <LabeledSelect label='Status' options={statusOptions} />
          <LabeledSelect label='Department' options={departmentOptions} />
        </div>

        <OutlineButton icon={FiFilter}>Filters</OutlineButton>
      </div>

      <PaginatedDataTable
        columns={columns}
        rows={staff}
        rowKey={(item) => item.email}
        minWidthClassName='min-w-[64rem]'
        pageSize={10}
        itemLabel='staff members'
      />
    </>
  )
}

function RolesPermissionsGrid() {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
      {roles.map((role) => (
        <div key={role.name} className='rounded-2xl border border-[#efe3ed] bg-white p-4 shadow-[0_10px_28px_rgba(81,28,96,0.05)]'>
          <div className='flex items-start justify-between gap-3'>
            <span className={`inline-flex rounded-full px-2.5 py-1 text-[0.72rem] font-semibold ${roleBadgeClass[role.name]}`}>
              {role.name}
            </span>
            <span className='text-xs font-semibold text-[#a596a3]'>{role.memberCount} members</span>
          </div>
          <p className='mt-3 text-sm text-[#6e5a6e]'>{role.description}</p>
          <button
            type='button'
            className='mt-4 inline-flex items-center gap-1.5 !text-sm !font-semibold !text-[#7c21a0] transition hover:text-[#5c1878] cursor-pointer'
          >
            <FiEdit3 className='h-3.5 w-3.5' />
            Edit Permissions
          </button>
        </div>
      ))}
    </div>
  )
}

function StaffRolesPage() {
  const [activeTab, setActiveTab] = useState('members')

  return (
    <PageLayout
      title='Staff &amp; Roles'
      description='Manage your staff members, roles and permissions'
      actions={
        <>
          <OutlineButton icon={FiShield} onClick={() => setActiveTab('roles')}>
            Roles &amp; Permissions
          </OutlineButton>
          <OutlineButton icon={PiExportBold}>Export</OutlineButton>
          <PrimaryButton icon={FiPlus}>Add Staff</PrimaryButton>
        </>
      }
    >
      <div className='flex items-center gap-6 border-b border-[#efe3ed]'>
        <button
          type='button'
          onClick={() => setActiveTab('members')}
          className={`-mb-px border-b-2 pb-3 text-sm font-semibold transition cursor-pointer ${
            activeTab === 'members' ? 'border-[#7c21a0] text-[#7c21a0]' : 'border-transparent text-[#a596a3] hover:text-[#5f4b6e]'
          }`}
        >
          Staff Members
        </button>
        <button
          type='button'
          onClick={() => setActiveTab('roles')}
          className={`-mb-px border-b-2 pb-3 text-sm font-semibold transition cursor-pointer ${
            activeTab === 'roles' ? 'border-[#7c21a0] text-[#7c21a0]' : 'border-transparent text-[#a596a3] hover:text-[#5f4b6e]'
          }`}
        >
          Roles &amp; Permissions
        </button>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {statCards.map((card) => {
          const Icon = card.icon
          const TrendIcon = card.trendDirection === 'down' ? FiArrowDownRight : FiArrowUpRight
          const trendColor = card.trendDirection === 'down' ? 'text-[#e5484d]' : 'text-[#15803d]'
          return (
            <div
              key={card.label}
              className='rounded-2xl border border-[#efe3ed] bg-white p-4 shadow-[0_10px_28px_rgba(81,28,96,0.05)]'
            >
              <div className='flex items-center gap-3'>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${card.iconBg}`}>
                  <Icon className={`h-5 w-5 ${card.iconColor}`} />
                </span>
                <p className='text-sm font-medium text-[#6e5a6e]'>{card.label}</p>
              </div>
              <p className='mt-3 text-[1.5rem] font-black tracking-[-0.02em] text-[#241a2c]'>{card.value}</p>
              {card.link ? (
                <button type='button' className='mt-1 text-xs font-bold text-[#7c21a0] transition hover:text-[#5c1878] cursor-pointer'>
                  {card.link}
                </button>
              ) : (
                <p className={`mt-1 flex items-center gap-1 text-xs font-bold ${trendColor}`}>
                  <TrendIcon className='h-3.5 w-3.5' />
                  {card.trend}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {activeTab === 'members' ? <StaffMembersTable /> : <RolesPermissionsGrid />}
    </PageLayout>
  )
}

export default StaffRolesPage

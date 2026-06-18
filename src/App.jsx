import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminHeader from './components/AdminHeader'
import AdminSidebar from './components/AdminSidebar'
import { menuRoutes } from './data/sidebarMenu'
import CustomersPage from './pages/CustomersPage'
import DashboardPage from './pages/DashboardPage'
import MenuPage from './pages/MenuPage'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='min-h-screen bg-[var(--app-bg)] text-[var(--text-primary)]'>
      <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className='min-h-screen lg:pl-[16.25rem]'>
        <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} />

        <main className='px-4 py-5 sm:px-6 lg:px-8'>
          <Routes>
            <Route path='/' element={<Navigate to='/dashboard' replace />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/customers' element={<CustomersPage />} />
            {menuRoutes
              .filter((route) => route.path !== '/dashboard' && route.path !== '/customers')
              .map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <MenuPage
                      title={route.label}
                      description={route.description}
                      parentLabel={route.parentLabel}
                    />
                  }
                />
              ))}
            <Route path='*' element={<Navigate to='/dashboard' replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App

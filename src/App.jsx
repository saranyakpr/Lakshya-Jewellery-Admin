import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import AdminHeader from './components/AdminHeader'
import AdminSidebar from './components/AdminSidebar'
import { menuRoutes } from './data/sidebarMenu'
import CustomersPage from './pages/CustomersPage'
import DashboardPage from './pages/DashboardPage'
import MenuPage from './pages/MenuPage'
import AllProductsPage from './pages/AllProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import AddProduct from './pages/AddProduct'
import CategoriesPage from './pages/CategoriesPage'
import CollectionsPage from './pages/CollectionsPage'
import ReviewsPage from './pages/ReviewsPage'
import StockManagementPage from './pages/StockManagementPage'
import AddInventoryPage from './pages/AddInventoryPage'
import WarehousesPage from './pages/WarehousesPage'
import AddWarehousePage from './pages/AddWarehousePage'
import LowStockAlertsPage from './pages/LowStockAlertsPage'
import StockHistoryPage from './pages/StockHistoryPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='min-h-screen bg-[var(--app-bg)] text-[var(--text-primary)]'>
      <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className='min-h-screen lg:pl-[16.25rem]'>
        <ScrollToTop />
        <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} />

        <main className='px-4 py-5 sm:px-6 lg:px-8'>
          <Routes>
            <Route path='/' element={<Navigate to='/dashboard' replace />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/customers' element={<CustomersPage />} />
            <Route path='/products/all-products' element={<AllProductsPage />} />
            <Route path='/products/add' element={<AddProduct />} />
            <Route path='/products/categories' element={<CategoriesPage />} />
            <Route path='/products/collections' element={<CollectionsPage />} />
            <Route path='/products/reviews' element={<ReviewsPage />} />
            <Route path='/inventory/stock-management' element={<StockManagementPage />} />
            <Route path='/inventory/add' element={<AddInventoryPage />} />
            <Route path='/inventory/warehouses' element={<WarehousesPage />} />
            <Route path='/inventory/warehouses/add' element={<AddWarehousePage />} />
            <Route path='/inventory/low-stock-alerts' element={<LowStockAlertsPage />} />
            <Route path='/inventory/stock-history' element={<StockHistoryPage />} />
            <Route path='/products/:productId' element={<ProductDetailPage />} />
            {menuRoutes
              .filter(
                (route) =>
                  route.path !== '/dashboard' &&
                  route.path !== '/customers' &&
                  route.path !== '/products/all-products' &&
                  route.path !== '/products/categories' &&
                  route.path !== '/products/collections' &&
                  route.path !== '/products/reviews' &&
                  route.path !== '/inventory/stock-management' &&
                  route.path !== '/inventory/add' &&
                  route.path !== '/inventory/warehouses' &&
                  route.path !== '/inventory/warehouses/add' &&
                  route.path !== '/inventory/low-stock-alerts' &&
                  route.path !== '/inventory/stock-history',
              )
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

import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <main style={{ padding: '20px' }}>
          <Outlet /> {/* Page content */}
          
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout

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
      <div className="chart-support"  data-toggle="tooltip" data-placement="top" title="chat support">
          <i class="bi bi-chat-dots"></i>
      </div>
    </div>
  )
}

export default DashboardLayout

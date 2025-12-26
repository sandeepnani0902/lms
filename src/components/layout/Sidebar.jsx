import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../index.css'
const Sidebar = () => {
  // 🔹 auto collapse on mobile
  const [isopen, setIsOpen] = useState(window.innerWidth > 768)

  // 🔹 theme
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  )

  // 🔹 resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 🔹 apply theme
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <aside
      className="sidebar min-vh-100"
      style={{ width: isopen ? '220px' : '70px' }}
    >
      {/* HEADER */}
      <div className="d-flex align-items-center justify-content-between px-3 py-3">
        {isopen && <h6 className="m-0">Dashboard</h6>}

        <button
          className={ theme === "dark" ? "btn text-white" :"btn text-black"}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <i className={`bi ${isopen ? 'bi-chevron-left' : 'bi-chevron-right'}`} />
        </button>
      </div>

      {/* MENU */}
      <ul className="nav nav-pills flex-column gap-1 px-2">

        <SidebarItem to="/" icon="house-door" label="Home" isopen={isopen} />
        <SidebarItem to="/courses" icon="journal-bookmark" label="Courses" isopen={isopen} />
        <SidebarItem to="/users" icon="people" label="Users" isopen={isopen} />
        <SidebarItem to="/exams" icon="pencil-square" label="Exams" isopen={isopen} />
        <SidebarItem to="/webinar" icon="camera-video" label="Webinar" isopen={isopen} />
        <SidebarItem to="/certificates" icon="patch-check" label="Certificates" isopen={isopen} />
        <SidebarItem to="/marketing" icon="bar-chart-line" label="Marketing" isopen={isopen} />
        <SidebarItem to="/affiliatemarketing" icon="link-45deg" label="Affiliate" isopen={isopen} />
        <SidebarItem to="/myapp" icon="phone" label="My App" isopen={isopen} />
        <SidebarItem to="/websites" icon="globe" label="Websites" isopen={isopen} />
        <SidebarItem to="/settings" icon="gear" label="Settings" isopen={isopen} />

      </ul>

      {/* THEME TOGGLE */}
      <div className="px-3 mt-auto mb-3">
        <button
          className={theme === 'dark' ? "btn sidebar-link w-100 text-white": "btn sidebar-link w-100 text-black"}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <i className={`bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon'} sidebar-icon `} />
          {isopen && (
            <span className={`sidebar-text show ms-2`}>
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
          )}
        </button>
      </div>
    </aside>
  )
}

const SidebarItem = ({ to, icon, label, isopen }) => (
  <li className="nav-item">
    <NavLink
      to={to}
      title={!isopen ? label : ''}
      className={({ isActive }) =>
        `nav-link sidebar-link ${isActive ? 'active' : ''}`
      }
    >
      <span className="sidebar-icon">
        <i className={`bi bi-${icon}`} />
      </span>

      <span className={`sidebar-text ${isopen ? 'show' : 'hide'}`}>
        {label}
      </span>
    </NavLink>
  </li>
)

export default Sidebar

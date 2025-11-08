import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const menuItems = [
    { path: '/dashboard', icon: '📊', label: '仪表板' },
    { path: '/profile', icon: '👤', label: '个人资料' },
  ]

  return (
    <aside style={{
      width: '250px',
      background: 'white',
      boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
      height: 'calc(100vh - 60px)'
    }}>
      <nav>
        <ul style={{ listStyle: 'none', padding: '20px 0' }}>
          {menuItems.map((item) => (
            <li key={item.path} style={{ marginBottom: '5px' }}>
              <NavLink 
                to={item.path} 
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 20px',
                  color: isActive ? '#3498db' : '#7f8c8d',
                  textDecoration: 'none',
                  borderLeft: `3px solid ${isActive ? '#3498db' : 'transparent'}`,
                  background: isActive ? '#e3f2fd' : 'transparent'
                })}
              >
                <span style={{ fontSize: '18px', marginRight: '12px', width: '20px', textAlign: 'center' }}>
                  {item.icon}
                </span>
                <span style={{ fontWeight: '500' }}>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
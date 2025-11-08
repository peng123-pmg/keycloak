import React from 'react'
import { useKeycloak } from '../contexts/KeycloakContext'

const Header = () => {
  const { userInfo, logout } = useKeycloak()

  return (
    <header style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      padding: '0 20px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div>
        <h1 style={{ color: '#2c3e50', fontSize: '20px', fontWeight: '700' }}>
          Keycloak Guardians
        </h1>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: '#2c3e50', fontWeight: '500' }}>
            {userInfo?.name || userInfo?.preferred_username}
          </span>
          <div style={{
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, #3498db, #2c3e50)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: '14px'
          }}>
            {userInfo?.name?.charAt(0) || 'U'}
          </div>
        </div>
        
        <button 
          onClick={logout}
          style={{
            padding: '8px 16px',
            background: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          退出
        </button>
      </div>
    </header>
  )
}

export default Header

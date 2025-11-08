import React from 'react'
import { useKeycloak } from '../contexts/KeycloakContext'

const Login = () => {
  const { login } = useKeycloak()

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        width: '100%',
        maxWidth: '400px',
        overflow: 'hidden'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #3498db, #2c3e50)',
          color: 'white',
          padding: '30px 20px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>Keycloak Guardians</h1>
          <p style={{ opacity: '0.9', fontSize: '14px' }}>个人数字管理系统</p>
        </div>
        
        <div style={{ padding: '30px' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ color: '#2c3e50', marginBottom: '8px' }}>欢迎回来</h2>
            <p style={{ color: '#7f8c8d', fontSize: '14px' }}>请登录以访问您的个人数字管理空间</p>
          </div>
          
          <button 
            onClick={login}
            style={{
              width: '100%',
              padding: '15px',
              background: 'linear-gradient(135deg, #3498db, #2980b9)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            <span style={{ fontSize: '18px' }}>🔐</span>
            使用 Keycloak 登录
          </button>
          
          <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #ecf0f1' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '16px' }}>系统功能</h3>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ padding: '8px 0', color: '#7f8c8d', fontSize: '14px' }}>🔒 安全的身份认证</li>
              <li style={{ padding: '8px 0', color: '#7f8c8d', fontSize: '14px' }}>📊 个人数据仪表板</li>
              <li style={{ padding: '8px 0', color: '#7f8c8d', fontSize: '14px' }}>👤 个人信息管理</li>
              <li style={{ padding: '8px 0', color: '#7f8c8d', fontSize: '14px' }}>🛡️ 隐私保护</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
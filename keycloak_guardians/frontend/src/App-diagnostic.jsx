import React, { useEffect, useState } from 'react'
import Keycloak from 'keycloak-js'

function AppDiagnostic() {
  const [status, setStatus] = useState('初始化中...')
  const [keycloak, setKeycloak] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const kc = new Keycloak({
      url: 'http://localhost:8080',
      realm: 'keycloak_guardians',
      clientId: 'personal-management-system',
    })

    setKeycloak(kc)

    console.log('开始 Keycloak 初始化...')
    setStatus('正在连接到 Keycloak 服务器...')

    kc.init({
      onLoad: 'check-sso',
      pkceMethod: 'S256',
      checkLoginIframe: false
    }).then((authenticated) => {
      console.log('Keycloak 初始化成功，认证状态:', authenticated)
      setStatus(`初始化成功 - 认证状态: ${authenticated ? '已认证' : '未认证'}`)
      
      if (authenticated) {
        console.log('用户信息:', kc.tokenParsed)
        setStatus(`已登录 - 用户: ${kc.tokenParsed.preferred_username}`)
      } else {
        setStatus('未登录 - 准备显示登录页面')
        // 不自动跳转，让用户手动点击
      }
    }).catch((err) => {
      console.error('Keycloak 初始化失败:', err)
      setError(err.toString())
      setStatus('初始化失败')
    })
  }, [])

  const handleLogin = () => {
    if (keycloak) {
      keycloak.login()
    }
  }

  const handleLogout = () => {
    if (keycloak) {
      keycloak.logout()
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Keycloak Guardians - 诊断页面</h1>
      
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '5px', 
        marginBottom: '20px' 
      }}>
        <h3>状态: {status}</h3>
        {error && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            <strong>错误:</strong> {error}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button 
          onClick={handleLogin}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          手动登录
        </button>
        <button 
          onClick={handleLogout}
          style={{
            padding: '10px 20px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          登出
        </button>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          刷新页面
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>测试链接:</h3>
        <ul>
          <li>
            <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">
              测试 Keycloak 服务器
            </a>
          </li>
          <li>
            <a href="http://localhost:8080/realms/keycloak_guardians/.well-known/openid-configuration" 
               target="_blank" rel="noopener noreferrer">
              测试领域配置
            </a>
          </li>
        </ul>
      </div>

      {keycloak && (
        <div style={{ marginTop: '20px' }}>
          <h3>Keycloak 实例信息:</h3>
          <pre style={{ 
            backgroundColor: '#2c3e50', 
            color: 'white', 
            padding: '10px', 
            borderRadius: '5px',
            overflow: 'auto'
          }}>
            {JSON.stringify({
              authenticated: keycloak.authenticated,
              token: keycloak.token ? '有令牌' : '无令牌',
              realm: keycloak.realm,
              clientId: keycloak.clientId,
              authServerUrl: keycloak.authServerUrl
            }, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

export default AppDiagnostic
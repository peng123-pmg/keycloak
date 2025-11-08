import React, { useEffect, useState } from 'react'

function AppEmergency() {
  const [status, setStatus] = useState('检查 Keycloak 配置...')

  useEffect(() => {
    // 立即停止任何可能的自动重定向
    console.log('紧急模式启动 - 停止所有自动行为')
    
    // 检查当前 URL 参数
    const urlParams = new URLSearchParams(window.location.search)
    const hasCode = urlParams.has('code')
    const hasError = urlParams.has('error')
    
    console.log('URL 参数:', {
      code: hasCode,
      error: hasError,
      fullUrl: window.location.href
    })
    
    if (hasCode) {
      setStatus('检测到认证代码，正在处理...')
      // 如果有认证代码，说明是从 Keycloak 返回的
      setTimeout(() => {
        // 清除 URL 参数并重定向到首页
        window.location.href = 'http://localhost:3000/'
      }, 2000)
    } else if (hasError) {
      setStatus(`认证错误: ${urlParams.get('error')}`)
    } else {
      setStatus('安全模式 - 手动控制')
    }
  }, [])

  const testKeycloakConnection = () => {
    setStatus('测试 Keycloak 连接...')
    
    // 直接测试 Keycloak 配置端点
    fetch('http://localhost:8080/realms/keycloak_guardians/.well-known/openid-configuration')
      .then(response => {
        if (response.ok) {
          setStatus('✅ Keycloak 服务器可访问')
          return response.json()
        } else {
          setStatus('❌ Keycloak 服务器不可访问')
          throw new Error('Keycloak 不可用')
        }
      })
      .then(config => {
        console.log('Keycloak 配置:', config)
        setStatus('✅ Keycloak 配置正常')
      })
      .catch(error => {
        console.error('Keycloak 测试失败:', error)
        setStatus(`❌ Keycloak 连接失败: ${error.message}`)
      })
  }

  const manualLogin = () => {
    setStatus('准备手动登录...')
    
    // 使用完整的登录 URL，避免前端 Keycloak JS 库的问题
    const loginUrl = new URL('http://localhost:8080/realms/keycloak_guardians/protocol/openid-connect/auth')
    loginUrl.searchParams.set('client_id', 'personal-management-system')
    loginUrl.searchParams.set('redirect_uri', 'http://localhost:3000/')
    loginUrl.searchParams.set('response_type', 'code')
    loginUrl.searchParams.set('scope', 'openid')
    loginUrl.searchParams.set('state', 'manual_' + Date.now())
    
    console.log('手动登录 URL:', loginUrl.toString())
    window.location.href = loginUrl.toString()
  }

  const resetEverything = () => {
    setStatus('重置所有数据...')
    
    // 清除所有存储
    localStorage.clear()
    sessionStorage.clear()
    
    // 清除 cookies
    document.cookie.split(";").forEach(function(c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
    })
    
    setTimeout(() => {
      window.location.href = 'http://localhost:3000/'
    }, 1000)
  }

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial', 
      maxWidth: '800px', 
      margin: '0 auto',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#e74c3c' }}>🚨 Keycloak Guardians - 紧急修复模式</h1>
      
      <div style={{ 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '10px', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <h3>当前状态: {status}</h3>
        <p style={{ color: '#7f8c8d' }}>
          检测到重定向循环，已进入安全模式。请按顺序执行以下操作：
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <button 
          onClick={testKeycloakConnection}
          style={{
            padding: '15px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          1. 测试 Keycloak 连接
        </button>

        <button 
          onClick={manualLogin}
          style={{
            padding: '15px',
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          2. 手动登录（安全模式）
        </button>

        <button 
          onClick={resetEverything}
          style={{
            padding: '15px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          3. 重置所有数据（清除缓存）
        </button>
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
        <h4>📋 故障排除步骤：</h4>
        <ol>
          <li>首先点击"测试 Keycloak 连接"确认服务器正常</li>
          <li>然后点击"手动登录"进行安全登录</li>
          <li>如果仍有问题，点击"重置所有数据"</li>
          <li>最后重新访问 <a href="http://localhost:3000">http://localhost:3000</a></li>
        </ol>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h4>🔗 直接测试链接：</h4>
        <ul>
          <li><a href="http://localhost:8080" target="_blank">Keycloak 管理控制台</a></li>
          <li><a href="http://localhost:8080/realms/keycloak_guardians/.well-known/openid-configuration" target="_blank">
            Keycloak 领域配置
          </a></li>
        </ul>
      </div>
    </div>
  )
}

export default AppEmergency
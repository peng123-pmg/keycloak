import React from 'react'
import { useKeycloak } from '../contexts/KeycloakContext'

const Profile = () => {
  const { userInfo } = useKeycloak()

  const userDetails = [
    { label: '用户名', value: userInfo?.preferred_username },
    { label: '姓名', value: userInfo?.name },
    { label: '邮箱', value: userInfo?.email },
    { label: '姓氏', value: userInfo?.family_name },
    { label: '名字', value: userInfo?.given_name },
  ]

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '28px', marginBottom: '8px' }}>个人资料</h1>
        <p style={{ color: '#7f8c8d', fontSize: '16px' }}>管理您的账户信息和设置</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #ecf0f1' }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #3498db, #2c3e50)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '32px',
              fontWeight: '600'
            }}>
              {userInfo?.name?.charAt(0) || 'U'}
            </div>
            <div>
              <h2 style={{ color: '#2c3e50', fontSize: '24px', marginBottom: '5px' }}>{userInfo?.name || '用户'}</h2>
              <p style={{ color: '#7f8c8d' }}>{userInfo?.email}</p>
            </div>
          </div>

          <div>
            <h3 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '18px' }}>基本信息</h3>
            <div style={{ display: 'grid', gap: '15px' }}>
              {userDetails.map((detail, index) => (
                detail.value && (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f8f9fa' }}>
                    <label style={{ color: '#7f8c8d', fontWeight: '500' }}>{detail.label}</label>
                    <span style={{ color: '#2c3e50', fontWeight: '600' }}>{detail.value}</span>
                  </div>
                )
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #ecf0f1' }}>
            <button style={{
              padding: '12px 24px',
              background: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              编辑资料
            </button>
            <button style={{
              padding: '12px 24px',
              background: '#f8f9fa',
              color: '#2c3e50',
              border: '1px solid #e9ecef',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              安全设置
            </button>
          </div>
        </div>

        <div>
          <div style={{ background: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '18px' }}>账户状态</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: '1px solid #f8f9fa', color: '#27ae60' }}>
              <span style={{ fontSize: '16px' }}>✅</span>
              <span>邮箱已验证</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', color: '#2ecc71' }}>
              <span style={{ fontSize: '16px' }}>🟢</span>
              <span>账户活跃</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
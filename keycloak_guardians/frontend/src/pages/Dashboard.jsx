import React from 'react'
import { useKeycloak } from '../contexts/KeycloakContext'

const Dashboard = () => {
  const { userInfo } = useKeycloak()

  const stats = [
    { title: '登录次数', value: '128', icon: '🔐' },
    { title: '数据项目', value: '42', icon: '📁' },
    { title: '安全等级', value: '高', icon: '🛡️' },
    { title: '活跃天数', value: '30', icon: '📅' },
  ]

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '28px', marginBottom: '8px' }}>
          欢迎回来, {userInfo?.given_name || '用户'}!
        </h1>
        <p style={{ color: '#7f8c8d', fontSize: '16px' }}>这里是您的个人数字管理中心</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              fontSize: '32px',
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #3498db, #2c3e50)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              {stat.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '24px', color: '#2c3e50', marginBottom: '5px' }}>{stat.value}</h3>
              <p style={{ color: '#7f8c8d', fontSize: '14px' }}>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div style={{ background: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '20px' }}>最近活动</h2>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 0', borderBottom: '1px solid #ecf0f1' }}>
              <span style={{
                fontSize: '18px',
                width: '36px',
                height: '36px',
                background: '#f8f9fa',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>✅</span>
              <div>
                <p style={{ color: '#2c3e50', fontWeight: '500', marginBottom: '4px' }}>成功登录系统</p>
                <span style={{ color: '#7f8c8d', fontSize: '12px' }}>刚刚</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 0' }}>
              <span style={{
                fontSize: '18px',
                width: '36px',
                height: '36px',
                background: '#f8f9fa',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>👤</span>
              <div>
                <p style={{ color: '#2c3e50', fontWeight: '500', marginBottom: '4px' }}>更新个人资料信息</p>
                <span style={{ color: '#7f8c8d', fontSize: '12px' }}>2小时前</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: 'white', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '20px', fontSize: '20px' }}>快速操作</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button style={{
              padding: '12px 16px',
              background: '#f8f9fa',
              border: '1px solid #e9ecef',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '14px'
            }}>
              <span style={{ fontSize: '16px' }}>➕</span>
              添加新项目
            </button>
            <button style={{
              padding: '12px 16px',
              background: '#f8f9fa',
              border: '1px solid #e9ecef',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '14px'
            }}>
              <span style={{ fontSize: '16px' }}>⚙️</span>
              系统设置
            </button>
            <button style={{
              padding: '12px 16px',
              background: '#f8f9fa',
              border: '1px solid #e9ecef',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '14px'
            }}>
              <span style={{ fontSize: '16px' }}>📋</span>
              生成报告
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
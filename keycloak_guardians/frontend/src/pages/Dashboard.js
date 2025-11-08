import React from 'react';
import { useKeycloak } from '../contexts/KeycloakContext';
import './Dashboard.css';

const Dashboard = () => {
  const { userInfo } = useKeycloak();

  const stats = [
    { title: '登录次数', value: '128', icon: '🔐' },
    { title: '数据项目', value: '42', icon: '📁' },
    { title: '安全等级', value: '高', icon: '🛡️' },
    { title: '活跃天数', value: '30', icon: '📅' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>欢迎回来, {userInfo?.given_name || '用户'}!</h1>
        <p>这里是您的个人数字管理中心</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="content-section">
          <h2>最近活动</h2>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-icon">✅</span>
              <div className="activity-details">
                <p>成功登录系统</p>
                <span className="activity-time">刚刚</span>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">👤</span>
              <div className="activity-details">
                <p>更新个人资料信息</p>
                <span className="activity-time">2小时前</span>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>快速操作</h2>
          <div className="quick-actions">
            <button className="action-button">
              <span className="action-icon">➕</span>
              添加新项目
            </button>
            <button className="action-button">
              <span className="action-icon">⚙️</span>
              系统设置
            </button>
            <button className="action-button">
              <span className="action-icon">📋</span>
              生成报告
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
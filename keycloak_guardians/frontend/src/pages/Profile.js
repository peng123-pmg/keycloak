import React from 'react';
import { useKeycloak } from '../contexts/KeycloakContext';
import './Profile.css';

const Profile = () => {
  const { userInfo } = useKeycloak();

  const userDetails = [
    { label: '用户名', value: userInfo?.preferred_username },
    { label: '姓名', value: userInfo?.name },
    { label: '邮箱', value: userInfo?.email },
    { label: '姓氏', value: userInfo?.family_name },
    { label: '名字', value: userInfo?.given_name },
  ];

  return (
    <div className="profile">
      <div className="profile-header">
        <h1>个人资料</h1>
        <p>管理您的账户信息和设置</p>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar-section">
            <div className="profile-avatar">
              {userInfo?.name?.charAt(0) || 'U'}
            </div>
            <div className="profile-info">
              <h2>{userInfo?.name || '用户'}</h2>
              <p>{userInfo?.email}</p>
            </div>
          </div>

          <div className="profile-details">
            <h3>基本信息</h3>
            <div className="details-grid">
              {userDetails.map((detail, index) => (
                detail.value && (
                  <div key={index} className="detail-item">
                    <label>{detail.label}</label>
                    <span>{detail.value}</span>
                  </div>
                )
              ))}
            </div>
          </div>

          <div className="profile-actions">
            <button className="edit-button">
              编辑资料
            </button>
            <button className="security-button">
              安全设置
            </button>
          </div>
        </div>

        <div className="profile-sidebar">
          <div className="info-card">
            <h3>账户状态</h3>
            <div className="status-item verified">
              <span className="status-icon">✅</span>
              <span>邮箱已验证</span>
            </div>
            <div className="status-item active">
              <span className="status-icon">🟢</span>
              <span>账户活跃</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
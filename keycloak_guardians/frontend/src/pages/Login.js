import React from 'react';
import { useKeycloak } from '../contexts/KeycloakContext';
import './Login.css';

const Login = () => {
  const { login } = useKeycloak();

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Keycloak Guardians</h1>
          <p>个人数字管理系统</p>
        </div>
        
        <div className="login-content">
          <div className="welcome-section">
            <h2>欢迎回来</h2>
            <p>请登录以访问您的个人数字管理空间</p>
          </div>
          
          <button 
            className="login-button"
            onClick={login}
          >
            <span className="button-icon">🔐</span>
            使用 Keycloak 登录
          </button>
          
          <div className="features">
            <h3>系统功能</h3>
            <ul>
              <li>🔒 安全的身份认证</li>
              <li>📊 个人数据仪表板</li>
              <li>👤 个人信息管理</li>
              <li>🛡️ 隐私保护</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
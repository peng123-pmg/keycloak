import React from 'react';
import { useKeycloak } from '../contexts/KeycloakContext';
import './Header.css';

const Header = () => {
  const { userInfo, logout } = useKeycloak();

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Keycloak Guardians</h1>
      </div>
      
      <div className="header-right">
        <div className="user-info">
          <span className="user-name">
            {userInfo?.name || userInfo?.preferred_username}
          </span>
          <div className="user-avatar">
            {userInfo?.name?.charAt(0) || 'U'}
          </div>
        </div>
        
        <button 
          className="logout-button"
          onClick={logout}
          title="退出登录"
        >
          退出
        </button>
      </div>
    </header>
  );
};

export default Header;
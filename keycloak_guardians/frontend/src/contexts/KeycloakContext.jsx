import React, { createContext, useContext, useEffect, useState } from 'react'
import keycloak, { initKeycloak } from '../services/keycloak'

const KeycloakContext = createContext()

export const useKeycloak = () => {
  const context = useContext(KeycloakContext)
  if (!context) {
    throw new Error('useKeycloak 必须在 KeycloakProvider 内使用')
  }
  return context
}

export const KeycloakProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initKeycloak(() => {
      setAuthenticated(true)
      loadUserInfo()
      setLoading(false)
    })
  }, [])

  const loadUserInfo = async () => {
    try {
      const userInfo = await keycloak.loadUserInfo()
      setUserInfo(userInfo)
    } catch (error) {
      console.error('加载用户信息失败', error)
    }
  }

  const login = () => {
    keycloak.login()
  }

  const logout = () => {
    keycloak.logout()
  }

  const value = {
    authenticated,
    userInfo,
    loading,
    login,
    logout,
    keycloak
  }

  return (
    <KeycloakContext.Provider value={value}>
      {children}
    </KeycloakContext.Provider>
  )
}
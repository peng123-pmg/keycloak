// import React from 'react'

// function App() {
//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Keycloak Guardians</h1>
//       <p>前端应用正在运行！</p>
//       <p>如果看到这个页面，说明前端服务器工作正常。</p>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { KeycloakProvider, useKeycloak } from './contexts/KeycloakContext.jsx'  // 更新导入
import Login from './pages/Login.jsx'  // 更新导入
import Dashboard from './pages/Dashboard.jsx'  // 更新导入
import Profile from './pages/Profile.jsx'  // 更新导入
import LoadingSpinner from './components/LoadingSpinner.jsx'  // 更新导入
import Layout from './components/Layout.jsx'  // 更新导入

const ProtectedRoute = ({ children }) => {
  const { authenticated, loading } = useKeycloak()
  
  if (loading) {
    return <LoadingSpinner />
  }
  
  return authenticated ? children : <Navigate to="/login" />
}

const PublicRoute = ({ children }) => {
  const { authenticated, loading } = useKeycloak()
  
  if (loading) {
    return <LoadingSpinner />
  }
  
  return !authenticated ? children : <Navigate to="/dashboard" />
}

function AppContent() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route index element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </Router>
  )
}

function App() {
  return (
    <KeycloakProvider>
      <div className="App">
        <AppContent />
      </div>
    </KeycloakProvider>
  )
}

export default App
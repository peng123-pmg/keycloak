import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { KeycloakProvider, useKeycloak } from './contexts/KeycloakContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import LoadingSpinner from './components/LoadingSpinner';
import Layout from './components/Layout';
import './styles/App.css';

const ProtectedRoute = ({ children }) => {
  const { authenticated, loading } = useKeycloak();
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  return authenticated ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  const { authenticated, loading } = useKeycloak();
  
  if (loading) {
    return <LoadingSpinner />;
  }
  
  return !authenticated ? children : <Navigate to="/dashboard" />;
};

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
  );
}

function App() {
  return (
    <KeycloakProvider>
      <div className="App">
        <AppContent />
      </div>
    </KeycloakProvider>
  );
}

export default App;
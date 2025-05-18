import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import AuthForm from './AuthForm';
import useAuth from './hooks/useAuth';
import { db } from './firebase';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import Profile from './pages/Profile';
import Results from './pages/Result';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './components/AdminRoute';
import WhatIsAutism from './pages/WhatIsAutism';
import Footer from './components/Footer';
import Resources from './pages/Resources';
import Information from './pages/Information';
import Settings from './pages/Settings';

import './App.css'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { user, isVerified, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isVerified)) {
      navigate('/');
    }
  }, [user, isVerified, loading, navigate]);

  if (loading) return <div>Loading...</div>
  return user && isVerified ? children : null;
}

// Wrapper to use `useLocation` inside `App`
function AppWrapper() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!hideNavbar && <Navbar />}

      <div style={{ flex: 1, padding: '20px 0' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/WhatIsAutism" element={<ProtectedRoute><WhatIsAutism /></ProtectedRoute>} />
          <Route path="/Information" element={<ProtectedRoute><Information /></ProtectedRoute>} />
          <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          <Route path="/results/:profileId" element={<Results />} />
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;

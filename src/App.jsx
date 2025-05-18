import { useState, useEffect } from 'react';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import AuthForm from './AuthForm';
import useAuth from './hooks/useAuth'
import { db } from './firebase';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile'
import Results from './pages/Result';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './components/AdminRoute';
import WhatIsAutism from './pages/WhatIsAutism';
import Footer from './components/Footer';
import Resources from './pages/Resources'

import './App.css'

function App() {
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

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/WhatIsAutism"
        element={
          <ProtectedRoute>
            <WhatIsAutism />
          </ProtectedRoute>
        }
      />

      <Route
        path="/resources"
        element={
          <ProtectedRoute>
            <Resources />
          </ProtectedRoute>
        }
      />
      <Route path="/results/:profileId" element={<Results />} />
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}


export default App

import { Link } from 'react-router-dom';
import useAdminStatus from '../hooks/useAdminStatus';
import { useState } from 'react';

export default function Navbar() {
  const { isAdmin, loading } = useAdminStatus();
  const [isHoveredSignUp, setIsHoveredSignUp] = useState(false);
  const [isHoveredDashboard, setIsHoveredDashboard] = useState(false);

  return (
    <header style={{ borderBottom: '1px solid #ddd' }}>
      
      {/* Top Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
      }}>
        {/* Search Icon */}
        <div style={{ flex: 1 }}>
          <button style={{ fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>
            🔍
          </button>
        </div>

        {/* Center Title */}
        <div style={{
          flex: 1,
          textAlign: 'center',
          fontSize: '3rem',
          fontWeight: '500',
        }}>
          Smiles for Speech
        </div>

        {/* Auth Buttons */}
        <div style={{ flex: 1, textAlign: 'right' }}>
          <Link
            to="signup"
            style={{
              backgroundColor: isHoveredSignUp ? '#eab308' : '#facc15',
              color: '#000',
              padding: '0.4rem 1rem',
              borderRadius: '0.375rem',
              fontWeight: '500',
              textDecoration: 'none',
              marginRight: '1rem',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={() => setIsHoveredSignUp(true)}
            onMouseLeave={() => setIsHoveredSignUp(false)}
          >
            Sign Up
          </Link>
          <Link
            to="/dashboard"
            style={{
              backgroundColor: isHoveredDashboard ? '#d1d5db' : '#e5e7eb',
              border: '1px solid #000',
              padding: '0.4rem 1rem',
              borderRadius: '0.375rem',
              textDecoration: 'none',
              color: '#000',
              fontWeight: '500',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={() => setIsHoveredDashboard(true)}
            onMouseLeave={() => setIsHoveredDashboard(false)}
          >
            Dashboard
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '4rem',
        padding: '0.75rem 0',
        fontSize: '1.25rem',
        borderTop: '1px solid #eee',
        borderBottom: '1px solid #eee',
      }}>
        <Link to="/WhatIsAutism" style={navLinkStyle}>What is Autism?</Link>
        <Link to="/Information" style={navLinkStyle}>Information</Link>
        <Link to="/assessment" style={navLinkStyle}>Assessment</Link>
        <Link to="/resources" style={navLinkStyle}>Resources & Support</Link>
        <Link to="https://www.smilesforspeech.org/" style={navLinkStyle}>Official Website</Link>
      </nav>
    </header>
  );
}

// Styles
const navLinkStyle = {
  textDecoration: 'none',
  color: '#000',
  fontWeight: '500',
};

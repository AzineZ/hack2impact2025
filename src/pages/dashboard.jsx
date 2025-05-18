import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';

export default function Dashboard() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [hoverState, setHoverState] = useState({
    primary: false,
    settings: false,
    logout: false
  });

  const handleHover = (button, isHovered) => {
    setHoverState(prev => ({ ...prev, [button]: isHovered }));
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  // Dynamic styles that depend on state
  const dynamicStyles = {
    primaryButton: {
      padding: '1.5rem 2.5rem',
      fontSize: '1.4rem',
      borderRadius: '12px',
      color: 'white',
      textDecoration: 'none',
      width: '100%',
      maxWidth: '400px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.2s ease',
      transform: hoverState.primary ? 'scale(1.02)' : 'scale(1)',
      backgroundColor: hoverState.primary ? '#2980b9' : '#3498db'
    },
    secondaryButton: {
      padding: '1rem 1.5rem',
      fontSize: '1.1rem',
      borderRadius: '8px',
      color: 'white',
      textDecoration: 'none',
      width: '48%',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.2s ease',
      backgroundColor: hoverState.settings ? '#7f8c8d' : '#95a5a6'
    },
    logoutButton: {
      transition: 'all 0.2s ease',
      backgroundColor: hoverState.logout ? '#a93226' : '#c0392b'
    }
  };

  // Static styles
  const staticStyles = {
    container: {
      padding: '2rem',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      minHeight: 'calc(100vh - 200px)'
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '0.5rem',
      color: '#2c3e50'
    },
    subheading: {
      color: '#666',
      marginBottom: '2rem',
      fontSize: '1.1rem'
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      alignItems: 'center'
    },
    secondaryGroup: {
      display: 'flex',
      gap: '1rem',
      width: '100%',
      maxWidth: '400px',
      justifyContent: 'space-between'
    }
  };


  return (
    <>
    <div style={staticStyles.container}>
      <h1 style={staticStyles.heading}>Welcome, {user?.displayName || user?.email || 'Parent'} 👋</h1>
      <p style={staticStyles.subheading}>Manage your account and profiles</p>

      <div style={staticStyles.buttonContainer}>
        {/* Main Button */}
        <Link 
          to="/profile" 
          style={dynamicStyles.primaryButton}
          onMouseEnter={() => handleHover('primary', true)}
          onMouseLeave={() => handleHover('primary', false)}
        >
          👶 Manage Child Profiles
        </Link>

        {/* Secondary Buttons */}
        <div style={staticStyles.secondaryGroup}>
          <Link
            to="/settings" 
            style={dynamicStyles.secondaryButton}
            onMouseEnter={() => handleHover('settings', true)}
            onMouseLeave={() => handleHover('settings', false)}
          >
            ⚙️ Settings
          </Link>
          <button
            onClick={handleLogout}
            style={{ ...dynamicStyles.secondaryButton, ...dynamicStyles.logoutButton }}
            onMouseEnter={() => handleHover('logout', true)}
            onMouseLeave={() => handleHover('logout', false)}
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
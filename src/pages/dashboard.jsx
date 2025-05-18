import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';

// Autism Tips
const TIP_IMAGES = [
  '/ghana1.jpg',
  '/ghana2.jpg',
  '/ghana3.jpg',
  '/ghana4.jpg',
  '/ghana5.jpg',
  '/ghana6.jpg',
  '/ghana7.jpg'
];

// Floating tip card component
function TipImageFader() {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [key, setKey] = useState(0);

  useEffect(() => {
    let timeout;

    const getRandomPercent = (min, max) =>
      `${Math.floor(Math.random() * (max - min + 1) + min)}%`;

    const verticalZones = [
      { topMin: 45, topMax: 55 },
      { topMin: 65, topMax: 70 }
    ];
    const horizontalZones = [
      { leftMin: 10, leftMax: 20 },
      { leftMin: 72, leftMax: 80 }
    ];

    const cycle = () => {
      // Pick zones and position
      const zoneV = verticalZones[Math.floor(Math.random() * verticalZones.length)];
      const zoneH = horizontalZones[Math.floor(Math.random() * horizontalZones.length)];
      const top = getRandomPercent(zoneV.topMin, zoneV.topMax);
      const left = getRandomPercent(zoneH.leftMin, zoneH.leftMax);
      setPosition({ top, left });

      // Advance to next image in sequence
      setIndex(prev => (prev + 1) % TIP_IMAGES.length);
      setKey(Date.now()); // force remount

      timeout = setTimeout(cycle, 3000);
    };

    cycle();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <img
      key={key}
      src={TIP_IMAGES[index]}
      alt="Ghana photos"
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        maxWidth: '300px',
        height: 'auto',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        animation: 'fadeInOut 3s ease-in-out',
        transition: 'opacity 1s ease-in-out, top 0.4s, left 0.4s',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}


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

  // Dynamic styles
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
      minHeight: 'calc(100vh - 200px)',
      position: 'relative',
      zIndex: 1
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
      <TipImageFader />

      <div style={staticStyles.container}>
        <h1 style={staticStyles.heading}>Welcome, {user?.displayName || user?.email || 'Parent'} 👋</h1>
        <p style={staticStyles.subheading}>Manage your account and profiles</p>

        <div style={staticStyles.buttonContainer}>
          <Link 
            to="/profile" 
            style={dynamicStyles.primaryButton}
            onMouseEnter={() => handleHover('primary', true)}
            onMouseLeave={() => handleHover('primary', false)}
          >
            👶 Manage Child Profiles
          </Link>

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

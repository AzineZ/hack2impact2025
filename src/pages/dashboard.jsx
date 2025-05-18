import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

export default function Dashboard() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <>
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome, {user?.displayName || user?.email || 'Parent'} 👋</h1>
      <p style={styles.subheading}>Manage your account and profiles</p>

      <div style={styles.buttonContainer}>
        {/* Main Button */}
        <Link to="/profile" style={styles.primaryButton}>
          👶 Manage Child Profiles
        </Link>

        {/* Secondary Buttons */}
        <div style={styles.secondaryGroup}>
          <Link to="/settings" style={styles.secondaryButton}>
            ⚙️ Settings
          </Link>
          <button
            onClick={handleLogout}
            style={{ ...styles.secondaryButton, ...styles.logoutButton }}
          >
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

const styles = {
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
  primaryButton: {
    padding: '1.5rem 2.5rem',
    fontSize: '1.4rem',
    borderRadius: '12px',
    backgroundColor: '#3498db',
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
    gap: '0.5rem'
  },
  secondaryGroup: {
    display: 'flex',
    gap: '1rem',
    width: '100%',
    maxWidth: '400px',
    justifyContent: 'space-between'
  },
  secondaryButton: {
    padding: '1rem 1.5rem',
    fontSize: '1.1rem',
    borderRadius: '8px',
    backgroundColor: '#95a5a6',
    color: 'white',
    textDecoration: 'none',
    width: '48%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  },
  logoutButton: {
    backgroundColor: '#c0392b'
  }
};

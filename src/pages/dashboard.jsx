import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import Navbar from '../components/Navbar';

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
      <h1 style={styles.heading}>Welcome, {user?.email || 'Parent'} 👋</h1>
      <p style={styles.subheading}>Select an option below to get started:</p>

      <div style={styles.grid}>
        <Link to="/profile" style={styles.tile}>
          👶 <span>Manage Child Profiles</span>
        </Link>
        <Link to="/resources" style={styles.tile}>
          📚 <span>Autism Resources</span>
        </Link>
        <Link to="/settings" style={styles.tile}>
          ⚙️ <span>Settings</span>
        </Link>
        <button onClick={handleLogout} style={{ ...styles.tile, backgroundColor: '#e74c3c' }}>
          🚪 <span>Logout</span>
        </button>
      </div>
    </div>
    </>
  );
}

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center'
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  },
  subheading: {
    color: '#666',
    marginBottom: '2rem'
  },
  grid: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    justifyItems: 'center'
  },
  tile: {
    padding: '1.5rem',
    fontSize: '1.2rem',
    borderRadius: '10px',
    backgroundColor: '#3498db',
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none'
  }
};

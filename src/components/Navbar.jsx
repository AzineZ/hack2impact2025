import { Link } from 'react-router-dom';
import headerLogo from '../assets/header-logo.png';
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <header style={{ borderBottom: '1px solid #ddd' }}>
      
      {/* Top Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem 2rem',
        position: 'relative'
      }}>
        {/* Center Logo */}
        <div style={{
          textAlign: 'center',
          flex: '0 0 auto'
        }}>
          <Link to="/dashboard" style={{
            display: 'inline-block',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            ':hover': {
              transform: 'scale(1.05)'
            }
          }}>
            <img
              src={headerLogo}
              alt="Smiles for Speech Logo"
              style={{
                height: '100px',
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
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
        <Link to="/WhatIsAutism" className={styles.navLink}>What is Autism?</Link>
        <Link to="/Information" className={styles.navLink}>Information</Link>
        <Link to="/dashboard" className={styles.navLink}>Dashboard</Link>
        <Link to="/resources" className={styles.navLink}>Resources & Support</Link>
        <Link to="https://www.smilesforspeech.org/" className={styles.navLink}>Official Website</Link>
      </nav>
    </header>
  );
}
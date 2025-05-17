import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #ddd',
      marginTop: '2rem',
      padding: '2rem 1rem',
      backgroundColor: '#fff',
    }}>
      <div style={{
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '500',
        marginBottom: '0.75rem'
      }}>
        <Link to="/about" style={linkStyle}>About Us</Link>
        <span style={separator}>|</span>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <span style={separator}>|</span>
        <Link to="/donate" style={linkStyle}>Donate</Link>
        <span style={separator}>|</span>
        <Link to="/get-involved" style={linkStyle}>Get Involved</Link>
      </div>

      <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
        &copy; {new Date().getFullYear()} Smiles for Speech. All rights reserved.
      </div>
    </footer>
  );
}

// Styles
const linkStyle = {
  textDecoration: 'none',
  color: '#000',
  margin: '0 0.5rem',
};

const separator = {
  margin: '0 0.5rem',
  color: '#bbb'
};

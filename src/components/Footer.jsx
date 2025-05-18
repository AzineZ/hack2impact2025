import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #ddd',
      marginTop: '2rem',
      padding: '2rem 1rem',
      backgroundColor: '#fff',
    }}>
      <div>
      <a className='website-link' href="https://www.smilesforspeech.org/">Official Website</a>
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

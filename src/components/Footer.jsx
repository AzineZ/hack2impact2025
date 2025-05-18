import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #ddd',
      marginTop: '2rem',
      padding: '2rem 1rem',
      backgroundColor: '#fff',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '1rem '}}>
        <a
          href="https://www.smilesforspeech.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#3498db',
            fontWeight: '500',
            ':hover': {
              textDecoration: 'underline'
            }
          }}
        >
          Official Website
        </a>
      </div>

      <div style={{ fontSize: '0.9rem', color: '#666' }}>
        &copy; {new Date().getFullYear()} Smiles for Speech. All rights reserved.
      </div>
    </footer>
  )
}
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
      <div>
      <a className='website-link' href="https://www.smilesforspeech.org/">Official Website</a>
      </div>

      <div style={{ fontSize: '0.9rem', color: '#666' }}>
        &copy; {new Date().getFullYear()} Smiles for Speech. All rights reserved.
      </div>
    </footer>
  )
}
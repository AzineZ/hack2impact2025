export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <a href="https://www.smilesforspeech.org" styles={linkStyle}>
          Official Website
        </a>
        <div style={copyrightStyle}>
          &copy; {new Date().getFullYear()} Smiles for Speech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#fff',
  borderTop: '1px solid #ddd',
  padding: '1rem 0',
  width: '100%',
  position: 'relative',
  bottom: 0,
  marginTop: 'auto'
};

const contentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  textAlign: 'center'
};

const linkStyle = {
  color: '#3498db',
  textDecoration: 'none',
  marginBottom: '0.5rem',
  display: 'block'
};

const copyrightStyle = {
  fontSize: '0.9rem',
  color: '#666',
  marginTopp: '1rem'
};
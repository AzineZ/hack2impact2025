import AuthForm from '../AuthForm';
import '../styles/login.css';
import headerLogo from '../assets/header-logo.png';

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-content">
        <div className="slideshow-background">
          <div className="slide slide1"></div>
          <div className="slide slide2"></div>
          <div className="slide slide3"></div>
          <div className="slide-overlay"></div>
        </div>

        <img
              className='login-header-logo'
              src={headerLogo}
              alt="Smiles for Speech Logo"
              style={{
                height: '170px', // increased from 100px
                maxWidth: '100%',
                objectFit: 'contain',
                marginBottom: '-3rem', // optional spacing below the logo
                marginTop: '2rem'
                
              }}
            />
        <div className="login-card">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}

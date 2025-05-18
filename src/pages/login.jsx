import AuthForm from '../AuthForm';
import '../styles/login.css';

export default function Login() {
  return (
    <div className="login-container">
      <div className="slideshow-background">
        <div className="slide slide1"></div>
        <div className="slide slide2"></div>
        <div className="slide slide3"></div>
        <div className="slide-overlay"></div>
      </div>
      <h1 className="login-title">Smiles for Speech</h1>

      <div className="login-card">
        <AuthForm />
      </div>
    </div>
  );
}

import AuthForm from '../AuthForm';
import '../styles/login.css';

export default function Login() {
  return (
    <div className="login-container">
      <h1 className="login-title">Smiles for Speech</h1>

      <div className="login-card">
        <AuthForm />
      </div>

      
    </div>
  );
}
